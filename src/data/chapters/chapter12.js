/**
 * Chapter 12: Residential Mortgages
 * 
 * Covers 9% of the Florida Real Estate Exam
 * Focus: Mortgage instruments, types of loans, and financing concepts
 */

export const CHAPTER_12 = {
  id: 12,
  title: 'Residential Mortgages',
  subtitle: 'Financing Real Estate Purchases',
  examPercentage: 9,
  requiredTimeMinutes: 270, // 4.5 hours minimum
  color: '#A855F7', // Purple
  icon: 'Landmark',
  
  objectives: [
    'Understand the mortgage and promissory note relationship',
    'Explain the difference between title theory and lien theory states',
    'Identify the various types of mortgage loans',
    'Describe loan qualifying criteria and ratios',
    'Understand mortgage clauses and provisions',
    'Explain the foreclosure process in Florida',
    'Describe government-backed loan programs'
  ],

  statutes: [
    { code: 'F.S. 697', title: 'Mortgages and Liens', summary: 'Florida mortgage law requirements' },
    { code: 'F.S. 702', title: 'Mortgage Foreclosure', summary: 'Foreclosure procedures' },
    { code: '12 USC 2601', title: 'RESPA', summary: 'Settlement procedures for mortgages' },
    { code: '15 USC 1601', title: 'TILA', summary: 'Truth in Lending disclosures' }
  ],

  sections: [
    {
      id: '12.1',
      title: 'Mortgage Fundamentals',
      content: `## Understanding Mortgages

A mortgage is a two-part financing arrangement involving a promise to pay and security for that promise.

### The Two Documents

**1. Promissory Note**
- The borrower's promise to repay
- Creates personal liability
- Specifies loan terms: amount, rate, payment, term
- Evidence of the DEBT
- Can exist without mortgage (unsecured loan)

**2. Mortgage (Security Instrument)**
- Pledges property as collateral
- Creates LIEN on property
- Allows lender to foreclose if default
- Does NOT create personal liability (note does)
- Meaningless without the note

### Key Parties

**Mortgagor**: The BORROWER
- Signs both note and mortgage
- Owes the debt
- Gives the lien

**Mortgagee**: The LENDER
- Receives the note and mortgage
- Holds the lien
- Can foreclose on default

### Memory Trick

Mortgag**OR** = Borr**OW**er (both have "O")
Mortgag**EE** = L**E**nder (both have "E")

### Lien Theory vs. Title Theory

**Lien Theory (Florida)**
- Borrower keeps TITLE to property
- Lender has only a LIEN
- Must foreclose through court to take property
- Most consumer-friendly

**Title Theory**
- Lender holds title until loan paid
- Faster foreclosure process
- Less common today

**Intermediate Theory**
- Borrower has title until default
- Title transfers to lender on default

### Recording the Mortgage

Mortgages should be recorded to:
- Provide constructive notice
- Establish lien priority
- Protect lender's interest`,
      keyPoints: [
        'Promissory note = debt; Mortgage = security/lien',
        'Mortgagor = borrower; Mortgagee = lender',
        'Florida is a LIEN theory state (borrower keeps title)',
        'Note creates personal liability; mortgage creates lien',
        'Both documents needed for secured loan'
      ],
      examTips: [
        'MortgagOR = bOrrower; MortgagEE = lEndEr',
        'Florida = LIEN theory (borrower keeps title)',
        'Note = promise to pay; Mortgage = collateral',
        'Mortgage without note = meaningless'
      ]
    },
    {
      id: '12.2',
      title: 'Mortgage Clauses',
      content: `## Important Mortgage Provisions

Mortgages contain standard clauses that protect lender and borrower interests.

### Acceleration Clause

- Allows lender to demand FULL payment if borrower defaults
- Entire balance becomes due immediately
- Without this, lender could only collect missed payments
- Standard in virtually all mortgages

### Due-on-Sale Clause (Alienation Clause)

- Full balance due if property is sold or transferred
- Prevents assumption without lender approval
- Allows lender to stop loan transfer to unqualified buyer
- FHA/VA loans have assumability options

### Prepayment Clause

- May allow or restrict early payoff
- **Prepayment penalty**: Fee for paying off early
- Federal law limits prepayment penalties on certain loans
- Many loans now prohibit prepayment penalties

### Defeasance Clause

- Requires lender to release lien when loan paid
- "Defeat" the mortgage upon full payment
- Lender must provide satisfaction of mortgage

### Subordination Clause

- Allows this mortgage to become junior to another
- Usually in construction loans
- Permits permanent financing to take first position

### Escalation Clause (Escalator Clause)

- Allows interest rate to increase
- Based on specific triggers
- Common in ARMs (adjustable rate mortgages)

### Release Clause

- Used in blanket mortgages
- Allows release of individual parcels upon partial payment
- Common in subdivision development

### Exculpatory Clause

- Limits borrower's personal liability
- Lender can only foreclose, not pursue deficiency
- Rare in residential mortgages
- "Non-recourse" loan`,
      keyPoints: [
        'Acceleration = entire balance due on default',
        'Due-on-sale = balance due if property transferred',
        'Prepayment = early payoff terms (penalty or not)',
        'Defeasance = lender releases lien when paid',
        'Subordination = this loan moves to junior position'
      ],
      examTips: [
        'Acceleration clause is STANDARD in mortgages',
        'Due-on-sale prevents unauthorized assumptions',
        'Defeasance = "defeats" the mortgage when paid',
        'Know difference between alienation and acceleration'
      ]
    },
    {
      id: '12.3',
      title: 'Types of Mortgage Loans',
      content: `## Common Loan Types

Different loan structures meet different borrower needs.

### Fixed-Rate Mortgage

- Interest rate stays SAME for entire term
- Payment stays same (principal and interest)
- Most common: 30-year and 15-year terms
- Predictable payments
- Higher initial rate than ARM

### Adjustable-Rate Mortgage (ARM)

- Interest rate changes periodically
- Based on index (e.g., Treasury rate) plus margin
- **Index**: Market rate that changes
- **Margin**: Lender's markup (stays constant)
- **Caps**: Limits on rate changes
  - Periodic cap (per adjustment)
  - Lifetime cap (over loan life)

**Example**: 5/1 ARM
- Fixed for first 5 years
- Adjusts every 1 year after

### Graduated Payment Mortgage (GPM)

- Payments start low, increase over time
- Designed for buyers expecting income to grow
- May have negative amortization initially
- Higher total interest cost

### Balloon Mortgage

- Lower payments for set period
- Large "balloon" payment due at end
- Example: 5-year term, 30-year amortization
- Borrower must refinance or pay balloon

### Interest-Only Mortgage

- Pay only interest for set period
- Principal not reduced during interest-only period
- Lower initial payments
- Risk: No equity building initially

### Reverse Mortgage (HECM)

- For homeowners 62+ years old
- Lender pays borrower (tap equity)
- No monthly payments required
- Loan due when borrower dies, sells, or moves
- Must maintain property and pay taxes/insurance`,
      keyPoints: [
        'Fixed-rate = same rate and payment for entire term',
        'ARM = rate adjusts based on index + margin, has caps',
        'Balloon = large payment due at end of term',
        'Reverse mortgage = 62+, lender pays borrower',
        'GPM = payments start low, increase over time'
      ],
      examTips: [
        'ARM: Index + Margin = Interest Rate',
        'Balloon loans have LARGE final payment',
        'Reverse mortgage: must be 62+, no monthly payments',
        '5/1 ARM = fixed 5 years, adjusts every 1 year'
      ]
    },
    {
      id: '12.4',
      title: 'Government Loan Programs',
      content: `## Government-Backed Mortgages

Government programs help borrowers who may not qualify for conventional loans.

### FHA Loans (Federal Housing Administration)

**Insured by FHA, made by approved lenders**

- Lower down payment (3.5% minimum with 580+ credit score)
- Lower credit score requirements
- **MIP (Mortgage Insurance Premium)**: Required
  - Upfront MIP: 1.75% of loan amount
  - Annual MIP: Paid monthly, varies by term and LTV
- Maximum loan amounts vary by county
- **Assumable** (with lender approval)
- Owner-occupied only

### VA Loans (Veterans Administration)

**Guaranteed by VA for eligible veterans**

- **No down payment** required (100% financing)
- No monthly mortgage insurance
- **Funding fee** required (can be financed)
- Competitive interest rates
- **Certificate of Eligibility** required
- Must be owner-occupied
- **Assumable** (even by non-veterans)
- **Entitlement**: Amount VA will guarantee

### USDA Loans (Rural Development)

**For rural and suburban homebuyers**

- No down payment required
- Income limits apply
- Property must be in eligible area
- Guarantee fee required
- Owner-occupied only

### Conventional vs. Government

| Feature | Conventional | FHA | VA |
|---------|--------------|-----|-----|
| Down payment | 3-20%+ | 3.5% | 0% |
| Mortgage insurance | If <20% down | Always (MIP) | Funding fee |
| Assumable | Usually no | Yes | Yes |
| Who backs | Private | Government | Government |`,
      keyPoints: [
        'FHA: 3.5% down, MIP required, assumable',
        'VA: 0% down, for veterans, funding fee, no MI',
        'USDA: 0% down, rural areas, income limits',
        'Government loans are generally assumable',
        'FHA MIP = upfront 1.75% + annual premium'
      ],
      examTips: [
        'VA = 0% down, no monthly MI, veterans only',
        'FHA = 3.5% down minimum, MIP required',
        'Both FHA and VA are assumable',
        'Conventional with <20% down needs PMI'
      ]
    },
    {
      id: '12.5',
      title: 'Loan Qualification',
      content: `## Qualifying for a Mortgage

Lenders evaluate borrowers using specific criteria and ratios.

### The Four C's of Credit

**1. Capacity**
- Ability to repay
- Income and employment stability
- Debt-to-income ratios

**2. Credit**
- Credit history and score
- Payment patterns
- Outstanding debts

**3. Collateral**
- Property value
- Loan-to-value ratio
- Appraisal

**4. Capital**
- Down payment
- Reserves (savings)
- Other assets

### Qualifying Ratios

**Housing Ratio (Front-End Ratio)**
- PITI ÷ Gross Monthly Income
- PITI = Principal, Interest, Taxes, Insurance
- Conventional: Usually 28% maximum
- FHA: Usually 31% maximum

**Total Debt Ratio (Back-End Ratio)**
- (PITI + All Debt Payments) ÷ Gross Monthly Income
- Includes: car payments, credit cards, student loans
- Conventional: Usually 36% maximum
- FHA: Usually 43% maximum

### Calculating Ratios

**Example**:
- Monthly income: $6,000
- PITI: $1,500
- Other debts: $400

Housing ratio: $1,500 ÷ $6,000 = 25% ✓
Total debt ratio: ($1,500 + $400) ÷ $6,000 = 31.7% ✓

### Loan-to-Value Ratio (LTV)

**LTV = Loan Amount ÷ Property Value (or purchase price)**

**Example**: 
- Purchase price: $250,000
- Down payment: $50,000
- Loan amount: $200,000
- LTV: $200,000 ÷ $250,000 = 80%

**LTV Significance**:
- Over 80% LTV typically requires PMI
- Lower LTV = lower risk = better terms`,
      keyPoints: [
        'Four C\'s: Capacity, Credit, Collateral, Capital',
        'Housing ratio = PITI ÷ Gross Income (typically 28%)',
        'Total debt ratio = All Debt ÷ Gross Income (typically 36%)',
        'LTV = Loan ÷ Value; over 80% usually needs PMI',
        'PITI = Principal, Interest, Taxes, Insurance'
      ],
      examTips: [
        'Know how to calculate both ratios',
        '28/36 rule for conventional loans',
        'LTV over 80% = PMI required (conventional)',
        'FHA ratios are slightly more lenient (31/43)'
      ]
    },
    {
      id: '12.6',
      title: 'Mortgage Insurance',
      content: `## Protecting the Lender

Mortgage insurance protects the LENDER if borrower defaults.

### Private Mortgage Insurance (PMI)

**Required on conventional loans with LTV > 80%**

- Paid by borrower
- Protects lender (not borrower)
- Can be cancelled when LTV reaches 78% (automatic) or 80% (by request)
- Monthly premium varies by LTV and credit score

**Homeowners Protection Act (HPA)**:
- Requires automatic PMI cancellation at 78% LTV
- Borrower can request cancellation at 80%
- Must have good payment history

### FHA Mortgage Insurance Premium (MIP)

**Required on ALL FHA loans**

**Upfront MIP (UFMIP)**:
- 1.75% of loan amount
- Can be financed into loan
- Paid at closing

**Annual MIP**:
- Paid monthly
- Rate varies by term and LTV
- On 30-year loans with >10% down: 11 years
- On 30-year loans with <10% down: Life of loan

### VA Funding Fee

**One-time fee on VA loans**

- Not monthly insurance
- Can be financed
- Amount varies by:
  - Down payment amount
  - First use vs. subsequent use
  - Type of service (regular, reserves)
- Some veterans exempt (disabled veterans)

### Comparison

| Insurance | Loan Type | Cancelable? |
|-----------|-----------|-------------|
| PMI | Conventional | Yes, at 78-80% LTV |
| MIP | FHA | Limited (depends on term/LTV) |
| Funding Fee | VA | One-time, not ongoing |`,
      keyPoints: [
        'PMI required on conventional loans with LTV > 80%',
        'PMI cancelled automatically at 78% LTV',
        'FHA MIP: 1.75% upfront + annual premium',
        'VA has funding fee (one-time), not monthly insurance',
        'Mortgage insurance protects LENDER, not borrower'
      ],
      examTips: [
        'PMI is for conventional; MIP is for FHA',
        'PMI auto-cancels at 78% LTV (HPA)',
        'FHA MIP may last life of loan',
        'VA funding fee can be financed'
      ]
    },
    {
      id: '12.7',
      title: 'Amortization',
      content: `## How Loans Are Repaid

Amortization is the process of paying off a loan through scheduled payments.

### Fully Amortized Loan

**Standard mortgage structure**:
- Equal monthly payments
- Each payment covers interest + principal
- Early payments: mostly interest
- Later payments: mostly principal
- Balance reaches $0 at end of term

### Amortization Schedule

Shows for each payment:
- Payment amount
- Interest portion
- Principal portion
- Remaining balance

**Example (simplified)**:
| Payment | Interest | Principal | Balance |
|---------|----------|-----------|---------|
| 1 | $800 | $200 | $199,800 |
| 2 | $799 | $201 | $199,599 |
| ... | ... | ... | ... |
| 360 | $4 | $996 | $0 |

### Interest Calculation

**Simple Interest Formula**:
Monthly Interest = Balance × (Annual Rate ÷ 12)

**Example**:
- Balance: $200,000
- Rate: 6%
- Monthly interest: $200,000 × (0.06 ÷ 12) = $1,000

### Negative Amortization

**When payment doesn't cover interest**:
- Unpaid interest added to balance
- Loan balance INCREASES
- Can occur with GPMs, some ARMs
- Risky for borrowers

### Partially Amortized (Balloon)

- Payments based on longer term
- But loan due in shorter term
- Large final payment (balloon)
- Example: 30-year amortization, 5-year term

### Interest-Only Period

- Pay only interest, no principal
- Balance stays same
- Lower payments initially
- Converts to amortizing after period`,
      keyPoints: [
        'Amortization = paying off loan through scheduled payments',
        'Early payments mostly interest, later mostly principal',
        'Negative amortization = balance increases (payment < interest)',
        'Balloon = large payment at end',
        'Monthly interest = Balance × (Rate ÷ 12)'
      ],
      examTips: [
        'Fully amortized = $0 balance at end',
        'Negative amortization = balance goes UP',
        'Know how to calculate monthly interest',
        'Early payments = more interest'
      ]
    },
    {
      id: '12.8',
      title: 'Foreclosure Process',
      content: `## Florida Foreclosure

Florida uses **judicial foreclosure** - through the court system.

### Default and Acceleration

**Default occurs when**:
- Borrower misses payments
- Fails to pay taxes or insurance
- Violates other loan terms

**Lender may**:
- Send notice of default
- Invoke acceleration clause
- Begin foreclosure

### Judicial Foreclosure Process

**1. Lis Pendens**
- "Litigation pending"
- Notice filed in public records
- Warns of pending foreclosure

**2. Complaint Filed**
- Lender files lawsuit
- Borrower served with papers

**3. Borrower Response**
- Usually 20 days to respond
- Can contest or negotiate

**4. Judgment**
- If lender wins, court issues judgment
- Sets sale date

**5. Public Auction**
- Property sold to highest bidder
- Lender may bid up to debt amount
- Sale requires court confirmation

### Redemption Rights

**Equitable Redemption**:
- Right to pay off debt and keep property
- Available until foreclosure sale
- Pay full amount owed plus costs

**Statutory Redemption**:
- Right to redeem AFTER sale
- **Florida does NOT have statutory redemption**
- Sale is final in Florida

### Deficiency Judgment

**If sale price < debt owed**:
- Lender may seek deficiency judgment
- Borrower personally liable for difference
- Must file within specific timeframe

**Example**:
- Debt: $200,000
- Sale price: $150,000
- Deficiency: $50,000

### Alternatives to Foreclosure

**Loan Modification**: Change loan terms

**Short Sale**: Sell for less than owed (lender approves)

**Deed in Lieu**: Give property to lender voluntarily

**Forbearance**: Temporary reduced payments`,
      keyPoints: [
        'Florida uses JUDICIAL foreclosure (court process)',
        'Lis pendens = notice of pending litigation',
        'Equitable redemption = pay off before sale',
        'Florida has NO statutory redemption (sale is final)',
        'Deficiency judgment = borrower liable for shortfall'
      ],
      examTips: [
        'Florida = JUDICIAL foreclosure',
        'Equitable redemption ends at sale',
        'NO statutory redemption in Florida',
        'Lis pendens warns the public of lawsuit'
      ]
    },
    {
      id: '12.9',
      title: 'Special Financing Topics',
      content: `## Additional Financing Concepts

Several specialized topics appear on the exam.

### Purchase Money Mortgage

**Seller financing**:
- Seller acts as lender
- Takes back mortgage from buyer
- Buyer makes payments to seller
- Often used when buyer can't qualify

**Advantages**:
- More flexible terms
- Faster closing
- May avoid some loan costs

### Second Mortgages

**Junior Liens**:
- Recorded after first mortgage
- Higher risk = higher rate
- Subordinate to first mortgage

**Home Equity Loan**:
- Fixed amount, fixed rate
- Single disbursement

**Home Equity Line of Credit (HELOC)**:
- Revolving credit line
- Draw as needed
- Variable rate typically

### Wraparound Mortgage

**Also called "all-inclusive mortgage"**:
- New mortgage wraps around existing
- Seller collects payments on new loan
- Seller pays underlying loan
- Difference is seller's profit

### Blanket Mortgage

- Covers multiple properties
- Common for developers
- Release clause allows individual parcels to be sold

### Construction Loan

- Short-term financing for building
- Disbursed in draws as work progresses
- Converts to permanent financing when complete
- Higher rates, interest-only typically

### Bridge Loan

- Short-term loan between transactions
- "Bridges" gap between selling old and buying new
- Higher rates
- Repaid when old property sells`,
      keyPoints: [
        'Purchase money mortgage = seller financing',
        'Second mortgage = junior lien, higher rate',
        'HELOC = revolving line of credit',
        'Wraparound = new mortgage includes existing',
        'Construction loan = short-term, disbursed in draws'
      ],
      examTips: [
        'Purchase money = seller takes back mortgage',
        'HELOC = line of credit; Home equity loan = lump sum',
        'Wraparound includes underlying mortgage',
        'Bridge loan = temporary, between transactions'
      ]
    },
    {
      id: '12.10',
      title: 'Mortgage Fraud',
      content: `## Recognizing and Preventing Fraud

Mortgage fraud is a federal crime with serious consequences.

### Types of Mortgage Fraud

**Fraud for Housing (Borrower Fraud)**
- Misrepresenting income
- False employment information
- Undisclosed debts
- Inflated assets
- Straw buyers

**Fraud for Profit (Industry Fraud)**
- Inflated appraisals
- Fake sales
- Equity stripping
- Churning (excessive refinancing)

### Red Flags

**Borrower Red Flags**:
- Significant income changes
- Unusual employment situation
- Large deposits without explanation
- Non-arm's length transactions

**Transaction Red Flags**:
- Price significantly above market
- Rapid property flipping
- Seller paying large concessions
- Multiple refinances in short time

### Real Estate Agent Responsibilities

Agents must:
- Report suspicious activity
- Not assist in fraudulent transactions
- Verify information accuracy
- Refuse to participate in schemes

**Consequences of Participation**:
- Federal criminal charges
- FREC discipline (suspension/revocation)
- Civil liability
- Loss of license

### Common Schemes

**Property Flipping** (illegal when):
- Property sold at inflated price
- Appraisal falsified
- Done to defraud lender

**Straw Buyer**:
- Someone buys on behalf of another
- True buyer hidden from lender
- Used to circumvent qualification

**Air Loans**:
- Loans on non-existent properties
- Fake documentation`,
      keyPoints: [
        'Mortgage fraud is a federal crime',
        'Fraud for housing = borrower misrepresentation',
        'Fraud for profit = industry schemes',
        'Agents must report suspicious activity',
        'Participating in fraud = criminal charges + license loss'
      ],
      examTips: [
        'Agents can lose license for participating in fraud',
        'Straw buyer = hiding true borrower from lender',
        'Property flipping is fraud when appraisal falsified',
        'Must report suspicious activity'
      ]
    }
  ],

  flashcards: [
    // NOTE VS MORTGAGE
    {
      front: 'What is the difference between the promissory note and the mortgage?',
      back: 'PROMISSORY NOTE = The DEBT (promise to pay, creates personal liability)\nMORTGAGE = The SECURITY (lien on property, allows foreclosure)',
      difficulty: 'easy'
    },
    {
      front: 'Who is the mortgagor and who is the mortgagee?',
      back: 'MortgagOR = BorrOWer (gives the lien)\nMortgagEE = LEndEr (receives the lien)',
      difficulty: 'easy'
    },
    {
      front: 'Which document creates personal liability?',
      back: 'The PROMISSORY NOTE - not the mortgage. The mortgage just creates the lien on property.',
      difficulty: 'medium'
    },
    
    // LIEN THEORY
    {
      front: 'Is Florida a lien theory or title theory state?',
      back: 'Florida is a LIEN THEORY state:\n• Borrower KEEPS title\n• Lender has only a LIEN\n• Requires JUDICIAL foreclosure',
      difficulty: 'easy'
    },
    {
      front: 'What is the difference between lien theory and title theory?',
      back: 'LIEN THEORY (FL): Borrower keeps title, lender has lien\nTITLE THEORY: Lender holds title until paid (power of sale foreclosure)',
      difficulty: 'medium'
    },
    
    // KEY CLAUSES
    {
      front: 'What is the acceleration clause?',
      back: 'Allows lender to demand ENTIRE loan balance upon default (not just missed payments)',
      difficulty: 'medium'
    },
    {
      front: 'What is the due-on-sale (alienation) clause?',
      back: 'Requires FULL PAYOFF if property is sold or transferred. Prevents assumption without lender approval.',
      difficulty: 'medium'
    },
    {
      front: 'What is the defeasance clause?',
      back: 'Requires lender to RELEASE THE LIEN when loan is paid in full. Defeats the mortgage.',
      difficulty: 'medium'
    },
    {
      front: 'What is the prepayment clause?',
      back: 'Specifies if/when borrower can pay off early and any PENALTY for doing so.',
      difficulty: 'medium'
    },
    
    // FHA LOANS
    {
      front: 'What is the minimum down payment for an FHA loan?',
      back: '3.5% (with credit score of 580+)\n10% down required for scores 500-579',
      difficulty: 'easy'
    },
    {
      front: 'What are the FHA qualifying ratios?',
      back: '31% housing ratio / 43% total debt ratio (more lenient than conventional)',
      difficulty: 'medium'
    },
    {
      front: 'What is the FHA upfront mortgage insurance premium (UFMIP)?',
      back: '1.75% of loan amount, paid at closing (can be financed into loan)',
      difficulty: 'medium'
    },
    {
      front: 'Are FHA loans insured or guaranteed?',
      back: 'INSURED - FHA insures lenders against loss. It does NOT make loans directly.',
      difficulty: 'medium'
    },
    
    // VA LOANS
    {
      front: 'What is the minimum down payment for a VA loan?',
      back: '0% - VA allows 100% financing with NO down payment',
      difficulty: 'easy'
    },
    {
      front: 'Does VA require PMI?',
      back: 'NO PMI required. VA has a FUNDING FEE instead (can be financed).',
      difficulty: 'medium'
    },
    {
      front: 'Are VA loans insured or guaranteed?',
      back: 'GUARANTEED - VA guarantees a portion of the loan to the lender.',
      difficulty: 'medium'
    },
    
    // CONVENTIONAL LOANS
    {
      front: 'What are the typical qualifying ratios for conventional loans?',
      back: '28% housing ratio (PITI ÷ income)\n36% total debt ratio (all debt ÷ income)',
      difficulty: 'medium'
    },
    {
      front: 'At what LTV is PMI automatically cancelled?',
      back: '78% LTV = automatic cancellation\n80% LTV = can REQUEST cancellation',
      difficulty: 'medium'
    },
    {
      front: 'What is the typical down payment to avoid PMI?',
      back: '20% down payment (80% LTV or less)',
      difficulty: 'easy'
    },
    
    // FORECLOSURE
    {
      front: 'What type of foreclosure does Florida use?',
      back: 'JUDICIAL foreclosure - must go through the court system',
      difficulty: 'easy'
    },
    {
      front: 'Does Florida have statutory redemption rights after foreclosure?',
      back: 'NO - Florida only has EQUITABLE redemption (before sale). Once sale occurs, it is final.',
      difficulty: 'hard'
    },
    {
      front: 'What is equitable redemption?',
      back: 'Borrower\'s right to pay off debt and keep property BEFORE foreclosure sale. FL allows this.',
      difficulty: 'medium'
    },
    {
      front: 'What is a deficiency judgment?',
      back: 'If foreclosure sale doesn\'t cover debt, lender can sue borrower for the DIFFERENCE (deficiency).',
      difficulty: 'medium'
    },
    
    // LOAN TYPES & TERMS
    {
      front: 'What is negative amortization?',
      back: 'Payment is LESS than interest due, so unpaid interest is added to balance. Loan balance INCREASES.',
      difficulty: 'medium'
    },
    {
      front: 'What is a purchase money mortgage?',
      back: 'SELLER FINANCING - seller takes back a mortgage from buyer and acts as lender.',
      difficulty: 'medium'
    },
    {
      front: 'What is the formula for LTV?',
      back: 'LTV = Loan Amount ÷ Property Value (or purchase price, whichever is LESS)',
      difficulty: 'easy'
    },
    {
      front: 'What is a point?',
      back: '1 POINT = 1% of the LOAN AMOUNT\n\nExample: 2 points on $200,000 loan = $4,000',
      difficulty: 'easy'
    },
    {
      front: 'What is PITI?',
      back: 'Principal, Interest, Taxes, Insurance - The full monthly housing payment',
      difficulty: 'easy'
    }
  ],

  practiceQuestions: [
    {
      question: 'Which document creates personal liability for a mortgage debt?',
      options: [
        'The mortgage',
        'The promissory note',
        'The deed of trust',
        'The title insurance policy'
      ],
      correct: 1,
      explanation: 'The promissory note creates personal liability for the debt. The mortgage only creates a lien on the property as security for the debt.'
    },
    {
      question: 'Florida is a:',
      options: [
        'Title theory state',
        'Lien theory state',
        'Intermediate theory state',
        'Deed of trust state'
      ],
      correct: 1,
      explanation: 'Florida is a lien theory state. The borrower keeps title to the property, and the lender holds only a lien. Foreclosure must go through the courts.'
    },
    {
      question: 'The clause that allows a lender to demand full payment if the property is sold is called:',
      options: [
        'Acceleration clause',
        'Due-on-sale clause',
        'Defeasance clause',
        'Subordination clause'
      ],
      correct: 1,
      explanation: 'The due-on-sale clause (also called alienation clause) allows the lender to demand full payment if the property is transferred. The acceleration clause allows demand for full payment upon default.'
    },
    {
      question: 'The minimum down payment for an FHA loan is:',
      options: [
        '0%',
        '3%',
        '3.5%',
        '5%'
      ],
      correct: 2,
      explanation: 'FHA loans require a minimum down payment of 3.5% (with a credit score of 580 or higher). VA loans allow 0% down.'
    },
    {
      question: 'VA loans are available to:',
      options: [
        'Any first-time homebuyer',
        'Low-income borrowers only',
        'Eligible veterans and service members',
        'Rural area residents'
      ],
      correct: 2,
      explanation: 'VA loans are available only to eligible veterans, active-duty service members, and some surviving spouses. They offer 100% financing with no down payment.'
    },
    {
      question: 'The housing ratio compares:',
      options: [
        'Loan amount to property value',
        'PITI to gross monthly income',
        'Down payment to purchase price',
        'Total debt to net income'
      ],
      correct: 1,
      explanation: 'The housing ratio (front-end ratio) compares PITI (Principal, Interest, Taxes, Insurance) to gross monthly income. Typically should not exceed 28%.'
    },
    {
      question: 'PMI is automatically cancelled on conventional loans at what LTV?',
      options: [
        '75%',
        '78%',
        '80%',
        '85%'
      ],
      correct: 1,
      explanation: 'Under the Homeowners Protection Act, PMI is automatically cancelled at 78% LTV. Borrowers can request cancellation at 80% with good payment history.'
    },
    {
      question: 'What type of foreclosure does Florida use?',
      options: [
        'Non-judicial foreclosure',
        'Judicial foreclosure',
        'Strict foreclosure',
        'Power of sale'
      ],
      correct: 1,
      explanation: 'Florida uses judicial foreclosure, which requires the lender to file a lawsuit and go through the court system. This provides more protection for borrowers.'
    },
    {
      question: 'Equitable redemption in Florida:',
      options: [
        'Allows redemption after the foreclosure sale',
        'Allows redemption before the foreclosure sale',
        'Is not available in Florida',
        'Requires court approval'
      ],
      correct: 1,
      explanation: 'Equitable redemption allows the borrower to pay off the debt and keep the property BEFORE the foreclosure sale. Florida does NOT have statutory redemption (after sale).'
    },
    {
      question: 'Negative amortization occurs when:',
      options: [
        'The loan balance decreases faster than scheduled',
        'The borrower makes extra payments',
        'The payment is less than the interest due',
        'The interest rate decreases'
      ],
      correct: 2,
      explanation: 'Negative amortization occurs when the monthly payment doesn\'t cover all the interest due. The unpaid interest is added to the loan balance, causing it to increase.'
    },
    {
      question: 'A purchase money mortgage is:',
      options: [
        'A government-backed loan',
        'Seller financing',
        'A construction loan',
        'A second mortgage'
      ],
      correct: 1,
      explanation: 'A purchase money mortgage is seller financing - the seller takes back a mortgage from the buyer and acts as the lender instead of the buyer getting a traditional bank loan.'
    },
    {
      question: 'The FHA upfront mortgage insurance premium (UFMIP) is:',
      options: [
        '0.5% of loan amount',
        '1.0% of loan amount',
        '1.75% of loan amount',
        '2.5% of loan amount'
      ],
      correct: 2,
      explanation: 'The FHA UFMIP is 1.75% of the loan amount, paid at closing. It can be financed into the loan amount.'
    },
    {
      question: 'A borrower has $5,000 monthly income and $1,400 PITI. What is the housing ratio?',
      options: [
        '25%',
        '28%',
        '30%',
        '35%'
      ],
      correct: 1,
      explanation: 'Housing ratio = PITI ÷ Gross Income = $1,400 ÷ $5,000 = 28%'
    },
    {
      question: 'Which clause requires the lender to release the lien when the loan is paid off?',
      options: [
        'Acceleration clause',
        'Due-on-sale clause',
        'Defeasance clause',
        'Subordination clause'
      ],
      correct: 2,
      explanation: 'The defeasance clause requires the lender to release the lien when the loan is fully paid. The word "defeasance" means to defeat or make void.'
    },
    {
      question: 'A lis pendens is:',
      options: [
        'A notice that foreclosure proceedings have begun',
        'A court judgment against the borrower',
        'The final sale of the property',
        'A request for loan modification'
      ],
      correct: 0,
      explanation: 'A lis pendens ("litigation pending") is a notice filed in public records indicating that a lawsuit (such as foreclosure) affecting the property has been filed.'
    }
  ],

  caseStudies: [
    {
      id: 'ch12-case1',
      title: 'The ARM Adjustment',
      scenario: 'Borrower Bill has a 5/1 ARM with a start rate of 4%, margin of 2.5%, and annual cap of 2%. The index was 1.5% when he got the loan. After 5 years, the index is now 4%. His rate is adjusting for the first time.',
      question: 'What will Bill\'s new interest rate be after the adjustment?',
      answer: 'New rate = Index + Margin = 4% + 2.5% = 6.5%. However, we must check the cap. The annual cap is 2%, and Bill\'s starting rate was 4%. Maximum increase is 2%, so maximum new rate is 4% + 2% = 6%. Bill\'s new rate will be 6% (capped), not the calculated 6.5%. The cap protects him from the full increase. Next year, if the index stays at 4%, his rate could go up another 2% toward the calculated rate.',
      examRelevance: 'Tests understanding of ARM calculations: New Rate = Index + Margin, BUT caps limit the actual adjustment. Always check caps before finalizing the rate.'
    },
    {
      id: 'ch12-case2',
      title: 'The Deficiency Judgment',
      scenario: 'Homeowner Helen defaults on her mortgage. Her loan balance is $280,000. The property goes to foreclosure sale in Florida and sells for $220,000. The lender incurred $15,000 in foreclosure costs.',
      question: 'Can the lender pursue Helen for the shortfall? If so, how much?',
      answer: 'Yes, Florida allows deficiency judgments. The lender can pursue Helen for: Loan balance ($280,000) + Foreclosure costs ($15,000) - Sale proceeds ($220,000) = $75,000 deficiency. The lender must file for a deficiency judgment within the required timeframe. Helen would be personally liable for this amount. Alternatives Helen could have pursued: short sale (lender might waive deficiency), deed in lieu (lender might waive deficiency), or loan modification.',
      examRelevance: 'Tests understanding of Florida foreclosure process and deficiency judgments. Key points: Florida allows deficiencies, borrower liable for shortfall plus costs, alternatives exist.'
    }
  ],

  summary: `Chapter 12 covers residential mortgage financing (9% of exam).

**Two Documents**:
- Promissory Note = DEBT (personal liability)
- Mortgage = SECURITY (lien on property)
- MortgagOR = BorrOWer; MortgagEE = LEndEr
- Florida = LIEN theory state (borrower keeps title)

**Key Clauses**:
- Acceleration = full balance due on default
- Due-on-sale (alienation) = payoff if transferred
- Defeasance = lender releases lien when paid
- Prepayment = terms for early payoff

**Loan Types**:
- Fixed-rate = same rate/payment entire term
- ARM = Index + Margin, has caps
- Balloon = large payment at end
- Reverse = 62+, lender pays borrower

**Government Loans**:
- FHA: 3.5% down, MIP required (1.75% upfront + annual)
- VA: 0% down, veterans, funding fee, no monthly MI
- USDA: 0% down, rural, income limits

**Qualifying Ratios**:
- Housing (PITI/Income): 28% conventional, 31% FHA
- Total Debt: 36% conventional, 43% FHA
- LTV = Loan ÷ Value; >80% needs PMI

**Mortgage Insurance**:
- PMI: Conventional, cancels at 78-80% LTV
- MIP: FHA, may last life of loan
- VA: Funding fee (one-time)

**Florida Foreclosure**:
- Judicial (through courts)
- Equitable redemption (before sale)
- NO statutory redemption (sale is final)
- Deficiency judgments allowed`
};

export default CHAPTER_12;
