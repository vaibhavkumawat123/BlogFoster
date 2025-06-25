import React from "react";
import BlogLottie from "../blog.json";
import Lottie from "lottie-react";
import imgPic from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="home container" id="home">
          <section className="flex">
            <div className="contnet">
              <h3>
                <span>Create </span> a blog
              </h3>
              <p>
                Everyone has a story to tell, and a blog is the perfect way to share yours with the world. Create a beautiful, personalized space that reflects your voice and fits your brand. Whether you're writing to inspire, inform, or connect, your blog will help you reach and engage your audience in a meaningful way.
              </p>
              <a href="#" className="btn-explore">
                Explore now
              </a>
            </div>

            <div className="image">
              {/* <Lottie animationData={BlogLottie}  style={{width:"500px"}}/> */}
              <img src={imgPic} alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Hero;
