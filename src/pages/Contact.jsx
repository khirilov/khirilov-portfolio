import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactInfoItem from "../components/ContactInfoItem";
import SectionTitle from "../components/SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function Contact() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+380634385251" />
            <ContactInfoItem icon={<MdEmail />} text="khirilov.il@gmail.com" />
            <ContactInfoItem text="Vinnitsya, Ukraine" />
          </div>
          <div className="right">
            <ContactInfoItem
              icon={<FaTelegramPlane />}
              text="@illushafun"
              link="https://t.me/illushafun"
            />
            <ContactInfoItem
              icon={<FaInstagram />}
              text="@illushafun"
              link="https://www.instagram.com/illushafun/"
            />
            <ContactInfoItem
              icon={<FaLinkedinIn />}
              text="Illia Khirilov"
              link="https://www.linkedin.com/in/illia-khirilov-207ab7195/"
            />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
