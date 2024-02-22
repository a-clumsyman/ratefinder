import { bizi, builderIcon, home, renew } from "../assets/icons";
import {
  affordabilityCalcImg,
  bmoLogo,
  cmhcCalcImg,
  homeCalcImg,
  homeMortagageService,
  landTransferCalcImg,
  mortgageCalcImg,
  navLogo,
  blankProfile,
  htcLogo,
  rbcLogo,
  tdLogo,
} from "../assets/images";
export const navLinks = [
  { href: "/", label: "Appraise", coming_soon: true },
  { href: "/", label: "Buy/Sell/Rent", coming_soon: false },
  { href: "/", img: navLogo },
  { href: "/", label: "Construction", coming_soon: true },
  { href: "/", label: "Insure", coming_soon: true },
];

export const homeCards = [
  {
    icon: builderIcon,
    title: "I’m builder/developer",
    href: "",
  },
  {
    icon: home,
    title: "I’m buying/refinancing an asset",
    href: "/mortgage-form",
  },
  {
    icon: bizi,
    title: "I’m a builder",
    href: "",
  },
];

export const inquirySections = [
  {
    title: "Mortgages",
    cards: [
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
    ],
  },
  {
    title: "Loans",
    cards: [
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
    ],
  },
  {
    title: "Credit Cards",
    cards: [
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
    ],
  },
  {
    title: "Investing",
    cards: [
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
    ],
  },
  {
    title: "Banking",
    cards: [
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
    ],
  },
  {
    title: "Insurance",
    cards: [
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
      {
        logo: bmoLogo,
        intrest: "4.99%",
        duration: "5-year variable",
        buttonLink: "",
      },
    ],
  },
];

export const services = [
  {
    title: "Private Home Mortgage",
    desc: "Our private home mortgages provide flexible financing options tailored to your unique needs. Whether you're a first-time homebuyer, looking to upgrade to a larger property, or seeking to refinance your existing mortgage, we have the right solution for you.",
    learnMoreLink: "",
    img: homeMortagageService,
  },
  {
    title: "Private Home Construction Mortgage",
    desc: "Our private home mortgages provide flexible financing options tailored to your unique needs. Whether you're a first-time homebuyer, looking to upgrade to a larger property, or seeking to refinance your existing mortgage, we have the right solution for you.",
    learnMoreLink: "",
    img: homeMortagageService,
  },
  {
    title: "Private Commercial Property Mortgage",
    desc: "Our private home mortgages provide flexible financing options tailored to your unique needs. Whether you're a first-time homebuyer, looking to upgrade to a larger property, or seeking to refinance your existing mortgage, we have the right solution for you.",
    learnMoreLink: "",
    img: homeMortagageService,
  },
  {
    title: "Bank Commercial Property Mortgage",
    desc: "Our private home mortgages provide flexible financing options tailored to your unique needs. Whether you're a first-time homebuyer, looking to upgrade to a larger property, or seeking to refinance your existing mortgage, we have the right solution for you.",
    learnMoreLink: "",
    img: homeMortagageService,
  },
];

export const descSections = [
  {
    title: "Compare",
    desc: "Tell us about your mortgage needs and we will show you personalized rates from Canada’s top banks and lenders",
  },
  {
    title: "Apply",
    desc: "Choose the best rate, complete your online application and book a phone appointment with one of our award-winning mortgage experts",
  },
  {
    title: "Close",
    desc: "Upload your documents online and your personal mortgage expert will complete your mortgage from start to finish.",
  },
];

export const calculators = [
  {
    name: "Mortgage Payment Calculator",
    img: mortgageCalcImg,
    bgColor: "#faf5f1",
  },
  {
    name: "Affordability Calculator",
    img: affordabilityCalcImg,
    bgColor: "#fff2f2",
  },
  {
    name: "Land Transfer Tax Calculator",
    img: landTransferCalcImg,
    bgColor: "#ecf3f2",
  },
  {
    name: "CMHC Insurance Calculator",
    img: cmhcCalcImg,
    bgColor: "#f1f3fa",
  },
  {
    name: "Home Value Calculator",
    img: homeCalcImg,
    bgColor: "#faf1f7",
  },
];

export const highlightStats = [
  {
    value: "10 Times",
    name: "Brokerage of the year",
  },
  // {
  //   value: "$20 Billion",
  //   name: "Mortgages Funded",
  // },
  // {
  //   value: "4.9 Rating",
  //   name: "on over 1L+ Reviews",
  // },
  {
  value: "30+ Years",
    name: "Mortgage Experience",
  },
];

export const clients = [
  {
    img: bmoLogo,
    link: "https://www.bmo.com/en-ca/main/personal/",
  },
  {
    img: htcLogo,
    link: "https://hometrust.ca/",
  },
  {
    img: rbcLogo,
    link: "https://www.rbcroyalbank.com/personal.html",
  },
  {
    img: tdLogo,
    link: "https://www.td.com/us/en/personal-banking",
  },
  // {
  //   img: bmoLogo,
  //   link: "",
  // },
];

