import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {


    return (

        <div className="nav-bar">
            <div className="navitem"><Link className="s" to='/womenethnic'>Women Ethnic</Link></div>
            <div className="navitem"><Link className="s" to='/womenwestern'>Women Western</Link></div>
            <div className="navitem"><Link className="s" to='/men'>Men</Link></div>
            <div className="navitem"><Link className="s" to='/kids'>Kids</Link></div>
            <div className="navitem"><Link className="s" to='/hk'>Home & Kitchen</Link></div>
            <div className="navitem"><Link className="s" to='/bh'>Beauty & Health</Link></div>
            <div className="navitem"><Link className="s" to='/ja'>Jewellery & Accessories</Link></div>
            <div className="navitem"><Link className="s" to='/bf'>Bags & Footwear</Link></div>
            <div className="navitem"><Link className="s" to='/electronics'>Electronics</Link></div>
        </div>

    )
}
export default Menu;