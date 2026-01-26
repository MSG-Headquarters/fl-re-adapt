/**
 * Chapter 17: Leasing Real Property
 * 
 * Covers 3% of the Florida Real Estate Exam
 * Focus: Landlord-tenant law, lease types, and rental agreements
 */

export const CHAPTER_17 = {
  id: 17,
  title: 'Leasing Real Property',
  subtitle: 'Landlord-Tenant Law and Lease Types',
  examPercentage: 3,
  requiredTimeMinutes: 150, // 2.5 hours minimum
  color: '#06B6D4', // Cyan
  icon: 'Key',
  
  objectives: [
    'Understand the different types of leasehold estates',
    'Identify the essential elements of a valid lease',
    'Explain Florida landlord-tenant law requirements',
    'Describe the various types of lease payment structures',
    'Understand security deposit rules in Florida',
    'Explain the eviction process in Florida',
    'Identify the rights and duties of landlords and tenants'
  ],

  statutes: [
    { code: 'F.S. 83', title: 'Florida Residential Landlord-Tenant Act', summary: 'Governs residential rentals' },
    { code: 'F.S. 83.49', title: 'Security Deposits', summary: 'Rules for holding deposits' },
    { code: 'F.S. 83.56', title: 'Termination of Rental Agreement', summary: 'Notice requirements' },
    { code: 'F.S. 83.595', title: 'Choice of Remedies', summary: 'Landlord options for breach' }
  ],

  sections: [
    {
      id: '17.1',
      title: 'Leasehold Estates',
      content: `## Types of Leasehold Estates

A leasehold estate gives the tenant the right to possess property for a period of time.

### Estate for Years (Tenancy for Years)

**Fixed term with definite beginning and end**:
- Specific start and end dates
- Could be days, months, or years
- Terminates automatically at end date
- **No notice required** to terminate

**Example**: Lease from January 1, 2024 to December 31, 2024

**Key Feature**: Despite the name, doesn't have to be for "years"

### Periodic Estate (Tenancy from Period to Period)

**Automatically renews for same period**:
- Week-to-week, month-to-month, year-to-year
- Continues until proper notice given
- Notice required to terminate

**Notice Requirements in Florida**:
- Week-to-week: 7 days notice
- Month-to-month: 15 days notice
- Year-to-year: 60 days notice

### Estate at Will (Tenancy at Will)

**No fixed term, either party can terminate**:
- Can be terminated by either party anytime
- With reasonable notice
- Often informal arrangement
- Created when no specific term agreed

### Estate at Sufferance (Tenancy at Sufferance)

**Holdover tenant**:
- Tenant stays after lease expires
- Without landlord's permission
- Lowest form of tenancy
- Not a trespasser (had legal entry)
- Landlord can evict or create new tenancy

### Comparison Chart

| Type | Term | Notice to End |
|------|------|---------------|
| For Years | Fixed dates | None (automatic) |
| Periodic | Renewing periods | Required |
| At Will | Indefinite | Reasonable |
| At Sufferance | None (holdover) | N/A (evict) |`,
      keyPoints: [
        'Estate for years = fixed term, no notice needed',
        'Periodic = renews automatically, notice required',
        'At will = either party can terminate anytime',
        'At sufferance = holdover without permission',
        'Month-to-month requires 15 days notice in FL'
      ],
      examTips: [
        'Estate for years: NO notice to terminate',
        'Month-to-month = 15 days notice in Florida',
        'Holdover tenant = estate at sufferance',
        '"For years" doesn\'t mean it must be years long'
      ]
    },
    {
      id: '17.2',
      title: 'Lease Requirements',
      content: `## Essential Elements of a Lease

A lease is both a contract and a conveyance of an interest in real property.

### Essential Elements

**1. Competent Parties**
- Landlord (lessor) must have authority
- Tenant (lessee) must have capacity
- Same requirements as contracts

**2. Legal Purpose**
- Property used for legal purpose
- Cannot lease for illegal activity

**3. Offer and Acceptance**
- Agreement on terms
- Mutual assent

**4. Consideration**
- Usually rent
- Could be services

**5. Legal Description**
- Identify the property
- Address usually sufficient for leases

### Statute of Frauds

**Must be in writing if**:
- Lease term exceeds ONE YEAR
- Oral leases for 1 year or less are enforceable

### Lease vs. License

**Lease**:
- Transfers possessory interest
- Exclusive right to possess
- Creates landlord-tenant relationship
- Protected by law

**License**:
- Permission to use property
- No possessory interest
- Can be revoked
- Example: Hotel room, parking space

### Common Lease Terms

**Parties**: Landlord and tenant names
**Property**: Description of premises
**Term**: Beginning and ending dates
**Rent**: Amount, due date, payment method
**Security deposit**: Amount and conditions
**Use restrictions**: Permitted uses
**Maintenance**: Who handles repairs
**Utilities**: Who pays for what
**Rules**: Property rules and regulations`,
      keyPoints: [
        'Lease >1 year must be in writing (Statute of Frauds)',
        'Lease transfers possessory interest; license does not',
        'Essential elements same as contracts',
        'Landlord = lessor; Tenant = lessee',
        'Address usually sufficient property description'
      ],
      examTips: [
        'Lease over 1 year = must be written',
        'Lease = possession; License = permission only',
        'Know lessor (landlord) vs. lessee (tenant)',
        'Oral lease for 1 year or less is valid'
      ]
    },
    {
      id: '17.3',
      title: 'Types of Leases by Payment',
      content: `## Lease Payment Structures

Different lease types determine how rent is calculated.

### Gross Lease (Full Service Lease)

**Tenant pays fixed rent; landlord pays expenses**:
- Landlord pays taxes, insurance, maintenance
- Tenant pays one flat amount
- Common in residential
- Common in office buildings

**Advantage for tenant**: Predictable costs
**Risk for landlord**: Rising expenses

### Net Lease

**Tenant pays rent PLUS some expenses**:

**Single Net (N)**:
- Tenant pays rent + property taxes

**Double Net (NN)**:
- Tenant pays rent + taxes + insurance

**Triple Net (NNN)**:
- Tenant pays rent + taxes + insurance + maintenance
- Landlord receives "net" rent
- Common in commercial/retail

**Advantage for landlord**: Predictable income
**Risk for tenant**: Variable expenses

### Percentage Lease

**Base rent plus percentage of sales**:
- Common in retail
- Base rent (minimum) guaranteed
- Percentage of gross sales above breakpoint

**Example**:
- Base rent: $3,000/month
- Plus 5% of sales over $100,000
- If sales = $150,000: $3,000 + ($50,000 × 5%) = $5,500

### Ground Lease (Land Lease)

**Tenant leases land and builds improvements**:
- Very long term (50-99 years)
- Tenant owns building during lease
- Building reverts to landowner at end
- Common for commercial development

### Index Lease

**Rent adjusted by economic index**:
- Consumer Price Index (CPI)
- Protects landlord from inflation
- Automatic adjustments

### Graduated Lease (Step-Up Lease)

**Rent increases at set intervals**:
- Scheduled increases over term
- Example: Year 1: $1,000; Year 2: $1,100; Year 3: $1,200
- Common in long-term commercial leases`,
      keyPoints: [
        'Gross lease = tenant pays flat rent, landlord pays expenses',
        'Triple net (NNN) = tenant pays rent + taxes + insurance + maintenance',
        'Percentage lease = base rent + percent of sales',
        'Ground lease = tenant leases land, builds improvements',
        'Graduated lease = rent increases at set intervals'
      ],
      examTips: [
        'NNN = tenant pays everything (taxes, insurance, maintenance)',
        'Gross = landlord pays all expenses',
        'Percentage lease common in RETAIL',
        'Ground lease = very long term (50-99 years)'
      ]
    },
    {
      id: '17.4',
      title: 'Security Deposits in Florida',
      content: `## Florida Security Deposit Rules (F.S. 83.49)

Florida has specific requirements for handling security deposits.

### Deposit Limits

**No statutory limit** on amount landlord can charge
- Market typically dictates
- Usually 1-2 months rent

### Holding Requirements

**Three options for holding deposits**:

**1. Non-Interest-Bearing Account**
- In Florida banking institution
- No interest earned

**2. Interest-Bearing Account**
- Must pay tenant 75% of annualized interest
- OR 5% simple interest per year (landlord's choice)
- Paid annually and at termination

**3. Surety Bond**
- Post bond equal to deposit amount
- With surety company
- Pay tenant 5% interest per year

### Required Notice

**Within 30 days** of receiving deposit:
- Written notice to tenant
- Name and address of bank
- Whether interest-bearing or not
- How interest will be paid (if applicable)

**Failure to give notice**:
- Landlord forfeits right to claim against deposit
- Must return deposit in full

### Return of Deposit

**If NO claim against deposit**:
- Return within **15 days** after tenant vacates

**If making a claim**:
- **30 days** to send written notice of claim
- By certified mail to tenant's last known address
- Itemize claimed amounts
- Tenant has **15 days** to object

**If no objection in 15 days**:
- Landlord may deduct claimed amounts

### What Can Be Deducted?

- Unpaid rent
- Damage beyond normal wear and tear
- Early termination costs (if in lease)
- Cleaning (if beyond normal)

### Cannot Deduct For

- Normal wear and tear
- Pre-existing damage
- Landlord's negligence`,
      keyPoints: [
        '30 days to notify tenant where deposit is held',
        '15 days to return if NO claim',
        '30 days to send written claim notice',
        'Tenant has 15 days to object to claim',
        'No statutory limit on deposit amount'
      ],
      examTips: [
        'Memorize: 30 days notice, 15 days return, 30 days claim',
        'Must notify WHERE deposit is held',
        'Cannot deduct for normal wear and tear',
        'Failure to notify = forfeit right to claim'
      ]
    },
    {
      id: '17.5',
      title: 'Landlord Rights and Duties',
      content: `## Landlord Obligations

Florida law imposes specific duties on landlords.

### Duty to Deliver Possession

**Must give tenant possession on lease start date**:
- If prior tenant holds over, landlord must act
- May be liable if possession delayed

### Duty to Maintain Premises

**Residential landlords must**:
- Comply with building and housing codes
- Maintain roof, windows, doors, floors, stairs
- Maintain plumbing in reasonable working order
- Provide running water, hot water, heat (where supplied)
- Maintain all common areas
- Provide garbage receptacles and removal
- Provide functioning extermination services
- Provide locks and keys
- Maintain smoke detectors

### Implied Warranty of Habitability

**Property must be fit for living**:
- Basic services must work
- Structure must be sound
- Implied in every residential lease
- Cannot be waived

### Right to Receive Rent

- Collect rent when due
- Charge late fees (if in lease)
- Pursue legal remedies for non-payment

### Right of Entry

**Landlord may enter for**:
- Emergencies (no notice)
- Repairs (reasonable notice)
- Showing property (12 hours notice recommended)
- Inspection (reasonable notice)

**Cannot abuse right**:
- Must be at reasonable times
- Cannot harass tenant

### Right to Enforce Lease Terms

- Enforce rules and regulations
- Pursue eviction for violations
- Seek damages for breach`,
      keyPoints: [
        'Must provide habitable premises',
        'Maintain structure, plumbing, heat, hot water',
        'Cannot waive implied warranty of habitability',
        'Right to enter for emergencies without notice',
        '12 hours notice recommended for showing property'
      ],
      examTips: [
        'Implied warranty of habitability = cannot waive',
        'Emergency = no notice needed to enter',
        'Must maintain basic services',
        'Common areas = landlord responsibility'
      ]
    },
    {
      id: '17.6',
      title: 'Tenant Rights and Duties',
      content: `## Tenant Obligations

Tenants have specific duties under Florida law.

### Duty to Pay Rent

- Pay rent on time as agreed
- Failure allows landlord to pursue eviction
- Late fees apply if in lease

### Duty to Maintain Premises

**Tenant must**:
- Keep dwelling clean and sanitary
- Remove garbage
- Keep plumbing fixtures clean
- Use electrical and plumbing properly
- Not destroy or damage property
- Not disturb neighbors

### Duty to Allow Access

- Allow landlord reasonable access
- For repairs, emergencies, inspections
- With proper notice (except emergency)

### Duty to Comply with Lease

- Follow all lease terms
- Obey reasonable rules
- Use property only for permitted purposes

### Tenant Remedies

**If landlord fails to maintain**:

**1. Withhold Rent**
- Give written notice to landlord
- 7 days to fix the problem
- If not fixed, may withhold rent
- Must be material problem

**2. Repair and Deduct**
- Not specifically authorized in Florida
- Better to use other remedies

**3. Terminate Lease**
- If premises become uninhabitable
- Written notice required
- Landlord has 7 days to remedy

**4. Sue for Damages**
- Breach of lease
- Violation of statutory duties

### Quiet Enjoyment

**Tenant's right to**:
- Peaceful possession
- Use property without interference
- Not be disturbed by landlord
- Implied in every lease`,
      keyPoints: [
        'Must pay rent, maintain cleanliness, follow rules',
        'Allow landlord reasonable access',
        'Can withhold rent with 7-day written notice',
        'Quiet enjoyment = right to peaceful possession',
        'Tenant responsible for keeping unit clean'
      ],
      examTips: [
        '7-day notice before withholding rent',
        'Quiet enjoyment is implied in every lease',
        'Tenant must allow reasonable access',
        'Cannot damage or destroy property'
      ]
    },
    {
      id: '17.7',
      title: 'Eviction Process in Florida',
      content: `## Florida Eviction Procedures

Landlords must follow specific legal procedures to evict tenants.

### Notice Requirements

**Non-Payment of Rent**:
- **3-day notice** to pay or vacate
- Excludes weekends and holidays
- Must state amount owed

**Lease Violation (Curable)**:
- **7-day notice** to cure violation
- If not cured, can terminate
- Then another notice to vacate

**Lease Violation (Non-Curable)**:
- **7-day notice** to vacate
- No opportunity to cure
- Serious violations (criminal activity, damage)

**No Lease or Month-to-Month**:
- **15-day notice** to terminate
- For month-to-month tenancy

### Eviction Lawsuit

**If tenant doesn't comply with notice**:

1. **File complaint** in county court
2. **Serve summons** on tenant
3. **Tenant has 5 days** to respond (excluding weekends/holidays)
4. **Hearing** scheduled if contested
5. **Judgment** entered if landlord prevails
6. **Writ of possession** issued
7. **Sheriff** removes tenant if necessary

### Self-Help Eviction PROHIBITED

**Landlord CANNOT**:
- Change locks without court order
- Remove tenant's belongings
- Shut off utilities
- Remove doors or windows
- Harass tenant to leave

**Penalties**: Tenant can recover damages

### Tenant Defenses

**Valid defenses include**:
- Landlord failed to maintain premises
- Discrimination (Fair Housing)
- Retaliation (for exercising rights)
- Improper notice
- Payment was made

### Abandoned Property

**If tenant abandons personal property**:
- Landlord must notify tenant
- Give reasonable time to retrieve
- May dispose of after notice period
- Cannot simply throw away immediately`,
      keyPoints: [
        '3-day notice for non-payment of rent',
        '7-day notice for lease violations',
        '15-day notice for month-to-month termination',
        'Self-help eviction is PROHIBITED',
        'Tenant has 5 days to respond to eviction lawsuit'
      ],
      examTips: [
        'Memorize: 3 days (non-payment), 7 days (violation), 15 days (month-to-month)',
        'Self-help eviction = ILLEGAL',
        'Cannot shut off utilities or change locks',
        'Must go through court process'
      ]
    },
    {
      id: '17.8',
      title: 'Lease Assignment and Subletting',
      content: `## Transferring Lease Rights

Tenants may want to transfer their lease to another party.

### Assignment

**Transfer of entire lease interest**:
- Assignor transfers all rights to assignee
- Assignee deals directly with landlord
- Original tenant may remain liable (unless released)

**Landlord-Assignee Relationship**:
- Privity of estate exists
- Assignee responsible for rent
- Can enforce lease terms

**Original Tenant Liability**:
- Still liable unless novation
- Privity of contract remains
- Landlord can pursue either party

### Sublease (Subletting)

**Transfer of less than entire interest**:
- Sublessee pays rent to original tenant
- Original tenant pays landlord
- Original tenant remains fully responsible

**Relationships**:
- No privity between landlord and sublessee
- Landlord can only pursue original tenant
- Original tenant can pursue sublessee

### Key Differences

| Feature | Assignment | Sublease |
|---------|------------|----------|
| Interest transferred | Entire | Partial |
| Who pays landlord | Assignee | Original tenant |
| Original tenant liability | Usually remains | Always remains |
| Landlord-new party privity | Yes | No |

### Lease Restrictions

**Lease may prohibit or restrict**:
- Assignment without consent
- Subletting without consent
- Both without written permission

**If lease is silent**:
- Generally, assignment/subletting allowed
- Good practice to get landlord approval

### Novation

**Substitutes new tenant completely**:
- Releases original tenant
- Requires landlord agreement
- Creates new lease relationship
- Original tenant has no liability`,
      keyPoints: [
        'Assignment = entire interest; Sublease = partial',
        'Assignment: assignee pays landlord directly',
        'Sublease: original tenant pays landlord',
        'Original tenant usually remains liable',
        'Novation releases original tenant (requires landlord consent)'
      ],
      examTips: [
        'Assignment = entire lease transferred',
        'Sublease = tenant still responsible to landlord',
        'Novation = original tenant released',
        'No privity between landlord and sublessee'
      ]
    },
    {
      id: '17.9',
      title: 'Lease Termination',
      content: `## Ways Leases End

Leases can terminate in various ways.

### Expiration

**Estate for years**:
- Terminates automatically on end date
- No notice required
- Most straightforward termination

### Mutual Agreement

**Both parties agree to end**:
- Can terminate early by agreement
- Should be in writing
- May involve payment or concessions

### Breach

**By Tenant**:
- Non-payment of rent
- Violation of lease terms
- Landlord may terminate with notice

**By Landlord**:
- Failure to maintain premises
- Violation of tenant rights
- Tenant may terminate with notice

### Constructive Eviction

**Landlord's actions make property unusable**:
- Failure to provide essential services
- Interference with quiet enjoyment
- Tenant must vacate to claim
- Releases tenant from lease obligations

**Requirements**:
- Landlord act or failure to act
- Premises substantially unusable
- Tenant actually vacates

### Surrender

**Tenant gives up possession**:
- Before lease expires
- Landlord accepts surrender
- Mutual termination

**If landlord doesn't accept**:
- Tenant still liable for rent
- Landlord should mitigate damages

### Destruction of Premises

**If property destroyed**:
- Lease may terminate
- Depends on lease terms
- If not addressed, common law applies
- Tenant may be released

### Condemnation (Eminent Domain)

**Government takes property**:
- Lease terminates
- Tenant may be entitled to compensation
- For remaining lease value

### Death

**Generally doesn't terminate**:
- Lease rights pass to estate
- Estate responsible for obligations
- Unless lease says otherwise`,
      keyPoints: [
        'Expiration = automatic end, no notice needed',
        'Constructive eviction = tenant MUST vacate to claim',
        'Surrender = tenant gives up, landlord accepts',
        'Death generally doesn\'t terminate lease',
        'Breach allows termination with proper notice'
      ],
      examTips: [
        'Constructive eviction requires tenant to LEAVE',
        'Estate for years = no notice at end',
        'Death doesn\'t automatically end lease',
        'Surrender requires landlord acceptance'
      ]
    }
  ],

  flashcards: [
    // TYPES OF LEASEHOLD ESTATES
    {
      front: 'What type of lease has a DEFINITE beginning and end date?',
      back: 'ESTATE FOR YEARS - Terminates automatically, NO notice required. Can be any length, even less than 1 year.',
      difficulty: 'easy'
    },
    {
      front: 'What is a PERIODIC TENANCY?',
      back: 'Auto-renews each period (month-to-month, year-to-year) until proper NOTICE is given.',
      difficulty: 'easy'
    },
    {
      front: 'What is an ESTATE AT WILL?',
      back: 'No definite term, EITHER party can terminate. Created when possession is given without written lease.',
      difficulty: 'medium'
    },
    {
      front: 'What is an ESTATE AT SUFFERANCE?',
      back: 'HOLDOVER tenant - remains after lease expires WITHOUT landlord permission. Lowest estate.',
      difficulty: 'medium'
    },
    
    // NOTICE REQUIREMENTS
    {
      front: 'How much notice to terminate MONTH-TO-MONTH tenancy in Florida?',
      back: '15 DAYS notice',
      difficulty: 'easy'
    },
    {
      front: 'How much notice to terminate WEEK-TO-WEEK tenancy in Florida?',
      back: '7 DAYS notice',
      difficulty: 'medium'
    },
    {
      front: 'What notice for NON-PAYMENT of rent in Florida?',
      back: '3-DAY notice to pay rent or vacate',
      difficulty: 'easy'
    },
    {
      front: 'What notice for CURABLE lease violation in Florida?',
      back: '7-DAY notice to cure the violation',
      difficulty: 'easy'
    },
    
    // SECURITY DEPOSITS
    {
      front: 'How long to notify tenant where security deposit is held?',
      back: '30 DAYS from receipt of deposit (must disclose bank, address, account type)',
      difficulty: 'medium'
    },
    {
      front: 'How long to return security deposit if NO claim?',
      back: '15 DAYS after tenant vacates',
      difficulty: 'medium'
    },
    {
      front: 'How long to send CLAIM notice against deposit?',
      back: '30 DAYS after tenant vacates (must be CERTIFIED mail, itemize deductions)',
      difficulty: 'medium'
    },
    {
      front: 'How long does tenant have to object to claim?',
      back: '15 DAYS from receiving claim notice',
      difficulty: 'medium'
    },
    
    // LEASE TYPES
    {
      front: 'What is a TRIPLE NET (NNN) lease?',
      back: 'Tenant pays rent PLUS:\n• Property taxes\n• Insurance\n• Maintenance\n\nLandlord receives "net" rent.',
      difficulty: 'medium'
    },
    {
      front: 'What is a GROSS lease?',
      back: 'Tenant pays FLAT rent; LANDLORD pays all operating expenses.',
      difficulty: 'easy'
    },
    {
      front: 'What is a PERCENTAGE lease?',
      back: 'Base rent PLUS percentage of tenant\'s gross sales. Common in retail.',
      difficulty: 'medium'
    },
    {
      front: 'What is a GRADUATED (Step) lease?',
      back: 'Rent INCREASES at specified intervals. Common for long-term commercial.',
      difficulty: 'medium'
    },
    
    // ASSIGNMENT VS SUBLEASE
    {
      front: 'What is difference between ASSIGNMENT and SUBLEASE?',
      back: 'ASSIGNMENT: Transfers ENTIRE interest (new tenant deals directly with landlord)\nSUBLEASE: Transfers PARTIAL interest (original tenant still responsible)',
      difficulty: 'medium'
    },
    {
      front: 'After assignment, is original tenant still liable?',
      back: 'YES - unless landlord grants NOVATION (releases original tenant).',
      difficulty: 'hard'
    },
    
    // EVICTION
    {
      front: 'Can a FL landlord do SELF-HELP eviction?',
      back: 'NO - Prohibited. Cannot change locks, shut off utilities, or remove belongings. Must use COURT process.',
      difficulty: 'easy'
    },
    {
      front: 'What is CONSTRUCTIVE eviction?',
      back: 'Landlord\'s actions/failures make property substantially UNUSABLE. Tenant must VACATE to claim it.',
      difficulty: 'medium'
    },
    
    // STATUTE OF FRAUDS
    {
      front: 'Must a lease for 10 months be in writing?',
      back: 'NO - Only leases for MORE than 1 YEAR must be in writing (Statute of Frauds)',
      difficulty: 'medium'
    },
    {
      front: 'What is a novation in leasing?',
      back: 'Substituting NEW tenant for original, COMPLETELY RELEASING original tenant. Requires landlord consent.',
      difficulty: 'hard'
    },
    {
      front: 'What is the landlord\'s duty of HABITABILITY?',
      back: 'Must maintain property in safe, livable condition. Provide working plumbing, heat, etc. Required by law.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'A lease that automatically renews each month until notice is given is called:',
      options: [
        'Estate for years',
        'Periodic estate',
        'Estate at will',
        'Estate at sufferance'
      ],
      correct: 1,
      explanation: 'A periodic estate (tenancy from period to period) automatically renews for the same period until proper notice is given to terminate.'
    },
    {
      question: 'In Florida, how much notice is required to terminate a month-to-month tenancy?',
      options: [
        '7 days',
        '15 days',
        '30 days',
        '60 days'
      ],
      correct: 1,
      explanation: 'Florida requires 15 days notice to terminate a month-to-month tenancy.'
    },
    {
      question: 'A lease must be in writing if the term exceeds:',
      options: [
        '6 months',
        '1 year',
        '2 years',
        '3 years'
      ],
      correct: 1,
      explanation: 'Under the Statute of Frauds, a lease must be in writing if the term exceeds ONE YEAR. Oral leases for one year or less are enforceable.'
    },
    {
      question: 'A landlord must notify a tenant where the security deposit is being held within:',
      options: [
        '15 days',
        '30 days',
        '45 days',
        '60 days'
      ],
      correct: 1,
      explanation: 'Florida requires the landlord to provide written notice of where the security deposit is held within 30 days of receipt.'
    },
    {
      question: 'If a landlord has no claim against a security deposit, it must be returned within:',
      options: [
        '10 days',
        '15 days',
        '30 days',
        '60 days'
      ],
      correct: 1,
      explanation: 'If the landlord has NO claim against the security deposit, it must be returned within 15 days after the tenant vacates.'
    },
    {
      question: 'A 3-day notice in Florida is used for:',
      options: [
        'Terminating month-to-month tenancy',
        'Non-payment of rent',
        'Lease violations',
        'Notice to vacate at end of lease'
      ],
      correct: 1,
      explanation: 'A 3-day notice is used for non-payment of rent. The tenant has 3 days (excluding weekends and holidays) to pay or vacate.'
    },
    {
      question: 'A 7-day notice in Florida is typically used for:',
      options: [
        'Non-payment of rent',
        'Curable lease violations',
        'Terminating week-to-week tenancy',
        'End of lease term'
      ],
      correct: 1,
      explanation: 'A 7-day notice is used for curable lease violations. It gives the tenant 7 days to cure the violation or face termination.'
    },
    {
      question: 'In a Triple Net (NNN) lease, the tenant pays:',
      options: [
        'Flat rent only',
        'Rent plus property taxes only',
        'Rent plus taxes and insurance only',
        'Rent plus taxes, insurance, and maintenance'
      ],
      correct: 3,
      explanation: 'In a Triple Net (NNN) lease, the tenant pays rent PLUS property taxes, insurance, AND maintenance. The landlord receives "net" rent.'
    },
    {
      question: 'Self-help eviction in Florida is:',
      options: [
        'Legal with 24 hours notice',
        'Legal only for non-payment',
        'Prohibited by law',
        'Legal if in the lease'
      ],
      correct: 2,
      explanation: 'Self-help eviction is PROHIBITED in Florida. A landlord cannot change locks, shut off utilities, or remove belongings without a court order.'
    },
    {
      question: 'When a tenant assigns a lease:',
      options: [
        'The original tenant is released from liability',
        'The entire lease interest is transferred',
        'No landlord approval is needed',
        'A new lease is created'
      ],
      correct: 1,
      explanation: 'When a lease is assigned, the entire lease interest is transferred to the assignee. However, the original tenant usually remains liable unless released by novation.'
    },
    {
      question: 'A tenant who remains after the lease expires without permission has:',
      options: [
        'Estate for years',
        'Periodic estate',
        'Estate at will',
        'Estate at sufferance'
      ],
      correct: 3,
      explanation: 'A holdover tenant has an estate at sufferance - the lowest form of tenancy. The tenant is not a trespasser but has no right to remain.'
    },
    {
      question: 'Constructive eviction occurs when:',
      options: [
        'The landlord files for eviction',
        'The tenant is physically removed',
        'The landlord\'s actions make the property unusable and tenant vacates',
        'The lease expires'
      ],
      correct: 2,
      explanation: 'Constructive eviction occurs when the landlord\'s actions or failures make the property substantially unusable. The tenant MUST vacate to claim constructive eviction.'
    },
    {
      question: 'A percentage lease is most commonly used for:',
      options: [
        'Residential property',
        'Industrial property',
        'Retail property',
        'Agricultural property'
      ],
      correct: 2,
      explanation: 'Percentage leases, which include base rent plus a percentage of sales, are most commonly used for RETAIL property.'
    },
    {
      question: 'A ground lease typically runs for:',
      options: [
        '1-5 years',
        '5-10 years',
        '10-20 years',
        '50-99 years'
      ],
      correct: 3,
      explanation: 'Ground leases (land leases) typically run for very long terms, often 50-99 years, allowing the tenant to build and operate improvements.'
    },
    {
      question: 'The covenant of quiet enjoyment guarantees the tenant:',
      options: [
        'Complete silence in the building',
        'No rent increases',
        'Peaceful possession without landlord interference',
        'The right to sublet'
      ],
      correct: 2,
      explanation: 'The covenant of quiet enjoyment guarantees the tenant\'s right to peaceful possession and use of the property without interference from the landlord.'
    }
  ],

  caseStudies: [
    {
      id: 'ch17-case1',
      title: 'The Security Deposit Dispute',
      scenario: 'Tenant Tina rents an apartment and pays a $1,500 security deposit. The landlord never sends written notice of where the deposit is being held. After 11 months, Tina moves out on time and in good condition. The landlord claims $400 for cleaning and repainting.',
      question: 'Can the landlord deduct from the security deposit?',
      answer: 'NO - the landlord forfeited the right to claim against the deposit. Florida law requires landlords to notify tenants IN WRITING within 30 days of where the security deposit is held, whether it\'s interest-bearing, and if so, how interest will be paid. Because the landlord failed to provide this required notice, the landlord FORFEITS the right to make any claim against the deposit and must return it in full. Additionally, normal wear and tear (like reasonable repainting) cannot be deducted anyway. The landlord must return the full $1,500 to Tina.',
      examRelevance: 'Tests knowledge of Florida\'s 30-day notice requirement and the consequence of failing to comply - forfeiture of right to claim against deposit.'
    },
    {
      id: 'ch17-case2',
      title: 'The Holdover Tenant',
      scenario: 'Larry has a one-year lease that expires December 31. On January 1, Larry is still in the apartment and hasn\'t moved out. He sends rent for January, which the landlord accepts.',
      question: 'What is Larry\'s tenancy status, and what has the landlord created by accepting rent?',
      answer: 'On January 1, when the lease expired and Larry remained without a new agreement, he became a TENANT AT SUFFERANCE (holdover tenant). However, when the landlord ACCEPTED rent for January, the landlord converted Larry\'s status to a PERIODIC TENANCY (month-to-month). By accepting rent, the landlord implicitly agreed to continue the tenancy. Now to remove Larry, the landlord must provide 15 days notice (Florida\'s requirement for month-to-month). The landlord cannot simply evict Larry without proper notice since a new tenancy was created by accepting rent.',
      examRelevance: 'Tests understanding of estate at sufferance, how periodic tenancy can be created by accepting rent from a holdover tenant, and notice requirements.'
    }
  ],

  summary: `Chapter 17 covers leasing real property (3% of exam).

**Leasehold Estates**:
| Type | Term | Notice Required |
|------|------|-----------------|
| For Years | Fixed dates | None (automatic) |
| Periodic | Renewing | Required |
| At Will | Indefinite | Reasonable |
| At Sufferance | Holdover | N/A |

**Florida Notice Requirements**:
- Week-to-week: 7 days
- Month-to-month: 15 days
- Year-to-year: 60 days

**Security Deposit Timeline**:
- 30 days: Notify tenant where held
- 15 days: Return if no claim
- 30 days: Send written claim notice
- Tenant has 15 days to object

**Eviction Notices**:
- 3-day: Non-payment of rent
- 7-day: Lease violations
- 15-day: Month-to-month termination
- Self-help eviction is PROHIBITED

**Lease Types**:
- Gross: Tenant pays flat rent, landlord pays expenses
- Net (N, NN, NNN): Tenant pays rent + some/all expenses
- Percentage: Base rent + % of sales (retail)
- Ground: Long-term land lease (50-99 years)

**Assignment vs. Sublease**:
- Assignment: Entire interest transferred
- Sublease: Partial interest, original tenant responsible

**Lease Requirements**:
- Over 1 year = must be written
- Lease = possession; License = permission only
- Quiet enjoyment implied in every lease`
};

export default CHAPTER_17;
