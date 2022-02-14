import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"My projects"}
        subHeading={"Have a look at my work"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Indian Currency Classifier</h5>
                    <p>CNN--VGG16</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                    A web-based application which classifies our Currency 
                    through Computer vision.It is based on concept of Transfer Learning
                    and state of art algorithm VGG16
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Mask/No Mask Classifier</h5>
                    <p>CNN Computer Vision</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                    A web-based application which classifies wheather you"re 
                     wearing mask or not through Computer vision.It is based on CNN
                    and state of art algorithm VGG16
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Movie Recommender System</h5>
                    <p>NLP, Cosine Similarity</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                    A web-based Recommender System based 
                    similar to one deployed in Netflex. it is based on NLP 
                    and Cosine Similarity
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                  <br></br>
                  <div className="testi-comment">
                    <p>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                    </p>
                    <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                      <button className="highlighted-btn">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
    </div>
  );
}
