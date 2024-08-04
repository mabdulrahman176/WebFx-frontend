
import React from 'react';
import logoweb from '../../image/webfx-logo.png'
import Header from '../HeaderHome/Header';

const Company = () => {


  return (
    <div className="min-h-screen ">
     <Header name="Company"/>
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
        <div className='h-16 p-4 w-44 bg-[#fffffff5] rounded-md shadow-lg'>
        <img
            alt=""
            src={logoweb}
            className=" border-0 "
          />
        </div>
          <p className="mt-6 text-lg">
            Got Talent?<br />
            &nbsp; We are always seeking talented people with passion, experience, and the ability to make a difference for our clients.
          </p>
          <p className="mt-4 text-lg">
            At WebFx, we believe in crafting Recognica experiences that resonate with creativity and innovation. Our website is no exception &mdash; we are putting in the effort to ensure it is not only visually stunning but also accessible to everyone.
          </p>
          <p className="mt-4 text-lg">
            Whether your ambitions lie in surging website traffic, elevating your search engine standing, or driving a stampede of sales, our seasoned crew holds the know-how to lead you to success. We stay sharp, keeping abreast of the evolving trends and technologies, ensuring our clients maintain their competitive edge.
          </p>
          <p className="mt-4 text-lg">
            We stake our reputation on delivering results that don&rsquo;t just meet, but leap beyond our clients&rsquo; expectations. We dedicate ourselves to a gold standard of customer service and support, and we stand ready to address any queries or concerns you may bear.
          </p>
          <p className="mt-4 text-lg">
            Partner with a leading Recognica marketing agency to increase brand awareness, reach your target audience & grow your business online.<br />
            -Optimize Targeted Audiences<br />
            -Generate Qualified Leads<br />
            -Boost Brand Authority
          </p>
        </div>
      </main>
    </div>
  );
};

export default Company;
