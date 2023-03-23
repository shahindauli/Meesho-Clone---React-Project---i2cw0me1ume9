import React from "react";
import Signupimg from '../img/loginimg.webp';
const Signup = () => {

    return (
        <>
            <div className="signup-cont">
                <div className="signup-conti">
                    <div className="signupimg">
                        <img className="sgnupimg" src={Signupimg} />
                    </div><br></br>
                    <div className="username">
                        <label htmlFor="email">Email  </label> <br /> <input className="signupinp" id="email" type={'email'} />
                    </div><br></br>
                    <div className="password">
                        <label htmlFor="password">Password  </label><br /> <input className="signupinp" id="password" type={'password'} />
                    </div>
                    <br></br>
                    <div><button className="signupbtn">Sign Up</button></div>
                </div>
            </div>
        </>
    )
}
export default Signup;