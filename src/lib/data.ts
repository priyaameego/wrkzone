export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface City {
  name: string;
  state: string;
  areasCount: number;
  icon: string;
  popularAreas: string[];
}

export interface ServiceAd {
  id: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  categoryIcon: string;
  price: string;
  priceNum: number;
  area: string;
  city: string;
  state: string;
  views: number;
  postedAgo: string;
  featured: boolean;
  description: string;
  fullDetails?: string[];
  provider: {
    name: string;
    initials: string;
    city: string;
    memberSince: string;
    rating: number;
    reviewsCount: number;
    phone: string;
    whatsapp: string;
    verified: boolean;
  };
  highlights: string[];
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  avatar: string;
  color: string;
}

export interface FaqItem {
  icon: string;
  question: string;
  answer: string;
}

export const CATEGORIES: Category[] = [
  { slug: "pest-control", name: "Pest Control", icon: "🐜", description: "Herbal, termite, cockroach, rodent, bed bug & mosquito treatments", popular: true },
  { slug: "plumbing", name: "Plumbing", icon: "🔧", description: "Leak repair, pipe fitting, sanitaryware & water tank installation", popular: true },
  { slug: "electrician", name: "Electrician", icon: "⚡", description: "Wiring, short-circuit repairs, switchboards, MCBs & fans", popular: true },
  { slug: "ac-repair", name: "AC Repair", icon: "❄️", description: "Split/window AC servicing, jet wash, gas refilling & installation", popular: true },
  { slug: "cleaning", name: "Cleaning", icon: "🧹", description: "Full home deep cleaning, kitchen, bathroom & sofa sanitization", popular: true },
  { slug: "painting", name: "Painting", icon: "🎨", description: "Interior & exterior wall painting, waterproofing & textures", popular: true },
  { slug: "carpentry", name: "Carpentry", icon: "🪵", description: "Custom furniture, modular kitchens, door lock repair & polishing", popular: true },
  { slug: "hair-services", name: "Hair Services", icon: "💇", description: "At-home haircuts, hair spa, keratin & styling", popular: false },
  { slug: "massage", name: "Massage", icon: "💆", description: "Therapeutic body massage & relaxation therapy", popular: false },
  { slug: "salon", name: "Salon", icon: "💅", description: "Facials, manicures, pedicures, waxing & bridal glow", popular: false },
  { slug: "movers", name: "Movers", icon: "📦", description: "Household shifting, packing, vehicle transport & office relocation", popular: true },
  { slug: "home-repair", name: "Home Repair", icon: "🏠", description: "General masonry, tiles, ceiling repair & waterproofing", popular: false },
  { slug: "construction", name: "Construction", icon: "🔨", description: "Civil contractors, home renovation & structural building", popular: false },
  { slug: "glass-mirrors", name: "Glass & Mirrors", icon: "🪟", description: "Shower cubicles, sliding glass partitions & designer mirrors", popular: false },
  { slug: "bathroom-fittings", name: "Bathroom Fittings", icon: "🛁", description: "Geysers, showers, modern mixers & drainage solutions", popular: false },
  { slug: "doors-windows", name: "Doors & Windows", icon: "🚪", description: "UPVC & aluminium doors, insect mesh & sliding tracks", popular: false },
  { slug: "stone-work", name: "Stone Work", icon: "🏗️", description: "Marble polishing, granite cutting & stone floor restoration", popular: false },
  { slug: "makeup-artist", name: "Makeup Artist", icon: "💄", description: "Bridal, reception, party makeup & saree draping", popular: false },
  { slug: "car-wash", name: "Car Wash", icon: "🚿", description: "Doorstep foam wash, interior vacuuming & ceramic coating", popular: false },
  { slug: "car-repair", name: "Car Repair", icon: "🚗", description: "Scheduled car maintenance, battery jumping & dent repairs", popular: false },
  { slug: "locksmith", name: "Locksmith", icon: "🔐", description: "Key duplicating, digital locks & emergency unlocking", popular: false },
  { slug: "mobile-repair", name: "Mobile Repair", icon: "📱", description: "Screen replacement, battery, camera & motherboard diagnostics", popular: false },
  { slug: "computer-repair", name: "Computer Repair", icon: "💻", description: "Laptop repairs, Windows/Mac OS install, SSD speedup & recovery", popular: false },
  { slug: "tv-repair", name: "TV Repair", icon: "📺", description: "LED/OLED display fix, sound issues, motherboard & wall mounting", popular: false },
];

