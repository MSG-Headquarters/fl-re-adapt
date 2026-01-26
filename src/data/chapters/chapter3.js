/**
 * Chapter 3: FREC & DBPR Structure
 * 
 * Covers 2% of the Florida Real Estate Exam
 * Focus: Organization, powers, and duties of the Florida Real Estate Commission
 */

export const CHAPTER_3 = {
  id: 3,
  title: 'FREC & DBPR Structure',
  subtitle: 'Florida Real Estate Commission Organization',
  examPercentage: 2,
  requiredTimeMinutes: 180, // 3 hours minimum
  color: '#06B6D4', // Cyan
  icon: 'Building',
  
  objectives: [
    'Understand the structure and role of the Department of Business and Professional Regulation (DBPR)',
    'Identify the composition and membership of the Florida Real Estate Commission (FREC)',
    'Describe the powers and duties of FREC',
    'Explain the role of the Division of Real Estate (DRE)',
    'Understand the rulemaking authority of FREC',
    'Identify key fees and timelines set by FREC'
  ],

  statutes: [
    { code: '475.02', title: 'Florida Real Estate Commission', summary: 'Establishes FREC within DBPR' },
    { code: '475.021', title: 'Composition of Commission', summary: 'Defines the 7-member commission structure' },
    { code: '475.05', title: 'Powers and Duties', summary: 'Outlines FREC authority and responsibilities' },
    { code: '20.165', title: 'DBPR Organization', summary: 'Establishes DBPR and its divisions' },
    { code: '455', title: 'Business and Professional Regulation', summary: 'General provisions for all regulated professions' }
  ],

  sections: [
    {
      id: '3.1',
      title: 'Department of Business and Professional Regulation (DBPR)',
      content: `## Understanding DBPR

The **Department of Business and Professional Regulation (DBPR)** is a state agency that oversees and regulates various professions and businesses in Florida.

### DBPR's Role

DBPR is the **umbrella agency** that houses multiple regulatory boards and commissions, including:

- Florida Real Estate Commission (FREC)
- Florida Real Estate Appraisal Board (FREAB)
- Construction Industry Licensing Board
- Board of Accountancy
- And many others

### Key Functions of DBPR

**Administrative Support**: Provides staff, resources, and administrative services to all boards under its authority

**Licensing Services**: Processes applications, issues licenses, and maintains licensee records

**Enforcement**: Investigates complaints and enforces regulations

**Consumer Protection**: Protects the public from unlicensed and unethical practitioners

### DBPR Secretary

- Appointed by the **Governor** and confirmed by the **Senate**
- Oversees all operations of DBPR
- Serves at the pleasure of the Governor

### Division of Real Estate (DRE)

The **Division of Real Estate** is the specific division within DBPR that handles:
- Real estate licensing
- Real estate education provider approval
- Administrative support for FREC
- Processing of applications and renewals`,
      keyPoints: [
        'DBPR is the umbrella agency housing FREC',
        'DBPR provides administrative support to all boards',
        'DBPR Secretary is appointed by the Governor',
        'Division of Real Estate (DRE) handles day-to-day licensing',
        'DBPR handles licensing, enforcement, and consumer protection'
      ],
      examTips: [
        'FREC is WITHIN DBPR, not separate from it',
        'DBPR Secretary is appointed by Governor, confirmed by Senate',
        'Know the difference between DBPR, DRE, and FREC',
        'DRE is the division that processes your license application'
      ]
    },
    {
      id: '3.2',
      title: 'Florida Real Estate Commission (FREC)',
      content: `## FREC Composition (F.S. 475.02, 475.021)

The **Florida Real Estate Commission (FREC)** is created within DBPR to regulate real estate licensees in Florida.

### Commission Membership

FREC consists of **7 members** appointed by the **Governor** and confirmed by the **Senate**:

**4 Licensed Members**:
- Must be licensed brokers
- Must have held an active license for at least **5 years** preceding appointment

**2 Consumer Members**:
- Must NOT be licensed or have any connection to real estate
- Represent the public interest

**1 Member**: Either a licensed broker OR a consumer member (at Governor's discretion)

### Term of Office

- Members serve **4-year terms**
- Terms are staggered (not all expire at once)
- Members may be **reappointed**
- Maximum of **3 consecutive terms** (12 years total)

### Meetings

- FREC must meet at least **once each month**
- Meetings are open to the public (Sunshine Law)
- **4 members** constitute a quorum (minimum needed to conduct business)

### Chair and Vice Chair

- FREC elects a **Chair** and **Vice Chair** annually
- Chair presides over meetings
- Vice Chair acts in Chair's absence`,
      keyPoints: [
        'FREC has 7 members appointed by Governor, confirmed by Senate',
        '4 must be licensed brokers with 5+ years experience',
        '2 must be consumer (non-licensee) members',
        'Members serve 4-year terms, max 3 consecutive terms',
        '4 members = quorum; must meet at least monthly'
      ],
      examTips: [
        'Remember: 7 members total (4 brokers + 2 consumers + 1 either)',
        'Broker members need 5 years active license experience',
        '4-year terms, maximum 3 terms (12 years)',
        'Quorum is 4 members (majority of 7)'
      ]
    },
    {
      id: '3.3',
      title: 'Powers and Duties of FREC',
      content: `## FREC Authority (F.S. 475.05)

FREC has broad authority to regulate the real estate profession in Florida.

### Rulemaking Authority

FREC can adopt **rules** (found in Florida Administrative Code Chapter 61J2) that:
- Implement Florida Statutes Chapter 475
- Set standards for licensee conduct
- Establish educational requirements
- Define procedures for discipline

Rules have the **force of law** once properly adopted.

### Licensing Authority

FREC has the power to:
- **Grant** licenses to qualified applicants
- **Deny** licenses to unqualified applicants
- **Renew** or refuse to renew licenses
- Set **examination** standards and passing scores
- Approve **pre-license** and **continuing education** courses and providers

### Disciplinary Authority

FREC can impose discipline on licensees, including:
- **Reprimand** (formal warning)
- **Fine** (up to $5,000 per violation)
- **Probation**
- **Suspension** (temporary removal of license)
- **Revocation** (permanent removal of license)
- **Denial** of license application

### Other Powers

- Issue **declaratory statements** (interpretations of law)
- Issue **cease and desist orders**
- Recover costs of investigation and prosecution
- Require **restitution** to injured parties
- Subpoena witnesses and documents`,
      keyPoints: [
        'FREC adopts rules in Florida Administrative Code 61J2',
        'Rules have the force of law',
        'FREC can fine up to $5,000 per violation',
        'FREC can suspend, revoke, or deny licenses',
        'FREC approves education courses and providers'
      ],
      examTips: [
        'Maximum fine is $5,000 per COUNT/VIOLATION',
        'Rules are in Chapter 61J2 FAC, laws in Chapter 475 FS',
        'Know the difference between suspension and revocation',
        'FREC sets passing score (75%) for state exam'
      ]
    },
    {
      id: '3.4',
      title: 'Division of Real Estate (DRE)',
      content: `## The Division of Real Estate

The **Division of Real Estate (DRE)** is the administrative arm that supports FREC and handles day-to-day operations.

### DRE Functions

**Application Processing**:
- Receives and processes license applications
- Conducts background checks
- Issues licenses upon approval

**Education Provider Oversight**:
- Approves real estate schools
- Approves instructors
- Monitors course content and delivery

**Record Keeping**:
- Maintains licensee records
- Tracks continuing education compliance
- Processes renewals

**Complaint Processing**:
- Receives complaints against licensees
- Conducts initial review
- Refers cases for investigation

### DRE Director

- Appointed by DBPR Secretary
- Manages daily operations of the Division
- Reports to DBPR, works with FREC

### Relationship to FREC

| FREC | DRE |
|------|-----|
| Policy-making body | Administrative/operational |
| Sets rules | Implements rules |
| Disciplines licensees | Processes applications |
| 7 appointed members | Professional staff |
| Meets monthly | Works daily |

FREC makes the decisions; DRE carries them out.`,
      keyPoints: [
        'DRE is the administrative arm supporting FREC',
        'DRE processes applications and maintains records',
        'DRE Director is appointed by DBPR Secretary',
        'FREC makes policy; DRE implements it',
        'DRE handles day-to-day licensing operations'
      ],
      examTips: [
        'Your license application goes to DRE, not FREC directly',
        'DRE staff are employees; FREC members are appointed',
        'Complaints are filed with DRE, discipline decided by FREC',
        'Know the difference between FREC (policy) and DRE (operations)'
      ]
    },
    {
      id: '3.5',
      title: 'Recovery Fund',
      content: `## Real Estate Recovery Fund (F.S. 475.482-475.486)

The **Real Estate Recovery Fund** provides compensation to people who suffer financial harm due to acts of licensed real estate professionals.

### Purpose

To compensate victims who:
- Cannot collect a civil judgment against a licensee
- Were harmed by acts that violated Chapter 475

### Funding

The fund is maintained through:
- **License fees** - portion of each license fee goes to the fund
- **Interest** earned on the fund balance
- **Recoveries** from licensees who caused claims

### Requirements to Make a Claim

A claimant must:
1. Obtain a **final civil court judgment** against the licensee
2. Attempt to collect the judgment and be unable to do so
3. File a claim with FREC within **2 years** of the final judgment
4. Prove the licensee violated Chapter 475

### Payment Limits

**Per Transaction**: Maximum of **$50,000** per claim

**Per Licensee**: Maximum of **$150,000** total for all claims against one licensee

### Consequences for Licensee

If a payment is made from the Recovery Fund:
- Licensee's license is **automatically suspended**
- License remains suspended until licensee **repays** the full amount plus interest
- May also face additional discipline from FREC

### What's NOT Covered

- Claims against unlicensed individuals
- Claims not related to licensed real estate activities
- Claims where the claimant did not obtain a judgment`,
      keyPoints: [
        'Recovery Fund compensates victims of licensee misconduct',
        'Maximum $50,000 per transaction',
        'Maximum $150,000 total per licensee',
        'Must first obtain a civil judgment and be unable to collect',
        'Payment causes automatic license suspension until repaid'
      ],
      examTips: [
        '$50,000 per transaction, $150,000 per licensee - memorize these!',
        'Must have civil judgment first, then file with FREC',
        'Claim must be filed within 2 years of final judgment',
        'License suspended until full repayment with interest'
      ]
    },
    {
      id: '3.6',
      title: 'Education Requirements Set by FREC',
      content: `## FREC Education Standards

FREC establishes the requirements for real estate education in Florida.

### Pre-License Education

**Sales Associate (Course I)**: 63 hours
- Real estate principles and practices
- Florida real estate law
- Must be from FREC-approved provider

**Broker (Course II)**: 72 hours
- Advanced real estate topics
- Brokerage management
- Investment and commercial real estate

### Post-License Education

**Sales Associate**: 45 hours before first renewal
**Broker**: 60 hours before first renewal

### Continuing Education

**All Licensees**: 14 hours every 2 years
- 3 hours Core Law
- 3 hours Ethics
- 8 hours specialty/electives

### School and Instructor Approval

FREC approves:
- **Real estate schools** (classroom and distance education)
- **Course content** and curricula
- **Instructors** (must meet education/experience requirements)
- **Examination** standards

### Course Delivery Methods

FREC approves courses delivered by:
- Classroom instruction
- Distance education (online)
- Correspondence courses (limited)

All must meet FREC standards for content and testing.`,
      keyPoints: [
        'FREC approves all real estate education providers',
        '63 hours pre-license for sales associates',
        '72 hours pre-license for brokers',
        '14 hours CE every 2 years (3 Law + 3 Ethics + 8 electives)',
        'FREC approves schools, courses, and instructors'
      ],
      examTips: [
        'Course hours are set by FREC, not DBPR',
        'All education providers must be FREC-approved',
        'Know the breakdown: 63, 72, 45, 60, 14 hours',
        'CE applies after post-license is completed'
      ]
    },
    {
      id: '3.7',
      title: 'Fees and Timelines',
      content: `## FREC-Established Fees and Deadlines

FREC, through DBPR, establishes various fees and timelines for licensure.

### License Fees (Approximate - Subject to Change)

| Fee Type | Sales Associate | Broker |
|----------|-----------------|--------|
| Initial Application | $83.75 | $115.75 |
| Active Renewal | $32 | $32 |
| Inactive Renewal | $45 | $45 |
| Late Renewal | +$25 | +$25 |

### Other Fees

- **Broker License Transfer**: $32
- **Change of Status**: Various fees apply
- **Duplicate License**: $25
- **Licensee Records**: Fees for copies

### Important Timelines

**Course Completion Certificate**: Valid for **2 years**

**Exam Results**: Valid for **2 years** after passing

**Initial License**: Issued as **inactive** until activated with broker

**Renewal Cycle**: Every **2 years** (March 31 or September 30)

**Post-License Deadline**: Before **first renewal**

**Involuntary Inactive**: **2 years** to reactivate before null and void

### License Renewal Dates

Licenses expire on either:
- **March 31** (even years for some, odd for others)
- **September 30** (even years for some, odd for others)

The specific date depends on when the license was originally issued.`,
      keyPoints: [
        'Sales associate initial fee: approximately $83.75',
        'Renewal fee: $32 active, $45 inactive',
        'Late renewal adds $25 penalty',
        'Licenses expire March 31 or September 30 every 2 years',
        'Course completion and exam results valid for 2 years'
      ],
      examTips: [
        'Know approximate fee amounts for exam',
        'Renewal is every 2 years, not annually',
        'Course completion certificates expire after 2 years',
        '2 years is a common timeline (course validity, exam validity, reactivation)'
      ]
    }
  ],

  flashcards: [
    // FREC COMPOSITION
    {
      front: 'How many members serve on FREC?',
      back: '7 MEMBERS:\n• 4 licensed brokers (5+ years active)\n• 2 consumer members (NEVER licensed)\n• 1 either broker OR consumer',
      difficulty: 'easy'
    },
    {
      front: 'What are the requirements for FREC broker members?',
      back: 'Must have been ACTIVELY licensed as a broker for at least 5 YEARS prior to appointment',
      difficulty: 'medium'
    },
    {
      front: 'What are the requirements for FREC consumer members?',
      back: 'Must have NEVER held a real estate license. True consumer perspective.',
      difficulty: 'medium'
    },
    {
      front: 'Who appoints FREC members?',
      back: 'GOVERNOR appoints, SENATE confirms',
      difficulty: 'easy'
    },
    {
      front: 'How long is a FREC member\'s term?',
      back: '4 YEARS, maximum 3 consecutive terms (12 years total)',
      difficulty: 'medium'
    },
    {
      front: 'How many FREC members constitute a quorum?',
      back: '4 members (majority of 7). Need quorum to conduct business.',
      difficulty: 'medium'
    },
    {
      front: 'How often must FREC meet?',
      back: 'At least ONCE PER MONTH',
      difficulty: 'easy'
    },
    
    // FREC vs DBPR vs DRE
    {
      front: 'What is the relationship between DBPR, DRE, and FREC?',
      back: 'DBPR = Parent agency (Department)\nDRE = Division of Real Estate (administrative)\nFREC = Commission (policy/discipline)\n\nDBPR contains DRE which staffs FREC',
      difficulty: 'hard'
    },
    {
      front: 'What is the difference between FREC and DRE?',
      back: 'FREC = Policy-making body, 7 appointed members, holds hearings\nDRE = Administrative division, day-to-day operations, staff support',
      difficulty: 'medium'
    },
    {
      front: 'Who appoints the DBPR Secretary?',
      back: 'GOVERNOR appoints, SENATE confirms (same as FREC members)',
      difficulty: 'medium'
    },
    {
      front: 'Where are FREC rules published?',
      back: 'Florida Administrative Code (FAC), Chapter 61J2',
      difficulty: 'medium'
    },
    
    // FREC POWERS
    {
      front: 'What is the maximum fine FREC can impose per violation?',
      back: '$5,000 per count/violation. Multiple violations = multiple fines.',
      difficulty: 'easy'
    },
    {
      front: 'What types of discipline can FREC impose?',
      back: '• Reprimand (warning)\n• Fine (up to $5,000/violation)\n• Probation\n• Required education\n• Suspension (up to 10 years)\n• Revocation\n• Denial of application',
      difficulty: 'medium'
    },
    {
      front: 'Can FREC impose criminal penalties?',
      back: 'NO - FREC handles administrative/civil penalties only. Criminal matters go to State Attorney.',
      difficulty: 'medium'
    },
    {
      front: 'Who investigates complaints against licensees?',
      back: 'DBPR/DRE investigates. FREC holds hearings and issues final orders based on findings.',
      difficulty: 'medium'
    },
    
    // RECOVERY FUND
    {
      front: 'What is the maximum Recovery Fund payment per TRANSACTION?',
      back: '$50,000 per transaction',
      difficulty: 'easy'
    },
    {
      front: 'What is the maximum Recovery Fund payment per LICENSEE?',
      back: '$150,000 LIFETIME maximum per licensee (regardless of how many transactions)',
      difficulty: 'easy'
    },
    {
      front: 'What happens when the Recovery Fund pays a claim?',
      back: 'Licensee\'s license is AUTOMATICALLY SUSPENDED until:\n• Full amount repaid PLUS\n• Interest at legal rate',
      difficulty: 'hard'
    },
    {
      front: 'How long to file a Recovery Fund claim after judgment?',
      back: '2 YEARS from the date of final judgment',
      difficulty: 'medium'
    },
    {
      front: 'What must a claimant have BEFORE filing a Recovery Fund claim?',
      back: 'A FINAL COURT JUDGMENT against the licensee. Recovery Fund is a LAST RESORT - must exhaust other remedies first.',
      difficulty: 'hard'
    },
    {
      front: 'What does the Recovery Fund protect against?',
      back: 'Acts committed by licensees in real estate transactions where the licensee:\n• Violated F.S. 475 or rules\n• AND caused monetary damages to a member of the public',
      difficulty: 'medium'
    },
    
    // EDUCATION & SCHOOLS
    {
      front: 'Who approves real estate schools in Florida?',
      back: 'FREC approves schools, courses, and instructors',
      difficulty: 'medium'
    },
    {
      front: 'What must schools maintain for DBPR inspection?',
      back: 'Student records, attendance records, course materials, instructor qualifications - available for DBPR audit',
      difficulty: 'medium'
    },
    
    // KEY NUMBERS
    {
      front: 'FREC Key Numbers Summary',
      back: '• 7 members (4+2+1)\n• 4 = quorum\n• 4 years = term\n• 3 consecutive terms max\n• $5,000 = max fine/violation\n• $50,000 = RF per transaction\n• $150,000 = RF per licensee lifetime',
      difficulty: 'hard'
    }
  ],

  practiceQuestions: [
    {
      question: 'How many members serve on the Florida Real Estate Commission?',
      options: [
        '5 members',
        '7 members',
        '9 members',
        '12 members'
      ],
      correct: 1,
      explanation: 'FREC consists of 7 members: 4 licensed brokers, 2 consumer members, and 1 additional member who may be either a broker or consumer.'
    },
    {
      question: 'Who appoints members to FREC?',
      options: [
        'The DBPR Secretary',
        'The state legislature',
        'The Governor, confirmed by the Senate',
        'Licensed brokers through election'
      ],
      correct: 2,
      explanation: 'FREC members are appointed by the Governor and must be confirmed by the Florida Senate.'
    },
    {
      question: 'How many years of active broker experience must licensed FREC members have?',
      options: [
        '2 years',
        '3 years',
        '5 years',
        '10 years'
      ],
      correct: 2,
      explanation: 'Licensed broker members of FREC must have held an active broker license for at least 5 years preceding their appointment.'
    },
    {
      question: 'What is the maximum fine FREC can impose for a single violation?',
      options: [
        '$1,000',
        '$2,500',
        '$5,000',
        '$10,000'
      ],
      correct: 2,
      explanation: 'FREC can impose a fine of up to $5,000 per count or violation.'
    },
    {
      question: 'What is the maximum amount the Recovery Fund will pay for a single transaction?',
      options: [
        '$25,000',
        '$50,000',
        '$100,000',
        '$150,000'
      ],
      correct: 1,
      explanation: 'The Recovery Fund will pay a maximum of $50,000 per transaction. The $150,000 limit applies to total claims against a single licensee.'
    },
    {
      question: 'What happens when a payment is made from the Recovery Fund on behalf of a licensee?',
      options: [
        'The licensee receives a reprimand',
        'The licensee must complete additional education',
        'The licensee\'s license is automatically suspended',
        'Nothing happens to the license'
      ],
      correct: 2,
      explanation: 'When a Recovery Fund payment is made, the licensee\'s license is automatically suspended until they repay the full amount plus interest.'
    },
    {
      question: 'How often must FREC meet?',
      options: [
        'Weekly',
        'At least once per month',
        'Quarterly',
        'Twice per year'
      ],
      correct: 1,
      explanation: 'FREC must meet at least once each month. Meetings are open to the public under Florida\'s Sunshine Law.'
    },
    {
      question: 'What constitutes a quorum for FREC?',
      options: [
        '3 members',
        '4 members',
        '5 members',
        '6 members'
      ],
      correct: 1,
      explanation: 'A quorum for FREC is 4 members, which is a majority of the 7-member commission.'
    },
    {
      question: 'The Division of Real Estate (DRE) is best described as:',
      options: [
        'The policy-making body for real estate regulation',
        'The administrative arm that handles day-to-day licensing operations',
        'A consumer advocacy group',
        'An association of licensed brokers'
      ],
      correct: 1,
      explanation: 'DRE is the administrative division within DBPR that handles the day-to-day operations of real estate licensing, including processing applications and maintaining records.'
    },
    {
      question: 'Where are FREC\'s rules published?',
      options: [
        'Florida Statutes Chapter 475',
        'Florida Administrative Code Chapter 61J2',
        'The FREC Newsletter',
        'The Federal Register'
      ],
      correct: 1,
      explanation: 'FREC\'s rules are published in the Florida Administrative Code, Chapter 61J2. Florida Statutes Chapter 475 contains the laws, while the FAC contains the rules that implement those laws.'
    },
    {
      question: 'To file a claim against the Recovery Fund, a claimant must first:',
      options: [
        'File a complaint with FREC',
        'Obtain a final civil court judgment against the licensee',
        'Request mediation through DBPR',
        'Notify the licensee\'s broker'
      ],
      correct: 1,
      explanation: 'A claimant must first obtain a final civil court judgment against the licensee and attempt to collect it. Only after being unable to collect can they file a claim with the Recovery Fund.'
    },
    {
      question: 'How long does a claimant have to file a Recovery Fund claim after obtaining a final judgment?',
      options: [
        '6 months',
        '1 year',
        '2 years',
        '4 years'
      ],
      correct: 2,
      explanation: 'A claimant must file their Recovery Fund claim within 2 years of the final judgment.'
    },
    {
      question: 'How many consumer (non-licensee) members must serve on FREC?',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      correct: 1,
      explanation: 'FREC must have 2 consumer members who are not licensed and have no connection to the real estate industry. They represent the public interest.'
    },
    {
      question: 'What is the maximum total the Recovery Fund will pay for all claims against one licensee?',
      options: [
        '$50,000',
        '$100,000',
        '$150,000',
        '$200,000'
      ],
      correct: 2,
      explanation: 'The Recovery Fund will pay a maximum of $150,000 total for all claims against a single licensee. Individual transaction claims are limited to $50,000.'
    },
    {
      question: 'FREC member terms are:',
      options: [
        '2 years with unlimited reappointment',
        '4 years with maximum 3 consecutive terms',
        '6 years with maximum 2 consecutive terms',
        'Lifetime appointments'
      ],
      correct: 1,
      explanation: 'FREC members serve 4-year terms and may serve a maximum of 3 consecutive terms (12 years total).'
    }
  ],

  caseStudies: [
    {
      id: 'ch3-case1',
      title: 'The Recovery Fund Claim',
      scenario: 'A buyer purchased a home through sales associate James. James misrepresented the property\'s condition, causing the buyer $75,000 in damages. The buyer sued James and won a judgment. James has no assets and the buyer cannot collect. The buyer wants to file a claim with the Recovery Fund.',
      question: 'How much can the buyer recover from the Recovery Fund, and what happens to James\'s license?',
      answer: 'The buyer can recover a maximum of $50,000 from the Recovery Fund (the per-transaction limit), even though the judgment was for $75,000. James\'s license will be automatically suspended until he repays the full $50,000 plus interest to the Recovery Fund. The buyer must file the claim within 2 years of the final judgment.',
      examRelevance: 'Tests understanding of Recovery Fund limits ($50,000 per transaction, $150,000 per licensee) and consequences to the licensee (automatic suspension until repayment).'
    }
  ],

  summary: `Chapter 3 covers the structure and function of the regulatory bodies overseeing Florida real estate.

**DBPR**: The umbrella state agency that houses FREC and provides administrative support. The Secretary is appointed by the Governor.

**FREC Composition**: 7 members appointed by Governor, confirmed by Senate. 4 licensed brokers (5+ years experience), 2 consumer members, 1 either. Serve 4-year terms, max 3 consecutive.

**FREC Powers**: Adopt rules (FAC 61J2), grant/deny licenses, approve education, discipline licensees (reprimand, fine up to $5,000, probation, suspension, revocation).

**DRE**: Administrative division handling day-to-day operations - processes applications, maintains records, supports FREC.

**Recovery Fund**: Compensates victims who can't collect judgments against licensees. Maximum $50,000 per transaction, $150,000 per licensee. Licensee's license suspended until repayment.

**Key Numbers**: 7 FREC members, 4 for quorum, 4-year terms, $5,000 max fine, $50,000/$150,000 Recovery Fund limits.`
};

export default CHAPTER_3;
