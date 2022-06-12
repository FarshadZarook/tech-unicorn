import React from "react";

const footer = () => {
  return (
    <footer>
      <div className='container d-flex flex-wrap align-items-start justify-content-between'>
        <div className='col footer-left'>
          <img className='mb-5' src="images/logo.png" />
          <div className='footer-links'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Condition</a>
          </div>
        </div>
        <div className='col footer-right d-flex align-items-center justify-content-end'>
          <a href="#"><img src="images/icons/yt.png" /></a>
          <a href="#"><img src="images/icons/fb.png" /></a>
          <a href="#"><img src="images/icons/tw.png" /></a>
          <a href="#"><img src="images/icons/ig.png" /></a>
        </div>
      </div>
      <p className='container mt-lg-5 pt-5'>@2020 TanahAir Studio. All rights reserved.</p>
    </footer>
  );
};

export default footer;
