import React from "react";

const ContactUs = (props) => {
  return (
    <div className="bg">
      {/* for a margin at the top */}
      <div style={{ height: 50 }}></div>

      <div
        className="mainPanel container"
        
      >
        
        <div style={{marginLeft:50,marginRight:50}}>

        <ul>
            <li>Group email: pdncovid[at]googlegroups[dot]com</li>
            <li>Principle Investigator:<br/>
            Prof. Janaka Ekanayake<br/>
            jbe[at]ee[dot]pdn[dot]ac[dot]lk
            </li>
            <li>Dr. Roshan Godaliyadda: roshangodaliyadda777[at]gmail.com, +94777709035</li>
            <li>Dr. Vijitha Herath: vijitha[at]eng.pdn.ac.lk, +94716732688</li>
          </ul>

        </div>
      </div>
      <div style={{ height: 50 }}></div>
    </div>
  );
};

export default ContactUs;
