import React from "react";

const Material_content = () => {
  return (
    <div className="material-description">
      <h1>Introduction to Astrophysic</h1>
      <div className="modern-underline"></div>

      <p>
        Definition of Astrophysics: An overview of astrophysics as a branch of
        astronomy that deals with the physical properties and processes of
        celestial objects and phenomena. Fundamental Forces: Explanation of the
        four fundamental forces in the universe: gravity, electromagnetism, weak
        nuclear force, and strong nuclear force, and their relevance to
        astrophysical phenomena. Units and Measurements: Introduction to the
        units of measurement commonly used in astrophysics, such as light-years,
        astronomical units (AU), parsecs, and the significance of these
        measurements.
      </p>

      <div className="grid-box">
        <div className="grid-box-content">
          <div className="grid-icon"></div>
          <div classname="grid-name">
            <b>Author :</b>
          </div>
          <div className="grid-value">Neil deGrasse Tyson</div>
        </div>
        <div className="grid-box-content">
          <div className="grid-icon"></div>
          <div classname="grid-name">
            {" "}
            <b>Date Uploaded : </b>
          </div>
          <div className="grid-value">2024-07-02 14:23:54 </div>
        </div>
        <div className="grid-box-content">
          <div className="grid-icon"></div>
          <div classname="grid-name">
            {" "}
            <b>Resources : </b>
          </div>
          <div className="grid-value">“The Universe in a Nutshell”</div>
        </div>
      </div>
    </div>
  );
};

export default Material_content;
