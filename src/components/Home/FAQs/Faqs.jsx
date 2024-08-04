import React from 'react';
import Header from '../HeaderHome/Header';

const FAQs = () => {


  return (
    <div className="min-h-screen ">
   <Header name="FAQs"/>
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mt-2 text-lg space-y-6">
            <div>
              <strong>FAQ</strong>
            </div>

            <div>
              <strong>What is WebFx all about?</strong>
              <p>
                <em>
                 WebFx is a dedicated service provider that specializes in assisting merchants with the optimization of their data, aiming to significantly enhance the visibility of their products or services and ultimately boost sales.
                </em>
              </p>
            </div>

            <div>
              <strong>How do I start the work?</strong>
              <p>
                <em>
                  Orders are seamlessly assigned to your workbench account by the system, determined by your agent level. The product's price is based on the workbench wallet balance, which remains unless specific events necessitate adjustments. To optimize a product, navigate to "STARTING", click on "START NOW", and then submit your optimization.
                </em>
              </p>
            </div>

            <div>
              <strong>What payment method do the platform accept?</strong>
              <p>
                <em>
                  For security reasons and to ensure agent privacy we prefer the use of cryptocurrency only.
                </em>
              </p>
            </div>

            <div>
              <strong>What is your return/ exchange policy? Do we make actual purchases?</strong>
              <p>
                <em>
                  Our workbench is intricately synchronized with the shopping mall's ERP systems. Orders are treated as return products, and the system facilitates an instant refund while commissioning you for your effort.
                </em>
              </p>
            </div>

            <div>
              <strong>Is my personal information secure on our website?</strong>
              <p>
                <em>
                  We prioritize the security of any private information entrusted to us, despite its minimal nature. To maintain security, we advise against using sensitive details such as birthdays, ID numbers, or addresses as passwords. We only require username and phone number for registration.
                </em>
              </p>
            </div>

            <div>
              <strong>How do I contact customer service?</strong>
              <p>
                <em>
                  For any inquiries, click on the homepages, access your profile, and click "CONTACT US". We recommend reaching out through the website to ensure the most accurate and timely assistance, given potential changes in customer service shifts.
                </em>
              </p>
            </div>

            <div>
              <strong>Can I modify or cancel my order after placing it?</strong>
              <p>
                <em>
                  Optimization products are randomly released by the system and cannot be altered, canceled, or skipped by any user or staff member. This policy aims to prevent bias, unethical conduct, and financial misconduct within the system.
                </em>
              </p>
            </div>

            <div>
              <strong>What is your response time for customer inquiries?</strong>
              <p>
                <em>
                  Due to the high number of users, the most efficient way to contact us is through the "CONTACT US" button on the website.
                </em>
              </p>
            </div>

            <div>
              <strong>How do I terminate my contract, and do I get paid after terminating my contract?</strong>
              <p>
                <em>
                  In the event of the company terminating your contract, it assumes responsibility and ensures payment of wages and earned commissions. However, if you choose to terminate the contract for personal reasons, the company is not obligated to make any payments.
                </em>
              </p>
            </div>

            <div>
              <strong>What results can I expect from using WebFx?</strong>
              <p>
                <em>
                  Clients usually witness a substantial improvement in the visibility of their products or services, leading to increased sales and an overall enhanced market performance. Agents, in turn, receive income and commissions for contributing to the improvement of client sales visibility and brand awareness.
                </em>
              </p>
            </div>

            <div>
              <strong>How do I make deposits?</strong>
              <p>
                <em>
                  To make an advance on our workbench, navigate to the home page and click on the "RECHARGE" button. Contact our customer service for assistance, and upon completing the advance, submit a screenshot of the successful transaction. Ensure that the remitter's name and remittance amount match the information provided.
                </em>
              </p>
            </div>

            <div>
              <strong>How do I pay taxes?</strong>
              <p>We provide Form T4, which you can use to file and pay your income taxes.</p>
            </div>

            <div>
              <strong>How to make withdrawals?</strong>
              <p>
                Initiate a withdrawal by first binding your withdrawal information on the workbench, chosen cryptocurrency deposit address (USDT/USDC/ETH/BTC). Access the withdrawal screen on the home page, enter the desired withdrawal amount and password, and proceed by clicking the "Withdraw" button. The precise arrival time of the withdrawal is contingent upon the cryptocurrency exchange's processing time.
              </p>
            </div>

            <div>
              <strong>What is the minimum amount of deposit and withdrawal?</strong>
              <p>The minimum deposit amount is 10 USDT, with a minimum reset amount of 100 USDT and a minimum withdrawal amount of 100 USDT.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQs;
