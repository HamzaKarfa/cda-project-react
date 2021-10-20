import React from "react";
import "./main.css"

export default function Main() {
  return (
    <section className = "main-section">
        <div className="row">
            <div className="col-md-5 col-12  bg-color-primary d-flex flex-column align-items-start justify-content-between p-5 ">
                <h3 className="text-uppercase text-white">le goût de la passion <br/><span className="bg-white text-dark">dans chaque rayon</span></h3>
                <p>Nos maraîchers, épiciers, fromagers, bouchers, poissonniers, s’engagent tous pour le plaisir de vos assiettes !</p>
                <a href="/nos-engagements/"><button className="text-white btn bg-color-red">Nos engagements</button></a>
            </div>
            <div className="col-7">
              <img
                src="/assets/HP-ENGAGEMENTS.jpg"
                alt="Nos Engagements"
                className="card_img"
                width={800}
                height={350}
              />
            </div>
        </div>
    </section>
  );
}
