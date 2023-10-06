import { IoCall } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import MontyLogo from "../../assets/MONTYLOGO.png";
import Joystick from "../../assets/joystick.png"
import Money from "../../assets/money.png"
import SmartPhone from "../../assets/smartphone.png"

export const choices = [
  {
    value: "Our Offering",
    trigger: "4",
    src: MontyLogo,
    Icon: null,
  },
  {
    value: "Talk to an expert",
    trigger: "46",
    src: null,
    Icon: IoCall,
  },
  {
    value: "About Us",
    trigger: "66",
    src: null,
    Icon: MdLocalOffer,
  },
];

export const categories = [
  { value: "Advanced Messaging ", trigger: "5",img:Joystick },
  { value: "Digitalization", trigger: "10",img:SmartPhone },
  { value: "Monetization", trigger: "30",img:Money },
  { value: "Connectivity", trigger: "35",img:SmartPhone },
  { value: "MNO Management", trigger: "42",img:SmartPhone },
  { value: "Fintech", trigger: "5",img:SmartPhone }
];
