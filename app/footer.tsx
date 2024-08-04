export default function Footer() {
  return (
    <footer className="bg-brand-pearl text-black p-5">
        <div className="w-full text-center">Royal Regal Realty LTD.</div>
            <div className="w-full text-center flex justify-center space-x-5 p-5">
                <div>
                    Services
                </div>
                <div>
                    Listings
                </div>
                <div>
                    Contact
                </div>
            </div>
            <div className="w-11/12 bg-black m-5" style={{ height: "1px"}}/>
            <div className="w-11/12 m-5">
                <div className="text-center w-full lg:inline lg:w-1/2">
                    © 2024 Royal Regal Realty LTD. All rights reserved.
                </div>
                <div className="text-center w-full lginline lg:w-1/2 lg:float-right space-x-5">
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                    <a>Cookies Settings</a>
                </div>
            </div>
    </footer>
  );
}