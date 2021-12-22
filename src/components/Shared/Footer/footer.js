import React from "react";
import "./footer.css";

import logo from "../../../assets/img/Logo1.svg";
import facebook from "../../../assets/icon/facebook.svg";
import youtube from "../../../assets/icon/youtube.svg";
import instagram from "../../../assets/icon/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="about col-lg-4 col-md-12 col-sm-12">
            <img alt="" className="logo" src={logo} />
            <span><b>Indosculp</b></span>

            <p>As per the demands of the clients, we provide our range of engineering components in various specifications. 
              Our packaging experts effectively package these items effectively on the basis of their requirements. 
              Due to these reasons, we have achieved a large customer base in India.</p>
            
            <a href="."><img className="social" src={facebook} alt="facebook" /></a>
            <a href="."><img className="social" src={youtube} alt="youtube" /></a>
            <a href="."><img className="social" src={instagram} alt="instagram" /></a>
      
            <p className="Copyright">
              Copyright &copy; 2020, All Right Reserved{" "}
              <a href="https://www.indosculp.com/">Indosculp</a>
            </p>
        </div>


        <div className="sec_div col-lg-8 col-md-12 col-sm-12" >


            <div className="Our_Products col-xl-4 col-md-12 col-sm-12">
            <div><h4>Our Products</h4></div>
              <ul>
                <li>Three Wheeler Gears</li>
                <li>Electical Motor Shaft</li>
                <li>API COUPLINGS</li>
                <li>Compressor Block Wheeler Gears</li>
              </ul>
            </div>


            <div className="Contact_Us col-lg-4 col-md-12 col-sm-12">
              <h4>Contact Us</h4>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>MIDC Area-Vallabhnagar,Ahmednagar 400100, Maharastra.<br/>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>Indosculp@gmail.com <br/>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>0123556677<br/>
              

            </div>


            <div className="Quick_Links col-lg-4 col-md-12 col-sm-12">
              <h4>Quick Links</h4>
              <ul>
                <li><a className="pages" href="/">About</a></li>
                <li><a className="pages" href="/">Companies</a> </li>
                <li><a className="pages" href="/">Industries</a> </li>
                <li><a className="pages" href="/">Product</a></li>
              </ul>
            </div>


        </div>

      </footer>



    </>

  );
};

export default Footer;
