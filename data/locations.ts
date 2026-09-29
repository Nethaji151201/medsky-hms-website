export interface CityData {
  name: string;
  slug: string;
  stateName: string;
  stateSlug: string;
  tagline?: string;
  description?: string;
  hospitalCount?: string;
  doctorCount?: string;
  keyStats?: { label: string; value: string }[];
  popularSpecialties?: string[];
  officeAddress?: {
    street: string;
    city: string;
    pincode: string;
  };
}

export interface StateData {
  name: string;
  slug: string;
  capital: string;
  tagline?: string;
  description?: string;
  hospitalCount?: string;
  doctorCount?: string;
  keyStats?: { label: string; value: string }[];
  cities: CityData[];
}

export const LOCATIONS_DATA: StateData[] = [
  {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    capital: "Chennai",
    tagline: "India's Healthcare Capital Powered by Medsky HMS Cloud",
    description:
      "Empowering top multi-specialty hospitals, polyclinics, diagnostic pathology laboratories, and 24/7 retail pharmacies across Tamil Nadu with ABDM & NABH-compliant hospital management software.",
    hospitalCount: "450+",
    doctorCount: "3,200+",
    keyStats: [
      { label: "Hospitals & Clinics", value: "450+" },
      { label: "Active Doctors", value: "3,200+" },
      { label: "Daily Patient Tokens", value: "85,000+" },
      { label: "On-site Engineers", value: "24/7 Support" },
    ],
    cities: [
      {
        name: "Chennai",
        slug: "chennai",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "The Medical Capital of India — Cloud Hospital & Clinic Suite",
        description:
          "Medsky HMS is the trusted hospital management software choice for Chennai's premier multi-specialty healthcare networks, day-care surgical centers, diagnostic chains, and medical stores.",
        hospitalCount: "180+",
        doctorCount: "1,400+",
        officeAddress: {
          street: "NO.6-B/69, Kakkan Nagar, 2nd Cross Street, Adambakkam",
          city: "Chennai",
          pincode: "600088",
        },
        keyStats: [
          { label: "Chennai Facilities", value: "180+" },
          { label: "NABH Accreditations", value: "100% Ready" },
          { label: "Average Queue Time Cut", value: "65%" },
          { label: "Local Support Desk", value: "Adambakkam HQ" },
        ],
        popularSpecialties: [
          "Multi-Specialty Hospitals",
          "Cardiology & Cardiac Surgery",
          "Orthopedics & Joint Replacement",
          "Maternity & Fertility Clinics",
          "Diagnostic & NABL Pathology Labs",
          "Retail & 24/7 Hospital Pharmacies",
        ],
      },
      {
        name: "Salem",
        slug: "salem",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "Dedicated Salem Branch Office — Comprehensive HMS for Western Tamil Nadu",
        description:
          "Medsky's regional branch office in Salem provides on-site implementation, doctor training, and round-the-clock technical support for hospitals, polyclinics, and diagnostic labs across the district.",
        hospitalCount: "95+",
        doctorCount: "680+",
        officeAddress: {
          street: "No.90/13, Harur Main Road, Ayothiyapatinam",
          city: "Salem",
          pincode: "636103",
        },
        keyStats: [
          { label: "Salem Facilities", value: "95+" },
          { label: "Branch Presence", value: "Direct Branch" },
          { label: "Bed Capacity Managed", value: "4,500+ Beds" },
          { label: "Local Support Team", value: "Same-Day Onsite" },
        ],
        popularSpecialties: [
          "Multi-Specialty Hospitals",
          "Trauma & Orthopedic Centers",
          "Pediatric & Maternity Care",
          "Pathology & Bio-Chemistry Labs",
          "Fertility & Day Care Clinics",
          "Surgical Nursing Homes",
        ],
      },
      {
        name: "Coimbatore",
        slug: "coimbatore",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "Healthcare & Industrial Hub of Tamil Nadu Powered by Medsky",
        description:
          "Enabling world-class hospital automation, NABL lab compliance, and smart OPD token management for Coimbatore's acclaimed multi-specialty hospitals and medical centers.",
        hospitalCount: "140+",
        doctorCount: "1,100+",
        keyStats: [
          { label: "Coimbatore Hospitals", value: "140+" },
          { label: "Doctors Empowered", value: "1,100+" },
          { label: "Billing Precision", value: "100% Error-Free" },
          { label: "Local Support", value: "Kongu Region Desk" },
        ],
        popularSpecialties: [
          "Multi-Specialty Tertiary Care",
          "Cardiothoracic Surgery",
          "Oncology Centers",
          "Specialist Orthopedic Care",
          "Diagnostic & Radiology Labs",
        ],
      },
      {
        name: "Madurai",
        slug: "madurai",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "South Tamil Nadu's Premier Healthcare Software Solution",
        description:
          "Transforming hospital administration, emergency care, and specialty clinics in Madurai with paperless medical records, ABDM compliance, and instant billing.",
        hospitalCount: "110+",
        doctorCount: "820+",
        keyStats: [
          { label: "Madurai Network", value: "110+ Facilities" },
          { label: "EMR Adoption", value: "100% ABDM" },
          { label: "Emergency Response", value: "< 1 Min Triage" },
        ],
        popularSpecialties: [
          "Ophthalmology & Eye Hospitals",
          "General Surgery & Laparoscopy",
          "Maternity & Child Health",
          "Diagnostic Centers",
        ],
      },
      {
        name: "Tiruchirappalli",
        slug: "tiruchirappalli",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "Central Tamil Nadu's Leading Healthcare IT Engine",
        description:
          "Driving clinical excellence, patient satisfaction, and financial transparency for multi-specialty hospitals in Trichy (Tiruchirappalli).",
        hospitalCount: "80+",
        doctorCount: "590+",
      },
      {
        name: "Erode",
        slug: "erode",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "Smart Healthcare Automation for Erode District",
        description:
          "Equipping hospitals, fertility centers, and diagnostic pathology labs across Erode with cloud HMS software.",
        hospitalCount: "65+",
        doctorCount: "420+",
      },
      {
        name: "Tiruppur",
        slug: "tiruppur",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "High-Speed Healthcare Software for Tiruppur Industrial Hub",
        description:
          "Managing employee healthcare programs, ESI/cashless hospital billing, and 24/7 pharmacies across Tiruppur.",
        hospitalCount: "70+",
        doctorCount: "480+",
      },
      {
        name: "Vellore",
        slug: "vellore",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "Hospital Software for India's World-Renowned Medical Hub",
        description:
          "Advanced hospital software, clinical research EMR, and pharmacy inventory systems in Vellore.",
        hospitalCount: "75+",
        doctorCount: "620+",
      },
      {
        name: "Thirunelveli",
        slug: "thirunelveli",
        stateName: "Tamil Nadu",
        stateSlug: "tamil-nadu",
        tagline: "Leading Hospital & Diagnostic Software in Thirunelveli",
        description:
          "Complete hospital management software for multi-specialty hospitals, polyclinics, and diagnostic centers across Thirunelveli.",
        hospitalCount: "55+",
        doctorCount: "380+",
      },
    ],
  },
  {
    name: "Karnataka",
    slug: "karnataka",
    capital: "Bengaluru",
    tagline: "Silicon Valley HealthTech — Cloud Hospital & Clinic System",
    description:
      "Powering cutting-edge hospitals, diagnostic pathology chains, and specialty clinics across Bengaluru, Mysuru, Hubballi, and Mangaluru with ABDM-native Medsky HMS.",
    hospitalCount: "380+",
    doctorCount: "2,800+",
    keyStats: [
      { label: "Karnataka Deployments", value: "380+" },
      { label: "Active Doctors", value: "2,800+" },
      { label: "Cloud Uptime", value: "99.99%" },
      { label: "ABDM M1 M2 M3", value: "100% Certified" },
    ],
    cities: [
      {
        name: "Bengaluru",
        slug: "bengaluru",
        stateName: "Karnataka",
        stateSlug: "karnataka",
        tagline: "Next-Gen Cloud HMS for Bengaluru's High-Tech Healthcare Networks",
        description:
          "Medsky HMS delivers cloud hospital information systems, AI-powered prescription tools, and automated TPA claims for hospitals and clinics across Bengaluru.",
        hospitalCount: "220+",
        doctorCount: "1,800+",
        keyStats: [
          { label: "Bengaluru Facilities", value: "220+" },
          { label: "Digital EMRs", value: "3.2M+" },
          { label: "Support Latency", value: "< 15 Mins" },
        ],
      },
      {
        name: "Mysuru",
        slug: "mysuru",
        stateName: "Karnataka",
        stateSlug: "karnataka",
        tagline: "Heritage City Healthcare Digitalization with Medsky HMS",
        description:
          "Providing seamless clinic management, pharmacy billing, and diagnostic automation for hospitals in Mysuru.",
        hospitalCount: "60+",
        doctorCount: "420+",
      },
      {
        name: "Mangaluru",
        slug: "mangaluru",
        stateName: "Karnataka",
        stateSlug: "karnataka",
        tagline: "Coastal Healthcare Excellence Powered by Medsky",
        description:
          "Advanced hospital management software for healthcare institutions and diagnostics in Mangaluru.",
        hospitalCount: "50+",
        doctorCount: "350+",
      },
    ],
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    capital: "Mumbai",
    tagline: "Enterprise Hospital & Diagnostics Software for Maharashtra",
    description:
      "Transforming healthcare operations across Mumbai, Pune, Nagpur, and Nashik with resilient, high-speed, and NABH-compliant Medsky HMS.",
    hospitalCount: "420+",
    doctorCount: "3,100+",
    keyStats: [
      { label: "Maharashtra Facilities", value: "420+" },
      { label: "Daily OPD Inflow", value: "70,000+" },
      { label: "GST Billing Compliance", value: "100%" },
    ],
    cities: [
      {
        name: "Mumbai",
        slug: "mumbai",
        stateName: "Maharashtra",
        stateSlug: "maharashtra",
        tagline: "High-Volume Cloud Hospital & Pharmacy Management System",
        description:
          "Designed for Mumbai's dense healthcare landscape — fast outpatient ticketing, real-time inpatient bed allocation, and 24/7 retail pharmacy FEFO inventory.",
        hospitalCount: "210+",
        doctorCount: "1,600+",
      },
      {
        name: "Pune",
        slug: "pune",
        stateName: "Maharashtra",
        stateSlug: "maharashtra",
        tagline: "Smart Healthcare Management for Pune Hospitals & Clinics",
        description:
          "Empowering multi-specialty hospitals and diagnostic laboratories across Pune with automated analyzer interfacing and paperless EMR.",
        hospitalCount: "130+",
        doctorCount: "950+",
      },
      {
        name: "Nagpur",
        slug: "nagpur",
        stateName: "Maharashtra",
        stateSlug: "maharashtra",
        tagline: "Central India Healthcare IT with Medsky HMS",
        description:
          "Comprehensive clinical and billing automation for hospitals and clinics in Nagpur.",
        hospitalCount: "60+",
        doctorCount: "400+",
      },
    ],
  },
  {
    name: "Telangana",
    slug: "telangana",
    capital: "Hyderabad",
    tagline: "Smart Healthcare IT & Hospital Management in Telangana",
    description:
      "From multi-specialty corporate hospitals to neighborhood diagnostic labs, Medsky HMS delivers unparalleled healthcare workflow automation across Telangana.",
    hospitalCount: "290+",
    doctorCount: "2,100+",
    cities: [
      {
        name: "Hyderabad",
        slug: "hyderabad",
        stateName: "Telangana",
        stateSlug: "telangana",
        tagline: "Cutting-Edge Hospital Information System for Cyberabad & Twin Cities",
        description:
          "Medsky HMS powers high-occupancy hospitals, IVF centers, and pathology networks in Hyderabad with ABDM ABHA integration and instant TPA pre-auth.",
        hospitalCount: "190+",
        doctorCount: "1,450+",
      },
      {
        name: "Warangal",
        slug: "warangal",
        stateName: "Telangana",
        stateSlug: "telangana",
        tagline: "Hospital Software for North Telangana Healthcare Facilities",
        description:
          "Delivering robust OPD/IPD management and pharmacy POS software for clinics and hospitals in Warangal.",
        hospitalCount: "45+",
        doctorCount: "280+",
      },
    ],
  },
  {
    name: "Kerala",
    slug: "kerala",
    capital: "Thiruvananthapuram",
    tagline: "High-Literacy Healthcare Automation for God's Own Country",
    description:
      "Equipping Kerala's celebrated hospitals, Ayurvedic wellness centers, and diagnostic pathology networks with NABH-ready Medsky HMS software.",
    hospitalCount: "240+",
    doctorCount: "1,800+",
    cities: [
      {
        name: "Kochi",
        slug: "kochi",
        stateName: "Kerala",
        stateSlug: "kerala",
        tagline: "Medical Tourism & Multi-Specialty Hospital Software in Kochi",
        description:
          "Supporting international patient workflows, multi-currency billing, and inpatient care in Kochi (Cochin).",
        hospitalCount: "90+",
        doctorCount: "720+",
      },
      {
        name: "Thiruvananthapuram",
        slug: "thiruvananthapuram",
        stateName: "Kerala",
        stateSlug: "kerala",
        tagline: "Capital City Healthcare Digital Transformation",
        description:
          "Cloud hospital management and diagnostic software for clinics and hospitals in Trivandrum.",
        hospitalCount: "70+",
        doctorCount: "550+",
      },
      {
        name: "Kozhikode",
        slug: "kozhikode",
        stateName: "Kerala",
        stateSlug: "kerala",
        tagline: "Malabar Region Premier Hospital Management System",
        description:
          "Advanced clinic EMR, pharmacy billing, and diagnostic LIS software in Calicut (Kozhikode).",
        hospitalCount: "60+",
        doctorCount: "460+",
      },
    ],
  },
  {
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    capital: "Amaravati / Visakhapatnam",
    tagline: "Comprehensive HMS & Clinic Management for Andhra Pradesh",
    description:
      "Driving digital transformation in hospitals across Visakhapatnam, Vijayawada, Guntur, and Tirupati with Medsky HMS.",
    hospitalCount: "210+",
    doctorCount: "1,500+",
    cities: [
      {
        name: "Visakhapatnam",
        slug: "visakhapatnam",
        stateName: "Andhra Pradesh",
        stateSlug: "andhra-pradesh",
        tagline: "Leading Hospital Management Software in Vizag",
        description:
          "Deploying resilient OPD, IPD, and laboratory management software for healthcare institutions in Visakhapatnam.",
        hospitalCount: "80+",
        doctorCount: "600+",
      },
      {
        name: "Vijayawada",
        slug: "vijayawada",
        stateName: "Andhra Pradesh",
        stateSlug: "andhra-pradesh",
        tagline: "Hospital Software for Coastal Andhra Healthcare",
        description:
          "Integrated clinical and billing management for hospitals in Vijayawada.",
        hospitalCount: "65+",
        doctorCount: "480+",
      },
    ],
  },
  {
    name: "Delhi NCR",
    slug: "delhi-ncr",
    capital: "New Delhi",
    tagline: "National Capital Region's Premier Hospital Management Platform",
    description:
      "Enterprise hospital software, clinic token queue systems, and pharmacy inventory control across Delhi, Noida, and Gurugram.",
    hospitalCount: "310+",
    doctorCount: "2,400+",
    cities: [
      {
        name: "New Delhi",
        slug: "new-delhi",
        stateName: "Delhi NCR",
        stateSlug: "delhi-ncr",
        tagline: "ABDM-Compliant Cloud HMS for New Delhi & NCR",
        description:
          "Empowering multi-specialty hospitals, polyclinics, and diagnostic lab chains in New Delhi with Medsky HMS.",
        hospitalCount: "160+",
        doctorCount: "1,300+",
      },
      {
        name: "Noida",
        slug: "noida",
        stateName: "Delhi NCR",
        stateSlug: "delhi-ncr",
        tagline: "High-Tech Healthcare Operations in Noida & Greater Noida",
        description:
          "Next-generation hospital and clinic software for healthcare facilities in Noida.",
        hospitalCount: "75+",
        doctorCount: "580+",
      },
      {
        name: "Gurugram",
        slug: "gurugram",
        stateName: "Delhi NCR",
        stateSlug: "delhi-ncr",
        tagline: "Corporate & Multi-Specialty Hospital Software in Gurgaon",
        description:
          "Enterprise hospital information system for tertiary healthcare centers in Gurugram.",
        hospitalCount: "75+",
        doctorCount: "520+",
      },
    ],
  },
];

