export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  duration: string
  pricePlaceholder: string
  iconName: string
  benefits: string[]
  whoIsItFor: string[]
  whatToExpect: string[]
  equipmentProvided: string[]
}

export const SERVICES: ServiceItem[] = [
  {
    id: "initial-assessment",
    title: "Initial Assessment & Home Treatment",
    shortDescription: "Comprehensive 60-minute in-depth physical assessment, clinical diagnosis discussion, hands-on treatment, and a bespoke recovery plan.",
    fullDescription: "Your journey starts with a thorough full-body clinical evaluation in your own living room or bedroom. We assess your joint mechanics, muscle strength, nerve function, gait, and functional daily movements to identify the root cause of your symptoms.",
    duration: "60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "Stethoscope",
    benefits: [
      "Full subjective & physical examination without leaving your home",
      "Immediate hands-on pain relief & therapeutic intervention on day one",
      "Clear, jargon-free explanation of findings and recovery timeline",
      "Custom digital exercise programme with video demonstrations"
    ],
    whoIsItFor: [
      "New patients with acute or chronic pain",
      "Individuals recovering from recent injury, flare-up, or surgery",
      "Patients needing a second clinical opinion or structured rehab plan"
    ],
    whatToExpect: [
      "Medical history review and symptom discussion",
      "Posture, movement, and joint range of motion testing",
      "Immediate targeted treatment (manual therapy, soft tissue work, or guided movement)",
      "Agreement on your personal goals (e.g., walking without pain, returning to sport)"
    ],
    equipmentProvided: [
      "Portable hydraulic treatment couch (if needed)",
      "Diagnostic goniometers & assessment tools",
      "Resistance bands and therapeutic aids"
    ]
  },
  {
    id: "msk-physiotherapy",
    title: "Musculoskeletal (MSK) Physiotherapy",
    shortDescription: "Targeted treatment for joint stiffness, muscle strains, tendon issues, ligament sprains, and postural dysfunction.",
    fullDescription: "Expert manual therapy, trigger point release, joint mobilisations, and progressive exercise prescription delivered at home to restore normal movement mechanics and alleviate musculoskeletal discomfort.",
    duration: "45–60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "Activity",
    benefits: [
      "Reduces chronic muscle tension and joint inflammation",
      "Restores natural joint range and movement symmetry",
      "Addresses compensatory movement habits that cause recurrent pain",
      "Bespoke strengthening tailored to your home environment"
    ],
    whoIsItFor: [
      "Patients suffering from shoulder impingement, tennis elbow, hip bursitis, or plantar fasciitis",
      "Repetitive strain injuries (RSI) and desk-worker postural issues",
      "General joint arthritis and degenerative stiffness"
    ],
    whatToExpect: [
      "Progress check on previous exercises and current pain levels",
      "Hands-on joint mobilisation and soft tissue release",
      "Technique refinement for daily functional tasks",
      "Progressive loading exercises using everyday home furnishings"
    ],
    equipmentProvided: [
      "Therapeutic massage oils / wax",
      "Exercise bands, loops, and stability cushions",
      "Cryotherapy / heat application tools"
    ]
  },
  {
    id: "post-op-rehab",
    title: "Post-Operative Rehabilitation",
    shortDescription: "Specialised home rehabilitation following total hip/knee replacement, spinal surgery, fracture fixation, or arthroscopy.",
    fullDescription: "Recovering from surgery can make travelling to a hospital or high-street clinic painful and exhausting. We bring hospital-grade post-operative rehabilitation directly to your bedside and living space, coordinating with your surgeon's protocol.",
    duration: "45–60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "HeartPulse",
    benefits: [
      "Eliminates painful car journeys and stressful waiting rooms early in recovery",
      "Practices real-world home tasks: navigating your specific stairs, bed transfers, and chairs",
      "Active swelling management and scar tissue mobilisation",
      "Strict compliance with your orthopaedic surgeon's protocol"
    ],
    whoIsItFor: [
      "Total or partial hip / knee replacements (arthroplasty)",
      "Rotator cuff repairs, ACL reconstruction, or Achilles repair",
      "Spinal decompression, discectomy, or fusion procedures",
      "Post-fracture immobilisation weaning"
    ],
    whatToExpect: [
      "Surgical wound check and swelling evaluation",
      "Gentle passive and active-assisted range of motion work",
      "Safe walking aid progression (frame -> crutches -> stick -> independent)",
      "Stair climbing technique practice under direct supervision"
    ],
    equipmentProvided: [
      "Gait measurement aids & height blocks",
      "Swelling reduction compression aids",
      "Rehabilitation step and resistance tools"
    ]
  },
  {
    id: "older-adult-physio",
    title: "Older Adult & Mobility Care",
    shortDescription: "Gentle, compassionate physiotherapy to enhance physical independence, functional confidence, and vitality in later life.",
    fullDescription: "Designed for seniors who wish to maintain or regain their independence at home. We focus on practical daily capabilities—standing up from a low armchair safely, stepping into the shower, improving walking endurance, and preventing deconditioning.",
    duration: "45–60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "UserCheck",
    benefits: [
      "Safe, unhurried treatment at the patient's natural pace",
      "Direct home hazard assessment and functional ergonomics advice",
      "Empowers family members and carers with safe transfer techniques",
      "Builds confidence to prevent fear of movement and isolation"
    ],
    whoIsItFor: [
      "Seniors recovering after a hospital stay, illness, or period of bed rest",
      "Individuals noticing gradual loss of walking stamina or balance",
      "Patients living with Parkinson's, mild cognitive impairment, or frailty"
    ],
    whatToExpect: [
      "Thorough balance and leg strength assessment (e.g., 30-sec sit-to-stand)",
      "Functional transfer training in bedroom, living room, and bathroom",
      "Gentle weight-bearing and functional balance drills",
      "Clear written and illustrated home exercise cards"
    ],
    equipmentProvided: [
      "Non-slip balance pads",
      "Lightweight ankle weights & seated exercise equipment",
      "Walking stick / frame height adjustment tools"
    ]
  },
  {
    id: "back-neck-pain",
    title: "Back & Neck Pain Management",
    shortDescription: "Evidence-based relief for sciatica, acute lumbar spasms, disc-related pain, cervical stiffness, and tension headaches.",
    fullDescription: "Back and neck issues can make sitting in a car or travelling virtually unbearable. We visit you at home to provide prompt relief through gentle decompression, manual therapy, and movement education to desensitise the nervous system.",
    duration: "45–60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "ShieldAlert",
    benefits: [
      "Immediate relief in comfortable positions without travelling",
      "Expert neurological screening (nerve root conductivity and reflexes)",
      "Ergonomic review of your actual home workspace, sofa, and bed",
      "Reassurance and active strategies to prevent fear-avoidance"
    ],
    whoIsItFor: [
      "Acute lumbar strain or 'thrown back' spasms",
      "Sciatica, trapped nerves, and radiating leg symptoms",
      "Chronic lower back aching and morning stiffness",
      "Neck stiffness, cervicogenic headaches, and upper back tightness"
    ],
    whatToExpect: [
      "Full neurological exam (reflexes, sensation, myotomes)",
      "Postural and directional preference movement testing (McKenzie approach)",
      "Gentle traction, manual release, and neural gliding",
      "Self-management pain-relieving positioning"
    ],
    equipmentProvided: [
      "Lumbar support rolls & postural pillows",
      "Neural mobilisation aids",
      "Hot/cold therapeutic packs"
    ]
  },
  {
    id: "sports-injury",
    title: "Sports Injury & Exercise Rehab",
    shortDescription: "Sport-specific rehabilitation, return-to-running programming, and biomechanical load management.",
    fullDescription: "Whether you are a weekend runner, gym enthusiast, or competitive athlete, we analyse your biomechanics and create progressive loading programmes to get you back to your peak performance without re-injury.",
    duration: "45–60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "Trophy",
    benefits: [
      "Personalised load management and return-to-sport criteria testing",
      "Running gait analysis and footwear advice",
      "High-level plyometric and neuromuscular control drills",
      "Injury prevention and performance conditioning"
    ],
    whoIsItFor: [
      "Hamstring strains, groin pulls, calf tears, and ankle sprains",
      "Runner's knee, patellar tendinopathy, and Achilles tendinopathy",
      "Swimmers and overhead athletes with shoulder pain"
    ],
    whatToExpect: [
      "Movement screening and force production testing",
      "Hands-on soft tissue therapy and dry needling (where indicated)",
      "Progressive resistance and plyometric exercise prescription",
      "Periodised training schedule integration"
    ],
    equipmentProvided: [
      "Heavy resistance loop bands and dynamometer tools",
      "Agility markers and neuromuscular balance equipment",
      "Sports taping and strapping supplies"
    ]
  },
  {
    id: "falls-prevention",
    title: "Falls Prevention & Balance Retraining",
    shortDescription: "Specialised screening and balance rehabilitation to eliminate trip hazards, restore stability, and prevent fractures.",
    fullDescription: "Falls are not an inevitable part of aging. Our evidence-based Otago and balance training protocols dramatically reduce fall risk by strengthening postural reflexes, ankle stability, and vestibular-visual coordination in your home setting.",
    duration: "45–60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "Footprints",
    benefits: [
      "Objective validated fall-risk scoring (Timed Up and Go, Berg Balance)",
      "Direct home hazard audit (rugs, lighting, threshold steps, bathroom safety)",
      "Step-by-step 'how to get up from the floor' safe training for patient & family",
      "Evidence-based Otago exercise programme progression"
    ],
    whoIsItFor: [
      "Anyone who has had a slip, trip, or fall in the past 12 months",
      "Individuals feeling unsteady when turning, walking on uneven ground, or in dim light",
      "Patients with osteoporosis seeking fracture-risk reduction"
    ],
    whatToExpect: [
      "Comprehensive multi-factorial fall risk assessment",
      "Balance drills with visual and dual-task cognitive challenges",
      "Lower-limb power and reaction time training",
      "Home safety checklist walkthrough with family or carers"
    ],
    equipmentProvided: [
      "Balance assessment equipment and safety belts",
      "Illustrated Otago balance protocol guidebooks",
      "Progressive ankle loading sets"
    ]
  },
  {
    id: "neurological-physio",
    title: "Neurological Rehabilitation Support",
    shortDescription: "Home-based neuro-physiotherapy for stroke recovery, MS, Parkinson's, and neurological conditions.",
    fullDescription: "Neurological rehabilitation requires consistent, high-repetition functional practice in everyday contexts. We work with you at home to improve neuroplasticity, manage spasticity, refine gait, and maximise your daily independence.",
    duration: "60 Minutes",
    pricePlaceholder: "£XX [Example Price]",
    iconName: "Brain",
    benefits: [
      "Maximises neuroplastic recovery in real home environments",
      "Spasticity management, tone reduction, and stretching protocols",
      "Upper-limb reaching and grasping functional training",
      "Close communication with NHS neurology teams and GPs"
    ],
    whoIsItFor: [
      "Post-stroke survivors seeking ongoing community rehabilitation",
      "Individuals with Parkinson's disease (focusing on amplitude and rhythm)",
      "Multiple Sclerosis (MS) fatigue and mobility management",
      "Peripheral neuropathies and balance deficits"
    ],
    whatToExpect: [
      "Tone and motor control assessment (Bobath / motor relearning principles)",
      "Task-specific reaching, standing, and gait practice",
      "Sensory cueing techniques (auditory/visual pacing for Parkinson's)",
      "Adaptive equipment advice and carer training"
    ],
    equipmentProvided: [
      "Upper limb dexterity & grip tools",
      "Visual cueing lasers / stepping markers",
      "Therapeutic positioning wedges & supports"
    ]
  }
]
