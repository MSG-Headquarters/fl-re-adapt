// ============================================================
// FL SALES ASSOCIATE POST-LICENSING (45 HR) — UNITS 4–6
// Original study material written from public law. Not copied
// from any course provider.
// ============================================================

export const UNITS_B = [
  // ------------------------------------------------------------
  {
    id: 'pl4', num: 4, title: 'Fair Housing & Fair Lending',
    subtitle: 'Protected classes, exemptions, prohibited practices, ADA, ECOA',
    color: '#10B981', percentage: 12,
    objectives: [
      'List the protected classes under federal and Florida fair housing law',
      'Identify steering, blockbusting, and redlining',
      'Apply exemptions correctly — and know when they never apply',
      'Handle disability accommodations and assistance animals',
      'Know the ECOA protected classes for lending',
    ],
    sections: [
      {
        title: 'Protected classes',
        body: [
          'The federal Fair Housing Act (1968, amended 1974 and 1988) and the **Florida Fair Housing Act** protect **seven** classes: **race, color, religion, national origin, sex, handicap (disability), and familial status**.',
          'Familial status = households with children under 18 living with a parent/guardian, and includes **pregnant** persons and those securing custody.',
          'The **Civil Rights Act of 1866** bans **racial** discrimination in property with **no exceptions** (upheld in Jones v. Mayer, 1968).',
        ],
        keyPoints: ['7 classes: race, color, religion, national origin, sex, handicap, familial status', '1866 Act: race, no exemptions'],
        examTips: ['Marital status and age are NOT federal fair housing classes — they ARE ECOA lending classes.'],
      },
      {
        title: 'Prohibited practices',
        body: [
          '**Steering:** directing buyers toward or away from areas based on a protected class.',
          '**Blockbusting (panic peddling):** inducing owners to sell by suggesting a protected class is moving in.',
          '**Redlining:** a lender refusing loans or changing terms in an area based on its racial or ethnic makeup.',
          'Also illegal: discriminatory advertising, refusing to show or rent, false "not available" statements, different terms, and restricting access to MLS or brokerage membership.',
        ],
        keyPoints: ['Steering = licensee directing people', 'Blockbusting = scaring owners to sell', 'Redlining = lenders'],
        examTips: [],
      },
      {
        title: 'Exemptions (and their limits)',
        body: [
          '**Owner-occupied 1–4 unit building** ("Mrs. Murphy"): owner lives in one unit.',
          '**Single-family home sold/rented by an owner** who owns no more than three such homes, **without a broker** and without discriminatory advertising.',
          '**Religious organizations** may give preference to members (unless membership is restricted by race). **Private clubs** may limit lodging to members.',
          '**Housing for older persons:** 55+ communities (at least **80%** of occupied units with one person 55+, plus published policies) or 62+ communities (**all** occupants 62+) may exclude families with children.',
          'No exemption ever applies if a **licensee** is involved, if **discriminatory advertising** is used, or if the discrimination is based on **race** (1866 Act).',
        ],
        keyPoints: ['Exemptions vanish when a licensee is used', 'Never an exemption for race', '55+: 80% rule; 62+: 100%'],
        examTips: ['If the question mentions a licensee or an ad stating a preference, the exemption is gone.'],
      },
      {
        title: 'Disability, ADA, and assistance animals',
        body: [
          'Housing providers must allow **reasonable modifications** (usually at the tenant\'s expense) and make **reasonable accommodations** in rules and policies.',
          'Assistance animals (service and emotional support animals) are not pets: no pet fees or pet deposits, though the tenant is liable for damage. Florida (760.27) lets a landlord request **reliable documentation** of the disability-related need when it isn\'t obvious, and knowingly **misrepresenting** a need for an ESA is a **second-degree misdemeanor**.',
          'The **ADA Title III** requires public accommodations and commercial facilities (including real estate offices) to remove barriers when readily achievable.',
        ],
        keyPoints: ['Modifications = physical (usually tenant pays)', 'Accommodations = rule changes', 'No pet deposit for assistance animals'],
        examTips: [],
      },
      {
        title: 'Enforcement and fair lending',
        body: [
          'Complaints may be filed with **HUD within 1 year**; a private civil lawsuit may be filed **within 2 years**. In Florida, complaints may also go to the **Florida Commission on Human Relations** within 1 year.',
          'The **Equal Credit Opportunity Act (ECOA)** bars lending discrimination based on **race, color, religion, national origin, sex, marital status, age** (if old enough to contract), and **receipt of public assistance**.',
          'The **Home Mortgage Disclosure Act (HMDA)** requires lenders to report loan data so regulators can detect redlining. The **Community Reinvestment Act (CRA)** requires banks to meet the credit needs of their whole community.',
        ],
        keyPoints: ['HUD 1 yr · lawsuit 2 yrs', 'ECOA adds marital status, age, public assistance'],
        examTips: [],
      },
    ],
    flashcards: [
      { front: 'Seven fair housing protected classes', back: 'Race, color, religion, national origin, sex, handicap, familial status.' },
      { front: 'Civil Rights Act of 1866', back: 'Prohibits racial discrimination in property — no exemptions (Jones v. Mayer, 1968).' },
      { front: 'Steering', back: 'Channeling buyers/renters toward or away from areas based on a protected class.' },
      { front: 'Blockbusting', back: 'Inducing owners to sell by warning that a protected class is moving in.' },
      { front: 'Redlining', back: 'Lender refuses/limits loans in an area due to its racial or ethnic makeup.' },
      { front: 'When do fair housing exemptions disappear?', back: 'When a licensee is used, when discriminatory ads are used, or when race is the basis.' },
      { front: '55+ housing test', back: 'At least 80% of occupied units have one person 55+, with published policies.' },
      { front: 'Fair housing complaint deadlines', back: 'HUD/FCHR within 1 year; civil suit within 2 years.' },
      { front: 'ECOA protected classes', back: 'Race, color, religion, national origin, sex, marital status, age, public assistance income.' },
      { front: 'Reasonable modification vs accommodation', back: 'Modification = physical change (usually tenant pays); accommodation = rule/policy change.' },
    ],
    questions: [
      { q: 'Which is NOT a protected class under the federal Fair Housing Act?', o: ['Familial status', 'Handicap', 'Marital status', 'Religion'], a: 2, e: 'Marital status is protected under ECOA (lending), not the Fair Housing Act.' },
      { q: 'An agent tells Hispanic buyers they would "fit in better" in a certain neighborhood and doesn\'t show them other areas. This is:', o: ['Blockbusting', 'Steering', 'Redlining', 'Puffing'], a: 1, e: 'Directing buyers based on a protected class is steering.' },
      { q: 'An agent mails flyers warning owners that "property values will drop as new groups move in — sell now." This is:', o: ['Steering', 'Redlining', 'Blockbusting', 'Legal prospecting'], a: 2, e: 'Inducing sales through fear of protected-class entry is blockbusting.' },
      { q: 'An owner of three single-family homes lists one with a broker and tells the broker not to show it to families with children. The owner:', o: ['Is exempt because they own three or fewer homes', 'Loses the exemption because a broker is used', 'Is exempt if the ad is neutral', 'Is exempt under Mrs. Murphy'], a: 1, e: 'The single-family exemption requires selling without a broker.' },
      { q: 'An owner of an owner-occupied fourplex refuses to rent to a tenant because of race. This is:', o: ['Legal under the Mrs. Murphy exemption', 'Illegal — race discrimination has no exemption under the 1866 Act', 'Legal if no licensee is used', 'Legal if no ad is placed'], a: 1, e: 'The Civil Rights Act of 1866 prohibits all racial discrimination with no exemptions.' },
      { q: 'A 55+ community may legally exclude families with children if:', o: ['Any resident is over 55', 'At least 80% of occupied units have at least one person age 55 or older, with published policies', 'The HOA votes to do so', 'The community has a pool'], a: 1, e: 'That is the Housing for Older Persons test for 55+ communities.' },
      { q: 'A tenant with an emotional support animal asks to live in a "no pets" building. The landlord may:', o: ['Charge a pet deposit', 'Refuse because it is not a trained service dog', 'Request reliable documentation of the disability-related need if the need is not obvious', 'Charge monthly pet rent'], a: 2, e: 'Assistance animals are a reasonable accommodation; Florida allows requesting reliable documentation, but no pet fees.' },
      { q: 'A wheelchair user asks to install grab bars in a rental bathroom. This is a request for a reasonable:', o: ['Accommodation, paid by the landlord', 'Modification, usually at the tenant\'s expense', 'Exemption', 'Variance'], a: 1, e: 'Physical changes are modifications, generally at the tenant\'s cost in private housing.' },
      { q: 'A fair housing complaint must be filed with HUD within:', o: ['180 days', '1 year', '2 years', '3 years'], a: 1, e: 'One year for HUD; two years for a civil lawsuit.' },
      { q: 'Under ECOA, a lender may NOT consider:', o: ['Credit history', 'The applicant\'s receipt of public assistance income as a reason to deny', 'Debt-to-income ratio', 'Employment history'], a: 1, e: 'Receipt of public assistance is a protected category under ECOA.' },
      { q: 'A lender refuses to make loans in a neighborhood because most residents are of one national origin. This is:', o: ['Steering', 'Blockbusting', 'Redlining', 'Disparate appraisal'], a: 2, e: 'Redlining is a lending practice based on an area\'s protected-class makeup.' },
    ],
  },

  // ------------------------------------------------------------
  {
    id: 'pl5', num: 5, title: 'Prospecting for Sellers & Buyers',
    subtitle: 'Farming, FSBOs, expireds, and the do-not-call and CAN-SPAM rules',
    color: '#F59E0B', percentage: 10,
    objectives: [
      'Choose and run prospecting methods (sphere, farm, FSBO, expired)',
      'Follow federal and Florida telemarketing rules',
      'Follow CAN-SPAM for email marketing',
    ],
    sections: [
      {
        title: 'Prospecting methods',
        body: [
          '**Sphere of influence:** people you already know — usually the highest-converting, lowest-cost source.',
          '**Geographic farming:** consistent, repeated contact with a defined neighborhood to become its recognized expert.',
          '**FSBOs** (for sale by owner) and **expired listings** are sellers who have already shown motivation.',
          'Open houses, referrals from past clients, social media, and online leads round out the mix. Consistency beats intensity.',
        ],
        keyPoints: ['Sphere converts best', 'Farm = repeated contact in one area', 'FSBOs and expireds show motivation'],
        examTips: [],
      },
      {
        title: 'Telephone solicitation rules',
        body: [
          'Federal **Telephone Consumer Protection Act (TCPA)** / **National Do Not Call Registry**: don\'t call registered numbers; scrub your list against the registry **at least every 31 days**; call only between **8 a.m. and 9 p.m.** (recipient\'s local time); keep a company-specific do-not-call list.',
          '**Established business relationship** exception: up to **18 months** after the last transaction, or **3 months** after the consumer\'s inquiry.',
          'Florida\'s **Telephone Solicitation Act (501.059)** is stricter: calls only between **8 a.m. and 8 p.m.**, and no more than **3 calls in 24 hours** to the same person on the same subject. Florida also keeps its own do-not-call list.',
          'Autodialed or prerecorded calls and texts generally require **prior express written consent**.',
          'Calling a FSBO seller to **list** the property is a solicitation; calling to offer a buyer may be treated differently — when in doubt, follow the stricter rule.',
        ],
        keyPoints: ['Scrub every 31 days', 'Federal 8am–9pm; Florida 8am–8pm', 'FL: max 3 calls/24 hrs same subject', 'EBR: 18 months / 3 months'],
        examTips: ['On a Florida question, use Florida\'s 8 p.m. cutoff.'],
      },
      {
        title: 'Email and texting',
        body: [
          '**CAN-SPAM Act**: no false or misleading header or subject; identify the message as an ad; include a valid **physical postal address**; provide a clear opt-out and honor it within **10 business days**.',
          'Marketing texts sent with automated systems need prior express written consent under the TCPA.',
        ],
        keyPoints: ['CAN-SPAM: honest subject, physical address, opt-out honored in 10 business days'],
        examTips: [],
      },
    ],
    flashcards: [
      { front: 'How often must you scrub against the National Do Not Call Registry?', back: 'At least every 31 days.' },
      { front: 'Federal calling hours', back: '8 a.m. to 9 p.m. recipient\'s local time.' },
      { front: 'Florida calling hours and frequency limit', back: '8 a.m. to 8 p.m.; no more than 3 calls in 24 hours on the same subject.' },
      { front: 'Established business relationship exception', back: '18 months after last transaction; 3 months after an inquiry.' },
      { front: 'CAN-SPAM opt-out deadline', back: 'Honor within 10 business days.' },
      { front: 'Geographic farming', back: 'Repeated, consistent marketing to one defined neighborhood.' },
    ],
    questions: [
      { q: 'An associate prospects by phone. How often must the list be checked against the National Do Not Call Registry?', o: ['Every 7 days', 'Every 31 days', 'Every 90 days', 'Once a year'], a: 1, e: 'The Telemarketing Sales Rule requires scrubbing at least every 31 days.' },
      { q: 'Under Florida law, a telephone solicitation call to a Florida resident may be made:', o: ['8 a.m. to 9 p.m.', '8 a.m. to 8 p.m.', '9 a.m. to 9 p.m.', 'Any time if the number is not on a list'], a: 1, e: 'Florida\'s Telephone Solicitation Act limits calls to 8 a.m.–8 p.m.' },
      { q: 'Under Florida law, how many solicitation calls on the same subject may be made to the same person in 24 hours?', o: ['1', '2', '3', '5'], a: 2, e: 'No more than three calls in 24 hours on the same subject.' },
      { q: 'A past client closed 14 months ago and is on the Do Not Call Registry. May the associate call?', o: ['No, never', 'Yes — the established business relationship lasts 18 months after the last transaction', 'Only by text', 'Only before noon'], a: 1, e: 'The EBR exception covers 18 months after the last transaction.' },
      { q: 'Under CAN-SPAM, a marketing email must include:', o: ['The recipient\'s phone number', 'A valid physical postal address and an opt-out method', 'The associate\'s license number', 'A read receipt'], a: 1, e: 'CAN-SPAM requires a physical address and a working opt-out honored within 10 business days.' },
      { q: 'Which prospecting source generally produces the highest conversion at the lowest cost?', o: ['Cold calling', 'Sphere of influence and past clients', 'Paid online leads', 'Billboards'], a: 1, e: 'People who already know and trust you convert best.' },
      { q: 'Mailing a monthly market update to the same 500 homes in one subdivision is:', o: ['Canvassing', 'Geographic farming', 'Blockbusting', 'Steering'], a: 1, e: 'Farming is repeated contact with a defined area.' },
    ],
  },

  // ------------------------------------------------------------
  {
    id: 'pl6', num: 6, title: 'Pricing & Listing Property',
    subtitle: 'CMAs, adjustments, BPOs, listing agreements, and seller disclosures',
    color: '#EF4444', percentage: 13,
    objectives: [
      'Build a CMA and make adjustments in the right direction',
      'Know what a BPO is and what it cannot be called',
      'Draft listing agreements that meet 475.25(1)(r)',
      'Know Florida seller disclosures (radon, flood, HOA/condo, lead paint)',
    ],
    sections: [
      {
        title: 'Comparative market analysis (CMA)',
        body: [
          'A CMA uses **sold** comparables (best evidence), **pending** sales (current direction), **active** listings (the competition), and **expired** listings (what the market rejected).',
          '**Always adjust the comparable, never the subject.** If the comp has a feature the subject lacks (comp is superior), **subtract** its value from the comp. If the comp lacks a feature the subject has (comp is inferior), **add**. Memory aid: **CBS — Comp Better, Subtract; CPA — Comp Poorer, Add**.',
          '**Absorption rate / months of inventory** = active listings ÷ average monthly sales. About 6 months is often treated as balanced; fewer suggests a seller\'s market.',
          '**List-to-sale ratio** = sale price ÷ list price, a gauge of how accurately homes are priced.',
        ],
        keyPoints: ['Adjust the comp', 'Comp better → subtract; comp poorer → add', 'Months of inventory = actives ÷ monthly sales'],
        examTips: ['Classic trap: adjusting the subject. Always adjust the comp.'],
      },
      {
        title: 'BPOs and appraisals',
        body: [
          'A Florida licensee may prepare a **broker price opinion (BPO)** or CMA, and may be paid for it, as long as it is **not referred to as an appraisal** and isn\'t used for a federally related transaction requiring an appraisal (475.612).',
          'Overpricing is the most common reason listings expire; pricing right at the start draws the most attention in the first weeks.',
        ],
        keyPoints: ['BPO/CMA ≠ appraisal', 'Licensees may be paid for BPOs'],
        examTips: [],
      },
      {
        title: 'The listing agreement',
        body: [
          'Types: **exclusive right of sale** (broker paid no matter who sells — most common), **exclusive agency** (no commission if the owner sells it themselves), and **open listing** (only the procuring broker is paid).',
          'Under **475.25(1)(r)**, a written listing must include a **definite expiration date**, a description of the property, price and terms, the fee or commission, and the signatures of the owner. It may **not** contain an automatic renewal clause, and a copy must go to the principal **within 24 hours** of signing.',
          'Commissions are **negotiable** — no one may fix commission rates.',
        ],
        keyPoints: ['Definite expiration date', 'No automatic renewal', 'Copy to principal within 24 hours', 'Commissions negotiable'],
        examTips: [],
      },
      {
        title: 'Seller disclosures in Florida',
        body: [
          '**Radon:** a required notice must be provided for the **sale or rental of any building** (404.056).',
          '**Flood disclosure (689.302):** for contracts on or after **October 1, 2025**, sellers of residential property must give a flood disclosure **at or before the buyer signs** the contract (known flood damage, insurance claims, and federal flood assistance received).',
          '**Lead-based paint:** for housing built **before 1978**, give the EPA pamphlet and disclosure form, and offer the buyer a **10-day** opportunity to test.',
          '**HOA (720.401):** give the disclosure summary before the contract is signed; if not, the buyer may cancel within **3 days** after receiving it or before closing, whichever comes first.',
          '**Condominium resale (718.503):** the buyer may cancel within **3 days** (excluding weekends/holidays) after receiving the condo documents, or before closing if earlier. New developer sales: **15 days**.',
          '**Property tax disclosure:** buyers must be told not to rely on the seller\'s current taxes, because a sale can cause reassessment.',
        ],
        keyPoints: ['Radon: sale or rental of any building', 'Flood disclosure: residential, at/before contract (from 10/1/2025)', 'Lead: pre-1978, 10 days', 'Condo resale 3 days · developer 15 days · HOA 3 days'],
        examTips: [],
      },
    ],
    flashcards: [
      { front: 'CMA adjustment rule', back: 'Adjust the comparable. Comp better → subtract. Comp poorer → add.' },
      { front: 'Best evidence of value in a CMA', back: 'Recently sold comparables.' },
      { front: 'Months of inventory formula', back: 'Active listings ÷ average monthly sales.' },
      { front: 'Can a licensee be paid for a BPO?', back: 'Yes — but it may not be called an appraisal (475.612).' },
      { front: 'Required listing agreement elements', back: 'Definite expiration date, property description, price & terms, fee, owner signature; no auto-renewal; copy within 24 hours.' },
      { front: 'Exclusive right of sale', back: 'Broker earns the commission no matter who sells — including the owner.' },
      { front: 'Exclusive agency listing', back: 'Owner owes no commission if they find the buyer themselves.' },
      { front: 'Lead-based paint rule', back: 'Pre-1978 housing: pamphlet, disclosure, 10-day testing opportunity.' },
      { front: 'Condo resale cancellation right', back: '3 days (excl. weekends/holidays) after receiving documents; developer sales 15 days.' },
      { front: 'Florida flood disclosure', back: '689.302 — residential sellers, at or before contract, for contracts from Oct 1, 2025.' },
    ],
    questions: [
      { q: 'A comparable sold for $410,000 and has a pool; the subject does not. The pool is worth $25,000. The adjusted value of the comparable is:', o: ['$385,000', '$410,000', '$435,000', '$422,500'], a: 0, e: 'The comp is better, so subtract: $410,000 − $25,000 = $385,000.' },
      { q: 'A comparable sold for $300,000 and has no garage; the subject has a garage worth $15,000. The adjusted comparable value is:', o: ['$285,000', '$300,000', '$315,000', '$330,000'], a: 2, e: 'The comp is inferior, so add: $300,000 + $15,000 = $315,000.' },
      { q: 'In a CMA, adjustments are made to:', o: ['The subject property', 'The comparable properties', 'Both equally', 'Only active listings'], a: 1, e: 'Always adjust the comparables to make them look like the subject.' },
      { q: 'There are 240 active listings and an average of 60 sales per month. Months of inventory:', o: ['2', '4', '6', '8'], a: 1, e: '240 ÷ 60 = 4 months — generally a seller-leaning market.' },
      { q: 'A Florida sales associate prepares a BPO for a fee. Which is true?', o: ['It is illegal to charge for a BPO', 'It is legal if not referred to as an appraisal', 'It must be signed by a certified appraiser', 'Only brokers may prepare BPOs'], a: 1, e: '475.612 permits BPOs for compensation, but they may not be called appraisals.' },
      { q: 'Which clause is prohibited in a Florida listing agreement?', o: ['A definite expiration date', 'An automatic renewal clause', 'The commission amount', 'A property description'], a: 1, e: 'Automatic renewal is prohibited; a definite expiration date is required.' },
      { q: 'After the seller signs a listing agreement, a copy must be given to the seller within:', o: ['24 hours', '3 business days', '5 days', '10 days'], a: 0, e: '475.25(1)(r) requires delivery to the principal within 24 hours.' },
      { q: 'Under an exclusive agency listing, the broker earns no commission if:', o: ['Another broker sells it', 'The owner sells it to a buyer the owner found', 'The listing expires with a pending offer', 'The buyer is unrepresented'], a: 1, e: 'Exclusive agency lets the owner sell without owing a commission.' },
      { q: 'A home built in 1972 is being sold. The seller must:', o: ['Remove all lead paint before closing', 'Provide the lead pamphlet and disclosure and allow a 10-day testing opportunity', 'Get a lead inspection', 'Nothing — Florida exempts older homes'], a: 1, e: 'Pre-1978 housing triggers federal lead disclosure and a 10-day testing opportunity (the buyer may waive).' },
      { q: 'A buyer of a condo resale receives the documents on Tuesday. The buyer may cancel within:', o: ['3 days (excluding weekends/holidays) after receipt, or before closing if earlier', '10 days', '15 days', 'No cancellation right on resales'], a: 0, e: '718.503 gives resale buyers 3 days after receiving documents; developer purchasers get 15 days.' },
      { q: 'Florida\'s radon disclosure is required for:', o: ['Only new construction', 'Only homes with basements', 'The sale or rental of any building', 'Only commercial property'], a: 2, e: '404.056 requires the notice at the time of or before the contract for sale or rental of any building.' },
    ],
  },
];
