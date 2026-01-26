// CHAPTER 1: THE REAL ESTATE BUSINESS
// Exam Weight: 1% (~1 question on state exam)
// Required Study Time: ~3 hours (180 minutes minimum for FREC compliance)

export const CHAPTER_1 = {
  id: 1,
  title: "The Real Estate Business",
  subtitle: "Introduction to Real Estate Principles & Career Opportunities",
  examPercentage: 1,
  requiredTimeMinutes: 180,
  color: "#3B82F6",
  icon: "Building2",
  
  // Learning objectives for this chapter
  objectives: [
    "Define real estate and distinguish it from real property",
    "Identify the unique physical and economic characteristics of real estate",
    "Understand the bundle of legal rights associated with property ownership",
    "Distinguish between real property and personal property using the MARIA test",
    "Identify the various career paths and specializations in real estate",
    "Understand the role of professional organizations (NAR, FAR, local boards)",
    "Recognize the difference between REALTOR® and real estate licensee"
  ],

  // Statute references covered in this chapter
  statutes: [
    { code: "475.001", title: "Purpose", summary: "Legislature deems it necessary to regulate real estate brokers, sales associates, and schools in the interest of public welfare." },
    { code: "475.01(1)(i)", title: "Real Property Definition", summary: "Any interest or estate in land including business enterprises, leaseholds, subleaseholds, or mineral rights." },
    { code: "475.01(1)(a)", title: "Broker Definition", summary: "Person who, for another and for compensation, appraises, auctions, sells, exchanges, buys, rents real property." },
    { code: "475.01(1)(j)", title: "Sales Associate Definition", summary: "Person who performs broker acts under the direction, control, or management of another person." }
  ],

  // Chapter sections with detailed content
  sections: [
    {
      id: "1.1",
      title: "What is Real Estate?",
      content: `
## Defining Real Estate

Real estate is one of the most significant assets in the American economy. Understanding what constitutes real estate is fundamental to your career as a licensed professional.

### The Land and Everything Attached

**Real estate** refers to the land itself and all things permanently attached to it. This includes:

- The surface of the earth
- Everything beneath the surface (minerals, oil, gas)
- The airspace above (to a reasonable height)
- All permanent improvements (buildings, fences, landscaping)

### Real Estate vs. Real Property

While often used interchangeably, these terms have distinct meanings:

| Term | Definition |
|------|------------|
| **Real Estate** | The physical land and improvements |
| **Real Property** | Real estate PLUS the bundle of legal rights |

Think of it this way: Real estate is what you can see and touch. Real property includes all the legal rights that come with ownership.

### Florida Statute Definition

According to **F.S. 475.01(1)(i)**, real property includes:
- Any interest or estate in land
- Business enterprises or business opportunities
- Assignments, leaseholds, subleaseholds
- Mineral rights

**Important Note:** The statute specifically excludes cemetery lots and mobile home/RV lot rentals from this definition.
      `,
      keyPoints: [
        "Real estate = land + permanent attachments",
        "Real property = real estate + legal rights",
        "F.S. 475.01(1)(i) defines real property for licensing purposes",
        "Cemetery lots and mobile home lot rentals are excluded"
      ],
      examTips: [
        "Know the difference between real estate and real property",
        "Remember: real property includes the RIGHTS, not just the physical land"
      ]
    },
    {
      id: "1.2",
      title: "Unique Characteristics of Real Estate",
      content: `
## Physical Characteristics

Real estate has three unique physical characteristics that distinguish it from all other assets. Remember these with the acronym **HID**:

### 1. Heterogeneity (Uniqueness)
No two parcels of real estate are exactly alike. Even identical houses on the same street differ in their:
- Exact location
- View
- Sunlight exposure
- Neighboring properties

This uniqueness is why we say every piece of real estate is "non-fungible" - you cannot substitute one property for another exactly.

### 2. Immobility
Land cannot be moved from one location to another. This characteristic:
- Makes location the most important factor in value
- Creates local (not national) real estate markets
- Means properties are subject to local laws and regulations
- Requires buyers to come to the property, not vice versa

### 3. Durability (Indestructibility)
Land is permanent and cannot be destroyed. While improvements can deteriorate or be demolished:
- The land itself remains
- Land is considered a permanent investment
- This durability supports long-term financing (30-year mortgages)

## Economic Characteristics

Beyond physical traits, real estate has economic characteristics that affect its value:

### Scarcity
Land is limited - they're not making any more of it. This scarcity, combined with demand, drives value.

### Improvements
Changes to land (buildings, landscaping, utilities) affect not only that parcel but surrounding properties as well.

### Permanence of Investment
Once improvements are made, the capital invested is fixed in place. You can't pick up a building and move it.

### Location (Situs)
The preference people have for certain locations. Location is often cited as the three most important factors in real estate: "Location, location, location."
      `,
      keyPoints: [
        "HID: Heterogeneity, Immobility, Durability",
        "No two parcels are exactly alike (heterogeneity)",
        "Land cannot be moved (immobility)",
        "Land is permanent (durability)",
        "Location is the most important value factor"
      ],
      examTips: [
        "Memorize HID for physical characteristics",
        "Questions often ask which characteristic explains why no two properties are alike (heterogeneity)",
        "Immobility explains why real estate markets are LOCAL"
      ]
    },
    {
      id: "1.3",
      title: "Bundle of Legal Rights",
      content: `
## The Bundle of Rights Concept

When you own real property, you don't just own the physical land - you own a "bundle" of legal rights associated with that property. These rights can be:

- Exercised by the owner
- Separated and sold individually
- Transferred to others
- Limited by government or private restrictions

### The Five Essential Rights

Remember these with the acronym **DEEPC**:

### 1. Disposition
The right to sell, will, or otherwise transfer ownership of the property.

### 2. Enjoyment
The right to use the property in any legal manner and enjoy profits from it.

### 3. Exclusion
The right to keep others from entering or using the property.

### 4. Possession
The right to occupy and control the property.

### 5. Control
The right to determine how the property will be used (within legal limits).

## Separating the Bundle

One powerful aspect of real property ownership is the ability to separate these rights. For example:

| Action | Rights Affected |
|--------|-----------------|
| Lease the property | Transfers possession temporarily |
| Grant an easement | Limits exclusion rights |
| Mortgage the property | Pledges as security (lien) |
| Sell mineral rights | Separates subsurface rights |
| Grant air rights | Transfers airspace rights |

### Limitations on Rights

Your bundle of rights is not unlimited. Rights can be limited by:

1. **Government Powers** (PETE)
   - Police power
   - Eminent domain
   - Taxation
   - Escheat

2. **Private Restrictions**
   - Deed restrictions
   - HOA rules
   - Easements
   - Liens
      `,
      keyPoints: [
        "DEEPC: Disposition, Enjoyment, Exclusion, Possession, Control",
        "Rights can be separated and transferred individually",
        "Government and private parties can limit these rights",
        "The bundle concept distinguishes real property from real estate"
      ],
      examTips: [
        "Know all five rights in DEEPC",
        "Understand that rights can be separated (like selling mineral rights separately)",
        "Remember PETE for government powers that limit rights"
      ]
    },
    {
      id: "1.4",
      title: "Real Property vs. Personal Property",
      content: `
## The Critical Distinction

Understanding whether an item is real property or personal property is essential because:

- It determines what transfers with the sale of real estate
- It affects how items are taxed
- It impacts financing and insurance
- It can be the source of legal disputes

### Definitions

| Type | Also Called | Characteristics |
|------|-------------|-----------------|
| **Real Property** | Realty | Land and permanent attachments; immovable |
| **Personal Property** | Personalty, Chattels | Movable items not permanently attached |

### Fixtures: The Gray Area

A **fixture** is personal property that has been attached to real property in such a way that it becomes part of the real property.

**Examples of Fixtures:**
- Built-in appliances
- Ceiling fans
- Light fixtures
- Installed flooring
- Attached shelving
- Garage door openers

### The MARIA Test

When determining if an item is a fixture (real property) or personal property, courts use the **MARIA** test:

### M - Method of Attachment
How is the item attached? Items attached with:
- Nails, screws, bolts, cement = likely a fixture
- Sitting by gravity alone = likely personal property

### A - Adaptability
Is the item specifically adapted for use with this property?
- Custom-fitted blinds = likely a fixture
- Standard curtains = likely personal property

### R - Relationship of the Parties
What is the relationship between buyer and seller?
- Courts may favor buyers over sellers
- Courts may favor tenants over landlords

### I - Intention
What was the intent when the item was installed?
- Intended to be permanent = fixture
- Intended to be temporary = personal property
- **This is often the most important factor**

### A - Agreement
What does the contract say?
- Written agreements override other tests
- Always specify questionable items in the contract

## Trade Fixtures Exception

**Trade fixtures** are items installed by a commercial tenant for business purposes. These:
- Remain personal property of the tenant
- Can be removed by the tenant before lease ends
- Must be removed without damaging the property
- Examples: Restaurant equipment, retail shelving, salon chairs
      `,
      keyPoints: [
        "Real property = immovable; Personal property = movable",
        "Fixtures are personal property that become real property",
        "MARIA test: Method, Adaptability, Relationship, Intention, Agreement",
        "Intention is often the most important factor",
        "Trade fixtures remain personal property of commercial tenants"
      ],
      examTips: [
        "Know the MARIA test thoroughly - this is heavily tested",
        "When in doubt, check what the CONTRACT says (Agreement)",
        "Trade fixtures are an EXCEPTION - they stay personal property"
      ]
    },
    {
      id: "1.5",
      title: "Types of Real Estate",
      content: `
## Categories of Real Estate

Real estate is typically categorized by its use. Understanding these categories helps you identify:
- Market segments
- Valuation methods
- Financing options
- Regulatory requirements

### Residential Real Estate

Property designed for people to live in:

- **Single-family homes** - Detached houses for one family
- **Condominiums** - Individual units within a larger complex
- **Townhouses** - Multi-story units sharing walls
- **Cooperatives** - Ownership of shares in a corporation
- **Multi-family** - Duplexes, triplexes, fourplexes
- **Apartments** - 5+ units (typically investment property)
- **Manufactured housing** - Factory-built homes

### Commercial Real Estate

Property used for business purposes:

- **Office buildings** - Professional workspace
- **Retail** - Shopping centers, stores, malls
- **Hotels/Motels** - Hospitality properties
- **Restaurants** - Food service establishments
- **Mixed-use** - Combination of uses (retail + residential)

### Industrial Real Estate

Property used for manufacturing, production, or storage:

- **Heavy manufacturing** - Factories, plants
- **Light manufacturing** - Assembly, finishing
- **Warehouse/Distribution** - Storage and logistics
- **Flex space** - Adaptable industrial/office combinations
- **Research & Development** - Labs, tech facilities

### Agricultural Real Estate

Property used for farming and related activities:

- **Farms** - Crop production
- **Ranches** - Livestock operations
- **Orchards** - Fruit/nut production
- **Timberland** - Forest management
- **Vineyards** - Wine grape production

### Special Purpose Real Estate

Properties designed for specific uses:

- **Churches and religious facilities**
- **Schools and educational institutions**
- **Hospitals and medical facilities**
- **Government buildings**
- **Cemeteries**
- **Golf courses and recreational facilities**
      `,
      keyPoints: [
        "Five main categories: Residential, Commercial, Industrial, Agricultural, Special Purpose",
        "Category affects valuation methods and financing",
        "Mixed-use combines multiple categories",
        "Special purpose properties are designed for specific uses"
      ],
      examTips: [
        "Know the basic categories and examples of each",
        "Understand that category affects which approach to value is most appropriate"
      ]
    },
    {
      id: "1.6",
      title: "Real Estate Careers & Specializations",
      content: `
## Career Paths in Real Estate

A real estate license opens doors to many career paths beyond traditional home sales.

### Sales and Brokerage

**Residential Sales**
- Single-family homes
- Condominiums
- New construction
- Luxury properties

**Commercial Sales**
- Office buildings
- Retail properties
- Industrial facilities
- Investment properties

**Leasing**
- Residential rentals
- Commercial leasing
- Industrial leasing

### Property Management

Managing properties for owners:
- Tenant relations
- Rent collection
- Maintenance coordination
- Financial reporting
- Lease administration

**Note:** Property managers must hold a real estate license in Florida unless exempt under F.S. 475.011.

### Appraisal

Determining property values:
- Requires separate licensure under Part II of Chapter 475
- Different license levels (trainee, licensed, certified)
- Subject to USPAP standards

### Development

Creating new real estate:
- Site selection
- Feasibility analysis
- Project management
- Construction oversight
- Marketing and sales

### Other Specializations

- **Mortgage Brokerage** - Connecting borrowers with lenders
- **Real Estate Consulting** - Advising on RE decisions
- **Corporate Real Estate** - Managing company properties
- **REITs** - Real estate investment trusts
- **Auction** - Selling properties at auction

## Income Potential

Real estate offers various compensation models:

| Model | Description |
|-------|-------------|
| Commission | Percentage of sale price |
| Salary | Fixed regular payment |
| Salary + Commission | Base pay plus incentives |
| Fee-based | Flat fee for services |
| Hourly | Time-based compensation |
      `,
      keyPoints: [
        "Real estate offers diverse career paths",
        "Sales, property management, appraisal, development are main paths",
        "Property managers generally need a license in Florida",
        "Appraisers require separate licensure",
        "Commission is most common but other models exist"
      ],
      examTips: [
        "Know that appraisers need SEPARATE licensure",
        "Property management generally requires a license",
        "Understand basic compensation models"
      ]
    },
    {
      id: "1.7",
      title: "Professional Organizations",
      content: `
## Industry Organizations

Professional organizations play a vital role in the real estate industry by:
- Establishing ethical standards
- Providing education and training
- Advocating for industry interests
- Offering networking opportunities
- Creating professional designations

### National Association of REALTORS® (NAR)

The largest trade association in the United States:

- **Founded:** 1908
- **Members:** Over 1.5 million
- **Purpose:** Advocate for property rights, provide education, establish ethical standards

**Important:** The term **REALTOR®** is a registered trademark of NAR. Only dues-paying members of NAR can use this title. Not all licensed agents are REALTORS®!

**NAR Code of Ethics:**
- 17 Articles covering duties to clients, public, and other REALTORS®
- Members must complete ethics training
- Violations can result in discipline

### Florida REALTORS® (FAR)

The state association for Florida:
- Largest state REALTOR® association
- Provides standardized forms
- Lobbies for real estate interests
- Offers education and designations

### Local Boards and Associations

- Operate at the city/county level
- Manage local MLS systems
- Provide local market data
- Host networking events
- Handle local ethics complaints

### Other Professional Organizations

| Organization | Focus |
|--------------|-------|
| CCIM | Commercial Investment |
| SIOR | Industrial/Office |
| IREM | Property Management |
| AI | Appraisal Institute |
| CREW | Women in Commercial RE |

## Membership Structure

To be a REALTOR®, you must belong to:
1. Local board/association
2. State association (FAR)
3. National association (NAR)

Membership is typically "three-way" - you join all three simultaneously through your local board.
      `,
      keyPoints: [
        "REALTOR® is a trademarked term - only NAR members can use it",
        "Not all licensees are REALTORS®",
        "NAR is the largest trade association in the US",
        "Florida REALTORS® (FAR) is the state association",
        "Membership is three-way: local, state, national"
      ],
      examTips: [
        "REALTOR® vs. real estate licensee is commonly tested",
        "Know that REALTOR® is a TRADEMARK of NAR",
        "Members must follow the NAR Code of Ethics"
      ]
    }
  ],

  // Flashcards for spaced repetition
  flashcards: [
    // PHYSICAL CHARACTERISTICS
    {
      front: 'What are the three unique PHYSICAL characteristics of real estate?',
      back: 'HID:\n• Heterogeneity (Uniqueness) - No two parcels alike\n• Immobility - Cannot be moved\n• Durability - Land is permanent/indestructible',
      difficulty: 'easy'
    },
    {
      front: 'What characteristic explains why "location, location, location" matters?',
      back: 'IMMOBILITY - Land cannot be moved, so location is fixed permanently. This makes location the most important value factor.',
      difficulty: 'easy'
    },
    {
      front: 'What characteristic explains why no two properties are exactly alike?',
      back: 'HETEROGENEITY (Uniqueness/Non-homogeneity) - Even identical houses differ by exact location, view, neighbors, etc.',
      difficulty: 'easy'
    },
    {
      front: 'Why is real estate considered DURABLE?',
      back: 'Land is permanent and indestructible. Buildings may deteriorate, but the LAND itself lasts forever.',
      difficulty: 'easy'
    },
    
    // ECONOMIC CHARACTERISTICS
    {
      front: 'What are the four ECONOMIC characteristics of real estate?',
      back: 'SIPS:\n• Scarcity - Limited supply of land\n• Improvements - Affect value of neighboring land\n• Permanence of Investment - Long-term commitment\n• Situs (Area Preference) - Location desirability',
      difficulty: 'medium'
    },
    {
      front: 'What is "situs" in real estate?',
      back: 'AREA PREFERENCE - The desirability of a location based on economic, social, and political factors. Why people prefer certain areas.',
      difficulty: 'medium'
    },
    
    // REAL VS PERSONAL PROPERTY
    {
      front: 'What is the difference between real estate and real property?',
      back: 'REAL ESTATE = Physical land and improvements\nREAL PROPERTY = Real estate PLUS the bundle of legal rights',
      difficulty: 'medium'
    },
    {
      front: 'What is personal property?',
      back: 'MOVABLE items not attached to land. Also called CHATTELS or PERSONALTY. Examples: Furniture, vehicles, equipment.',
      difficulty: 'easy'
    },
    {
      front: 'What is the MARIA test used for?',
      back: 'Determines if item is FIXTURE (real property) or personal property:\n• Method of attachment\n• Adaptability to property\n• Relationship of parties\n• Intention (most important)\n• Agreement in contract',
      difficulty: 'medium'
    },
    {
      front: 'Which MARIA factor is most important?',
      back: 'INTENTION - What did the parties intend? Did they mean for the item to be permanent or temporary?',
      difficulty: 'medium'
    },
    {
      front: 'What are trade fixtures?',
      back: 'Items installed by COMMERCIAL TENANT for business. Remain PERSONAL PROPERTY of tenant. Can be removed before lease ends. Examples: Restaurant equipment, salon chairs.',
      difficulty: 'medium'
    },
    
    // BUNDLE OF RIGHTS
    {
      front: 'What are the five rights in the Bundle of Rights? (DEEPC)',
      back: '• Disposition - Right to sell, will, transfer\n• Enjoyment - Right to use and enjoy profits\n• Exclusion - Right to keep others out\n• Possession - Right to occupy\n• Control - Right to determine use',
      difficulty: 'medium'
    },
    {
      front: 'What government powers limit the Bundle of Rights? (PETE)',
      back: '• Police Power - Regulate (zoning, no compensation)\n• Eminent Domain - Take WITH compensation\n• Taxation - Levy property taxes\n• Escheat - State takes if no heirs',
      difficulty: 'medium'
    },
    {
      front: 'What is the difference between Police Power and Eminent Domain?',
      back: 'POLICE POWER: Regulate, NO compensation\nEMINENT DOMAIN: Take, WITH just compensation\n\nBoth limit property rights, but only eminent domain requires payment.',
      difficulty: 'hard'
    },
    
    // LICENSE TYPES
    {
      front: 'What is a sales associate?',
      back: 'Licensed person who performs real estate activities UNDER THE DIRECTION of a broker. Cannot work independently.',
      difficulty: 'easy'
    },
    {
      front: 'What is a broker?',
      back: 'Licensed person who can operate INDEPENDENTLY, hire sales associates, maintain escrow accounts, and receive compensation directly from the public.',
      difficulty: 'easy'
    },
    {
      front: 'What does REALTOR® mean?',
      back: 'Registered TRADEMARK of NAR (National Association of REALTORS). Only dues-paying NAR members can use this title. Not all agents are REALTORS®.',
      difficulty: 'easy'
    },
    
    // TYPES OF PROPERTY
    {
      front: 'What are the main categories of real property?',
      back: '• Residential (1-4 units)\n• Commercial (office, retail)\n• Industrial (manufacturing, warehouse)\n• Agricultural (farms, ranches)\n• Special Purpose (churches, schools)',
      difficulty: 'medium'
    },
    {
      front: 'What is the difference between land and site?',
      back: 'LAND = Unimproved, raw earth\nSITE = Land that has been improved and is ready for its intended use (graded, utilities, etc.)',
      difficulty: 'medium'
    },
    
    // MARKET CHARACTERISTICS
    {
      front: 'Why are real estate markets considered LOCAL?',
      back: 'Because of IMMOBILITY - properties cannot be moved. Each market is affected by local factors: employment, schools, transportation, amenities.',
      difficulty: 'medium'
    },
    {
      front: 'What makes real estate markets SLOW to respond to change?',
      back: 'Construction takes time, large financial commitments, regulatory approvals needed. Supply cannot quickly adjust to demand.',
      difficulty: 'medium'
    },
    {
      front: 'What is meant by "highest and best use"?',
      back: 'The LEGAL, PHYSICALLY POSSIBLE, FINANCIALLY FEASIBLE use that produces the MAXIMUM value. Key appraisal concept.',
      difficulty: 'hard'
    }
  ],

  // Practice questions for this chapter
  practiceQuestions: [
    {
      id: "1-q-1",
      question: "Which characteristic of real estate explains why no two parcels are exactly alike?",
      options: [
        "Durability",
        "Immobility", 
        "Heterogeneity",
        "Scarcity"
      ],
      correctIndex: 2,
      explanation: "Heterogeneity (uniqueness) means no two parcels of real estate are exactly alike. Even identical houses on the same street differ by their exact location, view, sunlight exposure, and neighboring properties.",
      difficulty: "easy",
      section: "1.2",
      statute: null
    },
    {
      id: "1-q-2",
      question: "The term REALTOR® refers to:",
      options: [
        "Any licensed real estate agent",
        "Only brokers, not sales associates",
        "Members of the National Association of REALTORS®",
        "Anyone who has passed the state exam"
      ],
      correctIndex: 2,
      explanation: "REALTOR® is a registered trademark of the National Association of REALTORS® (NAR). Only dues-paying NAR members can use this title. Not all licensed agents are REALTORS®.",
      difficulty: "easy",
      section: "1.7",
      statute: null
    },
    {
      id: "1-q-3",
      question: "A built-in dishwasher in a home is MOST likely considered:",
      options: [
        "Personal property",
        "A trade fixture",
        "A fixture (real property)",
        "A chattel"
      ],
      correctIndex: 2,
      explanation: "A built-in dishwasher is attached to the property and adapted for use with the home, making it a fixture (real property). Trade fixtures apply only to commercial tenants' business equipment.",
      difficulty: "medium",
      section: "1.4",
      statute: null
    },
    {
      id: "1-q-4",
      question: "Which factor is MOST important when determining whether an item is a fixture?",
      options: [
        "The cost of the item",
        "The method of attachment",
        "The intention of the person who installed it",
        "The age of the item"
      ],
      correctIndex: 2,
      explanation: "While all MARIA factors are considered, INTENTION is generally the most important factor. What did the person intend when they installed the item - permanent or temporary?",
      difficulty: "medium",
      section: "1.4",
      statute: null
    },
    {
      id: "1-q-5",
      question: "Real property is BEST defined as:",
      options: [
        "Land only",
        "Land and buildings",
        "Land, improvements, and the bundle of legal rights",
        "Anything that can be touched"
      ],
      correctIndex: 2,
      explanation: "Real property = real estate (land + improvements) PLUS the bundle of legal rights (DEEPC). It includes not just the physical property but all the rights associated with ownership.",
      difficulty: "easy",
      section: "1.1",
      statute: "475.01(1)(i)"
    },
    {
      id: "1-q-6",
      question: "A commercial tenant installs specialty lighting for their boutique store. When the lease ends, this lighting is:",
      options: [
        "Real property that must stay with the building",
        "A trade fixture that the tenant may remove",
        "Subject to the landlord's decision",
        "Automatically forfeited to the landlord"
      ],
      correctIndex: 1,
      explanation: "Items installed by a commercial tenant for business purposes are trade fixtures. They remain the personal property of the tenant and can be removed before the lease ends, provided no damage is done to the property.",
      difficulty: "medium",
      section: "1.4",
      statute: null
    },
    {
      id: "1-q-7",
      question: "The acronym DEEPC represents the:",
      options: [
        "Steps in purchasing property",
        "Bundle of rights in real property",
        "Physical characteristics of real estate",
        "Requirements for a valid contract"
      ],
      correctIndex: 1,
      explanation: "DEEPC represents the bundle of rights: Disposition, Enjoyment, Exclusion, Possession, and Control. These are the legal rights that come with real property ownership.",
      difficulty: "easy",
      section: "1.3",
      statute: null
    },
    {
      id: "1-q-8",
      question: "Which government power allows the taking of private property for public use with compensation?",
      options: [
        "Police power",
        "Eminent domain",
        "Escheat",
        "Taxation"
      ],
      correctIndex: 1,
      explanation: "Eminent domain is the government's power to take private property for public use, but compensation must be paid. Police power (zoning, building codes) does NOT require compensation.",
      difficulty: "medium",
      section: "1.3",
      statute: null
    },
    {
      id: "1-q-9",
      question: "Why are real estate markets considered local rather than national?",
      options: [
        "Because of heterogeneity",
        "Because of durability",
        "Because of immobility",
        "Because of scarcity"
      ],
      correctIndex: 2,
      explanation: "Immobility - the fact that land cannot be moved - means that buyers must come to the property. This creates local markets subject to local supply, demand, and regulations.",
      difficulty: "medium",
      section: "1.2",
      statute: null
    },
    {
      id: "1-q-10",
      question: "According to Florida law, the purpose of regulating real estate licensees is:",
      options: [
        "To increase state revenue",
        "To limit competition",
        "To protect the public welfare",
        "To support property values"
      ],
      correctIndex: 2,
      explanation: "F.S. 475.001 states: 'The Legislature deems it necessary in the interest of the public welfare to regulate real estate brokers, sales associates, and schools in this state.'",
      difficulty: "easy",
      section: "1.1",
      statute: "475.001"
    },
    {
      id: "1-q-11",
      question: "Which of the following is considered personal property?",
      options: [
        "A permanently installed ceiling fan",
        "A built-in bookshelf",
        "A freestanding refrigerator",
        "An attached garage door opener"
      ],
      correctIndex: 2,
      explanation: "A freestanding refrigerator is not attached to the property - it simply sits by its own weight. The other items are attached and would be considered fixtures (real property).",
      difficulty: "medium",
      section: "1.4",
      statute: null
    },
    {
      id: "1-q-12",
      question: "The characteristic of real estate that supports 30-year mortgages is:",
      options: [
        "Heterogeneity",
        "Immobility",
        "Durability",
        "Scarcity"
      ],
      correctIndex: 2,
      explanation: "Durability (indestructibility) means land is permanent - it won't disappear. This permanence makes real estate suitable for long-term financing like 30-year mortgages.",
      difficulty: "hard",
      section: "1.2",
      statute: null
    },
    {
      id: "1-q-13",
      question: "A property owner sells the mineral rights under their land to an oil company. This is an example of:",
      options: [
        "Illegal activity",
        "Separating rights from the bundle",
        "Eminent domain",
        "Police power"
      ],
      correctIndex: 1,
      explanation: "One powerful aspect of real property ownership is the ability to separate and sell individual rights from the bundle. Mineral rights, air rights, and surface rights can all be separated and sold.",
      difficulty: "medium",
      section: "1.3",
      statute: null
    },
    {
      id: "1-q-14",
      question: "To become a member of NAR, a licensee must:",
      options: [
        "Pass an additional exam",
        "Have at least 5 years of experience",
        "Pay dues and join through a local board",
        "Be sponsored by an existing member"
      ],
      correctIndex: 2,
      explanation: "To be a REALTOR®, you must join the local board/association (which includes membership in the state and national associations) and pay the required dues. Membership is voluntary.",
      difficulty: "medium",
      section: "1.7",
      statute: null
    },
    {
      id: "1-q-15",
      question: "In the MARIA test, 'R' stands for:",
      options: [
        "Real property",
        "Relationship of the parties",
        "Replacement cost",
        "Reasonable use"
      ],
      correctIndex: 1,
      explanation: "MARIA: Method of attachment, Adaptability, Relationship of the parties, Intention, Agreement. The relationship (buyer vs seller, tenant vs landlord) can affect how courts interpret fixture disputes.",
      difficulty: "easy",
      section: "1.4",
      statute: null
    }
  ],

  // Case studies for deeper understanding
  caseStudies: [
    {
      id: "1-cs-1",
      title: "The Chandelier Dispute",
      scenario: "Maria is selling her home to David. The formal dining room has an antique crystal chandelier that has been in Maria's family for three generations. It was professionally installed with an electrical connection to the ceiling. The purchase contract does not mention the chandelier. At closing, Maria removes the chandelier and replaces it with a basic light fixture.",
      question: "Does David have a legal claim to the chandelier?",
      analysis: `
**Applying the MARIA Test:**

**Method of Attachment:** The chandelier was professionally installed with electrical connections - this suggests a fixture.

**Adaptability:** It was specifically designed to fit and illuminate the formal dining room - adapted for use.

**Relationship:** David is the buyer, Maria is the seller. Courts often favor buyers in ambiguous fixture disputes.

**Intention:** This is where it gets complicated. The chandelier was installed for long-term use, but it's an heirloom with personal significance.

**Agreement:** The contract did NOT mention the chandelier.

**Conclusion:** Without specific language in the contract excluding the chandelier, it would likely be considered a fixture that should convey with the property. Maria should have listed the chandelier as an exclusion in the contract.

**Lesson:** Always specify in writing which items are included or excluded from the sale!
      `,
      keyTakeaway: "When in doubt, put it in writing. The Agreement portion of MARIA can override all other factors.",
      examRelevance: "Fixture disputes are commonly tested. Remember that the contract controls, and intention is typically the most important factor."
    }
  ],

  // Summary for quick review
  summary: `
## Chapter 1 Summary: The Real Estate Business

### Key Definitions
- **Real Estate:** Land and permanent attachments
- **Real Property:** Real estate + bundle of legal rights
- **Personal Property:** Movable items (chattels)
- **Fixtures:** Personal property that becomes real property

### Physical Characteristics (HID)
1. Heterogeneity - No two parcels alike
2. Immobility - Cannot be moved
3. Durability - Land is permanent

### Bundle of Rights (DEEPC)
1. Disposition - Sell, will, transfer
2. Enjoyment - Use and profit
3. Exclusion - Keep others out
4. Possession - Occupy and control
5. Control - Determine use

### MARIA Test for Fixtures
- Method of attachment
- Adaptability
- Relationship of parties
- Intention (most important)
- Agreement (controls all)

### Professional Organizations
- NAR - National, owns REALTOR® trademark
- FAR - Florida state association
- Local boards - City/county level
- REALTOR® ≠ All licensed agents

### Key Statutes
- 475.001 - Purpose (public welfare)
- 475.01(1)(i) - Real property definition
- 475.01(1)(a) - Broker definition
- 475.01(1)(j) - Sales associate definition
  `
};

export default CHAPTER_1;
