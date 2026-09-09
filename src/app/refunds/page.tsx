import styles from "../legal.module.css";
import { siteConfig } from "@/data/site";

export default function Refunds() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Refund & Cancellation Policy</h1>
      <div className={styles.content}>
        <p>This Refund & Cancellation Policy applies to purchases made on www.alphaxgen.store (“Company”, “we”, “us”).</p>

        <h2>1. Cancellation Policy</h2>
        <ul>
          <li>Orders can be cancelled before dispatch by contacting us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alphaxgen.store">info@alphaxgen.store</a>.</li>
          <li>Once an order has been dispatched, it cannot be cancelled.</li>
        </ul>

        <h2>2. Refund Policy</h2>
        <p>Refunds may be issued in the following cases:</p>
        <ul>
          <li>Damaged or defective product received.</li>
          <li>Incorrect product delivered.</li>
          <li>Order cancelled before dispatch.</li>
        </ul>
        
        <p>To request a refund, please contact us within 48 hours of delivery with:</p>
        <ul>
          <li>Order ID.</li>
          <li>Proof of the issue, such as images or videos, if applicable.</li>
        </ul>

        <h2 style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}>Custom-Printed & Personalized Products</h2>
        <p>Custom-printed, personalized, customized, or made-to-order products are strictly non-returnable and non-refundable, as these products are prepared specifically according to the customer’s requirements.</p>
        
        <p>Refunds or replacements for custom-printed products will only be considered if:</p>
        <ul>
          <li>The product is damaged or defective upon delivery; or</li>
          <li>The wrong product/design was delivered due to an error on our part.</li>
        </ul>
        <p>Any issue must be reported within 48 hours of delivery, along with clear photos or videos and the Order ID.</p>

        <h2>3. Refund Processing</h2>
        <ul>
          <li>Approved refunds will be processed to the original mode of payment.</li>
          <li>Refunds are typically completed within 5–7 working days after approval.</li>
          <li>The Company is not responsible for delays caused by banks, payment gateways, or other payment providers.</li>
        </ul>

        <h2>4. Non-Refundable & Non-Returnable Cases</h2>
        <p>Refunds or returns will not be issued for:</p>
        <ul>
          <li>Change of mind after delivery.</li>
          <li>Custom-printed, personalized, customized, or made-to-order products, except in cases of damage, defect, or an incorrect product caused by us.</li>
          <li>Products damaged due to misuse, negligence, improper handling, or normal wear and tear.</li>
          <li>Minor variations in color, print placement, or appearance that may occur due to differences between screens and actual products.</li>
          <li>Requests raised after the stipulated 48-hour reporting period.</li>
          <li>Any product that has been used, washed, altered, or damaged after delivery.</li>
        </ul>

        <h2>5. Contact for Refunds</h2>
        <p>For refund, cancellation, or product-related concerns, please contact:</p>
        <p>📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alphaxgen.store">info@alphaxgen.store</a></p>
      </div>
    </div>
  );
}
