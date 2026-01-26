/**
 * Chapter 11: Real Estate Contracts
 * 
 * Covers 12% of the Florida Real Estate Exam (HEAVILY WEIGHTED)
 * Focus: Contract law, requirements, and Florida-specific provisions
 */

export const CHAPTER_11 = {
  id: 11,
  title: 'Real Estate Contracts',
  subtitle: 'Contract Law and Florida Requirements',
  examPercentage: 12,
  requiredTimeMinutes: 360, // 6 hours minimum (heavy chapter)
  color: '#84CC16', // Lime
  icon: 'FileSignature',
  
  objectives: [
    'Understand the essential elements of a valid contract',
    'Distinguish between void, voidable, and unenforceable contracts',
    'Explain the Statute of Frauds and its application',
    'Identify the types of real estate contracts',
    'Understand contract performance, breach, and remedies',
    'Explain contingencies and their role in contracts',
    'Describe option contracts and their characteristics',
    'Understand listing agreements and buyer representation agreements'
  ],

  statutes: [
    { code: 'F.S. 725.01', title: 'Statute of Frauds', summary: 'Contracts that must be in writing' },
    { code: 'F.S. 689.01', title: 'Conveyances to be in Writing', summary: 'Requirements for property transfers' },
    { code: 'F.S. 475.25', title: 'Contract Violations', summary: 'Disciplinary grounds for contract issues' },
    { code: 'F.S. 501', title: 'Consumer Protection', summary: 'Consumer contract protections' }
  ],

  sections: [
    {
      id: '11.1',
      title: 'Essential Elements of Contracts',
      content: `## What Makes a Contract Valid?

A valid contract requires specific essential elements. Missing any element may make the contract void or voidable.

### The Five Essential Elements

**1. Competent Parties (Capacity)**
- Must be of legal age (18 in Florida)
- Must be mentally competent
- Must not be under undue influence or duress
- Corporations must have authorized signers

**2. Mutual Assent (Offer and Acceptance)**
- Clear offer by one party
- Unqualified acceptance by other party
- "Meeting of the minds"
- Must agree on essential terms

**3. Legal Purpose (Legality)**
- Contract must be for legal objective
- Cannot enforce illegal contracts
- Must not violate public policy

**4. Consideration**
- Something of value exchanged
- Each party must give something
- Can be money, property, promise, or forbearance
- Must be "bargained for"

**5. Legal Description (for real estate)**
- Property must be adequately described
- Street address alone not sufficient
- Must be able to identify the exact property

### Additional Requirements

**Writing (Statute of Frauds)**
- Real estate contracts must be in writing
- Oral real estate contracts are generally unenforceable

**Signatures**
- All parties to be bound must sign
- Electronic signatures valid in Florida (UETA)

### Memory Device: "COLIC"

**C** - Competent parties
**O** - Offer and acceptance
**L** - Legal purpose
**I** - In writing (for real estate)
**C** - Consideration`,
      keyPoints: [
        'Five essentials: Competent parties, Offer/Acceptance, Legal purpose, Consideration, Legal description',
        'All parties must be 18+ and mentally competent',
        'Consideration = something of value exchanged',
        'Real estate contracts must be in writing',
        'Electronic signatures are valid in Florida'
      ],
      examTips: [
        'Remember COLIC for essential elements',
        'Age 18 = legal capacity in Florida',
        'Consideration doesn\'t have to be money',
        'Writing required for real estate (Statute of Frauds)'
      ]
    },
    {
      id: '11.2',
      title: 'Contract Classifications',
      content: `## Types and Status of Contracts

Contracts can be classified in several ways.

### By Formation

**Express Contract**
- Terms stated in words (written or oral)
- Parties explicitly agree to terms
- Most real estate contracts are express

**Implied Contract**
- Created by actions/conduct
- Terms not explicitly stated
- Example: Using services implies agreement to pay

### By Performance Status

**Executed Contract**
- All parties have fully performed
- Nothing left to do
- Contract is complete

**Executory Contract**
- One or both parties have not yet performed
- Still obligations to fulfill
- Most contracts start as executory

### By Legal Status

**Valid Contract**
- Contains all essential elements
- Legally binding and enforceable

**Void Contract**
- Not a contract at all
- Missing essential element
- Cannot be enforced by either party
- Example: Contract for illegal purpose

**Voidable Contract**
- Valid but one party can void it
- Can be enforced unless voided
- Party with power to void can choose to enforce
- Examples: Minor's contract, contract signed under duress

**Unenforceable Contract**
- May be valid but cannot be enforced
- Usually due to Statute of Frauds (not in writing)
- Or statute of limitations expired

### Bilateral vs. Unilateral

**Bilateral Contract**
- Both parties make promises
- Promise for a promise
- Most real estate contracts

**Unilateral Contract**
- One party makes promise, other acts
- Promise for an action
- Example: Option contract, open listing`,
      keyPoints: [
        'Express = stated terms; Implied = by conduct',
        'Executed = complete; Executory = still obligations',
        'Void = no contract exists; Voidable = can be voided by one party',
        'Unenforceable = valid but cannot be enforced (usually not in writing)',
        'Bilateral = promise for promise; Unilateral = promise for action'
      ],
      examTips: [
        'Void = never was a contract; Voidable = IS a contract until voided',
        'Executory = not yet complete',
        'Minor\'s contract is VOIDABLE (not void)',
        'Bilateral = most common in real estate'
      ]
    },
    {
      id: '11.3',
      title: 'Statute of Frauds',
      content: `## Statute of Frauds (F.S. 725.01)

The Statute of Frauds requires certain contracts to be in writing to be enforceable.

### Contracts That Must Be in Writing

**Real Estate Contracts**:
- Sales contracts
- Listing agreements
- Buyer representation agreements
- Leases over 1 year
- Options to purchase
- Land contracts/contracts for deed

**Other Contracts**:
- Contracts that cannot be performed within 1 year
- Promises to pay another's debt
- Contracts in consideration of marriage
- Executor agreements to pay estate debts personally

### Requirements for Written Contract

A written contract must contain:
- Identification of parties
- Description of property
- Price/consideration
- Terms and conditions
- Signatures of parties to be bound

### Exceptions

**Part Performance Doctrine**: Oral contract may be enforced if:
- Buyer has paid part of purchase price
- Buyer has taken possession
- Buyer has made improvements
- All three elements typically required

**Promissory Estoppel**: May enforce if:
- Clear promise made
- Reasonable reliance on promise
- Substantial detriment from reliance

### What Happens Without Writing?

- Contract is **unenforceable**, not void
- Cannot sue to enforce
- Parties can still voluntarily perform
- Money paid may be recovered

### Electronic Signatures

**UETA (Uniform Electronic Transactions Act)**:
- Electronic signatures valid in Florida
- Email agreements can be binding
- Must have intent to sign electronically`,
      keyPoints: [
        'Real estate contracts MUST be in writing to be enforceable',
        'Leases over 1 year must be written',
        'Part performance may overcome Statute of Frauds',
        'Without writing, contract is unenforceable (not void)',
        'Electronic signatures are valid (UETA)'
      ],
      examTips: [
        'Real estate contracts without writing = UNENFORCEABLE',
        'Lease over 1 year = must be written',
        'Part performance = paid + possession + improvements',
        'Not being in writing makes it unenforceable, NOT void'
      ]
    },
    {
      id: '11.4',
      title: 'Offer and Acceptance',
      content: `## Creating Mutual Assent

A contract requires a valid offer and acceptance.

### Elements of a Valid Offer

**1. Intent**
- Serious intention to contract
- Not jokes or invitations to negotiate

**2. Definite Terms**
- Essential terms must be clear
- Price, property, parties, timing

**3. Communication**
- Offer must be communicated to offeree
- Cannot accept offer you don't know about

### Termination of Offer

An offer can end by:

**Revocation**: Offeror withdraws offer
- Effective when received by offeree
- Can revoke anytime before acceptance

**Rejection**: Offeree declines
- Kills the original offer
- Cannot later accept same offer

**Counteroffer**: Offeree changes terms
- Rejection of original + new offer
- Original offer is dead
- Roles reverse (original offeree becomes offeror)

**Lapse of Time**: Offer expires
- Stated deadline passes
- Reasonable time expires if no deadline

**Death or Incapacity**: Of either party
- Before acceptance
- Offer automatically terminates

### Acceptance

**Requirements**:
- Must be unqualified ("mirror image")
- Must accept ALL terms as offered
- Must be communicated to offeror

**Mailbox Rule**:
- Acceptance effective when SENT (if mail authorized)
- Revocation effective when RECEIVED
- Acceptance beats revocation if sent before revocation received

### Counteroffers in Real Estate

Every change creates a new offer:
- Change in price = counteroffer
- Change in closing date = counteroffer
- Adding contingency = counteroffer

Until final acceptance, either party can withdraw.`,
      keyPoints: [
        'Offer needs intent, definite terms, communication',
        'Counteroffer kills original offer',
        'Acceptance must mirror offer exactly',
        'Revocation effective when received; Acceptance when sent',
        'Death terminates offer automatically'
      ],
      examTips: [
        'Counteroffer = rejection + new offer',
        'ANY change = counteroffer',
        'Mailbox rule: acceptance effective when SENT',
        'Death of either party ends offer'
      ]
    },
    {
      id: '11.5',
      title: 'Purchase and Sale Contracts',
      content: `## Real Estate Purchase Contracts

The purchase contract is the most important document in a real estate transaction.

### Essential Terms

**Parties**: Buyer(s) and seller(s) identified
**Property**: Legal description (or sufficient description)
**Price**: Purchase price stated
**Financing**: How buyer will pay
**Closing Date**: When transfer will occur
**Possession**: When buyer gets possession

### Common Contract Provisions

**Earnest Money Deposit**
- Shows buyer's good faith
- Not legally required but customary
- Held in escrow
- Applied to purchase price at closing

**Financing Contingency**
- Contract subject to buyer obtaining financing
- Specifies loan type, amount, interest rate
- Buyer must apply and use good faith efforts
- Time limit for loan approval

**Inspection Contingency**
- Buyer's right to inspect property
- Time period for inspections
- May cancel if issues found
- May negotiate repairs

**Appraisal Contingency**
- Property must appraise at or above purchase price
- Protects buyer if value is less
- May cancel or renegotiate if low appraisal

**Title Contingency**
- Seller must provide marketable title
- Buyer has time to review title
- Can cancel if title defects found

### "As Is" Contracts

"As Is" means:
- Seller will NOT make repairs
- Does NOT eliminate disclosure duties
- Seller still must disclose known defects
- Buyer should inspect carefully

### Time Is of the Essence

If contract states "time is of the essence":
- Deadlines are strict
- Missing deadline = breach
- May lose rights if late

Without this clause, reasonable delays may be allowed.`,
      keyPoints: [
        'Essential terms: parties, property, price, financing, closing date',
        'Earnest money = good faith deposit (not legally required)',
        'Common contingencies: financing, inspection, appraisal, title',
        '"As Is" doesn\'t eliminate disclosure duties',
        '"Time is of the essence" = strict deadlines'
      ],
      examTips: [
        'Earnest money is customary but NOT required',
        '"As Is" still requires defect disclosure',
        'Know common contingencies and their purposes',
        'Time is of the essence = deadlines are absolute'
      ]
    },
    {
      id: '11.6',
      title: 'Option Contracts',
      content: `## Understanding Options

An **option contract** gives the buyer the right, but not the obligation, to purchase property.

### How Options Work

**Option Period**: Time during which buyer can exercise option
**Option Fee**: Money paid for the option right (non-refundable)
**Exercise**: Buyer decides to purchase
**Strike Price**: Predetermined purchase price

### Key Characteristics

**Unilateral Contract**:
- Only seller is bound during option period
- Buyer has choice to exercise or not
- Seller cannot sell to anyone else during option

**Consideration**:
- Option fee is the consideration
- Must be something of value
- Usually non-refundable even if buyer doesn't exercise

**Exercise**:
- Buyer must exercise within option period
- Usually by written notice
- Then becomes bilateral contract for purchase

### Option Fee vs. Earnest Money

| Option Fee | Earnest Money |
|------------|---------------|
| Paid for option right | Paid as good faith deposit |
| Usually non-refundable | May be refundable |
| Not applied to price unless agreed | Applied to purchase price |
| Keeps option alive | Shows serious intent |

### Right of First Refusal

Different from option:

**Right of First Refusal**: Owner must offer to sell to holder before selling to others
- No set price (matches other offers)
- Only triggered when owner decides to sell
- Must match bona fide third-party offer

**Option**: Right to buy at set price during set time
- Price is predetermined
- Can exercise anytime during option period
- Does not depend on other offers`,
      keyPoints: [
        'Option = right to buy, not obligation',
        'Option is unilateral (only seller bound)',
        'Option fee = consideration, usually non-refundable',
        'Must exercise within option period',
        'Right of first refusal = must match third-party offer'
      ],
      examTips: [
        'Option = UNILATERAL until exercised',
        'Option fee usually NOT applied to price unless agreed',
        'Right of first refusal ≠ option',
        'Seller cannot sell to others during option period'
      ]
    },
    {
      id: '11.7',
      title: 'Listing Agreements',
      content: `## Types of Listing Agreements

A listing agreement authorizes a broker to market a property for sale.

### Exclusive Right to Sell

**Most common and preferred by brokers**:
- Broker earns commission regardless of who finds buyer
- Even if seller finds buyer, broker gets commission
- Maximum protection for broker
- Seller gets broker's full marketing effort

### Exclusive Agency

- Broker earns commission if ANY agent finds buyer
- If seller finds buyer WITHOUT agent help, no commission
- Less protection for broker
- Broker may provide less marketing

### Open Listing

- Seller can list with multiple brokers
- Only broker who finds buyer earns commission
- If seller finds buyer, no commission to anyone
- **Unilateral contract** (promise for action)
- Least protection for brokers

### Net Listing

- Seller sets minimum acceptable price
- Broker keeps anything above that amount
- **LEGAL but discouraged** in Florida
- Potential for abuse/conflicts of interest
- Must disclose to seller

### Required Listing Provisions

Florida requires:
- **Definite expiration date** (no automatic renewal)
- Property description
- Listing price
- Commission amount or method
- Broker's duties
- Seller's duties

### Termination of Listings

**Completion**: Property sells
**Expiration**: Term ends
**Mutual Agreement**: Both parties agree to cancel
**Breach**: One party violates terms
**Death**: Of principal (seller) terminates agency
**Destruction**: Of property
**Bankruptcy**: Of either party`,
      keyPoints: [
        'Exclusive right to sell = commission regardless of who finds buyer',
        'Exclusive agency = no commission if seller finds buyer alone',
        'Open listing = unilateral, multiple brokers, first one wins',
        'Net listing = legal but discouraged in Florida',
        'Must have definite expiration date'
      ],
      examTips: [
        'Exclusive right to sell = best for broker',
        'Open listing = UNILATERAL contract',
        'Net listing = LEGAL but discouraged',
        'No automatic renewal allowed'
      ]
    },
    {
      id: '11.8',
      title: 'Contract Performance and Breach',
      content: `## Performance and Non-Performance

Contracts can end through performance, agreement, or breach.

### Types of Performance

**Complete Performance**
- All parties fulfill all obligations
- Contract is executed (complete)
- Most desirable outcome

**Substantial Performance**
- Most obligations fulfilled
- Minor deviation from terms
- May entitle to payment minus damages

**Partial Performance**
- Some but not all obligations met
- May be breach if time has run
- May recover for value provided

### Breach of Contract

A breach occurs when a party fails to perform as promised.

**Material Breach**
- Significant failure to perform
- Excuses other party from performing
- Entitles to damages

**Minor Breach**
- Small deviation from terms
- Does not excuse other party
- May recover actual damages

### Anticipatory Breach

- Party declares they won't perform before due date
- Other party can immediately sue
- Or wait until actual breach
- Treated as material breach

### Remedies for Breach

**Money Damages**
- Compensatory: Cover actual loss
- Liquidated: Pre-agreed amount (earnest money)
- Punitive: Rarely available in contracts

**Specific Performance**
- Court orders party to perform
- Common in real estate (unique property)
- Usually requested by buyer

**Rescission**
- Cancel contract
- Return parties to original position
- Undo the transaction

**Reformation**
- Court rewrites contract
- Corrects mutual mistakes
- Reflects true intent`,
      keyPoints: [
        'Complete performance = all obligations fulfilled',
        'Material breach excuses other party from performing',
        'Specific performance = court orders completion (common in real estate)',
        'Rescission = cancel and restore original position',
        'Liquidated damages = pre-agreed amount (often earnest money)'
      ],
      examTips: [
        'Real estate is unique = specific performance common',
        'Material breach lets other party walk away',
        'Anticipatory breach = can sue immediately',
        'Liquidated damages must be reasonable estimate'
      ]
    },
    {
      id: '11.9',
      title: 'Contract Discharge and Assignment',
      content: `## Ways Contracts End

Besides performance and breach, contracts can end other ways.

### Discharge by Agreement

**Mutual Rescission**
- Both parties agree to cancel
- Both released from obligations
- May involve return of deposits

**Novation**
- Substitution of new contract or party
- Original party released
- Requires consent of all parties

**Accord and Satisfaction**
- Agreement to accept different performance
- Satisfaction = actual performance of accord
- Discharges original obligation

### Discharge by Operation of Law

**Statute of Limitations**
- Time limit to file lawsuit
- Written contracts: 5 years in Florida
- After time expires, cannot enforce

**Bankruptcy**
- May discharge contract obligations
- Depends on type of bankruptcy
- Court determines outcome

**Impossibility**
- Performance becomes impossible
- Subject matter destroyed
- Not just difficult or expensive

### Assignment and Assumption

**Assignment**
- Transfer of contract rights to third party
- Assignor transfers to assignee
- Usually allowed unless contract prohibits
- Assignor remains liable unless released

**Assumption**
- Third party takes over obligations
- Requires consent of other original party
- Assuming party becomes liable
- Original party may or may not be released

### Contract Provisions on Transfer

**"Contract not assignable"**
- Prohibits assignment of rights
- Common in personal service contracts

**"Due on Sale" Clause**
- In mortgages
- Full payment due if property transferred
- Prevents assumption without lender approval`,
      keyPoints: [
        'Novation = substitution of party or contract (releases original)',
        'Assignment = transfer of rights (assignor still liable unless released)',
        'Statute of limitations = 5 years for written contracts in FL',
        'Impossibility discharges contract',
        'Due on sale clause requires payoff if transferred'
      ],
      examTips: [
        'Novation RELEASES original party; Assignment does NOT',
        '5-year statute of limitations (written contracts)',
        'Impossibility = truly impossible, not just hard',
        'Assignment allowed unless contract prohibits'
      ]
    },
    {
      id: '11.10',
      title: 'Special Contract Types',
      content: `## Other Important Contract Types

Several special contract types appear in real estate.

### Land Contract (Contract for Deed)

Also called: Installment land contract, agreement for deed

**How It Works**:
- Seller finances purchase directly
- Buyer makes payments to seller
- Seller retains legal title until paid off
- Buyer gets equitable title and possession

**Characteristics**:
- Buyer gets equitable title immediately
- Legal title transfers when fully paid
- Seller can reclaim if buyer defaults
- Less protection for buyer than mortgage

### Lease with Option to Purchase

**Combines lease and option**:
- Tenant has option to buy during/after lease
- Option fee paid upfront
- Rent may or may not credit toward purchase
- If exercised, becomes purchase contract

### Exchange Agreement (1031 Exchange)

- Tax-deferred exchange of like-kind property
- Must follow IRS rules strictly
- Contract specifies exchange terms
- Qualified intermediary usually required

### Installment Sale Contract

- Payment received over multiple years
- Tax benefits (spread capital gains)
- Different from land contract
- Title transfers at closing, payments continue

### Right of First Refusal Agreement

- Owner agrees to offer property to holder first
- Must match bona fide third-party offer
- Holder can buy or refuse
- Different from option (no set price)

### Buyer Representation Agreement

- Broker represents buyer
- Similar to listing (but for buyer)
- May be exclusive or non-exclusive
- Specifies compensation
- Must have expiration date`,
      keyPoints: [
        'Land contract = seller keeps legal title until paid',
        'Lease option = tenant can buy during/after lease',
        '1031 exchange = tax-deferred swap of like-kind property',
        'Buyer representation agreement = listing for buyer\'s side',
        'All must have expiration dates'
      ],
      examTips: [
        'Land contract: buyer gets EQUITABLE title, seller keeps LEGAL title',
        'Option fee for lease-option usually non-refundable',
        '1031 exchange = like-kind (real estate for real estate)',
        'Right of first refusal has no set price (unlike option)'
      ]
    }
  ],

  flashcards: [
    // ESSENTIAL ELEMENTS
    {
      front: 'What are the five essential elements of a valid contract?',
      back: 'COLIC:\n• Competent parties\n• Offer and acceptance\n• Legal purpose\n• In writing (Statute of Frauds)\n• Consideration',
      difficulty: 'easy'
    },
    {
      front: 'What is consideration in a contract?',
      back: 'Something of value exchanged by both parties. Can be money, promises, or forbearance (giving up a right).',
      difficulty: 'easy'
    },
    {
      front: 'What is "competent parties" in contract law?',
      back: 'Parties must be: 18+ years old, of sound mind, and not under the influence of drugs/alcohol when signing.',
      difficulty: 'easy'
    },
    {
      front: 'What is the Statute of Frauds?',
      back: 'F.S. 725.01 - Requires certain contracts to be IN WRITING to be enforceable, including all real estate contracts.',
      difficulty: 'medium'
    },
    {
      front: 'What contracts must be in writing under the Statute of Frauds?',
      back: '• Real estate sales contracts\n• Listing agreements\n• Leases over 1 year\n• Option contracts\n• Contracts not performable within 1 year',
      difficulty: 'medium'
    },
    
    // CONTRACT STATUS TYPES
    {
      front: 'What is the difference between void and voidable contracts?',
      back: 'VOID = not a contract at all (missing element, illegal purpose)\nVOIDABLE = valid but one party can choose to void it (minor, fraud, duress)',
      difficulty: 'medium'
    },
    {
      front: 'What is an unenforceable contract?',
      back: 'A valid contract that cannot be enforced in court, usually due to Statute of Frauds (oral real estate contract) or Statute of Limitations.',
      difficulty: 'medium'
    },
    {
      front: 'A contract with an illegal purpose is:',
      back: 'VOID - it was never a valid contract. Courts will not enforce illegal agreements.',
      difficulty: 'easy'
    },
    {
      front: 'A contract signed by a 17-year-old is:',
      back: 'VOIDABLE by the minor. The minor can void it, but the adult cannot. Once minor turns 18, can ratify it.',
      difficulty: 'medium'
    },
    
    // OFFER & ACCEPTANCE
    {
      front: 'What is a counteroffer?',
      back: 'A REJECTION of the original offer combined with a NEW offer. KILLS the original offer permanently - cannot go back to it.',
      difficulty: 'easy'
    },
    {
      front: 'What is the "mailbox rule"?',
      back: 'ACCEPTANCE effective when SENT\nREVOCATION effective when RECEIVED\nIf acceptance sent before revocation received, contract is formed.',
      difficulty: 'hard'
    },
    {
      front: 'Can an offer be revoked after it\'s made?',
      back: 'YES - anytime BEFORE acceptance is communicated. Exception: Option contract (paid for time).',
      difficulty: 'medium'
    },
    {
      front: 'What terminates an offer?',
      back: '1. Acceptance or rejection\n2. Counteroffer (rejection)\n3. Revocation by offeror\n4. Death or incapacity\n5. Expiration of time\n6. Destruction of property',
      difficulty: 'hard'
    },
    {
      front: 'What does "time is of the essence" mean?',
      back: 'Deadlines are STRICT and ABSOLUTE. Missing any deadline is an automatic breach of contract.',
      difficulty: 'medium'
    },
    
    // CONTRACT TYPES
    {
      front: 'What is a bilateral contract?',
      back: 'A promise for a promise. BOTH parties are bound. Most real estate contracts are bilateral.',
      difficulty: 'easy'
    },
    {
      front: 'What is a unilateral contract?',
      back: 'A promise for an ACTION. Only offeror is bound until the action is completed. Example: Open listing.',
      difficulty: 'medium'
    },
    {
      front: 'What is an executory contract?',
      back: 'A contract where one or more obligations remain to be performed. Not yet fully complete.',
      difficulty: 'medium'
    },
    {
      front: 'What is an executed contract?',
      back: 'A contract where ALL obligations have been performed. Fully complete.',
      difficulty: 'easy'
    },
    {
      front: 'What is an option contract?',
      back: 'A UNILATERAL contract giving buyer the RIGHT (not obligation) to purchase at a set price within a set time. Option fee is consideration.',
      difficulty: 'medium'
    },
    
    // LISTING AGREEMENTS
    {
      front: 'What is an exclusive right to sell listing?',
      back: 'Broker earns commission NO MATTER WHO finds the buyer - even if seller finds buyer themselves. MOST COMMON listing.',
      difficulty: 'easy'
    },
    {
      front: 'What is an exclusive agency listing?',
      back: 'Broker earns commission UNLESS seller finds buyer WITHOUT any agent\'s help. If seller\'s friend buys, no commission.',
      difficulty: 'medium'
    },
    {
      front: 'What is an open listing?',
      back: 'UNILATERAL - seller can use MULTIPLE brokers. Only the "procuring cause" (broker who finds buyer) earns commission.',
      difficulty: 'medium'
    },
    {
      front: 'Are net listings legal in Florida?',
      back: 'YES, legal but DISCOURAGED. Broker keeps everything above seller\'s set minimum - potential conflict of interest.',
      difficulty: 'medium'
    },
    {
      front: 'Can a listing agreement be oral?',
      back: 'NO - Statute of Frauds requires listing agreements to be IN WRITING to be enforceable.',
      difficulty: 'easy'
    },
    
    // REMEDIES & PERFORMANCE
    {
      front: 'What is specific performance?',
      back: 'Court orders party to COMPLETE the contract as agreed. Common in real estate because each property is UNIQUE.',
      difficulty: 'medium'
    },
    {
      front: 'What is liquidated damages?',
      back: 'A PRE-AGREED amount of damages if a breach occurs. Example: Earnest money deposit forfeited if buyer defaults.',
      difficulty: 'medium'
    },
    {
      front: 'What is rescission?',
      back: 'CANCELLATION of contract - returns both parties to their original position before the contract.',
      difficulty: 'easy'
    },
    {
      front: 'What is novation?',
      back: 'Substitution of a NEW contract or NEW party for the original. RELEASES the original party from all obligations.',
      difficulty: 'hard'
    },
    {
      front: 'What is the difference between novation and assignment?',
      back: 'NOVATION: Original party released\nASSIGNMENT: Original party remains liable (secondary liability)',
      difficulty: 'hard'
    },
    {
      front: 'What is the statute of limitations for written contracts in Florida?',
      back: '5 YEARS. For oral contracts, 4 years.',
      difficulty: 'medium'
    },
    
    // SPECIAL CONTRACT PROVISIONS
    {
      front: 'In a land contract (contract for deed), who holds legal title?',
      back: 'SELLER holds legal title until fully paid. Buyer has EQUITABLE title (right to receive deed upon completion).',
      difficulty: 'medium'
    },
    {
      front: 'Does an "as is" contract eliminate the seller\'s duty to disclose?',
      back: 'NO - seller MUST still disclose known MATERIAL defects. "As is" only means seller won\'t make repairs.',
      difficulty: 'medium'
    },
    {
      front: 'What is a contingency in a contract?',
      back: 'A condition that MUST be met for the contract to be binding. Examples: Financing, inspection, appraisal contingencies.',
      difficulty: 'easy'
    },
    {
      front: 'What is the parol evidence rule?',
      back: 'Written contract is the FINAL agreement. Prior or contemporaneous oral agreements cannot contradict the written terms.',
      difficulty: 'hard'
    },
    {
      front: 'What is an addendum vs an amendment?',
      back: 'ADDENDUM: Added at time of original contract signing\nAMENDMENT: Change made AFTER contract is already signed',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'Which element is NOT required for a valid contract?',
      options: [
        'Competent parties',
        'Notarization',
        'Consideration',
        'Legal purpose'
      ],
      correct: 1,
      explanation: 'Notarization is not required for a valid contract. The essential elements are competent parties, offer and acceptance, consideration, legal purpose, and for real estate, a written description. Notarization may be required for recording but not for validity.'
    },
    {
      question: 'A contract entered into by a 17-year-old is:',
      options: [
        'Void',
        'Voidable',
        'Unenforceable',
        'Valid and binding'
      ],
      correct: 1,
      explanation: 'A contract entered into by a minor is VOIDABLE, not void. The minor can choose to void the contract or enforce it. The adult party is bound unless the minor chooses to void.'
    },
    {
      question: 'Under the Statute of Frauds, a lease for 10 months:',
      options: [
        'Must be in writing',
        'Does not need to be in writing',
        'Must be notarized',
        'Must be recorded'
      ],
      correct: 1,
      explanation: 'A lease for 10 months does not need to be in writing under the Statute of Frauds. Only leases for MORE than 1 year must be in writing.'
    },
    {
      question: 'Buyer makes an offer at $300,000. Seller responds "I accept at $310,000." This is:',
      options: [
        'An acceptance',
        'A counteroffer',
        'A rejection only',
        'An option'
      ],
      correct: 1,
      explanation: 'This is a counteroffer because the seller changed a material term (price). A counteroffer is a rejection of the original offer combined with a new offer.'
    },
    {
      question: 'The "mailbox rule" states that:',
      options: [
        'Offers must be mailed to be valid',
        'Acceptance is effective when sent, revocation when received',
        'All contracts must be delivered by mail',
        'Counteroffers must be in writing'
      ],
      correct: 1,
      explanation: 'The mailbox rule states that acceptance is effective when SENT (mailed), while revocation is effective when RECEIVED. This means an acceptance sent before a revocation is received creates a valid contract.'
    },
    {
      question: 'In an "exclusive right to sell" listing, the broker earns commission:',
      options: [
        'Only if the broker finds the buyer',
        'Only if any agent finds the buyer',
        'Regardless of who finds the buyer',
        'Only if the seller agrees at closing'
      ],
      correct: 2,
      explanation: 'In an exclusive right to sell listing, the broker earns commission regardless of who finds the buyer - even if the seller finds the buyer themselves with no agent involvement.'
    },
    {
      question: 'A net listing is:',
      options: [
        'Illegal in Florida',
        'Legal and encouraged',
        'Legal but discouraged',
        'Required for commercial property'
      ],
      correct: 2,
      explanation: 'Net listings are LEGAL in Florida but DISCOURAGED due to the potential for conflicts of interest between broker and seller. Broker may be tempted to get lowest price to maximize profit.'
    },
    {
      question: 'Specific performance is:',
      options: [
        'A type of listing agreement',
        'A court order requiring a party to perform the contract',
        'Payment of money damages',
        'Cancellation of the contract'
      ],
      correct: 1,
      explanation: 'Specific performance is a court remedy that orders a party to perform the contract as agreed. It is commonly used in real estate because each property is unique.'
    },
    {
      question: 'What is the statute of limitations for written contracts in Florida?',
      options: [
        '2 years',
        '4 years',
        '5 years',
        '7 years'
      ],
      correct: 2,
      explanation: 'The statute of limitations for written contracts in Florida is 5 years. After this time, a lawsuit to enforce the contract cannot be filed.'
    },
    {
      question: 'An option contract is:',
      options: [
        'Bilateral until exercised',
        'Unilateral until exercised',
        'Always void',
        'The same as a right of first refusal'
      ],
      correct: 1,
      explanation: 'An option contract is UNILATERAL until exercised - only the seller is bound. The buyer has the right but not the obligation to purchase. When exercised, it becomes bilateral.'
    },
    {
      question: 'In a land contract (contract for deed), the seller retains:',
      options: [
        'Equitable title',
        'Legal title',
        'Both titles',
        'Neither title'
      ],
      correct: 1,
      explanation: 'In a land contract, the seller retains LEGAL title until the contract is fully paid. The buyer receives equitable title, which is the right to obtain legal title upon full payment.'
    },
    {
      question: '"As is" in a contract means:',
      options: [
        'Seller has no disclosure duties',
        'Seller will not make repairs but must still disclose defects',
        'The contract is voidable',
        'No inspections are allowed'
      ],
      correct: 1,
      explanation: '"As is" means the seller will not make repairs, but it does NOT eliminate the duty to disclose known material defects. Buyer should still inspect carefully.'
    },
    {
      question: 'A contract that cannot be enforced because it is not in writing is:',
      options: [
        'Void',
        'Voidable',
        'Unenforceable',
        'Executed'
      ],
      correct: 2,
      explanation: 'A contract that should be in writing under the Statute of Frauds but isn\'t is UNENFORCEABLE - not void. The contract may exist, but a court won\'t enforce it.'
    },
    {
      question: 'Novation differs from assignment in that:',
      options: [
        'Novation requires consent of all parties',
        'Assignment releases the original party',
        'Novation does not release the original party',
        'Assignment requires court approval'
      ],
      correct: 0,
      explanation: 'Novation requires the consent of all parties and RELEASES the original party from obligations. Assignment transfers rights but the assignor remains liable unless specifically released.'
    },
    {
      question: 'Which listing type is UNILATERAL?',
      options: [
        'Exclusive right to sell',
        'Exclusive agency',
        'Open listing',
        'Net listing'
      ],
      correct: 2,
      explanation: 'An open listing is UNILATERAL - the seller promises to pay commission to the broker who finds a buyer (promise for action). The other listing types are bilateral (promise for promise).'
    }
  ],

  caseStudies: [
    {
      id: 'ch11-case1',
      title: 'The Expired Counteroffer',
      scenario: 'On Monday, Buyer Betty offers $350,000 for Seller Sam\'s house. Sam counters at $360,000 on Tuesday, giving Betty until Friday to respond. On Thursday, Betty calls to accept $360,000, but Sam says he accepted another offer on Wednesday.',
      question: 'Is there a valid contract between Betty and Sam?',
      answer: 'No valid contract exists between Betty and Sam. Sam\'s counteroffer of $360,000 was a rejection of Betty\'s original $350,000 offer plus a new offer. Sam, as offeror of the new offer, had the right to revoke anytime before Betty\'s acceptance. By accepting another offer on Wednesday, Sam implicitly revoked his counteroffer. Betty\'s Thursday acceptance came after the revocation (assuming Sam communicated this or Betty had notice). Even though the Friday deadline hadn\'t passed, the offeror can revoke at any time before acceptance.',
      examRelevance: 'Tests understanding of counteroffers (kill original offers), offeror\'s right to revoke, and timing of acceptance vs. revocation. Key point: having a deadline doesn\'t prevent revocation.'
    },
    {
      id: 'ch11-case2',
      title: 'The "As Is" Disclosure',
      scenario: 'Seller sells property "as is." The seller knows the basement floods during heavy rain but doesn\'t disclose this. After closing, buyer discovers the flooding and sues seller.',
      question: 'Does "as is" protect the seller from liability for not disclosing the flooding?',
      answer: 'No, "as is" does NOT protect the seller from liability for failing to disclose known material defects. The Florida Supreme Court has ruled that "as is" means the seller will not make repairs, but it does NOT eliminate the duty to disclose known defects that materially affect the property\'s value. Basement flooding is a material defect that should have been disclosed. The buyer may have remedies including rescission (cancel the contract) or damages. The seller could also face discipline from FREC for misrepresentation.',
      examRelevance: 'Tests understanding that "as is" does not eliminate disclosure duties. Key points: material defects must be disclosed regardless of "as is" language; failure to disclose is misrepresentation.'
    }
  ],

  summary: `Chapter 11 is a HEAVILY WEIGHTED chapter (12%) covering real estate contracts.

**Essential Elements (COLIC)**:
- Competent parties (18+, mentally competent)
- Offer and acceptance (mutual assent)
- Legal purpose
- In writing (Statute of Frauds)
- Consideration (something of value)

**Contract Classifications**:
- Void = no contract exists
- Voidable = one party can void
- Unenforceable = valid but can't enforce (usually Statute of Frauds)
- Executed = complete; Executory = still obligations
- Bilateral = promise for promise; Unilateral = promise for action

**Statute of Frauds**: Real estate contracts, leases >1 year, options must be in writing

**Offer and Acceptance**:
- Counteroffer kills original offer
- Acceptance must mirror offer exactly
- Mailbox rule: acceptance when sent, revocation when received

**Listing Types**:
- Exclusive right to sell = commission regardless who finds buyer
- Exclusive agency = no commission if seller finds buyer alone
- Open listing = unilateral, first broker wins
- Net listing = legal but discouraged

**Options**: Unilateral, buyer has right but not obligation, option fee usually non-refundable

**Remedies**: Specific performance (common in real estate), money damages, rescission

**Special Contracts**:
- Land contract: seller keeps legal title until paid
- Lease-option: tenant can purchase
- "As is": no repairs, but must still disclose defects

**Statute of Limitations**: 5 years for written contracts in Florida`
};

export default CHAPTER_11;
