import { useContext } from "react";
import { GlobalCtx } from "pages/_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, LinkTo } from "components/generic";
import {
  faSearchLocation,
  faPhone,
  faMailBulk,
  faClock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const {
    global: { contactInfo, socialIcons, bigLogo },
    latest5Articles,
  } = useContext(GlobalCtx) || {};

  return (
    <>
      <div className="container footer">
        <div className="container-top">
          <Logo url={bigLogo?.url} />
          <ContactInfo {...contactInfo} />
          <FooterArticles articles={latest5Articles} />
        </div>
        <div className="container-bottom">
          <p className="copyright">
            © Copyright 2021 EMC HUB . All Rights Reserved.
          </p>
          <ul className="social-links">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin-square"></i>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .container {
          color: white;
          background-color: #1a4060;
          padding: 50px;
          margin-bottom: 5vh;
          font-weight: 400;
        }
        .container-top,
        .container-bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          max-width: 1100px;
          margin: auto;
        }
        .container-top {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding-bottom: 50px;
        }
        .container-bottom {
          padding-top: 50px;
          border-top: 2px solid #204e75;
        }
        .copyright {
          color: #e0e0e0;
        }
      `}</style>
      <style jsx global>{`
        .footer h3 {
          color: white;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 25px;
        }
        .svg-inline--fa {
          color: #1273eb;
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

const Logo = ({ url = "" }) => {
  return (
    <>
      <img src={url} alt="media-banner" />

      <style jsx>{`
        img {
          max-width: 200px;
          max-height: 200px;
          display: block;
        }
      `}</style>
    </>
  );
};

const ContactInfo = ({ title, location, email, mobile = "", openHours }) => {
  return (
    <>
      <section className="contact-info">
        <h3>{title}</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faSearchLocation} />
            <span>{location}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <span>
              <LinkTo href={`mailto:${email}`}>{email}</LinkTo>
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMailBulk} />
            <span>
              <LinkTo href={`tel:${mobile.replace(/ /g, "")}`}>{mobile}</LinkTo>
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} />
            <span>{openHours}</span>
          </li>
        </ul>
      </section>
      <style jsx>{``}</style>
      <style jsx>{`
        .contact-info ul li span {
          color: #e0e0e0;
          padding-left: 45px;
          font-size: 16px;
        }

        .contact-info ul li {
          padding-top: 15px;
        }
      `}</style>
    </>
  );
};

const FooterArticles = ({ articles }) => {
  return (
    <>
      <div className="container">
        <h3>Latest Posts</h3>
        <ul>
          {articles.map(({ slug, image, categories, title, created_at }) => {
            return (
              <li className="article-card">
                <LinkTo as={`/article/${slug}`} href="/article/[slug]">
                  <Image className="footer-article" image={image} />
                </LinkTo>
                <div className="content">
                  <LinkTo as={`/article/${slug}`} href="/article/[slug]">
                    <p>{title}</p>
                  </LinkTo>
                  <div className="date-category">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{created_at}</span>
                    <p>{categories[0]?.name}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        li {
          display: flex;
          flex-direction: row;
          margin-bottom: 10px;
          max-width: 350px;
        }
        p {
          height: calc(100% - 24px);
        }
        .content {
          flex: 1;
        }
        .date-category {
          display: flex;
          flex-direction: row;
        }
        .date-category span {
          flex: 1;
          margin-left: 5px;
        }
      `}</style>
      <style jsx global>{`
        img.footer-article {
          width: 80px;
          height: 70px;
          border-radius: 5px;
          margin-right: 20px;
        }
      `}</style>
    </>
  );
};
