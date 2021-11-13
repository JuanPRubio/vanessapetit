import "../../App.css";
import Loader from "./Welcome-Test.json";

import Lottie from 'react-lottie';
import { Player } from '@lottiefiles/react-lottie-player';
import React from "react";

function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loader,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <section className="loader section" id="portfolio">
    <div className="loader__container">
      <Lottie
        options={defaultOptions}
        // style={{ height: '90vh', width: '30vw', paddingTop:"0vh 0vw 10vh 0vw" }}
        />
    </div>
    </section>
  );
}

export default Loading;