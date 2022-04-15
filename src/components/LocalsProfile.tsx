import React from "react";
import "./../assets/scss/App.scss";
import { FaPhoneVolume } from "react-icons/fa";

export default function LocalsProfile() {
  return (
    <>
      <div className="local-bio">
        <h4 className="name">Ricky</h4>
        <p className="bio">
          Hi I'm Generic. I just do generic things, I have generic stuff
          and would love to meet someone who isn't so generic!{" "}
        </p>
        <p className="status">Status: Offline</p>
        <button className="btn btn-2">
          <FaPhoneVolume /> Connect
        </button>
      </div>
    </>
  );
}
