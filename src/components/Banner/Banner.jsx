import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className=" bg-blue-700">
      <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-slate-50 text-2xl">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-primary text-2xl text-slate-50">Shop Now</button>
      <div>
  <img src={bannerImg} alt="" />
  </div>
    </div>
  </div>
  
</div>
    );
};

export default Banner;