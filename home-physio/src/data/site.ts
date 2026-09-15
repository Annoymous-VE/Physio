export interface NavItem {
  label: string
  href: string
  badge?: string
}

export interface Specialist {
  id: string
  name: string
  role: string
  title: string
  qualifications: string[]
  regNumber: string
  experience: string
  specialties: string[]
  bio: string
  imageUrl: string
  quote: string
}

export interface SiteConfig {
  name: string
  tagline: string
  subtitle: string
  description: string
  phone: string
  email: string
  operatingHours: {
    weekdays: string
    saturdays: string
    sundays: string
    emergencyNote: string
  }
  primaryLocation: string
  serviceRadius: string
  credentials: {
    hcpc: string
    csp: string
    dbs: string
    degree: string
    experienceYears: string
  }
  navLinks: NavItem[]
  socialLinks: {
    name: string
    href: string
  }[]
  disclaimer: string
}

export const SITE_CONFIG: SiteConfig = {
  name: "HomePhysio",
  tagline: "Professional Physiotherapy, Delivered to Your Door",
  subtitle: "Specialist home-visit physiotherapy and rehabilitation in the comfort, privacy, and convenience of your own home.",
  description: "Independent Chartered Physiotherapist providing tailored assessment, musculoskeletal treatment, post-operative rehabilitation, and mobility care across London, Richmond, Kingston, and surrounding areas.",
  phone: "0800 123 4567",
  email: "care@homephysio.co.uk",
  operatingHours: {
    weekdays: "Monday – Friday: 08:00 – 19:30",
    saturdays: "Saturday: 09:00 – 14:00",
    sundays: "Sunday & Bank Holidays: Closed (Emergency Advice: NHS 111)",
    emergencyNote: "If you experience sudden severe numbness, loss of bladder/bowel control, or chest pain, please call 999 or attend A&E immediately."
  },
  primaryLocation: "Richmond, Surrey",
  serviceRadius: "Approx. 15-mile radius (SW London & Surrey covered)",
  credentials: {
    hcpc: "HCPC Registered",
    csp: "Chartered Society of Physiotherapy (CSP) Member",
    dbs: "Enhanced DBS Checked & Fully Insured",
    degree: "BSc (Hons) Physiotherapy",
    experienceYears: "10+ Years NHS & Private Clinical Experience"
  },
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Specialists", href: "#specialists" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Book Visit", href: "#contact-booking" },
  ],
  socialLinks: [
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" }
  ],
  disclaimer: "This website is a client demonstration prototype. Healthcare information provided here is for general informational purposes only and does not substitute professional medical advice, clinical diagnosis, or individualized treatment. All patient testimonials and practitioner credentials in this demo are placeholders for client customization."
}

export const SPECIALISTS: Specialist[] = [
  {
    id: "lead-physio",
    name: "Dr. Eleanor Vance (Lead)",
    role: "Clinical Director & Lead Physiotherapist",
    title: "MCSP, HCPC Registered · Advanced MSK Practitioner",
    qualifications: ["BSc (Hons) Physiotherapy", "MSc Advanced Neuromusculoskeletal Physiotherapy", "HCPC Reg: PH104829"],
    regNumber: "HCPC & CSP Accredited",
    experience: "12+ Years NHS Hospital Trusts & Private Practice",
    specialties: ["Spinal & Sciatica Rehabilitation", "Post-Surgical Joint Replacement", "Chronic Pain Management"],
    bio: "Eleanor has led inpatient and community rehabilitation teams across leading NHS teaching hospitals. She founded HomePhysio to bring high-calibre clinical expertise directly into patient homes, removing travel distress.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    quote: "True recovery happens when rehabilitation is integrated into your real, everyday domestic environment."
  },
  {
    id: "neuro-geriatric-physio",
    name: "James Henderson",
    role: "Senior Neurological & Mobility Specialist",
    title: "MCSP, HCPC Registered · Older Adult Care Lead",
    qualifications: ["BSc (Hons) Physiotherapy", "Bobath Certified Neurological Practitioner", "HCPC Reg: PH984210"],
    regNumber: "HCPC & CSP Accredited",
    experience: "10+ Years Neuro Rehab & Stroke Units",
    specialties: ["Stroke & Parkinson's Rehabilitation", "Falls Prevention & Balance", "Elderly Deconditioning"],
    bio: "Specialising in neurological conditions and elderly frailty, James works with patients and their families to restore mobility confidence, audit home fall risks, and support independent living.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    quote: "Every step regained is dignity and autonomy returned to a person's life."
  },
  {
    id: "sports-ortho-physio",
    name: "Sophie Patel",
    role: "Musculoskeletal & Post-Operative Specialist",
    title: "MCSP, HCPC Registered · Sports Rehabilitation",
    qualifications: ["BSc (Hons) Sports Therapy", "MSc Pre-Reg Physiotherapy", "HCPC Reg: PH118943"],
    regNumber: "HCPC & CSP Accredited",
    experience: "8+ Years Elite Sports & Orthopaedic Clinics",
    specialties: ["ACL & Knee Reconstruction Rehab", "Shoulder Impingement & Rotator Cuff", "Manual Therapy & Soft Tissue"],
    bio: "Sophie blends progressive strength conditioning with hands-on manual techniques. She works with active individuals recovering from tendon injuries, fracture fixations, and joint replacements.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=700&q=80",
    quote: "We don't just aim for pain relief; we build long-term joint resilience and athletic function."
  }
]
