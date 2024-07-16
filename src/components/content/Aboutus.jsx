import React from 'react';
import Nav from '../home/Nav';
import Footer from '../home/Footer';

export default function Aboutus() {
  return (
    <div>
      <Nav />

      {/* Hero section */}
      <section className="hero-section flex flex-col items-center justify-center h-screen text-center mb-8">
        <div className="px-4">
          <h6 className="text-lg md:text-xl mb-2 text-orange-500 relative after:content-[''] after:block after:bg-orange-500 after:h-1 after:w-16 after:mx-auto after:mt-1">
            ABOUT US
          </h6>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            United States <br className="block md:hidden" />
            Favourite Baby Store
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Left Content */}
        <div className="max-w-5xl mx-auto md:w-1/2 md:mr-8">
          <h6 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left underline">
            Our Story
          </h6>
          <p className="text-lg text-gray-700 leading-relaxed">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
            one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the Renaissance. The first line
            of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-owner-img.jpg"
            alt="baby"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
