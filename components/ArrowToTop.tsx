"use client";
import ArrowTopIcon from "./icons/ArrowTopIcon";

export default function BtnScrollToTop() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <ul className="menu bg-base-200 rounded-box right-4 bottom-16 fixed z-20 opacity-80">
      <li>
        <a onClick={scrollToTop}>
          <ArrowTopIcon />
        </a>
      </li>
    </ul>
  );
}
