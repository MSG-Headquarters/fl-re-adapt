/**
 * Chapter 4: Authorized Relationships
 * 
 * Covers 7% of the Florida Real Estate Exam
 * Focus: Brokerage relationships, agency duties, and disclosure requirements
 */

export const CHAPTER_4 = {
  id: 4,
  title: 'Authorized Relationships',
  subtitle: 'Brokerage Relationships in Florida',
  examPercentage: 7,
  requiredTimeMinutes: 210, // 3.5 hours minimum
  color: '#10B981', // Emerald
  icon: 'Handshake',
  
  objectives: [
    'Understand the types of brokerage relationships authorized in Florida',
    'Explain the duties owed in each type of relationship',
    'Describe the required disclosures for brokerage relationships',
    'Distinguish between single agent, transaction broker, and no brokerage relationship',
    'Understand when and how to transition between relationship types',
    'Identify the disclosure requirements and timing',
    'Explain designated sales associate relationships'
  ],

  statutes: [
    { code: '475.278', title: 'Authorized Brokerage Relationships', summary: 'Defines the types of relationships and duties' },
    { code: '475.2755', title: 'Brokerage Relationship Disclosure', summary: 'Requirements for disclosure to customers and clients' },
    { code: '475.279', title: 'Transaction Broker Relationship', summary: 'Default relationship and duties' },
    { code: '475.25', title: 'Discipline', summary: 'Violations related to brokerage relationships' }
  ],

  sections: [
    {
      id: '4.1',
      title: 'Overview of Brokerage Relationships',
      content: `## Understanding Brokerage Relationships in Florida

Florida law authorizes specific types of relationships between real estate licensees and their customers or clients.

### The Three Authorized Relationships

**1. Transaction Broker** (Default relationship)
- Provides limited representation
- Does NOT represent either party as an advocate
- Most common relationship in Florida

**2. Single Agent**
- Full fiduciary representation
- Represents the buyer OR seller (not both)
- Highest level of duties owed

**3. No Brokerage Relationship**
- No representation at all
- Limited duties (dealing honestly, disclosing known facts)
- Customer, not client

### Key Terminology

**Client**: A person who has entered into a brokerage relationship (single agent or transaction broker)

**Customer**: A person who receives real estate services but has NOT entered into a brokerage relationship

**Fiduciary**: A relationship of trust and confidence requiring the highest level of care

### Important Concepts

- **Transaction broker is the DEFAULT** in Florida
- Licensees must disclose the relationship type
- The relationship can change during a transaction (with proper disclosure)
- All relationships require honest dealing and disclosure of known material facts`,
      keyPoints: [
        'Three authorized relationships: Transaction Broker, Single Agent, No Brokerage',
        'Transaction broker is the DEFAULT relationship in Florida',
        'Single agent provides full fiduciary duties',
        'Client = has brokerage relationship; Customer = no representation',
        'All relationships require honest dealing and material fact disclosure'
      ],
      examTips: [
        'Transaction broker is the DEFAULT - memorize this!',
        'Know the difference between client and customer',
        'Single agent has the MOST duties (fiduciary)',
        'No brokerage = fewest duties but still must be honest'
      ]
    },
    {
      id: '4.2',
      title: 'Single Agent Relationship',
      content: `## Single Agent Duties (F.S. 475.278)

A **single agent** represents either the buyer OR the seller, but never both in the same transaction. This is a full fiduciary relationship.

### The 9 Single Agent Duties

A single agent owes the principal (client) these duties:

**1. Dealing honestly and fairly**

**2. Loyalty** - Placing the principal's interests above all others, including the licensee's own

**3. Confidentiality** - Not disclosing information that could harm the principal's negotiating position

**4. Obedience** - Following lawful instructions

**5. Full disclosure** - Disclosing all known facts that materially affect the value of the property

**6. Accounting** - Properly handling all funds and property

**7. Skill, care, and diligence** - Acting competently

**8. Presenting all offers and counteroffers** - Timely presentation, even after a contract

**9. Disclosing all known facts that materially affect the value of residential property**

### Confidentiality Details

Confidential information includes:
- The principal is willing to pay more or accept less
- The principal's motivation for buying/selling
- The principal will agree to different financing terms
- Any information that could weaken negotiating position

### Confidentiality Survives

Confidentiality survives the transaction and the relationship. Even after the deal closes or the relationship ends, the licensee must protect confidential information **forever**.

### Important Limitations

- A licensee CANNOT be a single agent for BOTH buyer and seller in the same transaction
- To work with both parties, must transition to transaction broker (with consent)`,
      keyPoints: [
        '9 duties for single agents (memorize these!)',
        'Loyalty = principal\'s interests above all others',
        'Confidentiality survives the relationship FOREVER',
        'Cannot be single agent for both parties',
        'Must present ALL offers, even after contract accepted'
      ],
      examTips: [
        'Single agent has 9 duties - know them all',
        'Confidentiality SURVIVES the transaction',
        'Loyalty means principal\'s interests come FIRST',
        'Cannot be dual agent in Florida - must transition to transaction broker'
      ]
    },
    {
      id: '4.3',
      title: 'Transaction Broker Relationship',
      content: `## Transaction Broker Duties (F.S. 475.278)

A **transaction broker** provides limited representation to a buyer, seller, or both. This is the DEFAULT relationship in Florida.

### The 7 Transaction Broker Duties

**1. Dealing honestly and fairly**

**2. Accounting** - Properly handling funds and property

**3. Skill, care, and diligence**

**4. Disclosing all known facts that materially affect the value of residential property** (not confidential information)

**5. Presenting all offers and counteroffers** (unless directed otherwise in writing)

**6. Limited confidentiality** - Protecting certain information unless disclosure is required by law or authorized

**7. Any additional duties agreed to in writing**

### What Transaction Brokers DON'T Owe

Transaction brokers do NOT owe:
- **Loyalty** (can work with both parties)
- **Full obedience** (limited to legal, ethical requests)
- **Full confidentiality** (only limited confidentiality)

### Limited Confidentiality Explained

Transaction broker cannot disclose:
- That the seller will accept less than asking price
- That the buyer will pay more than offered
- Motivation of either party
- That one party will agree to different financing terms

This information is protected UNLESS:
- Disclosure is required by law
- The party authorizes disclosure in writing

### Default Relationship

If no other relationship is established, the licensee is automatically a **transaction broker**. This is why disclosure is so important.`,
      keyPoints: [
        'Transaction broker has 7 duties (fewer than single agent)',
        'DEFAULT relationship in Florida',
        'No loyalty duty - can work with both parties',
        'Limited confidentiality (not full confidentiality)',
        'Cannot disclose price/terms flexibility or motivation'
      ],
      examTips: [
        '7 duties for transaction broker vs. 9 for single agent',
        'Transaction broker is DEFAULT - if no disclosure, this applies',
        'NO loyalty duty for transaction brokers',
        'Limited confidentiality still protects price/motivation info'
      ]
    },
    {
      id: '4.4',
      title: 'No Brokerage Relationship',
      content: `## No Brokerage Relationship (F.S. 475.278)

In a **no brokerage relationship**, the licensee provides services but does NOT represent the customer.

### When This Occurs

- Licensee chooses not to enter a brokerage relationship
- Customer declines representation
- Licensee works with a party they don't represent (e.g., showing a buyer the licensee's own listing)

### Duties in No Brokerage Relationship

Even without representation, the licensee MUST:

**1. Deal honestly and fairly**

**2. Disclose all known facts that materially affect the value of residential real property**

These duties are the MINIMUM required by law.

### What Is NOT Owed

- Loyalty
- Confidentiality
- Obedience
- Full disclosure
- Skill, care, diligence (beyond basic honesty)
- Accounting (unless handling money)

### The Customer

A person in a no brokerage relationship is called a **customer**, NOT a client. The licensee:
- Can provide factual information
- Can write contracts
- Cannot advocate or negotiate on the customer's behalf
- Cannot keep information confidential

### Disclosure Requirement

Before providing services, the licensee must give written disclosure that:
- No brokerage relationship exists
- The person's interests are NOT being represented
- They may seek representation elsewhere`,
      keyPoints: [
        'Only 2 duties: dealing honestly and disclosing material facts',
        'Person is a CUSTOMER, not a client',
        'No loyalty, confidentiality, or obedience owed',
        'Must disclose lack of representation in writing',
        'Still must disclose known material facts affecting value'
      ],
      examTips: [
        'No brokerage = MINIMUM duties (just honesty + material facts)',
        'Customer vs. Client distinction is important',
        'Written disclosure required BEFORE providing services',
        'Cannot keep information confidential for a customer'
      ]
    },
    {
      id: '4.5',
      title: 'Disclosure Requirements',
      content: `## Brokerage Relationship Disclosure (F.S. 475.2755)

Florida law requires specific disclosures regarding brokerage relationships.

### When to Disclose

**Single Agent**: Disclosure must be made **before, or at the time of** entering into a listing agreement, buyer brokerage agreement, or before showing property.

**Transaction Broker**: Disclosure must be made **before, or at the time of** entering into a listing agreement, buyer brokerage agreement, or before showing property.

**No Brokerage Relationship**: Disclosure must be made **before** the licensee provides any real estate services.

### Form of Disclosure

All disclosures must be:
- In **writing**
- Contain the required statutory language
- **Signed** by the party receiving the disclosure (for single agent and transition to transaction broker)

### Transaction Broker Disclosure Exception

For transaction broker relationships:
- Written notice must be given
- The notice does NOT need to be signed by the party
- This is because transaction broker is the DEFAULT

### What Must Be Disclosed

Each disclosure form must include:
- The duties owed under that relationship type
- The nature of the relationship
- That the party can seek representation elsewhere

### Retaining Disclosures

Licensees must retain copies of all signed disclosure documents for **5 years**.`,
      keyPoints: [
        'All disclosures must be in WRITING',
        'Single agent disclosure requires signature',
        'Transaction broker disclosure does NOT require signature',
        'Disclose BEFORE or at time of listing/showing/agreement',
        'Retain disclosure documents for 5 years'
      ],
      examTips: [
        'Transaction broker disclosure = NO signature required',
        'Single agent disclosure = signature required',
        'Timing: before or at time of entering relationship',
        '5 years retention for all disclosure documents'
      ]
    },
    {
      id: '4.6',
      title: 'Transitioning Between Relationships',
      content: `## Changing Brokerage Relationships

A licensee may need to change the type of brokerage relationship during a transaction.

### Common Transition

**Single Agent → Transaction Broker**

This occurs when a single agent wants to work with both the buyer and seller. Florida does NOT allow dual agency, so the licensee must:

1. Obtain **written consent** from their current principal (client)
2. Provide the **Consent to Transition** disclosure
3. The principal must **sign** the consent form
4. Then provide transaction broker disclosure to both parties

### Consent to Transition Requirements

The Consent to Transition form must:
- Inform the principal of the change in relationship
- Explain the duties under the new relationship
- Explain that the principal is giving up single agent representation
- Be **signed** by the principal

### What Cannot Be Disclosed After Transition

Even after transitioning to transaction broker, the licensee:
- Cannot disclose confidential information learned during single agent relationship
- Confidentiality from single agent relationship survives

### When Consent Is NOT Needed

Written consent is not required to change from:
- Transaction broker to no brokerage relationship
- No brokerage relationship to transaction broker

### Practical Example

Broker Amy represents Seller Sam as a single agent. Buyer Bob calls about Sam's property. Amy cannot represent Bob as a single agent too. Amy can:
1. Refer Bob to another agent
2. Work with Bob as transaction broker (after getting Sam's consent to transition)
3. Work with Bob in no brokerage relationship`,
      keyPoints: [
        'Single agent to transaction broker requires written consent',
        'Consent form must be signed by the principal',
        'Confidential info from single agent survives the transition',
        'Florida prohibits dual agency - must transition instead',
        'No consent needed for changes not involving single agent'
      ],
      examTips: [
        'Transition from single agent ALWAYS requires written consent',
        'Confidentiality SURVIVES even after transition',
        'Florida has NO dual agency - this is a key distinction',
        'Only transition FROM single agent needs consent'
      ]
    },
    {
      id: '4.7',
      title: 'Designated Sales Associates',
      content: `## Designated Sales Associate (F.S. 475.278)

A **designated sales associate** arrangement allows a broker to designate different sales associates to represent the buyer and seller as single agents in the same transaction.

### Requirements

This arrangement is only available when:

1. **Nonresidential transaction** - Property must be nonresidential (commercial, industrial, etc.), OR

2. **Residential over $1 million** - The price is $1 million or more for residential property

### How It Works

- The **broker** makes the designation
- One sales associate represents the buyer as a single agent
- Another sales associate represents the seller as a single agent
- Both parties must give **written consent**
- The broker acts as a **transaction broker** in the overall transaction

### Purpose

This allows sophisticated parties (commercial or luxury residential) to have full single agent representation on both sides, which is otherwise prohibited.

### Broker's Role

The broker:
- Designates the sales associates
- Does NOT advocate for either party
- Acts as transaction broker
- Supervises both designated sales associates
- Cannot reveal confidential information to either side

### Limitations

- Must be nonresidential OR residential $1 million+
- Both parties must consent in writing
- Each designated sales associate owes single agent duties to their client
- The broker is neutral (transaction broker)`,
      keyPoints: [
        'Only for nonresidential OR residential $1 million+',
        'Broker designates separate sales associates for each party',
        'Each sales associate is single agent for their client',
        'Broker acts as transaction broker (neutral)',
        'Both parties must give written consent'
      ],
      examTips: [
        '$1 million threshold for residential properties',
        'Nonresidential = any commercial/industrial property',
        'BROKER designates (not sales associates themselves)',
        'Each designated SA has full single agent duties'
      ]
    },
    {
      id: '4.8',
      title: 'Material Facts and Disclosure Duties',
      content: `## Material Fact Disclosure

All licensees, regardless of relationship type, must disclose **known material facts** that affect the value of residential property.

### What Is a Material Fact?

A **material fact** is any fact that:
- Could affect a reasonable person's decision to buy
- Affects the value or desirability of the property
- A party would want to know before making a decision

### Examples of Material Facts

**Property Condition**:
- Structural defects
- Roof problems
- Plumbing or electrical issues
- Termite damage or infestation
- Mold or water damage

**External Factors**:
- Zoning changes
- Planned road construction
- Environmental hazards nearby
- Flood zone status

**Legal Issues**:
- Liens on property
- Boundary disputes
- Pending litigation
- HOA violations

### What Is NOT Required to Disclose

Florida law provides that licensees are NOT required to disclose:
- That a property was the site of a death (including homicide, suicide)
- That a previous occupant had AIDS or HIV
- That the property is "stigmatized" for psychological reasons

### "As Is" Contracts

Even in an "as is" sale:
- Seller must still disclose known material defects
- Licensee must still disclose known material facts
- "As is" only means seller won't make repairs, not that defects can be hidden`,
      keyPoints: [
        'ALL licensees must disclose known material facts',
        'Material fact = affects value or buyer\'s decision',
        'Deaths and HIV status are NOT required disclosures',
        '"As is" does NOT eliminate disclosure requirements',
        'Applies to residential property specifically'
      ],
      examTips: [
        'Must disclose defects even in "as is" sales',
        'Deaths (murder, suicide) do NOT need to be disclosed',
        'HIV/AIDS status of occupant = NOT a material fact',
        'Only KNOWN facts must be disclosed (no investigation required)'
      ]
    }
  ],

  flashcards: [
    // DEFAULT RELATIONSHIP
    {
      front: 'What is the DEFAULT brokerage relationship in Florida?',
      back: 'TRANSACTION BROKER - This has been the default since 1997. Assumed unless otherwise disclosed.',
      difficulty: 'easy'
    },
    {
      front: 'When did transaction broker become the default in Florida?',
      back: '1997 - Prior to this, single agency was the norm.',
      difficulty: 'medium'
    },
    
    // SINGLE AGENT
    {
      front: 'How many duties does a SINGLE AGENT owe?',
      back: '9 DUTIES:\n1. Deal honestly/fairly\n2. Loyalty\n3. Confidentiality\n4. Obedience\n5. Full disclosure\n6. Accounting\n7. Skill/care/diligence\n8. Present all offers\n9. Disclose all known facts',
      difficulty: 'hard'
    },
    {
      front: 'What is OLD CAR?',
      back: 'Memory aid for single agent FIDUCIARY duties:\n• Obedience\n• Loyalty\n• Disclosure\n• Confidentiality\n• Accountability\n• Reasonable skill/care',
      difficulty: 'medium'
    },
    {
      front: 'Does a single agent disclosure require a signature?',
      back: 'YES - Single agent disclosure REQUIRES signature BEFORE or AT TIME of representation',
      difficulty: 'medium'
    },
    {
      front: 'When must single agent disclosure be given?',
      back: 'BEFORE or AT THE TIME of entering into a listing or showing property (before substantive discussions)',
      difficulty: 'medium'
    },
    {
      front: 'How long does confidentiality survive a single agent relationship?',
      back: 'FOREVER - Confidentiality survives the transaction and the relationship indefinitely',
      difficulty: 'medium'
    },
    
    // TRANSACTION BROKER
    {
      front: 'How many duties does a TRANSACTION BROKER owe?',
      back: '7 DUTIES:\n1. Deal honestly/fairly\n2. Account for funds\n3. Skill/care/diligence\n4. Disclose known facts\n5. Present all offers\n6. LIMITED confidentiality\n7. Exercise reasonable skill',
      difficulty: 'hard'
    },
    {
      front: 'Does a transaction broker owe a duty of LOYALTY?',
      back: 'NO - Transaction brokers do NOT owe loyalty. This allows them to work with both buyer and seller.',
      difficulty: 'medium'
    },
    {
      front: 'Does the transaction broker disclosure require a signature?',
      back: 'NO - Transaction broker disclosure does NOT require a signature (just must be given)',
      difficulty: 'hard'
    },
    {
      front: 'What is "limited confidentiality" for a transaction broker?',
      back: 'CANNOT disclose:\n• Seller will accept less\n• Buyer will pay more\n• Motivation of parties\nUNLESS required by law or authorized in writing',
      difficulty: 'hard'
    },
    {
      front: 'Can a transaction broker represent both buyer and seller?',
      back: 'YES - Because they owe no loyalty, they can facilitate transaction for BOTH parties',
      difficulty: 'easy'
    },
    
    // NO BROKERAGE RELATIONSHIP
    {
      front: 'What duties are owed in a NO BROKERAGE relationship?',
      back: 'Only 2 DUTIES:\n1. Deal honestly and fairly\n2. Disclose known material facts affecting property value',
      difficulty: 'medium'
    },
    {
      front: 'What is a "customer" in real estate?',
      back: 'A person in a NO BROKERAGE relationship - receives minimal duties (just honesty and disclosure of material facts)',
      difficulty: 'medium'
    },
    {
      front: 'What is the difference between a CLIENT and a CUSTOMER?',
      back: 'CLIENT = Entered brokerage relationship (single agent or transaction broker)\nCUSTOMER = No brokerage relationship (minimal duties owed)',
      difficulty: 'medium'
    },
    
    // TRANSITION
    {
      front: 'What is required to transition from single agent to transaction broker?',
      back: 'WRITTEN CONSENT signed by the principal (Consent to Transition form)',
      difficulty: 'medium'
    },
    {
      front: 'Can a single agent transition to transaction broker without consent?',
      back: 'NO - Must have WRITTEN consent from the party being represented. Otherwise, must decline the other representation.',
      difficulty: 'hard'
    },
    {
      front: 'What happens to confidentiality after transitioning from single agent to transaction broker?',
      back: 'Confidential information from single agent period is STILL protected - cannot be disclosed to other party',
      difficulty: 'hard'
    },
    
    // DESIGNATED SALES ASSOCIATES
    {
      front: 'When can designated sales associates be used?',
      back: 'NONRESIDENTIAL transactions OR RESIDENTIAL transactions of $1 MILLION or more',
      difficulty: 'hard'
    },
    {
      front: 'In a designated sales associate arrangement, what role does the broker play?',
      back: 'BROKER = Transaction broker (neutral)\nDESIGNATED SAs = Single agents for their respective parties',
      difficulty: 'hard'
    },
    {
      front: 'What is the purpose of designated sales associates?',
      back: 'Allows single agency representation on BOTH sides of a transaction within same brokerage for larger deals',
      difficulty: 'medium'
    },
    
    // DISCLOSURE RULES
    {
      front: 'Is a licensee required to disclose that someone DIED in the property?',
      back: 'NO - Deaths (including homicide, suicide, AIDS/HIV) are NOT required disclosures',
      difficulty: 'medium'
    },
    {
      front: 'Must a licensee disclose a property is in a FLOOD ZONE?',
      back: 'YES - Flood zone status IS a required disclosure (known material fact affecting value)',
      difficulty: 'medium'
    },
    {
      front: 'What are "material facts" that must be disclosed?',
      back: 'Facts that affect the VALUE or DESIRABILITY of property: structural issues, liens, zoning violations, environmental hazards, etc.',
      difficulty: 'medium'
    },
    
    // RETENTION & DOCUMENTATION
    {
      front: 'How long must disclosure documents be retained?',
      back: '5 YEARS',
      difficulty: 'easy'
    },
    {
      front: 'Who is responsible for retaining disclosure documents?',
      back: 'The BROKER must retain all disclosure documents for 5 years',
      difficulty: 'medium'
    },
    
    // COMPARISON
    {
      front: 'Compare duties: Single Agent vs Transaction Broker vs No Brokerage',
      back: 'SINGLE AGENT: 9 duties (full fiduciary, loyalty)\nTRANSACTION BROKER: 7 duties (no loyalty, limited confidentiality)\nNO BROKERAGE: 2 duties (honesty & disclose facts)',
      difficulty: 'hard'
    },
    {
      front: 'Which relationship provides the MOST protection to a party?',
      back: 'SINGLE AGENT - Full fiduciary relationship with loyalty, full confidentiality, and obedience',
      difficulty: 'easy'
    },
    {
      front: 'Which relationship requires a SIGNATURE?',
      back: 'SINGLE AGENT disclosure requires signature\nTRANSACTION BROKER does NOT require signature',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'What is the default brokerage relationship in Florida if no other relationship is established?',
      options: [
        'Single agent',
        'Transaction broker',
        'No brokerage relationship',
        'Dual agency'
      ],
      correct: 1,
      explanation: 'Transaction broker is the DEFAULT relationship in Florida. If no disclosure or agreement establishes another relationship, the licensee is automatically a transaction broker.'
    },
    {
      question: 'Which duty is owed by a single agent but NOT by a transaction broker?',
      options: [
        'Dealing honestly and fairly',
        'Accounting for funds',
        'Loyalty',
        'Presenting all offers'
      ],
      correct: 2,
      explanation: 'Loyalty is one of the 9 single agent duties but is NOT owed by transaction brokers. Transaction brokers can work with both parties precisely because they don\'t owe loyalty to either.'
    },
    {
      question: 'A single agent\'s duty of confidentiality:',
      options: [
        'Ends when the transaction closes',
        'Ends when the relationship ends',
        'Survives the transaction forever',
        'Lasts for 5 years after the transaction'
      ],
      correct: 2,
      explanation: 'Confidentiality survives the transaction and the relationship forever. Even after the deal closes or the relationship ends, the licensee must protect the former client\'s confidential information indefinitely.'
    },
    {
      question: 'Which statement about transaction broker disclosure is TRUE?',
      options: [
        'It must be signed by the party receiving it',
        'It does not need to be signed by the party',
        'It only needs to be verbal',
        'It is not required since it\'s the default'
      ],
      correct: 1,
      explanation: 'Transaction broker disclosure must be in writing but does NOT require a signature. Single agent disclosure, however, does require a signature.'
    },
    {
      question: 'To transition from single agent to transaction broker, what is required?',
      options: [
        'Verbal consent from the principal',
        'Written consent signed by the principal',
        'Approval from FREC',
        'No consent is needed'
      ],
      correct: 1,
      explanation: 'Transitioning from single agent to transaction broker requires written consent signed by the principal (the Consent to Transition form). This ensures the client understands they are giving up full representation.'
    },
    {
      question: 'In a no brokerage relationship, the licensee must:',
      options: [
        'Provide full representation and advocacy',
        'Keep all information confidential',
        'Deal honestly and fairly, and disclose known material facts',
        'Represent the person\'s best interests'
      ],
      correct: 2,
      explanation: 'In a no brokerage relationship, the licensee has only two duties: dealing honestly and fairly, and disclosing known material facts that affect property value. There is no representation or advocacy.'
    },
    {
      question: 'Designated sales associates may be used in which situation?',
      options: [
        'Any residential transaction',
        'Only commercial transactions',
        'Nonresidential transactions or residential transactions of $1 million or more',
        'Only when both parties are represented by attorneys'
      ],
      correct: 2,
      explanation: 'Designated sales associates can only be used in nonresidential transactions OR residential transactions where the price is $1 million or more. This allows sophisticated parties to have single agent representation on both sides.'
    },
    {
      question: 'A transaction broker can disclose which of the following?',
      options: [
        'That the seller will accept less than the asking price',
        'The buyer\'s maximum budget',
        'Known material facts affecting property value',
        'The seller\'s motivation for selling'
      ],
      correct: 2,
      explanation: 'Transaction brokers must disclose known material facts affecting property value. They cannot disclose price flexibility or motivation of the parties - this is protected under limited confidentiality.'
    },
    {
      question: 'Which of the following is NOT required to be disclosed by a licensee?',
      options: [
        'A leaky roof that the seller mentioned',
        'That a murder occurred in the property',
        'Known termite damage',
        'That the property is in a flood zone'
      ],
      correct: 1,
      explanation: 'Florida law specifically exempts disclosure of deaths on the property, including homicide, suicide, or natural death. However, property defects, termite damage, and flood zone status must be disclosed.'
    },
    {
      question: 'A person who receives real estate services but has not entered into a brokerage relationship is called a:',
      options: [
        'Client',
        'Principal',
        'Customer',
        'Agent'
      ],
      correct: 2,
      explanation: 'A customer is someone who receives real estate services but has NOT entered into a brokerage relationship. A client has entered a brokerage relationship (single agent or transaction broker).'
    },
    {
      question: 'How many duties does a single agent owe compared to a transaction broker?',
      options: [
        'Single agent: 7, Transaction broker: 9',
        'Single agent: 9, Transaction broker: 7',
        'Both have 9 duties',
        'Both have 7 duties'
      ],
      correct: 1,
      explanation: 'A single agent owes 9 duties, while a transaction broker owes only 7 duties. Single agents have additional duties including loyalty, obedience, and full confidentiality.'
    },
    {
      question: 'After transitioning from single agent to transaction broker, what happens to confidential information learned during the single agent relationship?',
      options: [
        'It can now be disclosed',
        'It remains confidential forever',
        'It can be disclosed after 1 year',
        'It can be shared with the other party'
      ],
      correct: 1,
      explanation: 'Confidential information learned during a single agent relationship remains confidential forever, even after transitioning to transaction broker. The licensee cannot use this information against the former client.'
    },
    {
      question: 'In a designated sales associate arrangement, the broker:',
      options: [
        'Acts as single agent for both parties',
        'Acts as transaction broker for the overall transaction',
        'Has no involvement in the transaction',
        'Acts as single agent for the seller only'
      ],
      correct: 1,
      explanation: 'In a designated sales associate arrangement, the broker acts as a transaction broker (neutral) while the designated sales associates each act as single agents for their respective clients.'
    },
    {
      question: 'How long must brokerage relationship disclosure documents be retained?',
      options: [
        '2 years',
        '3 years',
        '5 years',
        '7 years'
      ],
      correct: 2,
      explanation: 'All brokerage relationship disclosure documents must be retained for 5 years.'
    },
    {
      question: 'Which statement about an "as is" contract is TRUE?',
      options: [
        'The seller has no duty to disclose known defects',
        'The licensee has no duty to disclose known material facts',
        'The seller and licensee must still disclose known defects and material facts',
        'Only latent defects must be disclosed'
      ],
      correct: 2,
      explanation: '"As is" only means the seller will not make repairs - it does NOT eliminate the duty to disclose known defects. Both the seller and licensee must still disclose known material defects and facts.'
    }
  ],

  caseStudies: [
    {
      id: 'ch4-case1',
      title: 'The Dual Representation Dilemma',
      scenario: 'Sales associate Karen has been working with Seller Steve as a single agent for 3 months. Steve\'s house is listed at $450,000. Buyer Bill calls Karen directly about Steve\'s listing and wants Karen to help him purchase the property. Bill mentions he would pay up to $470,000 for the right house.',
      question: 'Can Karen represent both Steve and Bill? If so, how?',
      answer: 'Karen cannot be a single agent for both Steve and Bill - Florida does not allow dual agency. However, Karen can: (1) Get Steve\'s written consent to transition to transaction broker, then work with both as a transaction broker; (2) Refer Bill to another agent in her office; or (3) Work with Bill in a no brokerage relationship. IMPORTANT: Karen can NEVER disclose to Steve that Bill said he would pay up to $470,000 - this confidential information from her conversation with a potential client must remain confidential.',
      examRelevance: 'Tests understanding of dual agency prohibition, transition requirements, and confidentiality duties. Key points: Florida prohibits dual agency, transition requires written consent, and confidentiality survives.'
    },
    {
      id: 'ch4-case2',
      title: 'The Undisclosed Death',
      scenario: 'Licensee Lisa is showing a home to buyers. The buyers ask if anyone has ever died in the house. Lisa knows that the previous owner passed away from natural causes in the master bedroom. She also knows the house has a small roof leak that the seller mentioned.',
      question: 'What must Lisa disclose?',
      answer: 'Lisa must disclose the roof leak because it is a material fact affecting property value. Lisa is NOT required to disclose the death - Florida law specifically exempts disclosure of deaths (including natural death, homicide, suicide) and HIV/AIDS status of previous occupants. Lisa should answer the death question honestly but is not legally obligated to volunteer this information.',
      examRelevance: 'Tests understanding of material fact disclosure requirements and the specific exemptions in Florida law. Deaths and HIV status are NOT material facts that must be disclosed.'
    }
  ],

  summary: `Chapter 4 covers the three authorized brokerage relationships in Florida and the duties owed in each.

**Transaction Broker (DEFAULT)**:
- 7 duties including honesty, accounting, skill/care, limited confidentiality
- NO loyalty duty - can work with both parties
- Disclosure does NOT require signature

**Single Agent**:
- 9 duties including all transaction broker duties PLUS loyalty, full confidentiality, obedience
- Represents buyer OR seller, never both
- Confidentiality survives FOREVER
- Disclosure requires signature

**No Brokerage Relationship**:
- Only 2 duties: honesty and material fact disclosure
- Person is a customer, not client
- No representation provided

**Transitions**: Single agent to transaction broker requires written consent signed by principal.

**Designated Sales Associates**: Available for nonresidential OR residential $1 million+. Broker acts as transaction broker, each designated SA acts as single agent.

**Material Facts**: All licensees must disclose known facts affecting property value. Deaths and HIV status are NOT required disclosures. "As is" does not eliminate disclosure duty.

**Retention**: Keep disclosure documents for 5 years.`
};

export default CHAPTER_4;