export const TOP_CITIES: City[] = [
  { name: "Mumbai", state: "Maharashtra", areasCount: 16, icon: "🏙️", popularAreas: ["Andheri West", "Bandra West", "Powai", "Juhu", "Borivali", "Dadar", "Thane", "Navi Mumbai"] },
  { name: "Delhi", state: "Delhi", areasCount: 16, icon: "🏛️", popularAreas: ["Rohini", "Dwarka", "Saket", "Lajpat Nagar", "Karol Bagh", "Vasant Kunj", "Connaught Place", "Janakpuri"] },
  { name: "Bangalore", state: "Karnataka", areasCount: 16, icon: "🌴", popularAreas: ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "Electronic City", "Jayanagar", "Marathahalli", "BTM Layout"] },
  { name: "Hyderabad", state: "Telangana", areasCount: 14, icon: "💎", popularAreas: ["Gachibowli", "Hitec City", "Banjara Hills", "Jubilee Hills", "Kukatpally", "Secunderabad", "Madhapur", "Kondapur"] },
  { name: "Chennai", state: "Tamil Nadu", areasCount: 14, icon: "🎭", popularAreas: ["T. Nagar", "Adyar", "Velachery", "Anna Nagar", "Mylapore", "Tambaram", "Besant Nagar", "Nungambakkam"] },
  { name: "Kolkata", state: "West Bengal", areasCount: 10, icon: "🏰", popularAreas: ["Salt Lake", "Park Street", "New Town", "Ballygunge", "Behala", "Howrah", "Alipore", "Dum Dum"] },
  { name: "Pune", state: "Maharashtra", areasCount: 12, icon: "🎓", popularAreas: ["Kothrud", "Viman Nagar", "Hinjewadi", "Baner", "Wakad", "Koregaon Park", "Aundh", "Hadapsar"] },
  { name: "Ahmedabad", state: "Gujarat", areasCount: 11, icon: "🌻", popularAreas: ["Satellite", "Bodakdev", "Vastrapur", "Navrangpura", "SG Highway", "Maninagar", "Prahlad Nagar"] },
  { name: "Jaipur", state: "Rajasthan", areasCount: 8, icon: "👑", popularAreas: ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C Scheme", "Raja Park", "Tonk Road"] },
  { name: "Surat", state: "Gujarat", areasCount: 8, icon: "💎", popularAreas: ["Adajan", "Vesu", "Piplod", "Varachha", "Katargam", "City Light"] },
  { name: "Lucknow", state: "Uttar Pradesh", areasCount: 8, icon: "🕌", popularAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Mahanagar", "Vikas Nagar"] },
  { name: "Kochi", state: "Kerala", areasCount: 8, icon: "🥥", popularAreas: ["Kakkanad", "Edappally", "Marine Drive", "Fort Kochi", "Palarivattom", "Vyttila"] },
  { name: "Goa", state: "Goa", areasCount: 6, icon: "🏖️", popularAreas: ["Panaji", "Margao", "Calangute", "Candolim", "Mapusa", "Vasco"] },
  { name: "Indore", state: "Madhya Pradesh", areasCount: 7, icon: "🍽️", popularAreas: ["Vijay Nagar", "Palasia", "Rajwada", "Bhanwar Kuan", "AB Road"] },
  { name: "Bhopal", state: "Madhya Pradesh", areasCount: 7, icon: "🌊", popularAreas: ["MP Nagar", "Arera Colony", "Kolar Road", "Shahpura", "TT Nagar"] },
  { name: "Patna", state: "Bihar", areasCount: 6, icon: "📜", popularAreas: ["Boring Road", "Kankarbagh", "Bailey Road", "Patliputra", "Rajendra Nagar"] },
  { name: "Vadodara", state: "Gujarat", areasCount: 6, icon: "🏛️", popularAreas: ["Alkapuri", "Manjalpur", "Karelibaug", "Gotri", "Sayajigunj"] },
  { name: "Coimbatore", state: "Tamil Nadu", areasCount: 6, icon: "🏭", popularAreas: ["RS Puram", "Gandhipuram", "Peelamedu", "Saibaba Colony", "Saravanampatti"] },
  { name: "Nagpur", state: "Maharashtra", areasCount: 6, icon: "🍊", popularAreas: ["Dharampeth", "Ramdaspeth", "Sitabuldi", "Sadar", "Wardha Road"] },
  { name: "Thiruvananthapuram", state: "Kerala", areasCount: 5, icon: "🌴", popularAreas: ["Kowdiar", "Sasthamangalam", "Kazhakoottam", "Technopark", "Vellayambalam"] },
  { name: "Chandigarh", state: "Chandigarh", areasCount: 5, icon: "🌸", popularAreas: ["Sector 17", "Sector 35", "Sector 22", "Manimajra", "Industrial Area"] },
  { name: "Mohali", state: "Punjab", areasCount: 5, icon: "⚡", popularAreas: ["Phase 7", "Phase 5", "Phase 3B2", "Sector 70", "Aerocity"] },
];

export const POPULAR_METRO_CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", 
  "Chandigarh", "Gurgaon", "Kochi", "Surat", "Nagpur"
];

