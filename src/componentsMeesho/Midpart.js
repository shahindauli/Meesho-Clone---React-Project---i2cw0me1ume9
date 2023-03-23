import React from "react";

const Midpart = (props) => {

    return (
        <div className="midpart">
            <div className="midmain">
{props.children}
            </div>
        </div>
    )
}
export default Midpart;