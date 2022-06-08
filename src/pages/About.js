import React, { Component } from 'react';
import "./About.css";
import profile_picture from "../assets/profile_picture.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_picture}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ethan Zhang</div>
            <div className="brief_description">
              I am a rising junior at Columbia University studying Computer Science
              and Mathematics.
            </div>
          </div>
        </div>
      </div>
    )
  }
}