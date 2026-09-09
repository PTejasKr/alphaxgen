import styles from "../legal.module.css";
import { siteConfig } from "@/data/site";

export default function Terms() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms & Conditions</h1>
      <div className={styles.content}>
        <p>Welcome to AlphaXGen (“AlphaXGen,” “we,” “us,” or “our”). These Terms & Conditions (“Terms”) govern your access to and use of the AlphaXGen website, services, products, and B2B purchasing platform (collectively, the “Services”).</p>
        <p>By accessing our website, creating an account, submitting an enquiry, placing an order, or purchasing products from AlphaXGen, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.</p>

        <h2>1. About AlphaXGen</h2>
        <p>AlphaXGen operates as a B2B clothing and apparel supplier, offering T-shirts, garments, and related clothing products to businesses, retailers, resellers, distributors, brands, wholesalers, and other commercial customers.</p>
        <p>Our products are intended primarily for business and commercial use and not for ordinary consumer retail purchases.</p>

        <h2>2. Eligibility</h2>
        <p>To use our B2B Services or place an order, you must:</p>
        <ul>
          <li>Be at least 18 years old.</li>
          <li>Have the legal authority to enter into a business transaction.</li>
          <li>Provide accurate and complete business and contact information.</li>
          <li>Use the Services for lawful business purposes.</li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>
        <p>AlphaXGen reserves the right to refuse service or cancel an account if the information provided is inaccurate, misleading, or fraudulent.</p>

        <h2>3. B2B Nature of Transactions</h2>
        <p>AlphaXGen primarily deals with business customers. By placing an order, you acknowledge that the products are being purchased for business, resale, commercial use, customization, or other legitimate business purposes.</p>
        <p>Minimum Order Quantity (“MOQ”), pricing, product availability, customization requirements, and other commercial terms may vary by product and order quantity.</p>

        <h2>4. Product Information</h2>
        <p>We make reasonable efforts to ensure that product descriptions, images, specifications, sizes, colors, fabric details, GSM, and other information displayed on our website are accurate.</p>
        <p>However:</p>
        <ul>
          <li>Actual product colors may vary depending on your device or screen.</li>
          <li>Minor variations in measurements, color, fabric texture, stitching, or finishing may occur between production batches.</li>
          <li>Product specifications may be subject to reasonable manufacturing tolerances.</li>
          <li>Images may be for illustration purposes and may not represent the exact appearance of every production batch.</li>
        </ul>
        <p>Such minor variations shall not automatically be considered a manufacturing defect.</p>

        <h2>5. Pricing</h2>
        <p>All prices displayed on the website are subject to change without prior notice unless a written quotation or confirmed purchase order specifies otherwise.</p>
        <p>Depending on the product and transaction, prices may or may not include applicable taxes, GST, shipping, packaging, customization, printing, embroidery, or other charges. The applicable charges will be communicated during the quotation or order confirmation process.</p>
        <p>AlphaXGen reserves the right to correct pricing errors, typographical errors, or other inaccuracies.</p>

        <h2>6. GST and Taxes</h2>
        <p>Applicable taxes, including GST or other statutory charges, may be added to the order as required by applicable law.</p>
        <p>Business customers are responsible for providing correct billing information, GSTIN, shipping details, and other tax-related information where applicable.</p>
        <p>AlphaXGen is not responsible for tax consequences resulting from incorrect information provided by the customer.</p>

        <h2>7. Quotations and Orders</h2>
        <p>A quotation provided by AlphaXGen is not necessarily a final order confirmation unless expressly stated otherwise.</p>
        <p>An order shall be considered confirmed only after AlphaXGen accepts the order and, where applicable, receives the required advance payment or payment confirmation.</p>
        <p>AlphaXGen may decline or modify an order due to:</p>
        <ul>
          <li>Product unavailability.</li>
          <li>Incorrect pricing.</li>
          <li>Insufficient stock or raw materials.</li>
          <li>Failure to meet MOQ requirements.</li>
          <li>Customization or production limitations.</li>
          <li>Payment issues.</li>
          <li>Incomplete or incorrect customer information.</li>
          <li>Other legitimate commercial or operational reasons.</li>
        </ul>

        <h2>8. Payment Terms</h2>
        <p>Payment terms may vary depending on the customer, order size, product, and agreed commercial arrangement.</p>
        <p>AlphaXGen may require:</p>
        <ul>
          <li>Full advance payment;</li>
          <li>Partial advance payment with the balance before dispatch;</li>
          <li>Payment against agreed milestones; or</li>
          <li>Credit terms where specifically approved in writing.</li>
        </ul>
        <p>Orders may not enter production or dispatch until the required payment has been received.</p>
        <p>For approved credit customers, failure to make payment by the agreed due date may result in suspension of further orders or services.</p>

        <h2>9. Customized and Private-Label Orders</h2>
        <p>For customized products, including but not limited to printing, embroidery, labels, tags, packaging, branding, colors, designs, and private-label manufacturing:</p>
        <ul>
          <li>The customer is responsible for providing accurate specifications and artwork.</li>
          <li>Production will be based on the specifications approved by the customer.</li>
          <li>Once production has commenced, cancellation or modification may not be permitted.</li>
          <li>Customized or private-label products may not be eligible for return or refund except where required by applicable law or where AlphaXGen agrees otherwise in writing.</li>
          <li>The customer represents that it has the necessary rights and permissions to use any logos, trademarks, artwork, designs, images, or other materials supplied to AlphaXGen.</li>
        </ul>

        <h2>10. Intellectual Property</h2>
        <p>All content available on the AlphaXGen website, including logos, trademarks, product photographs, graphics, text, designs, videos, software, and other materials, is owned by or licensed to AlphaXGen unless otherwise stated.</p>
        <p>You may not copy, reproduce, modify, distribute, publish, sell, or commercially exploit our website content without prior written permission.</p>
        <p>If you submit artwork, logos, designs, trademarks, or other materials to AlphaXGen for manufacturing or customization, you retain responsibility for ensuring that your use of such materials does not infringe the rights of any third party.</p>
        <p>You agree to indemnify AlphaXGen against claims arising from materials supplied by you that allegedly infringe third-party intellectual property rights.</p>

        <h2>11. Order Cancellation</h2>
        <p>Cancellation requests must be submitted as soon as possible.</p>
        <p>Orders that have already entered production, customization, packing, procurement, or dispatch may not be cancellable.</p>
        <p>For standard products, cancellation may be accepted at AlphaXGen&apos;s discretion before processing or dispatch.</p>
        <p>Any refund, deduction, cancellation fee, or adjustment will depend on the stage of the order and the costs already incurred.</p>

        <h2>12. Shipping and Delivery</h2>
        <p>AlphaXGen will make reasonable efforts to dispatch products within the estimated timeframe communicated at the time of order confirmation.</p>
        <p>Delivery timelines are estimates and may be affected by:</p>
        <ul>
          <li>Manufacturing delays;</li>
          <li>Stock availability;</li>
          <li>Transportation delays;</li>
          <li>Weather or natural events;</li>
          <li>Strikes or labor disruptions;</li>
          <li>Government restrictions;</li>
          <li>Courier or logistics issues;</li>
          <li>Force majeure events; or</li>
          <li>Other circumstances outside AlphaXGen&apos;s reasonable control.</li>
        </ul>
        <p>Unless otherwise agreed in writing, AlphaXGen is not responsible for delays caused by third-party logistics providers.</p>

        <h2>13. Delivery Inspection</h2>
        <p>Customers should inspect the shipment promptly after delivery.</p>
        <p>If the shipment contains visible damage, shortage, incorrect products, or other issues, the customer should notify AlphaXGen as soon as reasonably possible and provide supporting evidence such as photographs, videos, package condition, invoice/order details, and other relevant information.</p>
        <p>Failure to report an issue within a reasonable period may affect the ability to investigate or process the claim.</p>

        <h2>14. Returns and Exchanges</h2>
        <p>Because AlphaXGen operates primarily as a B2B supplier, returns and exchanges are subject to the specific terms agreed for each order.</p>
        <p>Products may generally not be returned solely because of a change of mind, incorrect size selection, unsold inventory, or customer preference.</p>
        <p>Defective, damaged, or incorrectly supplied products may be eligible for replacement, credit, or another appropriate resolution, subject to verification by AlphaXGen.</p>
        <p>Customized, printed, embroidered, private-label, washed, altered, or otherwise specially manufactured products are generally non-returnable unless the issue is attributable to AlphaXGen or applicable law requires otherwise.</p>

        <h2>15. Product Defects</h2>
        <p>If you believe a product has a manufacturing defect, you must notify AlphaXGen with sufficient details and evidence for investigation.</p>
        <p>After reviewing the claim, AlphaXGen may, at its discretion and subject to applicable law:</p>
        <ul>
          <li>Replace the affected products;</li>
          <li>Provide a credit or refund for the affected portion;</li>
          <li>Repair or rectify the issue where reasonably possible; or</li>
          <li>Reject the claim if the issue is caused by misuse, improper handling, normal wear and tear, unauthorized alteration, or other circumstances not attributable to AlphaXGen.</li>
        </ul>

        <h2>16. Customer Responsibilities</h2>
        <p>Customers are responsible for:</p>
        <ul>
          <li>Providing accurate order, billing, GST, and delivery information.</li>
          <li>Reviewing quotations and order confirmations before approval.</li>
          <li>Providing correct sizes, quantities, colors, designs, artwork, and specifications.</li>
          <li>Inspecting goods upon delivery.</li>
          <li>Making payments on time.</li>
          <li>Using the products in accordance with applicable laws.</li>
          <li>Obtaining necessary licenses, permissions, or approvals for resale or customization where applicable.</li>
        </ul>

        <h2>17. Website Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for unlawful purposes.</li>
          <li>Attempt to gain unauthorized access to our systems.</li>
          <li>Interfere with website security or operation.</li>
          <li>Upload malicious software or harmful code.</li>
          <li>Scrape, copy, or reproduce website content without authorization.</li>
          <li>Provide false or misleading information.</li>
          <li>Use another person&apos;s account without authorization.</li>
        </ul>
        <p>AlphaXGen may suspend or terminate access where we reasonably believe these Terms have been violated.</p>

        <h2>18. Account Security</h2>
        <p>If you create an account, you are responsible for keeping your login credentials confidential and for activities conducted through your account.</p>
        <p>You should immediately notify AlphaXGen if you suspect unauthorized access to your account.</p>

        <h2>19. Third-Party Services</h2>
        <p>Our website may use third-party services, including payment gateways, logistics providers, analytics services, communication platforms, or other service providers.</p>
        <p>AlphaXGen is not responsible for interruptions, errors, or failures caused solely by third-party services, although we will make reasonable efforts to assist customers where appropriate.</p>

        <h2>20. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, AlphaXGen shall not be liable for indirect, incidental, special, consequential, or business losses arising from the use of our website or products, including loss of profits, business interruption, loss of customers, or loss of anticipated revenue.</p>
        <p>Where liability cannot legally be excluded, AlphaXGen&apos;s liability will be limited to the extent permitted by applicable law and, where appropriate, to the amount paid for the affected products or order.</p>
        <p>Nothing in these Terms is intended to exclude or limit liability that cannot lawfully be excluded or limited.</p>

        <h2>21. Force Majeure</h2>
        <p>AlphaXGen shall not be responsible for failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including natural disasters, fire, flood, epidemic, war, civil unrest, strikes, transportation disruptions, government actions, supply-chain disruptions, power failures, or other force majeure events.</p>

        <h2>22. Privacy</h2>
        <p>Your use of the website may also be governed by our Privacy Policy, which explains how we collect, use, store, and protect information.</p>
        <p>By using our Services, you acknowledge that you have read and understood the applicable Privacy Policy.</p>

        <h2>23. Confidentiality</h2>
        <p>Where AlphaXGen and a customer exchange confidential commercial information, both parties should take reasonable steps to protect such information from unauthorized disclosure.</p>
        <p>Specific confidentiality obligations may be established through a separate written agreement where required.</p>

        <h2>24. Indemnification</h2>
        <p>You agree to indemnify and hold harmless AlphaXGen, its owners, employees, representatives, and service providers from claims, losses, liabilities, damages, and reasonable expenses arising from:</p>
        <ul>
          <li>Your breach of these Terms;</li>
          <li>Your misuse of our products or website;</li>
          <li>Incorrect information supplied by you;</li>
          <li>Your violation of applicable laws; or</li>
          <li>Intellectual property claims relating to materials, artwork, trademarks, or designs supplied by you.</li>
        </ul>

        <h2>25. Termination</h2>
        <p>AlphaXGen may suspend or terminate your access to the website or B2B Services if you:</p>
        <ul>
          <li>Violate these Terms;</li>
          <li>Fail to make required payments;</li>
          <li>Provide fraudulent or misleading information;</li>
          <li>Misuse the website or Services; or</li>
          <li>Engage in conduct that may harm AlphaXGen, its customers, or its business operations.</li>
        </ul>
        <p>Termination will not affect obligations that accrued before termination, including outstanding payment obligations.</p>

        <h2>26. Governing Law and Dispute Resolution</h2>
        <p>These Terms shall be governed by the laws applicable in India.</p>
        <p>Any dispute arising from or relating to these Terms, products, orders, or Services shall first be attempted to be resolved through good-faith discussions between AlphaXGen and the customer.</p>
        <p>If the dispute cannot be resolved amicably, it shall be subject to the jurisdiction of the courts located in [Insert City, State, India], unless otherwise required by applicable law or agreed in writing.</p>

        <h2>27. Changes to These Terms</h2>
        <p>AlphaXGen may update or modify these Terms from time to time.</p>
        <p>The updated version will be posted on the website with the revised effective date. Continued use of the website or Services after changes are posted may constitute acceptance of the updated Terms.</p>

        <h2>28. Severability</h2>
        <p>If any provision of these Terms is determined to be invalid, illegal, or unenforceable, the remaining provisions shall continue to remain in effect to the extent permitted by law.</p>

        <h2>29. Entire Agreement</h2>
        <p>These Terms, together with applicable quotations, invoices, order confirmations, policies, and written agreements between AlphaXGen and the customer, constitute the agreement governing the relevant transaction.</p>
        <p>Where a specific written commercial agreement conflicts with these Terms, the specific written agreement shall prevail to the extent of the conflict.</p>

        <h2>30. Contact Information</h2>
        <p>For questions regarding these Terms, orders, or B2B services, please contact AlphaXGen through the contact details provided on our website.</p>
        <p>Website: <a href="https://www.alphaxgen.store">www.alphaxgen.store</a><br />
        Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alphaxgen.store">info@alphaxgen.store</a></p>
      </div>
    </div>
  );
}
