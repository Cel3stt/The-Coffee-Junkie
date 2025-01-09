import React from 'react'
import { Card, CardContent } from '../ui/card'
function TermsAndConditions() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Terms and Conditions</h1>
              <p className="text-muted-foreground">
                Last updated: January 10, 2024
              </p>
            </div>
    
            <Card>
              <CardContent className="p-6">
                <div className="prose prose-gray max-w-none">
                  <p>
                    Welcome to our e-commerce platform. By accessing or using our website, you agree to be bound by the following Terms and Conditions. Please read them carefully before making any purchase.
                  </p>
    
                  <h3 className="text-xl font-semibold mt-8">1. General Information</h3>
                  <p>
                    This e-commerce platform specializes in selling espresso machines, coffee grinders, and coffee tools. These Terms and Conditions govern your use of our services, products, and website.
                  </p>
    
                  <h3 className="text-xl font-semibold mt-8">2. Orders and Purchases</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All orders placed through our website are subject to acceptance and availability.</li>
                    <li>Prices are listed in PHP and include applicable taxes unless otherwise stated.</li>
                    <li>You are responsible for providing accurate and complete information when placing an order.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">3. Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is required in full at the time of purchase.</li>
                    <li>We accept credit cards, debit cards, and digital wallets.</li>
                    <li>Your payment information is securely processed in compliance with industry standards.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">4. No Cancellations</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Once an order has been placed and confirmed, it cannot be canceled under any circumstances.</li>
                    <li>Please review your order carefully before completing your purchase.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">5. Shipping and Delivery</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We use trusted courier services to deliver products to your specified address.</li>
                    <li>Delivery times may vary depending on your location and the availability of the products.</li>
                    <li>We are not responsible for delays caused by shipping providers or unforeseen circumstances.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">6. Return and Refund Policy</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Products can only be returned if they are defective or damaged upon arrival.</li>
                    <li>To request a return, contact our support team within 7 days of receiving your order.</li>
                    <li>Approved returns will be processed with a replacement or store credit. Refunds are not offered.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">7. Warranty</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Certain products, such as espresso machines, may come with manufacturer warranties. Refer to the product description for warranty details.</li>
                    <li>Warranty claims must be directed to the manufacturer unless otherwise specified.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">8. Limitation of Liability</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</li>
                    <li>Our liability is limited to the purchase price of the product in question.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">9. Privacy Policy</h3>
                  <p>
                    We respect your privacy and handle your personal data in accordance with our Privacy Policy. Please review the Privacy Policy for more details.
                  </p>
    
                  <h3 className="text-xl font-semibold mt-8">10. Changes to Terms and Conditions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We reserve the right to update or modify these Terms and Conditions at any time without prior notice.</li>
                    <li>Continued use of our website constitutes acceptance of the updated Terms and Conditions.</li>
                  </ul>
    
                  <h3 className="text-xl font-semibold mt-8">11. Governing Law</h3>
                  <p>
                    These Terms and Conditions are governed by the laws of the Philippines. Any disputes will be resolved in the courts of Metro Manila.
                  </p>
    
                  <h3 className="text-xl font-semibold mt-8">12. Contact Information</h3>
                  <p>
                    If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
                  </p>
                  <ul className="list-none pl-6 space-y-2">
                    <li>Email: support@coffeejunkie.com</li>
                    <li>Phone: +63 123-456-7890</li>
                  </ul>
    
                  <div className="mt-8 p-4 bg-muted rounded-lg">
                    <p className="font-medium">
                      By using our platform, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
}

export default TermsAndConditions
