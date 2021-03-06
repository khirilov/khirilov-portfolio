import {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 5rem;
    position: relative;
    z-index: 1;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    position: relative;
  }
  .hero__info .para {
    max-width: 400px;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.8rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      position: relative;
      top: 0;
      right: 0;
      margin-top: 3rem;
    }
    .hero__info .para {
      max-width: 70vw;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.5rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default function HeroSection() {
  let i = 0;
  let txt = 'A frontend developer from Vinnytsia, Ukraine. My eyes are lighting up on a sweet projects.';
  const [infoText, setInfoText] = useState('');
  let newText = '';
  useEffect(() => {
    typeWriter()
  },[])

  function typeWriter() {
    if (i < txt.length) {
      newText += txt.charAt(i)
      setInfoText(newText)
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, I am</span>
            <span className="hero__name">Illia Khirilov</span>
          </h1>
          <div className="hero__info">
            <PText>
              {infoText}
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