export const educationCards = [
  {
    title: "Credit Cards",
    desc: "Learn how credit cards work with RateFinder",
    link: "",
    bgColor: "#F8F3EB",
  },
  {
    title: "Loans",
    desc: "Learn how Loans work at RateFinder",
    link: "",
    bgColor: "#F1EBF8",
  },
  {
    title: "Banking",
    desc: "Learn how Banking works with RateFinder",
    link: "",
    bgColor: "#EBF6F8",
  },
  {
    title: "Investment",
    desc: "Learn how Investment works with RateFinder",
    link: "",
    bgColor: "#EEF8EB",
  },
  {
    title: "Insurance",
    desc: "Learn how Insurance works with RateFinder",
    link: "",
    bgColor: "#F8EBEB",
  },
  {
    title: "Money Transfers",
    desc: "Learn how Money Transfers work with RateFinder",
    link: "",
    bgColor: "#F8EEEB",
  },
];

export const rates = [
  {
    title: "Provincial Rates",
    values: [
      "Manitoba mortgage rates",
      "New Foundland mortgage rates",
      "New Brunswick mortgage rates",
    ],
  },
  {
    title: "More Provinces & Territories",
    values: [
      "Nova Scotia mortgage rates",
      "PEI mortgage rates",
      "Saskatchewan mortgage rates",
      "Yukon territory mortgage rates",
    ],
  },
  {
    title: "Provincial Rates",
    values: [
      "1-year fixed rate",
      "2-year fixed rate",
      "3-year fixed rate",
      "4-year fixed rate",
    ],
  },
];

