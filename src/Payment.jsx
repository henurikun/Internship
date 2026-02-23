import { useState } from 'react';
import './Payment.css'

function Payment({ amount }) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // 1. Call your OWN backend, not the GCash/PayMongo API directly
            const response = await fetch('https://api.paymongo.com/v1/checkout_sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: amount * 100 }), // Converting to cents
            });

            const data = await response.json();

            if (data.checkout_url) {
                window.location.href = data.checkout_url;
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("Could not initialize GCash payment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='buttons' >
            <button className="buy-button">
                Add to Cart
            </button>
            <button
                onClick={handlePayment}
                disabled={loading}
                className="buy-button"
            >
                {loading ? 'Processing...' : 'Buy Now'}
            </button>
        </div>
    );
}

export default Payment;