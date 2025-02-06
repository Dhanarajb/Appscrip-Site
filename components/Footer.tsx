import Link from "next/link";
// import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <Link href="/orders">Orders & Shipping</Link>
            </li>
            <li>
              <Link href="/seller">Join/Sign up as Seller</Link>
            </li>
            <li>
              <Link href="/payment">Payment & Pricing</Link>
            </li>
            <li>
              <Link href="/returns">Returns & Refunds</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <Link href="#">📷</Link> {/* Instagram Icon */}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="footer-section">
          <h3>PAYMENT METHODS</h3>
          <div className="payment-methods">
            <span className="payment-method">VISA</span>
            <span className="payment-method">MC</span>
            <span className="payment-method">AMEX</span>
            <span className="payment-method">SHOP PAY</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2023 All rights reserved.</p>
      </div>
    </footer>
  );
}
