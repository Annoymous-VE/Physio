export interface PricingTier {
  id: string
  name: string
  duration: string
  price: string
  popular?: boolean
  description: string
  includes: string[]
  recommendedFor: string
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "initial",
    name: "Initial Home Assessment & Treatment",
    duration: "60 Minutes",
    price: "£XX",
    popular: true,
    description: "Full clinical assessment, hands-on treatment, and personalized recovery plan in your home.",
    includes: [
      "In-depth subjective & physical examination",
      "Immediate hands-on treatment on day one",
      "Full explanation of findings & recovery roadmap",
      "Personalized digital exercise programme with video guides",
      "Travel within standard coverage zone included",
      "Direct follow-up email/phone support between visits"
    ],
    recommendedFor: "All new patients or existing patients presenting with a new issue"
  },
  {
    id: "follow-up",
    name: "Standard Follow-Up Treatment",
    duration: "45–60 Minutes",
    price: "£XX",
    popular: false,
    description: "Ongoing rehabilitation, manual therapy, and exercise progression to achieve your goals.",
    includes: [
      "Progress review and objective re-testing",
      "Targeted manual therapy & joint mobilisation",
      "Exercise programme advancement & loading updates",
      "Functional home transfer / stair practice",
      "Travel within standard coverage zone included"
    ],
    recommendedFor: "Patients undergoing active rehabilitation or post-op recovery"
  },
  {
    id: "extended",
    name: "Extended / Complex Care Session",
    duration: "90 Minutes",
    price: "£XX",
    popular: false,
    description: "Extended appointment for multi-joint conditions, complex neurological care, or detailed carer training.",
    includes: [
      "Full 90 minutes of dedicated one-to-one clinical time",
      "Comprehensive multi-joint or dual condition assessment",
      "Full home hazard environmental audit & transfer training",
      "Detailed carer and family training session",
      "Written summary report for GP or consultant (on request)"
    ],
    recommendedFor: "Complex neurological conditions, severe mobility restrictions, or multi-joint rehabilitation"
  }
]

export const PRICING_NOTES = {
  label: "Example pricing — to be confirmed by practice",
  travelPolicy: "Travel within the standard service area ([Primary Town/City] and approx. 8-mile radius) is included. A small travel surcharge (£X/mile) may apply for locations outside the primary radius.",
  paymentMethods: [
    "Debit / Credit Card (portable card reader brought to visit)",
    "Direct Bank Transfer (BACS) prior to or on day of visit",
    "Cheque / Cash (by prior agreement)"
  ],
  insuranceInfo: "Receipts with HCPC and CSP registration details are provided for self-funding claims with private health cash plans and insurers (e.g., WPA, Simplyhealth, AXA PPP, Bupa cash plans where applicable). Please check your policy terms prior to booking.",
  cancellationPolicy: "We appreciate 24 hours' notice for cancellations or rescheduling to allow us to offer the slot to patients waiting on our triage list."
}
