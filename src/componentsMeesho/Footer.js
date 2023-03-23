import React from "react";
import Plimg from '../img/playstore-icon-big.png';
import Apleimg from '../img/appstore-icon-big.png';
import fb from '../img/facebook.png';
import insta from '../img/instagram.png';
import ytb from '../img/youtube.png';
import lnkdin from '../img/linkedin.png';
import twtr from '../img/twitter.png';
const Footer = () => {

    return (
        <div className="footer-cont">
            <div className="footer-contm">
                <div className="f1">
                    <h1>Shop Non-Stop on Meesho</h1><br></br>
                    <p>Trusted by more than 1 Crore Indians<br></br>
                        Cash on Delivery | Free Delivery</p><br></br><br></br>
                    <div className="f1img">
                        <div>
                            <img src={Apleimg} width='200' />
                        </div>
                        <div>
                            <img src={Plimg} width='200' />
                        </div>
                    </div>
                </div>
                <div className="f2">
                    <p>Carriers</p><br></br>
                    <p>Become a Supplier</p><br></br>
                    <p>Hall of Fame</p><br></br>

                </div>
                <div className="f3">
                    <p>Legal and Policies</p><br></br>
                    <p>Meesho Tech Blog</p><br></br>
                    <p>Notices and Returns</p><br></br>
                </div>
                <div className="f3">
                    <h2>Reach out to us</h2><br></br>
                    <div className="f3img">
                        <div><img src={fb}></img></div>
                        <div><img src={insta}></img></div>
                        <div><img src={ytb}></img></div>
                        <div><img src={lnkdin}></img></div>
                        <div><img src={twtr}></img></div>
                    </div>
                </div>
                <div className="f4">
                    <h2>Contact us</h2><br></br>
                    <p>Fashnear Technologies Private Limited,<br></br>
                        CIN: U74900KA2015PTC082263
                        06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
                        <br></br>E-mail address: query@meesho.com<br></br>
                        © 2015-2022 Meesho.com</p>


                </div>

            </div>
        </div>
    )
}
export default Footer;