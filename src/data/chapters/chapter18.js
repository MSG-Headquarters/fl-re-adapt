/**
 * Chapter 18: Planning and Zoning
 * 
 * Covers 2% of the Florida Real Estate Exam
 * Focus: Land use controls, zoning regulations, and government restrictions
 */

export const CHAPTER_18 = {
  id: 18,
  title: 'Planning and Zoning',
  subtitle: 'Land Use Controls and Regulations',
  examPercentage: 2,
  requiredTimeMinutes: 120, // 2 hours minimum
  color: '#EC4899', // Pink
  icon: 'Building',
  
  objectives: [
    'Understand the government powers that affect land use',
    'Explain comprehensive planning and its purpose',
    'Describe zoning classifications and regulations',
    'Understand variances, special exceptions, and nonconforming uses',
    'Explain building codes and permits',
    'Understand environmental regulations affecting real estate',
    'Describe private land use controls'
  ],

  statutes: [
    { code: 'F.S. 163', title: 'Intergovernmental Programs', summary: 'Growth management and comprehensive planning' },
    { code: 'F.S. 125', title: 'County Government', summary: 'County zoning authority' },
    { code: 'F.S. 166', title: 'Municipalities', summary: 'Municipal zoning powers' },
    { code: 'F.S. 380', title: 'Land and Water Management', summary: 'Areas of critical state concern' }
  ],

  sections: [
    {
      id: '18.1',
      title: 'Government Powers Over Land',
      content: `## Police Power and Land Use

Government has inherent powers that affect private land ownership.

### The Four Government Powers (PETE)

**Police Power**
- Power to regulate for health, safety, welfare, morals
- Basis for zoning, building codes, environmental laws
- No compensation required
- Most commonly used power affecting land

**Eminent Domain**
- Power to take private property for public use
- Requires just compensation (5th Amendment)
- Called "condemnation" when exercised
- Can be partial taking

**Taxation**
- Power to levy taxes on property
- Ad valorem (property) taxes
- Special assessments
- Tax liens if unpaid

**Escheat**
- Property reverts to state
- When owner dies without heirs
- And without a will
- Prevents property from being ownerless

### Police Power vs. Eminent Domain

| Police Power | Eminent Domain |
|--------------|----------------|
| Regulates use | Takes property |
| No compensation | Requires compensation |
| For public welfare | For public use |
| Zoning, building codes | Roads, schools, utilities |

### Inverse Condemnation

**When government action reduces property value**:
- Owner claims "taking" occurred
- Seeks compensation
- Example: Airport runway causes noise damage
- Regulatory taking (regulations destroy value)

### Just Compensation

**For eminent domain**:
- Fair market value
- Based on highest and best use
- At time of taking
- Includes damages to remainder`,
      keyPoints: [
        'PETE: Police power, Eminent domain, Taxation, Escheat',
        'Police power = zoning, building codes (no compensation)',
        'Eminent domain = taking (requires compensation)',
        'Inverse condemnation = owner claims taking occurred',
        'Escheat = property goes to state if no heirs'
      ],
      examTips: [
        'Remember PETE for government powers',
        'Police power = regulate; Eminent domain = take',
        'Condemnation = exercising eminent domain',
        'Just compensation = fair market value'
      ]
    },
    {
      id: '18.2',
      title: 'Comprehensive Planning',
      content: `## Land Use Planning

Communities use comprehensive plans to guide development.

### What Is a Comprehensive Plan?

**Master plan for community development**:
- Long-range planning document
- Guides future growth
- Basis for zoning decisions
- Required for Florida municipalities and counties

### Florida Growth Management

**Community Planning Act (F.S. 163)**:
- All local governments must have comprehensive plan
- Plans must be consistent with state requirements
- Zoning must be consistent with comprehensive plan

### Required Elements

Florida comprehensive plans must include:

**1. Future Land Use Element**
- Map showing planned uses
- Designates residential, commercial, industrial areas

**2. Transportation Element**
- Roads, transit, bicycle, pedestrian
- Traffic circulation

**3. Housing Element**
- Adequate housing for all income levels
- Elimination of substandard housing

**4. Infrastructure Element**
- Sanitary sewer, water, drainage
- Solid waste, natural groundwater

**5. Coastal Management** (if applicable)
- Coastal counties only
- Protection of coastal resources

**6. Conservation Element**
- Natural resources protection
- Environmental preservation

**7. Recreation and Open Space**
- Parks and recreation facilities

**8. Intergovernmental Coordination**
- Coordination with other governments

**9. Capital Improvements Element**
- Funding for public facilities

### Concurrency

**Infrastructure must keep pace with development**:
- Public facilities available when needed
- Roads, schools, utilities
- Cannot approve development without capacity`,
      keyPoints: [
        'Comprehensive plan = master guide for development',
        'Zoning must be CONSISTENT with comprehensive plan',
        'Florida requires comprehensive plans',
        'Concurrency = infrastructure must keep pace',
        'Required elements include land use, transportation, housing'
      ],
      examTips: [
        'Zoning flows FROM comprehensive plan',
        'Concurrency = facilities available when needed',
        'Know required plan elements',
        'Florida mandates local comprehensive plans'
      ]
    },
    {
      id: '18.3',
      title: 'Zoning Basics',
      content: `## Zoning Regulations

Zoning implements the comprehensive plan by regulating land use.

### What Is Zoning?

**Government regulation of land use**:
- Divides community into districts
- Specifies permitted uses
- Based on police power
- Implements comprehensive plan

### Zoning Authority

**Who creates zoning?**
- Local governments (cities, counties)
- Through zoning ordinances
- Administered by planning/zoning department
- Enforced by code enforcement

### Common Zoning Classifications

**Residential (R)**
- R-1: Single-family
- R-2: Two-family (duplex)
- R-3: Multi-family (apartments)
- Various density levels

**Commercial (C)**
- C-1: Neighborhood commercial
- C-2: General commercial
- C-3: Heavy commercial

**Industrial (I or M)**
- I-1: Light industrial
- I-2: Heavy industrial
- Manufacturing zones

**Agricultural (A)**
- Farming, ranching
- Low density

**Mixed Use (MU)**
- Combination of uses
- Increasingly popular

### Zoning Regulations Include

**Use Restrictions**: What can be built
**Density**: Number of units per acre
**Height Limits**: Maximum building height
**Setbacks**: Distance from property lines
**Lot Size**: Minimum lot dimensions
**Parking**: Required parking spaces
**FAR (Floor Area Ratio)**: Building size relative to lot
**Lot Coverage**: Maximum building footprint

### Cumulative vs. Non-Cumulative Zoning

**Cumulative**: Higher uses allowed in lower zones
- Example: Single-family allowed in multi-family zone

**Non-Cumulative**: Only specified uses allowed
- More restrictive
- Increasingly common`,
      keyPoints: [
        'Zoning implements comprehensive plan',
        'Based on police power (no compensation)',
        'R = residential, C = commercial, I = industrial',
        'Regulates use, density, height, setbacks',
        'FAR = floor area ratio (building to lot size)'
      ],
      examTips: [
        'Zoning = police power (no compensation)',
        'Know basic zone classifications',
        'Setback = distance from property line',
        'FAR relates building size to lot size'
      ]
    },
    {
      id: '18.4',
      title: 'Zoning Changes and Exceptions',
      content: `## Modifying Zoning Restrictions

Several methods exist to obtain relief from zoning regulations.

### Rezoning (Zoning Amendment)

**Changing the zoning classification**:
- Applies to specific area
- Requires public hearing
- Legislative action by local government
- Changes the zone itself

**Process**:
1. Property owner applies
2. Planning staff reviews
3. Planning commission recommends
4. Local government (city council/county commission) decides
5. Public hearings required

### Variance

**Permission to deviate from zoning requirements**:
- Does NOT change the zoning
- Grants exception for specific property
- For setbacks, height, lot size, etc.

**Requirements for Variance**:
- Unique hardship (not self-created)
- Not contrary to public interest
- Minimum variance needed
- Due to special circumstances of property

**Types**:
- **Area variance**: Physical requirements (setbacks, height)
- **Use variance**: Allows different use (rare, harder to get)

### Special Exception (Conditional Use)

**Use permitted IF conditions met**:
- Listed in zoning ordinance as special exception
- Requires approval
- Conditions may be imposed
- Example: Church in residential zone, gas station

**Difference from Variance**:
- Special exception: Use contemplated by ordinance
- Variance: Deviation from ordinance requirements

### Spot Zoning

**Singling out small area for different treatment**:
- Generally ILLEGAL
- Not consistent with comprehensive plan
- Benefits one owner at expense of others
- Courts may invalidate

### Downzoning

**Changing to more restrictive classification**:
- Example: Commercial to residential
- May reduce property value
- Generally legal if follows proper process
- May trigger "taking" claims`,
      keyPoints: [
        'Rezoning changes the zone classification',
        'Variance = exception, doesn\'t change zone',
        'Variance requires hardship (not self-created)',
        'Special exception = use contemplated by ordinance',
        'Spot zoning = generally illegal'
      ],
      examTips: [
        'Variance ≠ rezoning (zone stays same)',
        'Hardship must not be self-created',
        'Spot zoning benefits one at expense of others',
        'Special exception has conditions'
      ]
    },
    {
      id: '18.5',
      title: 'Nonconforming Uses',
      content: `## Legal Nonconforming Uses

When zoning changes, existing uses may no longer comply.

### What Is a Nonconforming Use?

**Use that was legal when started but doesn't comply with current zoning**:
- Existed before zoning change
- "Grandfathered" use
- Can continue but with restrictions

**Example**: Convenience store in area rezoned residential

### Rights of Nonconforming Uses

**Generally allowed to continue**:
- Cannot be immediately terminated
- Property rights protected
- Constitutional considerations

**But restrictions apply**:
- Cannot expand
- Cannot change to different nonconforming use
- May not rebuild if destroyed
- May terminate after amortization period

### Termination of Nonconforming Uses

**1. Abandonment**
- Voluntary discontinuance
- Intent to abandon
- Time period varies (often 6-12 months)

**2. Destruction**
- Building destroyed (fire, storm)
- Usually 50%+ destruction
- Cannot rebuild as nonconforming

**3. Amortization**
- Allowed to continue for set period
- Then must comply or cease
- Reasonable time to recoup investment
- Controversial - not allowed everywhere

**4. Change of Use**
- Converting to different use
- Loses nonconforming status

### Variance vs. Nonconforming Use

| Variance | Nonconforming Use |
|----------|-------------------|
| Permission granted | Pre-existing condition |
| Owner requests | Automatic (existed before) |
| May be denied | Right to continue |
| For hardship | No hardship needed |`,
      keyPoints: [
        'Nonconforming use = legal when started, not now',
        'Can continue but cannot expand',
        'Abandonment or destruction may end right',
        'Amortization = phasing out over time',
        'Cannot change to different nonconforming use'
      ],
      examTips: [
        '"Grandfathered" = nonconforming use',
        'Cannot expand nonconforming use',
        'Destruction usually ends the right',
        'Abandonment requires intent + time'
      ]
    },
    {
      id: '18.6',
      title: 'Building Codes and Permits',
      content: `## Construction Regulation

Building codes ensure safe construction.

### Building Codes

**Standards for construction**:
- Structural requirements
- Electrical, plumbing, mechanical
- Fire safety
- Accessibility (ADA)
- Energy efficiency

### Florida Building Code

**Statewide code**:
- Adopted in 2002
- Based on International Building Code
- Local amendments allowed
- Enforced by local building departments

**Includes**:
- Building code
- Residential code
- Mechanical code
- Plumbing code
- Fuel gas code
- Electrical code (National Electrical Code)

### Building Permits

**Required for**:
- New construction
- Additions
- Major renovations
- Electrical, plumbing, mechanical work
- Structural changes

**Process**:
1. Submit plans
2. Plan review
3. Permit issued
4. Inspections during construction
5. Certificate of Occupancy (CO)

### Certificate of Occupancy (CO)

**Issued when construction complete and approved**:
- Building meets code
- Ready for occupancy
- Required before use
- Final inspections passed

### Inspections

**During construction**:
- Foundation
- Framing
- Electrical
- Plumbing
- Mechanical
- Final inspection

### Contractor Licensing

**Florida requires licensing**:
- General contractors
- Building contractors
- Specialty contractors (electrical, plumbing, etc.)
- Through DBPR/Construction Industry Licensing Board`,
      keyPoints: [
        'Florida Building Code is statewide',
        'Permits required for most construction',
        'Certificate of Occupancy (CO) required before use',
        'Multiple inspections during construction',
        'Contractors must be licensed in Florida'
      ],
      examTips: [
        'CO required before occupancy',
        'Florida Building Code adopted 2002',
        'Permits needed for structural work',
        'Inspections happen throughout construction'
      ]
    },
    {
      id: '18.7',
      title: 'Environmental Regulations',
      content: `## Environmental Protection

Environmental laws affect land development and real estate transactions.

### Federal Environmental Laws

**CERCLA (Superfund)**
- Comprehensive Environmental Response, Compensation, and Liability Act
- Cleanup of hazardous waste sites
- Strict liability (even innocent owners)
- "Superfund" sites

**Clean Water Act**
- Protects wetlands
- Requires permits for dredge and fill
- Section 404 permits (Army Corps of Engineers)

**Clean Air Act**
- Air quality standards
- Affects industrial development

**Endangered Species Act**
- Protects listed species
- Can restrict development

### Florida Environmental Laws

**Environmental Resource Permit**
- Required for wetland impacts
- Water management districts issue
- Mitigation may be required

**Areas of Critical State Concern**
- Special protection areas
- Florida Keys, Green Swamp, Big Cypress
- Additional development restrictions

### Wetlands

**Definition**: Areas with hydric soils, water-loving plants, water at or near surface

**Protection**:
- Federal (Clean Water Act)
- State (Environmental Resource Permit)
- Cannot fill without permit
- Mitigation required

### Environmental Site Assessment

**Phase I ESA**:
- Historical records review
- Site inspection
- Interviews
- Identifies potential contamination
- No actual testing

**Phase II ESA**:
- Actual sampling and testing
- If Phase I reveals concerns
- Soil, groundwater testing

### Disclosure Requirements

**Sellers must disclose**:
- Known environmental hazards
- Lead-based paint (pre-1978)
- Radon (Florida requires disclosure)
- Environmental liens`,
      keyPoints: [
        'CERCLA = Superfund (hazardous waste cleanup)',
        'Wetlands protected by federal and state law',
        'Phase I ESA = records review, no testing',
        'Phase II ESA = actual testing',
        'Florida requires radon disclosure'
      ],
      examTips: [
        'CERCLA liability is STRICT (even innocent owners)',
        'Phase I = no testing; Phase II = testing',
        'Cannot fill wetlands without permit',
        'Lead paint disclosure for pre-1978 homes'
      ]
    },
    {
      id: '18.8',
      title: 'Private Land Use Controls',
      content: `## Deed Restrictions and HOAs

Private parties can also control land use.

### Deed Restrictions (Covenants)

**Private limitations on land use**:
- Created by developer or prior owner
- Run with the land
- Enforceable by other owners

**Common Restrictions**:
- Architectural standards
- Minimum square footage
- Prohibited uses
- Setback requirements
- Fencing requirements
- Vehicle restrictions

### When Restrictions Conflict with Zoning

**More restrictive rule wins**:
- If deed allows 3 stories but zoning allows 2 = 2 stories
- If zoning allows commercial but deed requires residential = residential
- Private restrictions can be MORE restrictive
- Cannot violate zoning

### Homeowners Associations (HOAs)

**Community governance**:
- Created by developer
- Maintains common areas
- Enforces restrictions
- Collects assessments

**Florida HOA Act (F.S. 720)**:
- Governs HOA operations
- Owner rights protected
- Meeting and records requirements
- Assessment collection procedures

### Condominium Associations

**Similar to HOAs but different structure**:
- Florida Condominium Act (F.S. 718)
- Declaration of condominium
- Owns common elements
- Unit owners own units + share of common elements

### Enforcement

**Private restrictions enforced by**:
- Injunction (court order to comply)
- Damages
- HOA fines
- Lien on property

### Termination of Restrictions

**Can end by**:
- Expiration (if time limit stated)
- Release by all benefited parties
- Merger (one person owns all benefited land)
- Changed conditions (neighborhood completely changed)
- Abandonment (widespread violation)
- MRTA (30 years in Florida)`,
      keyPoints: [
        'Deed restrictions are private controls',
        'More restrictive rule wins (deed vs. zoning)',
        'HOAs enforce restrictions and collect assessments',
        'Florida Condominium Act governs condos',
        'Restrictions can terminate various ways'
      ],
      examTips: [
        'Private restrictions CAN be stricter than zoning',
        'More restrictive rule applies',
        'HOAs = F.S. 720; Condos = F.S. 718',
        'MRTA can extinguish old restrictions (30 years)'
      ]
    }
  ],

  flashcards: [
    // GOVERNMENT POWERS
    {
      front: 'What are the four government powers affecting land use (PETE)?',
      back: '• Police power (regulate)\n• Eminent domain (take)\n• Taxation\n• Escheat (revert to state)',
      difficulty: 'easy'
    },
    {
      front: 'What is the difference between POLICE POWER and EMINENT DOMAIN?',
      back: 'POLICE POWER: REGULATES land, NO compensation required\nEMINENT DOMAIN: TAKES land, requires JUST COMPENSATION',
      difficulty: 'medium'
    },
    {
      front: 'What is ESCHEAT?',
      back: 'Property reverts to STATE when owner dies without heirs or will. Part of PETE powers.',
      difficulty: 'easy'
    },
    
    // COMPREHENSIVE PLANNING
    {
      front: 'What is a COMPREHENSIVE PLAN?',
      back: 'Master planning document guiding community development. ZONING must be CONSISTENT with comprehensive plan.',
      difficulty: 'easy'
    },
    {
      front: 'What is CONCURRENCY in planning?',
      back: 'Public infrastructure (roads, schools, utilities) must be AVAILABLE to support new development. No growth without infrastructure.',
      difficulty: 'medium'
    },
    
    // ZONING
    {
      front: 'What are typical zoning classifications?',
      back: '• R = Residential\n• C = Commercial\n• I = Industrial\n• A = Agricultural\n• MU = Mixed Use',
      difficulty: 'easy'
    },
    {
      front: 'What are SETBACKS?',
      back: 'Required distances between building and property lines. Front, side, and rear setbacks specified.',
      difficulty: 'easy'
    },
    {
      front: 'What is FAR (Floor Area Ratio)?',
      back: 'Ratio of building floor area to lot size.\n\nFAR of 2.0 = building can be TWICE the lot area.',
      difficulty: 'medium'
    },
    
    // VARIANCES & EXCEPTIONS
    {
      front: 'What is a VARIANCE?',
      back: 'Permission to DEVIATE from zoning requirements. Does NOT change classification. Requires proof of HARDSHIP (not self-created).',
      difficulty: 'medium'
    },
    {
      front: 'What is difference between VARIANCE and SPECIAL EXCEPTION?',
      back: 'VARIANCE: Deviation from requirements (setbacks, height)\nSPECIAL EXCEPTION: Use specifically allowed if conditions met',
      difficulty: 'hard'
    },
    {
      front: 'What is a NONCONFORMING USE?',
      back: 'Use legal when started but doesn\'t comply with CURRENT zoning. "Grandfathered" - can continue but CANNOT EXPAND.',
      difficulty: 'medium'
    },
    {
      front: 'What happens if nonconforming use is ABANDONED or DESTROYED?',
      back: 'May LOSE the right to continue. Cannot rebuild nonconforming use if substantially destroyed.',
      difficulty: 'hard'
    },
    {
      front: 'What is SPOT ZONING?',
      back: 'Singling out small area for different zoning that benefits one owner. Generally ILLEGAL.',
      difficulty: 'medium'
    },
    
    // BUILDING & PERMITS
    {
      front: 'What is a Certificate of Occupancy (CO)?',
      back: 'Document issued when construction is COMPLETE and MEETS CODE. Required BEFORE building can be occupied.',
      difficulty: 'easy'
    },
    {
      front: 'What permits are typically required for construction?',
      back: 'Building permit, then inspections at various stages, then Certificate of Occupancy upon completion.',
      difficulty: 'medium'
    },
    
    // ENVIRONMENTAL
    {
      front: 'What is CERCLA (Superfund)?',
      back: 'Federal law for hazardous waste cleanup. Creates STRICT LIABILITY - even innocent current owners can be liable.',
      difficulty: 'medium'
    },
    {
      front: 'What is difference between Phase I and Phase II environmental assessments?',
      back: 'PHASE I: Records review and inspection, NO testing\nPHASE II: Actual SAMPLING and TESTING of soil/groundwater',
      difficulty: 'medium'
    },
    {
      front: 'What is the purpose of a Phase I ESA?',
      back: 'Establish INNOCENT LANDOWNER defense under CERCLA. Shows due diligence in discovering contamination.',
      difficulty: 'hard'
    },
    
    // PRIVATE RESTRICTIONS
    {
      front: 'When deed restrictions conflict with zoning, which applies?',
      back: 'MORE RESTRICTIVE rule applies. Private restrictions can be stricter but cannot violate zoning.',
      difficulty: 'easy'
    },
    {
      front: 'What is MRTA?',
      back: 'Marketable Record Title Act - Extinguishes old restrictions after 30 YEARS from root of title.',
      difficulty: 'medium'
    },
    {
      front: 'Who enforces deed restrictions?',
      back: 'Private parties (homeowners, HOAs) through civil lawsuit. Government enforces ZONING.',
      difficulty: 'medium'
    },
    {
      front: 'Does FL require radon disclosure?',
      back: 'YES - Florida requires radon GAS disclosure on all real estate sales contracts.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'Zoning is an exercise of which government power?',
      options: [
        'Eminent domain',
        'Police power',
        'Taxation',
        'Escheat'
      ],
      correct: 1,
      explanation: 'Zoning is an exercise of POLICE POWER - the government\'s right to regulate for health, safety, and welfare. No compensation is required because it regulates rather than takes property.'
    },
    {
      question: 'The power of government to take private property for public use is:',
      options: [
        'Police power',
        'Eminent domain',
        'Taxation',
        'Escheat'
      ],
      correct: 1,
      explanation: 'Eminent domain is the power to take private property for public use. It requires just compensation (fair market value) under the 5th Amendment.'
    },
    {
      question: 'A variance:',
      options: [
        'Changes the zoning classification',
        'Permits deviation from zoning requirements without changing the zone',
        'Is the same as rezoning',
        'Requires no hardship'
      ],
      correct: 1,
      explanation: 'A variance permits deviation from zoning requirements (like setbacks or height) without changing the zoning classification. It requires proof of hardship not created by the owner.'
    },
    {
      question: 'An existing use that was legal when started but no longer conforms to current zoning is:',
      options: [
        'Illegal use',
        'Spot zoning',
        'Nonconforming use',
        'Special exception'
      ],
      correct: 2,
      explanation: 'A nonconforming use (grandfathered use) was legal when started but doesn\'t comply with current zoning. It can continue but cannot be expanded.'
    },
    {
      question: 'Spot zoning is:',
      options: [
        'Legal in all circumstances',
        'Singling out a small area for different treatment, generally illegal',
        'Required for special exceptions',
        'The same as a variance'
      ],
      correct: 1,
      explanation: 'Spot zoning singles out a small area for different treatment that benefits one owner at the expense of others. It is generally ILLEGAL because it\'s not consistent with comprehensive planning.'
    },
    {
      question: 'A Certificate of Occupancy is:',
      options: [
        'A building permit',
        'Issued before construction begins',
        'Issued when construction is complete and meets code',
        'The same as a zoning variance'
      ],
      correct: 2,
      explanation: 'A Certificate of Occupancy (CO) is issued when construction is complete and the building meets all code requirements. It must be obtained before the building can be occupied.'
    },
    {
      question: 'CERCLA (Superfund) creates what type of liability?',
      options: [
        'No liability for owners',
        'Liability only for polluters',
        'Strict liability - even innocent owners can be liable',
        'Liability only for commercial properties'
      ],
      correct: 2,
      explanation: 'CERCLA creates STRICT liability for contaminated properties. Even innocent current owners can be held liable for cleanup costs of hazardous waste.'
    },
    {
      question: 'A Phase I Environmental Site Assessment includes:',
      options: [
        'Soil sampling',
        'Groundwater testing',
        'Records review and site inspection, no testing',
        'Air quality testing'
      ],
      correct: 2,
      explanation: 'A Phase I ESA includes historical records review, site inspection, and interviews, but NO actual testing. Phase II involves actual sampling and testing.'
    },
    {
      question: 'When deed restrictions are more restrictive than zoning:',
      options: [
        'Zoning controls',
        'Deed restrictions control',
        'Neither applies',
        'The owner can choose'
      ],
      correct: 1,
      explanation: 'When deed restrictions conflict with zoning, the MORE RESTRICTIVE rule applies. Private restrictions can be stricter than zoning requirements.'
    },
    {
      question: 'The comprehensive plan:',
      options: [
        'Is optional for Florida communities',
        'Guides development and zoning must be consistent with it',
        'Is created by the state legislature',
        'Only applies to commercial property'
      ],
      correct: 1,
      explanation: 'The comprehensive plan is required for Florida communities and guides development. All zoning decisions must be CONSISTENT with the comprehensive plan.'
    },
    {
      question: 'Concurrency requires that:',
      options: [
        'All zones be the same',
        'Infrastructure be available to support development',
        'Development stop completely',
        'Only residential uses be allowed'
      ],
      correct: 1,
      explanation: 'Concurrency requires that public infrastructure (roads, schools, utilities) must be available to support new development when it occurs.'
    },
    {
      question: 'If a property owner dies without heirs or a will, the property:',
      options: [
        'Goes to the neighbors',
        'Escheats to the state',
        'Is sold at auction',
        'Remains vacant forever'
      ],
      correct: 1,
      explanation: 'Escheat is the government power where property reverts to the state when an owner dies without heirs or a will, preventing property from being ownerless.'
    },
    {
      question: 'A special exception (conditional use) is:',
      options: [
        'A deviation from setback requirements',
        'A use contemplated by the zoning ordinance if conditions are met',
        'Always denied by local government',
        'The same as spot zoning'
      ],
      correct: 1,
      explanation: 'A special exception is a use specifically contemplated by the zoning ordinance that may be permitted IF certain conditions are met. Examples include churches in residential zones.'
    },
    {
      question: 'FAR (Floor Area Ratio) relates:',
      options: [
        'Building setback to lot width',
        'Building height to neighboring buildings',
        'Building floor area to lot size',
        'Number of floors to building height'
      ],
      correct: 2,
      explanation: 'Floor Area Ratio (FAR) is the ratio of total building floor area to the lot size. An FAR of 2.0 means the building can have twice as much floor area as the lot size.'
    },
    {
      question: 'Florida\'s statewide building code was adopted in:',
      options: [
        '1992',
        '2002',
        '2012',
        '2022'
      ],
      correct: 1,
      explanation: 'The Florida Building Code was adopted statewide in 2002, based on the International Building Code with Florida-specific modifications.'
    }
  ],

  caseStudies: [
    {
      id: 'ch18-case1',
      title: 'The Variance Request',
      scenario: 'A property owner wants to build a garage but the required 10-foot side setback would make it impossible due to the lot\'s unusual shape. The lot is triangular, created when the city built a road that cut across the corner decades ago. The owner requests a variance to build with a 5-foot setback.',
      question: 'Should the variance be granted?',
      answer: 'This variance should likely be GRANTED. The key requirements for a variance are: (1) Unique hardship - YES, the unusual triangular lot shape creates a hardship; (2) Not self-created - NO, the owner didn\'t create the odd shape (the city did); (3) Not contrary to public interest - building a garage is a reasonable use; (4) Minimum variance needed - requesting 5 feet instead of 10 feet is reasonable given the circumstances. The hardship stems from the physical characteristics of the land, not the owner\'s actions. This is exactly the type of situation variances are designed to address.',
      examRelevance: 'Tests understanding of variance requirements: hardship, not self-created, minimum variance, not contrary to public interest. Key: the lot\'s shape (not the owner) creates the hardship.'
    },
    {
      id: 'ch18-case2',
      title: 'The Grandfathered Business',
      scenario: 'A hardware store has operated in a neighborhood since 1985. In 2010, the area was rezoned to residential only. The owner now wants to expand the store by adding 2,000 square feet. Additionally, 60% of the building was damaged by a hurricane.',
      question: 'Can the owner expand and rebuild?',
      answer: 'The owner faces significant limitations. EXPANSION: NO - nonconforming uses generally cannot be expanded. The store can continue operating in its current size but adding 2,000 square feet would be denied. REBUILDING: PROBLEMATIC - when a nonconforming use is substantially destroyed (typically 50%+), the right to continue often terminates. With 60% destruction, the owner likely cannot rebuild the hardware store. They would need to rebuild as a conforming residential use or seek a variance/rezoning. The owner\'s best options are: (1) Apply for rezoning to commercial; (2) Seek a variance for the nonconforming use; (3) Rebuild as residential.',
      examRelevance: 'Tests understanding of nonconforming use limitations: cannot expand, destruction often terminates the right, substantial damage threshold.'
    }
  ],

  summary: `Chapter 18 covers planning and zoning (2% of exam).

**Government Powers (PETE)**:
- **P**olice Power: Regulate (no compensation) - zoning
- **E**minent Domain: Take (requires compensation)
- **T**axation: Levy property taxes
- **E**scheat: Property to state if no heirs

**Comprehensive Planning**:
- Master guide for development
- Zoning must be CONSISTENT with plan
- Required in Florida
- Concurrency = infrastructure available when needed

**Zoning**:
- R = Residential, C = Commercial, I = Industrial
- Based on police power (no compensation)
- Setbacks = distance from property lines
- FAR = Floor Area Ratio (building to lot)

**Zoning Changes**:
| Method | What It Does |
|--------|--------------|
| Rezoning | Changes the zone classification |
| Variance | Exception, zone stays same, needs hardship |
| Special Exception | Use allowed IF conditions met |
| Spot Zoning | ILLEGAL - benefits one at expense of others |

**Nonconforming Use**:
- "Grandfathered" - legal when started
- Can continue but CANNOT expand
- Destruction may end the right
- Cannot change to different nonconforming use

**Building Codes**:
- Florida Building Code (2002)
- Permits required for construction
- Certificate of Occupancy before use

**Environmental**:
- CERCLA = Superfund (STRICT liability)
- Phase I ESA = records, no testing
- Phase II ESA = actual testing
- Wetlands protected

**Private Controls**:
- Deed restrictions (covenants)
- HOAs enforce restrictions
- MORE RESTRICTIVE rule wins`
};

export default CHAPTER_18;
