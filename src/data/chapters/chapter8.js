/**
 * Chapter 8: Property Rights & Estates
 * 
 * Covers 8% of the Florida Real Estate Exam
 * Focus: Types of ownership, estates, and property rights
 */

export const CHAPTER_8 = {
  id: 8,
  title: 'Property Rights & Estates',
  subtitle: 'Ownership Types and Rights',
  examPercentage: 8,
  requiredTimeMinutes: 240, // 4 hours minimum
  color: '#EC4899', // Pink
  icon: 'Home',
  
  objectives: [
    'Distinguish between real property and personal property',
    'Understand the bundle of legal rights in property ownership',
    'Identify the types of freehold and leasehold estates',
    'Explain the various forms of concurrent ownership',
    'Describe the methods of acquiring and transferring property',
    'Understand easements, liens, and encumbrances',
    'Explain homestead protection in Florida'
  ],

  statutes: [
    { code: 'F.S. 689', title: 'Conveyances of Land', summary: 'Requirements for property transfers' },
    { code: 'F.S. 196.031', title: 'Homestead Exemption', summary: 'Property tax exemption for homestead' },
    { code: 'Art. X, Sec. 4', title: 'Florida Constitution - Homestead', summary: 'Constitutional homestead protection' },
    { code: 'F.S. 732', title: 'Probate Code', summary: 'Descent and distribution of property' },
    { code: 'F.S. 713', title: 'Liens', summary: 'Mechanic\'s liens and construction liens' }
  ],

  sections: [
    {
      id: '8.1',
      title: 'Real Property vs. Personal Property',
      content: `## Understanding Property Types

The distinction between real and personal property is fundamental to real estate.

### Real Property (Realty)

**Real property** includes:
- **Land** - the surface, subsurface (to center of earth), and airspace (reasonable use)
- **Improvements** - permanent structures attached to land
- **Fixtures** - personal property that becomes real property
- **Appurtenances** - rights that go with the land

### Personal Property (Personalty)

**Personal property** includes:
- **Movable items** - furniture, vehicles, equipment
- **Trade fixtures** - business equipment (remain personal property)
- **Emblements** - annual crops planted by tenant

### The MARIA Test for Fixtures

To determine if an item is a fixture (real property), use **MARIA**:

**M - Method of Attachment**
- How is it attached? Permanently = fixture

**A - Adaptability**
- Is it adapted to the property's use?

**R - Relationship of Parties**
- Buyer vs. seller disputes favor buyer
- Landlord vs. tenant disputes favor landlord

**I - Intent**
- Most important factor
- What was the intent when installed?

**A - Agreement**
- What does the contract say?
- Written agreement controls

### Examples

**Fixtures (Real Property)**:
- Built-in appliances
- Ceiling fans
- Garage door openers
- Landscaping
- Fences

**Personal Property**:
- Furniture
- Area rugs
- Portable appliances
- Window AC units (usually)
- Potted plants`,
      keyPoints: [
        'Real property = land, improvements, fixtures, appurtenances',
        'Personal property = movable items, trade fixtures, emblements',
        'MARIA test determines if item is fixture',
        'Intent is most important factor in fixture determination',
        'Written agreement controls over other factors'
      ],
      examTips: [
        'Memorize MARIA: Method, Adaptability, Relationship, Intent, Agreement',
        'Intent is the MOST important factor',
        'Trade fixtures remain personal property',
        'Emblements (crops) are personal property'
      ]
    },
    {
      id: '8.2',
      title: 'Bundle of Legal Rights',
      content: `## The Bundle of Rights

Property ownership is often described as a "bundle of rights" - a collection of legal rights that come with ownership.

### The Five Rights

**1. Right of Possession**
- The right to occupy and use the property
- Foundation of all other rights

**2. Right of Control**
- The right to determine how the property is used
- Subject to laws and regulations

**3. Right of Enjoyment**
- The right to use property in any legal manner
- "Quiet enjoyment" of the property

**4. Right of Exclusion**
- The right to keep others off the property
- Can exclude anyone except those with legal right of entry

**5. Right of Disposition**
- The right to sell, lease, gift, or will the property
- The right to transfer ownership

### Limitations on Rights

Property rights are not absolute. Limitations include:

**Government Powers (PETE)**:
- **P**olice Power - regulations for health, safety, welfare
- **E**minent Domain - government can take for public use (with compensation)
- **T**axation - government can tax property
- **E**scheat - property goes to state if owner dies without heirs or will

**Private Limitations**:
- Deed restrictions
- Easements
- Liens
- Encroachments

### Allodial vs. Feudal System

**United States uses the Allodial System**:
- Individuals can own property outright
- Property rights come from law, not from a lord
- Owner has full bundle of rights (subject to limitations)

**Feudal System** (not used in US):
- All land owned by sovereign
- Individuals only have use rights`,
      keyPoints: [
        'Bundle of rights: Possession, Control, Enjoyment, Exclusion, Disposition',
        'Government powers: PETE (Police, Eminent Domain, Taxation, Escheat)',
        'US uses allodial system (individual ownership)',
        'Rights are subject to government and private limitations',
        'Eminent domain requires just compensation'
      ],
      examTips: [
        'Know all 5 rights in the bundle',
        'PETE = government powers limiting ownership',
        'Escheat = property goes to state (no heirs)',
        'Eminent domain = government taking (5th Amendment)'
      ]
    },
    {
      id: '8.3',
      title: 'Freehold Estates',
      content: `## Freehold Estates

**Freehold estates** are ownership interests of indefinite duration (not measured by time).

### Fee Simple Absolute

**Highest form of ownership**:
- Most complete ownership possible
- Indefinite duration
- Fully inheritable
- Can be sold, mortgaged, or willed
- Also called "fee simple" or "fee"

**Language**: "To A and his heirs" (or just "To A")

### Fee Simple Defeasible

Ownership that can be lost if conditions are violated:

**Fee Simple Determinable**
- Automatically ends if condition occurs
- Language: "so long as," "while," "during"
- Example: "To A so long as used for school purposes"
- Future interest: **Possibility of Reverter** (returns to grantor)

**Fee Simple Subject to Condition Subsequent**
- Grantor must take action to reclaim
- Language: "but if," "provided that," "on condition that"
- Example: "To A, but if alcohol is sold, grantor may re-enter"
- Future interest: **Right of Re-entry/Power of Termination**

### Life Estate

**Ownership for the duration of someone's life**:

**Ordinary Life Estate**
- Measured by the life of the life tenant
- "To A for life" or "To A for life, then to B"
- Life tenant has full use but cannot waste the property

**Life Estate Pur Autre Vie**
- Measured by the life of another person
- "To A for the life of B"
- Ends when measuring life (B) dies

### Future Interests

**Remainder**: Goes to third party after life estate
- "To A for life, then to B" (B has remainder)

**Reversion**: Returns to grantor after life estate
- "To A for life" (grantor keeps reversion)

### Life Tenant Rights and Duties

**Rights**:
- Possession and use during lifetime
- Income from property
- Can lease or mortgage (limited to life estate)

**Duties**:
- Pay property taxes
- Maintain property
- Not commit waste (damage)`,
      keyPoints: [
        'Fee simple absolute = highest and most complete ownership',
        'Fee simple defeasible = can be lost if conditions violated',
        'Life estate = ownership for duration of a life',
        'Remainder = future interest to third party',
        'Reversion = future interest back to grantor'
      ],
      examTips: [
        'Fee simple absolute is the DEFAULT estate',
        '"So long as" = determinable (automatic)',
        '"But if" = condition subsequent (action required)',
        'Life tenant must not commit waste'
      ]
    },
    {
      id: '8.4',
      title: 'Leasehold Estates',
      content: `## Leasehold Estates (Less Than Freehold)

**Leasehold estates** are possessory interests for a definite or determinable period.

### Types of Leasehold Estates

**1. Estate for Years (Tenancy for Years)**
- Definite beginning and ending date
- Automatically terminates at end date
- No notice required to terminate
- Can be any length (despite the name)
- Example: Lease from Jan 1 to Dec 31

**2. Estate from Period to Period (Periodic Tenancy)**
- Continues for successive periods until terminated
- Requires notice to terminate
- Common examples: month-to-month, year-to-year
- Notice typically equals one period (30 days for month-to-month)

**3. Estate at Will (Tenancy at Will)**
- No definite period
- Either party can terminate at any time
- Created by permission without lease terms
- Very informal arrangement

**4. Estate at Sufferance (Tenancy at Sufferance)**
- Tenant remains after lease expires without permission
- Lowest form of tenancy
- Tenant called "holdover tenant"
- Landlord can evict or create new tenancy

### Key Distinctions

| Type | Duration | Notice to Terminate |
|------|----------|---------------------|
| For Years | Fixed dates | Not required |
| Periodic | Indefinite | Required (one period) |
| At Will | Indefinite | None (either party, any time) |
| At Sufferance | None (wrongful) | Eviction proceeding |

### Florida Lease Requirements

**Written lease required** for terms over **1 year** (Statute of Frauds)

**Residential leases** must:
- Disclose landlord/agent name and address
- Include radon disclosure language
- Comply with security deposit rules`,
      keyPoints: [
        'Estate for years = fixed dates, no notice to terminate',
        'Periodic tenancy = continues until notice given',
        'Tenancy at will = either party can terminate anytime',
        'Tenancy at sufferance = holdover without permission',
        'Leases over 1 year must be in writing'
      ],
      examTips: [
        'Estate for years has definite end date',
        'Periodic tenancy needs notice equal to one period',
        'At sufferance = holdover tenant',
        'Statute of Frauds: >1 year lease must be written'
      ]
    },
    {
      id: '8.5',
      title: 'Concurrent Ownership',
      content: `## Forms of Co-Ownership

Multiple people can own property together in several ways.

### Tenancy in Common

**Default form of co-ownership**:
- Each owner has undivided interest
- Interests may be unequal (50/50, 60/40, etc.)
- Each can sell, mortgage, or will their share
- No right of survivorship
- Interest passes to heirs upon death

### Joint Tenancy

**Unity of ownership with right of survivorship**:

Requires **Four Unities (TTIP)**:
- **T**ime - acquired at same time
- **T**itle - same deed/document
- **I**nterest - equal shares
- **P**ossession - equal right to possess whole

**Right of Survivorship**: When one owner dies, their share automatically passes to surviving owner(s) - NOT to heirs

**Breaking Joint Tenancy**: If one owner sells or conveys their interest, joint tenancy becomes tenancy in common for that share

### Tenancy by the Entireties

**Special form for married couples only**:
- Requires all four unities PLUS marriage
- Both spouses must agree to sell/mortgage
- Right of survivorship
- Creditor of one spouse cannot attach property
- Only available to **married couples**
- Automatically becomes tenancy in common upon divorce

### Comparison

| Feature | Tenancy in Common | Joint Tenancy | Tenancy by Entireties |
|---------|------------------|---------------|----------------------|
| Equal shares required | No | Yes | Yes |
| Right of survivorship | No | Yes | Yes |
| Can be willed | Yes | No | No |
| Creditor can attach | Yes | Yes (their share) | No (one spouse) |
| Who can hold | Anyone | Anyone | Married couples only |`,
      keyPoints: [
        'Tenancy in common = default, no survivorship, unequal shares OK',
        'Joint tenancy = TTIP unities, right of survivorship',
        'Tenancy by entireties = married couples, extra protection',
        'Joint tenancy survivorship: share passes to survivors',
        'Breaking unity converts joint tenancy to tenancy in common'
      ],
      examTips: [
        'TTIP = Time, Title, Interest, Possession',
        'Tenancy in common is the DEFAULT',
        'Tenancy by entireties = married couples ONLY',
        'Survivorship means NOT inheritable'
      ]
    },
    {
      id: '8.6',
      title: 'Florida Homestead',
      content: `## Florida Homestead Protection

Florida has strong homestead protections in its constitution (Article X, Section 4).

### Three Aspects of Homestead

**1. Property Tax Exemption**
- Up to **$50,000** exemption on assessed value
- Must be permanent residence as of January 1
- Must file with Property Appraiser
- **Save Our Homes**: Limits assessment increases to 3% per year

**2. Creditor Protection**
- Homestead protected from forced sale by creditors
- Exceptions: mortgages, property taxes, mechanics' liens, HOA liens

**3. Restriction on Devise (Inheritance)**
- Cannot will homestead away from spouse or minor children
- Spouse has right to homestead for life
- Protects family from being left homeless

### Homestead Size Limits

**Within Municipality**:
- Up to **1/2 acre** (0.5 acres)

**Outside Municipality**:
- Up to **160 acres**

### Requirements

To qualify as homestead:
- Must be **permanent residence**
- Must be **natural person** (not corporation)
- Must be **Florida resident**
- Can only have **one homestead**

### Portability

**"Save Our Homes" Portability**:
- Can transfer up to $500,000 of accumulated benefit
- Must establish new homestead within 3 years
- Must file for portability when claiming new exemption

### Important Notes

- Mobile homes can qualify if on owned land
- Must file new application if property changes
- Renting out part of home may affect exemption
- Cannot abandon homestead while claiming it elsewhere`,
      keyPoints: [
        'Up to $50,000 tax exemption on primary residence',
        'Protected from most creditors (exceptions: mortgage, taxes, mechanics liens)',
        'Cannot will away from spouse or minor children',
        'Size: 1/2 acre in city, 160 acres outside',
        'Save Our Homes limits assessment increases to 3%/year'
      ],
      examTips: [
        '$50,000 exemption, 1/2 acre city, 160 acres rural',
        'Cannot be forced to sell for most debts',
        'Spouse and minor children protected',
        '3% cap on assessment increases (Save Our Homes)'
      ]
    },
    {
      id: '8.7',
      title: 'Easements',
      content: `## Understanding Easements

An **easement** is the right to use another's land for a specific purpose.

### Types of Easements

**Easement Appurtenant**
- Benefits a neighboring property
- Requires two parcels:
  - **Dominant estate**: benefits from easement
  - **Servient estate**: burdened by easement
- Runs with the land (transfers with ownership)
- Example: Driveway across neighbor's property

**Easement in Gross**
- Benefits a person or company, not land
- Only one parcel involved (servient estate)
- Usually does not transfer with property
- Example: Utility company easement

### Creating Easements

**1. Express Grant/Reservation**
- Written agreement creating easement
- Most common method

**2. Implication**
- Created by circumstances
- Previous common use that was apparent

**3. Necessity**
- Landlocked property has no other access
- Courts will create easement for access

**4. Prescription**
- Like adverse possession for easements
- Must be open, notorious, continuous, adverse
- Florida requires **20 years**

### Terminating Easements

**Release**: Easement holder gives it up in writing

**Merger**: Same person owns both properties

**Abandonment**: Non-use plus intent to abandon

**End of Purpose**: Purpose no longer exists

**Expiration**: Stated time period ends

### Party Wall Easement

Wall built on property line shared by neighbors:
- Each owner owns half
- Each has easement for support in other's half
- Common with townhouses, row houses`,
      keyPoints: [
        'Easement appurtenant = benefits land (dominant/servient estates)',
        'Easement in gross = benefits person/company, not land',
        'Created by: grant, implication, necessity, prescription (20 years)',
        'Terminated by: release, merger, abandonment, end of purpose',
        'Runs with the land (appurtenant) transfers with property'
      ],
      examTips: [
        'Appurtenant = between lands; In gross = to a person',
        'Prescription = 20 years in Florida',
        'Necessity = landlocked property',
        'Dominant benefits, Servient is burdened'
      ]
    },
    {
      id: '8.8',
      title: 'Liens and Encumbrances',
      content: `## Encumbrances on Property

An **encumbrance** is any claim, charge, or liability against property.

### Types of Encumbrances

**Liens**: Financial claims (can force sale)
**Easements**: Rights to use
**Deed Restrictions**: Limitations on use
**Encroachments**: Physical intrusions

### Types of Liens

**Voluntary Liens**:
- Created by property owner's action
- Example: **Mortgage** (most common)

**Involuntary Liens**:
- Created without owner's consent
- Examples: Tax liens, judgment liens, mechanic's liens

**General Liens**:
- Attach to all property of debtor
- Example: Judgment liens, IRS liens

**Specific Liens**:
- Attach to specific property only
- Example: Mortgage, property tax lien, mechanic's lien

### Lien Priority

**Generally, first in time = first in right**

**Exceptions**:
1. **Property tax liens** - always first priority
2. **Special assessment liens** - typically high priority
3. **Federal tax liens** - follow recording rules
4. **Mechanic's liens** - may relate back to start of work

### Mechanic's Liens (Construction Liens)

Florida Construction Lien Law protects contractors, subcontractors, materialmen:

**Requirements**:
- Must provide **Notice to Owner** (within 45 days of first furnishing)
- Must file lien within **90 days** of last work
- Must file lawsuit within **1 year** of filing lien

**Notice of Commencement**:
- Owner posts when construction begins
- Provides information about project
- Contractors must check before starting

### Lis Pendens

"Litigation pending" - notice that lawsuit has been filed affecting the property
- Filed in public records
- Warns potential buyers of claim`,
      keyPoints: [
        'Property tax liens always have first priority',
        'General lien = all property; Specific lien = one property',
        'Voluntary = owner created; Involuntary = without consent',
        'Mechanic\'s lien: Notice to Owner within 45 days, file within 90 days',
        'Lis pendens = notice of pending lawsuit'
      ],
      examTips: [
        'Property taxes ALWAYS first priority',
        'Mortgage = voluntary specific lien',
        'Judgment = involuntary general lien',
        'Mechanic\'s lien: 45 days notice, 90 days to file'
      ]
    },
    {
      id: '8.9',
      title: 'Methods of Acquiring Property',
      content: `## Ways to Acquire Real Property

Property can be acquired through various methods.

### Voluntary Transfer

**Purchase/Sale**
- Most common method
- Requires deed to transfer title

**Gift**
- No consideration required
- Still requires deed
- Gift tax may apply

**Will (Devise)**
- Transfer at death through probate
- Real property = "devise"
- Personal property = "bequest" or "legacy"

### Involuntary Transfer

**Descent (Intestate Succession)**
- Transfer when owner dies without will
- Property passes to heirs by law
- Florida has specific rules for intestate distribution

**Escheat**
- Property goes to state
- Occurs when owner dies without will AND without heirs

**Eminent Domain (Condemnation)**
- Government takes property for public use
- Must pay just compensation
- Process called condemnation

**Foreclosure**
- Forced sale to pay debt
- Mortgage foreclosure most common

**Adverse Possession**
- Acquiring title through use
- Must be: Open, Notorious, Hostile, Exclusive, Continuous
- Florida requires **7 years** with color of title
- Without color of title: **7 years** plus payment of taxes

### Natural Processes

**Accretion**: Gradual addition of land by water depositing soil

**Reliction**: Gradual receding of water exposing new land

**Erosion**: Gradual loss of land to water

**Avulsion**: Sudden change (flood, earthquake) - ownership doesn't change

### Dedication

Owner voluntarily gives land for public use:
- **Statutory**: Formal process, recorded
- **Common Law**: By actions/use over time`,
      keyPoints: [
        'Devise = real property by will; Bequest = personal property',
        'Escheat = to state (no heirs)',
        'Adverse possession: 7 years in Florida',
        'Accretion = land added; Reliction = water recedes; Erosion = land lost',
        'Eminent domain requires just compensation'
      ],
      examTips: [
        'Adverse possession = 7 years in Florida',
        'Accretion adds land, erosion removes it',
        'Avulsion is sudden - doesn\'t change ownership',
        'Intestate = dying without a will'
      ]
    }
  ],

  flashcards: [
    // FIXTURES & MARIA TEST
    {
      front: 'What does MARIA stand for in the fixture test?',
      back: '• Method of attachment\n• Adaptability to property\n• Relationship of parties\n• Intent (MOST IMPORTANT)\n• Agreement in contract',
      difficulty: 'easy'
    },
    {
      front: 'Which MARIA factor is MOST important?',
      back: 'INTENT - What did the parties intend? Was the item meant to be permanent or temporary?',
      difficulty: 'medium'
    },
    {
      front: 'What are trade fixtures?',
      back: 'Items installed by COMMERCIAL TENANT for business. Remain PERSONAL PROPERTY of tenant - can be removed before lease ends.',
      difficulty: 'medium'
    },
    
    // BUNDLE OF RIGHTS & GOVERNMENT POWERS
    {
      front: 'What are the five rights in the bundle of rights?',
      back: 'DEEPC:\n• Disposition (sell, transfer)\n• Enjoyment (use)\n• Exclusion (keep others out)\n• Possession (occupy)\n• Control (determine use)',
      difficulty: 'medium'
    },
    {
      front: 'What does PETE stand for (government powers)?',
      back: '• Police power (regulate, NO compensation)\n• Eminent domain (take, WITH compensation)\n• Taxation\n• Escheat (property to state if no heirs)',
      difficulty: 'medium'
    },
    
    // FREEHOLD ESTATES
    {
      front: 'What is the highest form of property ownership?',
      back: 'FEE SIMPLE ABSOLUTE - Complete ownership, unlimited duration, fully transferable, no conditions',
      difficulty: 'easy'
    },
    {
      front: 'What is fee simple defeasible?',
      back: 'Ownership WITH CONDITIONS. Can be lost if conditions are violated. Also called qualified fee or conditional fee.',
      difficulty: 'medium'
    },
    {
      front: 'What is a life estate?',
      back: 'Ownership LIMITED to someone\'s lifetime (measuring life). When that person dies, property passes to remainderman or reverter.',
      difficulty: 'medium'
    },
    {
      front: 'What is a remainderman?',
      back: 'Person who receives property AFTER life estate ends. Named in the deed creating the life estate.',
      difficulty: 'medium'
    },
    {
      front: 'Can a life estate holder commit waste?',
      back: 'NO - Cannot damage or diminish property value. Must maintain property for the remainderman.',
      difficulty: 'medium'
    },
    
    // CO-OWNERSHIP
    {
      front: 'What are the four unities required for joint tenancy?',
      back: 'TTIP:\n• Time (acquire at same time)\n• Title (same deed)\n• Interest (equal shares)\n• Possession (equal right to possess)',
      difficulty: 'medium'
    },
    {
      front: 'What is the key feature of joint tenancy?',
      back: 'RIGHT OF SURVIVORSHIP - When one owner dies, their share automatically passes to surviving owner(s). Avoids probate.',
      difficulty: 'easy'
    },
    {
      front: 'What is tenancy in common (TIC)?',
      back: 'Co-ownership WITHOUT survivorship. Shares pass to HEIRS, not other owners. Can have unequal shares.',
      difficulty: 'medium'
    },
    {
      front: 'Who can hold tenancy by the entireties?',
      back: 'Only MARRIED COUPLES in Florida. Has survivorship AND creditor protection (one spouse\'s creditors can\'t reach property).',
      difficulty: 'easy'
    },
    {
      front: 'What happens to tenancy by entireties if couple divorces?',
      back: 'Automatically converts to TENANCY IN COMMON (no survivorship).',
      difficulty: 'medium'
    },
    {
      front: 'What happens if one joint tenant sells their interest?',
      back: 'The unity is BROKEN. New owner becomes TENANT IN COMMON with remaining owner(s). Survivorship ends for that share.',
      difficulty: 'hard'
    },
    
    // FLORIDA HOMESTEAD
    {
      front: 'What is the Florida homestead TAX EXEMPTION amount?',
      back: 'Up to $50,000:\n• First $25,000 = all taxes\n• Next $25,000 = NON-SCHOOL taxes only',
      difficulty: 'medium'
    },
    {
      front: 'What is the homestead size limit WITHIN a municipality?',
      back: '1/2 ACRE (0.5 acres) or less',
      difficulty: 'medium'
    },
    {
      front: 'What is the homestead size limit OUTSIDE a municipality?',
      back: '160 ACRES contiguous land',
      difficulty: 'medium'
    },
    {
      front: 'What protections does Florida homestead provide?',
      back: '• Tax exemption (up to $50K)\n• Creditor protection (forced sale protection)\n• Descent restrictions (spouse/minor consent needed to sell)',
      difficulty: 'hard'
    },
    {
      front: 'Can a homeowner sell homestead without spouse consent?',
      back: 'NO - If married, BOTH spouses must sign deed. Protects family residence.',
      difficulty: 'medium'
    },
    
    // EASEMENTS
    {
      front: 'What is the difference between easement appurtenant and easement in gross?',
      back: 'APPURTENANT: Benefits land (runs with land, has dominant/servient estates)\nIN GROSS: Benefits person or company (utility easements)',
      difficulty: 'hard'
    },
    {
      front: 'What is a prescriptive easement in Florida?',
      back: '20 YEARS of continuous, open, notorious, ADVERSE use (without permission). Similar to adverse possession.',
      difficulty: 'medium'
    },
    {
      front: 'What is an easement by necessity?',
      back: 'Created when land is LANDLOCKED and needs access. Must have been under common ownership at some point.',
      difficulty: 'medium'
    },
    
    // LIENS
    {
      front: 'Which liens ALWAYS have first priority?',
      back: 'PROPERTY TAX LIENS - Always superior to all other liens, regardless of recording date.',
      difficulty: 'easy'
    },
    {
      front: 'How long does a contractor have to file a mechanic\'s lien in Florida?',
      back: '90 DAYS after last furnishing labor/materials',
      difficulty: 'medium'
    },
    {
      front: 'What is a general lien vs specific lien?',
      back: 'SPECIFIC: Attaches to ONE property (mortgage, property tax)\nGENERAL: Attaches to ALL property (judgment, IRS tax lien)',
      difficulty: 'medium'
    },
    
    // ADVERSE POSSESSION
    {
      front: 'How many years for adverse possession in Florida?',
      back: '7 YEARS with either:\n• Color of title, OR\n• Payment of property taxes',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'The MOST important factor in determining if an item is a fixture is:',
      options: [
        'Method of attachment',
        'Adaptability',
        'Intent',
        'Agreement'
      ],
      correct: 2,
      explanation: 'While all MARIA factors are considered, Intent is the most important factor in determining if an item is a fixture.'
    },
    {
      question: 'Which government power allows the state to take property for public use?',
      options: [
        'Police power',
        'Eminent domain',
        'Escheat',
        'Taxation'
      ],
      correct: 1,
      explanation: 'Eminent domain is the government power to take private property for public use, with just compensation. Police power regulates use, escheat transfers property to state when owner dies without heirs.'
    },
    {
      question: 'A deed states "To A so long as the property is used for educational purposes." This creates:',
      options: [
        'Fee simple absolute',
        'Fee simple determinable',
        'Fee simple subject to condition subsequent',
        'Life estate'
      ],
      correct: 1,
      explanation: 'The language "so long as" creates a fee simple determinable. The estate automatically ends if the condition is violated.'
    },
    {
      question: 'Which type of leasehold estate automatically terminates on a specific date?',
      options: [
        'Estate at will',
        'Estate at sufferance',
        'Estate for years',
        'Periodic estate'
      ],
      correct: 2,
      explanation: 'An estate for years has a definite beginning and ending date and automatically terminates - no notice required.'
    },
    {
      question: 'The four unities of joint tenancy are:',
      options: [
        'Time, Title, Interest, Possession',
        'Trust, Title, Income, Property',
        'Time, Transfer, Interest, Partition',
        'Title, Trust, Interest, Possession'
      ],
      correct: 0,
      explanation: 'Joint tenancy requires TTIP: Time (acquired simultaneously), Title (same deed), Interest (equal shares), Possession (equal right to possess).'
    },
    {
      question: 'Which form of ownership provides the greatest creditor protection in Florida?',
      options: [
        'Tenancy in common',
        'Joint tenancy',
        'Tenancy by the entireties',
        'Sole ownership'
      ],
      correct: 2,
      explanation: 'Tenancy by the entireties (for married couples) provides protection from creditors of just one spouse. The creditor cannot attach the property unless both spouses owe the debt.'
    },
    {
      question: 'The Florida homestead exemption provides up to:',
      options: [
        '$25,000 in property tax savings',
        '$50,000 exemption from assessed value',
        '$100,000 protection from creditors',
        '$75,000 reduction in market value'
      ],
      correct: 1,
      explanation: 'The Florida homestead exemption provides up to $50,000 exemption from the assessed value for property tax purposes.'
    },
    {
      question: 'An easement that benefits neighboring land is called:',
      options: [
        'Easement in gross',
        'Easement appurtenant',
        'Prescriptive easement',
        'License'
      ],
      correct: 1,
      explanation: 'An easement appurtenant benefits a neighboring property (dominant estate) and burdens another property (servient estate). It runs with the land.'
    },
    {
      question: 'In Florida, prescriptive easement requires continuous use for:',
      options: [
        '5 years',
        '7 years',
        '10 years',
        '20 years'
      ],
      correct: 3,
      explanation: 'In Florida, a prescriptive easement requires 20 years of continuous, open, notorious, and adverse use.'
    },
    {
      question: 'Which lien always has the highest priority?',
      options: [
        'First mortgage',
        'Mechanic\'s lien',
        'Property tax lien',
        'Judgment lien'
      ],
      correct: 2,
      explanation: 'Property tax liens always have first priority, regardless of when other liens were recorded.'
    },
    {
      question: 'A contractor must file a mechanic\'s lien within how many days of last providing labor/materials?',
      options: [
        '30 days',
        '45 days',
        '90 days',
        '120 days'
      ],
      correct: 2,
      explanation: 'In Florida, a mechanic\'s lien must be filed within 90 days after the last date of furnishing labor or materials.'
    },
    {
      question: 'The gradual addition of land by water depositing soil is called:',
      options: [
        'Reliction',
        'Avulsion',
        'Erosion',
        'Accretion'
      ],
      correct: 3,
      explanation: 'Accretion is the gradual addition of land by water depositing soil. Reliction is water receding, erosion is land washing away, and avulsion is sudden change.'
    },
    {
      question: 'How many years does adverse possession require in Florida?',
      options: [
        '5 years',
        '7 years',
        '10 years',
        '20 years'
      ],
      correct: 1,
      explanation: 'Florida requires 7 years for adverse possession (with color of title or with payment of taxes).'
    },
    {
      question: 'A holdover tenant who remains after lease expiration without permission has:',
      options: [
        'Estate for years',
        'Periodic estate',
        'Estate at will',
        'Estate at sufferance'
      ],
      correct: 3,
      explanation: 'A tenant who remains after lease expiration without the landlord\'s permission has an estate at sufferance (holdover tenancy). This is the lowest form of tenancy.'
    },
    {
      question: 'Which of the following is personal property?',
      options: [
        'Built-in dishwasher',
        'Ceiling fan',
        'Trade fixtures',
        'Fence'
      ],
      correct: 2,
      explanation: 'Trade fixtures remain personal property because they are installed by a business tenant and are intended to be removed. The other items are fixtures (real property).'
    }
  ],

  caseStudies: [
    {
      id: 'ch8-case1',
      title: 'The Disputed Refrigerator',
      scenario: 'Seller Sam has a high-end built-in refrigerator that matches his custom cabinets. The purchase contract does not mention the refrigerator. After closing, buyer Beth discovers Sam removed the refrigerator. Sam claims it was his personal property.',
      question: 'Is the built-in refrigerator a fixture that should have stayed with the property?',
      answer: 'Yes, the built-in refrigerator is likely a fixture that should convey with the property. Using the MARIA test: Method - built into custom cabinets (permanent); Adaptability - designed for this specific kitchen; Relationship - disputes favor buyer; Intent - built-in suggests permanence; Agreement - contract is silent, so other factors control. Since it\'s built-in and custom-fitted, courts would likely rule it\'s a fixture. Sam should not have removed it, and Beth may have a claim for damages.',
      examRelevance: 'Tests understanding of the MARIA fixture test. Key points: built-in items are typically fixtures, silence in contract means other factors control, buyer typically prevails in disputes.'
    },
    {
      id: 'ch8-case2',
      title: 'The Joint Tenancy Problem',
      scenario: 'Alice, Bob, and Carol own property as joint tenants. Bob needs money and sells his 1/3 interest to David without telling Alice and Carol. Shortly after, Carol dies.',
      question: 'What is the ownership status after Carol\'s death?',
      answer: 'After Bob\'s sale, the ownership became: Alice and Carol as joint tenants (2/3), David as tenant in common (1/3). Bob\'s sale broke the joint tenancy with respect to his share. When Carol dies, her share passes to Alice by right of survivorship (they were still joint tenants with each other). Final ownership: Alice owns 2/3, David owns 1/3, as tenants in common. Carol\'s heirs get nothing because of survivorship with Alice.',
      examRelevance: 'Tests understanding of joint tenancy, how it can be severed, and right of survivorship. Key points: selling breaks joint tenancy for that share, survivorship only works between remaining joint tenants.'
    }
  ],

  summary: `Chapter 8 covers property rights, estates, and ownership forms.

**Real vs. Personal Property**:
- Real = land, improvements, fixtures, appurtenances
- MARIA test for fixtures: Method, Adaptability, Relationship, Intent (most important), Agreement
- Trade fixtures remain personal property

**Bundle of Rights**: Possession, Control, Enjoyment, Exclusion, Disposition
**Government Powers (PETE)**: Police power, Eminent domain, Taxation, Escheat

**Freehold Estates**:
- Fee simple absolute = highest ownership
- Fee simple defeasible = conditional ("so long as" or "but if")
- Life estate = for duration of a life

**Leasehold Estates**:
- Estate for years = definite dates, no notice needed
- Periodic = continues until notice
- At will = either party can terminate
- At sufferance = holdover tenant

**Concurrent Ownership**:
- Tenancy in common = default, no survivorship
- Joint tenancy = TTIP unities, survivorship
- Tenancy by entireties = married only, creditor protection

**Florida Homestead**:
- $50,000 tax exemption
- 1/2 acre in city, 160 acres rural
- Creditor protection, cannot will away from spouse/minor children

**Easements**:
- Appurtenant = benefits land, runs with land
- In gross = benefits person/company
- Prescriptive = 20 years in Florida

**Liens**: Property tax always first priority
- Mechanic\'s lien: 90 days to file

**Acquiring Property**: Adverse possession = 7 years in Florida`
};

export default CHAPTER_8;
