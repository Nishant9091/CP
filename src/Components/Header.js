import React from 'react';

const Header = () => {
  return (
    <div className="header1" style={{backgroundColor:"black", color:"white"}}>
      {/* Carousel start */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="text-center m-0" style={{ fontFamily: 'sans-serif' }}>
              MUCH AWAITED RADEON 7800XT/7700XT LIVE IN CUSTOM SECTION. CLICK HERE TO ORDER NOW!.
            </p>
          </div>
          <div className="carousel-item">
            <p className="text-center m-0" style={{ fontFamily: 'sans-serif' }}>
              <span>CHECK OUT OUR COLLABORATIONS TAB. CLICK HERE TO OPEN</span>
            </p>
          </div>
          <div className="carousel-item">
            <p className="text-center m-0" style={{ fontFamily: 'sans-serif' }}>
              GET STARFIELD GAME BUNDLE ON THE PURCHASE OF AMD COMPONENT
            </p>
          </div>
        </div>
      </div>
      {/* Carousel end */}
    </div>
  );
};

export default Header;
