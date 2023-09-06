import React, { useState } from "react";

export default function About() {
    

  return (
    <div className="container" >
        <h2 className="text-xl text-center my-3 md:text-2xl font-bold">About Us</h2>
      <div className="collapse collapse-plus bg-base-200" >
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium" >
          Click to open this one and close others
        </div>
        <div className="collapse-content" >
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200" >
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" >
          Click to open this one and close others
        </div>
        <div className="collapse-content" >
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200" >
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" >
          Click to open this one and close others
        </div>
        <div className="collapse-content" >
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
