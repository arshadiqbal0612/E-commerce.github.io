import React from "react";
import { Link } from "react-router-dom";

import{AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillTwitterCircle} from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div
                className="footer-top-data
                d-flex
                gap-30
                align-items-center"
              >
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0  text-white">sign-up for News letter</h2>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="your email address"
                  aria-label="your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">contact us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  {" "}
                  Hno:b-87-ug-1,
                  <br />
                  shalimar garden
                  <br />
                </address>
                <a href=" 7290834503" className=" mt-3 d-block mb-0">
                  7290834503
                </a>
                <a
                  href=" mailto:arshadiqbal06123@gmail.com"
                  className=" text-white mt-2 d-block mb-0"
                >
                  arshadiqbal06123@gmail.com
                </a>

                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href=""> <AiFillInstagram className="fs-1"/> </a>
                  <a href=""> < AiFillLinkedin className="fs-1"/> </a>
                  <a href=""> <AiFillFacebook className="fs-1"/></a>
                  <a href=""><AiFillTwitterCircle className="fs-1"/> </a>
               
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy </Link>
                <Link  to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to="/term-conditions" className=" text-white py-2 mb-1"> Terms &condition</Link>
                <Link className=" text-white py-2 mb-1"> Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">faq</Link>
                <Link className="text-white py-2 mb-1">contact </Link>
                <Link className=" text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className=" text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                &copy; {new Date().getFullYear()};powered by arshad iqbal
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
