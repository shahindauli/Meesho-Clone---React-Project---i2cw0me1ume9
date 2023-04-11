import React, { useContext, useEffect, useState } from "react";
import Signupimg from '../img/loginimg.webp';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const intSignup = {
        email: '',
        password: '',
        sstatus: false,
        unsstatus: false
    }
    const [signup, setsignup] = useState(intSignup);
    const navg = useNavigate();
    function updateSignupdata(e) {
        let tempobj = {}
        tempobj[e.target.id] = e.target.value;
        setsignup({ ...signup, ...tempobj })
    }
    function valdSignup() {
        if (signup.email === "" || signup.password === "" || signup.password.length < 6) {
            setsignup({
                ...signup,
                unsstatus: true,
                sstatus: false
            })
            return;
        }
        else {
            setsignup({
                ...signup,
                sstatus: true,
                unsstatus: false
            })
            let tempuser = localStorage.getItem('userCred');
            if (tempuser === null) {
                let cc = [signup]
                localStorage.setItem("userCred", JSON.stringify(cc))
                setTimeout(() => {
                    navg("/login")
                }, 1000)
            }
            else {
                let xct = JSON.parse(tempuser)
                let xcv = [...xct, signup]
                // console.log(xcv)
                localStorage.setItem("userCred", JSON.stringify(xcv))
                setTimeout(() => {
                    navg("/login")
                }, 1000)
            }
        }
    }
    useEffect(() => {

    })
    return (
        <>
            <div className="signup-cont">
                <div className="signup-conti">
                    {signup.unsstatus && <div id="unsstatus" style={{ width: '100%', padding: '5px', color: 'red', fontSize: '20px', textAlign: 'center' }}>Signup Unsuccesfull</div>}
                    {signup.sstatus && <div id="sstatus" style={{ width: '100%', padding: '5px', color: 'green', fontSize: '20px', textAlign: 'center' }}>Signup Succesfull</div>}

                    <div className="signupimg">
                        <img className="sgnupimg" src={Signupimg} />
                    </div><br></br>
                    <div className="username">
                        <label htmlFor="email">Email  </label> <br /> <input onChange={updateSignupdata} value={signup.username} className="signupinp" id="email" type={'email'} />
                    </div><br></br>
                    <div className="password">
                        <label htmlFor="password">Password  </label><br /> <input onChange={updateSignupdata} value={signup.password} className="signupinp" id="password" type={'password'} />
                    </div>
                    <br></br>
                    <div><button onClick={valdSignup} className="signupbtn">Sign Up</button></div>
                </div>
            </div>

        </>
    )
}
export default Signup;