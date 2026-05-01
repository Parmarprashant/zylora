const Razorpay = require('razorpay');
const crypto = require('crypto');

// Helper to get Razorpay instance
const getRazorpayInstance = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.error('RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is missing!');
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret
  });
};

// @desc    Create Razorpay Order
// @route   POST /api/payments/razorpay/order
// @access  Private
exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR' } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        error: 'Amount is required'
      });
    }

    let finalAmount = Math.round(Number(amount) * 100); // Ensure amount is a number and round to paise

    // Razorpay Test Mode has a default limit of ₹5,00,000 (50,000,000 paise) per transaction.
    // If we are in development and the amount exceeds this, cap it for testing purposes.
    if (process.env.NODE_ENV !== 'production' && finalAmount > 50000000) {
      console.warn(`[DEV MODE] Capping Razorpay test amount from ${finalAmount} paise to 50000000 paise (5 Lakhs INR) to bypass test mode limits.`);
      finalAmount = 50000000;
    }

    const options = {
      amount: finalAmount,
      currency,
      receipt: `receipt_${Date.now()}`
    };

    console.log('Creating Razorpay order with options:', options);

    const razorpay = getRazorpayInstance();
    if (!razorpay) {
      return res.status(500).json({
        success: false,
        error: 'Razorpay configuration error'
      });
    }

    const order = await razorpay.orders.create(options);
    console.log('Razorpay order created successfully:', order.id);

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('RAZORPAY ERROR FULL:', JSON.stringify(error, null, 2));
    console.error('RAZORPAY ERROR MESSAGE:', error.message);
    
    let errorMessage = 'Server Error';
    if (error.error && error.error.description) {
      errorMessage = error.error.description;
    } else if (error.description) {
      errorMessage = error.description;
    } else if (error.message) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
};

// @desc    Verify Razorpay Payment
// @route   POST /api/payments/razorpay/verify
// @access  Private
exports.verifyRazorpayPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature 
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const razorpay = getRazorpayInstance();
    if (!razorpay) {
      return res.status(500).json({
        success: false,
        error: 'Razorpay configuration error'
      });
    }

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isSignatureValid = expectedSignature === razorpay_signature;

    if (isSignatureValid) {
      res.status(200).json({
        success: true,
        message: 'Payment verified successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        error: 'Invalid signature'
      });
    }
  } catch (error) {
    console.error('Error verifying Razorpay payment:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server Error'
    });
  }
};
