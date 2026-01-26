/**
 * Chapter 6: Violations, Penalties & Procedures
 * 
 * Covers 3% of the Florida Real Estate Exam
 * Focus: Disciplinary actions, due process, and administrative procedures
 */

export const CHAPTER_6 = {
  id: 6,
  title: 'Violations, Penalties & Procedures',
  subtitle: 'Disciplinary Actions and Due Process',
  examPercentage: 3,
  requiredTimeMinutes: 180, // 3 hours minimum
  color: '#EF4444', // Red
  icon: 'Gavel',
  
  objectives: [
    'Identify the grounds for discipline under Chapter 475',
    'Understand the types of penalties FREC can impose',
    'Explain the complaint and investigation process',
    'Describe the administrative hearing procedures',
    'Understand the difference between formal and informal hearings',
    'Explain licensee rights during disciplinary proceedings',
    'Identify criminal violations related to real estate'
  ],

  statutes: [
    { code: '475.25', title: 'Grounds for Discipline', summary: 'Lists violations that can result in discipline' },
    { code: '475.42', title: 'Criminal Violations', summary: 'Criminal penalties for certain acts' },
    { code: '120.569', title: 'Administrative Procedures Act', summary: 'Due process requirements for hearings' },
    { code: '120.57', title: 'Hearing Procedures', summary: 'Formal and informal hearing processes' },
    { code: '455.227', title: 'Grounds for Discipline (General)', summary: 'Applies to all DBPR-regulated professions' }
  ],

  sections: [
    {
      id: '6.1',
      title: 'Grounds for Discipline',
      content: `## Violations Under F.S. 475.25

FREC can discipline a licensee for various violations. Understanding these grounds is essential for avoiding discipline.

### Major Categories of Violations

**1. Fraud, Misrepresentation, and Dishonest Dealing**
- Making false statements to induce a transaction
- Concealing material facts
- Misrepresenting property condition or value
- Falsifying documents

**2. Breach of Trust or Culpable Negligence**
- Mishandling escrow funds
- Failing to account for money received
- Commingling funds
- Conversion (using funds for personal benefit)

**3. False Advertising**
- Misleading or deceptive advertising
- Blind ads (without brokerage name)
- False claims about services or qualifications

**4. Failure to Maintain License**
- Operating without valid license
- Failure to complete required education
- Failure to notify DBPR of address change within 10 days

**5. Violations of Real Estate Law**
- Violating any provision of Chapter 475
- Violating FREC rules (Chapter 61J2)
- Aiding unlicensed practice

**6. Crime and Moral Turpitude**
- Conviction of a crime related to real estate
- Conviction of crime involving moral turpitude
- Pleading guilty or nolo contendere

### Specific Violations to Know

- **Failure to deliver documents**: Not providing copies of signed documents
- **Failure to properly disclose**: Not disclosing brokerage relationship or material facts
- **Operating as a broker without license**: Sales associate acting independently
- **Sharing commission improperly**: Paying unlicensed persons`,
      keyPoints: [
        'Fraud, misrepresentation, dishonest dealing = grounds for discipline',
        'Breach of trust includes mishandling escrow funds',
        'Must notify DBPR of address change within 10 days',
        'Conviction of crime involving moral turpitude = discipline',
        'Aiding unlicensed practice is a violation'
      ],
      examTips: [
        'Memorize the main categories of violations',
        '10 days to notify DBPR of address change',
        'Commingling and conversion are different violations',
        'Moral turpitude = crimes involving dishonesty or immorality'
      ]
    },
    {
      id: '6.2',
      title: 'Types of Penalties',
      content: `## Penalties FREC Can Impose

FREC has various disciplinary options depending on the severity of the violation.

### Administrative Penalties

**1. Reprimand**
- Formal written warning
- Becomes part of licensee's record
- Least severe penalty

**2. Fine**
- Up to **$5,000 per count** (per violation)
- Multiple violations = multiple fines
- Must be paid within specified time

**3. Probation**
- License remains active but under conditions
- May require additional education
- May require supervision
- Violation of probation = additional discipline

**4. Suspension**
- **Temporary** removal of license
- Cannot practice during suspension
- Maximum **10 years**
- License can be reinstated after suspension period

**5. Revocation**
- **Permanent** removal of license
- Most severe penalty
- May reapply after specified period (often 10 years)
- No guarantee of approval

**6. Denial**
- Refusal to issue or renew a license
- Applies to applicants or renewal applications

### Additional Remedies

**Administrative Costs**: FREC can require licensee to pay costs of investigation and prosecution

**Restitution**: May require payment to injured parties

**Citation**: For minor violations, a citation with small fine (no formal hearing)

### Aggravating and Mitigating Factors

FREC considers:
- Severity of violation
- Prior disciplinary history
- Whether violation was willful
- Harm caused to public
- Cooperation with investigation`,
      keyPoints: [
        'Fine up to $5,000 per count/violation',
        'Suspension is temporary (up to 10 years)',
        'Revocation is permanent',
        'Probation keeps license active with conditions',
        'FREC can recover investigation costs'
      ],
      examTips: [
        '$5,000 max fine PER COUNT (multiple violations = higher total)',
        'Suspension = temporary; Revocation = permanent',
        '10 years maximum suspension',
        'Revoked licensees may reapply after waiting period'
      ]
    },
    {
      id: '6.3',
      title: 'Complaint Process',
      content: `## Filing and Processing Complaints

Anyone can file a complaint against a licensee. Understanding the process protects both consumers and licensees.

### Who Can File a Complaint?

- Consumers (buyers, sellers, tenants, landlords)
- Other licensees
- DBPR investigators
- FREC itself
- Any member of the public

### How to File

Complaints can be filed:
- Online through DBPR website
- In writing by mail
- By phone to DBPR

### Required Information

A complaint should include:
- Name of licensee
- Description of alleged violation
- Dates and locations
- Supporting documentation
- Complainant contact information

### Complaint Processing

**1. Receipt and Review**
- DBPR receives complaint
- Initial review for jurisdiction
- Determines if complaint states a violation

**2. Legally Sufficient**
- If complaint alleges a violation that, if true, would violate Chapter 475
- Must be investigated

**3. Legally Insufficient**
- Complaint doesn't state a violation
- May be dismissed or returned for clarification

### Investigation

If complaint is legally sufficient:
- Assigned to DBPR investigator
- Investigator gathers evidence
- May interview witnesses
- Licensee notified of investigation
- Licensee has right to respond

### Time Limitations

- Complaints should be filed promptly
- Generally, violations should be reported within **5 years**
- Older violations may be difficult to investigate`,
      keyPoints: [
        'Anyone can file a complaint',
        'Complaints reviewed for legal sufficiency',
        'Legally sufficient = alleges violation of Ch. 475',
        'Licensee notified and can respond to investigation',
        '5-year general limitation on complaints'
      ],
      examTips: [
        'Legal sufficiency is the first test for complaints',
        'Licensee has RIGHT to be notified of investigation',
        'Licensee can respond and provide evidence',
        'Anonymous complaints are still investigated if sufficient'
      ]
    },
    {
      id: '6.4',
      title: 'Administrative Hearings',
      content: `## Due Process in Disciplinary Proceedings

Licensees have rights under Florida's Administrative Procedures Act (Chapter 120).

### Types of Hearings

**Informal Hearing (Section 120.57(2))**
- No disputed facts
- Licensee agrees to the facts
- Argues for reduced penalty
- Conducted before FREC
- Quicker process

**Formal Hearing (Section 120.57(1))**
- Disputed facts
- Licensee denies allegations
- Conducted before Administrative Law Judge (ALJ)
- Full evidentiary hearing
- More formal process

### Formal Hearing Process

**1. Notice**
- Licensee receives Administrative Complaint
- Specifies charges and alleged violations
- Given **21 days** to respond

**2. Election of Rights**
- Licensee chooses formal or informal hearing
- May also choose to not contest (stipulation)
- Failure to respond = waiver of hearing rights

**3. Discovery**
- Both sides exchange evidence
- Depositions may be taken
- Document requests

**4. Hearing**
- Before Administrative Law Judge
- Testimony under oath
- Cross-examination allowed
- Rules of evidence apply (loosely)

**5. Recommended Order**
- ALJ issues recommended order
- Findings of fact and conclusions of law
- Recommended penalty

**6. Final Order**
- FREC reviews recommended order
- May accept, modify, or reject
- Issues Final Order
- Licensee can appeal to court

### Burden of Proof

DBPR must prove violations by **clear and convincing evidence**
- Higher than "preponderance" (civil standard)
- Lower than "beyond reasonable doubt" (criminal standard)`,
      keyPoints: [
        'Informal hearing = no disputed facts, argue penalty',
        'Formal hearing = disputed facts, full evidentiary process',
        '21 days to respond to Administrative Complaint',
        'ALJ conducts formal hearings, recommends to FREC',
        'Burden of proof = clear and convincing evidence'
      ],
      examTips: [
        '21 days to respond to charges',
        'Formal = disputed facts; Informal = agree to facts',
        'ALJ recommends, FREC decides',
        'Clear and convincing = standard of proof'
      ]
    },
    {
      id: '6.5',
      title: 'Criminal Violations',
      content: `## Criminal Penalties (F.S. 475.42)

Some violations are criminal offenses, not just administrative violations.

### First Degree Misdemeanor

**Unlicensed Practice**
- Operating as broker or sales associate without license
- Penalty: Up to 1 year in jail, $1,000 fine

**Using Another's License**
- Impersonating a licensee
- Using expired or revoked license

### Third Degree Felony

**Repeat Unlicensed Practice**
- Second or subsequent violation of unlicensed practice
- Penalty: Up to 5 years in prison, $5,000 fine

**Fraudulent Registration**
- Obtaining license through fraud
- False statements on application

### Other Criminal Violations

**Paying Unlicensed Persons**
- Compensating someone for activities requiring a license
- First degree misdemeanor

**Collecting Advance Fees Improperly**
- For certain services like loan modifications
- Must comply with specific requirements

### Relationship to Administrative Action

A criminal conviction can also result in:
- Administrative discipline by FREC
- License suspension or revocation
- Both criminal AND administrative penalties can apply

### Reporting Requirements

Licensees must report:
- Any criminal conviction to DBPR
- Within **30 days** of conviction
- Failure to report = additional violation`,
      keyPoints: [
        'Unlicensed practice = 1st degree misdemeanor',
        'Repeat unlicensed practice = 3rd degree felony',
        'Must report criminal conviction to DBPR within 30 days',
        'Criminal AND administrative penalties can both apply',
        'Paying unlicensed persons is criminal offense'
      ],
      examTips: [
        'Know the difference between misdemeanor and felony violations',
        '30 days to report conviction to DBPR',
        'Unlicensed practice first offense = misdemeanor',
        'Second offense = felony (more serious)'
      ]
    },
    {
      id: '6.6',
      title: 'Licensee Rights',
      content: `## Rights During Disciplinary Proceedings

Licensees have important constitutional and statutory rights.

### Notice Rights

- Right to receive written notice of charges
- Notice must specify violations alleged
- Right to know evidence against them
- Adequate time to prepare defense (21 days minimum)

### Hearing Rights

- Right to choose formal or informal hearing
- Right to be represented by attorney
- Right to present evidence
- Right to call witnesses
- Right to cross-examine adverse witnesses
- Right to review evidence before hearing

### During Investigation

- Right to be notified of investigation
- Right to respond to allegations
- Right to provide evidence
- Right to have attorney present during interviews
- Right to remain silent (cannot be compelled to testify against self)

### After Hearing

- Right to receive written Final Order
- Right to appeal to District Court of Appeal
- Right to judicial review of FREC decision

### Emergency Actions

In extreme cases, DBPR may:
- Issue **Emergency Suspension** (immediate)
- Used when public safety at risk
- Licensee still gets hearing, but after suspension
- Example: Felony arrest involving escrow funds

### Practical Rights

- Right to continue practicing until final order (unless emergency suspension)
- Right to negotiated settlement (stipulation)
- Right to request continuance for good cause`,
      keyPoints: [
        'Right to written notice of charges',
        'Right to attorney representation',
        'Right to present evidence and call witnesses',
        'Right to appeal Final Order to court',
        'Emergency suspension = immediate, hearing follows'
      ],
      examTips: [
        'Licensee can practice until Final Order (usually)',
        'Emergency suspension is exception - immediate effect',
        'Always has right to attorney',
        '21 days to respond to Administrative Complaint'
      ]
    },
    {
      id: '6.7',
      title: 'Citations for Minor Violations',
      content: `## Citation Program

FREC can issue citations for minor violations without a full hearing.

### What Is a Citation?

A citation is:
- Written notice of violation
- Includes fine amount
- For **minor violations** only
- No formal hearing required

### Eligible Violations

Citations may be issued for:
- First-time minor advertising violations
- Late license renewal
- Minor record-keeping violations
- Other minor infractions designated by rule

### Citation Fines

- Generally **$100 to $500**
- Lower than formal discipline
- Must be paid within specified time

### Process

**1. Citation Issued**
- DBPR issues citation
- Specifies violation and fine

**2. Licensee Options**
- Pay fine and accept citation
- Contest the citation

**3. If Contested**
- Licensee requests hearing
- Proceeds to formal or informal hearing
- If unsuccessful, penalty may be higher

### Benefits of Citation Program

**For Licensee**:
- Quick resolution
- Lower fine
- No formal hearing
- Less public record

**For FREC**:
- Efficient use of resources
- Handles minor matters quickly
- Allows focus on serious violations

### When Citations NOT Available

- Repeat violations
- Violations involving fraud
- Violations causing harm to consumers
- Serious breaches of trust`,
      keyPoints: [
        'Citations for MINOR violations only',
        'Fines typically $100-$500',
        'No formal hearing required',
        'Licensee can contest and request hearing',
        'Not available for serious or repeat violations'
      ],
      examTips: [
        'Citation = minor violation, small fine',
        'Can contest citation and request hearing',
        'Repeat violations = no citation, formal discipline',
        'Fraud = too serious for citation'
      ]
    },
    {
      id: '6.8',
      title: 'Recovery Fund Claims',
      content: `## Real Estate Recovery Fund Review

The Recovery Fund compensates victims when licensees cause financial harm.

### Purpose

To provide compensation when:
- A licensee violates Chapter 475
- Consumer suffers financial loss
- Consumer cannot collect from licensee

### Requirements for Claim

**1. Obtain Civil Judgment**
- Must sue licensee in court
- Obtain final money judgment
- Judgment must be based on acts requiring license

**2. Attempt Collection**
- Try to collect from licensee
- Document inability to collect
- Show licensee has insufficient assets

**3. File Claim with FREC**
- Within **2 years** of final judgment
- Provide required documentation
- Show connection to licensed activity

### Payment Limits (Review)

- **$50,000** maximum per transaction
- **$150,000** maximum per licensee (total)

### Effect on License

When Recovery Fund pays:
- License **automatically suspended**
- Remains suspended until:
  - Full repayment with interest
  - Any additional discipline completed

### What's NOT Covered

- Unlicensed individuals (no license = no Recovery Fund)
- Activities not requiring a license
- Claims over $50,000 per transaction (excess not paid)
- Claims after $150,000 paid against one licensee`,
      keyPoints: [
        'Must first obtain civil court judgment',
        'File claim within 2 years of judgment',
        '$50,000 per transaction, $150,000 per licensee max',
        'Payment causes automatic license suspension',
        'Only covers licensed activity violations'
      ],
      examTips: [
        'Civil judgment FIRST, then Recovery Fund claim',
        '2 years to file after final judgment',
        'Memorize: $50K/transaction, $150K/licensee',
        'Suspension until repayment WITH interest'
      ]
    }
  ],

  flashcards: [
    // FREC PENALTIES
    {
      front: 'What is the maximum fine FREC can impose per violation?',
      back: '$5,000 per count/violation. Multiple violations = higher total fines.',
      difficulty: 'easy'
    },
    {
      front: 'What is the difference between suspension and revocation?',
      back: 'SUSPENSION: Temporary (up to 10 YEARS), license can be reinstated\nREVOCATION: Permanent removal of license',
      difficulty: 'medium'
    },
    {
      front: 'What penalties can FREC impose?',
      back: '• Fines up to $5,000/violation\n• Suspension (up to 10 years)\n• Revocation\n• Probation\n• Required education\n• Reprimand\n• Administrative costs',
      difficulty: 'hard'
    },
    {
      front: 'What is the maximum suspension period?',
      back: '10 YEARS - after which license can potentially be reinstated',
      difficulty: 'medium'
    },
    
    // DISCIPLINARY PROCESS
    {
      front: 'How many days does a licensee have to respond to an Administrative Complaint?',
      back: '21 DAYS - Can elect formal hearing, informal hearing, or accept penalties',
      difficulty: 'medium'
    },
    {
      front: 'What type of hearing is held when the licensee DISPUTES THE FACTS?',
      back: 'FORMAL HEARING before an Administrative Law Judge (ALJ) - DOAH',
      difficulty: 'medium'
    },
    {
      front: 'What type of hearing is held when the licensee AGREES TO FACTS but disputes penalty?',
      back: 'INFORMAL HEARING before FREC - facts not disputed, only the penalty',
      difficulty: 'medium'
    },
    {
      front: 'What standard of proof must DBPR meet in disciplinary hearings?',
      back: 'CLEAR AND CONVINCING evidence (higher than preponderance, lower than beyond reasonable doubt)',
      difficulty: 'hard'
    },
    {
      front: 'What is a citation used for?',
      back: 'MINOR violations - Quick resolution with small fine ($100-$500), no formal hearing needed',
      difficulty: 'medium'
    },
    {
      front: 'Can a licensee continue practicing after receiving an Administrative Complaint?',
      back: 'YES - until FINAL ORDER is issued. Exception: Emergency suspension (immediate threat)',
      difficulty: 'hard'
    },
    
    // UNLICENSED ACTIVITY
    {
      front: 'What is the penalty for FIRST-TIME unlicensed practice?',
      back: 'FIRST DEGREE MISDEMEANOR:\n• Up to 1 year jail\n• Up to $1,000 fine',
      difficulty: 'medium'
    },
    {
      front: 'What is the penalty for REPEAT unlicensed practice?',
      back: 'THIRD DEGREE FELONY:\n• Up to 5 years prison\n• Up to $5,000 fine',
      difficulty: 'medium'
    },
    {
      front: 'Is collecting a fee for referrals without a license considered unlicensed activity?',
      back: 'YES - receiving compensation for real estate activity without a license is UNLICENSED PRACTICE',
      difficulty: 'medium'
    },
    
    // NOTIFICATION REQUIREMENTS
    {
      front: 'Within how many days must a licensee report a CRIMINAL CONVICTION to DBPR?',
      back: '30 DAYS of conviction (including plea of guilty or nolo contendere)',
      difficulty: 'medium'
    },
    {
      front: 'Within how many days must a licensee notify DBPR of an ADDRESS CHANGE?',
      back: '10 DAYS',
      difficulty: 'easy'
    },
    {
      front: 'Within how many days must a broker notify DBPR of escrow dispute?',
      back: '15 BUSINESS DAYS from the last party demand',
      difficulty: 'medium'
    },
    
    // RECOVERY FUND
    {
      front: 'What is the maximum Recovery Fund payout per transaction?',
      back: '$50,000 per transaction',
      difficulty: 'easy'
    },
    {
      front: 'What is the maximum Recovery Fund payout per licensee?',
      back: '$150,000 LIFETIME maximum per licensee',
      difficulty: 'easy'
    },
    {
      front: 'How long does a claimant have to file a Recovery Fund claim?',
      back: '2 YEARS from the date of final judgment',
      difficulty: 'medium'
    },
    {
      front: 'What happens to a license when the Recovery Fund pays a claim?',
      back: 'License AUTOMATICALLY SUSPENDED until:\n• Full repayment PLUS\n• Interest (legal rate)',
      difficulty: 'hard'
    },
    {
      front: 'What must a claimant have before filing a Recovery Fund claim?',
      back: 'A FINAL COURT JUDGMENT against the licensee - Recovery Fund is a LAST RESORT',
      difficulty: 'medium'
    },
    
    // SPECIFIC VIOLATIONS
    {
      front: 'What is "culpable negligence"?',
      back: 'RECKLESS disregard for the rights of others - more than simple negligence, close to intentional',
      difficulty: 'hard'
    },
    {
      front: 'What is "fraud"?',
      back: 'INTENTIONAL misrepresentation for personal gain - most serious offense, usually results in revocation',
      difficulty: 'medium'
    },
    {
      front: 'What is the punishment for conversion of escrow funds?',
      back: 'CRIMINAL - theft charges (up to felony). Also license revocation. Conversion is using escrow for personal purposes.',
      difficulty: 'hard'
    },
    {
      front: 'Who investigates complaints against licensees?',
      back: 'DBPR (Department) investigates. FREC (Commission) holds hearings and issues final orders.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'FREC can impose a fine of up to how much per violation?',
      options: [
        '$1,000',
        '$2,500',
        '$5,000',
        '$10,000'
      ],
      correct: 2,
      explanation: 'FREC can impose a fine of up to $5,000 per count or violation. Multiple violations can result in higher total fines.'
    },
    {
      question: 'What is the difference between suspension and revocation?',
      options: [
        'Suspension is permanent, revocation is temporary',
        'Suspension is temporary, revocation is permanent',
        'They are the same',
        'Suspension requires a hearing, revocation does not'
      ],
      correct: 1,
      explanation: 'Suspension is temporary removal of a license (up to 10 years), while revocation is permanent removal. A revoked licensee may apply for a new license after a waiting period.'
    },
    {
      question: 'A licensee receives an Administrative Complaint. How many days do they have to respond?',
      options: [
        '10 days',
        '14 days',
        '21 days',
        '30 days'
      ],
      correct: 2,
      explanation: 'A licensee has 21 days to respond to an Administrative Complaint and elect whether they want a formal or informal hearing.'
    },
    {
      question: 'What is the standard of proof in administrative disciplinary hearings?',
      options: [
        'Preponderance of evidence',
        'Clear and convincing evidence',
        'Beyond a reasonable doubt',
        'Probable cause'
      ],
      correct: 1,
      explanation: 'DBPR must prove violations by clear and convincing evidence, which is higher than preponderance but lower than beyond a reasonable doubt.'
    },
    {
      question: 'First-time unlicensed practice of real estate is classified as:',
      options: [
        'A second degree misdemeanor',
        'A first degree misdemeanor',
        'A third degree felony',
        'A second degree felony'
      ],
      correct: 1,
      explanation: 'First-time unlicensed practice is a first degree misdemeanor, punishable by up to 1 year in jail and $1,000 fine. Repeat offenses become a third degree felony.'
    },
    {
      question: 'Within how many days must a licensee report a criminal conviction to DBPR?',
      options: [
        '10 days',
        '21 days',
        '30 days',
        '60 days'
      ],
      correct: 2,
      explanation: 'A licensee must report any criminal conviction to DBPR within 30 days. Failure to report is an additional violation.'
    },
    {
      question: 'When is a formal hearing required?',
      options: [
        'When the fine exceeds $1,000',
        'When the licensee disputes the facts',
        'For all license revocations',
        'When requested by FREC'
      ],
      correct: 1,
      explanation: 'A formal hearing before an Administrative Law Judge is required when the licensee disputes the facts. If facts are not disputed, an informal hearing before FREC is held.'
    },
    {
      question: 'What type of violations are handled through the citation program?',
      options: [
        'Fraud violations',
        'Minor violations with small fines',
        'Repeat violations',
        'Criminal violations'
      ],
      correct: 1,
      explanation: 'Citations are for minor violations only, with fines typically $100-$500. Serious violations, fraud, and repeat offenses require formal disciplinary proceedings.'
    },
    {
      question: 'Within how many days must a licensee notify DBPR of an address change?',
      options: [
        '5 days',
        '10 days',
        '21 days',
        '30 days'
      ],
      correct: 1,
      explanation: 'Licensees must notify DBPR of any address change within 10 days. Failure to do so is a violation.'
    },
    {
      question: 'In an informal hearing:',
      options: [
        'The licensee disputes the facts',
        'An Administrative Law Judge presides',
        'The licensee agrees to the facts but disputes the penalty',
        'Criminal charges are heard'
      ],
      correct: 2,
      explanation: 'In an informal hearing, the licensee agrees to the facts but argues for a reduced penalty. It is conducted before FREC, not an ALJ.'
    },
    {
      question: 'What happens to a license when the Recovery Fund pays a claim against the licensee?',
      options: [
        'Nothing, the license remains active',
        'The license is automatically suspended',
        'The license is automatically revoked',
        'The licensee receives a reprimand'
      ],
      correct: 1,
      explanation: 'When the Recovery Fund pays a claim, the licensee\'s license is automatically suspended until they repay the full amount plus interest.'
    },
    {
      question: 'A licensee can practice real estate:',
      options: [
        'Only until they receive an Administrative Complaint',
        'Until a Final Order is issued (unless emergency suspension)',
        'Never once an investigation begins',
        'Only if they pay a bond'
      ],
      correct: 1,
      explanation: 'A licensee can continue practicing until a Final Order is issued. The exception is if an emergency suspension is ordered due to immediate threat to public safety.'
    },
    {
      question: 'Which entity conducts formal administrative hearings?',
      options: [
        'FREC',
        'DBPR',
        'An Administrative Law Judge',
        'A circuit court judge'
      ],
      correct: 2,
      explanation: 'Formal hearings are conducted by an Administrative Law Judge (ALJ) from the Division of Administrative Hearings. The ALJ issues a recommended order to FREC.'
    },
    {
      question: 'A second offense of unlicensed practice is:',
      options: [
        'A first degree misdemeanor',
        'A second degree misdemeanor',
        'A third degree felony',
        'A first degree felony'
      ],
      correct: 2,
      explanation: 'Repeat unlicensed practice is a third degree felony, punishable by up to 5 years in prison and $5,000 fine. First offense is a first degree misdemeanor.'
    },
    {
      question: 'What must a claimant do BEFORE filing a Recovery Fund claim?',
      options: [
        'File a complaint with FREC',
        'Obtain a civil court judgment against the licensee',
        'Request mediation',
        'Complete an arbitration hearing'
      ],
      correct: 1,
      explanation: 'Before filing a Recovery Fund claim, the claimant must first sue the licensee, obtain a final court judgment, and attempt to collect. Only then can they file with the Recovery Fund.'
    }
  ],

  caseStudies: [
    {
      id: 'ch6-case1',
      title: 'The Unlicensed Assistant',
      scenario: 'Sales associate Jake hires his friend Maria to help with his business. Maria hosts open houses, shows properties to buyers, and negotiates offers. Jake pays Maria $200 per transaction. Maria has no real estate license. A buyer files a complaint.',
      question: 'What violations have occurred and what are the potential penalties?',
      answer: 'Multiple violations: 1) Maria is practicing real estate without a license - first degree misdemeanor (up to 1 year jail, $1,000 fine); 2) Jake is paying an unlicensed person for services requiring a license - first degree misdemeanor; 3) Jake faces administrative discipline from FREC including possible fine (up to $5,000 per violation), suspension, or revocation. If Maria continues after being warned, it becomes a third degree felony. Jake\'s broker may also face discipline for failure to supervise.',
      examRelevance: 'Tests understanding of unlicensed practice penalties and responsibility for paying unlicensed persons. Key: first offense = misdemeanor, second = felony.'
    },
    {
      id: 'ch6-case2',
      title: 'The Formal Hearing',
      scenario: 'Broker Betty receives an Administrative Complaint alleging she mishandled escrow funds. Betty believes the allegations are false and wants to fight the charges. She has documentation proving proper handling of funds.',
      question: 'What type of hearing should Betty request, and what is the process?',
      answer: 'Betty should request a FORMAL hearing because she disputes the facts. Process: 1) Within 21 days, Betty files Election of Rights requesting formal hearing; 2) Case assigned to Administrative Law Judge; 3) Discovery phase - both sides exchange evidence; 4) Formal hearing with testimony, cross-examination; 5) ALJ issues Recommended Order; 6) FREC reviews and issues Final Order. DBPR must prove case by clear and convincing evidence. Betty can practice until Final Order. If she loses, she can appeal to District Court of Appeal.',
      examRelevance: 'Tests understanding of formal vs. informal hearings, 21-day response period, burden of proof, and the role of ALJ versus FREC.'
    }
  ],

  summary: `Chapter 6 covers violations, penalties, and disciplinary procedures in Florida real estate.

**Grounds for Discipline (F.S. 475.25)**:
- Fraud, misrepresentation, dishonest dealing
- Breach of trust, commingling, conversion
- False advertising, blind ads
- Failure to maintain license or notify of address change (10 days)
- Violating Chapter 475 or FREC rules

**Penalties FREC Can Impose**:
- Reprimand (warning)
- Fine (up to $5,000 per violation)
- Probation (active with conditions)
- Suspension (temporary, up to 10 years)
- Revocation (permanent)
- Administrative costs and restitution

**Hearing Types**:
- Informal: Agree to facts, argue penalty, before FREC
- Formal: Dispute facts, before ALJ, full evidentiary hearing
- 21 days to respond to Administrative Complaint
- Standard: Clear and convincing evidence

**Criminal Violations**:
- Unlicensed practice: 1st degree misdemeanor (first), 3rd degree felony (repeat)
- Must report conviction within 30 days

**Citation Program**: Minor violations, $100-$500 fine, no formal hearing

**Recovery Fund**: Civil judgment first, file within 2 years, $50K/transaction, $150K/licensee, automatic suspension until repayment.`
};

export default CHAPTER_6;
