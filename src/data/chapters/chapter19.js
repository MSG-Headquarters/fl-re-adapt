/**
 * Chapter 19: Real Estate Math
 * 
 * Covers 2% of the Florida Real Estate Exam
 * Focus: Essential calculations and formulas used throughout real estate
 * 
 * NOTE: This chapter consolidates math concepts from all other chapters
 * Math questions appear throughout the exam, not just in one section
 */

export const CHAPTER_19 = {
  id: 19,
  title: 'Real Estate Math',
  subtitle: 'Calculations and Formulas',
  examPercentage: 2,
  requiredTimeMinutes: 180, // 3 hours minimum
  color: '#8B5CF6', // Violet
  icon: 'Calculator',
  
  objectives: [
    'Master the basic math formulas used in real estate',
    'Calculate commissions, selling prices, and net amounts',
    'Perform proration calculations for closing',
    'Calculate loan amounts, interest, and payments',
    'Determine property values using appraisal formulas',
    'Calculate area and convert measurements',
    'Compute transfer taxes and recording fees',
    'Apply the T-bar method for solving problems'
  ],

  statutes: [
    { code: 'General', title: 'Math Skills', summary: 'Applied throughout Florida real estate practice' }
  ],

  sections: [
    {
      id: '19.1',
      title: 'Basic Math Concepts',
      content: `## Foundation Skills

Before tackling real estate math, master these basics.

### Percentages

**Converting Percentages to Decimals**:
- Move decimal point 2 places LEFT
- 6% = 0.06
- 7.5% = 0.075
- 0.5% = 0.005

**Converting Decimals to Percentages**:
- Move decimal point 2 places RIGHT
- 0.08 = 8%
- 0.125 = 12.5%

### The T-Bar (Magic T)

**Universal problem-solving tool**:

\`\`\`
    Total (Whole)
    ─────────────
    Part │ Rate
\`\`\`

**Formulas**:
- Total = Part ÷ Rate
- Part = Total × Rate
- Rate = Part ÷ Total

**Example**: What is 6% of $200,000?
- Part = Total × Rate
- Part = $200,000 × 0.06 = $12,000

### Order of Operations

**PEMDAS**:
1. Parentheses
2. Exponents
3. Multiplication/Division (left to right)
4. Addition/Subtraction (left to right)

### Rounding Rules

**For money**: Round to nearest cent
**For area**: Follow problem instructions
**For percentages**: Usually 2-3 decimal places

### Common Fractions to Decimals

| Fraction | Decimal |
|----------|---------|
| 1/4 | 0.25 |
| 1/3 | 0.333 |
| 1/2 | 0.50 |
| 2/3 | 0.667 |
| 3/4 | 0.75 |`,
      keyPoints: [
        'Move decimal 2 places to convert % ↔ decimal',
        'T-bar: Total on top, Part and Rate on bottom',
        'Part = Total × Rate',
        'Total = Part ÷ Rate',
        'Rate = Part ÷ Total'
      ],
      examTips: [
        'T-bar solves most real estate math problems',
        '6% = 0.06 (NOT 0.6)',
        'Always convert % to decimal before calculating',
        'Check your answer - does it make sense?'
      ]
    },
    {
      id: '19.2',
      title: 'Commission Calculations',
      content: `## Commission Math

Commission problems are among the most common on the exam.

### Basic Commission Formula

\`\`\`
    Sales Price
    ─────────────
 Commission │ Rate
\`\`\`

**Commission = Sales Price × Rate**
**Sales Price = Commission ÷ Rate**
**Rate = Commission ÷ Sales Price**

### Example 1: Find Commission

Property sells for $325,000. Commission is 6%.
- Commission = $325,000 × 0.06 = **$19,500**

### Example 2: Find Sales Price

Commission was $15,000 at 5% rate. What was sales price?
- Sales Price = $15,000 ÷ 0.05 = **$300,000**

### Example 3: Find Rate

Commission was $18,000 on $360,000 sale. What rate?
- Rate = $18,000 ÷ $360,000 = 0.05 = **5%**

### Commission Splits

**Between Brokerages**:
- Total commission split between listing and selling brokers
- Often 50/50 but can vary

**Between Broker and Agent**:
- Agent receives portion of brokerage's share
- Common splits: 60/40, 70/30, 50/50

### Example: Full Split Calculation

Sale: $400,000 at 6% commission
Split: 50/50 between brokerages
Agent split: 70% to agent, 30% to broker

1. Total commission: $400,000 × 0.06 = $24,000
2. Each brokerage: $24,000 ÷ 2 = $12,000
3. Agent's share: $12,000 × 0.70 = **$8,400**

### Net to Seller Calculations

**Seller wants specific net amount**:
Net + Commission = Sales Price

**If commission is % of sales price**:
Net = Sales Price × (1 - Commission Rate)
Sales Price = Net ÷ (1 - Commission Rate)

### Example: Finding Sales Price from Net

Seller wants to net $285,000 after 5% commission.
- Sales Price = $285,000 ÷ (1 - 0.05)
- Sales Price = $285,000 ÷ 0.95 = **$300,000**

Check: $300,000 × 0.05 = $15,000 commission
$300,000 - $15,000 = $285,000 ✓`,
      keyPoints: [
        'Commission = Sales Price × Rate',
        'For net calculations: Net ÷ (1 - Rate) = Sales Price',
        'Commission splits reduce the agent\'s portion',
        'Calculate step by step for split problems',
        'Always check your answer'
      ],
      examTips: [
        'Don\'t calculate commission on net (calculate on sales price)',
        'Commission rate is on SALES PRICE',
        'Work through splits one step at a time',
        'Net ÷ 0.94 (not × 1.06) when finding price'
      ]
    },
    {
      id: '19.3',
      title: 'Area Calculations',
      content: `## Measuring Property

Area calculations are essential for real estate.

### Basic Area Formulas

**Rectangle/Square**:
Area = Length × Width

**Triangle**:
Area = (Base × Height) ÷ 2

**Circle**:
Area = π × radius² (π ≈ 3.14159)

### Common Conversions

| Measurement | Equivalent |
|-------------|------------|
| 1 acre | 43,560 square feet |
| 1 square mile | 640 acres |
| 1 mile | 5,280 feet |
| 1 yard | 3 feet |
| 1 foot | 12 inches |
| 1 section | 640 acres |
| 1 township | 36 sections |

### Converting Square Feet to Acres

**Formula**: Square Feet ÷ 43,560 = Acres

**Example**: How many acres in 130,680 sq ft?
130,680 ÷ 43,560 = **3 acres**

### Converting Acres to Square Feet

**Formula**: Acres × 43,560 = Square Feet

**Example**: How many sq ft in 2.5 acres?
2.5 × 43,560 = **108,900 sq ft**

### Irregular Shapes

**Break into regular shapes**:
1. Divide into rectangles/triangles
2. Calculate each area
3. Add together

**L-Shaped Lot**:
- Divide into two rectangles
- Calculate each
- Add together

### Section Calculations

**Section = 1 mile × 1 mile = 640 acres**

**Quarter section**: 640 ÷ 4 = 160 acres
**Quarter-quarter**: 160 ÷ 4 = 40 acres

**Example**: How many acres in NE 1/4 of SW 1/4?
- 1/4 × 1/4 = 1/16
- 1/16 × 640 = **40 acres**

### Front Foot Calculations

**Price per front foot** (used for commercial):
- Total Price ÷ Front Footage = Price per Front Foot
- Or: Front Footage × Price per Front Foot = Total Price

**Example**: Lot is 100 feet wide, sells for $50,000
Price per front foot = $50,000 ÷ 100 = **$500/front foot**`,
      keyPoints: [
        '1 acre = 43,560 square feet',
        '1 section = 640 acres = 1 sq mile',
        'Area of rectangle = Length × Width',
        'Area of triangle = (Base × Height) ÷ 2',
        'Quarter-quarter section = 40 acres'
      ],
      examTips: [
        'Memorize: 43,560 sq ft per acre',
        'For sections, multiply fractions × 640',
        'Break irregular shapes into rectangles',
        'Check units - don\'t mix feet and inches'
      ]
    },
    {
      id: '19.4',
      title: 'Loan and Interest Calculations',
      content: `## Mortgage Math

Understanding loan calculations is critical.

### Loan-to-Value Ratio (LTV)

\`\`\`
    Purchase Price (or Value)
    ────────────────────────
    Loan Amount │ LTV %
\`\`\`

**LTV = Loan Amount ÷ Property Value**
**Loan = Value × LTV**
**Value = Loan ÷ LTV**

### Example: Calculate LTV

Purchase: $250,000, Loan: $200,000
LTV = $200,000 ÷ $250,000 = 0.80 = **80%**

### Example: Calculate Loan from LTV

Value: $300,000, LTV: 90%
Loan = $300,000 × 0.90 = **$270,000**

### Down Payment

**Down Payment = Purchase Price - Loan Amount**
**Or: Down Payment = Purchase Price × (1 - LTV)**

### Simple Interest

**Formula**: Interest = Principal × Rate × Time

**I = P × R × T**

**Example**: $200,000 loan at 6% for 1 year
I = $200,000 × 0.06 × 1 = **$12,000**

### Monthly Interest

**Monthly Interest = Annual Interest ÷ 12**

**Or**: Monthly Interest = Principal × (Annual Rate ÷ 12)

**Example**: $200,000 at 6% annual rate
Monthly rate = 6% ÷ 12 = 0.5% = 0.005
Monthly interest = $200,000 × 0.005 = **$1,000**

### Per Diem (Daily) Interest

Used for proration at closing.

**Per Diem = (Principal × Annual Rate) ÷ 365**

**Example**: $240,000 loan at 5%
Annual interest = $240,000 × 0.05 = $12,000
Per diem = $12,000 ÷ 365 = **$32.88/day**

### Points

**1 point = 1% of loan amount**

**Example**: 2 points on $200,000 loan
Points cost = $200,000 × 0.02 = **$4,000**`,
      keyPoints: [
        'LTV = Loan ÷ Value',
        'Interest = Principal × Rate × Time',
        'Monthly interest = Annual ÷ 12',
        '1 point = 1% of loan amount',
        'Per diem = daily interest for prorations'
      ],
      examTips: [
        'LTV uses lower of price or value',
        'Convert annual rate to monthly for monthly calculations',
        'Points are paid at closing, based on loan amount',
        'Down payment + Loan = Purchase Price'
      ]
    },
    {
      id: '19.5',
      title: 'Qualifying Ratios',
      content: `## Buyer Qualification Math

Lenders use ratios to qualify borrowers.

### Housing Ratio (Front-End)

\`\`\`
    Gross Monthly Income
    ────────────────────
    PITI │ Housing Ratio
\`\`\`

**Housing Ratio = PITI ÷ Gross Monthly Income**

**PITI = Principal + Interest + Taxes + Insurance**

**Standard Maximum**: 28% (conventional)

### Example: Calculate Housing Ratio

- Monthly income: $7,000
- PITI: $1,680
- Housing ratio = $1,680 ÷ $7,000 = 0.24 = **24%** ✓

### Total Debt Ratio (Back-End)

\`\`\`
    Gross Monthly Income
    ────────────────────
   Total Debt │ Debt Ratio
\`\`\`

**Total Debt Ratio = (PITI + Other Debts) ÷ Gross Income**

**Standard Maximum**: 36% (conventional)

### Example: Calculate Total Debt Ratio

- Monthly income: $7,000
- PITI: $1,680
- Car payment: $400
- Credit cards: $200
- Total debt = $1,680 + $400 + $200 = $2,280
- Ratio = $2,280 ÷ $7,000 = 0.326 = **32.6%** ✓

### Finding Maximum PITI

**Maximum PITI = Gross Income × Housing Ratio**

**Example**: Income $6,000, max ratio 28%
Max PITI = $6,000 × 0.28 = **$1,680**

### Finding Required Income

**Required Income = PITI ÷ Maximum Ratio**

**Example**: PITI is $2,000, max ratio 28%
Required income = $2,000 ÷ 0.28 = **$7,143/month**

### Comparison of Ratios

| Loan Type | Housing | Total Debt |
|-----------|---------|------------|
| Conventional | 28% | 36% |
| FHA | 31% | 43% |
| VA | None | 41% |`,
      keyPoints: [
        'Housing ratio = PITI ÷ Gross Income',
        'Total debt ratio = All Debt ÷ Gross Income',
        'Conventional: 28%/36% max ratios',
        'FHA: 31%/43% max ratios',
        'PITI = Principal, Interest, Taxes, Insurance'
      ],
      examTips: [
        'Use GROSS income (before taxes)',
        'Know standard ratios: 28/36 conventional',
        'Total debt includes ALL monthly payments',
        'FHA ratios are more lenient'
      ]
    },
    {
      id: '19.6',
      title: 'Appraisal Math',
      content: `## Property Valuation Calculations

Three approaches to value require different math.

### Income Approach - Capitalization

\`\`\`
    Value
    ─────────────
    NOI │ Cap Rate
\`\`\`

**Value = NOI ÷ Cap Rate**
**Cap Rate = NOI ÷ Value**
**NOI = Value × Cap Rate**

### Example: Find Value

NOI: $50,000, Cap Rate: 8%
Value = $50,000 ÷ 0.08 = **$625,000**

### Example: Find Cap Rate

Value: $400,000, NOI: $32,000
Cap Rate = $32,000 ÷ $400,000 = 0.08 = **8%**

### Gross Rent Multiplier (GRM)

\`\`\`
    Value
    ─────────────
  Gross Rent │ GRM
\`\`\`

**Value = Gross Monthly Rent × GRM**
**GRM = Value ÷ Gross Monthly Rent**

### Example: Find Value using GRM

Monthly rent: $2,000, GRM: 120
Value = $2,000 × 120 = **$240,000**

### Cost Approach

**Value = Replacement Cost - Depreciation + Land Value**

### Example: Cost Approach

- Replacement cost: $300,000
- Building age: 10 years
- Economic life: 50 years
- Land value: $80,000

Depreciation = (10 ÷ 50) × $300,000 = $60,000
Value = $300,000 - $60,000 + $80,000 = **$320,000**

### Sales Comparison Adjustments

**If comparable is BETTER → SUBTRACT**
**If comparable is WORSE → ADD**

### Example: Adjustment

- Comp sold for $250,000
- Comp has pool (subject doesn't): -$15,000
- Subject has garage (comp doesn't): +$10,000
- Adjusted value: $250,000 - $15,000 + $10,000 = **$245,000**`,
      keyPoints: [
        'Value = NOI ÷ Cap Rate (IRV formula)',
        'Value = Rent × GRM',
        'Cost approach: Cost - Depreciation + Land',
        'Sales comparison: CBS (Comparable Better Subtract)',
        'Age-Life depreciation: (Age ÷ Life) × Cost'
      ],
      examTips: [
        'Higher cap rate = lower value',
        'GRM uses GROSS rent (no expenses subtracted)',
        'Always adjust the comparable, not subject',
        'Land is NEVER depreciated'
      ]
    },
    {
      id: '19.7',
      title: 'Proration Calculations',
      content: `## Closing Prorations

Dividing expenses between buyer and seller.

### Annual to Daily Rate

**365-Day Year Method**:
Daily Rate = Annual Amount ÷ 365

**360-Day Year Method (Banker's Year)**:
Daily Rate = Annual Amount ÷ 360

### Example: Calculate Daily Rate

Annual taxes: $4,380
- 365-day: $4,380 ÷ 365 = **$12.00/day**
- 360-day: $4,380 ÷ 360 = **$12.17/day**

### Property Tax Proration (Florida - Arrears)

**Taxes in arrears = seller owes**

1. Calculate daily rate
2. Count seller's days (Jan 1 to day before closing)
3. Multiply: Days × Daily Rate = Seller owes
4. Debit seller, Credit buyer

### Example: Tax Proration

- Annual taxes: $3,650
- Closing: April 15
- Buyer owns day of closing
- Using 365-day method

Seller's days: Jan (31) + Feb (28) + Mar (31) + Apr 1-14 (14) = 104 days
Daily rate: $3,650 ÷ 365 = $10/day
Seller owes: 104 × $10 = **$1,040**

### Rent Proration

**Rent paid in advance = seller owes buyer**

### Example: Rent Proration

- Monthly rent: $1,800 (collected by seller)
- Closing: March 20
- Buyer owns 20-31 (12 days)

Daily rate: $1,800 ÷ 30 = $60/day
Buyer's portion: 12 × $60 = **$720**
(Debit seller $720, Credit buyer $720)

### Prepaid Interest at Closing

**Buyer pays interest from closing to end of month**

### Example: Prepaid Interest

- Loan: $300,000 at 6%
- Closing: March 15
- Days to April 1: 17 days

Daily interest: ($300,000 × 0.06) ÷ 365 = $49.32
Prepaid interest: 17 × $49.32 = **$838.44**`,
      keyPoints: [
        'Daily rate = Annual ÷ 365 (or 360)',
        'Arrears (FL taxes) = seller owes (debit seller)',
        'Prepaid items = seller credit',
        'Rent in advance = debit seller, credit buyer',
        'Count days carefully - who owns closing day?'
      ],
      examTips: [
        'Florida taxes are in ARREARS',
        'Buyer usually owns day of closing',
        'Prepaid interest: closing day to month end',
        'Check which method (365 or 360) problem specifies'
      ]
    },
    {
      id: '19.8',
      title: 'Transfer Tax Calculations',
      content: `## Documentary Stamps and Fees

Florida transfer taxes are frequently tested.

### Documentary Stamps on Deeds

**Rate**: $0.70 per $100 (or portion thereof)
**Paid by**: Seller (customary)

**Formula**: (Sale Price ÷ 100) × $0.70

### Example: Doc Stamps on Deed

Sale price: $285,000
$285,000 ÷ 100 = 2,850
2,850 × $0.70 = **$1,995**

### Miami-Dade County Surtax

**Additional**: $0.45 per $100
**Total in Miami-Dade**: $0.70 + $0.45 = **$1.15 per $100**

### Example: Miami-Dade Transfer Tax

Sale price: $400,000
$400,000 ÷ 100 = 4,000
4,000 × $1.15 = **$4,600**

### Documentary Stamps on Notes

**Rate**: $0.35 per $100
**Paid by**: Buyer/Borrower

**Formula**: (Loan Amount ÷ 100) × $0.35

### Example: Doc Stamps on Note

Loan amount: $320,000
$320,000 ÷ 100 = 3,200
3,200 × $0.35 = **$1,120**

### Intangible Tax

**REPEALED January 1, 2007**
- No longer charged
- If exam mentions, answer is $0

### Summary of Florida Transfer Taxes

| Tax | Rate | Who Pays |
|-----|------|----------|
| Doc stamps - Deed | $0.70/$100 | Seller |
| Doc stamps - Note | $0.35/$100 | Buyer |
| Miami-Dade surtax | +$0.45/$100 | Seller |
| Intangible tax | REPEALED | N/A |`,
      keyPoints: [
        'Deed stamps: $0.70 per $100 (seller)',
        'Note stamps: $0.35 per $100 (buyer)',
        'Miami-Dade: additional $0.45 per $100',
        'Intangible tax was REPEALED in 2007',
        'Round UP to next $100 if fraction'
      ],
      examTips: [
        'Deed = $0.70 (seller), Note = $0.35 (buyer)',
        'Miami-Dade total = $1.15 per $100',
        'Intangible tax no longer exists',
        'Doc stamps based on consideration/loan amount'
      ]
    },
    {
      id: '19.9',
      title: 'Investment Calculations',
      content: `## Real Estate Investment Math

Key formulas for investment analysis.

### Cash-on-Cash Return

\`\`\`
    Annual Cash Flow
    ────────────────
  Return │ Cash Invested
\`\`\`

**Return = Cash Flow ÷ Cash Invested**

### Example: Cash-on-Cash

- Cash invested: $50,000
- Annual cash flow: $6,000
- Return = $6,000 ÷ $50,000 = 0.12 = **12%**

### Debt Service Coverage Ratio (DSCR)

**DSCR = NOI ÷ Annual Debt Service**

**Lenders want DSCR > 1.0** (usually 1.2+)

### Example: DSCR

- NOI: $60,000
- Annual mortgage: $48,000
- DSCR = $60,000 ÷ $48,000 = **1.25** ✓

### Cash Flow Calculation

**Cash Flow = NOI - Debt Service**

### Example: Cash Flow

- NOI: $72,000
- Debt service: $54,000
- Cash flow = $72,000 - $54,000 = **$18,000**

### Depreciation (Tax)

**Annual Depreciation = Building Value ÷ Recovery Period**

| Property Type | Recovery Period |
|---------------|-----------------|
| Residential Rental | 27.5 years |
| Commercial | 39 years |

### Example: Depreciation

- Building value: $275,000 (excluding land)
- Residential rental
- Depreciation = $275,000 ÷ 27.5 = **$10,000/year**

### Equity Build-Up

**With each payment**:
- Part goes to interest
- Part goes to principal (builds equity)
- Early payments = mostly interest
- Later payments = mostly principal`,
      keyPoints: [
        'Cash-on-cash = Cash Flow ÷ Cash Invested',
        'DSCR = NOI ÷ Debt Service (want >1.0)',
        'Cash Flow = NOI - Debt Service',
        'Residential depreciation: 27.5 years',
        'Commercial depreciation: 39 years'
      ],
      examTips: [
        'DSCR must exceed 1.0 to cover payments',
        'Cash-on-cash measures return on YOUR money',
        'Depreciation: 27.5 residential, 39 commercial',
        'NOI does NOT include mortgage payment'
      ]
    },
    {
      id: '19.10',
      title: 'Formula Summary Sheet',
      content: `## Quick Reference - All Key Formulas

### Commission
- Commission = Sales Price × Rate
- Sales Price = Commission ÷ Rate
- Net Price = Sales Price × (1 - Rate)
- Sales Price = Net ÷ (1 - Rate)

### Area
- Rectangle = Length × Width
- Triangle = (Base × Height) ÷ 2
- Acres = Square Feet ÷ 43,560
- Section acres = Fractions × 640

### Loan/Interest
- LTV = Loan ÷ Value
- Interest = Principal × Rate × Time
- Monthly Interest = Principal × (Annual Rate ÷ 12)
- Points = Loan Amount × Point Percentage

### Qualifying
- Housing Ratio = PITI ÷ Gross Income
- Debt Ratio = Total Debt ÷ Gross Income

### Appraisal
- Value = NOI ÷ Cap Rate
- Cap Rate = NOI ÷ Value
- Value = Rent × GRM
- GRM = Value ÷ Rent
- Cost Value = Cost - Depreciation + Land

### Proration
- Daily Rate = Annual Amount ÷ 365 (or 360)
- Proration = Days × Daily Rate

### Transfer Tax (Florida)
- Deed stamps = (Price ÷ 100) × $0.70
- Note stamps = (Loan ÷ 100) × $0.35
- Miami-Dade = (Price ÷ 100) × $1.15

### Investment
- Cash-on-Cash = Cash Flow ÷ Cash Invested
- DSCR = NOI ÷ Debt Service
- Cash Flow = NOI - Debt Service
- Depreciation = Building Value ÷ Years

### Key Numbers to Memorize
| Number | What It Is |
|--------|------------|
| 43,560 | Sq ft per acre |
| 640 | Acres per section |
| 27.5 | Years - residential depreciation |
| 39 | Years - commercial depreciation |
| $0.70 | Doc stamps per $100 (deed) |
| $0.35 | Doc stamps per $100 (note) |
| $0.45 | Miami-Dade surtax per $100 |
| 28/36 | Conventional loan ratios |
| 31/43 | FHA loan ratios |`,
      keyPoints: [
        'T-bar works for most problems: Total ÷ Part × Rate',
        'Always convert percentages to decimals first',
        'Memorize key numbers: 43,560, 640, 27.5, 39',
        'Doc stamps: $0.70 deed, $0.35 note',
        'Check your work - does answer make sense?'
      ],
      examTips: [
        'Write formulas before calculating',
        'Label your work clearly',
        'Convert ALL percentages to decimals',
        'When in doubt, use the T-bar',
        'Practice, practice, practice!'
      ]
    }
  ],

  flashcards: [
    // T-BAR METHOD
    {
      front: 'What is the T-BAR method?',
      back: 'Universal formula solver:\n      TOTAL (Whole)\n      ─────────────\n      Part  │  Rate\n\nPart = Total × Rate\nTotal = Part ÷ Rate\nRate = Part ÷ Total',
      difficulty: 'easy'
    },
    
    // COMMISSION
    {
      front: 'What is the formula for COMMISSION?',
      back: 'Commission = Sales Price × Commission Rate\n\nExample: $300,000 × 6% = $18,000',
      difficulty: 'easy'
    },
    {
      front: 'How to find SALES PRICE if you know net and commission rate?',
      back: 'Sales Price = Net ÷ (1 - Commission Rate)\n\nExample: Net $285,000, 5% commission:\n$285,000 ÷ 0.95 = $300,000',
      difficulty: 'medium'
    },
    {
      front: 'How do commission SPLITS work?',
      back: 'Total commission split between brokers, then between broker and agent.\n\nExample: $18,000 comm, 50/50 split, agent gets 60% = $18,000 × 0.50 × 0.60 = $5,400',
      difficulty: 'medium'
    },
    
    // AREA CALCULATIONS
    {
      front: 'How many square feet in an ACRE?',
      back: '43,560 SQUARE FEET',
      difficulty: 'easy'
    },
    {
      front: 'How many acres in a SECTION?',
      back: '640 ACRES (1 section = 1 square mile)',
      difficulty: 'easy'
    },
    {
      front: 'How to calculate acres from section fractions?',
      back: 'Multiply fractions, then multiply by 640.\n\nNE¼ of SW¼ = ¼ × ¼ × 640 = 40 acres',
      difficulty: 'medium'
    },
    {
      front: 'Rectangle area formula?',
      back: 'Area = Length × Width\n\nExample: 200 ft × 150 ft = 30,000 sq ft',
      difficulty: 'easy'
    },
    {
      front: 'Triangle area formula?',
      back: 'Area = (Base × Height) ÷ 2',
      difficulty: 'easy'
    },
    
    // LOAN CALCULATIONS
    {
      front: 'What is the formula for LTV?',
      back: 'LTV = Loan Amount ÷ Property Value\n\nExample: $200,000 loan ÷ $250,000 value = 80%',
      difficulty: 'easy'
    },
    {
      front: 'What is the formula for SIMPLE INTEREST?',
      back: 'Interest = Principal × Rate × Time (I = PRT)\n\nExample: $200,000 × 6% × 1 year = $12,000',
      difficulty: 'easy'
    },
    {
      front: 'What is 1 POINT equal to?',
      back: '1 POINT = 1% of LOAN amount\n\n2 points on $200,000 loan = $4,000',
      difficulty: 'easy'
    },
    
    // QUALIFYING RATIOS
    {
      front: 'What is the formula for HOUSING RATIO?',
      back: 'Housing Ratio = PITI ÷ Gross Monthly Income\n\nConventional max: 28%',
      difficulty: 'medium'
    },
    {
      front: 'What is the formula for TOTAL DEBT RATIO?',
      back: 'Total Debt Ratio = All Monthly Debt ÷ Gross Monthly Income\n\nConventional max: 36%',
      difficulty: 'medium'
    },
    {
      front: 'What are CONVENTIONAL qualifying ratios?',
      back: '28% housing / 36% total debt',
      difficulty: 'medium'
    },
    {
      front: 'What are FHA qualifying ratios?',
      back: '31% housing / 43% total debt (more lenient)',
      difficulty: 'medium'
    },
    
    // APPRAISAL/INCOME
    {
      front: 'What is the IRV formula (Income Approach)?',
      back: 'I ÷ R = V (Income ÷ Rate = Value)\n\nValue = NOI ÷ Cap Rate\n\nExample: $50,000 NOI ÷ 8% = $625,000',
      difficulty: 'medium'
    },
    {
      front: 'What is the GRM formula?',
      back: 'Value = Monthly Rent × GRM\nGRM = Sale Price ÷ Monthly Rent',
      difficulty: 'medium'
    },
    {
      front: 'What is the COST APPROACH formula?',
      back: 'Value = Replacement Cost - Depreciation + Land\n\n(Land is NEVER depreciated)',
      difficulty: 'medium'
    },
    
    // PRORATIONS
    {
      front: 'How to calculate DAILY rate for prorations?',
      back: 'Daily Rate = Annual Amount ÷ 365 days\n\n(or ÷ 360 for banker\'s year)',
      difficulty: 'easy'
    },
    {
      front: 'Florida taxes are paid in ARREARS. Who owes at closing?',
      back: 'SELLER owes for days owned. Debit seller, credit buyer.',
      difficulty: 'medium'
    },
    
    // TRANSFER TAXES
    {
      front: 'Documentary stamps on DEED formula?',
      back: 'Sale Price ÷ 100 × $0.70\n\n$300,000 ÷ 100 × $0.70 = $2,100 (seller pays)',
      difficulty: 'easy'
    },
    {
      front: 'Documentary stamps on NOTE formula?',
      back: 'Loan Amount ÷ 100 × $0.35\n\n$240,000 ÷ 100 × $0.35 = $840 (buyer pays)',
      difficulty: 'easy'
    },
    
    // DEPRECIATION & INVESTMENT
    {
      front: 'Depreciation periods?',
      back: 'RESIDENTIAL: 27.5 years\nCOMMERCIAL: 39 years\nLAND: NEVER',
      difficulty: 'easy'
    },
    {
      front: 'What is DSCR formula?',
      back: 'DSCR = NOI ÷ Annual Debt Service\n\nWant >1.0 (lenders want 1.2+)\n\nDSCR 1.2 = 20% cushion above debt payments',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'A property sells for $380,000. The commission rate is 6%. What is the commission?',
      options: [
        '$19,000',
        '$22,800',
        '$23,800',
        '$38,000'
      ],
      correct: 1,
      explanation: 'Commission = Sales Price × Rate = $380,000 × 0.06 = $22,800'
    },
    {
      question: 'A seller wants to net $342,000 after a 5% commission. What must the property sell for?',
      options: [
        '$358,947',
        '$359,100',
        '$360,000',
        '$359,000'
      ],
      correct: 2,
      explanation: 'Sales Price = Net ÷ (1 - Rate) = $342,000 ÷ 0.95 = $360,000'
    },
    {
      question: 'A lot measures 150 feet by 200 feet. How many acres is this?',
      options: [
        '0.50 acres',
        '0.69 acres',
        '0.75 acres',
        '1.00 acres'
      ],
      correct: 1,
      explanation: 'Area = 150 × 200 = 30,000 sq ft. Acres = 30,000 ÷ 43,560 = 0.69 acres'
    },
    {
      question: 'How many acres are in the NW 1/4 of the SE 1/4 of a section?',
      options: [
        '10 acres',
        '20 acres',
        '40 acres',
        '80 acres'
      ],
      correct: 2,
      explanation: '1/4 × 1/4 = 1/16. 1/16 × 640 acres = 40 acres'
    },
    {
      question: 'A property is purchased for $275,000 with a loan of $220,000. What is the LTV?',
      options: [
        '75%',
        '80%',
        '85%',
        '90%'
      ],
      correct: 1,
      explanation: 'LTV = Loan ÷ Value = $220,000 ÷ $275,000 = 0.80 = 80%'
    },
    {
      question: 'What is the monthly interest on a $180,000 loan at 6% annual interest?',
      options: [
        '$900',
        '$1,080',
        '$10,800',
        '$1,800'
      ],
      correct: 0,
      explanation: 'Monthly interest = Principal × (Annual Rate ÷ 12) = $180,000 × (0.06 ÷ 12) = $180,000 × 0.005 = $900'
    },
    {
      question: 'A buyer has $6,500 monthly income and $1,625 PITI. What is the housing ratio?',
      options: [
        '20%',
        '25%',
        '28%',
        '30%'
      ],
      correct: 1,
      explanation: 'Housing Ratio = PITI ÷ Income = $1,625 ÷ $6,500 = 0.25 = 25%'
    },
    {
      question: 'A property has NOI of $45,000 and a cap rate of 9%. What is the value?',
      options: [
        '$405,000',
        '$450,000',
        '$500,000',
        '$540,000'
      ],
      correct: 2,
      explanation: 'Value = NOI ÷ Cap Rate = $45,000 ÷ 0.09 = $500,000'
    },
    {
      question: 'Annual property taxes are $5,475. Using a 365-day year, what is the daily rate?',
      options: [
        '$12.00',
        '$15.00',
        '$15.21',
        '$18.25'
      ],
      correct: 1,
      explanation: 'Daily Rate = $5,475 ÷ 365 = $15.00 per day'
    },
    {
      question: 'A property sells for $325,000. What are the documentary stamps on the deed?',
      options: [
        '$1,137.50',
        '$2,275.00',
        '$2,437.50',
        '$3,250.00'
      ],
      correct: 1,
      explanation: 'Doc stamps on deed = ($325,000 ÷ 100) × $0.70 = 3,250 × $0.70 = $2,275.00'
    },
    {
      question: 'A buyer gets a $260,000 loan. What are the documentary stamps on the note?',
      options: [
        '$910',
        '$1,820',
        '$2,600',
        '$780'
      ],
      correct: 0,
      explanation: 'Doc stamps on note = ($260,000 ÷ 100) × $0.35 = 2,600 × $0.35 = $910'
    },
    {
      question: 'An investor puts $60,000 down and receives $7,200 annual cash flow. What is the cash-on-cash return?',
      options: [
        '8%',
        '10%',
        '12%',
        '15%'
      ],
      correct: 2,
      explanation: 'Cash-on-Cash = Cash Flow ÷ Cash Invested = $7,200 ÷ $60,000 = 0.12 = 12%'
    },
    {
      question: 'A residential rental building (excluding land) cost $330,000. What is the annual depreciation?',
      options: [
        '$8,461',
        '$10,000',
        '$12,000',
        '$15,000'
      ],
      correct: 2,
      explanation: 'Depreciation = Building Value ÷ 27.5 years = $330,000 ÷ 27.5 = $12,000 per year'
    },
    {
      question: 'A property has NOI of $84,000 and annual debt service of $70,000. What is the DSCR?',
      options: [
        '0.83',
        '1.00',
        '1.20',
        '1.40'
      ],
      correct: 2,
      explanation: 'DSCR = NOI ÷ Debt Service = $84,000 ÷ $70,000 = 1.20'
    },
    {
      question: 'A property in Miami-Dade County sells for $500,000. What is the total documentary stamp tax on the deed?',
      options: [
        '$3,500',
        '$5,000',
        '$5,750',
        '$7,500'
      ],
      correct: 2,
      explanation: 'Miami-Dade total = $1.15 per $100. ($500,000 ÷ 100) × $1.15 = 5,000 × $1.15 = $5,750'
    }
  ],

  caseStudies: [
    {
      id: 'ch19-case1',
      title: 'The Commission Split',
      scenario: 'A property sells for $450,000 with a 6% total commission. The listing brokerage and selling brokerage split 50/50. The listing agent has a 65/35 split with their broker (agent gets 65%). The selling agent has a 70/30 split with their broker.',
      question: 'How much does each agent receive?',
      answer: 'Step 1: Total commission = $450,000 × 0.06 = $27,000. Step 2: Each brokerage gets $27,000 ÷ 2 = $13,500. Step 3: Listing agent share = $13,500 × 0.65 = $8,775. Step 4: Selling agent share = $13,500 × 0.70 = $9,450. ANSWER: Listing agent receives $8,775, Selling agent receives $9,450.',
      examRelevance: 'Tests multi-step commission calculations with splits. Key: work through each split separately, don\'t try to combine steps.'
    },
    {
      id: 'ch19-case2',
      title: 'The Closing Proration',
      scenario: 'Closing is September 20. Annual property taxes are $4,380 (paid in arrears). The buyer owns the day of closing. Use the 365-day method.',
      question: 'Calculate the tax proration and identify who is debited and credited.',
      answer: 'Step 1: Daily rate = $4,380 ÷ 365 = $12.00/day. Step 2: Count seller\'s days (Jan 1 through Sep 19): Jan(31) + Feb(28) + Mar(31) + Apr(30) + May(31) + Jun(30) + Jul(31) + Aug(31) + Sep 1-19(19) = 262 days. Step 3: Seller owes = 262 × $12 = $3,144. ANSWER: Seller is DEBITED $3,144 (they owe it), Buyer is CREDITED $3,144 (they will pay the full amount later and get reimbursed for seller\'s share).',
      examRelevance: 'Tests complete proration calculation including counting days accurately and knowing debit/credit entries. Remember: Florida taxes in arrears = seller owes.'
    }
  ],

  summary: `Chapter 19 consolidates all real estate math (2% of exam, but math appears throughout).

**The T-Bar Method**:
\`\`\`
    Total (Whole)
    ─────────────
    Part │ Rate
\`\`\`

**Key Formulas**:

| Category | Formula |
|----------|---------|
| Commission | Sales Price × Rate |
| Net to Sales | Net ÷ (1 - Rate) |
| Area | Length × Width |
| Acres | Sq Ft ÷ 43,560 |
| Section acres | Fractions × 640 |
| LTV | Loan ÷ Value |
| Interest | Principal × Rate × Time |
| Housing Ratio | PITI ÷ Gross Income |
| Cap Value | NOI ÷ Cap Rate |
| GRM Value | Rent × GRM |
| Cost Value | Cost - Depreciation + Land |
| Daily Proration | Annual ÷ 365 |
| Deed Stamps | Price ÷ 100 × $0.70 |
| Note Stamps | Loan ÷ 100 × $0.35 |
| Cash-on-Cash | Cash Flow ÷ Cash Invested |
| DSCR | NOI ÷ Debt Service |

**Numbers to Memorize**:
| Number | Meaning |
|--------|---------|
| 43,560 | Sq ft per acre |
| 640 | Acres per section |
| 27.5 | Residential depreciation years |
| 39 | Commercial depreciation years |
| $0.70 | Doc stamps on deed per $100 |
| $0.35 | Doc stamps on note per $100 |
| $1.15 | Miami-Dade deed stamps per $100 |
| 28/36 | Conventional ratios |
| 31/43 | FHA ratios |

**Tips**:
- Convert % to decimal FIRST
- Use T-bar when stuck
- Check if answer makes sense
- Practice, practice, practice!`
};

export default CHAPTER_19;
