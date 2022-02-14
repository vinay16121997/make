import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 90 },
    { skill: "C#", ratingPercentage: 75 },
    { skill: "Tensorflow", ratingPercentage: 70 },
    { skill: "Sklearn", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 50 },
    { skill: "CSS", ratingPercentage: 50 },
    { skill: "Javascript", ratingPercentage: 10 },
  ];

  const projectsDetails = [
    {
      title: "Indian Currency Classifier",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A web-based application which classifies our Currency through Computer vision",
      subHeading: "Technologies Used:  CNN with VGG16",
    },
    {
      title: "Movies Recommender ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A web-based Recommender System based on concept of DL, similar to one deployed in Netflex",
      subHeading:
        "Technologies Used:  Natural Language Processing , Cosine Similarity",
    },
    {
      title: "AI Chat Bot",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Natural Language Processing",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Mumbai"}
        subHeading={"BACHELOR OF ENGINEERING (MECHANICAL ENGINEERING)"}
        fromDate={"2015"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"Higher Secondary Education"}
        subHeading={"Kishanchand Chellaram College of Science"}
        fromDate={"2013"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Sir Cowasjee Jehangir High School, Mumbai"}
        fromDate={"2007"}
        toDate={"2013"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Gear-IT"}
          subHeading={"A Game Developnment Startup which I started, but failed"}
          fromDate={"2019"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Back in 2019 I started Gear-IT under which I created two working 3-D game in Unity you can also find them on Google Playstore
          </span>
        </div>
        <br />
        <b>Learnings</b> 
        <div className="experience-description">
          <span className="resume-description-text">
           - I Was a newbie back then, but being from technical background managed to developed the product but failed to deploy non-technical aspect such as SEO and Advertising
          </span>
          <br />
          <span className="resume-description-text">
            - The most important learning from Gear-IT was Importance of team and being a team player.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Importance of decision making and avoiding multitasking
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
