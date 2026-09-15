export interface CoverageZone {
  zone: string
  name: string
  description: string
  postcodes: string[]
  travelFee: string
  features: string[]
}

export const COVERAGE_DATA = {
  primaryCity: "[Primary Town/City]",
  subtitle: "Delivering one-to-one home physiotherapy across [Primary Town/City] and neighboring communities.",
  disclaimer: "Areas listed below are placeholder examples. Client can customize specific towns and postcode districts.",
  zones: [
    {
      zone: "Zone 1",
      name: "Primary Central Area",
      description: "Direct service coverage within central and immediate urban districts.",
      postcodes: ["[AB1]", "[AB2]", "[AB3]", "[AB4]", "[AB5]"],
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
      postcodes: ["[AB10]", "[AB11]", "[AB12]", "[AB20]", "[AB21]"],
      travelFee: "Standard travel included (or nominal fee depending on exact distance)",
      features: [
        "Flexible weekday visiting times",
        "Coordinated travel routes to minimize waiting times",
        "Dedicated carer & family consultation included"
      ]
    },
    {
      zone: "Zone 3",
      name: "Extended Regional Radius",
      description: "Rural or outer regional areas beyond standard 15-mile operating zone.",
      postcodes: ["[AB30+]", "[Surrounding Region]"],
      travelFee: "Small travel contribution (£X/mile beyond radius)",
      features: [
        "Subject to clinician availability & scheduling",
        "Ideal for extended 90-min comprehensive sessions",
        "Phone / virtual follow-up options available"
      ]
    }
  ] as CoverageZone[],
  sampleLocations: [
    "[Central District]",
    "[North Suburb]",
    "[South Suburb]",
    "[East Town]",
    "[West Village]",
    "[Surrounding Valley]",
    "[Riverside District]",
    "[Hillside Area]"
  ]
}
