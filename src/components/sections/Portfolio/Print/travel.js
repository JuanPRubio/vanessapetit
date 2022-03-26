import "../../../../App.css";

//Images
import img1 from "./Travel/Marriot1.JPG";
import img2 from "./Travel/Marriot2.JPG";
import img3 from "./Travel/Marriot3.JPG";
import img4 from "./Travel/Marriot4.JPG";
import img5 from "./Travel/Marriot.JPG";

//Routes
const route1 = "https://traveler.marriott.com/es/cultura-estilo/tradiciones-detras-de-estos-carnavales-de-latinoamerica/";
const route2 = "https://traveler.marriott.com/es/cultura-estilo/colonia-del-sacramento-en-semana-santa-un-viaje-al-pasado/";
const route3 = "https://traveler.marriott.com/es/cultura-estilo/sitios-cafetaleros-de-guanacaste/";
const route4 = "https://traveler.marriott.com/es/consejos-tendencias/vive-la-salsa-en-cali-al-ritmo-de-los-timbales-y-de-las-trompetas/";
const route5 = "https://traveler.marriott.com/es/cultura-estilo/descubre-el-lado-cultural-de-cali-a-traves-de-estos-cinco-museos-que-debes-visitar/";

export const travel = [
    {
      hexa: "var(--first-color)",
      title: "Marriot Travel",
      description: "Latinamerican Carnivals.",
      image: img1,
      route: route1
    },
    {
      hexa: "var(--first-color-lighter)",
      title: "Marriot Travel",
      description: "Colonia del Sacramento.",
      image: img2,
      route: route2
    },
    {
      hexa: "var(--first-color-alt)",
      title: "Marriot Travel",
      description: "Coffe places at Guanacaste",
      image: img3,
      route: route3
    },
    {
      hexa: "var(--first-color)",
      title: "Marriot Travel",
      description: "Salsa at Cali.",
      image: img4,
      route: route4
    },
    {
      hexa: "var(--first-color-lighter)",
      title: "Marriot Travel",
      description: "Museums at Cali.",
      image: img5,
      route: route5
    }
  ]
  