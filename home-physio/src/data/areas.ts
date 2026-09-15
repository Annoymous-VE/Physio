export interface CoverageZone {
  zone: string
  name: string
  description: string
  postcodes: string[]
  travelFee: string
  features: string[]
}

export const COVERAGE_DATA = {
  primaryCity: "Richmond upon Thames",
  subtitle: "Delivering one-to-one home physiotherapy across Richmond, Kingston, Wimbledon, and neighboring communities.",
  disclaimer: "Covering all surrounding boroughs across South West London & Surrey.",
  zones: [
    {
      zone: "Zone 1",
      name: "Primary Central Area",
      description: "Direct service coverage within central and immediate urban districts.",
      postcodes: ["TW9", "TW10", "KT1", "KT2", "SW19"],
      travelFee: "Standard travel included (No extra fee)",
      features: [
        "Priority morning & afternoon booking slots",
        "Same-week appointment availability",
        "Full portable treatment couch brought directly to you"
      ]
    },
    {
      zone: "Zone 2",
      name: "Outer Boroughs & Surrounding Villages",
      description: "Suburban towns and communities within an approximate 10–15 mile radius.",
      postcodes: ["SW13", "SW14", "SW15", "TW1", "KT3"],
      travelFee: "Standard travel included",
      features: [
        "Flexible weekday visiting times",
        "Coordinated travel routes to minimize waiting times",
        "Dedicated carer & family consultation included"
      ]
    },
    {
      zone: "Zone 3",
      name: "Extended Regional Radius",
      description: "Outer regional areas beyond standard 15-mile operating zone.",
      postcodes: ["KT6+", "SM1+", "CR0+"],
      travelFee: "Nominal travel contribution for extended routes",
      features: [
        "Subject to clinician availability & scheduling",
        "Ideal for extended 90-min comprehensive sessions",
        "Phone / virtual follow-up options available"
      ]
    }
  ] as CoverageZone[],
  sampleLocations: [
    "Richmond",
    "Kingston",
    "Wimbledon",
    "Barnes",
    "Putney",
    "Chiswick",
    "Kew",
    "Epsom"
  ]
}
