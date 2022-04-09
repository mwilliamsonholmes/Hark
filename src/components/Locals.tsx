import * as React from 'react';

const profile_pic = require("./../assets/img/profile-pic.png");
const logo = require("./../assets/img/logo.png");
import "./../assets/scss/App.scss";


export default function Locals() {
  return (
    <>
      <div className="body">
        <img className="logo" src={logo.default} alt="Hark Logo"/>
        <div>
          <img
            className="logged-in"
            src={profile_pic.default}
            alt="Profile Picture"
          />
          <h4 className="your-name">Ruby</h4>
        </div>
        <div className="first-bio">
          <h4 className="name">Paul</h4>
          <p className="bio">Hey! I'm Paul, I love cupcakes, cycling, and music. Would love to chat and get to know you better.</p>
          <p className="status">Status: Online</p>
        </div>
        <div className="second-bio">
          <h4 className="name">Ricky</h4>
          <p className="bio">Hi I'm Ricky. I just moved here from the UK, I have a cat named pickles, and would love to meet someone who can show me around the island! </p>
          <p className="status">Status: Offline</p>
        </div>
        <div className="third-bio">
          <h4 className="name">Joey</h4>
          <p className="bio">Hey! I'm Joey, I'm an actor (you might recognize me from a few shows :P ), I love pizza, and have 7 siblings! Would love to chat to get to know you better. </p>
          <p className="status">Status: Offline</p>
        </div>
        <div className="fourth-bio">
          <h4 className="name">Jack</h4>
          <p className="bio">Hey, I'm Jack. I was born and raised on the island, love to fish, and looking to find my hiking partner. Let's chat! </p>
          <p className="status">Status: Online</p>
        </div>
      </div>
    </>
  );
}