export const ALL_ADS: ServiceAd[] = [
  {
    id: "cmqdfo5qo000ld1yxv71q20jl",
    title: "Deep Home Cleaning — Kitchen & Bathroom",
    categorySlug: "cleaning",
    categoryName: "Cleaning",
    categoryIcon: "🧹",
    price: "₹1,499",
    priceNum: 1499,
    area: "Whitefield",
    city: "Bangalore",
    state: "Karnataka",
    views: 187,
    postedAgo: "4 months ago",
    featured: true,
    description: "Sparkling deep cleaning service for homes and offices. Trained staff, eco-friendly products, and complete sanitization. Perfect before festivals or moving in/out.",
    fullDetails: [
      "Kitchen de-greasing, chimney, stove & cabinet cleaning",
      "Bathroom descaling, tile scrubbing, mirror & sanitization",
      "Industrial single-disc scrubbing machine & vacuum",
      "Trained, background-checked professional cleaners"
    ],
    provider: {
      name: "Priya Sharma",
      initials: "PS",
      city: "Bangalore",
      memberSince: "2026",
      rating: 4.8,
      reviewsCount: 42,
      phone: "9876543211",
      whatsapp: "9876543211",
      verified: true
    },
    highlights: ["Eco-friendly Chemicals", "Deep Sanitization", "Industrial Equipment", "100% Guaranteed"]
  },
  {
    id: "cmqdfo5ga000jd1yxo70irbzb",
    title: "Herbal Pest Control — Cockroach & Termite",
    categorySlug: "pest-control",
    categoryName: "Pest Control",
    categoryIcon: "🐜",
    price: "₹899",
    priceNum: 899,
    area: "Rohini",
    city: "Delhi",
    state: "Delhi",
    views: 160,
    postedAgo: "4 months ago",
    featured: true,
    description: "Safe, odourless, child & pet-friendly pest control treatment. Specializing in cockroaches, termites, bed bugs, and mosquitoes. 6 months warranty on all treatments.",
    fullDetails: [
      "100% Herbal & Bayer certified chemicals",
      "No need to vacate kitchen or home during spray",
      "Termite drill-fill-seal subterranean treatment with 5-year guarantee",
      "Gel baiting for German and American cockroaches",
      "Government licensed applicators with proper safety equipment"
    ],
    provider: {
      name: "Amit Verma",
      initials: "AV",
      city: "Delhi",
      memberSince: "2026",
      rating: 4.9,
      reviewsCount: 38,
      phone: "9876543212",
      whatsapp: "9876543212",
      verified: true
    },
    highlights: ["Herbal & Odourless", "6-Month Warranty", "Child & Pet Safe", "Free Inspection"]
  },
  {
    id: "cmqdfo564000hd1yxpl07wvff",
    title: "Split & Window AC Service + Gas Refilling",
    categorySlug: "ac-repair",
    categoryName: "AC Repair",
    categoryIcon: "❄️",
    price: "₹499",
    priceNum: 499,
    area: "Kothrud",
    city: "Pune",
    state: "Maharashtra",
    views: 19,
    postedAgo: "4 months ago",
    featured: true,
    description: "Professional AC servicing, gas refilling, installation and uninstallation. We handle all brands — Voltas, LG, Samsung, Daikin. Free inspection on first visit. Cooling guaranteed!",
    fullDetails: [
      "High-pressure jet wash for cooling coils and outdoor condenser",
      "R32, R410A, and R22 gas top-up with pressure gauge testing",
      "Filter cleaning, copper pipe flare check, PCB repair",
      "90-day cooling service guarantee"
    ],
    provider: {
      name: "Rajesh Kumar",
      initials: "RK",
      city: "Pune",
      memberSince: "2026",
      rating: 5.0,
      reviewsCount: 29,
      phone: "9876543213",
      whatsapp: "9876543213",
      verified: true
    },
    highlights: ["High-Pressure Jet Wash", "Genuine Spare Parts", "30-Day Cooling Guarantee", "All AC Brands"]
  },
  {
    id: "cmqdfo4m0000fd1yxlkt6g5ed",
    title: "Expert Plumber — 24/7 Emergency Service",
    categorySlug: "plumbing",
    categoryName: "Plumbing",
    categoryIcon: "🔧",
    price: "₹299/hr",
    priceNum: 299,
    area: "Andheri West",
    city: "Mumbai",
    state: "Maharashtra",
    views: 165,
    postedAgo: "4 months ago",
    featured: true,
    description: "Over 12 years of experience in pipe fitting, leak repair, bathroom fittings, and water tank installation. Quick response, fair pricing, and guaranteed work. Available all days including holidays.",
    fullDetails: [
      "Concealed pipe leakage detection and fixing",
      "Jaquar, Kohler, Hindware mixer tap & shower installation",
      "Water tank cleaning, motor connection & pressure pump setup",
      "Emergency blockage removal and drainage clearing"
    ],
    provider: {
      name: "Rahul Sharma",
      initials: "RS",
      city: "Mumbai",
      memberSince: "2026",
      rating: 4.9,
      reviewsCount: 54,
      phone: "9876543210",
      whatsapp: "9876543210",
      verified: true
    },
    highlights: ["24/7 Availability", "12+ Years Exp", "Fixed Upfront Price", "Guaranteed Work"]
  },
  {
    id: "cmqdfo6as000pd1yxcjvkxjgw",
    title: "Custom Carpentry & Furniture Repair",
    categorySlug: "carpentry",
    categoryName: "Carpentry",
    categoryIcon: "🔨",
    price: "₹600",
    priceNum: 600,
    area: "Gachibowli",
    city: "Hyderabad",
    state: "Telangana",
    views: 12,
    postedAgo: "4 months ago",
    featured: false,
    description: "Modular kitchen, wardrobes, beds, and furniture repair. Quality wood, neat finishing, on-time delivery. Free design consultation at your home.",
    fullDetails: [
      "Custom hydraulic beds, wardrobes & TV units",
      "Hinge replacement, drawer channels & sliding door repair",
      "Teak wood, engineered plywood & laminate finish",
      "Door lock installation & handle fittings"
    ],
    provider: {
      name: "Suresh Rao",
      initials: "SR",
      city: "Hyderabad",
      memberSince: "2026",
      rating: 4.7,
      reviewsCount: 19,
      phone: "9876543214",
      whatsapp: "9876543214",
      verified: true
    },
    highlights: ["Free Home Consultation", "Quality Wood", "Neat Finish", "Warranty on Fitting"]
  },
  {
    id: "cmqdfo60r000nd1yx81iy045w",
    title: "Licensed Electrician — Wiring & Repairs",
    categorySlug: "electrician",
    categoryName: "Electrician",
    categoryIcon: "💡",
    price: "₹350/hr",
    priceNum: 350,
    area: "Bandra",
    city: "Mumbai",
    state: "Maharashtra",
    views: 180,
    postedAgo: "4 months ago",
    featured: false,
    description: "Complete electrical solutions — new wiring, fan/light installation, MCB & inverter setup, short-circuit fixing. Safety-certified and insured work.",
    fullDetails: [
      "Concealed copper wiring & distribution box setup",
      "Inverter & battery wiring installation",
      "Ceiling fan, chandelier, LED panel light fittings",
      "Tripping MCB troubleshooting & earth leakage testing"
    ],
    provider: {
      name: "Karthik S",
      initials: "KS",
      city: "Mumbai",
      memberSince: "2026",
      rating: 4.8,
      reviewsCount: 31,
      phone: "9876543215",
      whatsapp: "9876543215",
      verified: true
    },
    highlights: ["Govt Licensed", "Insured Work", "Safety First", "Prompt Service"]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    text: "Excellent plumbing service! The professional was courteous, efficient, and fixed the issue promptly. Highly recommended!",
    service: "Plumbing",
    avatar: "👩‍💼",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Rajesh Kumar",
    city: "Bangalore",
    rating: 5,
    text: "AC repair was done perfectly. Great communication throughout and very professional approach. Will book again!",
    service: "AC Repair",
    avatar: "👨‍💼",
    color: "from-fb8500 to-ffb81c"
  },
  {
    name: "Anita Desai",
    city: "Delhi",
    rating: 5,
    text: "The cleaning service was thorough and the team was very polite. My house looks brand new now!",
    service: "Home Cleaning",
    avatar: "👩‍💼",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Vikram Patel",
    city: "Pune",
    rating: 5,
    text: "Electrician did excellent work. Very knowledgeable and completed the job on time with quality results.",
    service: "Electrician",
    avatar: "👨‍💼",
    color: "from-fb8500 to-ffb81c"
  }
];

