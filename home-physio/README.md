# HomePhysio — UK Home-Visit Physiotherapy Website Demo

A high-quality, responsive client demonstration website for an independent UK home-visit physiotherapy practice. Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons** on **Vite**.

---

## 🌟 Demo Features & Key Capabilities

1. **Healthcare Aesthetic & Branding**:
   - Modern UK private healthcare color palette (deep slate/navy typography, muted teal/emerald accents, warm soft neutral backgrounds, subtle borders, and soft shadows).
   - Temporary modular branding placeholder (`HomePhysio`) easily swappable with the client's real practice name and logo.

2. **Complete 12-Route Structure**:
   - `/` — Comprehensive **Homepage** with hero trust indicators, 4-step home visit process, services teaser, interactive postcode checker, pricing teaser, and sample patient reviews.
   - `/about` — **About the Physiotherapist** with profile card, philosophy of care, and HCPC/CSP/DBS qualification placeholders.
   - `/services` — **Clinical Services Directory** (8 home services) with MSK/Rehab filter tabs and interactive detail modals.
   - `/conditions` — **Searchable Conditions Directory** covering spinal pain, sciatica, post-surgical joints, older adult mobility, and balance difficulties with red-flag notices.
   - `/home-visits` — **Home Visit Advantage & Guide** outlining the 5-stage patient journey and portable clinic equipment brought to each home.
   - `/areas` — **Geographic Coverage & Postcodes** with structured zones (Central, Outer Boroughs, Extended) and an interactive postcode search tool.
   - `/pricing` — **Transparent Pricing & Fees** with 3 service tiers, insurance reimbursement notes, travel policy, and 24-hour cancellation guidance.
   - `/book` — **Interactive 3-Step Booking Wizard** with real-time form validation and simulated reference-generating confirmation state (`HP-XXXXXX`).
   - `/contact` — **Direct Contact & Callback Request Form** with visiting hours and NHS 111 / 999 triage guidance.
   - `/faq` — **Searchable & Categorized FAQ Accordions** addressing preparation, attire, appointment duration, referrals, safety, and cancellations.
   - `/privacy` — **UK GDPR & Data Protection Informational Policy Template**.
   - `/cookies` — **Privacy-first Cookie Information Page**.

3. **Client Demo & Safety Banners**:
   - **Emergency Notice Top Banner**: Reminds patients of NHS 111 / 999 emergency triage for severe symptoms.
   - **Demo Mode Banner**: Informs stakeholders that text placeholders and booking flows are simulated without backend storage.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 📁 Centralized Data Architecture

All text, pricing, services, and practice configurations are decoupled into modular TypeScript data files located in `src/data/`:

| File | Description |
| :--- | :--- |
| `src/data/site.ts` | Practice name, tagline, telephone, email, operating hours, primary city/town, and HCPC/CSP registration placeholders |
| `src/data/services.ts` | 8 clinical service offerings, descriptions, durations, equipment lists, and patient profiles |
| `src/data/conditions.ts` | 11+ conditions treated, symptoms, rehabilitation approaches, and clinical red-flag advisories |
| `src/data/areas.ts` | Service coverage zones, travel policies, sample towns, and postcode districts |
| `src/data/pricing.ts` | Pricing tiers, session durations, inclusions, and payment/insurance terms |
| `src/data/faqs.ts` | Frequently asked patient questions categorized into 4 topics |
| `src/data/testimonials.ts` | Demonstration patient reviews with sample disclaimers |

---

## 🛡️ Medical Disclaimer

*This application is a frontend demonstration prototype for presentation and evaluation purposes. All medical information provided is for general educational orientation and does not substitute professional clinical diagnosis or personalized medical advice.*