export const footerLinks = [
  {
    title: null,
    links: [
      {
        href: "",
        label: "Buy a home",
      },
      {
        href: "",
        label: "Sell a home",
      },
      {
        href: "",
        label: "Mortgage Calculator",
      },
      {
        href: "",
        label: "Get home inspection",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        href: "",
        label: "Get home inspection",
      },
      {
        href: "",
        label: "About Us",
      },

      {
        href: "",
        label: "Media",
      },
      {
        href: "",
        label: "Careers",
      },
      {
        href: "",
        label: "Partner With Us",
      },
      {
        href: "",
        label: "FAQ's",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { href: "", label: "hello@ratefinder.com" },
      { href: "", label: "123-456-7890" },
    ],
  },
];

export const personTitles = ["Mr.", "Mrs.", "Ms.", "Dr.", "Rev.", "Miss Judge"];

export const streetTypes = [
  "Avenue",
  "Boulevard",
  "Circle",
  "Crescent",
  "Drive",
  "Gate",
  "Highway",
  "Lane",
  "Line",
  "Road",
  "Route",
  "Street",
  "Terrace",
  "Trail",
  "Way",
  "Common",
  "Court",
  "Green",
  "Manor",
  "Place",
  "Rise",
  "Landing",
  "Bay",
  "Close",
  "Link",
  "Mews",
  "View",
  "Quay",
  "Square",
  "Abbey",
  "Acres",
  "Alley",
  "Autoroute",
  "Beach",
  "Bend",
  "Byway",
  "Campus",
  "Cape",
  "Centre",
  "Chase",
  "Circuit",
  "Concession",
  "Corners",
  "Crossing",
  "Cove",
  "Dale",
  "Dell",
  "Diversion",
  "Downs",
  "End",
  "Estates",
  "Expressway",
  "Extension",
  "Farm",
  "Field",
  "Forest",
  "Freeway",
  "Front",
  "Gardens",
  "Glade",
  "Glen",
  "Grounds",
  "Grove",
  "Harbour",
  "Heights",
  "Highlands",
  "Hill",
  "Hollow",
  "Impasse",
  "Island",
  "Key",
  "Knoll",
  "Limits",
  "Lookout",
  "Loop",
  "Mall",
  "Maze",
  "Meadow",
  "Moor",
  "Mount",
  "Mountain",
  "Orchard",
  "Parade",
  "Park",
  "Parkway",
  "Passage",
  "Path",
  "Pathway",
  "Pines",
  "Plaza",
  "Point",
  "Port",
  "Private",
  "Promenade",
  "Range",
  "Ridge",
  "Row",
  "Run",
  "Subdivision",
  "Thicket",
  "Towers",
  "Townline",
  "Turnabout",
  "Vale",
  "Village",
  "Vista",
  "Walk",
  "Wharf",
  "Wood",
  "Heath",
  "Inlet",
  "Plateau",
  "Ramp",
  "Villas",
  "Wynd",
  "Carrefour",
  "Cercle",
  "Chemin",
  "Cour",
  "Cours",
  "Croissant",
  "Esplanade",
  "Parc",
  "Pointe",
  "Quai",
  "Rang",
  "Rue",
  "Ruelle",
  "Sentier",
  "Terrasse",
  "Via",
  "Villas",
  "Voie",
  "Alley",
  "Annex",
  "Arcade",
  "Avenue",
  "Bayou",
  "Beach",
  "Bend",
  "Bluff",
  "Bluffs",
  "Bottom",
  "Boulevard",
  "Branch",
  "Bridge",
  "Brook",
  "Brooks",
  "Burg",
  "Burgs",
  "Bypass",
  "Camp",
  "Canyon",
  "Cape",
  "Causeway",
  "Center",
  "Centers",
  "Circle",
  "Circles",
  "Cliff",
  "Cliffs",
  "Club",
  "Common",
  "Commons",
  "Corner",
  "Corners",
  "Course",
  "Court",
  "Courts",
  "Cove",
  "Coves",
  "Creek",
  "Crescent",
  "Crest",
  "Crossing",
  "Crossroad",
  "Crossroads",
  "Curve",
  "Dale",
  "Dam",
  "Divide",
  "Drive",
  "Drives",
  "Estate",
  "Estates",
  "Expressway",
  "Extension",
  "Extensions",
  "Fall",
  "Falls",
  "Ferry",
  "Field",
  "Fields",
  "Flat",
  "Flats",
  "Ford",
  "Fords",
  "Forest",
  "Forge",
  "Forges",
  "Fork",
  "Forks",
  "Fort",
  "Freeway",
  "Garden",
  "Gardens",
  "Gateway",
  "Glen",
  "Glens",
  "Green",
  "Greens",
  "Grove",
  "Groves",
  "Harbor",
  "Harbors",
  "Haven",
  "Heights",
  "Highway",
  "Hill",
  "Hills",
  "Hollow",
  "Inlet",
  "Island",
  "Islands",
  "Isle",
  "Junction",
  "Junctions",
  "Key",
  "Keys",
  "Knoll",
  "Knolls",
  "Lake",
  "Lakes",
  "Land",
  "Landing",
  "Lane",
  "Light",
  "Lights",
  "Loaf",
  "Lock",
  "Locks",
  "Lodge",
  "Loop",
  "Mall",
  "Manor",
  "Manors",
  "Meadow",
  "Meadows",
  "Mews",
  "Mill",
  "Mills",
  "Mission",
  "Motorway",
  "Mount",
  "Mountain",
  "Mountains",
  "Neck",
  "Orchard",
  "Park",
  "Parks",
  "Parkway",
  "Parkways",
  "Pass",
  "Passage",
  "Path",
  "Pike",
  "Pine",
  "Pines",
  "Place",
  "Plain",
  "Plains",
  "Plaza",
  "Point",
  "Points",
  "Port",
  "Ports",
  "Prairie",
  "Radial",
  "Ramp",
  "Ranch",
  "Rapid",
  "Rapids",
  "Rest",
  "Ridge",
  "Ridges",
  "River",
  "Road",
  "Roads",
  "Route",
  "Row",
  "Rue",
  "Run",
  "Shoal",
  "Shoals",
  "Shore",
  "Shores",
  "Skyway",
  "Spring",
  "Springs",
  "Spur",
  "Spurs",
  "Square",
  "Squares",
  "Station",
  "Stravenue",
  "Stream",
  "Street",
  "Streets",
  "Summit",
  "Terrace",
  "Throughway",
  "Trace",
  "Track",
  "Trafficway",
  "Trail",
  "Trailer",
  "Tunnel",
  "Turnpike",
  "Underpass",
  "Union",
  "Unions",
  "Valley",
  "Valleys",
  "Viaduct",
  "View",
  "Views",
  "Village",
  "Villages",
  "Ville",
  "Vista",
  "Walk",
  "Walks",
  "Wall",
  "Way",
  "Ways",
  "Well",
  "Wells",
];

export const streetDirections = ["N", "S", "E", "W", "NE", "NW", "SE", "SW"];

export const provinces = [
  "Alberta",
  "Columbia",
  "Manitoba",
  "Brunswick",
  "Labrador",
  "Territories",
  "Scotia",
  "Nunavut",
  "Ontario",
  "Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

export const counrties = ["Canada"];

export const occupationTypes = [
  "Management",
  "Clerical",
  "Tradesperson",
  "Retired",
  "Professional",
  "Employed",
  "Other",
];

export const incomeTypes = [
  "Salary",
  "Hourly",
  "Commissions",
  "Pension",
  "Alimony",
  "Other",
];

export const otherInfoTypes = [
  "General",
  "Admin",
  "Source of Business",
  "Decisioning",
  "MI Response",
  "Deal Ingestion",
];

export const loanTypes = ["Approval", "Pre-Approval"];

export const loanPurposes = [
  "Purchase",
  "Refinance",
  "Equity Takeout" /*"Switch/Transfer"*/,
];

export const propertyStatuses = [
  "Vacant",
  "Under Construction",
  "Existing Home",
  "Other",
];

export const mortgageAgent = {
  name: "Sushant Mehta",
  designation: "Agent",
  licence: "M20003023",
  companyName: "GNE Mortgages - The Mortgage Centre",
  brokerageLicence: "10394",
  address: "409 Matheson Blvd E, Mississauga, Ontario, L4H 2H2",
  profilePicture: blankProfile,
};
