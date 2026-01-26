/**
 * Chapter 5: Brokerage Activities & Procedures
 * 
 * Covers 12% of the Florida Real Estate Exam (HIGHEST WEIGHTED)
 * Focus: Broker responsibilities, escrow, office requirements, and supervision
 */

export const CHAPTER_5 = {
  id: 5,
  title: 'Brokerage Activities & Procedures',
  subtitle: 'Operating a Real Estate Brokerage',
  examPercentage: 12,
  requiredTimeMinutes: 360, // 6 hours minimum (heaviest chapter)
  color: '#F59E0B', // Amber
  icon: 'Building2',
  
  objectives: [
    'Understand broker registration and office requirements',
    'Explain escrow account requirements and procedures',
    'Describe the handling of deposits and trust funds',
    'Identify advertising and signage requirements',
    'Understand broker supervision responsibilities',
    'Explain the sales associate and broker associate employment relationship',
    'Describe proper procedures for handling escrow disputes',
    'Understand compensation and commission rules'
  ],

  statutes: [
    { code: '475.22', title: 'Broker Office Requirements', summary: 'Registration, signage, and office standards' },
    { code: '475.25', title: 'Grounds for Discipline', summary: 'Violations and penalties' },
    { code: '475.42', title: 'Violations and Penalties', summary: 'Unlicensed activity and other violations' },
    { code: '61J2-14.008', title: 'Escrow Accounts', summary: 'Rules for handling trust funds' },
    { code: '61J2-14.009', title: 'Escrow Disputes', summary: 'Procedures for disputed funds' },
    { code: '61J2-10.022', title: 'Advertising', summary: 'Requirements for real estate advertising' }
  ],

  sections: [
    {
      id: '5.1',
      title: 'Broker Office Requirements',
      content: `## Broker Registration and Office Standards (F.S. 475.22)

Every broker must maintain a registered office that meets specific requirements.

### Office Registration

**Main Office**: Every broker must register a **principal office** with the DBPR.

**Branch Offices**: Each branch office must also be registered separately.

**Registration includes**:
- Physical address (no P.O. boxes)
- Name of broker
- Trade name (if any)

### Office Sign Requirements

Every broker office (main and branch) must display a **sign** at the entrance:

**Required Elements**:
- Broker's **name** (or registered trade name)
- The words **"Licensed Real Estate Broker"** or **"Lic. Real Estate Broker"**

**Sign Specifications**:
- Must be **easily observed and read** by anyone entering
- No specific size required, but must be visible

### Home Office Exception

A broker MAY operate from a home office, but:
- Must still be registered
- Does NOT need an entrance sign if no clients visit
- Sign required if clients come to the home office

### Temporary Shelter

If a broker's office is destroyed (fire, hurricane, etc.):
- Must notify DBPR within **10 days**
- Can operate from temporary location
- No additional registration fee for temporary shelter`,
      keyPoints: [
        'All broker offices must be registered with DBPR',
        'Sign must show broker name and "Licensed Real Estate Broker"',
        'No P.O. boxes - must be physical address',
        'Home offices exempt from sign if no clients visit',
        'Notify DBPR within 10 days if office destroyed'
      ],
      examTips: [
        'Sign must say "Licensed Real Estate Broker" (not just broker)',
        'P.O. boxes are NOT allowed for registration',
        '10 days to notify DBPR of office destruction',
        'Home office sign required ONLY if clients visit'
      ]
    },
    {
      id: '5.2',
      title: 'Sales Associate Employment',
      content: `## Sales Associate and Broker Relationship

Sales associates and broker associates must be employed by a broker to practice real estate.

### Registration Requirement

A sales associate must be **registered** with ONE and only one broker at a time:
- Cannot work for multiple brokers simultaneously
- Must register before conducting any real estate activity
- Change of employer requires new registration

### Employment Status

Sales associates may be classified as:

**Employee**: W-2, employer withholds taxes, eligible for benefits

**Independent Contractor**: 1099, responsible for own taxes

Most sales associates are independent contractors. For IRS purposes, three requirements for independent contractor status:
1. Licensed real estate professional
2. Compensation based on sales/output (not hours)
3. Written agreement stating independent contractor status

### Broker Supervision

The broker is responsible for:
- **All acts** of sales associates in real estate matters
- Proper handling of funds
- Compliance with license law
- Maintaining records

### Active vs. Inactive

**Active License**: Registered with a broker, can practice real estate

**Inactive License**: NOT registered with a broker, CANNOT practice real estate

A sales associate's license is **inactive** until registered with a broker.`,
      keyPoints: [
        'Sales associates can only work for ONE broker at a time',
        'Must register with broker BEFORE any real estate activity',
        'Most are independent contractors (1099)',
        'Broker responsible for all acts of sales associates',
        'License is inactive until registered with a broker'
      ],
      examTips: [
        'ONE broker at a time - no exceptions',
        'Broker is liable for sales associate actions',
        'Registration must happen BEFORE any activity',
        'Know the 3 requirements for independent contractor status'
      ]
    },
    {
      id: '5.3',
      title: 'Escrow Accounts',
      content: `## Trust Fund Handling (Rule 61J2-14.008)

Brokers must maintain proper escrow (trust) accounts for holding other people's money.

### What Is an Escrow Account?

An **escrow account** (also called trust account) is a bank account where a broker holds money that belongs to others, such as:
- Earnest money deposits
- Security deposits (property management)
- Advance rent payments

### Account Requirements

**Type**: Must be a **demand deposit** (checking) account in a Florida bank

**Name**: Must include:
- Broker's name (or trade name)
- The word **"escrow"** or **"trust"**

**Location**: Must be in a **Florida banking institution** (bank, credit union, or savings association)

### Who Can Make Withdrawals?

**The broker** - Always has signatory authority

**Others with written authorization**:
- Broker associate
- Sales associate
- Bookkeeper/office manager
- Attorney

The broker is **ALWAYS responsible** even if others have signatory authority.

### Interest-Bearing Accounts

Escrow accounts may be interest-bearing if:
- All parties agree **in writing**
- The agreement specifies who receives the interest

**Default**: If no agreement, interest typically goes to the **buyer** at closing or is handled per the contract.

### Commingling Prohibition

**Commingling** = mixing personal/business funds with escrow funds

This is **PROHIBITED**. However, a broker MAY keep up to **$5,000** of personal or business funds in escrow to cover bank fees and maintain minimum balance (but is not required to).`,
      keyPoints: [
        'Escrow must be demand deposit (checking) in Florida bank',
        'Account name must include broker name + "escrow" or "trust"',
        'Broker is ALWAYS responsible even if others have signatory authority',
        'Broker may keep up to $5,000 personal funds in escrow',
        'Interest-bearing accounts require written agreement from all parties'
      ],
      examTips: [
        '$5,000 maximum personal funds allowed in escrow',
        'Account MUST be in Florida (not out of state)',
        'Must be checking account (demand deposit)',
        'Broker liable even if sales associate makes withdrawal'
      ]
    },
    {
      id: '5.4',
      title: 'Deposit Requirements',
      content: `## Handling Earnest Money Deposits

When a broker receives a deposit (earnest money), specific rules apply.

### Delivery to Broker

When a sales associate receives a deposit:
- Must deliver to broker by **end of next business day**
- Cannot hold deposits personally
- Broker then has responsibility for proper handling

### Deposit Timeline

Once the broker receives a deposit, they must deposit it into escrow **no later than the end of the third business day**:

**Business Days**: Monday-Friday (excluding holidays)

**Timeline Example**:
- Monday: Broker receives deposit
- Thursday: Deposit must be in escrow account (end of 3rd business day)

### Forms of Deposit

Brokers may accept deposits in the form of:
- Cash
- Check
- Promissory note
- Other forms specified in contract

If the contract specifies a deposit other than cash/check, the broker must:
- Hold the item according to contract terms
- Disclose to all parties the form of deposit

### Non-Cash Deposits

For promissory notes or other non-cash items:
- Cannot deposit in bank (obvious)
- Must safeguard according to contract
- Must disclose form of deposit to all parties

### Postdated Checks

A broker MAY accept a postdated check if:
- All parties are aware and agree
- The contract reflects this arrangement
- Broker holds until date on check`,
      keyPoints: [
        'Sales associate: deliver to broker by end of next business day',
        'Broker: deposit in escrow by end of third business day',
        'Non-cash deposits must be disclosed to all parties',
        'Postdated checks allowed if all parties agree',
        'Business days = Monday-Friday (not weekends/holidays)'
      ],
      examTips: [
        'Next business day for SA to broker',
        'Third business day for broker to escrow',
        'Count business days carefully (Mon-Fri only)',
        'Non-cash deposits (promissory notes) must be disclosed'
      ]
    },
    {
      id: '5.5',
      title: 'Escrow Disbursement',
      content: `## When and How to Disburse Escrow Funds

Escrow funds must be properly disbursed according to the contract and law.

### Authorized Disbursements

Broker may disburse escrow funds when:

1. **Transaction closes** - funds disbursed per closing statement

2. **Proper written instructions** - all parties agree in writing

3. **Court order** - judge orders disbursement

4. **Contract terms are met** - contingencies satisfied or waived

### Unauthorized Disbursements

Broker CANNOT disburse:
- Without proper authorization
- To only one party without the other's consent
- Based on verbal instructions alone

### Failure of Transaction

If a transaction fails and the funds are:

**Not in dispute**: Disburse within **15 business days** of receiving written demand from entitled party

**In dispute**: Follow escrow dispute procedures (next section)

### Good Faith Doubt

A broker has **good faith doubt** when:
- Conflicting demands are made
- It's unclear who is entitled to the funds
- A dispute exists between parties

When in good faith doubt, the broker must:
- NOT disburse to either party
- Follow escrow dispute procedures
- Notify FREC within a specific timeframe`,
      keyPoints: [
        'Disburse at closing, by written agreement, or court order',
        'Cannot disburse based on verbal instructions only',
        'If not disputed: 15 business days to disburse on written demand',
        'Good faith doubt = conflicting demands or unclear entitlement',
        'Must notify FREC when in good faith doubt'
      ],
      examTips: [
        '15 business days for undisputed funds after written demand',
        'WRITTEN instructions required - never verbal only',
        'Good faith doubt triggers escrow dispute procedures',
        'Broker must notify FREC of disputes'
      ]
    },
    {
      id: '5.6',
      title: 'Escrow Dispute Procedures',
      content: `## Handling Escrow Disputes (Rule 61J2-14.009)

When parties dispute who is entitled to escrow funds, the broker has specific options.

### The Four Settlement Procedures

A broker in an escrow dispute must follow ONE of these within **30 business days**:

**1. Mediation**
- Parties attempt to resolve with neutral mediator
- Non-binding unless agreement reached

**2. Arbitration**
- Neutral arbitrator makes binding decision
- Faster than litigation
- Both parties must agree to arbitrate

**3. Litigation (Interpleader)**
- Broker files lawsuit asking court to decide
- Broker deposits funds with court
- Court determines rightful recipient

**4. Request FREC to Issue an Escrow Disbursement Order (EDO)**
- FREC determines who receives funds
- Must request within 30 business days
- FREC issues order within 90 days

### 30 Business Day Requirement

Broker must institute one of the four procedures within **30 business days** of:
- The last demand from either party, OR
- Receiving conflicting demands

### FREC Notification

Broker must notify FREC of the dispute by filing:
- Copy of the contract
- Copy of demands received
- Statement of good faith doubt

### During the Dispute

While the dispute is pending:
- Funds remain in escrow
- Broker cannot release to either party
- Broker may NOT take a commission from disputed funds`,
      keyPoints: [
        'Four options: Mediation, Arbitration, Litigation, FREC EDO',
        'Must choose one within 30 business days',
        '30 days starts from last demand or conflicting demands',
        'Must notify FREC of the dispute',
        'Cannot take commission from disputed funds'
      ],
      examTips: [
        '30 business days to institute a settlement procedure',
        'Know all FOUR options (mediation, arbitration, litigation, EDO)',
        'Interpleader = lawsuit asking court to decide',
        'EDO = Escrow Disbursement Order from FREC'
      ]
    },
    {
      id: '5.7',
      title: 'Advertising Requirements',
      content: `## Real Estate Advertising (Rule 61J2-10.022)

All real estate advertising must comply with FREC rules and Florida law.

### Required Elements

All advertising must include the **licensed name of the brokerage firm**:
- Can use registered trade name
- Must be the name on file with DBPR

### What Is Advertising?

Advertising includes:
- Newspaper ads
- Online listings
- Social media posts
- Yard signs
- Flyers and brochures
- Business cards
- Radio/TV commercials
- Websites

### Sales Associate Advertising

When a sales associate advertises:
- Must include brokerage name
- Sales associate's name alone is NOT sufficient
- Cannot advertise independently of broker

### Team Names

Real estate teams may advertise using a team name IF:
- The brokerage name is also included
- The team name doesn't imply it's a separate brokerage

### Prohibited Advertising

**Blind Ads**: Ads that do not include the brokerage name are prohibited

**Misleading Ads**: Cannot make false or misleading claims about:
- Property features
- Terms of sale
- Licensee's qualifications

### Internet Advertising

For websites and online advertising:
- Brokerage name must be visible
- Must be on the same page as listing
- Cannot require clicking to find brokerage name

### For Sale by Owner (FSBO)

When advertising a property you own:
- If NOT using your license, no brokerage name needed
- If conducting as licensed activity, must include brokerage name`,
      keyPoints: [
        'All ads must include brokerage (firm) name',
        'Blind ads (without brokerage name) are prohibited',
        'Sales associates cannot advertise independently',
        'Team names must also include brokerage name',
        'Online ads must show brokerage on same page'
      ],
      examTips: [
        'BROKERAGE name required - not just agent name',
        'Blind ad = ad without brokerage name = violation',
        'Social media counts as advertising',
        'FSBO by licensee needs brokerage name if licensed activity'
      ]
    },
    {
      id: '5.8',
      title: 'Compensation and Commissions',
      content: `## Commission Rules and Compensation

Understanding how compensation works in real estate is essential for licensees.

### Who Pays Commission?

**Key Rule**: Commission is always **negotiable** - there is no standard or set commission rate.

Commission is typically paid by the seller, but:
- Can be paid by buyer
- Can be split between parties
- Determined by contract negotiation

### Who Can Pay a Sales Associate?

A sales associate may ONLY receive compensation from:
- Their **employing broker**
- NEVER directly from a buyer, seller, or other party

Even if a buyer wants to pay a bonus, it must go through the broker.

### Sharing with Unlicensed Persons

Commission cannot be shared with unlicensed persons, EXCEPT:
- Referral fees to out-of-state licensees (with valid license in their state)
- One-time referral of up to **$50** to an unlicensed person (gift, not payment for services)

### Broker-to-Broker Compensation

Brokers may share commissions with:
- Other licensed Florida brokers
- Brokers licensed in other states/countries
- Must be broker-to-broker (not directly to sales associates of other firms)

### After Relationship Ends

A sales associate may receive commission for deals in progress when they leave:
- Must have written agreement with former broker
- Commission paid through previous broker
- Cannot go back and collect directly from clients`,
      keyPoints: [
        'Commission is ALWAYS negotiable',
        'Sales associates paid ONLY by their employing broker',
        'Cannot share commission with unlicensed persons (few exceptions)',
        'Brokers can share with other licensed brokers',
        '$50 max referral gift to unlicensed person'
      ],
      examTips: [
        'NO standard commission - always negotiable',
        'Sales associate NEVER paid directly by buyer/seller',
        'Broker-to-broker sharing is allowed',
        '$50 limit for unlicensed referral gifts'
      ]
    },
    {
      id: '5.9',
      title: 'Record Keeping Requirements',
      content: `## Brokerage Records (F.S. 475.5015)

Brokers must maintain certain records for inspection by DBPR.

### Required Records

Brokers must keep:
- All contracts and agreements
- Listings
- Closing statements
- Trust account records
- Deposit receipts
- Disclosure forms
- Correspondence related to transactions

### Retention Period

All records must be kept for **5 years**:
- From date of transaction or
- From date listing expires (if no transaction)

### Availability for Inspection

Records must be available for inspection:
- During normal business hours
- By authorized DBPR representatives
- Without unreasonable delay

### Trust Account Records

Specific records for escrow accounts:
- Monthly reconciliation statements
- Bank statements
- Deposit slips
- Check images
- Ledgers showing each transaction

### Monthly Reconciliation

Brokers must reconcile escrow accounts **monthly**:
- Compare broker's records to bank statement
- Ensure all funds accounted for
- Identify any discrepancies

Written reconciliation must be completed within **10 business days** following receipt of bank statement.`,
      keyPoints: [
        'Keep all transaction records for 5 years',
        'Must be available for DBPR inspection',
        'Trust accounts require monthly reconciliation',
        'Reconciliation within 10 business days of bank statement',
        'Records include contracts, closings, deposits, disclosures'
      ],
      examTips: [
        '5 years retention for all records',
        'Monthly reconciliation is required',
        '10 business days to complete reconciliation',
        'DBPR can inspect during normal business hours'
      ]
    },
    {
      id: '5.10',
      title: 'Violations and Discipline',
      content: `## Common Violations (F.S. 475.25, 475.42)

Understanding violations helps licensees avoid discipline.

### License Law Violations (475.25)

**Fraud, misrepresentation, dishonest dealing**
- Making false promises
- Concealing material facts
- Deceiving clients or customers

**Breach of trust**
- Mishandling escrow funds
- Commingling funds
- Failure to account for money

**Failure to maintain license**
- Practicing while inactive
- Not completing required education
- Failure to notify of address change

**Violating FREC rules**
- Advertising violations
- Disclosure failures
- Escrow account violations

### Criminal Violations (475.42)

**Unlicensed practice**
- Operating without a license
- Paying unlicensed persons for services requiring a license

**Using another's license**
- Falsely claiming to be licensed
- Using someone else's license

### Penalties

FREC may impose:
- **Reprimand**
- **Fine** up to $5,000 per violation
- **Probation**
- **Suspension** (temporary)
- **Revocation** (permanent)
- **Administrative costs**

### Immediate Suspension

A license may be **immediately suspended** if the licensee:
- Is arrested for certain felonies
- Poses an immediate threat to public safety
- Has committed fraud involving escrow funds`,
      keyPoints: [
        'Fraud, misrepresentation, and dishonest dealing are violations',
        'Commingling escrow funds is a serious violation',
        'Unlicensed practice is a criminal offense',
        'Fines up to $5,000 per violation',
        'Immediate suspension for felony arrest or escrow fraud'
      ],
      examTips: [
        'Know the difference between license law (475.25) and criminal (475.42)',
        '$5,000 max fine per count/violation',
        'Commingling = mixing funds = serious violation',
        'Unlicensed practice is criminal, not just civil'
      ]
    }
  ],

  flashcards: [
    // ESCROW & TRUST FUNDS (Critical - many exam questions)
    {
      front: 'How many business days does a broker have to deposit trust funds into escrow after receiving them?',
      back: 'By the end of the THIRD business day (not calendar day)',
      difficulty: 'easy'
    },
    {
      front: 'When must a sales associate deliver a deposit to their broker?',
      back: 'By the end of the NEXT business day after receiving it',
      difficulty: 'medium'
    },
    {
      front: 'How much personal/business funds may a broker keep in an escrow account?',
      back: 'Up to $5,000 to cover bank fees and minimum balance requirements',
      difficulty: 'medium'
    },
    {
      front: 'What type of bank account must be used for escrow?',
      back: 'Demand deposit (checking) account in a Florida banking institution - must be FDIC insured',
      difficulty: 'medium'
    },
    {
      front: 'How often must escrow accounts be reconciled?',
      back: 'MONTHLY - within 10 business days of receiving bank statement',
      difficulty: 'medium'
    },
    {
      front: 'How long must escrow account records be retained?',
      back: '5 YEARS from the date of receipt of funds or completion of transaction',
      difficulty: 'easy'
    },
    {
      front: 'What is "commingling"?',
      back: 'MIXING personal or business funds with escrow/trust funds - VIOLATION (not criminal)',
      difficulty: 'easy'
    },
    {
      front: 'What is "conversion"?',
      back: 'USING escrow funds for personal purposes - this is CRIMINAL (theft)',
      difficulty: 'easy'
    },
    {
      front: 'What is the difference between commingling and conversion?',
      back: 'COMMINGLING = mixing funds (violation). CONVERSION = using/stealing funds (CRIMINAL). Conversion is far more serious.',
      difficulty: 'hard'
    },
    {
      front: 'Can a broker hold escrow in an interest-bearing account?',
      back: 'YES, but ONLY with written consent of ALL parties AND interest must be disbursed as agreed in writing',
      difficulty: 'hard'
    },
    
    // ESCROW DISPUTES
    {
      front: 'How many business days does a broker have to choose a settlement procedure for an escrow dispute?',
      back: '30 BUSINESS DAYS from the last party demand',
      difficulty: 'medium'
    },
    {
      front: 'What are the four escrow dispute settlement procedures?',
      back: '1. Mediation\n2. Arbitration\n3. Litigation (interpleader)\n4. Request FREC Escrow Disbursement Order (EDO)',
      difficulty: 'hard'
    },
    {
      front: 'How many business days to disburse undisputed escrow funds after written demand?',
      back: '15 BUSINESS DAYS',
      difficulty: 'medium'
    },
    {
      front: 'What is an interpleader action?',
      back: 'A lawsuit where the broker deposits funds with the court and asks the court to decide who gets them. Releases broker from liability.',
      difficulty: 'hard'
    },
    {
      front: 'What is a FREC Escrow Disbursement Order (EDO)?',
      back: 'FREC determines who receives disputed funds. Only used when escrow amount is $50,000 OR LESS.',
      difficulty: 'hard'
    },
    {
      front: 'What is the maximum amount for a FREC EDO (Escrow Disbursement Order)?',
      back: '$50,000 or less. For disputes over $50,000, must use mediation, arbitration, or interpleader.',
      difficulty: 'medium'
    },
    {
      front: 'If both parties agree, can escrow be released before closing?',
      back: 'YES - with WRITTEN agreement of ALL parties, funds may be released at any time',
      difficulty: 'medium'
    },
    
    // BROKER OFFICE REQUIREMENTS
    {
      front: 'What must a broker\'s office sign display?',
      back: 'Broker\'s name AND "Licensed Real Estate Broker" or "Lic. Real Estate Broker"',
      difficulty: 'easy'
    },
    {
      front: 'Can a broker use a P.O. Box for registration?',
      back: 'NO - must be a PHYSICAL address. P.O. Boxes are prohibited.',
      difficulty: 'easy'
    },
    {
      front: 'Does a home office need a sign?',
      back: 'Only if clients visit. If broker meets clients at other locations, no sign required at home.',
      difficulty: 'medium'
    },
    {
      front: 'How long does a broker have to notify DBPR of address change?',
      back: '10 DAYS',
      difficulty: 'easy'
    },
    {
      front: 'If a broker\'s office is destroyed, how long to notify DBPR?',
      back: '10 DAYS - then may operate from temporary location without additional fee',
      difficulty: 'medium'
    },
    
    // COMPENSATION & COMMISSION
    {
      front: 'Can a sales associate receive commission directly from a buyer or seller?',
      back: 'NO - must ALWAYS be paid through their employing broker. Even after leaving, old broker pays.',
      difficulty: 'easy'
    },
    {
      front: 'Can a broker share commission with an unlicensed person?',
      back: 'Generally NO. Exceptions: 1) Up to $50 one-time gift for referral, 2) Referral fee to properly licensed out-of-state broker',
      difficulty: 'hard'
    },
    {
      front: 'Who can sue for a real estate commission?',
      back: 'Only the BROKER can sue for commission. Sales associates cannot sue - they are paid by the broker.',
      difficulty: 'medium'
    },
    {
      front: 'Must commission agreements be in writing?',
      back: 'YES - commission agreements must be in WRITING to be enforceable (Statute of Frauds)',
      difficulty: 'medium'
    },
    {
      front: 'Can a broker pay a bonus to an unlicensed assistant?',
      back: 'YES - can pay salary or bonus, but CANNOT pay commission based on sales transactions',
      difficulty: 'hard'
    },
    
    // ADVERTISING
    {
      front: 'What is a "blind ad"?',
      back: 'An advertisement that does NOT include the brokerage firm name - PROHIBITED in Florida',
      difficulty: 'medium'
    },
    {
      front: 'Can a sales associate advertise in their own name?',
      back: 'YES, but MUST include the brokerage name. Cannot advertise as if independent.',
      difficulty: 'medium'
    },
    {
      front: 'What must all real estate advertisements include?',
      back: 'The BROKERAGE NAME as registered with DBPR. This applies to all media including internet.',
      difficulty: 'easy'
    },
    {
      front: 'Can a sales associate have their own website?',
      back: 'YES, but must prominently display brokerage name. Cannot appear to be independent broker.',
      difficulty: 'medium'
    },
    
    // BROKER SUPERVISION
    {
      front: 'Who is responsible for the actions of sales associates?',
      back: 'The BROKER is responsible for supervising and the acts of their sales associates.',
      difficulty: 'easy'
    },
    {
      front: 'How long must brokers retain transaction records?',
      back: '5 YEARS from the date of transaction',
      difficulty: 'easy'
    },
    {
      front: 'Can a sales associate work for multiple brokers?',
      back: 'NO - must be employed by ONE broker at a time. Must transfer license to change employers.',
      difficulty: 'medium'
    },
    {
      front: 'What happens if a broker dies or becomes incapacitated?',
      back: 'DBPR may appoint a TEMPORARY BROKER to wind up business affairs for up to 180 days.',
      difficulty: 'hard'
    }
  ],

  practiceQuestions: [
    {
      question: 'A broker receives an earnest money deposit on Monday. By when must the deposit be placed in the escrow account?',
      options: [
        'By Tuesday end of business',
        'By Wednesday end of business',
        'By Thursday end of business',
        'By Friday end of business'
      ],
      correct: 2,
      explanation: 'The broker must deposit funds by the end of the third business day. Monday (day 1), Tuesday (day 2), Wednesday (day 3), Thursday (end of 3rd business day).'
    },
    {
      question: 'What is the maximum amount of personal funds a broker may keep in an escrow account?',
      options: [
        '$1,000',
        '$2,500',
        '$5,000',
        '$10,000'
      ],
      correct: 2,
      explanation: 'A broker may keep up to $5,000 of personal or business funds in an escrow account to cover bank fees and maintain minimum balance requirements.'
    },
    {
      question: 'A sales associate receives an earnest money check on Wednesday. When must she deliver it to her broker?',
      options: [
        'Immediately',
        'By end of business Wednesday',
        'By end of business Thursday',
        'By end of business Friday'
      ],
      correct: 2,
      explanation: 'A sales associate must deliver a deposit to the broker by the end of the next business day. If received Wednesday, it must be delivered by Thursday end of business.'
    },
    {
      question: 'When parties dispute escrow funds, the broker must initiate a settlement procedure within:',
      options: [
        '10 business days',
        '15 business days',
        '30 business days',
        '60 business days'
      ],
      correct: 2,
      explanation: 'The broker must initiate one of the four settlement procedures (mediation, arbitration, litigation, or FREC EDO) within 30 business days of the last demand.'
    },
    {
      question: 'A sales associate wants to run a newspaper ad for a listing. What must the ad include?',
      options: [
        'Only the sales associate\'s name',
        'The brokerage firm name',
        'The property address only',
        'The MLS number'
      ],
      correct: 1,
      explanation: 'All real estate advertising must include the licensed name of the brokerage firm. A sales associate cannot advertise using only their own name (blind ad).'
    },
    {
      question: 'How long must a broker retain transaction records?',
      options: [
        '2 years',
        '3 years',
        '5 years',
        '7 years'
      ],
      correct: 2,
      explanation: 'Brokers must retain all transaction records for 5 years from the date of the transaction or from when a listing expires.'
    },
    {
      question: 'A buyer wants to give a sales associate a $500 bonus directly. This is:',
      options: [
        'Acceptable if in writing',
        'Acceptable only after closing',
        'Not permitted - must go through the broker',
        'Permitted for amounts under $1,000'
      ],
      correct: 2,
      explanation: 'A sales associate may ONLY receive compensation from their employing broker. Any bonus must be paid through the broker, not directly from the buyer or seller.'
    },
    {
      question: 'What is the term for mixing personal funds with escrow funds?',
      options: [
        'Conversion',
        'Commingling',
        'Reconciliation',
        'Interpleader'
      ],
      correct: 1,
      explanation: 'Commingling is the improper mixing of personal or business funds with escrow/trust funds. It is prohibited in Florida.'
    },
    {
      question: 'A broker\'s office sign must include:',
      options: [
        'The broker\'s name only',
        'The broker\'s name and license number',
        'The broker\'s name and "Licensed Real Estate Broker"',
        'The company logo and phone number'
      ],
      correct: 2,
      explanation: 'The office sign must display the broker\'s name (or trade name) and the words "Licensed Real Estate Broker" or "Lic. Real Estate Broker."'
    },
    {
      question: 'How many sales associates may a sales associate work for at one time?',
      options: [
        'One',
        'Two',
        'Three',
        'Unlimited'
      ],
      correct: 0,
      explanation: 'A sales associate may only work for ONE broker at a time. They must be registered with that broker before conducting any real estate activity.'
    },
    {
      question: 'If escrow funds are NOT in dispute, how many business days does a broker have to disburse after receiving written demand?',
      options: [
        '5 business days',
        '10 business days',
        '15 business days',
        '30 business days'
      ],
      correct: 2,
      explanation: 'If funds are not in dispute, the broker must disburse within 15 business days after receiving a written demand from the party entitled to the funds.'
    },
    {
      question: 'Which is NOT one of the four escrow dispute settlement procedures?',
      options: [
        'Mediation',
        'Arbitration',
        'Negotiation',
        'Litigation (Interpleader)'
      ],
      correct: 2,
      explanation: 'The four procedures are: Mediation, Arbitration, Litigation (interpleader), and Request FREC Escrow Disbursement Order. Negotiation is not one of the official procedures.'
    },
    {
      question: 'How often must a broker reconcile their escrow account?',
      options: [
        'Weekly',
        'Monthly',
        'Quarterly',
        'Annually'
      ],
      correct: 1,
      explanation: 'Brokers must reconcile escrow accounts monthly, completing the written reconciliation within 10 business days of receiving the bank statement.'
    },
    {
      question: 'A broker operates from a home office where clients never visit. Which statement is TRUE?',
      options: [
        'The office must still have an entrance sign',
        'The office does not need a sign',
        'The broker cannot operate from a home',
        'FREC approval is required for home offices'
      ],
      correct: 1,
      explanation: 'A home office does not need an entrance sign if clients never visit. However, the office must still be registered with DBPR.'
    },
    {
      question: 'The maximum fine FREC can impose for a single violation is:',
      options: [
        '$1,000',
        '$2,500',
        '$5,000',
        '$10,000'
      ],
      correct: 2,
      explanation: 'FREC can impose a fine of up to $5,000 per count or violation. Multiple violations can result in multiple fines.'
    }
  ],

  caseStudies: [
    {
      id: 'ch5-case1',
      title: 'The Disputed Deposit',
      scenario: 'Broker Betty holds a $15,000 earnest money deposit for a residential transaction. The buyer claims the seller failed to make agreed-upon repairs and demands return of the deposit. The seller claims all repairs were made and the buyer is in breach, demanding Betty release the funds to her. Betty has received written demands from both parties.',
      question: 'What must Betty do, and within what timeframe?',
      answer: 'Betty is now in "good faith doubt" due to conflicting demands. She must: 1) NOT release funds to either party, 2) Notify FREC of the dispute, and 3) Within 30 business days, institute one of the four settlement procedures: mediation, arbitration, litigation (interpleader), or request a FREC Escrow Disbursement Order. Betty cannot take a commission from the disputed funds and must keep them in escrow until the dispute is resolved.',
      examRelevance: 'Tests the 30-business-day timeline and the four settlement procedures. Key points: good faith doubt, notify FREC, 30 days to act, cannot keep commission from disputed funds.'
    },
    {
      id: 'ch5-case2',
      title: 'The Unlicensed Assistant',
      scenario: 'Sales associate Sam has a busy practice and hires his unlicensed friend Tom to help. Sam pays Tom $100 for each buyer Tom "finds" by hosting open houses and collecting contact information. Tom also shows properties to potential buyers when Sam is unavailable.',
      question: 'What violations have occurred?',
      answer: 'Multiple violations: 1) Tom is practicing real estate without a license (hosting open houses, showing properties) - criminal violation; 2) Sam is paying an unlicensed person for services requiring a license - violation of F.S. 475.42; 3) The $100 per referral exceeds the $50 maximum allowed for referral gifts to unlicensed persons. Sam could face discipline including fines and suspension. Tom could face criminal prosecution for unlicensed practice.',
      examRelevance: 'Tests understanding of unlicensed practice, compensation limits, and what activities require a license. Key points: hosting open houses requires license, showing property requires license, $50 max referral to unlicensed person.'
    }
  ],

  summary: `Chapter 5 is the HIGHEST WEIGHTED chapter (12%) and covers brokerage operations.

**Office Requirements**: Register all offices, sign must show broker name + "Licensed Real Estate Broker". P.O. boxes not allowed. Home office exempt from sign if no clients visit.

**Escrow Accounts**: Must be demand deposit (checking) in Florida bank. Account name includes broker + "escrow/trust". Broker may keep up to $5,000 personal funds. Monthly reconciliation required within 10 business days.

**Deposit Timeline**:
- Sales associate → broker: End of NEXT business day
- Broker → escrow account: End of THIRD business day
- Undisputed funds disbursement: 15 business days after written demand

**Escrow Disputes** (within 30 business days):
1. Mediation
2. Arbitration  
3. Litigation (Interpleader)
4. FREC Escrow Disbursement Order (EDO)

**Advertising**: Must include brokerage name. Blind ads prohibited. Social media counts.

**Compensation**: Always negotiable. Sales associates paid ONLY by employing broker. $50 max referral gift to unlicensed person.

**Records**: Keep 5 years. Available for DBPR inspection.

**Violations**: Fines up to $5,000 per violation. Commingling prohibited. Unlicensed practice is criminal.`
};

export default CHAPTER_5;
