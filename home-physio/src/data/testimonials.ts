export interface TestimonialItem {
  id: string
  clientName: string
  location: string
  conditionType: string
  quote: string
  rating: number
  isSampleDisclaimer: string
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    clientName: "Margaret T. (Age 74)",
    location: "[North Suburb Area]",
    conditionType: "Post-Hip Replacement Rehabilitation",
    quote: "After my total hip surgery, the thought of getting into a car to travel to a clinic was terrifying. Having the physiotherapist come to my home made all the difference. In six weeks, I went from using two crutches to walking independently in my garden.",
    rating: 5,
    isSampleDisclaimer: "Example patient testimonial — replace with verified client review."
  },
  {
    id: "testimonial-2",
    clientName: "David R. (Age 42)",
    location: "[Central District]",
    conditionType: "Acute Sciatica & Disc Bulge",
    quote: "I was in intense spasm and couldn't sit or drive. The therapist arrived promptly with their couch, diagnosed the nerve root irritation, and relieved the worst of the pain in that very first visit. The tailored home exercises got me back to work quickly.",
    rating: 5,
    isSampleDisclaimer: "Example patient testimonial — replace with verified client review."
  },
  {
    id: "testimonial-3",
    clientName: "Susan & Arthur P. (Family Carers)",
    location: "[West Village]",
    conditionType: "Older Adult Mobility & Fall Prevention",
    quote: "We arranged home visits for my elderly father after he had a fall. The therapist was exceptionally kind, assessed his bedroom and stairs for trip hazards, and rebuilt his confidence step by step. He now walks safely with his stick again.",
    rating: 5,
    isSampleDisclaimer: "Example patient testimonial — replace with verified client review."
  }
]
