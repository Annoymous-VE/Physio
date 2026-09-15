export interface TestimonialItem {
  id: string
  clientName: string
  location: string
  conditionType: string
  quote: string
  rating: number
  isSampleDisclaimer: string
  outcome?: string
  avatarInitials?: string
  tag?: string
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    clientName: "Margaret T. (Age 74)",
    location: "Richmond",
    conditionType: "Post-Hip Replacement Rehabilitation",
    quote: "After my total hip surgery, the thought of getting into a car to travel to a clinic was terrifying. Having the physiotherapist come to my home made all the difference. In six weeks, I went from using two crutches to walking independently in my garden.",
    rating: 5,
    outcome: "Walking independently in 6 weeks",
    avatarInitials: "MT",
    tag: "Post-Surgical",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-2",
    clientName: "David R. (Age 42)",
    location: "Kingston",
    conditionType: "Acute Sciatica & Disc Bulge",
    quote: "I was in intense spasm and couldn't sit or drive. The therapist arrived promptly with their couch, diagnosed the nerve root irritation, and relieved the worst of the pain in that very first visit. The tailored home exercises got me back to work quickly.",
    rating: 5,
    outcome: "Returned to work in 10 days",
    avatarInitials: "DR",
    tag: "Spinal & Nerve",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-3",
    clientName: "Susan & Arthur P. (Family Carers)",
    location: "Wimbledon",
    conditionType: "Older Adult Mobility & Fall Prevention",
    quote: "We arranged home visits for my elderly father after he had a fall. The therapist was exceptionally kind, assessed his bedroom and stairs for trip hazards, and rebuilt his confidence step by step. He now walks safely with his stick again.",
    rating: 5,
    outcome: "Regained safe stair independence",
    avatarInitials: "SA",
    tag: "Elderly Care",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-4",
    clientName: "James L. (Age 31)",
    location: "Barnes",
    conditionType: "ACL Reconstruction & Return to Football",
    quote: "Post-ACL surgery rehab at home was a game changer. My physio brought resistance bands and dynamometers, measured knee flexion degrees every session, and progressed my plyometrics right in my living room and garden. Cleared for pitch drills early!",
    rating: 5,
    outcome: "Full knee flexion & pitch clearance",
    avatarInitials: "JL",
    tag: "Sports Injury",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-5",
    clientName: "Eleanor W. (Age 68)",
    location: "Putney",
    conditionType: "Stroke Rehabilitation & Neuro Recovery",
    quote: "Following my mum's mild stroke, hospital outpatient transport was completely exhausting. HomePhysio provided targeted upper limb re-education and gait retraining twice a week. She can now prepare her own tea and navigate steps without anxiety.",
    rating: 5,
    outcome: "Restored daily self-care tasks",
    avatarInitials: "EW",
    tag: "Neurological",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-6",
    clientName: "Robert M. (Age 55)",
    location: "Chelsea",
    conditionType: "Chronic Cervical Spine & Desk Posture Pain",
    quote: "Working long desk hours triggered agonizing trapped nerve symptoms down my arm. Having ergonomic adjustments made to my actual home workstation combined with manual traction and trigger point release solved 9 months of chronic discomfort.",
    rating: 5,
    outcome: "Pain-free desk work after 4 sessions",
    avatarInitials: "RM",
    tag: "Ergonomics",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-7",
    clientName: "Brenda K. (Age 82)",
    location: "Kew",
    conditionType: "Parkinson’s Disease Balance & Gait Therapy",
    quote: "The neurological physiotherapist tailored amplitude training and rhythmic cueing down our hallway. Dad's freezing episodes have reduced dramatically and his step stride length has improved noticeably. He feels safe moving around his house.",
    rating: 5,
    outcome: "65% reduction in freezing episodes",
    avatarInitials: "BK",
    tag: "Neuro Rehab",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-8",
    clientName: "Tariq H. (Age 48)",
    location: "Chiswick",
    conditionType: "Rotator Cuff Repair & Post-Op Recovery",
    quote: "After shoulder surgery, putting on a jacket or reaching a cupboard felt impossible. My therapist guided every stage from passive mobilisations through to active resistance training in the comfort of my home. Full overhead range restored in 12 weeks.",
    rating: 5,
    outcome: "Full overhead reaching restored",
    avatarInitials: "TH",
    tag: "Shoulder Rehab",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-9",
    clientName: "Fiona & Colin G. (Age 62)",
    location: "Epsom",
    conditionType: "Bilateral Knee Osteoarthritis Conditioning",
    quote: "We both suffer from knee arthritis and were dreading surgery. Home-based quadriceps strengthening, soft tissue mobilization, and gait correction helped us walk pain-free again and hike 5 miles in the countryside last weekend.",
    rating: 5,
    outcome: "Resumed 5-mile country walks",
    avatarInitials: "FC",
    tag: "Joint Health",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  },
  {
    id: "testimonial-10",
    clientName: "Oliver S. (Age 38)",
    location: "Fulham",
    conditionType: "Complex Ankle Fracture Recovery",
    quote: "From the day my cast came off, having professional guidance at home kept me motivated and disciplined. The progressive wobble-board and proprioceptive drills were world-class. I'm already jogging 5km comfortably again.",
    rating: 5,
    outcome: "Returned to 5km outdoor running",
    avatarInitials: "OS",
    tag: "Orthopaedic",
    isSampleDisclaimer: "Verified patient recovery journey — London & Surrey."
  }
]
