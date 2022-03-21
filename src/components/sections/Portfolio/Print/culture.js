import "../../../../App.css";

//Images
import img1 from "./Culture/girls.JPG";
import img2 from "./Culture/boys.JPG";

//Routes
const route1 = "https://www.whattoexpect.com/baby-names/spanish-girls";
const route2 = "https://www.whattoexpect.com/baby-names/spanish-boys";

export const culture = [
    {
      hexa: "var(--first-color)",
      title: "What to expect",
      description: "Spanish baby girls names.",
      image: img1,
      route: route1
    },
    {
      hexa: "var(--first-color-lighter)",
      title: "What to expect",
      description: "Spanish baby boys names.",
      image: img2,
      route: route2
    }
  ]
  