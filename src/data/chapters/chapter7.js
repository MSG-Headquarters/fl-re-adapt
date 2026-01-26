/**
 * Chapter 7: Federal & State Laws
 * 
 * Covers 3% of the Florida Real Estate Exam
 * Focus: Fair Housing, ADA, RESPA, Truth in Lending, and Florida-specific laws
 */

export const CHAPTER_7 = {
  id: 7,
  title: 'Federal & State Laws',
  subtitle: 'Fair Housing, ADA, and Florida Laws',
  examPercentage: 3,
  requiredTimeMinutes: 180, // 3 hours minimum
  color: '#6366F1', // Indigo
  icon: 'Scale',
  
  objectives: [
    'Understand the Fair Housing Act and protected classes',
    'Identify exemptions to fair housing laws',
    'Explain the Americans with Disabilities Act requirements',
    'Describe RESPA requirements and prohibited practices',
    'Understand Truth in Lending Act disclosures',
    'Explain Florida-specific landlord-tenant laws',
    'Identify environmental disclosure requirements'
  ],

  statutes: [
    { code: '42 USC 3601', title: 'Fair Housing Act', summary: 'Federal anti-discrimination law for housing' },
    { code: '42 USC 12101', title: 'Americans with Disabilities Act', summary: 'Accessibility requirements' },
    { code: '12 USC 2601', title: 'RESPA', summary: 'Real Estate Settlement Procedures Act' },
    { code: '15 USC 1601', title: 'Truth in Lending Act', summary: 'Disclosure requirements for credit' },
    { code: 'F.S. 83', title: 'Florida Landlord-Tenant Act', summary: 'Florida residential tenancy laws' },
    { code: 'F.S. 760.20', title: 'Florida Fair Housing Act', summary: 'State fair housing protections' }
  ],

  sections: [
    {
      id: '7.1',
      title: 'Fair Housing Act Overview',
      content: `## The Federal Fair Housing Act (42 USC 3601)

The Fair Housing Act prohibits discrimination in housing based on protected classes.

### History

**Civil Rights Act of 1866**: Prohibited discrimination based on race (still in effect)

**Fair Housing Act of 1968**: Created comprehensive fair housing protections

**Amendments**:
- 1974: Added sex as protected class
- 1988: Added familial status and handicap (disability)

### Seven Federal Protected Classes

The Fair Housing Act prohibits discrimination based on:

1. **Race**
2. **Color**
3. **Religion**
4. **National Origin**
5. **Sex** (added 1974)
6. **Familial Status** (added 1988)
7. **Handicap/Disability** (added 1988)

### What Is Familial Status?

Familial status protects:
- Families with children under 18
- Pregnant women
- Anyone obtaining custody of a child

### What Is Handicap/Disability?

Includes:
- Physical disabilities
- Mental disabilities
- History of disability (e.g., recovered addict)
- Being regarded as having a disability

Does NOT include:
- Current illegal drug users
- Persons convicted of illegal manufacture/distribution of drugs

### Florida Additional Protected Classes

Florida Fair Housing Act (F.S. 760.20) adds:
- **Marital Status** (state only, not federal)

Some local jurisdictions add more classes (age, sexual orientation, etc.)`,
      keyPoints: [
        'Seven federal protected classes: Race, Color, Religion, National Origin, Sex, Familial Status, Handicap',
        'Fair Housing Act passed 1968, amended 1974 and 1988',
        'Familial status = families with children under 18',
        'Florida adds Marital Status as protected class',
        'Civil Rights Act of 1866 still applies (race only, NO exemptions)'
      ],
      examTips: [
        'Memorize all 7 federal protected classes',
        'Familial status added in 1988 (same as handicap)',
        'Florida adds marital status (8 classes total in FL)',
        '1866 Act has NO exemptions - race always protected'
      ]
    },
    {
      id: '7.2',
      title: 'Prohibited Practices',
      content: `## Discriminatory Acts Under Fair Housing

The Fair Housing Act prohibits specific discriminatory practices.

### Prohibited Actions

**1. Refusal to Sell or Rent**
- Cannot refuse based on protected class
- Cannot impose different terms or conditions

**2. Discrimination in Terms**
- Different rental rates
- Different security deposits
- Different lease terms

**3. Discriminatory Advertising**
- Cannot indicate preference or limitation
- Cannot use discriminatory language or images
- Applies to all advertising (print, online, signs)

**4. Steering**
- Directing buyers/renters to or away from areas based on protected class
- Example: Showing only certain neighborhoods based on race

**5. Blockbusting (Panic Peddling)**
- Inducing sales by claiming protected class is moving into area
- Example: "You should sell now before property values drop"

**6. Redlining**
- Denying services to areas based on demographics
- Often done by lenders, insurers
- Named for drawing red lines on maps

**7. Discriminatory Financing**
- Different loan terms based on protected class
- Refusal to make loans

### Examples of Violations

- "Adults only" community (familial status)
- "No wheelchairs" (disability)
- "Christian family preferred" (religion)
- "English speakers only" (national origin)
- Different security deposit for families with children`,
      keyPoints: [
        'Steering = directing people to/from areas based on protected class',
        'Blockbusting = inducing panic sales based on protected class entering area',
        'Redlining = denying services to areas based on demographics',
        'Advertising cannot indicate preference or limitation',
        'Different terms/conditions for protected classes = violation'
      ],
      examTips: [
        'Know definitions: steering, blockbusting, redlining',
        '"Adults only" violates familial status protection',
        'Cannot ask about protected class status',
        'Advertising includes online, print, and yard signs'
      ]
    },
    {
      id: '7.3',
      title: 'Fair Housing Exemptions',
      content: `## Exemptions to Fair Housing Act

Certain narrow exemptions exist, but they are LIMITED.

### Owner-Occupied Exemption (Mrs. Murphy Exemption)

An owner MAY discriminate if:
- Owner-occupied dwelling with **4 or fewer units**
- Owner lives in one unit
- No discriminatory advertising used
- No real estate agent involved

### Single-Family Home Exemption

Owner of single-family home MAY discriminate if:
- Owner owns **3 or fewer** single-family homes
- No discriminatory advertising
- No real estate agent used
- Owner has not sold more than one home in 24 months

### Religious Organizations

Religious organizations MAY give preference to members if:
- Property is owned by the organization
- Property not operated commercially
- Membership not restricted by protected class

### Private Clubs

Private clubs MAY limit to members if:
- Lodging is incidental to membership
- Not operated commercially

### Senior Housing (HOPA)

Housing for Older Persons Act allows age restrictions if:
- 100% of residents 62+ years old, OR
- 80% of units have at least one person 55+ AND
  - Published policies showing intent
  - Compliance with HUD verification rules

### IMPORTANT: No Exemptions Apply If:

1. **Discriminatory advertising** is used
2. **Real estate agent** is involved
3. Discrimination is based on **race** (1866 Act)

The 1866 Civil Rights Act has **NO EXEMPTIONS** for race discrimination.`,
      keyPoints: [
        'Mrs. Murphy: Owner-occupied, 4 or fewer units, no agent, no discriminatory ads',
        'Single-family: 3 or fewer homes, no agent, no discriminatory ads',
        'Senior housing: 62+ (100%) or 55+ (80% with policies)',
        'Using agent or discriminatory advertising = NO exemption',
        '1866 Act (race) has NO exemptions ever'
      ],
      examTips: [
        '4 units for Mrs. Murphy, 3 homes for single-family exemption',
        'Using a real estate agent ELIMINATES exemption',
        'Discriminatory advertising ELIMINATES exemption',
        'Race discrimination NEVER exempt (1866 Act)'
      ]
    },
    {
      id: '7.4',
      title: 'Disability and Reasonable Accommodations',
      content: `## Fair Housing and Disability

Special protections exist for persons with disabilities.

### Reasonable Modifications

A landlord MUST allow tenants with disabilities to make **reasonable modifications** at the **tenant's expense**:
- Widening doorways
- Installing grab bars
- Building ramps
- Lowering countertops

**Landlord may require**:
- Reasonable restoration upon move-out (for interior modifications)
- Cannot require restoration for modifications that don't affect next tenant

### Reasonable Accommodations

A landlord MUST make **reasonable accommodations** in rules and policies:
- Allowing service/assistance animals (even in "no pet" buildings)
- Reserved parking for disabled tenant
- Allowing live-in aide

**Cannot charge**:
- Extra pet deposit for service animals
- Extra fees for accommodations

### New Construction Requirements

Buildings with **4+ units** built after March 13, 1991 must have:
- Accessible common areas
- Doors wide enough for wheelchairs
- Accessible routes throughout
- Reinforced walls for grab bars
- Accessible kitchens and bathrooms

### Service Animals vs. Pets

**Service animals** are NOT pets:
- No pet deposit can be required
- No breed/size restrictions
- Landlord can ask only:
  - Is this a service animal for disability?
  - What task does it perform?
- Cannot require documentation of disability`,
      keyPoints: [
        'Reasonable modifications = at tenant\'s expense',
        'Reasonable accommodations = in rules/policies, no extra charge',
        'Service animals must be allowed, no pet deposit',
        'New construction (4+ units, post-1991) must be accessible',
        'Can ask what task service animal performs'
      ],
      examTips: [
        'Modification = physical changes (tenant pays)',
        'Accommodation = rule changes (no charge)',
        'Cannot charge pet deposit for service animals',
        'Post-March 1991 buildings with 4+ units must be accessible'
      ]
    },
    {
      id: '7.5',
      title: 'Americans with Disabilities Act (ADA)',
      content: `## ADA Requirements for Real Estate

The ADA applies to **commercial** properties and public accommodations, not residential.

### ADA Titles

**Title I**: Employment discrimination

**Title II**: Public services (government)

**Title III**: Public accommodations and commercial facilities
- Most relevant to real estate

### Public Accommodations

Places open to the public must be accessible:
- Restaurants
- Hotels
- Retail stores
- Offices open to public
- Medical offices
- Shopping centers

### Requirements

**New Construction**: Must be fully accessible

**Existing Buildings**: Must remove barriers if "readily achievable"
- Low cost, easily accomplished
- Examples: Ramps, accessible parking, grab bars

**Alterations**: When renovating, must make accessible "to the maximum extent feasible"

### Readily Achievable Standard

Depends on:
- Cost of removal
- Financial resources of owner
- Impact on operations
- Nature of business

### Not Covered by ADA

- **Private residences** (covered by Fair Housing Act instead)
- **Private clubs**
- **Religious organizations**

### Real Estate Application

Real estate offices and model homes open to public must comply with ADA accessibility requirements.`,
      keyPoints: [
        'ADA applies to commercial/public accommodations, not residential',
        'Title III covers public accommodations',
        'New construction must be fully accessible',
        'Existing buildings: remove barriers if readily achievable',
        'Real estate offices must be ADA accessible'
      ],
      examTips: [
        'ADA = commercial; Fair Housing = residential',
        '"Readily achievable" = low cost, easily done',
        'Real estate offices ARE subject to ADA',
        'Private homes are NOT covered by ADA'
      ]
    },
    {
      id: '7.6',
      title: 'RESPA - Real Estate Settlement Procedures Act',
      content: `## RESPA Overview (12 USC 2601)

RESPA regulates settlement (closing) procedures for federally related mortgage loans.

### Purpose

- Provide borrowers with information about settlement costs
- Eliminate kickbacks and referral fees
- Reduce unnecessary settlement costs

### Covered Transactions

RESPA applies to **federally related mortgage loans**:
- Loans from federally regulated lenders
- Loans insured by FHA or guaranteed by VA
- Loans intended to be sold to Fannie Mae or Freddie Mac

### Required Disclosures

**Loan Estimate**: Must be provided within **3 business days** of loan application
- Replaces old Good Faith Estimate
- Shows estimated settlement costs

**Closing Disclosure**: Must be provided **3 business days before closing**
- Replaces old HUD-1
- Shows actual costs

### Prohibited Practices

**1. Kickbacks and Referral Fees**
- Cannot pay or receive fees for referrals
- Exception: Legitimate payments for services actually performed

**2. Fee Splitting**
- Cannot split fees except for services actually performed
- Unearned fees are prohibited

**3. Required Use of Specific Provider**
- Generally cannot require borrower to use specific title company
- Exception: May require attorney of lender's choice for lender's legal work

### Affiliated Business Arrangements (AfBA)

A referral to an affiliated business is allowed if:
- Written disclosure of affiliation provided
- Estimated charges disclosed
- Borrower free to use other providers
- No required use as condition of loan`,
      keyPoints: [
        'RESPA applies to federally related mortgage loans',
        'Loan Estimate within 3 business days of application',
        'Closing Disclosure 3 business days before closing',
        'Kickbacks and unearned referral fees prohibited',
        'Affiliated business arrangements require disclosure'
      ],
      examTips: [
        '3 days for Loan Estimate, 3 days before closing for CD',
        'Kickbacks = illegal, even small gifts',
        'Unearned fees = fees for no actual work = prohibited',
        'AfBA requires disclosure and borrower choice'
      ]
    },
    {
      id: '7.7',
      title: 'Truth in Lending Act (TILA)',
      content: `## Truth in Lending Act (Regulation Z)

TILA requires disclosure of credit terms to consumers.

### Purpose

- Help consumers compare credit offers
- Protect against inaccurate credit practices
- Ensure meaningful disclosure of credit terms

### Who Must Comply

- Creditors who offer or extend credit
- Applies to consumer credit, not commercial

### Key Disclosures

**Annual Percentage Rate (APR)**
- True cost of credit expressed as yearly rate
- Includes interest plus certain fees
- Allows comparison between lenders

**Finance Charge**
- Total dollar amount of credit cost
- Interest plus other charges

**Amount Financed**
- Principal amount of credit

**Total of Payments**
- Sum of all payments over loan term

### Advertising Requirements

If an ad includes **any** specific credit term (trigger term), it must include **all** material terms:

**Trigger Terms** (if mentioned, must disclose all):
- Down payment
- Monthly payment amount
- Number of payments
- Finance charge

**Required Disclosures** (if trigger term used):
- Down payment
- Terms of repayment
- APR (using that term)

### Right of Rescission

For certain home loans (refinances, HELOCs - NOT purchase money mortgages):
- Borrower has **3 business days** to cancel
- Must receive notice of right to rescind
- Applies to loans secured by principal residence`,
      keyPoints: [
        'TILA requires disclosure of APR, finance charge, amount financed',
        'APR = true yearly cost of credit',
        'Trigger terms in ads require full disclosure',
        '3-day right of rescission for refinances (not purchases)',
        'Regulation Z implements TILA'
      ],
      examTips: [
        'APR is the key disclosure - allows comparison shopping',
        'Trigger term in ad = must disclose all terms',
        'Right of rescission = 3 business days, refinances only',
        'Purchase money mortgages have NO rescission right'
      ]
    },
    {
      id: '7.8',
      title: 'Florida Landlord-Tenant Law',
      content: `## Florida Residential Landlord-Tenant Act (F.S. Chapter 83)

Florida has specific laws governing residential tenancies.

### Security Deposits

**Holding Options** (landlord must choose one):
1. Separate non-interest-bearing account
2. Separate interest-bearing account (pay interest to tenant annually)
3. Post surety bond equal to deposit amount

**Notice Requirement**: Within **30 days** of receiving deposit, landlord must notify tenant in writing of:
- Where deposit is held
- Whether interest-bearing
- Rate of interest (if applicable)

### Return of Deposit

**If no claim against deposit**: Return within **15 days** after tenant vacates

**If landlord intends to claim part/all**: 
- Send written notice within **30 days** by certified mail
- Itemize reasons for claim
- Tenant has **15 days** to object
- If tenant doesn't object, landlord may deduct

### Landlord Obligations

Must provide:
- Working plumbing
- Hot water
- Heat (if heating provided)
- Running water
- Locks and keys
- Clean premises at move-in

### Tenant Obligations

Must:
- Pay rent on time
- Keep premises clean
- Comply with building codes
- Not disturb neighbors
- Not destroy property

### Eviction Process

**Non-Payment of Rent**:
- 3-day notice to pay or vacate
- If not paid, file eviction lawsuit

**Lease Violation**:
- 7-day notice to cure (if curable)
- If not cured, file eviction

**Self-help evictions are ILLEGAL** (changing locks, removing doors, shutting off utilities)`,
      keyPoints: [
        'Notify tenant of deposit location within 30 days',
        'Return deposit within 15 days if no claim',
        'Intent to claim: written notice within 30 days',
        '3-day notice for non-payment of rent',
        'Self-help evictions are illegal'
      ],
      examTips: [
        '30 days to notify where deposit held',
        '15 days to return if no claim, 30 days to send claim notice',
        '3-day notice for rent, 7-day for other violations',
        'Landlord cannot do self-help eviction'
      ]
    },
    {
      id: '7.9',
      title: 'Environmental Laws and Disclosures',
      content: `## Environmental Issues in Real Estate

Several environmental concerns require disclosure or special handling.

### Lead-Based Paint (Pre-1978 Properties)

**Residential Lead-Based Paint Hazard Reduction Act** requires:

For sales and leases of pre-1978 residential property:
- Seller/landlord must **disclose known lead hazards**
- Provide EPA pamphlet "Protect Your Family from Lead"
- Include specific warning language in contract
- Buyer has **10 days** to inspect (can be waived but not eliminated)

### Radon

**Florida Radon Disclosure**:
- Florida law requires radon disclosure in all real estate transactions
- Specific disclosure language must be included in contracts
- Radon is a naturally occurring radioactive gas

### Asbestos

- Common in older buildings (insulation, tiles, pipes)
- Not banned outright but regulated
- Disclosure recommended
- Professional removal required if disturbed

### Mold

- Not specifically regulated in Florida
- Should be disclosed if known
- Can be material defect affecting value

### Underground Storage Tanks (USTs)

- EPA regulates underground fuel tanks
- Must be reported if leaking
- Removal or remediation may be required
- Affects commercial properties primarily

### CERCLA (Superfund)

**Comprehensive Environmental Response, Compensation, and Liability Act**:
- Establishes liability for hazardous waste cleanup
- "Innocent landowner" defense requires environmental assessment
- Can affect property value and saleability

### Environmental Site Assessment

Phase I ESA:
- Records review
- Site inspection
- No sampling
- Standard for commercial transactions`,
      keyPoints: [
        'Pre-1978 homes: disclose lead paint, provide EPA pamphlet',
        'Buyer has 10 days to inspect for lead',
        'Florida requires radon disclosure in all transactions',
        'Asbestos must be professionally removed if disturbed',
        'CERCLA establishes Superfund liability'
      ],
      examTips: [
        '1978 is the key year for lead paint',
        '10 days for lead inspection (can be waived, not eliminated)',
        'Radon disclosure required in Florida',
        'Phase I ESA = records and inspection, no sampling'
      ]
    }
  ],

  flashcards: [
    // PROTECTED CLASSES
    {
      front: 'What are the 7 federal protected classes under the Fair Housing Act?',
      back: 'Race, Color, Religion, National Origin, Sex, Familial Status, Handicap (Disability)\n\nMemory: "RC Cola RN\'S FH"',
      difficulty: 'easy'
    },
    {
      front: 'What additional protected class does FLORIDA add?',
      back: 'MARITAL STATUS - Florida has 8 total protected classes (7 federal + marital status)',
      difficulty: 'easy'
    },
    {
      front: 'What is "familial status"?',
      back: 'Families with children under 18, pregnant women, anyone obtaining custody of children. Protects against "no kids" policies.',
      difficulty: 'medium'
    },
    {
      front: 'What housing is EXEMPT from familial status protection?',
      back: 'HOUSING FOR OLDER PERSONS:\n• 62+ (all residents)\n• 55+ (80% of units have 55+ resident)',
      difficulty: 'hard'
    },
    
    // DISCRIMINATORY PRACTICES
    {
      front: 'What is STEERING?',
      back: 'Directing buyers/renters TO or AWAY FROM areas based on protected class - illegal even with good intentions',
      difficulty: 'medium'
    },
    {
      front: 'What is BLOCKBUSTING?',
      back: 'Inducing PANIC SALES by claiming protected class is moving into neighborhood and property values will decline',
      difficulty: 'medium'
    },
    {
      front: 'What is REDLINING?',
      back: 'Refusing to provide services (loans, insurance) to areas based on racial/ethnic composition of neighborhood',
      difficulty: 'medium'
    },
    {
      front: 'Can a licensee answer questions about neighborhood demographics?',
      back: 'Should NOT - direct buyers to census data or other public sources. Answering could be considered steering.',
      difficulty: 'medium'
    },
    
    // EXEMPTIONS
    {
      front: 'What is the "Mrs. Murphy" exemption?',
      back: 'Owner-occupied dwelling with 4 OR FEWER units, NO agent used, NO discriminatory advertising. Does NOT apply to RACE.',
      difficulty: 'hard'
    },
    {
      front: 'Does the Mrs. Murphy exemption apply to race discrimination?',
      back: 'NO - RACE has NO exemptions (Civil Rights Act of 1866). Mrs. Murphy only applies to other protected classes.',
      difficulty: 'hard'
    },
    {
      front: 'What is Jones v. Mayer (1968)?',
      back: 'Supreme Court case that upheld Civil Rights Act of 1866 - RACE discrimination has ZERO exemptions',
      difficulty: 'hard'
    },
    {
      front: 'What are the private club and religious organization exemptions?',
      back: 'Private clubs and religious orgs can limit membership/housing to members, BUT cannot discriminate based on race.',
      difficulty: 'medium'
    },
    
    // LEAD-BASED PAINT
    {
      front: 'What year triggers lead-based paint disclosure requirements?',
      back: '1978 - Properties built BEFORE 1978 require disclosure and EPA pamphlet',
      difficulty: 'easy'
    },
    {
      front: 'How many days does a buyer have to inspect for lead-based paint?',
      back: '10 DAYS - Buyer can waive the inspection but period cannot be eliminated from contract',
      difficulty: 'medium'
    },
    {
      front: 'What must be provided with lead paint disclosure?',
      back: '• Disclosure form\n• EPA pamphlet "Protect Your Family From Lead"\n• 10-day inspection period',
      difficulty: 'medium'
    },
    
    // RESPA & TILA
    {
      front: 'Within how many business days must a Loan Estimate be provided?',
      back: '3 BUSINESS DAYS of loan application (under TILA/RESPA)',
      difficulty: 'medium'
    },
    {
      front: 'When must the Closing Disclosure be provided?',
      back: '3 BUSINESS DAYS BEFORE closing',
      difficulty: 'medium'
    },
    {
      front: 'What does RESPA prohibit?',
      back: 'KICKBACKS and unearned referral fees between settlement service providers',
      difficulty: 'medium'
    },
    {
      front: 'What is the right of rescission period under TILA?',
      back: '3 BUSINESS DAYS for REFINANCES and HELOCs only. Does NOT apply to purchase money mortgages.',
      difficulty: 'hard'
    },
    
    // FL LANDLORD-TENANT
    {
      front: 'How many days does a FL landlord have to notify tenant of deposit location?',
      back: '30 DAYS - Must notify in writing where deposit is held (bank name/address)',
      difficulty: 'medium'
    },
    {
      front: 'How many days to return security deposit if NO claim?',
      back: '15 DAYS after tenant vacates',
      difficulty: 'medium'
    },
    {
      front: 'How many days to send claim notice if landlord DOES have claim?',
      back: '30 DAYS by CERTIFIED mail - must itemize deductions',
      difficulty: 'medium'
    },
    {
      front: 'What notice is required for NON-PAYMENT of rent in Florida?',
      back: '3-DAY notice to pay rent or vacate',
      difficulty: 'easy'
    },
    {
      front: 'What notice is required for lease VIOLATIONS in Florida?',
      back: '7-DAY notice to cure violation or vacate',
      difficulty: 'medium'
    },
    
    // ADA
    {
      front: 'Does the ADA apply to residential or commercial properties?',
      back: 'COMMERCIAL properties and public accommodations. Residential covered by Fair Housing Act.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'Which of the following is NOT a federally protected class under the Fair Housing Act?',
      options: [
        'Religion',
        'Familial status',
        'Marital status',
        'National origin'
      ],
      correct: 2,
      explanation: 'Marital status is protected under Florida law but NOT under federal Fair Housing Act. The 7 federal classes are: Race, Color, Religion, National Origin, Sex, Familial Status, and Handicap.'
    },
    {
      question: 'An owner-occupied fourplex would be exempt from Fair Housing if:',
      options: [
        'The owner uses a real estate agent',
        'The owner places a discriminatory ad',
        'The owner sells without an agent and without discriminatory advertising',
        'Fair Housing has no exemptions'
      ],
      correct: 2,
      explanation: 'The Mrs. Murphy exemption applies to owner-occupied dwellings with 4 or fewer units, but ONLY if no agent is used and no discriminatory advertising is placed.'
    },
    {
      question: 'Steering is best defined as:',
      options: [
        'Inducing panic selling based on protected class entering area',
        'Directing people to or away from areas based on protected class',
        'Denying loans based on neighborhood demographics',
        'Charging different rents to different races'
      ],
      correct: 1,
      explanation: 'Steering is directing buyers or renters to or away from certain areas based on protected class. Blockbusting is panic selling, and redlining is denying services to areas.'
    },
    {
      question: 'A landlord receives a request for a service animal in a "no pets" building. The landlord should:',
      options: [
        'Refuse because pets are not allowed',
        'Allow the animal and charge a pet deposit',
        'Allow the animal without charging a pet deposit',
        'Require proof of disability'
      ],
      correct: 2,
      explanation: 'Service animals must be allowed as a reasonable accommodation. Landlords cannot charge pet deposits for service animals. They may only ask if it\'s a service animal and what task it performs.'
    },
    {
      question: 'Properties built before what year require lead-based paint disclosure?',
      options: [
        '1970',
        '1978',
        '1988',
        '1992'
      ],
      correct: 1,
      explanation: 'The Residential Lead-Based Paint Hazard Reduction Act requires disclosure for properties built before 1978, when lead paint was banned for residential use.'
    },
    {
      question: 'Under RESPA, the Loan Estimate must be provided within:',
      options: [
        '24 hours of application',
        '3 business days of application',
        '7 business days of application',
        '10 business days of application'
      ],
      correct: 1,
      explanation: 'RESPA requires the Loan Estimate to be provided within 3 business days of the loan application.'
    },
    {
      question: 'The Closing Disclosure must be provided:',
      options: [
        'At closing',
        '3 business days before closing',
        '7 business days before closing',
        '10 days before closing'
      ],
      correct: 1,
      explanation: 'The Closing Disclosure must be provided at least 3 business days before closing, giving the borrower time to review final costs.'
    },
    {
      question: 'Under TILA, a borrower has the right of rescission for:',
      options: [
        'All home purchase loans',
        'Refinances and HELOCs on principal residence',
        'Commercial loans only',
        'First-time homebuyer loans'
      ],
      correct: 1,
      explanation: 'The 3-day right of rescission applies to refinances and HELOCs on principal residences. It does NOT apply to purchase money mortgages.'
    },
    {
      question: 'A Florida landlord must notify the tenant of the security deposit location within:',
      options: [
        '15 days',
        '30 days',
        '45 days',
        '60 days'
      ],
      correct: 1,
      explanation: 'Florida law requires landlords to notify tenants in writing within 30 days of where the security deposit is being held.'
    },
    {
      question: 'If a Florida landlord has no claim against the security deposit, it must be returned within:',
      options: [
        '10 days',
        '15 days',
        '30 days',
        '45 days'
      ],
      correct: 1,
      explanation: 'If there\'s no claim against the deposit, the landlord must return it within 15 days after the tenant vacates.'
    },
    {
      question: 'For non-payment of rent in Florida, the landlord must provide:',
      options: [
        '3-day notice',
        '7-day notice',
        '15-day notice',
        '30-day notice'
      ],
      correct: 0,
      explanation: 'Florida requires a 3-day notice to pay or vacate for non-payment of rent. A 7-day notice is used for other curable lease violations.'
    },
    {
      question: 'The ADA (Americans with Disabilities Act) applies to:',
      options: [
        'All residential properties',
        'Only government buildings',
        'Commercial properties and public accommodations',
        'Properties with 5 or more units'
      ],
      correct: 2,
      explanation: 'The ADA applies to commercial properties and public accommodations. Residential properties are covered by the Fair Housing Act, not ADA.'
    },
    {
      question: 'Which law has NO exemptions for race discrimination?',
      options: [
        'Fair Housing Act of 1968',
        'Civil Rights Act of 1866',
        'Florida Fair Housing Act',
        'Americans with Disabilities Act'
      ],
      correct: 1,
      explanation: 'The Civil Rights Act of 1866 prohibits race discrimination with NO exemptions. The Fair Housing Act has limited exemptions (Mrs. Murphy, etc.) but these do NOT apply to race discrimination.'
    },
    {
      question: 'What does RESPA prohibit?',
      options: [
        'Adjustable rate mortgages',
        'Kickbacks and unearned referral fees',
        'Credit reporting',
        'Prepayment penalties'
      ],
      correct: 1,
      explanation: 'RESPA prohibits kickbacks and unearned referral fees in connection with federally related mortgage loans. The purpose is to reduce settlement costs.'
    },
    {
      question: 'Which buildings must meet accessibility requirements under Fair Housing?',
      options: [
        'All buildings regardless of age',
        'Buildings with 4+ units built after March 13, 1991',
        'Only government buildings',
        'Only commercial buildings'
      ],
      correct: 1,
      explanation: 'Buildings with 4 or more units that were designed and constructed for first occupancy after March 13, 1991 must meet Fair Housing accessibility requirements.'
    }
  ],

  caseStudies: [
    {
      id: 'ch7-case1',
      title: 'The Service Animal Request',
      scenario: 'Tenant Maria has anxiety and requests to keep an emotional support dog in her apartment. The building has a strict "no pets" policy. The landlord asks Maria for documentation of her disability and proof that the dog is trained. Maria provides a letter from her therapist.',
      question: 'Must the landlord allow the emotional support animal? What can the landlord ask?',
      answer: 'Yes, the landlord must allow the emotional support animal as a reasonable accommodation under Fair Housing. However, the landlord may only ask: (1) Is this an assistance animal required for a disability? (2) What disability-related need does the animal serve? The landlord CANNOT ask for proof of training, cannot require the animal be certified, cannot charge a pet deposit, and cannot ask for detailed medical records. The therapist\'s letter confirming disability-related need is sufficient.',
      examRelevance: 'Tests understanding of reasonable accommodations for disabilities, what landlords can and cannot ask, and the distinction between service animals and pets.'
    },
    {
      id: 'ch7-case2',
      title: 'The RESPA Violation',
      scenario: 'Broker Bob refers all his buyers to ABC Title Company. ABC Title gives Bob $200 for each referral. Bob also receives a monthly "marketing fee" of $500 from ABC Title. Bob does not perform any services for ABC Title beyond making referrals.',
      question: 'Has Bob violated RESPA? What are the consequences?',
      answer: 'Yes, Bob has violated RESPA. The $200 per referral is an illegal kickback - payment solely for referring business. The $500 monthly "marketing fee" is also illegal because Bob performs no actual services in exchange. RESPA prohibits paying or receiving fees for referrals of settlement services. Consequences include: federal fines up to $10,000, imprisonment up to 1 year, and liability for three times the amount of the illegal fees. Bob may also face state discipline from FREC.',
      examRelevance: 'Tests understanding of RESPA prohibitions on kickbacks and unearned fees. Key point: fees must be for actual services performed, not just referrals.'
    }
  ],

  summary: `Chapter 7 covers federal and state laws affecting real estate.

**Fair Housing Act (7 Federal Protected Classes)**:
Race, Color, Religion, National Origin, Sex, Familial Status, Handicap
- Florida adds: Marital Status
- Prohibited: Steering, Blockbusting, Redlining
- Exemptions: Mrs. Murphy (4 units, owner-occupied), Single-family (3 homes) - but NOT if agent used or discriminatory ads
- 1866 Act (race): NO exemptions

**Disability**:
- Reasonable modifications: tenant's expense
- Reasonable accommodations: no extra charge
- Service animals: must allow, no pet deposit
- New construction (4+ units, post-March 1991): must be accessible
- ADA: commercial only, not residential

**RESPA**:
- Loan Estimate: 3 business days of application
- Closing Disclosure: 3 business days before closing
- Prohibits: kickbacks, unearned referral fees

**TILA (Reg Z)**:
- APR disclosure required
- Trigger terms in ads require full disclosure
- 3-day rescission for refinances (NOT purchases)

**Florida Landlord-Tenant**:
- 30 days: notify deposit location
- 15 days: return deposit if no claim
- 3-day notice: non-payment of rent
- 7-day notice: other curable violations

**Environmental**:
- Lead paint: pre-1978, 10 days to inspect
- Radon: disclosure required in Florida`
};

export default CHAPTER_7;
