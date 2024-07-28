export default function LandingPage() {
  return (
    <div>
      <div className="bg-cover bg-center flex justify-content items-center" style={{ backgroundImage: "url('/images/foo.jpg')", height: "500px"}}>
        <div className="w-1/2 mx-10">
          <div>
            <h1 className="text-4xl font-bold">
              Find Your Dream Home Today
            </h1>
            <p className="text-lg">
              Discover the best properties, tailored just for you. Explore top listings, meet expert agents, and find your new home.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-white p-10 space-x-10">
        <div className="flex-1">
          <div className="bg-black rounded-lg h-full" style={{ height: "500px"}}>Img</div>
        </div>
        <div className="flex-1 float-left flex items-center">
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
            <p >Browse out collection of stunning properties</p>
          </div>
          <div className="flex items-center w-full my-8">
            <div className="absolute left-4 flex h-10 w-10 rounded-full bg-white border-brand-yellow border-2 text-brand-yellow text-lg items-center justify-center cursor-pointer"> 
              &lt; 
            </div>
            <div className="bg-black rounded-lg flex-1" style={{ height: "500px"}}>Img</div>
            <div className="absolute right-4 flex h-10 w-10 rounded-full bg-white border-brand-yellow border-2 text-brand-yellow text-lg items-center justify-center cursor-pointer"> 
              &gt; 
            </div>
          </div>
        <div/>
      </div>
      <div className="w-full bg-white p-10">
        <h1 className="text-4xl font-bold w-full text-brand-yellow text-center">Why Choose Us</h1>
        <div className="flex flex-wrap">
          <div className="basis-1/3 p-3">
            <div className="w-full bg-black rounded-lg" style={{ height: "250px"}}>Img</div>
            <h2 className="text-black font-bold text-center">Expert Agents</h2>
            <p className="text-black text-left">Our agents are experienced and dedicated to finding your perfect home.</p>
          </div>
          <div className="basis-1/3 p-3">
            <div className="w-full bg-black rounded-lg" style={{ height: "250px"}}>Img</div>
            <h2 className="text-black font-bold text-center">Wide Listings</h2>
            <p className="text-black text-left">We offer a diverse range of properties to suit all needs.</p>
          </div>
          <div className="basis-1/3 p-3">
            <div className="w-full bg-black rounded-lg" style={{ height: "250px"}}>Img</div>
            <h2 className="text-black font-bold text-center">Market Insights</h2>
            <p className="text-black text-left">Stay informed with the least market trends and data</p>
          </div>
          <div className="basis-1/3 p-3">
            <div className="w-full bg-black rounded-lg" style={{ height: "250px"}}>Img</div>
            <h2 className="text-black font-bold text-center">Client Support</h2>
            <p className="text-black text-left">We provide continuous support form start to finish</p>
          </div>
          <div className="basis-1/3 p-3">
            <div className="w-full bg-black rounded-lg" style={{ height: "250px"}}>Img</div>
            <h2 className="text-black font-bold text-center">Easy Process</h2>
            <p className="text-black text-left">Our process is streamlined to make your experience hassle-free</p>
          </div>
          <div className="basis-1/3 p-3">
            <div className="w-full bg-black rounded-lg" style={{ height: "250px"}}>Img</div>
            <h2 className="text-black font-bold text-center">Trusted Services</h2>
            <p className="text-black text-left">Our reputation si built on trust and client satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
