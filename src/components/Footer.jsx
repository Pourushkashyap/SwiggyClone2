import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Swiggy</h2>
          <p>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>

       
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#">About</a></li>
            <li className="mb-2"><a href="#">Careers</a></li>
            <li className="mb-2"><a href="#">Team</a></li>
            <li className="mb-2"><a href="#">Swiggy One</a></li>
            <li className="mb-2"><a href="#">Swiggy Instamart</a></li>
            <li className="mb-2"><a href="#">Swiggy Genie</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact us</h3>
          <ul>
            <li className="mb-2"><a href="#">Help & Support</a></li>
            <li className="mb-2"><a href="#">Partner with us</a></li>
            <li className="mb-2"><a href="#">Ride with us</a></li>
          </ul>
          <h3 className="text-lg font-bold text-white mb-4 mt-4">Legal</h3>
          <ul>
            <li className="mb-2"><a href="#">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#">Cookie Policy</a></li>
            <li className="mb-2"><a href="#">Privacy Policy</a></li>
            <li className="mb-2"><a href="#">Investor Relations</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold text-white mb-4">We deliver to:</h3>
          <ul>
            <li className="mb-2"><a href="#">Bangalore</a></li>
            <li className="mb-2"><a href="#">Gurgaon</a></li>
            <li className="mb-2"><a href="#">Hyderabad</a></li>
            <li className="mb-2"><a href="#">Delhi</a></li>
            <li className="mb-2"><a href="#">Mumbai</a></li>
            <li className="mb-2"><a href="#">Pune</a></li>
          </ul>
          <div className="mt-4">
            <button className="bg-gray-700 px-4 py-2 text-sm rounded">
              589 cities
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;