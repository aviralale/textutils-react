import React from "react";
import PropTypes from "prop-types";
import Color from "./Main";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default function Navbar(props) {

  return (
    <div
      className={`navbar bg-${props.mode} text-${
        props.mode === "zinc-900" ? "slate-200" : "zinc-900"
      } bg-base-100`}
    >
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          {props.title}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <input
        type="checkbox"
        className="toggle toggle-warning"
        onClick={props.toggleMode}
      />
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Default",
};
