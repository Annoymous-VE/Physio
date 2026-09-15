export interface ConditionCategory {
  id: string
  name: string
  description: string
  conditions: ConditionItem[]
}

export interface ConditionItem {
  id: string
  name: string
  commonSymptoms: string[]
  homePhysioApproach: string
  recommendedServiceId: string
  redFlagsNote?: string
}

export const CONDITIONS_DATA: ConditionCategory[] = [
  {
    id: "spine",
    name: "Back, Neck & Spine",
    description: "Spinal conditions affecting mobility, nerve function, sitting, and sleeping comfort.",
    conditions: [
      {
        id: "lower-back-pain",
        name: "Lower Back Pain & Lumbar Strain",
        commonSymptoms: ["Aching or sharp pain across lower back", "Stiffness getting out of bed or a low chair", "Muscle spasms when bending or twisting"],
        homePhysioApproach: "Gentle manual therapy, spinal decompression, progressive core stabilization, and practical ergonomics adjustments for your home sofa and mattress.",
        recommendedServiceId: "back-neck-pain"
      },
      {
        id: "sciatica",
        name: "Sciatica & Trapped Nerve",
        commonSymptoms: ["Shooting pain down the buttock, leg, or calf", "Pins and needles / numbness in foot or toes", "Pain aggravated by prolonged sitting"],
        homePhysioApproach: "Neurodynamic neural glides, postural directional preference exercises, and gentle spinal decompression to relieve nerve root compression.",
        recommendedServiceId: "back-neck-pain",
        redFlagsNote: "If you experience sudden numbness around your saddle/groin area or loss of bladder/bowel control, call NHS 999 immediately."
      },
      {
        id: "neck-pain-headaches",
        name: "Neck Stiffness & Cervicogenic Headaches",
        commonSymptoms: ["Restricted neck rotation when driving", "Tension radiating from neck base to temples", "Upper shoulder tightness"],
        homePhysioApproach: "Suboccipital myofascial release, cervical facet joint mobilisations, scapular postural strengthening, and home computer desk setup review.",
        recommendedServiceId: "back-neck-pain"
      }
    ]
  },
  {
    id: "joints",
    name: "Joints & Musculoskeletal",
    description: "Hip, knee, shoulder, and peripheral joint pain impacting daily tasks and active hobbies.",
    conditions: [
      {
        id: "knee-osteoarthritis",
        name: "Knee Osteoarthritis & Joint Stiffness",
        commonSymptoms: ["Knee stiffness in the morning or after resting", "Clicking/grating sensations with stairs", "Pain walking downhill or kneeling"],
        homePhysioApproach: "Targeted quadriceps and hip abductor strengthening, gentle joint distraction, gait re-education, and pacing strategies to protect cartilage.",
        recommendedServiceId: "msk-physiotherapy"
      },
      {
        id: "hip-bursitis-oa",
        name: "Hip Pain & Trochanteric Bursitis",
        commonSymptoms: ["Pain lying on your side at night", "Ache on the outer hip or groin area", "Pain when first rising from sitting"],
        homePhysioApproach: "Pelvic stability retraining, gluteal tendon offloading, sleeping position modifications, and gradual tendon loading protocols.",
        recommendedServiceId: "msk-physiotherapy"
      },
      {
        id: "shoulder-impingement-rotator-cuff",
        name: "Shoulder Impingement & Rotator Cuff Tendonitis",
        commonSymptoms: ["Pain reaching overhead or behind your back", "Night ache in the upper arm", "Weakness lifting kettle or reaching into cupboards"],
        homePhysioApproach: "Rotator cuff strengthening, scapulothoracic rhythm retraining, capsular stretching, and ergonomic modification of high cupboards.",
        recommendedServiceId: "msk-physiotherapy"
      },
      {
        id: "plantar-fasciitis",
        name: "Plantar Fasciitis & Achilles Tendinopathy",
        commonSymptoms: ["Sharp heel pain on first morning steps", "Achilles tendon stiffness after sitting", "Aching foot arch during long walks"],
        homePhysioApproach: "Plantar fascia loading (Rathleff protocol), calf eccentric strengthening, footwear appraisal, and home taping techniques.",
        recommendedServiceId: "msk-physiotherapy"
      }
    ]
  },
  {
    id: "post-surgery",
    name: "Post-Surgical Recovery",
    description: "Rehabilitation following elective orthopaedic procedures and trauma surgery.",
    conditions: [
      {
        id: "hip-knee-replacement",
        name: "Total Hip & Knee Replacement Rehabilitation",
        commonSymptoms: ["Post-surgical swelling and restricted flexion", "Hesitancy with stairs and walking outdoors", "Difficulty putting on socks and shoes"],
        homePhysioApproach: "Graduated range-of-motion exercises, swelling drainage techniques, scar mobilisation, gait aid weaning, and safe stair climbing in your specific house.",
        recommendedServiceId: "post-op-rehab"
      },
      {
        id: "acl-rotator-cuff-repair",
        name: "Ligament & Tendon Reconstruction (ACL, Rotator Cuff)",
        commonSymptoms: ["Muscle atrophy around operative joint", "Apprehension with sudden movement", "Strict post-surgical brace guidelines"],
        homePhysioApproach: "Strict milestone-based progression in line with your surgeon's protocol, isometric strengthening, proprioceptive retraining, and safe milestone testing.",
        recommendedServiceId: "post-op-rehab"
      }
    ]
  },
  {
    id: "older-adults-neuro",
    name: "Mobility, Balance & Neurological Care",
    description: "Conditions affecting physical independence, balance stability, and neurological coordination.",
    conditions: [
      {
        id: "unsteadiness-falls",
        name: "Balance Difficulties & Fear of Falling",
        commonSymptoms: ["Holding onto furniture while moving around the house", "Feeling dizzy or unsteady when turning quickly", "Hesitation stepping outside alone"],
        homePhysioApproach: "Validated Otago balance training, dual-task functional stepping drills, home safety environmental check, and structured confidence building.",
        recommendedServiceId: "falls-prevention"
      },
      {
        id: "parkinsons-stroke",
        name: "Stroke, Parkinson's & Neurological Mobility",
        commonSymptoms: ["Reduced step length or gait freezing", "Muscle stiffness (spasticity/rigidity)", "Difficulty with chair transfers or bed mobility"],
        homePhysioApproach: "Task-oriented neuro-rehabilitation, auditory/visual rhythm cueing, transfer biomechanics training, and comprehensive family/carer guidance.",
        recommendedServiceId: "neurological-physio"
      }
    ]
  }
]
