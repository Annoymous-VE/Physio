export interface FAQItem {
  id: string
  category: "Home Visits" | "Appointments & Pricing" | "Clinical & Safety" | "Preparation"
  question: string
  answer: string
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Home Visits",
    question: "What happens during a home physiotherapy visit?",
    answer: "During your visit, your physiotherapist arrives at your home with all required diagnostic and treatment equipment (including a portable treatment couch if needed). We begin by discussing your symptoms and medical background, followed by a thorough physical movement assessment. We provide hands-on treatment, guide you through personalized exercises in your own space, and agree on a clear recovery plan."
  },
  {
    id: "faq-2",
    category: "Preparation",
    question: "How do I prepare my home for the visit?",
    answer: "You do not need a huge amount of space! A clear floor area in your living room or bedroom (roughly 2m x 2m) is usually plenty. We just need enough room to safely stand, move, and position our portable couch or chair. Having any hospital discharge summaries, operation notes, or list of current medications handy is also very helpful."
  },
  {
    id: "faq-3",
    category: "Preparation",
    question: "What should I wear for my assessment?",
    answer: "Wear comfortable, loose-fitting clothing that allows easy movement. For back, hip, or knee assessments, shorts or loose trousers are ideal. For neck or shoulder problems, a sleeveless top, tank top, or vest makes hands-on evaluation much easier and more comfortable."
  },
  {
    id: "faq-4",
    category: "Appointments & Pricing",
    question: "How long does each appointment take?",
    answer: "An Initial Assessment & Treatment appointment is 60 minutes long to allow ample time for full evaluation and immediate treatment without rushing. Follow-up appointments are typically 45–60 minutes. Extended 90-minute sessions are also available for complex multi-joint or neurological cases."
  },
  {
    id: "faq-5",
    category: "Appointments & Pricing",
    question: "Do I need a GP or doctor's referral to book?",
    answer: "No, in the UK you can self-refer directly for private physiotherapy without seeing your GP first. If you plan to claim costs back through private medical insurance, some insurers may require a GP referral letter, so please check your specific policy terms."
  },
  {
    id: "faq-6",
    category: "Home Visits",
    question: "Which geographical areas and postcodes do you cover?",
    answer: "We provide regular home visits throughout [Primary Town/City] and surrounding areas within an approximate 15-mile radius. You can check your postcode using our interactive Area Checker on the Areas page or contact us directly to confirm coverage."
  },
  {
    id: "faq-7",
    category: "Clinical & Safety",
    question: "What happens after my first assessment?",
    answer: "You will receive a clear explanation of what is causing your symptoms and an agreed recovery roadmap. We will email you a bespoke home exercise programme with HD video demonstrations. We will also advise whether further follow-up visits are recommended and how many sessions are typically required."
  },
  {
    id: "faq-8",
    category: "Clinical & Safety",
    question: "Do you treat older adults and seniors at home?",
    answer: "Yes, a significant part of our practice is dedicated to older adult rehabilitation, post-hospital deconditioning, fall prevention, and mobility confidence. We work patiently and respectfully, often collaborating closely with family members, carers, and NHS community teams."
  },
  {
    id: "faq-9",
    category: "Appointments & Pricing",
    question: "What happens if I need to cancel or reschedule?",
    answer: "We understand that unforeseen events happen. We kindly request at least 24 hours' notice for cancellations or appointment rescheduling so we can offer the reserved time slot to another patient on our triage waiting list."
  },
  {
    id: "faq-10",
    category: "Clinical & Safety",
    question: "Are your physiotherapists fully qualified and insured?",
    answer: "Yes. All treatments are provided by Chartered Physiotherapists registered with the Health and Care Professions Council (HCPC) and members of the Chartered Society of Physiotherapy (CSP). We hold enhanced DBS certificates and comprehensive professional indemnity insurance."
  },
  {
    id: "faq-11",
    category: "Clinical & Safety",
    question: "What if my symptoms turn out to need emergency medical attention?",
    answer: "Patient safety is our foremost priority. During every assessment, we screen for medical 'red flags'. If your symptoms suggest a non-physiotherapy emergency (e.g. cauda equina syndrome, deep vein thrombosis, or acute cardiac issues), we will immediately guide you or contact emergency NHS services (999 or 111) and write an urgent referral."
  }
]
