import JC from "./img/JC.jpg"
import BO from "./img/bo.png";
import CB from "./img/codeb.jpg";
import RI from "./img/Recodeit.jpg";
import EQ from "./img/Eq.jpg";
import DQ from "./img/DQ.jpg";
import DXT from "./img/Dextrous.jpg";
import FQ from "./img/Fandom.jpg";
import CRB from "./img/cerebro.jpg";
import Q2B from "./img/Q2B.jpg";
import WA from "./img/Webapp.jpg";
import PS from "./img/PS.jpg";
import IS from "./img/Insight.jpg";

const technicalEvents = [
  {
    moreInfo: "Event #1 More Info",
    img: JC,
    content: "Just Coding",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #2 More Info",
    img: BO,
    content: "Bugoff",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #3 More Info",
    img: CB,
    content: "Code Buddy",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: RI,
    content: "Recode It",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: EQ,
    content: "Electroquest",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: DQ,
    content: "This is technical event #4",
    registrationLink: "#",
  },

];
const nonTechnicalEvents = [
  {
    moreInfo: "Event #4 More Info",
    img: DXT,
    content: "Dextrous",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: IS,
    content: "Insight",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: FQ,
    content: "Fandom Quiz",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: CRB,
    content: "Cerebro",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: Q2B,
    content: "Quiz 2 Bid",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: WA,
    content: "Webapp",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: PS,
    content: "Photoshop Royale",
    registrationLink: "#",
  }, 
];

const allEvents = [...technicalEvents, ...nonTechnicalEvents];

export { allEvents, technicalEvents, nonTechnicalEvents };
