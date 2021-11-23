import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-page.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .para {
      font-size: 1.5rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Illia Khiriov</span>
              </p>
              <h2 className="about__heading">Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Vinnytsia, Ukraine. I have master's degree of
                  management, so I count every second, know how to improve your
                  productivity and always try to do work ideally.
                  <br />
                  <br />
                  My way as developer started when I studied at English school,
                  where I met people who work with code, they talked alooot
                  about it, this make me interested in it too. Therefore, I went
                  to local courses and started learning Html and CSS. Then I
                  bought JavaScript courses at Udemy and started learning.
                  <br />
                  <br />
                  Nowadays, I watched tons of videos and read hundreds articles
                  about code: how do some things work, how make your code
                  faster, readable and reusable, how to make yourself patient
                  and continue coding even than you are sick of tired about it
                  and so on.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="illia-khirilov-cv.pdf"
                download={true}
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem title="School" items={["School №34, Vinnitsya"]} />
              <AboutInfoItem
                title="University"
                items={["Donetsk National University"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript", "REACT"]}
              />
              <AboutInfoItem
                title="Databases"
                items={["Cassandra", "MongoDB"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItem
                title="Mar 2020 - Jun 2021"
                items={["Application Engineer at Pillar - Solid Offshore"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
