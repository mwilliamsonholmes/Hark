/* eslint-disable prettier/prettier */
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

const profile_pic = require("./../assets/img/profile-pic.png");
const logo = require("./../assets/img/hark.png");
const background = require("./../assets/img/background2.jpeg");
import "./../assets/scss/App.scss";

import { FaPhoneVolume, FaHome, FaRegHeart, FaUserAlt, FaEnvelope } from 'react-icons/fa';


export default function Locals() {
  return (
    <>
      <nav className="navbar">
      <FaEnvelope size={30} className="mail"/>
        <img className="logo" src={logo.default} alt="Hark Logo"/>
        <img
            className="logged-in"
            src={profile_pic.default}
            alt="Profile Picture"
          />
          
          </nav>
          {/* <h4 className="your-name">Ruby</h4> */}
        <img
          className="background"
          src={background.default}
          alt="background image"
        />
        <body className="main">
        <div className="wrapper">
          <div className="carousel">
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🐳
              </div>
              <div className="carousel__item-body">
                <p className="title">Paul, 35</p>
                <p className="bio">Hey! I'm Paul, I love cupcakes, cycling, and music. Would love to chat and get to know you better.</p>
                <p className="status">Status: Online</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🐬
              </div>
              <div className="carousel__item-body">
                <p className="title">Ricky, 53</p>
                <p className="bio">Hi I'm Ricky. I just moved here from the UK, I have a cat named pickles, and would love to meet someone who can show me around the island!</p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🐟
              </div>
              <div className="carousel__item-body">
                <p className="title">Joey, 37</p>
                <p className="bio">Hey! I'm Joey, I'm an actor (you might recognize me from a few shows :P ), I love pizza, and have 7 siblings! Would love to chat to get to know you better. </p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🛳️
              </div>
              <div className="carousel__item-body">
                <p className="title">Jack, 92</p>
                <p className="bio">Hey! I`m Jack, I almost died from hypothermia in Titanic sink. I tried to protect Rose but she drop the "Heart of the Ocean" into the ocean on purpose! Do you believe it? </p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🍊
              </div>
              <div className="carousel__item-body">
                <p className="title">Samuel, 29</p>
                <p className="bio">Hey! I'm an orange-colored citrus fruit with a green leaf or leaves and stem. Officially depicting a tangerine, a type of mandarin (mikan in Japan). Often used as a garden-variety orange. Either way, a good source of vitamin C. </p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🐵
              </div>
              <div className="carousel__item-body">
                <p className="title">Monkey Face, 28</p>
                <p className="bio">Hey! I'm Monkey Face! I worked in a video clip with Bruno Mars. I'm a cool guy and I love Bananas, Banana Splits you know, this kind of things.</p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🏛️
              </div>
              <div className="carousel__item-body">
                <p className="title">Bernard, 48</p>
                <p className="bio">Hey! I'm Bernard! I like classical music and fancy cafes.</p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  🏛️
              </div>
              <div className="carousel__item-body">
                <p className="title">Joseph, 34</p>
                <p className="bio">Hey! I'm Joseph! I'm desperately lonely! If you need someone to share your feelings call me, but must be right now okay?</p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">
                  ⛷️
              </div>
              <div className="carousel__item-body">
                <p className="title">Nathan, 31</p>
                <p className="bio">Hey! I'm Nathan! I love outdoors activities. Looking for adventure person.</p>
                <p className="status">Status: Offline</p> 
                <button className="btn btn-2"><FaPhoneVolume/> Connect</button>
              </div>
            </div>

          </div>
        </div>
        <div className="footer">
          <h4 className="icon"><FaHome /></h4>
          <h4 className="icon"><FaRegHeart /></h4>
          <h4 className="icon"><FaUserAlt /></h4>
        </div>
        </body>
    </>
  );
}
