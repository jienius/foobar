export default function LandingPage() {
  return (
    <div>
      <div className="bg-cover bg-center flex justify-content items-center" style={{ backgroundImage: "url('/images/hero.png')", height: "500px" }}>
        <div className="w-full mx-10 md:w-1/2">
          <div>
            <h1 className="text-xl font-bold md:text-4xl">
              Find Your Dream Home Today
            </h1>
            <p className="text-sm md:text-lg">
              Discover the best properties, tailored just for you. Explore top listings, meet expert agents, and find your new home.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-white p-10 flex-wrap gap-10">
        <div className="basis-full md:basis-1/2">
          <img src="/images/mission.png" className="bg-black bg-white" />
        </div>
        <div className="basis-full md:basis-1/3 flex items-center">
          <div>
            <h1 className="text-4xl font-bold text-brand-yellow">
              Royal Regal Reality
            </h1>
            <p className="text-lg text-black">
              We aim to make home buying and selling simple, transparent, and enjoyable for everyone involved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-brand-pearl p-10">
        <div className="w-full text-black">
          <h1 className="text-4xl font-bold">Our Listings</h1>
          <p >Browse our collection of stunning properties</p>
        </div>
        <div className="flex items-center w-full my-8">
          <div className="absolute left-4 flex h-10 w-10 rounded-full bg-white border-brand-yellow border-2 text-brand-yellow text-lg items-center justify-center cursor-pointer">
            &lt;
          </div>
          <img src="/images/listings.png" />
          <div className="absolute right-4 flex h-10 w-10 rounded-full bg-white border-brand-yellow border-2 text-brand-yellow text-lg items-center justify-center cursor-pointer">
            &gt;
          </div>
        </div>
        <div />
      </div>
      <div className="w-full bg-white p-10">
        <h1 className="text-4xl font-bold w-full text-brand-yellow text-center">Why Choose Us</h1>
        <div className="flex flex-wrap justify-center justify-items-center">
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-3 min-w-20">
            <img src="images/1.png" className="w-full my-5" />
            <h2 className="text-black font-bold text-center">Expert Agents</h2>
            <p className="text-black text-left">Our agents are experienced and dedicated to finding your perfect home.</p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-3 min-w-20">
            <img src="images/2.png" className="w-full my-5" />
            <h2 className="text-black font-bold text-center">Wide Listings</h2>
            <p className="text-black text-left">We offer a diverse range of properties to suit all needs.</p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-3 min-w-20">
            <img src="images/3.png" className="w-full my-5" />
            <h2 className="text-black font-bold text-center">Market Insights</h2>
            <p className="text-black text-left">Stay informed with the least market trends and data</p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-3 min-w-30">
            <img src="images/4.png" className="w-full my-5" />
            <h2 className="text-black font-bold text-center">Client Support</h2>
            <p className="text-black text-left">We provide continuous support form start to finish</p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-3 min-w-30">
            <img src="images/5.png" className="w-full my-5" />
            <h2 className="text-black font-bold text-center">Easy Process</h2>
            <p className="text-black text-left">Our process is streamlined to make your experience hassle-free</p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-3 min-w-30">
            <img src="images/6.png" className="w-full my-5" />
            <h2 className="text-black font-bold text-center">Trusted Services</h2>
            <p className="text-black text-left">Our reputation si built on trust and client satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
