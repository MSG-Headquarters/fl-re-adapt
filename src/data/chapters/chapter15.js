/**
 * Chapter 15: Closing Real Estate Transactions
 * 
 * Covers 5% of the Florida Real Estate Exam
 * Focus: Settlement procedures, prorations, and closing calculations
 */

export const CHAPTER_15 = {
  id: 15,
  title: 'Closing Real Estate Transactions',
  subtitle: 'Settlement Procedures and Calculations',
  examPercentage: 5,
  requiredTimeMinutes: 210, // 3.5 hours minimum
  color: '#22C55E', // Green
  icon: 'ClipboardCheck',
  
  objectives: [
    'Understand the closing process and participants',
    'Calculate prorations for taxes, insurance, and rent',
    'Understand RESPA requirements for closings',
    'Explain the Closing Disclosure and its contents',
    'Calculate transfer taxes and recording fees',
    'Distinguish between debits and credits',
    'Understand the role of the closing agent'
  ],

  statutes: [
    { code: '12 USC 2601', title: 'RESPA', summary: 'Real Estate Settlement Procedures Act' },
    { code: 'F.S. 201', title: 'Documentary Stamp Tax', summary: 'Transfer tax requirements' },
    { code: 'F.S. 695', title: 'Recording Requirements', summary: 'Document recording procedures' },
    { code: 'Reg X', title: 'RESPA Regulations', summary: 'CFPB regulations implementing RESPA' }
  ],

  sections: [
    {
      id: '15.1',
      title: 'The Closing Process',
      content: `## Understanding Closing

**Closing** (also called settlement or escrow) is the final step in a real estate transaction where ownership transfers.

### What Happens at Closing

- Title transfers from seller to buyer
- Funds transfer from buyer to seller
- Loan documents are signed
- Deed is delivered and recorded
- Keys are exchanged

### Closing Timeline

**Before Closing**:
- Title search completed
- Inspections performed
- Loan approved
- Insurance obtained
- Documents prepared

**At Closing**:
- Review and sign documents
- Funds disbursed
- Deed delivered

**After Closing**:
- Deed recorded
- Title policy issued
- Funds distributed

### Who Attends Closing

**Always Present or Represented**:
- Buyer (or representative with power of attorney)
- Seller (or representative)
- Closing agent

**May Be Present**:
- Real estate agents
- Lender representative
- Attorneys
- Title company representative

### Types of Closings

**In-Person Closing**:
- All parties meet at closing location
- Traditional method

**Escrow Closing**:
- Neutral third party holds documents and funds
- Common in some states
- Parties may not meet

**Remote/E-Closing**:
- Electronic signatures
- Video notarization (where allowed)
- Increasing in popularity`,
      keyPoints: [
        'Closing = transfer of title and funds',
        'Deed delivered and recorded at closing',
        'Closing agent facilitates the process',
        'Title search and inspections completed before closing',
        'Loan documents signed at closing'
      ],
      examTips: [
        'Closing = settlement = escrow',
        'Deed recorded AFTER closing',
        'Buyer gets deed, seller gets money',
        'Know who typically attends closing'
      ]
    },
    {
      id: '15.2',
      title: 'Closing Agents',
      content: `## Who Conducts the Closing

Different parties may serve as closing agent depending on local custom.

### Title Companies

**Most common in Florida**:
- Issue title insurance
- Conduct title search
- Prepare closing documents
- Disburse funds
- Handle recording

### Attorneys

**May serve as closing agent**:
- Florida allows non-attorney closings
- Some buyers/sellers prefer attorney
- Required in some states (not Florida)

### Real Estate Brokers

**Limited role**:
- Can prepare sales contracts
- Cannot practice law
- Cannot give legal advice
- Can attend closing to assist clients

### Escrow Companies

- Hold funds and documents
- Neutral third party
- Follow written instructions
- Common in western states

### Closing Agent Duties

**Before Closing**:
- Order title search
- Prepare closing documents
- Calculate prorations
- Prepare Closing Disclosure
- Coordinate with lender

**At Closing**:
- Explain documents
- Collect signatures
- Verify funds
- Disburse money

**After Closing**:
- Record documents
- Pay off existing loans
- Distribute funds
- Issue title policy

### Who Pays for What

**Typically Seller**:
- Documentary stamps on deed
- Satisfaction of existing mortgage
- Commission
- Owner's title insurance (negotiable)

**Typically Buyer**:
- Documentary stamps on note
- Recording fees
- Lender's title insurance
- Loan fees
- Prepaid items (taxes, insurance)`,
      keyPoints: [
        'Title companies most common closing agents in Florida',
        'Attorneys can conduct closings (not required)',
        'Brokers cannot practice law or give legal advice',
        'Closing agent prepares Closing Disclosure',
        'Know typical buyer vs. seller costs'
      ],
      examTips: [
        'Florida does NOT require attorney at closing',
        'Title company most common closing agent',
        'Brokers cannot give legal advice',
        'Doc stamps on deed = seller; on note = buyer'
      ]
    },
    {
      id: '15.3',
      title: 'Closing Disclosure',
      content: `## RESPA Closing Disclosure

The **Closing Disclosure (CD)** replaced the HUD-1 Settlement Statement for most residential transactions.

### RESPA Requirements

**Real Estate Settlement Procedures Act**:
- Applies to federally related mortgage loans
- Consumer protection law
- Administered by CFPB

### Closing Disclosure Timing

- Must be provided **3 business days** before closing
- Borrower must receive it (not just sent)
- Delays closing if not timely provided

### When 3-Day Wait Restarts

If these change after CD is provided:
- APR increases more than 0.125%
- Loan product changes
- Prepayment penalty added

New 3-day waiting period required.

### CD Contents - Page 1

**Loan Terms**:
- Loan amount
- Interest rate
- Monthly principal and interest
- Prepayment penalty (if any)
- Balloon payment (if any)

**Projected Payments**:
- Principal and interest
- Mortgage insurance
- Estimated escrow
- Total monthly payment

**Costs at Closing**:
- Closing costs
- Cash to close

### CD Contents - Pages 2-3

**Loan Costs**:
- Origination charges
- Services borrower cannot shop for
- Services borrower can shop for

**Other Costs**:
- Taxes and government fees
- Prepaids
- Initial escrow payment
- Other

**Calculating Cash to Close**:
- Total closing costs
- Adjustments and credits
- Down payment/funds from borrower

### CD Contents - Page 4-5

**Loan disclosures**
**Contact information**
**Confirm receipt**

### Comparing Loan Estimate to CD

Borrower should compare to original Loan Estimate:
- Some fees cannot increase
- Some fees can increase up to 10%
- Some fees can change any amount`,
      keyPoints: [
        'Closing Disclosure must be provided 3 business days before closing',
        'Replaced HUD-1 Settlement Statement',
        'RESPA applies to federally related mortgage loans',
        'APR increase >0.125% restarts 3-day wait',
        'Contains all loan terms and closing costs'
      ],
      examTips: [
        '3 business days BEFORE closing for CD',
        'CD replaced HUD-1 for most transactions',
        'Know what restarts the 3-day waiting period',
        'CFPB administers RESPA'
      ]
    },
    {
      id: '15.4',
      title: 'Debits and Credits',
      content: `## Understanding the Closing Statement

The closing statement shows all debits (charges) and credits for each party.

### Basic Concepts

**Debit (DR)**: Amount OWED or charged
- Reduces cash received (seller)
- Increases cash needed (buyer)

**Credit (CR)**: Amount received or owed TO party
- Increases cash received (seller)
- Reduces cash needed (buyer)

### The Balancing Concept

**Buyer's Side**:
Debits - Credits = Cash needed to close

**Seller's Side**:
Credits - Debits = Cash received at closing

### Common Buyer Debits

- Purchase price
- Recording fees (deed, mortgage)
- Loan fees
- Title insurance (lender's policy)
- Prepaid items (taxes, insurance, interest)
- Prorated items owed to seller
- Documentary stamps on note

### Common Buyer Credits

- Earnest money deposit
- New mortgage loan amount
- Seller concessions
- Prorated items owed by seller

### Common Seller Debits

- Existing mortgage payoff
- Commission
- Documentary stamps on deed
- Title insurance (owner's policy, if paying)
- Prorated items owed to buyer
- Repairs or credits to buyer

### Common Seller Credits

- Sales price
- Prorated items owed by buyer

### Double-Entry Items

Some items appear on both sides:
- **Purchase price**: Debit to buyer, Credit to seller
- **Prorations**: Debit to one, Credit to the other
- **Earnest money**: Credit to buyer (already paid)`,
      keyPoints: [
        'Debit = charge/owed; Credit = received/owed to',
        'Purchase price: debit to buyer, credit to seller',
        'Earnest money = credit to buyer',
        'New loan = credit to buyer',
        'Mortgage payoff = debit to seller'
      ],
      examTips: [
        'Buyer pays (debit) purchase price, receives (credit) loan',
        'Earnest money already paid = buyer credit',
        'Seller receives (credit) price, pays (debit) payoff',
        'Prorations create matching debit/credit'
      ]
    },
    {
      id: '15.5',
      title: 'Proration Basics',
      content: `## Understanding Prorations

**Prorations** divide expenses between buyer and seller based on ownership period.

### Why Prorate?

- Property taxes paid in advance or arrears
- Insurance may be prepaid
- Rent collected in advance
- HOA dues prepaid
- Each party pays for their ownership period

### Proration Methods

**365-Day Method (Actual Days)**
- Uses actual days in year
- More precise
- Common in Florida

**360-Day Method (Banker's Year)**
- Uses 30-day months
- 360 days per year
- Simpler calculations

**30-Day Month Method**
- Each month = 30 days
- Often used with 360-day year

### The Day of Closing

**Who owns the day of closing?**
- Usually BUYER owns day of closing
- Buyer responsible for that day's expenses
- Can be negotiated in contract

### General Proration Rules

**Prepaid Items** (paid in advance):
- Credit to seller (buyer reimburses)
- Example: Prepaid property taxes

**Accrued Items** (owed but not paid):
- Debit to seller (seller owes)
- Credit to buyer (buyer will pay)
- Example: Property taxes in arrears

### Calculating Daily Rate

**Annual Amount ÷ Days in Year = Daily Rate**

Using 365-day method:
- Annual taxes: $3,650
- Daily rate: $3,650 ÷ 365 = $10/day

Using 360-day method:
- Annual taxes: $3,600
- Daily rate: $3,600 ÷ 360 = $10/day

### Monthly Rate

**Annual Amount ÷ 12 = Monthly Rate**

Then: Monthly Rate ÷ 30 (or actual days) = Daily Rate`,
      keyPoints: [
        'Prorations divide expenses by ownership period',
        '365-day method (actual) common in Florida',
        '360-day method = banker\'s year (30-day months)',
        'Buyer usually owns day of closing',
        'Prepaid = credit seller; Accrued = debit seller'
      ],
      examTips: [
        'Know both 365-day and 360-day methods',
        'Buyer typically owns closing day',
        'Prepaid items = seller gets credit',
        'Accrued (owed) items = seller gets debit'
      ]
    },
    {
      id: '15.6',
      title: 'Property Tax Prorations',
      content: `## Prorating Property Taxes

Property tax prorations are common exam questions.

### Florida Property Tax Cycle

**Tax Year**: January 1 - December 31
**Assessment Date**: January 1
**Bills Mailed**: November 1
**Due Date**: March 31 (following year)
**Taxes Paid**: In ARREARS (after the fact)

### Discount Schedule (Early Payment)

- November: 4% discount
- December: 3% discount
- January: 2% discount
- February: 1% discount
- March 1-31: No discount (gross amount)
- April 1: Delinquent

### Taxes Paid in Arrears

Since Florida taxes are paid in ARREARS:
- Seller has lived there but NOT paid
- Seller owes for their period of ownership
- Debit to seller, Credit to buyer

### Proration Example (Taxes in Arrears)

**Scenario**:
- Annual taxes: $3,650
- Closing date: April 15
- Buyer owns day of closing
- Using 365-day method

**Calculate Seller's Days**:
- January: 31 days
- February: 28 days
- March: 31 days
- April 1-14: 14 days
- Total: 104 days

**Calculate Proration**:
- Daily rate: $3,650 ÷ 365 = $10/day
- Seller owes: 104 × $10 = **$1,040**

**On Closing Statement**:
- Debit to Seller: $1,040
- Credit to Buyer: $1,040

### Using 360-Day Method

Same scenario with 360-day method:
- Daily rate: $3,650 ÷ 360 = $10.14/day
- Seller's days: (3 months × 30) + 14 = 104 days
- Seller owes: 104 × $10.14 = $1,054.56`,
      keyPoints: [
        'Florida taxes paid in ARREARS',
        'Tax year = calendar year (Jan 1 - Dec 31)',
        'Taxes due March 31 of following year',
        'Arrears = seller owes, gets DEBIT',
        'Early payment discounts available'
      ],
      examTips: [
        'Florida = ARREARS = seller owes (debit)',
        'Count seller\'s days carefully',
        'Know the discount schedule',
        'Buyer usually owns day of closing'
      ]
    },
    {
      id: '15.7',
      title: 'Other Prorations',
      content: `## Additional Proration Types

Besides taxes, other items commonly require proration.

### Insurance Prorations

**Typically NOT prorated**:
- Buyer usually gets new policy
- Seller cancels existing policy
- Seller may get refund from insurer

**If Policy IS Assumed**:
- Seller paid in advance = prepaid
- Credit to seller for unused portion
- Debit to buyer

### Rent Prorations

**For Income Properties**:
- Rent collected in ADVANCE
- Seller collected full month
- Seller owes buyer for their portion

**Example**:
- Monthly rent: $1,500
- Closing: April 15
- Buyer owns April 15-30 (16 days)
- Daily rate: $1,500 ÷ 30 = $50/day
- Buyer's portion: 16 × $50 = $800
- **Debit seller $800, Credit buyer $800**

### HOA Dues

**Paid in Advance**:
- Credit to seller for unused portion
- Debit to buyer

**Example**:
- Quarterly dues: $600 (Jan-Mar)
- Closing: February 15
- Remaining: Feb 15 - Mar 31 = 44 days
- Daily rate: $600 ÷ 90 = $6.67/day
- Seller credit: 44 × $6.67 = $293.33

### Interest Prorations

**Mortgage Interest**:
- Paid in ARREARS (with each payment)
- At closing, buyer owes from closing to end of month
- Called "prepaid interest" or "per diem interest"

**Example**:
- New loan: $200,000 at 6%
- Closing: March 15
- Days until April 1: 17 days
- Daily interest: ($200,000 × 0.06) ÷ 365 = $32.88/day
- Prepaid interest: 17 × $32.88 = $558.96 (buyer debit)

### Security Deposits

- Security deposits transfer WITH property
- **Credit to buyer** (buyer now holds deposit)
- **Debit to seller** (seller must give up deposit)
- Not prorated - full amount transfers`,
      keyPoints: [
        'Rent paid in advance = seller owes buyer\'s portion',
        'Security deposits transfer to buyer (not prorated)',
        'HOA prepaid = credit to seller',
        'Mortgage interest paid in arrears',
        'Prepaid interest = buyer debit at closing'
      ],
      examTips: [
        'Rent in advance = DEBIT seller, credit buyer',
        'Security deposit = credit buyer, debit seller',
        'Insurance usually NOT prorated (buyer gets new)',
        'Know how to calculate prepaid interest'
      ]
    },
    {
      id: '15.8',
      title: 'Transfer Taxes',
      content: `## Documentary Stamp Taxes

Florida imposes documentary stamp taxes on real estate transfers.

### Documentary Stamps on Deeds

**Rate**: $0.70 per $100 of consideration (or fraction)

**Paid by**: Seller (customary, can be negotiated)

**Calculation**:
- Round UP to next $100
- Multiply by $0.70

**Example**:
- Sale price: $257,500
- Round up: $257,500 (already even)
- Tax: 2,575 × $0.70 = **$1,802.50**

### Miami-Dade County Surtax

**Additional tax in Miami-Dade only**:
- $0.45 per $100 (surtax)
- Total in Miami-Dade: $0.70 + $0.45 = **$1.15 per $100**

**Example** (Miami-Dade):
- Sale price: $300,000
- Tax: 3,000 × $1.15 = **$3,450**

### Documentary Stamps on Notes

**Rate**: $0.35 per $100 of new mortgage debt

**Paid by**: Buyer/Borrower

**Example**:
- New mortgage: $240,000
- Tax: 2,400 × $0.35 = **$840**

### Intangible Tax

**Previously required but REPEALED**:
- Was $0.002 per $1 (2 mills) on new mortgages
- **Repealed January 1, 2007**
- No longer applies

### Exemptions

**No doc stamps on**:
- Gifts between spouses
- Transfers due to divorce
- Government transfers
- Some corporate reorganizations

### Recording Fees

**Separate from documentary stamps**:
- Per-page fee for recording
- Varies by county
- Paid by party recording (usually buyer for deed)`,
      keyPoints: [
        'Doc stamps on deeds: $0.70 per $100 (seller pays)',
        'Miami-Dade surtax: additional $0.45 per $100',
        'Doc stamps on notes: $0.35 per $100 (buyer pays)',
        'Intangible tax REPEALED (January 1, 2007)',
        'Round UP to next $100 for calculations'
      ],
      examTips: [
        '$0.70/$100 deeds (seller), $0.35/$100 notes (buyer)',
        'Miami-Dade = $1.15/$100 total on deeds',
        'Intangible tax NO LONGER EXISTS',
        'Always round UP to calculate'
      ]
    },
    {
      id: '15.9',
      title: 'Closing Calculations Practice',
      content: `## Putting It All Together

Let's work through a complete closing calculation example.

### Scenario

**Property**: 123 Main Street
**Sale Price**: $350,000
**Closing Date**: June 15
**Loan Amount**: $280,000
**Earnest Money**: $10,000
**Annual Property Taxes**: $4,380 (in arrears)
**Commission**: 6%
**Seller's Existing Mortgage**: $180,000
**Using 365-day method, buyer owns day of closing**

### Calculate Prorations

**Property Tax Proration**:
- Daily rate: $4,380 ÷ 365 = $12/day
- Seller's days: Jan-May (151) + June 1-14 (14) = 165 days
- Seller owes: 165 × $12 = **$1,980**
- Debit seller, Credit buyer

### Calculate Commissions

- Commission: $350,000 × 6% = **$21,000**
- Debit to seller

### Calculate Transfer Taxes

**Doc stamps on deed** (seller):
- $350,000 ÷ 100 × $0.70 = **$2,450**

**Doc stamps on note** (buyer):
- $280,000 ÷ 100 × $0.35 = **$980**

### Buyer's Closing Statement

| Item | Debit | Credit |
|------|-------|--------|
| Purchase Price | $350,000 | |
| New Loan | | $280,000 |
| Earnest Money | | $10,000 |
| Property Tax Credit | | $1,980 |
| Doc Stamps on Note | $980 | |
| **Totals** | $350,980 | $291,980 |
| **Cash to Close** | **$59,000** | |

### Seller's Closing Statement

| Item | Debit | Credit |
|------|-------|--------|
| Sale Price | | $350,000 |
| Mortgage Payoff | $180,000 | |
| Commission | $21,000 | |
| Doc Stamps on Deed | $2,450 | |
| Property Tax Proration | $1,980 | |
| **Totals** | $205,430 | $350,000 |
| **Seller Proceeds** | | **$144,570** |`,
      keyPoints: [
        'Buyer: Price - Loan - Deposit - Credits = Cash needed',
        'Seller: Price - Payoff - Commission - Debits = Proceeds',
        'Tax proration (arrears) = debit seller, credit buyer',
        'Know what appears on each side',
        'Double-check that debits and credits balance'
      ],
      examTips: [
        'Practice complete closing calculations',
        'Remember which party pays what',
        'Prorations go to BOTH statements',
        'Purchase price is buyer debit AND seller credit'
      ]
    },
    {
      id: '15.10',
      title: 'After Closing',
      content: `## Post-Closing Activities

Several important activities occur after the closing meeting.

### Recording Documents

**What Gets Recorded**:
- Deed (transfers title)
- Mortgage (creates lien)
- Satisfaction of mortgage (releases old lien)

**Where Recorded**:
- Clerk of Circuit Court
- County where property is located

**Why Record**:
- Provides constructive notice
- Establishes priority
- Protects buyer's interest

### Title Insurance

**After Recording**:
- Title company issues policies
- Owner's policy to buyer
- Lender's policy to lender

**Effective Date**: Date of closing (not recording)

### Disbursement of Funds

**Closing Agent Distributes**:
- Seller's proceeds
- Commission to brokers
- Payoff to existing lender
- Recording fees paid
- Transfer taxes paid

### IRS Reporting

**Form 1099-S**:
- Reports real estate sales to IRS
- Gross proceeds reported
- Closing agent responsible
- Sent to seller

### Document Retention

**Buyer Should Keep**:
- Closing Disclosure
- Deed (copy - original recorded)
- Title insurance policy
- Survey
- Home inspection report

**Seller Should Keep**:
- Closing Disclosure
- Records for capital gains calculation

### Common Post-Closing Issues

**Title Defects Discovered**: Title insurance claim
**Survey Problems**: Negotiate with neighbor or claim
**Property Condition Issues**: May have limited recourse
**Recording Errors**: Correction deed or affidavit`,
      keyPoints: [
        'Deed and mortgage recorded after closing',
        'Title insurance effective date is closing date',
        'Closing agent disburses all funds',
        'Form 1099-S reports sale to IRS',
        'Keep closing documents for records'
      ],
      examTips: [
        'Recording happens AFTER closing',
        'Title insurance dates from closing, not recording',
        '1099-S = IRS reporting of sale',
        'Record at Clerk of Circuit Court'
      ]
    }
  ],

  flashcards: [
    // CLOSING DISCLOSURE
    {
      front: 'When must the Closing Disclosure be provided to the borrower?',
      back: '3 BUSINESS DAYS before closing (TRID rule)',
      difficulty: 'easy'
    },
    {
      front: 'What document replaced the HUD-1 Settlement Statement?',
      back: 'CLOSING DISCLOSURE (CD) - For most residential transactions. Required by TRID.',
      difficulty: 'easy'
    },
    {
      front: 'What is TRID?',
      back: 'TILA-RESPA Integrated Disclosure rule. Combined loan forms. Requires Loan Estimate within 3 days of application, Closing Disclosure 3 days before closing.',
      difficulty: 'medium'
    },
    
    // DOCUMENTARY STAMPS
    {
      front: 'What is the documentary stamp tax rate on DEEDS in Florida?',
      back: '$0.70 per $100 of consideration\nPaid by SELLER',
      difficulty: 'easy'
    },
    {
      front: 'What is the documentary stamp tax rate on NOTES in Florida?',
      back: '$0.35 per $100 of loan amount\nPaid by BUYER/BORROWER',
      difficulty: 'easy'
    },
    {
      front: 'What is the Miami-Dade County documentary stamp surtax?',
      back: '$0.45 per $100 ADDITIONAL\nTotal in Miami-Dade: $1.15 per $100',
      difficulty: 'medium'
    },
    {
      front: 'Is the intangible tax still charged in Florida?',
      back: 'NO - REPEALED effective January 1, 2007',
      difficulty: 'medium'
    },
    
    // PRORATIONS
    {
      front: 'Are Florida property taxes paid in ADVANCE or ARREARS?',
      back: 'ARREARS - Paid AFTER the tax year\n\nLien date: January 1\nDue date: November 1\nDelinquent: April 1',
      difficulty: 'easy'
    },
    {
      front: 'If property taxes are in ARREARS, how does it affect proration?',
      back: 'DEBIT to SELLER (seller owes for time they owned)\nCREDIT to BUYER (buyer will pay full amount later)',
      difficulty: 'medium'
    },
    {
      front: 'If rent is paid in ADVANCE, how does it affect proration?',
      back: 'DEBIT to SELLER (seller owes buyer portion)\nCREDIT to BUYER (buyer receives portion)',
      difficulty: 'medium'
    },
    {
      front: 'Who typically "owns" the day of closing?',
      back: 'The BUYER - Buyer is responsible for that day\'s expenses',
      difficulty: 'medium'
    },
    {
      front: 'How is the daily proration rate calculated?',
      back: 'Annual Amount ÷ 365 days (or 360 for banker\'s year)',
      difficulty: 'medium'
    },
    
    // DEBITS AND CREDITS
    {
      front: 'What is a DEBIT on a closing statement?',
      back: 'Amount OWED or CHARGED:\n• Increases cash needed (buyer)\n• Reduces proceeds (seller)',
      difficulty: 'medium'
    },
    {
      front: 'What is a CREDIT on a closing statement?',
      back: 'Amount RECEIVED or owed TO party:\n• Reduces cash needed (buyer)\n• Increases proceeds (seller)',
      difficulty: 'medium'
    },
    {
      front: 'How does EARNEST MONEY appear on buyer\'s statement?',
      back: 'CREDIT to buyer - Reduces cash needed at closing',
      difficulty: 'easy'
    },
    {
      front: 'How does the NEW LOAN appear on buyer\'s statement?',
      back: 'CREDIT to buyer - Reduces cash needed at closing',
      difficulty: 'easy'
    },
    {
      front: 'How does PURCHASE PRICE appear on buyer\'s statement?',
      back: 'DEBIT to buyer (owes)\nCREDIT to seller (receives)',
      difficulty: 'medium'
    },
    
    // SECURITY DEPOSITS & RENT
    {
      front: 'How do SECURITY DEPOSITS transfer at closing?',
      back: 'Full amount transfers:\nCREDIT to buyer (receives deposit)\nDEBIT to seller (gives up deposit)',
      difficulty: 'medium'
    },
    {
      front: 'How does PREPAID RENT affect closing?',
      back: 'Buyer gets credit for portion of prepaid rent covering their ownership period',
      difficulty: 'medium'
    },
    
    // TAX DISCOUNTS
    {
      front: 'What are Florida property tax early payment discounts?',
      back: 'November: 4%\nDecember: 3%\nJanuary: 2%\nFebruary: 1%\nMarch: No discount',
      difficulty: 'hard'
    },
    
    // KEY DATES
    {
      front: 'What are the key FL property tax dates?',
      back: 'LIEN DATE: January 1\nNOTICE: November 1\nDELINQUENT: April 1\nTax CERTIFICATE SALE: June 1',
      difficulty: 'hard'
    },
    
    // CLOSING CALCULATIONS
    {
      front: 'Formula for doc stamps on deed?',
      back: 'Sale Price ÷ 100 × $0.70 = Doc Stamps (deed)\n\nExample: $300,000 ÷ 100 × $0.70 = $2,100',
      difficulty: 'medium'
    },
    {
      front: 'Formula for doc stamps on note?',
      back: 'Loan Amount ÷ 100 × $0.35 = Doc Stamps (note)\n\nExample: $240,000 ÷ 100 × $0.35 = $840',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'The Closing Disclosure must be provided to the borrower:',
      options: [
        'At closing',
        '3 business days before closing',
        '7 business days before closing',
        '10 days before closing'
      ],
      correct: 1,
      explanation: 'The Closing Disclosure must be provided at least 3 business days BEFORE closing. The borrower must receive it (not just have it sent).'
    },
    {
      question: 'Documentary stamp tax on a deed in Florida is:',
      options: [
        '$0.35 per $100',
        '$0.55 per $100',
        '$0.70 per $100',
        '$1.00 per $100'
      ],
      correct: 2,
      explanation: 'Documentary stamp tax on deeds in Florida is $0.70 per $100 of consideration. This is customarily paid by the seller.'
    },
    {
      question: 'In Florida, property taxes are paid:',
      options: [
        'In advance',
        'In arrears',
        'At the time of purchase',
        'Only by commercial properties'
      ],
      correct: 1,
      explanation: 'Florida property taxes are paid in ARREARS, meaning they are paid after the tax year. The tax bill is due March 31 following the tax year.'
    },
    {
      question: 'If taxes are paid in arrears and closing occurs mid-year, the proration will result in:',
      options: [
        'Credit to seller, debit to buyer',
        'Debit to seller, credit to buyer',
        'Credit to both parties',
        'No proration needed'
      ],
      correct: 1,
      explanation: 'When taxes are in arrears, the seller owes for the time they owned the property but haven\'t paid. This is a DEBIT to seller and a CREDIT to buyer.'
    },
    {
      question: 'Who typically owns the day of closing?',
      options: [
        'The seller',
        'The buyer',
        'It is split evenly',
        'Neither party'
      ],
      correct: 1,
      explanation: 'The BUYER typically owns the day of closing and is responsible for that day\'s expenses. This can be negotiated in the contract.'
    },
    {
      question: 'The sale price of a property is $275,000. The documentary stamps on the deed are:',
      options: [
        '$962.50',
        '$1,375.00',
        '$1,925.00',
        '$2,750.00'
      ],
      correct: 2,
      explanation: '$275,000 ÷ 100 = 2,750 × $0.70 = $1,925.00'
    },
    {
      question: 'The buyer is obtaining a $220,000 mortgage. The documentary stamps on the note are:',
      options: [
        '$440',
        '$770',
        '$1,540',
        '$2,200'
      ],
      correct: 1,
      explanation: '$220,000 ÷ 100 = 2,200 × $0.35 = $770'
    },
    {
      question: 'The earnest money deposit on the buyer\'s closing statement is a:',
      options: [
        'Debit',
        'Credit',
        'Neither, it is not shown',
        'Debit to seller'
      ],
      correct: 1,
      explanation: 'Earnest money is a CREDIT to the buyer because it has already been paid and reduces the cash needed at closing.'
    },
    {
      question: 'The new mortgage loan amount on the buyer\'s closing statement is a:',
      options: [
        'Debit',
        'Credit',
        'Both debit and credit',
        'Not shown on buyer\'s statement'
      ],
      correct: 1,
      explanation: 'The new loan is a CREDIT to the buyer because it provides funds that reduce the cash the buyer needs to bring to closing.'
    },
    {
      question: 'Annual property taxes are $4,380. Using a 365-day year, the daily rate is:',
      options: [
        '$10.00',
        '$12.00',
        '$12.17',
        '$14.60'
      ],
      correct: 1,
      explanation: '$4,380 ÷ 365 = $12.00 per day'
    },
    {
      question: 'The intangible tax on mortgages in Florida:',
      options: [
        'Is $0.002 per $1',
        'Is $0.35 per $100',
        'Was repealed in 2007',
        'Only applies to commercial loans'
      ],
      correct: 2,
      explanation: 'The intangible tax was REPEALED effective January 1, 2007. It no longer applies to mortgages in Florida.'
    },
    {
      question: 'Rent collected in advance at closing creates:',
      options: [
        'Debit to buyer, credit to seller',
        'Debit to seller, credit to buyer',
        'Credit to both parties',
        'No adjustment needed'
      ],
      correct: 1,
      explanation: 'Rent collected in advance means the seller collected rent that covers the buyer\'s ownership period. This is a DEBIT to seller and CREDIT to buyer.'
    },
    {
      question: 'Security deposits at closing:',
      options: [
        'Are prorated between buyer and seller',
        'Transfer in full - credit to buyer, debit to seller',
        'Are returned to the tenant',
        'Are kept by the seller'
      ],
      correct: 1,
      explanation: 'Security deposits transfer in FULL to the buyer. They are not prorated. The buyer receives (credit) and the seller gives up (debit) the full deposit amount.'
    },
    {
      question: 'In Miami-Dade County, the total documentary stamp tax on a deed is:',
      options: [
        '$0.70 per $100',
        '$0.45 per $100',
        '$1.15 per $100',
        '$1.70 per $100'
      ],
      correct: 2,
      explanation: 'Miami-Dade County has a surtax of $0.45 per $100 in addition to the state rate of $0.70 per $100, for a total of $1.15 per $100.'
    },
    {
      question: 'Which document replaced the HUD-1 Settlement Statement?',
      options: [
        'Loan Estimate',
        'Closing Disclosure',
        'Good Faith Estimate',
        'Settlement Certificate'
      ],
      correct: 1,
      explanation: 'The Closing Disclosure (CD) replaced the HUD-1 Settlement Statement for most residential mortgage transactions under TRID rules.'
    }
  ],

  caseStudies: [
    {
      id: 'ch15-case1',
      title: 'The Tax Proration',
      scenario: 'A property closes on September 20. Annual property taxes are $5,475 (paid in arrears). Using a 365-day year and buyer owns the day of closing, calculate the proration.',
      question: 'How much does the seller owe, and how does it appear on the closing statements?',
      answer: 'First, calculate daily rate: $5,475 ÷ 365 = $15/day. Count seller\'s days: January (31) + February (28) + March (31) + April (30) + May (31) + June (30) + July (31) + August (31) + September 1-19 (19) = 262 days. Seller owes: 262 × $15 = $3,930. On closing statements: DEBIT to seller $3,930 (seller owes this), CREDIT to buyer $3,930 (buyer receives this because they\'ll pay the full tax bill later). The buyer will pay the entire tax bill when due and has been credited for the seller\'s portion.',
      examRelevance: 'Tests ability to calculate days, apply daily rate, and understand debit/credit entries for taxes in arrears. Remember: buyer owns closing day, count seller\'s days carefully.'
    },
    {
      id: 'ch15-case2',
      title: 'The Complete Closing',
      scenario: 'Sale price $400,000, loan amount $320,000, earnest money $15,000, seller\'s existing mortgage payoff $225,000, commission 6%. Closing in standard Florida county (not Miami-Dade).',
      question: 'Calculate documentary stamps and determine cash to close for buyer and net to seller (excluding prorations).',
      answer: 'Documentary stamps on deed (seller): $400,000 ÷ 100 × $0.70 = $2,800. Documentary stamps on note (buyer): $320,000 ÷ 100 × $0.35 = $1,120. Commission (seller): $400,000 × 6% = $24,000. BUYER: Price $400,000 (debit) - Loan $320,000 (credit) - Earnest $15,000 (credit) + Doc stamps $1,120 (debit) = $66,120 cash to close. SELLER: Price $400,000 (credit) - Payoff $225,000 (debit) - Commission $24,000 (debit) - Doc stamps $2,800 (debit) = $148,200 net proceeds.',
      examRelevance: 'Tests complete closing calculation including transfer taxes and commission. Key: know who pays what and how to calculate each item.'
    }
  ],

  summary: `Chapter 15 covers closing real estate transactions (5% of exam).

**Closing Basics**:
- Closing = settlement = escrow
- Title and funds transfer
- Title companies most common closing agents in Florida
- Deed recorded AFTER closing

**Closing Disclosure**:
- Required 3 business days BEFORE closing
- Replaced HUD-1 Settlement Statement
- APR increase >0.125% restarts 3-day wait

**Debits and Credits**:
- Debit = owed/charged (buyer pays, seller charged)
- Credit = received (buyer receives, seller gets)
- Purchase price: Buyer DEBIT, Seller CREDIT
- New loan: Buyer CREDIT
- Earnest money: Buyer CREDIT

**Prorations**:
- Florida taxes paid in ARREARS
- Arrears = DEBIT seller, CREDIT buyer
- Buyer usually owns day of closing
- 365-day or 360-day methods

**Property Tax Timeline**:
- Tax year: Jan 1 - Dec 31
- Due: March 31 following year
- Discounts for early payment

**Documentary Stamps**:
| Item | Rate | Who Pays |
|------|------|----------|
| Deeds | $0.70/$100 | Seller |
| Notes | $0.35/$100 | Buyer |
| Miami-Dade surtax | +$0.45/$100 | Seller |

**Intangible Tax**: REPEALED January 1, 2007

**Other Prorations**:
- Rent in advance: Debit seller, credit buyer
- Security deposits: Full transfer to buyer
- HOA prepaid: Credit seller`
};

export default CHAPTER_15;
