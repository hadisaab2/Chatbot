import { IoCall } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import MontyLogo from "../../assets/MONTYLOGO.png";
import monetizationimg from "../../assets/monetization.png";
import fintechimg from "../../assets/fintech.png";
import connectivity from "../../assets/connectivity.png";
import digitalization from "../../assets/digitalization.png";
import advancedmessaging from "../../assets/advanced messaging.png";
import mnomanagement from "../../assets/mno management.png";

export const choices = [
  {
    value: "About Us",
    trigger: "66",
    src: null,
    Icon: MdLocalOffer,
  },

  {
    value: "Our Offering",
    trigger: "69",
    src: MontyLogo,
    Icon: null,
  },
  {
    value: "Talk to an expert",
    trigger: "46",
    src: null,
    Icon: IoCall,
  },
];

export const categories = [
  { value: "Advanced Messaging ", trigger: "5", img: advancedmessaging },
  { value: "Digitalization", trigger: "10", img: digitalization },
  { value: "Monetization", trigger: "30", img: monetizationimg },
  { value: "Connectivity", trigger: "35", img: connectivity },
  { value: "MNO Management", trigger: "68",finishtrigger:"63", img: mnomanagement },
  { value: "Fintech", trigger: "42", img: fintechimg },
];
