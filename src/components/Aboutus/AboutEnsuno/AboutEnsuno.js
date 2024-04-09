import React from 'react'
import './AboutEnsuno.css';
const AboutEnsuno = () => {

  const JoinNow=()=>{
    alert("Join now");
  }
  return (
    <div className="aboutensuno">
      <div className="aboutensuno-section">
        <h3>What is Ensueno learning?</h3>
        <p>Ensueno Learning is a technology-driven educational institution with extensive experience in helping BFSI professionals transform their careers. Our objective is to transform education by enabling students to gain industry-required skills that will help them succeed in their careers. At Ensueno, we have established ourselves as a preferred sourcing, training, and skill development partner for a number of major BFSI companies. We are committed to making our student’s industry-ready so that they can take on the challenges of the workplace and achieve success</p>
        <button onClick={JoinNow}>Join Now</button>
      </div>
      <div className="image-section">
        <img src='/manimage2.webp' alt="Ensueno Learning" className="navbar-logo" height="100px" width="230px" />
      </div>
    </div>
    )
}

export default AboutEnsuno