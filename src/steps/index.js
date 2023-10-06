import BotMessage from "../ChatComponents/Bot/BotMessage";
import Chatchoices from "../ChatComponents/CustomComponents/Chatchoices";
import YesNo from "../ChatComponents/CustomComponents/YesNo";
import Categories from "../ChatComponents/CustomComponents/Categories";
import Interests from "../ChatComponents/CustomComponents/Interests";

export const categories = [
  { value: "Gaming", label: "Gaming", trigger: "16" },
  { value: "eSIM", label: "eSIM", trigger: "14" },
  { value: "Monetization", label: "Monetization", trigger: "15" },
  { value: "Communication", label: "Communication", trigger: "16" },
  { value: "Fintech", label: "Fintech", trigger: "13" },
  { value: "DCB", label: "DCB", trigger: "14" },
  {
    value: "Core and Digital Services",
    label: "Core and Digital Services",
    trigger: "15",
  },
];

export const choices = [
  { value: "Monty Mobile", label: "Monty Mobile", trigger: "15" },
  { value: "Talk to an expert", label: "Talk to an expert", trigger: "16" },
  { value: "Products & services", label: "Products & services", trigger: "13" },
];

export const chatbotsteps = [
  {
    id: 1,
    message:
      "Hello! This is Houston, Monty Mobile's chatbot and right hand. I'm here to help you out with whatever you need!",
    trigger: 2,
    Component: null,
    await: 1000,
  },
  {
    id: 2,
    message: "Tell me… what can I help you with?",
    Component: null,
    trigger: 3,
    await: 1000,
  },
  {
    id: 3,
    message: null,
    Component: Chatchoices,
    await: 2000,
  },
  {
    id: 4,
    message: null,
    Component: Categories,
    await: 1000,
    finishtrigger:true,
    key:"maincategory"
  },
  {
    id: 5,
    message: null,
    Component: Interests,
    options: [
      { value: "Monty Communication Platform", trigger: "6",finishtrigger:63,key:"product"},
      { value: "SMS Management Platform", trigger: "9",finishtrigger:63,key:"product" },
    ],
    await: 1000,

  },
  {
    id: 6,
    message: "Oh, you've chosen Monty Communication Platform, great! ",
    trigger: 7,
    Component: null,
    await: 1000,
  },
  {
    id: 7,
    message:
      "Streamline all your communications and engage with your customers like never before, as you join every single channel in one inbox. Our Platform provides 20+ channels including WhatsApp Business API, Viber, Instagram, Messenger, along with many others",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 9,
    message:
      "Our SMS Management Platform (B'Pal) allows you to oversee, organize and manage all your messages in 1 single place",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 8,
    message: null,
    Component: YesNo,
    await: 8000,
  },
  {
    id: 10,
    message: null,
    Component: Interests,
    options: [
      { value: "Omni VAS", trigger: "11",finishtrigger:63,key:"product" },
      { value: "Content-Based Suite", trigger: "12" },
      { value: "Gaming Suite", trigger: "15" },
      { value: "AI Lending Suite", trigger: "18" },
      { value: "RBT Digital Suite", trigger: "23" },
      { value: "DCB", trigger: "62", finishtrigger:63,key:"product"},
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 11,
    message:
      "Monty Mobile's Omni-VAS leverages AI for personalized services, churn management, and real-time insights, empowering businesses with the tools they need for growth and success.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 12,
    message: null,
    Component: Interests,
    options: [
      { value: "Music Streaming", trigger: "13",finishtrigger:63,key:"product"},
      { value: "Video on Demand", trigger: "14",finishtrigger:63,key:"product" },
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 13,
    message:
      "Our music streaming app brings everyone's favorite tunes to their fingertips, offering endless playlists, personalized recommendations, and a world of music exploration.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 14,
    message:
      "Deliver a vast library of movies and TV shows directly to your subscribers' screen, letting them watch what they want, when they want, with the tap of a button.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 15,
    message: null,
    Component: Interests,
    options: [
      { value: "eSports", trigger: "16",finishtrigger:63,key:"product" },
      { value: "Cloud Gaming", trigger: "17",finishtrigger:63 ,key:"product"},
    ],
    await: 1000,
    key:"interests"

  },

  {
    id: 16,
    message:
      "With our eSports, gaming becomes a thrilling competitive sport, allowing subscribers to watch top players, intense tournaments, and stay in the know about all things related to gaming.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 17,
    message:
      "Our Cloud Gaming platform allows your subscribers to play the latest video games on any device, instantly streaming high-quality gameplay from the cloud, no downloads required.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 18,
    message: null,
    Component: Interests,
    options: [
      { value: "Airtime Lending", trigger: "19",finishtrigger:63 ,key:"product"},
      { value: "Device & Utility Lending ", trigger: "20",finishtrigger:63 ,key:"product"},
      { value: "Wallet Lending (BNPL)", trigger: "21",finishtrigger:63,key:"product" },
      { value: "eCommerce", trigger: "22",finishtrigger:63,key:"product" },
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 19,
    message:
      "Allow your subscribes to instantly access credit, data, and value-added services when they need them most, making their mobile experience smoother and more convenient.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 20,
    message:
      "Using the power of AI and data analytics, enable your subscribers to get the devices and utilities they need hassle-free, with flexible lending options that make technology and essentials accessible to all.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 21,
    message:
      "Let your subscribers to shop now and pay later with Buy Now, Pay Later (BNPL) financing options, offering flexible payment plans for a seamless shopping experience.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 22,
    message:
      "Your subscribers' one-stop online marketplace for shopping, where they can discover, explore, and buy a wide range of products and services from the comfort of their home.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 23,
    message: null,
    Component: Interests,
    options: [
      { value: "Audio RBT", trigger: "24",finishtrigger:63,key:"product" },
      { value: "Video Ring Back - App Version", trigger: "25",finishtrigger:63 ,key:"product"},
      { value: "Video Ring Back - Network Version", trigger: "26",finishtrigger:63,key:"product" },
      { value: "Text Ring Back Tone", trigger: "27",finishtrigger:63 ,key:"product"},
      { value: "Enterprise RBT", trigger: "28",finishtrigger:63 ,key:"product"},
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 24,
    message:
      "Let your subscribers customize their caller experience with audio ring back tones, adding a personal touch to their phone calls with their favorite tunes and messages.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 25,
    message:
      "Give your subscribers a dynamic calling experience with personalized video ring back tones, allowing them to showcase their individuality and creativity.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 26,
    message:
      "Elevate your subscribers' calling experience with our network-enabled video ring back tones, utilizing cutting-edge VoLTE technology to deliver personalized, high-quality content.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 27,
    message:
      "Have your subscribers get their message across before they even pick up. With Text RBT, they can send pop-ups to their callers and wish them a happy birthday or just let them know they’re in a meeting.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 28,
    message:
      "Boost awareness and establish your company’s image with Enterprise RBT. Covert your employee’s mobile phones into a new advertising channel and make sure your ads reach all your callers.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 29,
    message:
      "Our Direct Carrier Billing solution simplifies online payments via mobile phone bills, offering convenience, security, flexibility, and expanded reach for users, operators, and merchants.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 30,
    message: null,
    Component: Interests,
    options: [
      { value: "International A2P SMS Monetization", trigger: "31",finishtrigger:63,key:"product" },
      { value: "SMS Firewall", trigger: "32",finishtrigger:63,key:"product" },
      { value: "Flash Call Prevention", trigger: "33",finishtrigger:63 ,key:"product"},
      { value: "P2P & P2A SMS", trigger: "34",finishtrigger:63,key:"product" },
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 31,
    message:
      "Identify monetization patterns while leading the way to your transformation and maximize your revenue with our 20+ years of experience and secure messaging traffic on over 500 mobile networks.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 32,
    message:
      "Our advanced in-house developed SMS Firewall - Smartwall - is equipped to block grey routes and leackages, allowing you to secure your revenue streams.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 33,
    message:
      "An in-house developed system that prevents Flash Calls from bypassing legitimate A2P SMS channels and verifying mobile numbers, providing a comprehensive and reliable solution for businesses and consumers alike.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 34,
    message:
      "Increase your two-way connectivity to worldwide operators with our vast experience and deep market knowledge as we manage your P2P & P2A SMS Hubbing.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 35,
    message: null,
    Component: Interests,
    options: [
      { value: "eSIM Instant-Connectivity Platform", trigger: "36",finishtrigger:63 ,key:"product"},
      { value: "eSIM Entitlement Server", trigger: "37",finishtrigger:63 ,key:"product"},
      { value: "eSIM Customer Portal", trigger: "38",finishtrigger:63,key:"product" },
      { value: "Monty eSIM App", trigger: "39",finishtrigger:63,key:"product" },
      { value: "eSIM Reseller Portal", trigger: "40" ,finishtrigger:63,key:"product"},
      { value: "Numberry", trigger: "41",finishtrigger:63,key:"product" },
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 36,
    message:
      "Empower your devices and users with seamless connectivity through our advanced eSIM platform, ensuring instant, reliable communication.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 37,
    message:
      "Enables you to carry the secure provisioning and management of electronic SIM (eSIM) profiles, protecting sensitive user data and preventing unauthorized access.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 38,
    message:
      "Take control of your eSIM experience with our user-friendly portal, managing your device connectivity and settings with ease and convenience.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 39,
    message:
      "Monty eSIM app is your trusty travel companion, offering budget-friendly international data bundles in 190+ countries. No more roaming fees, public Wi-Fi risks, and local SIM card hassles, just seamless connectivity wherever you are!",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 40,
    message:
      "Elevate your business with our dedicated portal for eSIM resellers, streamlining your operations and enabling you to deliver seamless connectivity services to your customers.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 41,
    message:
      "Your virtual number app for enhanced privacy in shopping and app subscriptions, providing you with a secure and convenient way to stay connected while protecting your personal information.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 42,
    message:
      "Our Mobile Operator Management enables us to manage, digitalize and equip MNOs with end-to-end ICT solutions, expert management, acquisition, and AI-driven innovation.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 42,
    message: null,
    Component: Interests,
    options: [
      { value: "Digital Banking", trigger: "44",finishtrigger:63 ,key:"product"},
      { value: "eWallet", trigger: "45",finishtrigger:63 ,key:"product" },
    ],
    await: 1000,
    key:"interests"

  },
  {
    id: 44,
    message:
      "Our Mobile Digital Banking Services (MDBS) revolutionize MNOs' financial offerings with AI-driven features, seamless transactions, money management, and enhanced security, bridging telecom and fintech for a holistic banking.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 45,
    message:
      "Allow your unbanked subscribers to pay bills, make transfers, and manage their money seamlessly right from their smartphones with Monty Mobile’s eWallet.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },

  // Talk to and expert
  {
    id: 46,
    message:
      "That's amazing our experts are really friendly and super fun to chat with! But first, please provide us with your details.",
    Component: null,
    trigger: 47,
    await: 1000,
  },
  {
    id: 47,
    message: "What's your name?",
    Component: null,
    trigger: 48,
    await: 1000,
  },
  {
    id: 48,
    message: null,
    Component: null,
    user: true,
    await: 200,
    key: "name",
    trigger: 49,
  },

  {
    id: 49,
    message: "Nice To Meet You ${previousvalue}",
    trigger: 50,
    Component: null,
    key: "name",
    await: 1000,
  },
  {
    id: 50,
    message: "What's your email address?",
    Component: null,
    trigger: 51,
    await: 1000,
  },
  {
    id: 51,
    message: null,
    Component: null,
    user: true,
    await: 200,
    key: "email",
    trigger: 53,
    validation: (value) => {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (value.match(validRegex)) {
        return true;
      } else {
        return false;
      }
    },
    errortrigger: 52,
  },
  {
    id: 52,
    message: "Your email is invalid, can you please provide me with one that works?",
    Component: null,
    trigger: 51,
    await: 1000,
  },
  {
    id: 53,
    message: "Great, you're almost there. What's your phone number?",
    Component: null,
    trigger: 54,
    await: 1000,
  },
  {
    id: 54,
    message: null,
    Component: null,
    user: true,
    await: 200,
    key: "phone",
    trigger: 55,
  },
  {
    id: 55,
    message: "Could you let me know the name of your company? ",
    Component: null,
    trigger: 56,
    await: 1000,
  },
  {
    id: 56,
    message: null,
    Component: null,
    user: true,
    await: 200,
    key: "company",
    trigger: 57,
  },
  {
    id: 57,
    message: "What's the region you're based in?",
    Component: null,
    trigger: 58,
    await: 1000,
  },
  {
    id: 58,
    message: null,
    Component: Interests,
    options: [
      { value: "Asia",trigger: 59,key:"region"},
      { value: "MENA" ,trigger: 59,key:"region"},
      { value: "Africa" ,trigger: 59,key:"region"},
      { value: "Europe",trigger: 59,key:"region" },
      { value: " North America",trigger: 59,key:"region" },
      { value: "South America",trigger: 59,key:"region" },
      { value: "Australia",trigger: 59,key:"region" },

    ],
    await: 1000,
  },
  {
    id: 59,
    message: "Which country?",
    Component: null,
    trigger: 60,
    await: 1000,
  },
  {
    id: 60,
    message: null,
    Component: null,
    user: true,
    await: 200,
    key: "country",
    trigger: 61,
  },
  {
    id: 61,
    message: "What's the product you're interested in?",
    Component: null,
    trigger: 4,
    await: 1000,
  },
  {
    id: 62,
    message:"Our Direct Carrier Billing solution simplifies online payments via mobile phone bills, offering convenience, security, flexibility, and expanded reach for users, operators, and merchants.",
    trigger: 8,
    Component: null,
    button: { text: "Learn More", url: "" },
    await: 1000,
  },
  {
    id: 63,
    message: "Thank you for sharing your information with us. My colleague will be reaching out to you soon. ",
    Component: null,
    trigger: 65,
    await: 1000,
  },
  {
    id: 64,
    message: "Okay then, it was great chatting with you!",
    Component: null,
    endchat: true,
    await: 1000,
  },
  {
    id: 65,
    message: null,
    Component: YesNo,
    await: 1000,
  },
  {
    id: 66,
    message: "I could go on about us, but I'll keep things short. Monty Mobile is a global fast growing telecommunication company offering innovative technology and communication solutions.",
    Component: null,
    trigger: 67,
    await: 1000,
  },
  {
    id: 67,
    message: null,
    Component: YesNo,
    await: 3000,
    type:"About us"
  },
  //   validation: (value) =>{
  //     if(value.includes("bb")){
  //       return true
  //     }else{
  //       return "not available"
  //     }
  //   },
];