// Helper to convert arbitrary slug to capitalized Title
export function unslugify(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Find State
export function getStateData(stateSlug: string): StateData | null {
  const normalized = slugify(stateSlug);
  const found = LOCATIONS_DATA.find((s) => s.slug === normalized || slugify(s.name) === normalized);
  if (found) return found;

  // Fallback dynamic object for unknown state
  const stateName = unslugify(stateSlug);
  return {
    name: stateName,
    slug: normalized,
    capital: "Regional Hub",
    tagline: `Leading Hospital Management Software across ${stateName}`,
    description: `Empowering multi-specialty hospitals, polyclinics, diagnostic pathology laboratories, and 24/7 pharmacies in ${stateName} with ABDM & NABH-compliant Medsky HMS.`,
    hospitalCount: "75+",
    doctorCount: "500+",
    keyStats: [
      { label: "Regional Deployments", value: "75+" },
      { label: "Active Doctors", value: "500+" },
      { label: "ABDM Ready", value: "100%" },
      { label: "Support", value: "24/7 Hotline" },
    ],
    cities: [],
  };
}

// Find City
export function getCityData(stateSlug: string, citySlug: string): { state: StateData; city: CityData } | null {
  const state = getStateData(stateSlug);
  if (!state) return null;

  const normalizedCity = slugify(citySlug);
  const foundCity = state.cities.find(
    (c) => c.slug === normalizedCity || slugify(c.name) === normalizedCity
  );

  if (foundCity) {
    return { state, city: foundCity };
  }

  // Dynamic fallback for unlisted city
  const cityName = unslugify(citySlug);
  const dynamicCity: CityData = {
    name: cityName,
    slug: normalizedCity,
    stateName: state.name,
    stateSlug: state.slug,
    tagline: `Best Hospital, Clinic & Diagnostic Lab Software in ${cityName}, ${state.name}`,
    description: `Medsky HMS is the preferred hospital management software for healthcare facilities, doctors, diagnostic labs, and medical stores across ${cityName}, ${state.name}.`,
    hospitalCount: "40+",
    doctorCount: "250+",
    keyStats: [
      { label: "City Deployments", value: "40+" },
      { label: "Doctor Practice", value: "250+" },
      { label: "NABH / ABDM", value: "100% Ready" },
      { label: "Support", value: "Local Desk" },
    ],
    popularSpecialties: [
      "Multi-Specialty Hospitals",
      "OPD Doctor Consultation",
      "Diagnostic & Pathology Labs",
      "Retail & IPD Pharmacy",
    ],
  };

  return { state, city: dynamicCity };
}

// Return all static params for SSG
export function getAllLocationStaticParams() {
  const stateParams: { state: string }[] = [];
  const cityParams: { state: string; city: string }[] = [];

  for (const state of LOCATIONS_DATA) {
    stateParams.push({ state: state.slug });

    for (const city of state.cities) {
      cityParams.push({ state: state.slug, city: city.slug });
    }
  }

  return { stateParams, cityParams };
}
