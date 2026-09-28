// ============================================================
// FL SALES ASSOCIATE POST-LICENSING (45 HR) — UNITS 7–9
// Original study material written from public law. Not copied
// from any course provider.
// ============================================================

export const UNITS_C = [
  // ------------------------------------------------------------
  {
    id: 'pl7', num: 7, title: 'Real Estate as an Investment',
    subtitle: 'NOI, cap rate, cash flow, leverage, depreciation, 1031, and homestead',
    color: '#06B6D4', percentage: 11,
    objectives: [
      'Build an operating statement from gross income to NOI',
      'Use cap rate, GRM, and cash-on-cash to value and compare properties',
      'Know depreciation periods, 1031 timelines, and the home-sale exclusion',
      'Apply Florida homestead and property tax basics',
    ],
    sections: [
      {
        title: 'The operating statement',
        body: [
          '**Potential gross income (PGI)** − vacancy & credit loss + other income = **effective gross income (EGI)**.',
          'EGI − operating expenses = **net operating income (NOI)**.',
          'Operating expenses include taxes, insurance, management, maintenance, utilities, and reserves. They do **not** include **debt service (mortgage payments), depreciation, or income taxes**.',
          'NOI − annual debt service = **before-tax cash flow**.',
        ],
        keyPoints: ['PGI − vacancy + other = EGI', 'EGI − opex = NOI', 'No mortgage or depreciation in NOI'],
        examTips: ['If a question lists the mortgage payment among expenses, leave it out of NOI.'],
      },
      {
        title: 'Valuation and return measures',
        body: [
          '**Cap rate = NOI ÷ value**, so **value = NOI ÷ cap rate** (IRV: Income = Rate × Value). A higher cap rate means a lower value and generally higher perceived risk.',
          '**Gross rent multiplier (GRM) = price ÷ monthly gross rent** (used for 1–4 unit residential). Gross income multiplier (GIM) uses annual income.',
          '**Cash-on-cash return = annual before-tax cash flow ÷ cash invested.**',
          '**Leverage:** using borrowed money. Positive leverage increases the return on equity when the property earns more than the cost of the debt.',
          'Risks: illiquidity, management burden, market and interest-rate risk.',
        ],
        keyPoints: ['Value = NOI ÷ cap rate', 'GRM = price ÷ monthly rent', 'Cash-on-cash = cash flow ÷ cash invested'],
        examTips: ['Higher cap rate → lower value (inverse relationship).'],
      },
      {
        title: 'Federal tax basics',
        body: [
          '**Depreciation** (cost recovery) applies to **improvements only, never land**: **27.5 years** for residential rental property, **39 years** for nonresidential.',
          '**1031 like-kind exchange** defers gain on investment/business real property: identify the replacement property within **45 days** and close within **180 days**. Cash or debt relief received ("**boot**") is taxable.',
          '**Home-sale exclusion (Section 121):** up to **$250,000** of gain ($500,000 married filing jointly) if owned and used as the principal residence for **2 of the last 5 years**.',
        ],
        keyPoints: ['27.5 yrs residential · 39 yrs commercial · land never', '1031: 45 / 180 days; boot is taxable', '$250K / $500K, 2 of 5 years'],
        examTips: [],
      },
      {
        title: 'Florida property taxes and homestead',
        body: [
          'Homestead exemption: up to **$50,000** — the first $25,000 applies to all taxes; the second $25,000 applies to assessed value between $50,000 and $75,000 and does not apply to school taxes. Own and live there on **January 1**; apply by **March 1**.',
          '**Save Our Homes:** annual assessed-value increases on homestead are capped at **3% or the CPI change, whichever is less**. The cap resets at sale — which is why buyers should not rely on the seller\'s tax bill. **Portability** lets owners move up to $500,000 of the accumulated difference to a new homestead.',
          'Taxes are paid in **arrears** for the calendar year: bills go out in November with a **4% discount** for November payment, and taxes become delinquent **April 1**.',
        ],
        keyPoints: ['Homestead up to $50K', 'SOH cap: 3% or CPI, lesser', 'Taxes in arrears; 4% Nov discount; delinquent April 1'],
        examTips: [],
      },
    ],
    flashcards: [
      { front: 'NOI formula', back: 'PGI − vacancy & credit loss + other income − operating expenses.' },
      { front: 'Items excluded from operating expenses', back: 'Debt service, depreciation, income taxes, capital improvements.' },
      { front: 'Cap rate formula', back: 'Cap rate = NOI ÷ value; value = NOI ÷ cap rate.' },
      { front: 'GRM', back: 'Sales price ÷ monthly gross rent.' },
      { front: 'Cash-on-cash return', back: 'Annual before-tax cash flow ÷ total cash invested.' },
      { front: 'Depreciation periods', back: 'Residential rental 27.5 years; nonresidential 39 years; land is never depreciated.' },
      { front: '1031 exchange deadlines', back: 'Identify in 45 days; close in 180 days.' },
      { front: 'Boot', back: 'Cash or other non-like-kind value received in an exchange — taxable.' },
      { front: 'Home-sale exclusion', back: '$250K single / $500K married; owned and lived in 2 of last 5 years.' },
      { front: 'Save Our Homes cap', back: 'Homestead assessment increase limited to 3% or CPI, whichever is less.' },
    ],
    questions: [
      { q: 'A property has PGI of $150,000, vacancy of 6%, and operating expenses of $51,000. What is the NOI?', o: ['$90,000', '$99,000', '$141,000', '$150,000'], a: 0, e: 'EGI = $150,000 × 0.94 = $141,000; NOI = $141,000 − $51,000 = $90,000.' },
      { q: 'A building has NOI of $84,000. Investors expect an 8% cap rate. Its estimated value is:', o: ['$672,000', '$840,000', '$1,050,000', '$1,200,000'], a: 2, e: 'Value = NOI ÷ cap rate = $84,000 ÷ 0.08 = $1,050,000.' },
      { q: 'Which item is included in operating expenses?', o: ['Mortgage principal and interest', 'Depreciation', 'Property management fees', 'Owner\'s income taxes'], a: 2, e: 'Management fees are an operating expense; debt service, depreciation, and income taxes are not.' },
      { q: 'If the cap rate used to value a property increases while NOI stays the same, the value:', o: ['Increases', 'Decreases', 'Stays the same', 'Doubles'], a: 1, e: 'Value = NOI ÷ rate; a higher rate means a lower value.' },
      { q: 'A duplex sells for $360,000 and rents for $3,000 per month total. The GRM is:', o: ['10', '100', '120', '1,200'], a: 2, e: '$360,000 ÷ $3,000 = 120.' },
      { q: 'An investor puts $100,000 cash into a property that produces $8,500 of before-tax cash flow per year. The cash-on-cash return is:', o: ['5.5%', '8.5%', '11.8%', '85%'], a: 1, e: '$8,500 ÷ $100,000 = 8.5%.' },
      { q: 'Residential rental improvements are depreciated over:', o: ['15 years', '27.5 years', '31.5 years', '39 years'], a: 1, e: '27.5 years for residential rental; 39 for nonresidential.' },
      { q: 'In a 1031 exchange, the replacement property must be identified within:', o: ['30 days', '45 days', '90 days', '180 days'], a: 1, e: 'Identify within 45 days; complete the purchase within 180 days.' },
      { q: 'A married couple filing jointly has lived in their home 3 of the last 5 years and has a $420,000 gain. How much is taxable under the home-sale exclusion?', o: ['$0', '$170,000', '$250,000', '$420,000'], a: 0, e: 'Up to $500,000 is excluded for married joint filers who meet the 2-of-5 test.' },
      { q: 'Under Save Our Homes, a homestead\'s assessed value may increase each year by no more than:', o: ['3% or the CPI change, whichever is less', '5%', '10%', 'The CPI change plus 1%'], a: 0, e: 'The cap is the lesser of 3% or the CPI change.' },
      { q: 'Florida property taxes are delinquent if not paid by:', o: ['November 1', 'December 31', 'March 31', 'April 1'], a: 3, e: 'Taxes are payable from November with a 4% discount and become delinquent April 1.' },
    ],
  },

  // ------------------------------------------------------------
  {
    id: 'pl8', num: 8, title: 'From Contract to Closing',
    subtitle: 'Contract formation, financing, TRID, closing costs, and prorations',
    color: '#84CC16', percentage: 13,
    objectives: [
      'Know when a contract is effective and how deposits and contingencies work',
      'Know TRID timelines and RESPA rules',
      'Calculate Florida documentary stamp and intangible taxes',
      'Prorate using the Florida convention (buyer owns the day of closing)',
    ],
    sections: [
      {
        title: 'Contracts and contingencies',
        body: [
          'A contract becomes binding when the final offer or counteroffer is **accepted and delivered**. The **effective date** starts the clock for deposits, inspections, and financing.',
          'Common contingencies: **inspection**, **financing (loan approval)**, **appraisal**, and **title**. Missing a contingency deadline can waive the protection.',
          'Licensees may fill in blanks on approved standard forms (such as Florida Realtors®/Florida Bar forms) but may **not give legal advice** or draft unique legal clauses — that is the unauthorized practice of law.',
          '**Florida Realtors/Florida Bar "AS IS" contract:** the buyer may inspect and cancel during the inspection period for any reason, but the seller has no repair obligation. The **standard** contract includes a repair limit.',
        ],
        keyPoints: ['Effective date starts the clocks', 'Fill in blanks — no legal advice', 'AS IS = cancel right, no repair obligation'],
        examTips: [],
      },
      {
        title: 'Financing and consumer disclosure',
        body: [
          '**RESPA** covers federally related mortgage loans on **1–4 family residential** property and prohibits **kickbacks and unearned referral fees** (Section 8).',
          '**TRID** (TILA-RESPA Integrated Disclosure): the lender must deliver the **Loan Estimate within 3 business days** after application, and the borrower must receive the **Closing Disclosure at least 3 business days before closing (consummation)**. Certain changes (APR increase beyond tolerance, loan product change, prepayment penalty added) restart the 3-day wait.',
          '**Truth in Lending (Reg Z):** if an ad uses a **trigger term** (down payment, number of payments, payment amount, finance charge), it must disclose the full terms including the **APR**.',
        ],
        keyPoints: ['LE within 3 business days of application', 'CD at least 3 business days before closing', 'RESPA §8: no kickbacks', 'Trigger terms → full disclosure incl. APR'],
        examTips: [],
      },
      {
        title: 'Florida closing costs',
        body: [
          '**Documentary stamp tax on the deed:** **$0.70 per $100** (or fraction) of the consideration — customarily **paid by the seller**. (Miami-Dade uses $0.60 per $100 for single-family residences.)',
          '**Documentary stamp tax on the note:** **$0.35 per $100** of the new note — paid by the **buyer**, including on assumed mortgages.',
          '**Intangible tax on the mortgage:** **0.2% (2 mills)** of the new mortgage amount — paid by the **buyer**.',
          'Example on a $400,000 sale with a $320,000 new loan: deed stamps $2,800; note stamps $1,120; intangible tax $640.',
        ],
        keyPoints: ['Deed: $0.70/$100 (seller)', 'Note: $0.35/$100 (buyer)', 'Intangible: .002 × new mortgage (buyer)'],
        examTips: ['Round the price UP to the next $100 for doc stamps ("or fraction thereof").', 'Intangible tax applies only to NEW mortgages — not assumed ones.'],
      },
      {
        title: 'Prorations',
        body: [
          'Under the standard Florida contract convention, **the buyer owns the day of closing**: the seller is charged through the day **before** closing.',
          'Use a **365-day year** (actual days) unless told otherwise.',
          '**Property taxes are paid in arrears**, so at a mid-year closing the seller has not yet paid their share: **debit seller, credit buyer**.',
          '**Rent is collected in advance**, so the seller owes the buyer the unearned rent for the rest of the month: **debit seller, credit buyer**.',
        ],
        keyPoints: ['Buyer owns day of closing', 'Taxes in arrears → debit seller / credit buyer', 'Prepaid rent → debit seller / credit buyer'],
        examTips: [],
      },
    ],
    flashcards: [
      { front: 'Florida deed doc stamps', back: '$0.70 per $100 of price (round up) — usually seller-paid.' },
      { front: 'Note doc stamps', back: '$0.35 per $100 of the note — buyer-paid.' },
      { front: 'Intangible tax', back: '0.2% (0.002) of the new mortgage — buyer-paid.' },
      { front: 'Loan Estimate timing', back: 'Within 3 business days after loan application.' },
      { front: 'Closing Disclosure timing', back: 'Received at least 3 business days before consummation.' },
      { front: 'RESPA Section 8', back: 'Prohibits kickbacks and unearned referral fees.' },
      { front: 'Who owns the day of closing in Florida?', back: 'The buyer (seller pays through the day before).' },
      { front: 'Tax proration at mid-year closing', back: 'Debit seller, credit buyer (taxes paid in arrears).' },
      { front: 'Trigger terms (Reg Z)', back: 'Down payment, number/amount of payments, finance charge → must disclose APR and terms.' },
    ],
    questions: [
      { q: 'A home sells for $385,000 in Lee County. The documentary stamp tax on the deed is:', o: ['$1,347.50', '$2,310.00', '$2,695.00', '$3,850.00'], a: 2, e: '$385,000 ÷ 100 = 3,850 × $0.70 = $2,695.' },
      { q: 'A buyer obtains a new $300,000 mortgage. The intangible tax is:', o: ['$300', '$600', '$1,050', '$2,100'], a: 1, e: '$300,000 × 0.002 = $600.' },
      { q: 'The documentary stamp tax on a new $250,000 note is:', o: ['$500', '$875', '$1,750', '$2,500'], a: 1, e: '2,500 × $0.35 = $875.' },
      { q: 'A buyer assumes the seller\'s $180,000 mortgage. Which tax does NOT apply to the assumed loan?', o: ['Documentary stamp tax on the note', 'Intangible tax', 'Documentary stamp tax on the deed', 'All apply'], a: 1, e: 'Intangible tax applies only to new mortgages; note stamps still apply to an assumed mortgage.' },
      { q: 'Under TRID, the borrower must receive the Closing Disclosure:', o: ['At closing', 'At least 1 business day before closing', 'At least 3 business days before closing', 'Within 3 days after application'], a: 2, e: 'The CD must be received at least 3 business days before consummation.' },
      { q: 'The Loan Estimate must be delivered:', o: ['Within 3 business days after application', 'At least 7 days before closing', 'At closing', 'Within 10 days after application'], a: 0, e: 'The LE is due within 3 business days after the lender receives the application.' },
      { q: 'A title company pays an associate $200 for each client referred, for no service performed. This violates:', o: ['ECOA', 'RESPA Section 8', 'The Fair Housing Act', 'TILA trigger terms'], a: 1, e: 'RESPA Section 8 prohibits kickbacks and unearned referral fees.' },
      { q: 'An ad says "Only $1,500 down!" Under Regulation Z, the ad must also disclose:', o: ['Nothing more', 'The lender\'s name only', 'The APR and other terms of repayment', 'The seller\'s name'], a: 2, e: 'The down payment is a trigger term requiring full disclosure, including the APR.' },
      { q: 'A mid-year closing in Florida. How are the current year\'s property taxes shown on the closing statement?', o: ['Debit buyer, credit seller', 'Debit seller, credit buyer', 'Debit both', 'Not prorated'], a: 1, e: 'Taxes are paid in arrears; the seller owes their share to the buyer.' },
      { q: 'A duplex closes on the 11th of a 30-day month. The seller collected $3,000 rent for the month. Using the Florida convention (buyer owns day of closing), the proration is:', o: ['Credit buyer $2,000', 'Credit buyer $1,900', 'Credit seller $1,000', 'Credit buyer $1,100'], a: 0, e: 'Seller owns days 1–10 (10 days). The buyer is owed 20 days × $100 = $2,000: debit seller, credit buyer.' },
      { q: 'A buyer asks the associate whether to take title as tenants by the entirety or joint tenants for estate planning. The associate should:', o: ['Recommend tenants by the entirety', 'Recommend joint tenancy', 'Refer the buyer to an attorney', 'Choose whichever the lender prefers'], a: 2, e: 'Advising on how to hold title is legal advice — refer to an attorney.' },
    ],
  },

  // ------------------------------------------------------------
  {
    id: 'pl9', num: 9, title: 'Property Management & Leasing',
    subtitle: 'Florida Residential Landlord and Tenant Act (Ch. 83), deposits, notices, evictions',
    color: '#A855F7', percentage: 7,
    objectives: [
      'Handle security deposits under 83.49',
      'Serve the correct notices (3-day, 7-day, termination)',
      'Know licensing boundaries: property managers, CAMs, rental list companies',
    ],
    sections: [
      {
        title: 'Security deposits (83.49)',
        body: [
          'Within **30 days** of receiving a deposit, the landlord must give the tenant written notice of **how and where** it is held (separate non-interest account, interest-bearing account, or surety bond).',
          'After the tenant vacates: if no claim, return the deposit within **15 days**. If making a claim, send written notice by **certified mail within 30 days** listing the reasons. The tenant then has **15 days** to object; otherwise the landlord may deduct.',
          'A broker managing rentals holds deposits in the brokerage escrow account under FREC rules.',
        ],
        keyPoints: ['30 days: notice of how deposit is held', 'Return in 15 days if no claim', 'Claim notice by certified mail within 30 days; tenant 15 days to object'],
        examTips: [],
      },
      {
        title: 'Notices and termination',
        body: [
          '**3-day notice** to pay rent or leave — the 3 days **exclude Saturdays, Sundays, and legal holidays**.',
          '**7-day notice** for noncompliance: **curable** (fix within 7 days) or **non-curable** (e.g., intentional destruction or repeat violation within 12 months) to vacate in 7 days.',
          'Termination of periodic tenancies without a specific end: **week-to-week — 7 days**; **month-to-month — 30 days** (increased from 15 days in 2023); quarter-to-quarter — 30 days; year-to-year — 60 days.',
          'Landlord access for repairs: reasonable notice of at least **24 hours**, entering between **7:30 a.m. and 8:00 p.m.** (emergencies excepted).',
          'Evictions go through the **county court**; **self-help** (changing locks, removing doors, cutting off utilities) is prohibited.',
        ],
        keyPoints: ['3-day: excludes weekends & holidays', '7-day: curable / non-curable', 'Month-to-month: 30 days', 'Entry: 24 hrs notice, 7:30 a.m.–8 p.m.', 'No self-help evictions'],
        examTips: [],
      },
      {
        title: 'Licensing boundaries',
        body: [
          'Managing and leasing property **for others for compensation** requires a real estate license (the owner and the owner\'s salaried employees are exempt in limited situations).',
          'A **community association manager (CAM)** license is required to manage associations with **more than 10 units or an annual budget over $100,000**.',
          '**Rental information companies** (475.453) sell rental lists. If the list doesn\'t produce a rental, the prospective tenant is entitled to a refund of **75%** of the fee on demand made within **30 days**.',
          'The property manager is usually a **general agent** of the owner (broad authority for ongoing management), unlike the special agency of a typical listing.',
        ],
        keyPoints: ['CAM: >10 units or >$100K budget', 'Rental list: 75% refund if demanded within 30 days', 'Property manager = general agent'],
        examTips: [],
      },
    ],
    flashcards: [
      { front: 'Notice of how deposit is held', back: 'Within 30 days of receipt.' },
      { front: 'Deposit return with no claim', back: 'Within 15 days after tenant vacates.' },
      { front: 'Deposit claim notice', back: 'Certified mail within 30 days; tenant has 15 days to object.' },
      { front: '3-day notice counting', back: 'Excludes Saturdays, Sundays, legal holidays.' },
      { front: 'Month-to-month termination notice', back: '30 days (since 2023).' },
      { front: 'Landlord entry rules', back: 'At least 24 hours\' notice; 7:30 a.m. to 8:00 p.m.' },
      { front: 'CAM license threshold', back: 'More than 10 units or annual budget over $100,000.' },
      { front: 'Rental list refund', back: '75% of fee if demanded within 30 days and no rental obtained.' },
      { front: 'Self-help eviction', back: 'Prohibited — locking out, removing doors, cutting utilities.' },
    ],
    questions: [
      { q: 'A tenant moves out and the landlord has no claim on the deposit. The deposit must be returned within:', o: ['7 days', '15 days', '30 days', '60 days'], a: 1, e: '83.49 requires return within 15 days if there is no claim.' },
      { q: 'A landlord intends to keep part of a deposit for damage. Notice must be sent by certified mail within:', o: ['15 days', '30 days', '45 days', '60 days'], a: 1, e: 'Within 30 days; the tenant then has 15 days to object.' },
      { q: 'A 3-day notice for nonpayment is delivered Friday; Monday is a legal holiday. The 3 days expire at the end of:', o: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], a: 3, e: 'Excluding Saturday, Sunday, and the Monday holiday, the three days are Tuesday, Wednesday, and Thursday.' },
      { q: 'To end a month-to-month tenancy in Florida, notice must be given at least:', o: ['7 days', '15 days', '30 days', '60 days'], a: 2, e: 'The 2023 change raised the requirement from 15 to 30 days.' },
      { q: 'A landlord wants to make non-emergency repairs. Proper notice and timing is:', o: ['12 hours; any time', '24 hours; between 7:30 a.m. and 8:00 p.m.', '48 hours; business hours only', 'No notice required'], a: 1, e: 'At least 24 hours\' notice, entry between 7:30 a.m. and 8:00 p.m.' },
      { q: 'A tenant is two months behind. The landlord changes the locks. This is:', o: ['Legal after a 3-day notice', 'Legal after a 7-day notice', 'A prohibited self-help eviction', 'Legal if the lease allows it'], a: 2, e: 'Evictions must go through the county court; lockouts are prohibited.' },
      { q: 'Which requires a community association manager license?', o: ['Managing a 6-unit HOA with an $80,000 budget', 'Managing a 40-unit condominium association', 'Leasing a single-family home', 'Selling a condo unit'], a: 1, e: 'A CAM license is required for associations of more than 10 units or with budgets over $100,000.' },
      { q: 'A prospective tenant paid a rental information company for a list, didn\'t find a rental, and demands a refund within 30 days. The refund is:', o: ['0%', '25%', '75%', '100%'], a: 2, e: '475.453 requires a 75% refund on timely demand.' },
      { q: 'A property manager with authority to lease, collect rent, and hire contractors on an ongoing basis is typically a:', o: ['Universal agent', 'General agent', 'Special agent', 'Subagent'], a: 1, e: 'Property management usually creates a general agency.' },
    ],
  },
];
