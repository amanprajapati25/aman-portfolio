import React from "react";
import "./SocialMedia.scss";
import codeforces from "../../assets/images/codeforces.svg";
import codechef from "../../assets/images/codechef.svg";
import leetcode from "../../assets/images/leetcode.svg";
import hackerrank from "../../assets/images/hackerrank.svg";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia({isCenter}) {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className={`social-media-div ${isCenter ? "center" : ""}`}>
      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.codeforces ? (
        <a
          href={socialMediaLinks.codeforces}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="codeforces">
            <img height="100%" width="100%" src={codeforces} alt="codeforces" />
          </div>

          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.leetcode ? (
        <a
          href={socialMediaLinks.leetcode}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="leetcode">
            <img height="100%" width="100%" src={leetcode} alt="leetcode" />
          </div>

          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.codechef ? (
        <a
          href={socialMediaLinks.codechef}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="codechef">
            <img height="100%" width="100%" src={codechef} alt="codechef" />
          </div>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.hackerrank ? (
        <a
          href={socialMediaLinks.hackerrank}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hackerrank">
            <img height="100%" width="100%" src={hackerrank} alt="leetcode" />
          </div>

          <span></span>
        </a>
      ) : null}
    </div>
  );
}
