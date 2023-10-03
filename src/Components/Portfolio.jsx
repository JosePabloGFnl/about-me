/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/whale.jpg";

const imageAltText = "humpback whale breaching";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Kaban",
    description:
      "Centralization tool for research material, consulting it with the power of AI and LLMs.",
    url: "https://github.com/Special-Unitary-Group/kaban",
  },
  {
    title: "TigerEye",
    description:
      "Analysis and visualization tool for correlations, tendencies and other factors in cities.",
    url: "https://github.com/Special-Unitary-Group/tigereye",
  },
  {
    title: "Prize-Collecting Travelling Salesman Problem",
    description:
      "Solutions on the prize collecting travelling salesman problem with two constructive heuristics and a local search method.",
    url: "https://github.com/JosePabloGFnl/Prize-Collecting-Travelling-Salesman-Problem",
  },
  {
    title: "San Nicolas de los Garza - COVID Cases vs. Complaints per Affected Legal Good",
    description:
      "Investigation of the correlation between monthly COVID-19 cases in San Nicolás de los Garza, Nuevo León, México and complaints according to affected legal goods in the city.",
    url: "https://github.com/JosePabloGFnl/San-Nico-COVID-Cases-Vs-Complaints",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
