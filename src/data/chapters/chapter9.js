/**
 * Chapter 9: Titles, Deeds & Restrictions
 * 
 * Covers 7% of the Florida Real Estate Exam
 * Focus: Transfer of ownership, title evidence, deeds, and restrictions
 */

export const CHAPTER_9 = {
  id: 9,
  title: 'Titles, Deeds & Restrictions',
  subtitle: 'Transfer of Ownership',
  examPercentage: 7,
  requiredTimeMinutes: 210, // 3.5 hours minimum
  color: '#14B8A6', // Teal
  icon: 'FileText',
  
  objectives: [
    'Understand the concept of title and how it is transferred',
    'Identify the types of deeds and their warranties',
    'Explain the requirements for a valid deed',
    'Describe the different methods of title evidence',
    'Understand title insurance and its coverage',
    'Explain deed restrictions and their enforcement',
    'Understand the recording process and its importance'
  ],

  statutes: [
    { code: 'F.S. 689', title: 'Conveyances of Land', summary: 'Requirements for deeds and transfers' },
    { code: 'F.S. 695', title: 'Record of Conveyances', summary: 'Recording requirements and priorities' },
    { code: 'F.S. 627.7711', title: 'Title Insurance', summary: 'Title insurance regulations' },
    { code: 'F.S. 712', title: 'Marketable Record Title Act', summary: 'Title clearing procedures' }
  ],

  sections: [
    {
      id: '9.1',
      title: 'Understanding Title',
      content: `## What Is Title?

**Title** is the legal right to ownership and possession of property. It's not a document - it's a concept.

### Title vs. Deed

**Title**: The right of ownership itself
**Deed**: The document that transfers title

Think of it this way: You HAVE title, but you RECEIVE a deed.

### Types of Title

**Legal Title**
- Actual ownership recognized by law
- Appears in public records
- Holder has full bundle of rights

**Equitable Title**
- Interest held by buyer under contract
- Buyer has right to obtain legal title
- Created when purchase contract is signed

### Chain of Title

The **chain of title** is the history of all transfers of title to a property:
- Traces ownership back through time
- Should be unbroken (no gaps)
- Found in public records
- Title search examines the chain

### Marketable Title

**Marketable title** (merchantable title) is:
- Free from reasonable doubt
- Free from significant defects
- Insurable by title company
- What buyers expect to receive

A title may be valid but not marketable if there are clouds or defects.

### Cloud on Title

A **cloud on title** is any claim, lien, or encumbrance that may affect ownership:
- Unreleased liens
- Recording errors
- Missing signatures
- Boundary disputes

**Quiet title action**: Lawsuit to remove cloud and establish clear title`,
      keyPoints: [
        'Title = right of ownership; Deed = document transferring title',
        'Legal title = actual ownership; Equitable title = right to obtain ownership',
        'Chain of title = history of all transfers',
        'Marketable title = free from reasonable doubt',
        'Cloud on title = defect that may affect ownership'
      ],
      examTips: [
        'Title is the RIGHT, deed is the DOCUMENT',
        'Buyer gets equitable title when contract is signed',
        'Marketable title is what sellers must deliver',
        'Quiet title action clears clouds'
      ]
    },
    {
      id: '9.2',
      title: 'Types of Deeds',
      content: `## Deed Types and Warranties

Different deeds provide different levels of protection to the buyer.

### General Warranty Deed

**Highest level of protection** for the buyer:

Contains these covenants (promises):
1. **Covenant of Seisin** - Grantor owns the property
2. **Covenant of Right to Convey** - Grantor has right to transfer
3. **Covenant Against Encumbrances** - No undisclosed encumbrances
4. **Covenant of Quiet Enjoyment** - Grantee won't be disturbed
5. **Covenant of Warranty Forever** - Grantor will defend title
6. **Covenant of Further Assurance** - Grantor will provide documents needed

Warranties apply to **entire chain of title** (all previous owners).

### Special Warranty Deed

**Limited protection**:
- Grantor only warrants against defects during their ownership
- Does NOT warrant against previous owners' actions
- Common in foreclosure sales, estate sales

### Bargain and Sale Deed

- Implies grantor has title
- Contains NO warranties
- Common in tax sales, foreclosures

### Quitclaim Deed

**Least protection** for buyer:
- Transfers whatever interest grantor has (if any)
- No warranties whatsoever
- Grantor may have no interest at all
- Used to clear clouds, between family members, divorces

### Comparison

| Deed Type | Warranties | Protection Level |
|-----------|------------|------------------|
| General Warranty | Full, all owners | Highest |
| Special Warranty | Only grantor's period | Medium |
| Bargain and Sale | None stated | Low |
| Quitclaim | None at all | Lowest |`,
      keyPoints: [
        'General warranty = highest protection, warranties entire chain',
        'Special warranty = only grantor\'s period of ownership',
        'Quitclaim = no warranties, transfers whatever interest exists',
        'Six covenants in general warranty deed',
        'Quitclaim used to clear clouds on title'
      ],
      examTips: [
        'General warranty = BEST protection for buyer',
        'Quitclaim = NO warranties (used for clouds, family transfers)',
        'Special warranty = limited to grantor\'s ownership period',
        'Know all six covenants of general warranty deed'
      ]
    },
    {
      id: '9.3',
      title: 'Requirements for Valid Deed',
      content: `## Essential Elements of a Deed

For a deed to be valid and transfer title, it must meet certain requirements.

### Required Elements

**1. Grantor with Legal Capacity**
- Must be of legal age (18 in Florida)
- Must be mentally competent
- Must be clearly identified

**2. Grantee Identified**
- Must be identifiable (name or description)
- Must be capable of holding title
- Can be individual, corporation, trust, etc.

**3. Consideration Statement**
- Statement that something of value was exchanged
- Often "$10 and other good and valuable consideration"
- Actual amount not required

**4. Granting Clause (Words of Conveyance)**
- Language showing intent to transfer
- "Grant," "convey," "transfer," etc.

**5. Legal Description**
- Must adequately identify the property
- Street address alone is NOT sufficient
- Must use accepted legal description method

**6. Grantor's Signature**
- Must be signed by grantor(s)
- Grantee signature NOT required
- Corporate deeds require authorized signatures

**7. Delivery and Acceptance**
- Deed must be delivered to grantee
- Grantee must accept the deed
- Recording is evidence of delivery

### NOT Required (But Common)

- **Grantee's signature** - not required
- **Recording** - not required for validity (but advisable)
- **Date** - not required but helpful
- **Witnesses** - required for recording in Florida (2 witnesses)
- **Acknowledgment** - required for recording

### Florida Recording Requirements

To record a deed in Florida:
- Two **witnesses** to grantor's signature
- **Acknowledgment** (notarization)
- Documentary stamp tax paid`,
      keyPoints: [
        'Essential: Competent grantor, identifiable grantee, consideration, granting clause, legal description, grantor signature, delivery/acceptance',
        'Grantee signature NOT required',
        'Recording NOT required for validity (but protects buyer)',
        'Florida requires 2 witnesses and notarization to record',
        'Street address alone is NOT sufficient legal description'
      ],
      examTips: [
        'Grantee does NOT need to sign deed',
        'Recording protects but isn\'t required for validity',
        '2 witnesses needed to record in Florida',
        'Legal description required, not just street address'
      ]
    },
    {
      id: '9.4',
      title: 'Recording and Priority',
      content: `## The Recording System

Recording provides public notice of property interests and establishes priority.

### Purpose of Recording

**Constructive Notice**: Recording gives the world notice of your interest
- Anyone can search public records
- "Should have known" even if didn't actually know

**Actual Notice**: Direct knowledge of a fact
- Someone tells you
- You see the person living there

### Where to Record

Deeds are recorded at the **Clerk of Circuit Court** in the county where the property is located.

### Recording Priority

Florida is a **"Race-Notice" state**:

To have priority, you must:
1. Record FIRST, AND
2. Be without notice of prior unrecorded interests

**Example**: 
- Owner sells to Buyer A (doesn't record)
- Owner sells same property to Buyer B (records immediately)
- Buyer B wins IF B had no knowledge of A's purchase

### Priority Rules

**General Rule**: First in time, first in right (if properly recorded)

**Exceptions**:
- Property tax liens always first
- Recorded documents beat unrecorded
- Purchase for value without notice beats prior unrecorded

### Chain of Title Breaks

If a deed is recorded "outside the chain," it may not provide constructive notice:
- Misspelled names
- Wrong property description
- Recording in wrong county

### Wild Deed

A **wild deed** is recorded but not connected to the chain of title:
- May not provide constructive notice
- Example: A to B (unrecorded), B to C (recorded) - C's deed is "wild"`,
      keyPoints: [
        'Recording provides constructive notice',
        'Florida is a race-notice state',
        'Record first AND without notice = priority',
        'Record at Clerk of Circuit Court in property\'s county',
        'Wild deed = not connected to chain of title'
      ],
      examTips: [
        'Race-notice = must record first AND have no notice',
        'Constructive notice = recorded in public records',
        'Actual notice = direct knowledge',
        'Property tax liens beat everything'
      ]
    },
    {
      id: '9.5',
      title: 'Title Evidence and Insurance',
      content: `## Proving Title

Before closing, buyers need evidence that the seller has good title.

### Types of Title Evidence

**1. Abstract of Title**
- Summary of all recorded documents affecting property
- Prepared by abstractor
- Must be examined by attorney for opinion
- Shows history but doesn't insure

**2. Attorney's Opinion of Title**
- Lawyer reviews abstract
- Provides written opinion on title quality
- Based on abstract, not independent search
- Lawyer may be liable for negligence

**3. Title Insurance**
- Insurance policy protecting against title defects
- Most common form of title evidence
- Paid once at closing (not annual)
- Protects up to policy amount

### Title Insurance

**Two Types of Policies**:

**Owner's Policy**
- Protects buyer/owner
- Coverage = purchase price
- Lasts as long as owner has interest
- One-time premium at closing

**Lender's Policy (Mortgagee Policy)**
- Protects lender
- Coverage = loan amount (decreases as paid)
- Required by most lenders
- Buyer usually pays

### What Title Insurance Covers

**Standard Coverage**:
- Defects in public records
- Forgery
- Incompetent grantors
- Incorrect marital status
- Improperly delivered deeds

**Extended Coverage (ALTA)**:
- Survey matters
- Unrecorded liens
- Rights of parties in possession
- Unrecorded easements

### What Title Insurance Does NOT Cover

- Known defects disclosed before policy
- Government regulations (zoning)
- Defects created after policy issued
- Native American claims
- Environmental issues`,
      keyPoints: [
        'Abstract = summary of records, needs attorney review',
        'Title insurance = most common, one-time premium',
        'Owner\'s policy protects buyer, lender\'s policy protects lender',
        'Owner\'s policy = purchase price, lender\'s = loan amount',
        'ALTA/extended coverage includes survey and possession issues'
      ],
      examTips: [
        'Title insurance is ONE-TIME payment at closing',
        'Owner\'s policy lasts as long as owner has interest',
        'Lender\'s policy coverage decreases with loan balance',
        'ALTA = extended coverage, includes survey matters'
      ]
    },
    {
      id: '9.6',
      title: 'Deed Restrictions',
      content: `## Private Restrictions on Property Use

Deed restrictions (restrictive covenants) are private limitations on property use.

### What Are Deed Restrictions?

**Deed restrictions** are:
- Created by developers or previous owners
- Placed in deeds or plat maps
- Run with the land (bind future owners)
- Enforced by property owners, not government

### Common Restrictions

- Minimum house size
- Architectural style
- Fence requirements
- No commercial use
- No certain animals
- Setback requirements
- Landscaping requirements

### Creating Restrictions

**Declaration of Restrictions**: Document recorded by developer establishing rules for subdivision

**Individual Deed**: Restrictions placed in each deed

**Plat**: Restrictions shown on recorded subdivision map

### Enforcing Restrictions

**Who Can Enforce**:
- Other property owners in the subdivision
- Homeowners association (HOA)
- Developer (if still involved)

**How Enforced**:
- Lawsuit for injunction (stop violation)
- Lawsuit for damages
- HOA fines and liens

### Terminating Restrictions

**Expiration**: Time limit stated in restriction

**Release**: All affected owners agree to release

**Abandonment**: Widespread violations not enforced

**Changed Conditions**: Neighborhood changed so much restriction is meaningless

**Merger**: One person acquires all affected properties

### Deed Restrictions vs. Zoning

| Deed Restrictions | Zoning |
|-------------------|--------|
| Private | Government |
| Enforced by owners/HOA | Enforced by government |
| Can be more restrictive | Sets minimum standards |
| Run with land | Can change with rezoning |

**When Both Apply**: The MORE restrictive rule controls`,
      keyPoints: [
        'Deed restrictions are PRIVATE (not government)',
        'Run with the land - bind future owners',
        'Enforced by property owners or HOA, not government',
        'When deed restrictions and zoning conflict, MORE restrictive applies',
        'Can be terminated by expiration, release, abandonment, changed conditions'
      ],
      examTips: [
        'Deed restrictions = private, Zoning = government',
        'MORE restrictive rule wins when both apply',
        'Restrictions run with the land',
        'Enforced through lawsuits or HOA, not police'
      ]
    },
    {
      id: '9.7',
      title: 'Special Deed Situations',
      content: `## Special Types of Deeds and Transfers

Some transfers use special types of deeds.

### Deed of Trust

Used in some states (not commonly in Florida for residential):
- Three parties: Trustor (borrower), Trustee, Beneficiary (lender)
- Trustee holds title as security
- Allows non-judicial foreclosure

Florida primarily uses **mortgages**, not deeds of trust.

### Trustee's Deed

- Used when property held in trust is sold
- Trustee signs on behalf of trust
- Must have authority per trust document

### Executor's/Administrator's Deed

- Used when estate sells property
- Executor (with will) or Administrator (no will)
- Usually special warranty or bargain and sale
- Requires court approval in probate

### Sheriff's Deed

- Issued after sheriff's sale (foreclosure, judgment)
- No warranties
- "As is" condition
- Buyer takes risk

### Tax Deed

- Issued after tax sale for unpaid property taxes
- Usually no warranties
- Title may have issues
- Florida has specific tax deed procedures

### Correction Deed

- Used to correct errors in previously recorded deed
- Misspellings, wrong legal description
- References original deed
- Does not convey new title, just corrects

### Gift Deed

- Conveys property as gift (no consideration)
- Still requires all deed essentials
- May be subject to gift tax
- "For love and affection" as consideration`,
      keyPoints: [
        'Florida uses mortgages, not deeds of trust',
        'Executor\'s deed = estate sale with will',
        'Administrator\'s deed = estate sale without will',
        'Sheriff\'s deed and tax deed have no warranties',
        'Correction deed fixes errors, doesn\'t convey new title'
      ],
      examTips: [
        'Florida uses mortgages (not deeds of trust)',
        'Executor = with will; Administrator = without will',
        'Sheriff\'s and tax deeds = high risk, no warranties',
        'Correction deed references original deed'
      ]
    },
    {
      id: '9.8',
      title: 'Florida Marketable Record Title Act',
      content: `## MRTA - Clearing Old Interests

The **Marketable Record Title Act** (MRTA) helps clear old claims from title.

### Purpose of MRTA

- Simplifies title searches
- Eliminates ancient claims and interests
- Creates marketable title after 30 years
- Reduces title examination costs

### How MRTA Works

After **30 years** from a "root of title," most old interests are extinguished:

**Root of Title**: Any recorded deed or instrument that creates the chain of title

**What Gets Extinguished**:
- Old restrictions
- Reversionary interests
- Ancient easements not recently recorded
- Defects older than 30 years

### What MRTA Does NOT Extinguish

**Preserved Interests**:
- Interests recorded within 30 years (or re-recorded)
- Government interests
- Visible easements in use
- Interests of persons in possession
- Recorded restrictions with no expiration (must re-record every 30 years)

### Preserving Interests Under MRTA

To preserve an interest from MRTA extinguishment:
- Record a **Notice of Preservation**
- Must be recorded within the 30-year period
- Must properly describe the interest

### Practical Impact

- Title searches can go back only 30 years from root
- Old interests must be re-recorded or lost
- HOA restrictions must be re-recorded periodically
- Simplifies title examination significantly`,
      keyPoints: [
        'MRTA extinguishes old claims after 30 years',
        'Root of title starts the 30-year period',
        'Interests in possession and government interests preserved',
        'Must record Notice of Preservation to keep old interests',
        'Simplifies title searches'
      ],
      examTips: [
        '30 years is the key MRTA period',
        'File Notice of Preservation to keep old interests',
        'Government interests are NOT extinguished',
        'Visible easements in use are preserved'
      ]
    },
    {
      id: '9.9',
      title: 'Transfer Taxes and Closing',
      content: `## Taxes on Property Transfers

Florida imposes taxes on the transfer of real property.

### Documentary Stamp Tax

**State Documentary Stamps on Deeds**:
- Rate: **$0.70 per $100** of consideration (or fraction)
- Paid by **seller** (customary, can be negotiated)
- Collected at recording
- Exemptions: Gifts between spouses, government transfers

**Example**: $250,000 sale
- $250,000 ÷ $100 = 2,500
- 2,500 × $0.70 = **$1,750**

### Miami-Dade Surtax

Miami-Dade County has an additional **$0.45 per $100** surtax on deeds.

Total in Miami-Dade: $0.70 + $0.45 = **$1.15 per $100**

### Documentary Stamps on Notes

**Intangible Tax on Notes/Mortgages**:
- Rate: **$0.35 per $100** of debt
- Paid by **borrower**
- Applies to new mortgages

**Example**: $200,000 mortgage
- $200,000 ÷ $100 = 2,000
- 2,000 × $0.35 = **$700**

### Intangible Tax (Repealed)

Florida previously had a **non-recurring intangible tax** on new mortgages:
- Rate was $0.002 per $1 (2 mills)
- **Repealed effective January 1, 2007**
- No longer applies to new mortgages

### Recording Fees

In addition to taxes:
- Recording fee per page
- Varies by county
- Paid at time of recording`,
      keyPoints: [
        'Doc stamps on deeds: $0.70 per $100 (seller pays)',
        'Miami-Dade surtax: additional $0.45 per $100',
        'Doc stamps on notes: $0.35 per $100 (borrower pays)',
        'Intangible tax repealed January 1, 2007',
        'Exemptions include gifts between spouses'
      ],
      examTips: [
        '$0.70/$100 on deeds (seller), $0.35/$100 on notes (borrower)',
        'Miami-Dade adds $0.45 surtax',
        'Intangible tax NO LONGER applies (repealed 2007)',
        'Round UP to nearest $100 for calculations'
      ]
    }
  ],

  flashcards: [
    // TITLE VS DEED
    {
      front: 'What is the difference between title and a deed?',
      back: 'TITLE = The RIGHT of ownership (concept)\nDEED = The DOCUMENT that transfers title',
      difficulty: 'easy'
    },
    {
      front: 'What is required to have valid title transfer?',
      back: 'Valid DEED that is properly executed and DELIVERED (and accepted by grantee)',
      difficulty: 'medium'
    },
    
    // TYPES OF DEEDS
    {
      front: 'Which deed provides the MOST protection for the buyer?',
      back: 'GENERAL WARRANTY DEED - Contains full warranties for ENTIRE chain of title (all prior owners)',
      difficulty: 'easy'
    },
    {
      front: 'Which deed provides LIMITED warranties?',
      back: 'SPECIAL WARRANTY DEED - Only warrants against defects during GRANTOR\'S ownership period',
      difficulty: 'medium'
    },
    {
      front: 'Which deed provides NO warranties?',
      back: 'QUITCLAIM DEED - Transfers whatever interest grantor has (if any). No guarantees at all.',
      difficulty: 'easy'
    },
    {
      front: 'When is a quitclaim deed typically used?',
      back: '• Clearing title clouds\n• Adding/removing spouse from title\n• Transfers between family members\n• Correcting deed errors',
      difficulty: 'medium'
    },
    {
      front: 'What are the six covenants in a general warranty deed?',
      back: '1. Seisin (grantor owns)\n2. Right to Convey\n3. Against Encumbrances\n4. Quiet Enjoyment\n5. Warranty Forever\n6. Further Assurance',
      difficulty: 'hard'
    },
    
    // DEED REQUIREMENTS
    {
      front: 'Is a grantee\'s signature required on a deed?',
      back: 'NO - Only GRANTOR must sign. Grantee does not sign.',
      difficulty: 'medium'
    },
    {
      front: 'What is required to RECORD a deed in Florida?',
      back: '• TWO WITNESSES to grantor\'s signature\n• Acknowledgment (notarization)\n• Documentary stamp tax paid',
      difficulty: 'medium'
    },
    {
      front: 'Must a deed be recorded to be valid?',
      back: 'NO - Recording is not required for validity. However, recording provides CONSTRUCTIVE NOTICE and protects against subsequent buyers.',
      difficulty: 'hard'
    },
    {
      front: 'What is required for a VALID deed?',
      back: '• Competent grantor\n• Identifiable grantee\n• Legal description\n• Granting clause\n• Grantor\'s signature\n• DELIVERY and acceptance',
      difficulty: 'medium'
    },
    
    // RECORDING & NOTICE
    {
      front: 'What type of recording state is Florida?',
      back: 'RACE-NOTICE state - Must record FIRST AND be WITHOUT NOTICE of prior unrecorded interests',
      difficulty: 'medium'
    },
    {
      front: 'What is CONSTRUCTIVE notice?',
      back: 'Notice from PUBLIC RECORDS - You "should have known" from recorded documents',
      difficulty: 'medium'
    },
    {
      front: 'What is ACTUAL notice?',
      back: 'DIRECT KNOWLEDGE - You were told directly or observed something yourself',
      difficulty: 'medium'
    },
    {
      front: 'What is INQUIRY notice?',
      back: 'Notice from RED FLAGS - Something that would cause a reasonable person to investigate further',
      difficulty: 'medium'
    },
    
    // TRANSFER TAXES
    {
      front: 'What is the documentary stamp tax rate on DEEDS in Florida?',
      back: '$0.70 per $100 of consideration - Paid by SELLER',
      difficulty: 'medium'
    },
    {
      front: 'What is the documentary stamp tax rate on NOTES in Florida?',
      back: '$0.35 per $100 of debt - Paid by BORROWER (buyer)',
      difficulty: 'medium'
    },
    {
      front: 'What is the additional doc stamp rate in Miami-Dade County?',
      back: '$0.45 extra per $100 (total $1.15 per $100 in Miami-Dade)',
      difficulty: 'hard'
    },
    
    // TITLE ISSUES
    {
      front: 'What is a cloud on title?',
      back: 'Any claim, lien, or encumbrance that may AFFECT or IMPAIR ownership',
      difficulty: 'medium'
    },
    {
      front: 'What is a quiet title action?',
      back: 'A LAWSUIT to remove clouds and establish clear, marketable title',
      difficulty: 'medium'
    },
    {
      front: 'What is the MRTA 30-year rule?',
      back: 'Marketable Record Title Act - Extinguishes most old interests after 30 YEARS from root of title (clears old restrictions)',
      difficulty: 'hard'
    },
    
    // TITLE INSURANCE
    {
      front: 'What are the two types of title insurance policies?',
      back: 'OWNER\'S POLICY: Protects buyer (optional)\nLENDER\'S POLICY: Protects lender (required for mortgage)',
      difficulty: 'easy'
    },
    {
      front: 'How long does title insurance coverage last?',
      back: 'Owner\'s policy: FOREVER (as long as you or heirs own)\nLender\'s policy: Until loan paid off',
      difficulty: 'medium'
    },
    {
      front: 'When is title insurance premium paid?',
      back: 'ONE TIME at closing. No annual premiums.',
      difficulty: 'easy'
    },
    
    // RESTRICTIONS
    {
      front: 'When deed restrictions and zoning conflict, which controls?',
      back: 'The MORE RESTRICTIVE requirement controls. Follow whichever is stricter.',
      difficulty: 'medium'
    },
    {
      front: 'What is escheat?',
      back: 'Property transfers to STATE when owner dies without a will and without heirs. Part of PETE powers.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'Which deed provides the MOST protection to a buyer?',
      options: [
        'Quitclaim deed',
        'Bargain and sale deed',
        'Special warranty deed',
        'General warranty deed'
      ],
      correct: 3,
      explanation: 'A general warranty deed provides the most protection because it contains warranties that cover the entire chain of title, not just the current grantor\'s period of ownership.'
    },
    {
      question: 'A quitclaim deed:',
      options: [
        'Guarantees the grantor owns the property',
        'Transfers whatever interest the grantor has, if any',
        'Requires title insurance',
        'Is illegal in Florida'
      ],
      correct: 1,
      explanation: 'A quitclaim deed transfers whatever interest the grantor has, without any warranties. The grantor may have full ownership, partial ownership, or no ownership at all.'
    },
    {
      question: 'Which of the following is NOT required for a valid deed?',
      options: [
        'Grantor\'s signature',
        'Grantee\'s signature',
        'Legal description',
        'Consideration statement'
      ],
      correct: 1,
      explanation: 'A grantee\'s signature is NOT required for a valid deed. Only the grantor must sign. The grantee accepts the deed through acceptance and possession.'
    },
    {
      question: 'To record a deed in Florida, which is required?',
      options: [
        'Grantee\'s signature',
        'Attorney approval',
        'Two witnesses and acknowledgment',
        'Title insurance'
      ],
      correct: 2,
      explanation: 'Florida requires two witnesses to the grantor\'s signature and an acknowledgment (notarization) to record a deed.'
    },
    {
      question: 'Florida is what type of recording state?',
      options: [
        'Race state',
        'Notice state',
        'Race-notice state',
        'Pure recording state'
      ],
      correct: 2,
      explanation: 'Florida is a race-notice state. To have priority, you must both record first AND be without notice of prior unrecorded interests.'
    },
    {
      question: 'Recording a deed provides:',
      options: [
        'Actual notice',
        'Constructive notice',
        'Title insurance',
        'Warranty of title'
      ],
      correct: 1,
      explanation: 'Recording provides constructive notice - the world is deemed to know about recorded documents even if they haven\'t actually searched the records.'
    },
    {
      question: 'The documentary stamp tax on a deed in Florida is:',
      options: [
        '$0.35 per $100',
        '$0.70 per $100',
        '$1.00 per $100',
        '$2.00 per $100'
      ],
      correct: 1,
      explanation: 'The documentary stamp tax on deeds in Florida is $0.70 per $100 of consideration. This is customarily paid by the seller.'
    },
    {
      question: 'Documentary stamps on notes/mortgages are paid by:',
      options: [
        'The seller',
        'The buyer/borrower',
        'The lender',
        'The title company'
      ],
      correct: 1,
      explanation: 'Documentary stamps on notes/mortgages are paid by the borrower (buyer). The rate is $0.35 per $100 of the loan amount.'
    },
    {
      question: 'An owner\'s title insurance policy:',
      options: [
        'Must be renewed annually',
        'Decreases as the mortgage is paid down',
        'Protects the buyer for as long as they own the property',
        'Is optional and rarely purchased'
      ],
      correct: 2,
      explanation: 'An owner\'s title insurance policy is paid once at closing and protects the buyer for as long as they have an interest in the property. It does not decrease like a lender\'s policy.'
    },
    {
      question: 'When deed restrictions and zoning conflict:',
      options: [
        'Zoning always prevails',
        'Deed restrictions always prevail',
        'The more restrictive requirement controls',
        'The owner can choose which to follow'
      ],
      correct: 2,
      explanation: 'When deed restrictions and zoning have different requirements, the MORE restrictive requirement controls. For example, if zoning allows 30-foot setbacks but deed restrictions require 40 feet, 40 feet applies.'
    },
    {
      question: 'Deed restrictions are enforced by:',
      options: [
        'The police',
        'The zoning department',
        'Property owners or HOA',
        'The county recorder'
      ],
      correct: 2,
      explanation: 'Deed restrictions are private, not governmental. They are enforced by other property owners in the subdivision or by the homeowners association through lawsuits or HOA fines.'
    },
    {
      question: 'The Marketable Record Title Act (MRTA) extinguishes old interests after:',
      options: [
        '10 years',
        '20 years',
        '30 years',
        '50 years'
      ],
      correct: 2,
      explanation: 'MRTA extinguishes most old claims and interests after 30 years from a "root of title," helping to clear old defects and simplify title searches.'
    },
    {
      question: 'A special warranty deed warrants against defects:',
      options: [
        'For the entire chain of title',
        'Only during the grantor\'s period of ownership',
        'For defects discovered within 5 years',
        'Only if title insurance is purchased'
      ],
      correct: 1,
      explanation: 'A special warranty deed only warrants against defects that arose during the grantor\'s period of ownership, not against defects from previous owners.'
    },
    {
      question: 'A lawsuit to clear a cloud on title is called:',
      options: [
        'Lis pendens',
        'Quiet title action',
        'Partition suit',
        'Interpleader'
      ],
      correct: 1,
      explanation: 'A quiet title action is a lawsuit brought to establish clear title by removing clouds (claims or defects) from the title.'
    },
    {
      question: 'Which type of title evidence involves a one-time premium at closing?',
      options: [
        'Abstract of title',
        'Attorney opinion',
        'Title insurance',
        'Title certificate'
      ],
      correct: 2,
      explanation: 'Title insurance involves a one-time premium paid at closing. Unlike other insurance, it is not renewed annually - one payment provides protection for as long as the insured has an interest.'
    }
  ],

  caseStudies: [
    {
      id: 'ch9-case1',
      title: 'The Double Sale',
      scenario: 'Owner Oscar sells his house to Buyer A on Monday. Buyer A doesn\'t record the deed. On Wednesday, Oscar sells the same house to Buyer B, who records immediately. Buyer B had no knowledge of the sale to Buyer A.',
      question: 'Who owns the property in Florida?',
      answer: 'Buyer B owns the property. Florida is a race-notice state. Buyer B recorded first AND had no notice of the prior sale to Buyer A. Under race-notice rules, Buyer B\'s recorded deed takes priority over Buyer A\'s unrecorded deed. Buyer A\'s only remedy is to sue Oscar for fraud/damages. This case demonstrates why recording immediately is crucial.',
      examRelevance: 'Tests understanding of Florida\'s race-notice recording system. Key points: recording first + no notice = priority. Failure to record can result in losing the property.'
    },
    {
      id: 'ch9-case2',
      title: 'The Old Restriction',
      scenario: 'A subdivision was created in 1980 with deed restrictions requiring all homes to have wood siding. In 2020, a new owner wants to use vinyl siding. The restrictions were never re-recorded since 1980. It\'s now been 40+ years since the restrictions were recorded.',
      question: 'Can the new owner use vinyl siding despite the deed restriction?',
      answer: 'Possibly yes. Under Florida\'s Marketable Record Title Act (MRTA), deed restrictions can be extinguished after 30 years if not re-recorded. Since the restrictions were recorded in 1980 and it\'s now 40+ years later without re-recording a Notice of Preservation, the restrictions may have been extinguished by MRTA. However, if an HOA exists and has been actively enforcing restrictions, or if a Notice of Preservation was filed, the restrictions could still be valid. The owner should have a title search confirm the status.',
      examRelevance: 'Tests understanding of MRTA and how restrictions can be extinguished after 30 years. Key point: deed restrictions must be re-recorded or preserved to remain enforceable beyond 30 years.'
    }
  ],

  summary: `Chapter 9 covers titles, deeds, and restrictions in real estate transfers.

**Title Concepts**:
- Title = right of ownership; Deed = document transferring title
- Marketable title = free from reasonable doubt
- Chain of title = history of transfers
- Cloud on title = defect affecting ownership
- Quiet title action = lawsuit to clear clouds

**Deed Types** (most to least protection):
1. General Warranty - full warranties, entire chain
2. Special Warranty - warranties only grantor's period
3. Bargain and Sale - implies ownership, no warranties
4. Quitclaim - no warranties at all

**Valid Deed Requirements**:
- Competent grantor, identifiable grantee
- Consideration, granting clause, legal description
- Grantor's signature, delivery and acceptance
- NOT required: grantee signature, recording

**Florida Recording**:
- Race-Notice state (record first + no notice = priority)
- Requires 2 witnesses + notarization
- Record at Clerk of Circuit Court

**Title Insurance**:
- Owner's policy = purchase price, protects buyer
- Lender's policy = loan amount, protects lender
- One-time premium at closing

**Deed Restrictions**:
- Private, not government
- Enforced by owners/HOA
- More restrictive rule wins vs. zoning

**Transfer Taxes**:
- Deeds: $0.70 per $100 (seller pays)
- Notes: $0.35 per $100 (borrower pays)
- Miami-Dade surtax: additional $0.45/$100

**MRTA**: Extinguishes old interests after 30 years`
};

export default CHAPTER_9;