export const FAQS: FaqItem[] = [
  {
    icon: "🔍",
    question: "How does WrkZone help me find the right professional?",
    answer: "WrkZone connects you with verified professionals in your area. You can search by service type, location, and ratings to find the perfect match for your needs."
  },
  {
    icon: "🛡️",
    question: "Is it safe to hire professionals on WrkZone?",
    answer: "Yes! All our professionals are verified and reviewed by customers. We also provide secure payment options and a guarantee for peace of mind."
  },
  {
    icon: "📝",
    question: "How do I post my first service?",
    answer: "Posting is free and takes less than 2 minutes. Go to 'Post a Service', fill in details, add photos, and publish. You'll immediately start receiving inquiries."
  },
  {
    icon: "⭐",
    question: "What if I'm not satisfied with the service?",
    answer: "We offer a 100% satisfaction guarantee. If you're unhappy with the service, contact our support team and we'll help resolve the issue."
  },
  {
    icon: "👤",
    question: "How are professionals rated and reviewed?",
    answer: "After service completion, customers can rate professionals on quality, punctuality, and professionalism. These reviews help others make informed decisions."
  },
  {
    icon: "💳",
    question: "Are there any hidden fees?",
    answer: "No hidden fees! We're transparent about all costs. Our commission is clearly stated, and there are no surprise charges."
  },
  {
    icon: "⏱️",
    question: "How long does it take to complete a job?",
    answer: "It depends on the service type. Small tasks can be completed in hours, while larger projects may take days. You can discuss timelines with the professional."
  },
  {
    icon: "🗓️",
    question: "Can I schedule services in advance?",
    answer: "Yes! You can book services for a date that works best for you. Professionals will confirm the appointment based on their availability."
  },
  {
    icon: "💬",
    question: "Can I communicate directly with professionals?",
    answer: "Absolutely! Once you connect with a professional on WrkZone, you can message them directly to discuss details, clarify requirements, and finalize schedules."
  },
  {
    icon: "🏆",
    question: "What makes a professional 'verified'?",
    answer: "Verified professionals have passed our screening process, including identity verification, background checks, and skill validation. This ensures quality and safety."
  },
  {
    icon: "📍",
    question: "Does WrkZone work in my city?",
    answer: "WrkZone operates in 22+ major Indian cities. Check our 'Top Metro Cities' section or search your location to see available services."
  },
  {
    icon: "🔄",
    question: "What's your refund policy?",
    answer: "If you're not satisfied with the service, we offer a full refund within 7 days. Our support team will help process it quickly and fairly."
  }
];

export const PARTNERS = [
  { name: "TechCorp", icon: "💻" },
  { name: "BuildCo", icon: "🏗️" },
  { name: "GreenLiving", icon: "🌱" },
  { name: "SafeGuard", icon: "🔒" },
  { name: "QuickServe", icon: "⚡" },
  { name: "ProCare", icon: "👨‍⚕️" }
];
