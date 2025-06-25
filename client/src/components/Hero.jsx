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
                Everyone has a story worth sharing, and the world is waiting to
                hear yours. Whether you're a passionate writer, a creative
                professional, or someone with experiences to inspire others, a
                blog is the perfect platform to express yourself. With our
                tools, you can create a stunning, personalized blog that not
                only reflects your unique voice and style but also aligns
                perfectly with your personal or professional brand. From design
                to functionality, everything is crafted to help you connect,
                engage, and grow your audience. Start telling your story
                today—beautifully and authentically.
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
