import React, { useEffect } from "react";
import "./project-card.css"; // Import your CSS file with styling and animation
import VanillaTilt from "vanilla-tilt";

function ProjectCard() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cardd"), {
      glare: true,
      reverse: true,
      "max-glare": 0.15,
    });
  }, []);

  return (
    <>
      <div className="more-project">
        <div className="cardd">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">4 days ago</span>
            <h2>Project 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
              repudiandae corrupti temporibus omnis illum maxime quod deserunt
              eligendi dolor
            </p>
          </div>
        </div>
        <div className="cardd rgb">
          <div className="card-image card2"></div>
          <div className="card-text card2">
            <span className="date">1 week ago</span>
            <h2>Project2</h2>
            <p>
              Adipisicing elit. Ducimus, repudiandae corrupti tialeno des ameto
              temporibus omnis provident illum maxime quod. Lorem ipsum dolor
            </p>
          </div>
        </div>
        <div className="cardd">
          <div className="card-image card3"></div>
          <div className="card-text card3">
            <span className="date">3 week ago</span>
            <h2>Project 3</h2>
            <p>
              Repudiandae repudiandae de corrupti amet temporibus omnis si
              provident illum maxime. Ducimus, lorem ipsum dolor adipisicing
              elit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
