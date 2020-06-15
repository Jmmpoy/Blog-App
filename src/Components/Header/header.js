import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { TweenMax, Linear, TimelineLite, Power3 } from "gsap";

export default function Header() {
  // ref de l'element à animer
  let title = useRef(null);
  let socials = useRef(null);

  useEffect(() => {
    console.log(title);
    console.log(socials);
    TweenMax.to(title, 3, {
      css: {
        visibility: "visible",
      },
    });
  }, []);

  return (
    <div className="title-wrapper">
      <Link className="title" to="/">
        <h1 ref={(el) => (title = el)}>News</h1>
        <ul className="socials">
          <li ref={(el) => (socials = el)}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </li>
        </ul>
      </Link>
    </div>
  );
}
