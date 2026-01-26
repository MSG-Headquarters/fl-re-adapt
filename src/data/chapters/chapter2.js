/**
 * Chapter 2: License Law & Qualifications
 * 
 * Covers 6% of the Florida Real Estate Exam
 * Focus: Requirements for obtaining and maintaining a Florida real estate license
 */

export const CHAPTER_2 = {
  id: 2,
  title: 'License Law & Qualifications',
  subtitle: 'Requirements for Florida Real Estate Licensure',
  examPercentage: 6,
  requiredTimeMinutes: 180, // 3 hours minimum
  color: '#8B5CF6', // Purple
  icon: 'Scale',
  
  objectives: [
    'Identify the requirements for obtaining a sales associate license',
    'Understand the requirements for obtaining a broker license',
    'Explain the post-licensing education requirements',
    'Describe the continuing education requirements for license renewal',
    'Understand mutual recognition and reciprocity agreements',
    'Identify who is exempt from licensure requirements',
    'Explain the license application process and fees'
  ],

  statutes: [
    { code: '475.17', title: 'Qualifications for Practice', summary: 'Sets forth requirements for licensure including age, education, and background' },
    { code: '475.175', title: 'Broker Associates', summary: 'Defines broker associate status and requirements' },
    { code: '475.181', title: 'Mutual Recognition Agreements', summary: 'Allows reciprocity with other states' },
    { code: '475.182', title: 'Continuing Education', summary: 'Requirements for license renewal' },
    { code: '475.183', title: 'Post-Licensing Education', summary: 'Requirements for new licensees' },
    { code: '475.01', title: 'Definitions', summary: 'Defines key terms including sales associate and broker' }
  ],

  sections: [
    {
      id: '2.1',
      title: 'Sales Associate License Requirements',
      content: `## Becoming a Florida Sales Associate

To obtain a Florida real estate **sales associate license**, an applicant must meet specific requirements established by Florida Statute 475.17.

### Basic Requirements

**Age Requirement**: Must be at least **18 years of age**. There is no maximum age limit.

**Education Requirement**: Must complete a **63-hour pre-license course** (Course I) from an FREC-approved school. This course covers:
- Real estate principles and practices
- Florida real estate law
- Real estate math

**Application**: Submit a complete application to the DBPR with required fees.

**Background**: Must be of **honest, truthful, and good character**. A criminal background check is required.

**Examination**: Must pass the **state licensing examination** with a score of at least **75%**.

### The Application Process

1. Complete the 63-hour pre-license course
2. Submit application to DBPR (can be done online)
3. Receive eligibility confirmation
4. Schedule and pass the state exam
5. Activate license with a licensed broker

### Important Timelines

- Course completion certificate is valid for **2 years**
- After passing the exam, you have **2 years** to become active
- Initial license is issued as **inactive** until you join a broker

### High School Diploma

Florida does **NOT** require a high school diploma or GED to obtain a real estate license. The 63-hour course is the only educational requirement.`,
      keyPoints: [
        'Must be at least 18 years old',
        '63-hour pre-license course required (Course I)',
        'Must pass state exam with 75% or higher',
        'No high school diploma required',
        'Course completion valid for 2 years',
        'License issued as inactive until activated with broker'
      ],
      examTips: [
        'Remember: 18 years old, NOT 21',
        'The pre-license course is 63 hours, not 60 or 72',
        '75% is the passing score for the state exam',
        'Course completion certificates expire after 2 years'
      ]
    },
    {
      id: '2.2',
      title: 'Broker License Requirements',
      content: `## Becoming a Florida Broker

A **broker** can operate independently, own a brokerage, and supervise sales associates. The requirements are more extensive than for sales associates.

### Basic Requirements (F.S. 475.17)

**Age**: Must be at least **18 years of age**

**Experience**: Must have held an **active sales associate license for at least 24 months** during the preceding 5 years

**Education**: Must complete a **72-hour broker pre-license course** (Course II)

**Examination**: Must pass the **broker state examination** with at least **75%**

### The 24-Month Experience Requirement

The experience must be:
- As an **active** (not inactive) sales associate
- Within the **5 years immediately preceding** the broker application
- Experience need not be continuous

### Alternative Experience

The FREC may accept equivalent experience, such as:
- Real estate experience in another state
- Experience as a licensed attorney handling real estate transactions

### Broker vs. Broker Associate

Once licensed as a broker, you have two options:

**Broker**: Operate your own brokerage, be responsible for all activities

**Broker Associate**: Work under another broker (similar to a sales associate but with broker-level license)

A broker associate has a broker's license but chooses to work under another broker's supervision rather than operating independently.`,
      keyPoints: [
        'Must have 24 months active sales associate experience in past 5 years',
        '72-hour broker pre-license course required (Course II)',
        'Must pass broker state exam with 75%',
        'Broker associate works under another broker',
        'Experience need not be continuous'
      ],
      examTips: [
        '24 months experience in the preceding 5 years is key',
        'Broker course is 72 hours (different from 63-hour sales course)',
        'Know the difference between broker and broker associate',
        'Experience must be as an ACTIVE licensee'
      ]
    },
    {
      id: '2.3',
      title: 'Post-Licensing Education',
      content: `## Post-Licensing Requirements (F.S. 475.183)

New licensees must complete **post-licensing education** before their first license renewal.

### Sales Associate Post-License

**Requirement**: **45 hours** of post-license education

**Deadline**: Must be completed **before the first renewal** (initial license period ends 18-24 months after issuance)

**Content**: Covers practical applications of real estate practice

**Consequence of Non-Completion**: License becomes **null and void** - NOT just inactive. The person would need to start the licensing process over.

### Broker Post-License

**Requirement**: **60 hours** of post-license education

**Deadline**: Must be completed before the first renewal as a broker

**Content**: Covers brokerage management, supervision, and advanced topics

### Key Points About Post-License

- Post-license education is **different** from continuing education
- It is a **one-time requirement** for new licensees
- The clock starts when the license is issued, not when activated
- There are **no extensions** for completing post-license education

### What Happens If You Don't Complete It?

If you fail to complete post-license education before your first renewal:
- Your license becomes **null and void**
- You are NOT eligible for a late renewal
- You must start over: take the pre-license course, pass the exam again`,
      keyPoints: [
        'Sales associates: 45 hours post-license education',
        'Brokers: 60 hours post-license education',
        'Must complete before FIRST renewal',
        'Failure to complete = license null and void',
        'This is a one-time requirement, not recurring'
      ],
      examTips: [
        '45 hours for sales associates, 60 for brokers',
        'Null and void is worse than inactive - must start over',
        'No extensions are granted for post-license',
        'Different from continuing education (CE)'
      ]
    },
    {
      id: '2.4',
      title: 'Continuing Education Requirements',
      content: `## Continuing Education (F.S. 475.182)

After completing post-license education, licensees must complete **continuing education (CE)** for each subsequent license renewal.

### Requirements for All Licensees

**Hours**: **14 hours** of continuing education every **2 years** (renewal cycle)

**Deadline**: Must be completed **before** the license expiration date

### Required Subjects

The 14 hours must include:

- **3 hours** of Core Law (legal updates, FREC rules)
- **3 hours** of Ethics
- **8 hours** of specialty education (electives)

### Distance Education

Continuing education may be completed through:
- Classroom instruction
- Online/distance education from approved providers
- Some courses may require proctored exams

### License Renewal Cycle

- Licenses expire on either **March 31** or **September 30**
- The specific date depends on when the license was issued
- Renewal period is every **2 years**

### Failure to Complete CE

If you don't complete CE by your renewal date:
- You may still renew as **involuntary inactive**
- You have **2 years** to complete CE and reactivate
- After 2 years, license becomes null and void`,
      keyPoints: [
        '14 hours of CE every 2 years for renewal',
        '3 hours Core Law + 3 hours Ethics + 8 hours electives',
        'Must complete BEFORE license expires',
        'Can renew as involuntary inactive if CE not complete',
        'Licenses expire March 31 or September 30'
      ],
      examTips: [
        'Remember: 14 hours total (3 + 3 + 8)',
        'CE is every 2 years, not every year',
        'Core Law and Ethics are mandatory portions',
        'Know the difference between inactive and null/void'
      ]
    },
    {
      id: '2.5',
      title: 'Mutual Recognition & Reciprocity',
      content: `## Mutual Recognition Agreements (F.S. 475.181)

Florida has agreements that allow licensed professionals from other states to obtain a Florida license more easily.

### Mutual Recognition vs. Reciprocity

**Mutual Recognition**: An agreement between states where each state recognizes the other's license. The applicant still must pass the **Florida-specific portion** of the exam.

**Reciprocity**: A more complete recognition where one state fully accepts another state's license. Florida does NOT have full reciprocity with any state.

### States with Mutual Recognition

Florida has mutual recognition agreements with several states, including:
- Alabama
- Arkansas
- Connecticut
- Georgia
- Illinois
- Mississippi
- Nebraska
- And others

### Requirements Under Mutual Recognition

Applicants from mutual recognition states must:

1. Hold an **active license** in their home state
2. Pass the **Florida law portion** of the state exam (40 questions)
3. Submit application and fees to DBPR
4. Meet Florida's age requirement (18)

They do **NOT** need to:
- Take Florida's pre-license course
- Pass the full state exam (only Florida law portion)

### No Mutual Recognition

Applicants from states without agreements must:
- Complete Florida's pre-license education
- Pass the entire state examination
- Meet all standard requirements`,
      keyPoints: [
        'Mutual recognition requires passing Florida law exam only',
        'Florida has NO full reciprocity with any state',
        'Must hold active license in mutual recognition state',
        'Applicant must still be at least 18 years old',
        'States without agreements require full licensing process'
      ],
      examTips: [
        'Mutual recognition ≠ reciprocity',
        'Florida law exam is 40 questions for mutual recognition',
        'The other state license must be ACTIVE',
        'Know that Florida has mutual recognition, NOT reciprocity'
      ]
    },
    {
      id: '2.6',
      title: 'Exemptions from Licensure',
      content: `## Who is Exempt from Licensing? (F.S. 475.011)

Certain individuals may perform real estate services without holding a Florida real estate license.

### Exempt Parties

**Owners**: Property owners selling, buying, or leasing their **own property** (not for others)

**Attorneys**: Licensed **Florida attorneys** acting within scope of their legal practice

**Court-Appointed Individuals**: Those appointed by a court (executors, administrators, guardians, receivers)

**Salaried Employees**: Employees of an owner who:
- Receive only salary (no commission or transaction-based compensation)
- Work exclusively for that one owner
- Handle only that owner's properties

**Government Employees**: Federal, state, or municipal employees acting in their official capacity

**Tenant Referral Services**: Certain tenant locator services that only provide listings (not negotiate)

### Important Distinctions

**Property Managers**: Generally **DO** require a license unless they are a salaried employee of the property owner

**On-site Apartment Managers**: May be exempt if salaried and working only for the property owner

**Timeshare Salespersons**: Require a real estate license OR a timeshare salesperson license

### What Requires a License

These activities require licensure when performed for others for compensation:
- Listing property for sale or lease
- Negotiating sales or leases
- Advertising property for others
- Collecting rent (unless salaried employee of owner)`,
      keyPoints: [
        'Owners selling their own property are exempt',
        'Florida attorneys acting in their legal capacity are exempt',
        'Salaried employees of owner (salary only, no commission) may be exempt',
        'Property managers generally need a license',
        'Court-appointed individuals are exempt'
      ],
      examTips: [
        'Commission vs. salary is key for employee exemption',
        'Attorneys must be Florida licensed to be exempt',
        'Owners can sell their own property without a license',
        'Property managers usually DO need a license'
      ]
    },
    {
      id: '2.7',
      title: 'License Status & Fees',
      content: `## License Status Categories

A Florida real estate license can be in several different statuses:

### Active

- License is current and in good standing
- Licensee is registered with a broker (or is a broker)
- Can perform real estate services

### Inactive

**Voluntary Inactive**: Licensee chose to go inactive
- Must still complete CE for renewal
- Can reactivate by registering with a broker

**Involuntary Inactive**: Automatically placed inactive
- Due to failure to renew or complete CE on time
- Has 2 years to correct and reactivate

### Null and Void

- License no longer exists
- Usually due to failure to complete post-license or not renewing for 2+ years
- Must start licensing process over from beginning

### Suspended or Revoked

- License taken away by FREC due to violations
- Suspended: temporary removal
- Revoked: permanent removal

## License Fees

### Initial License Fees
- Sales Associate Application: **$83.75** (includes initial license fee)
- Broker Application: **$115.75** (includes initial license fee)

### Renewal Fees
- Sales Associate Renewal: **$32** (active) / **$45** (inactive)
- Broker Renewal: **$32** (active) / **$45** (inactive)

### Other Fees
- Exam Fee: Set by testing provider (approximately $36.75)
- Late Renewal Fee: **$25** additional

### Important Notes

- Fees are subject to change - DBPR sets current fees
- Exam fees are paid directly to the testing provider
- License fees are separate from course fees`,
      keyPoints: [
        'Active = can practice; Inactive = cannot practice',
        'Voluntary inactive still requires CE renewal',
        'Involuntary inactive has 2 years to reactivate',
        'Null and void = must start over completely',
        'Sales associate initial fee approximately $83.75'
      ],
      examTips: [
        'Know the difference between inactive and null/void',
        'Suspended is temporary, revoked is permanent',
        'Involuntary inactive licensees have 2 years to reactivate',
        'Exam fees specific amounts may appear on exam'
      ]
    }
  ],

  flashcards: [
    // BASIC REQUIREMENTS
    {
      front: 'What is the minimum age to obtain a Florida real estate license?',
      back: '18 years old - age of majority in Florida (no exceptions)',
      difficulty: 'easy'
    },
    {
      front: 'What education level is required for Florida RE license?',
      back: 'High school diploma or GED equivalent',
      difficulty: 'easy'
    },
    {
      front: 'Must a license applicant be a U.S. citizen?',
      back: 'NO - must have a Social Security number, but citizenship is NOT required',
      difficulty: 'medium'
    },
    {
      front: 'What criminal history will disqualify an applicant?',
      back: 'Felony or crime of moral turpitude MAY disqualify. Must disclose ALL criminal history - FREC decides on a case-by-case basis.',
      difficulty: 'medium'
    },
    
    // PRE-LICENSE EDUCATION
    {
      front: 'How many hours is the sales associate pre-license course?',
      back: '63 hours (Course I or FREC I)',
      difficulty: 'easy'
    },
    {
      front: 'How many hours is the broker pre-license course?',
      back: '72 hours (Course II or FREC II)',
      difficulty: 'easy'
    },
    {
      front: 'How long is a pre-license course completion certificate valid?',
      back: '2 YEARS from completion date. Must pass exam within this time.',
      difficulty: 'medium'
    },
    {
      front: 'Can pre-license courses be taken online?',
      back: 'YES - can be classroom or distance education (online) from FREC-approved school',
      difficulty: 'easy'
    },
    
    // EXAM REQUIREMENTS
    {
      front: 'What is the passing score for the Florida real estate exam?',
      back: '75% (75 out of 100 questions)',
      difficulty: 'easy'
    },
    {
      front: 'How long is the state real estate exam?',
      back: '3.5 hours (210 minutes)',
      difficulty: 'medium'
    },
    {
      front: 'How many questions are on the sales associate exam?',
      back: '100 questions (need 75 correct to pass)',
      difficulty: 'easy'
    },
    {
      front: 'If you fail the exam, when can you retake it?',
      back: 'IMMEDIATELY - can reschedule as soon as another testing slot is available. Must repay exam fee.',
      difficulty: 'medium'
    },
    
    // BROKER REQUIREMENTS
    {
      front: 'How many months of active sales associate experience is required to become a broker?',
      back: '24 MONTHS within the preceding 5 YEARS',
      difficulty: 'medium'
    },
    {
      front: 'Can a broker work under another broker?',
      back: 'YES - called a BROKER ASSOCIATE. Has broker license but chooses to work under another broker.',
      difficulty: 'medium'
    },
    {
      front: 'What is the difference between a broker and a broker associate?',
      back: 'BROKER: Operates independently, can employ others\nBROKER ASSOCIATE: Has broker license but works under another broker',
      difficulty: 'medium'
    },
    
    // POST-LICENSE EDUCATION
    {
      front: 'How many hours of post-license education must a sales associate complete?',
      back: '45 hours before FIRST renewal (within initial 18-24 month license period)',
      difficulty: 'medium'
    },
    {
      front: 'How many hours of post-license education must a broker complete?',
      back: '60 hours before first renewal',
      difficulty: 'medium'
    },
    {
      front: 'What happens if you fail to complete post-license education?',
      back: 'License becomes NULL AND VOID. Must start completely over with pre-license course, exam, everything.',
      difficulty: 'hard'
    },
    {
      front: 'Why is post-license so important?',
      back: 'Failure = NULL AND VOID = Start over. It\'s not like CE where you can do late. POST-LICENSE IS CRITICAL!',
      difficulty: 'hard'
    },
    
    // CONTINUING EDUCATION
    {
      front: 'How many hours of continuing education are required for renewal?',
      back: '14 hours every 2 years:\n• 3 hours Core Law\n• 3 hours Ethics\n• 8 hours electives',
      difficulty: 'medium'
    },
    {
      front: 'When do Florida real estate licenses expire?',
      back: 'March 31 OR September 30, every 2 YEARS (depending on birth date)',
      difficulty: 'medium'
    },
    {
      front: 'What happens if you don\'t complete CE before expiration?',
      back: 'License becomes INVOLUNTARY INACTIVE. Must complete CE to reactivate. NOT null and void like post-license!',
      difficulty: 'hard'
    },
    
    // LICENSE STATUS
    {
      front: 'What are the four license statuses?',
      back: '1. ACTIVE (current, working)\n2. VOLUNTARY INACTIVE (not working)\n3. INVOLUNTARY INACTIVE (CE not done)\n4. NULL AND VOID (post-license not done)',
      difficulty: 'hard'
    },
    {
      front: 'Can an inactive licensee practice real estate?',
      back: 'NO - must be on ACTIVE status with an employing broker to practice. Inactive = cannot work.',
      difficulty: 'easy'
    },
    {
      front: 'How do you change from inactive to active status?',
      back: 'Complete any missing CE requirements AND register with an employing broker',
      difficulty: 'medium'
    },
    
    // MUTUAL RECOGNITION
    {
      front: 'What is the difference between mutual recognition and reciprocity?',
      back: 'MUTUAL RECOGNITION: Must pass FL law exam\nRECIPROCITY: Full acceptance of another state\'s license (FL has NO reciprocity)',
      difficulty: 'hard'
    },
    {
      front: 'Which states have mutual recognition agreements with Florida?',
      back: 'About 10 states including Alabama, Arkansas, Connecticut, Georgia, Mississippi, Nebraska, Oklahoma, Tennessee, and others',
      difficulty: 'hard'
    },
    {
      front: 'What must out-of-state licensees do under mutual recognition?',
      back: 'Pass the FLORIDA LAW portion of the exam (40 questions). Do NOT have to take full 100-question exam.',
      difficulty: 'medium'
    },
    
    // EXEMPTIONS
    {
      front: 'Can a property owner sell their own property without a license?',
      back: 'YES - owners are EXEMPT when dealing with their own property',
      difficulty: 'easy'
    },
    {
      front: 'Do attorneys need a real estate license to handle real estate transactions?',
      back: 'NO - licensed attorneys are EXEMPT when acting in their capacity as attorneys',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'Maria is 17 years old and wants to obtain her Florida real estate license. Which statement is TRUE?',
      options: [
        'She can obtain her license with parental consent',
        'She must wait until she is 18 years old',
        'She can take the pre-license course now but must be 21 to take the exam',
        'She can obtain a provisional license until age 18'
      ],
      correct: 1,
      explanation: 'Florida requires all real estate license applicants to be at least 18 years old. There are no exceptions for parental consent or provisional licenses.'
    },
    {
      question: 'How many hours of pre-license education must a broker applicant complete?',
      options: [
        '45 hours',
        '63 hours',
        '72 hours',
        '90 hours'
      ],
      correct: 2,
      explanation: 'Broker applicants must complete 72 hours of broker pre-license education (Course II). Sales associates complete 63 hours (Course I).'
    },
    {
      question: 'A sales associate has been licensed for 18 months and has not completed post-license education. The license is up for renewal. What will happen?',
      options: [
        'The license will be renewed as inactive',
        'The license will become null and void',
        'The licensee will receive a 6-month extension',
        'The license will be renewed with a penalty fee'
      ],
      correct: 1,
      explanation: 'Failure to complete post-license education before the first renewal causes the license to become null and void. The person must start the entire licensing process over.'
    },
    {
      question: 'Which of the following is required for license renewal every 2 years?',
      options: [
        '45 hours of post-license education',
        '14 hours of continuing education',
        '63 hours of pre-license education',
        '24 months of active experience'
      ],
      correct: 1,
      explanation: 'After completing post-license education, licensees must complete 14 hours of continuing education every 2 years for renewal. The 14 hours includes 3 hours Core Law, 3 hours Ethics, and 8 hours of electives.'
    },
    {
      question: 'A licensee from Georgia wants to obtain a Florida license through mutual recognition. What must they do?',
      options: [
        'Simply apply - no exam required',
        'Complete Florida\'s 63-hour pre-license course',
        'Pass the Florida law portion of the state exam',
        'Work under a Florida broker for 1 year first'
      ],
      correct: 2,
      explanation: 'Under mutual recognition, applicants from participating states must pass only the Florida law portion of the exam. They do not need to take Florida\'s pre-license course or pass the general portion.'
    },
    {
      question: 'An attorney wants to help a client sell their home. Does the attorney need a real estate license?',
      options: [
        'Yes, all real estate transactions require a licensed agent',
        'No, if the attorney is licensed in Florida and acting within scope of their legal practice',
        'Yes, unless the attorney also holds a broker license',
        'No, attorneys are exempt from all real estate regulations'
      ],
      correct: 1,
      explanation: 'Florida licensed attorneys are exempt from real estate licensure requirements when acting within the scope of their legal practice. However, they must be licensed in Florida specifically.'
    },
    {
      question: 'Tom is a salaried employee of a property management company. He shows apartments and collects rent. Does he need a real estate license?',
      options: [
        'No, because he is a salaried employee',
        'Yes, because property management requires a license',
        'No, only if he works for the property owner, not a management company',
        'It depends on whether he receives any commission or transaction-based pay'
      ],
      correct: 3,
      explanation: 'The exemption for salaried employees applies only to employees of the property OWNER who receive salary only (no commission). An employee of a management company would generally need a license, and the key factor is whether compensation is salary-only or includes transaction-based pay.'
    },
    {
      question: 'What is the minimum passing score on the Florida real estate licensing exam?',
      options: [
        '70%',
        '75%',
        '80%',
        '85%'
      ],
      correct: 1,
      explanation: 'The minimum passing score on the Florida real estate exam is 75%. This applies to both sales associate and broker exams.'
    },
    {
      question: 'How long do you have after passing the state exam to activate your license with a broker?',
      options: [
        '6 months',
        '1 year',
        '2 years',
        '5 years'
      ],
      correct: 2,
      explanation: 'After passing the exam, you have 2 years to become active with a broker. After 2 years, the exam results expire and you would need to retake the exam.'
    },
    {
      question: 'A broker applicant has been a sales associate for 30 months but was inactive for 8 of those months. Does she qualify for a broker license?',
      options: [
        'Yes, she has more than 24 months total experience',
        'No, she only has 22 months of active experience',
        'Yes, inactive time counts toward the 24 months',
        'No, the experience must be continuous'
      ],
      correct: 1,
      explanation: 'Broker applicants need 24 months of ACTIVE experience in the preceding 5 years. This applicant has only 22 months of active experience (30 - 8 = 22). Inactive time does not count.'
    },
    {
      question: 'Which statement about continuing education is TRUE?',
      options: [
        'It must include 6 hours of Core Law',
        'It totals 14 hours including 3 hours Ethics',
        'It is required before the first renewal',
        'It must be completed every year'
      ],
      correct: 1,
      explanation: 'CE is 14 hours total: 3 hours Core Law + 3 hours Ethics + 8 hours electives. It\'s required every 2 years (not annually), and post-license education (not CE) is required before the first renewal.'
    },
    {
      question: 'A license that has become "null and void" means:',
      options: [
        'The license is temporarily suspended',
        'The license is inactive and can be renewed with a fee',
        'The license no longer exists and the person must start over',
        'The license has been revoked due to violations'
      ],
      correct: 2,
      explanation: 'A null and void license no longer exists. The person must complete the entire licensing process again, including pre-license education and the state exam. This is different from suspended, inactive, or revoked status.'
    },
    {
      question: 'Florida has what type of licensing agreement with other states?',
      options: [
        'Full reciprocity with all states',
        'Reciprocity with bordering states only',
        'Mutual recognition with certain states',
        'No agreements with any states'
      ],
      correct: 2,
      explanation: 'Florida has mutual recognition agreements with certain states. This is NOT full reciprocity. Under mutual recognition, applicants must still pass the Florida law exam.'
    },
    {
      question: 'What is the main difference between a broker and a broker associate?',
      options: [
        'A broker associate has less experience',
        'A broker associate works under another broker',
        'A broker associate can only work part-time',
        'There is no difference in their authority'
      ],
      correct: 1,
      explanation: 'A broker associate holds a broker\'s license but chooses to work under another broker\'s supervision rather than operating independently. They have the same qualifications as a broker.'
    },
    {
      question: 'An involuntary inactive licensee has how long to reactivate before the license becomes null and void?',
      options: [
        '6 months',
        '1 year',
        '2 years',
        '5 years'
      ],
      correct: 2,
      explanation: 'An involuntary inactive licensee has 2 years to complete the required CE and reactivate. After 2 years, the license becomes null and void.'
    }
  ],

  caseStudies: [
    {
      id: 'ch2-case1',
      title: 'The Unlicensed Property Manager',
      scenario: 'Sandra owns a property management company. She hires Tom, who is not licensed, to manage a 50-unit apartment complex owned by one of her clients. Tom shows apartments, negotiates lease terms, and collects rent. He is paid a salary plus a $50 bonus for each new lease he signs.',
      question: 'Is Tom operating legally without a license?',
      answer: 'No, Tom needs a real estate license. The exemption for salaried employees only applies to employees of the property OWNER (not a management company). Additionally, Tom receives transaction-based compensation ($50 per lease), which disqualifies him from the salaried employee exemption. He is performing licensed activities for compensation and must be licensed.',
      examRelevance: 'This tests understanding of license exemptions. Key points: (1) The exemption is for employees of OWNERS, not management companies; (2) Any commission or transaction-based pay requires a license.'
    }
  ],

  summary: `Chapter 2 covers the requirements for obtaining and maintaining a Florida real estate license. 

**Sales Associate Requirements**: 18 years old, 63-hour pre-license course, pass state exam with 75%, be of good character.

**Broker Requirements**: Same as above plus 24 months of active sales associate experience in the past 5 years and a 72-hour broker course.

**Post-License Education**: 45 hours for sales associates, 60 hours for brokers, must be completed before FIRST renewal or license becomes null and void.

**Continuing Education**: 14 hours every 2 years (3 Core Law + 3 Ethics + 8 electives) for all renewals after post-license.

**Mutual Recognition**: Florida has agreements with certain states allowing them to obtain a Florida license by passing only the Florida law exam portion.

**Exemptions**: Property owners, Florida attorneys, salaried employees of owners (no commission), and court-appointed individuals are exempt from licensure.

**License Status**: Active (can practice), Inactive (cannot practice), Null and Void (must start over), Suspended/Revoked (taken by FREC).`
};

export default CHAPTER_2;
