/**
 * Chapter 10: Legal Descriptions
 * 
 * Covers 5% of the Florida Real Estate Exam
 * Focus: Methods of describing real property legally
 */

export const CHAPTER_10 = {
  id: 10,
  title: 'Legal Descriptions',
  subtitle: 'Methods of Describing Real Property',
  examPercentage: 5,
  requiredTimeMinutes: 180, // 3 hours minimum
  color: '#F97316', // Orange
  icon: 'Map',
  
  objectives: [
    'Understand the importance of accurate legal descriptions',
    'Explain the metes and bounds method of description',
    'Describe the rectangular survey system (government survey)',
    'Understand the lot and block (plat) system',
    'Calculate acreage using the rectangular survey system',
    'Identify common problems with legal descriptions',
    'Understand how surveys relate to legal descriptions'
  ],

  statutes: [
    { code: 'F.S. 177', title: 'Land Boundaries', summary: 'Standards for land surveys in Florida' },
    { code: 'F.S. 472', title: 'Land Surveyors', summary: 'Licensing and standards for surveyors' }
  ],

  sections: [
    {
      id: '10.1',
      title: 'Importance of Legal Descriptions',
      content: `## Why Legal Descriptions Matter

A **legal description** is the only way to precisely identify a parcel of real property.

### Why Street Addresses Are Not Enough

Street addresses are:
- Not precise enough for legal documents
- Subject to change (renumbering, street name changes)
- Not recognized in deeds or mortgages
- Insufficient for title searches

### Requirements of a Legal Description

A proper legal description must:
- Identify ONE specific parcel of land
- Be complete and unambiguous
- Enable a surveyor to locate and identify the exact boundaries
- Be accepted in legal documents

### When Legal Descriptions Are Needed

- Deeds
- Mortgages
- Liens
- Leases (long-term)
- Contracts for sale
- Title insurance policies
- Court documents

### The Three Methods

There are three primary methods of legal description:

1. **Metes and Bounds** - oldest method, uses directions and distances
2. **Rectangular Survey (Government Survey)** - grid system used in most of US
3. **Lot and Block (Plat)** - references recorded subdivision maps

Each method can precisely identify a parcel when properly used.`,
      keyPoints: [
        'Street addresses are NOT legal descriptions',
        'Legal descriptions must identify exactly ONE parcel',
        'Three methods: Metes and Bounds, Rectangular Survey, Lot and Block',
        'Legal descriptions required in deeds, mortgages, and other legal documents',
        'Must enable a surveyor to locate exact boundaries'
      ],
      examTips: [
        'Street address alone is NEVER sufficient',
        'Know all three methods of legal description',
        'Legal description must be unambiguous',
        'One parcel = one legal description'
      ]
    },
    {
      id: '10.2',
      title: 'Metes and Bounds',
      content: `## Metes and Bounds Method

The **oldest** method of legal description, using measurements and boundaries.

### Key Terms

**Metes**: Measurements (distances)
- Measured in feet, chains, or rods
- 1 chain = 66 feet
- 1 rod = 16.5 feet

**Bounds**: Boundaries and directions
- Natural monuments (rivers, trees, rocks)
- Artificial monuments (iron pins, concrete markers, roads)
- Compass directions (bearings)

### Components of Metes and Bounds

**1. Point of Beginning (POB)**
- Starting point of the description
- Must be a fixed, identifiable location
- Description returns to POB to "close"

**2. Bearings (Directions)**
- Compass readings from north or south
- Example: N 45° E (45 degrees east of north)
- Always reference north OR south first

**3. Distances**
- Length of each boundary line
- Measured in feet or chains

**4. Monuments**
- Physical markers defining boundaries
- Natural: trees, rivers, rocks
- Artificial: iron pins, stakes, roads

### Reading a Bearing

**N 45° E** means:
- Start facing North
- Turn 45 degrees toward East
- This is the direction of travel

**S 30° W** means:
- Start facing South
- Turn 30 degrees toward West

### Example Description

"Beginning at the iron pin at the intersection of Main Street and Oak Avenue; thence N 45° E, 200 feet to an iron pin; thence S 45° E, 100 feet to an oak tree; thence S 45° W, 200 feet to Main Street; thence N 45° W along Main Street, 100 feet to the Point of Beginning."

### Priority of Calls

When conflicts arise, courts give priority in this order:
1. **Natural monuments** (rivers, lakes)
2. **Artificial monuments** (pins, stakes)
3. **Courses/Bearings** (directions)
4. **Distances** (measurements)
5. **Area/Quantity** (acreage)`,
      keyPoints: [
        'Metes = measurements; Bounds = boundaries',
        'POB (Point of Beginning) is required',
        'Description must close (return to POB)',
        'Bearings always reference North or South first',
        'Priority: Natural monuments > Artificial monuments > Courses > Distances > Area'
      ],
      examTips: [
        'Monuments have highest priority in conflicts',
        'POB = Point of Beginning (required)',
        'N 45° E means 45 degrees east of north',
        '1 chain = 66 feet, 1 rod = 16.5 feet'
      ]
    },
    {
      id: '10.3',
      title: 'Rectangular Survey System Overview',
      content: `## Government Rectangular Survey System

Also called the **Government Survey** or **Section-Township-Range System**.

### History

- Established by Land Ordinance of 1785
- Used in most states west of original 13 colonies
- Florida uses this system (adopted when Florida became a state)

### Base Lines and Principal Meridians

The system starts with two reference lines:

**Principal Meridian**: North-south line (longitude)
- Florida uses the **Tallahassee Principal Meridian**

**Base Line**: East-west line (latitude)
- Intersects the principal meridian

All measurements reference these lines.

### Townships

**Township Lines**: Run east-west, parallel to base line
- Spaced **6 miles apart**
- Create horizontal strips

**Range Lines**: Run north-south, parallel to principal meridian
- Spaced **6 miles apart**
- Create vertical strips

Where township and range lines intersect, they create **townships**:
- Each township is **6 miles × 6 miles**
- Contains **36 square miles**
- Contains **36 sections**

### Township Identification

Townships are identified by:
- Distance north or south of base line (Township)
- Distance east or west of principal meridian (Range)

**Example**: T3S, R4E
- Township 3 South (3 townships south of base line)
- Range 4 East (4 ranges east of principal meridian)`,
      keyPoints: [
        'Florida uses Tallahassee Principal Meridian',
        'Township = 6 miles × 6 miles = 36 square miles',
        'Township contains 36 sections',
        'Township lines run east-west; Range lines run north-south',
        'T3S, R4E = Township 3 South, Range 4 East'
      ],
      examTips: [
        'Township = 6 × 6 miles = 36 square miles',
        'Know Florida uses Tallahassee Principal Meridian',
        'T = north/south, R = east/west',
        'Township lines are horizontal (east-west)'
      ]
    },
    {
      id: '10.4',
      title: 'Sections and Subdivisions',
      content: `## Sections Within a Township

Each township is divided into **36 sections**.

### Section Basics

- Each section is **1 mile × 1 mile**
- Each section contains **640 acres**
- Sections are numbered 1-36 in a specific pattern

### Section Numbering Pattern

Sections are numbered starting in the **northeast corner**, moving west, then east, in a serpentine pattern:

\`\`\`
  6    5    4    3    2    1
  7    8    9   10   11   12
 18   17   16   15   14   13
 19   20   21   22   23   24
 30   29   28   27   26   25
 31   32   33   34   35   36
\`\`\`

**Key Sections to Remember**:
- Section 1 = Northeast corner
- Section 6 = Northwest corner
- Section 31 = Southwest corner
- Section 36 = Southeast corner
- Section 16 = School section (historically reserved for schools)

### Dividing Sections

Sections can be subdivided into smaller parcels:

**Half Section**
- 1/2 of a section = 320 acres
- N 1/2 (North half) or S 1/2 (South half)
- E 1/2 (East half) or W 1/2 (West half)

**Quarter Section**
- 1/4 of a section = 160 acres
- NE 1/4, NW 1/4, SE 1/4, SW 1/4
- Each is 1/2 mile × 1/2 mile

**Further Subdivisions**
- Quarter-quarter section = 40 acres
- NW 1/4 of NE 1/4 = 40 acres

### Reading Legal Descriptions

**Read from SMALLEST to LARGEST** (right to left):

"The NW 1/4 of the SE 1/4 of Section 10, T2N, R3E"

Reading right to left:
1. T2N, R3E = Township 2 North, Range 3 East
2. Section 10 = within that township
3. SE 1/4 = southeast quarter of section 10
4. NW 1/4 = northwest quarter of THAT

This describes a 40-acre parcel.`,
      keyPoints: [
        'Section = 1 mile × 1 mile = 640 acres',
        'Township has 36 sections',
        'Sections numbered from NE corner in serpentine pattern',
        'Section 16 = school section',
        'Read legal descriptions from smallest to largest (right to left)'
      ],
      examTips: [
        '640 acres per section - memorize this!',
        'Section 1 = NE corner, Section 36 = SE corner',
        'Quarter section = 160 acres',
        'Read descriptions backwards (right to left)'
      ]
    },
    {
      id: '10.5',
      title: 'Calculating Acreage',
      content: `## Acreage Calculations

Understanding how to calculate acreage is essential for the exam.

### Basic Conversions

- 1 section = **640 acres**
- 1 acre = **43,560 square feet**
- 1 mile = **5,280 feet**
- 1 square mile = **640 acres**

### Fractional Calculations

**Method**: Multiply the fractions, then multiply by 640

**Example 1**: NE 1/4 of Section 5
- 1/4 × 640 = **160 acres**

**Example 2**: S 1/2 of NW 1/4 of Section 12
- 1/2 × 1/4 × 640 = 1/8 × 640 = **80 acres**

**Example 3**: NW 1/4 of NE 1/4 of SW 1/4 of Section 8
- 1/4 × 1/4 × 1/4 × 640 = 1/64 × 640 = **10 acres**

### Dimensions

**Quarter Section (160 acres)**:
- 1/2 mile × 1/2 mile
- 2,640 feet × 2,640 feet

**Quarter-Quarter Section (40 acres)**:
- 1/4 mile × 1/4 mile
- 1,320 feet × 1,320 feet

### Practice Problems

**Problem 1**: How many acres in the E 1/2 of the NW 1/4?
- 1/2 × 1/4 = 1/8
- 1/8 × 640 = **80 acres**

**Problem 2**: How many acres in the SW 1/4 of the NE 1/4 of the SE 1/4?
- 1/4 × 1/4 × 1/4 = 1/64
- 1/64 × 640 = **10 acres**

**Problem 3**: A parcel is described as the N 1/2 of the S 1/2 of Section 15. How many acres?
- 1/2 × 1/2 = 1/4
- 1/4 × 640 = **160 acres**

### Converting Acres to Square Feet

**Example**: How many square feet in 10 acres?
- 10 × 43,560 = **435,600 square feet**`,
      keyPoints: [
        '1 section = 640 acres',
        '1 acre = 43,560 square feet',
        'Multiply fractions, then multiply by 640',
        'Quarter section = 160 acres',
        'Quarter-quarter section = 40 acres'
      ],
      examTips: [
        'Memorize: 640 acres/section, 43,560 sq ft/acre',
        'Multiply ALL fractions together first',
        'Common answers: 160, 80, 40, 20, 10 acres',
        'Read description right to left when calculating'
      ]
    },
    {
      id: '10.6',
      title: 'Lot and Block (Plat) System',
      content: `## Recorded Plat Method

The **Lot and Block** system references recorded subdivision maps.

### What Is a Plat?

A **plat** (or plat map) is:
- A detailed map of a subdivision
- Recorded in public records
- Shows lots, blocks, streets, easements
- Prepared by licensed surveyor
- Approved by local government

### Components of a Plat

**Lots**: Individual parcels within the subdivision
- Numbered sequentially
- Boundaries clearly marked
- Dimensions shown

**Blocks**: Groups of lots
- Separated by streets
- Lettered or numbered

**Subdivision Name**: Unique name for the development

### Legal Description Format

A lot and block description includes:
1. Lot number
2. Block number (or letter)
3. Subdivision name
4. City/County
5. State
6. Reference to recorded plat book and page

**Example**:
"Lot 15, Block B, Sunny Acres Subdivision, according to the plat thereof recorded in Plat Book 42, Page 17, of the Public Records of Orange County, Florida"

### Advantages

- Simple and easy to understand
- Precise (references recorded map)
- Commonly used in residential areas
- No complex calculations needed

### Requirements for Platting

In Florida, subdivisions must:
- Be surveyed by licensed surveyor
- Show all lots, streets, easements
- Be approved by local planning authority
- Be recorded in county records

### Plat vs. Other Methods

| Feature | Plat | Rectangular Survey | Metes & Bounds |
|---------|------|-------------------|----------------|
| Complexity | Simple | Moderate | Complex |
| Reference | Recorded map | Grid system | Measurements |
| Common use | Subdivisions | Rural/large | Irregular parcels |
| Calculation | None needed | Acreage | None |`,
      keyPoints: [
        'Plat = recorded subdivision map',
        'Description includes lot, block, subdivision name, plat book/page',
        'Plat prepared by licensed surveyor',
        'Must be approved and recorded',
        'Simplest method for subdivisions'
      ],
      examTips: [
        'Lot and Block is simplest method',
        'Must reference plat book and page number',
        'Used primarily for subdivisions',
        'Plat must be recorded to be valid reference'
      ]
    },
    {
      id: '10.7',
      title: 'Surveys',
      content: `## Understanding Property Surveys

A **survey** is a professional measurement and mapping of property boundaries.

### Types of Surveys

**Boundary Survey**
- Establishes property lines
- Locates corners and monuments
- Most common type for real estate

**ALTA/NSPS Survey**
- Meets American Land Title Association standards
- Required by many lenders
- Most comprehensive
- Shows improvements, easements, encroachments

**Topographic Survey**
- Shows elevation and terrain features
- Used for construction planning
- Shows contour lines

**Subdivision Survey**
- Creates the plat for new subdivision
- Divides larger parcel into lots
- Required before lots can be sold

### Survey Components

A proper survey includes:
- **Legal description**
- **Boundary lines** with distances and bearings
- **Monuments** (markers at corners)
- **Area** (acreage or square footage)
- **Improvements** (buildings, fences)
- **Easements**
- **Encroachments** (if any)
- **Surveyor's certification**

### Who Performs Surveys

- Must be performed by **licensed surveyor**
- Florida requires licensure under F.S. 472
- Surveyor is liable for accuracy

### When Surveys Are Needed

- Purchasing property (recommended)
- Obtaining mortgage (sometimes required)
- Resolving boundary disputes
- Before construction
- Subdividing property
- Title insurance (ALTA survey)

### Survey vs. Legal Description

**Legal Description**: Identifies the property in words

**Survey**: Physical measurement and mapping

Both should match; discrepancies indicate problems.`,
      keyPoints: [
        'Survey = professional measurement of boundaries',
        'ALTA survey is most comprehensive (required by lenders)',
        'Must be performed by licensed surveyor',
        'Shows boundaries, improvements, easements, encroachments',
        'Boundary survey is most common for real estate'
      ],
      examTips: [
        'ALTA = American Land Title Association survey',
        'Licensed surveyor required in Florida',
        'Survey shows encroachments that affect property',
        'Topographic survey shows elevation/terrain'
      ]
    },
    {
      id: '10.8',
      title: 'Common Problems and Errors',
      content: `## Legal Description Issues

Problems with legal descriptions can create serious title issues.

### Common Errors

**1. Incomplete Description**
- Missing section, township, or range
- Description doesn't close (metes and bounds)
- Missing plat book reference

**2. Ambiguous Description**
- Could describe more than one parcel
- Conflicting information
- Unclear boundaries

**3. Incorrect Information**
- Wrong section number
- Incorrect bearings or distances
- Misspelled subdivision name

**4. Description Doesn't Match**
- Legal description doesn't match deed
- Survey doesn't match description
- Plat doesn't match ground conditions

### Encroachments

An **encroachment** occurs when:
- Improvement crosses property line
- Building extends onto neighbor's land
- Fence is on wrong side of line

Discovered through survey, may require:
- Removal of encroachment
- Easement agreement
- Purchase of encroached land

### Gap and Gore

**Gap**: Strip of land not included in any description
- Created by surveying errors
- Ownership unclear

**Gore**: Triangular piece of land between parcels
- Similar to gap but triangular
- Often at road intersections

### Overlapping Descriptions

When two legal descriptions include the same land:
- Creates cloud on title
- Requires quiet title action or agreement
- May result in litigation

### Correction Methods

**Correction Deed**: Fixes errors in previously recorded deed

**Quiet Title Action**: Court determines correct boundaries

**Survey**: Establishes actual boundaries on ground

**Agreement**: Neighbors agree on boundary line`,
      keyPoints: [
        'Incomplete descriptions can invalidate documents',
        'Encroachment = improvement crosses property line',
        'Gap/Gore = unmapped strips of land',
        'Overlapping descriptions create clouds on title',
        'Correction deed fixes recorded errors'
      ],
      examTips: [
        'Encroachment discovered by survey',
        'Gap = strip, Gore = triangular piece',
        'Quiet title action resolves ownership disputes',
        'Description MUST be complete to be valid'
      ]
    },
    {
      id: '10.9',
      title: 'Florida-Specific Considerations',
      content: `## Legal Descriptions in Florida

Florida has specific considerations for legal descriptions.

### Tallahassee Principal Meridian

- Florida's principal meridian
- Located in Tallahassee
- Basis for all rectangular survey descriptions in Florida

### Water Boundaries

Florida has extensive coastline and waterways:

**Riparian Rights**: Rights related to rivers and streams
- Ownership typically to center of non-navigable waterways
- Only to high-water mark on navigable waters

**Littoral Rights**: Rights related to lakes and oceans
- Ownership to high-water mark
- Rights to access water

**Accretion and Reliction**: 
- Gradual changes in water boundaries can change property lines
- New land created by water deposits belongs to adjacent owner

### Meandering Lines

**Meander lines** in surveys:
- Follow the approximate course of water
- NOT true property boundaries
- Actual boundary is the water's edge

### Submerged Lands

- State owns most submerged lands
- Below mean high-water line (ocean)
- Below ordinary high-water mark (rivers/lakes)

### Government Lots

In some areas (near water, irregular boundaries):
- Standard section subdivisions don't work
- **Government lots** are created
- Numbered (Lot 1, Lot 2, etc.)
- Irregularly shaped
- Acreage varies (not standard 160 or 40)

### Condominium Descriptions

Florida condominiums use special descriptions:
- Unit number
- Building/phase
- Condominium name
- Reference to declaration of condominium
- Includes percentage of common elements`,
      keyPoints: [
        'Florida uses Tallahassee Principal Meridian',
        'Riparian = rivers/streams; Littoral = lakes/oceans',
        'Meander lines are NOT true boundaries',
        'Government lots used near water (irregular shapes)',
        'Condo descriptions include unit + common element percentage'
      ],
      examTips: [
        'Know Tallahassee Principal Meridian for Florida',
        'Riparian = rivers; Littoral = lakes/oceans',
        'Meander line ≠ property boundary',
        'State owns submerged lands below high-water mark'
      ]
    }
  ],

  flashcards: [
    // THREE METHODS
    {
      front: 'What are the three methods of legal description?',
      back: '1. Metes and Bounds (oldest)\n2. Rectangular Survey (Government Survey)\n3. Lot and Block (Plat/Recorded Plat)',
      difficulty: 'easy'
    },
    {
      front: 'Which legal description method is OLDEST?',
      back: 'METES AND BOUNDS - Uses distances, directions, and landmarks. Starts and returns to Point of Beginning (POB).',
      difficulty: 'easy'
    },
    {
      front: 'Which legal description method is MOST COMMON for subdivisions?',
      back: 'LOT AND BLOCK (Plat) - References recorded plat map. Example: "Lot 5, Block 3, Happy Acres Subdivision"',
      difficulty: 'easy'
    },
    
    // RECTANGULAR SURVEY BASICS
    {
      front: 'How many acres are in a SECTION?',
      back: '640 ACRES (1 section = 1 square mile)',
      difficulty: 'easy'
    },
    {
      front: 'How many sections are in a TOWNSHIP?',
      back: '36 SECTIONS (6 miles × 6 miles)',
      difficulty: 'easy'
    },
    {
      front: 'What are the dimensions of a township?',
      back: '6 MILES × 6 MILES = 36 square miles = 36 sections',
      difficulty: 'easy'
    },
    {
      front: 'How many square feet are in an ACRE?',
      back: '43,560 SQUARE FEET',
      difficulty: 'medium'
    },
    {
      front: 'What principal meridian is used in Florida?',
      back: 'TALLAHASSEE Principal Meridian (and Tallahassee baseline)',
      difficulty: 'medium'
    },
    
    // SECTION MATH
    {
      front: 'How many acres in a QUARTER section?',
      back: '160 ACRES (1/4 × 640 = 160)',
      difficulty: 'medium'
    },
    {
      front: 'How many acres in the NW 1/4 of the SE 1/4?',
      back: '40 ACRES\nCalculation: 1/4 × 1/4 × 640 = 1/16 × 640 = 40',
      difficulty: 'medium'
    },
    {
      front: 'How do you calculate acres from section fractions?',
      back: 'Multiply the fractions together, then multiply by 640.\n\nExample: S 1/2 of NE 1/4 = 1/2 × 1/4 × 640 = 80 acres',
      difficulty: 'medium'
    },
    {
      front: 'What is a quarter-quarter section?',
      back: '40 ACRES (1/4 × 1/4 × 640 = 40). Smallest common division.',
      difficulty: 'medium'
    },
    
    // SECTION NUMBERING
    {
      front: 'In which corner of a township is Section 1 located?',
      back: 'NORTHEAST corner (sections numbered starting NE, serpentine pattern)',
      difficulty: 'medium'
    },
    {
      front: 'In which corner of a township is Section 36 located?',
      back: 'SOUTHEAST corner',
      difficulty: 'medium'
    },
    {
      front: 'Which section is in the CENTER of a township?',
      back: 'Section 16 (historically reserved for schools)',
      difficulty: 'hard'
    },
    
    // METES AND BOUNDS
    {
      front: 'What is the Point of Beginning (POB)?',
      back: 'Starting point in metes and bounds description. Description must RETURN to POB to "close".',
      difficulty: 'medium'
    },
    {
      front: 'What is the priority of calls when conflicts arise?',
      back: 'Natural monuments > Artificial monuments > Courses (bearings) > Distances > Area\n\nMemory: "Natural Always Controls Direction Distance Area"',
      difficulty: 'hard'
    },
    {
      front: 'What is a monument in metes and bounds?',
      back: 'NATURAL: Rivers, trees, rocks\nARTIFICIAL: Iron pins, concrete markers, fences',
      difficulty: 'medium'
    },
    
    // SURVEYS
    {
      front: 'What is an ALTA survey?',
      back: 'American Land Title Association survey - MOST COMPREHENSIVE type. Required by many lenders for commercial properties.',
      difficulty: 'medium'
    },
    {
      front: 'What is a boundary survey?',
      back: 'Shows property lines, corners, and monuments. Used to verify boundaries.',
      difficulty: 'easy'
    },
    {
      front: 'What is an encroachment?',
      back: 'When an improvement (building, fence, driveway) CROSSES the property line onto neighboring land',
      difficulty: 'easy'
    },
    
    // WATER RIGHTS
    {
      front: 'What is the difference between riparian and littoral rights?',
      back: 'RIPARIAN = RIVERS and streams (flowing water)\nLITTORAL = LAKES and oceans (still/standing water)',
      difficulty: 'medium'
    },
    {
      front: 'What is accretion?',
      back: 'GRADUAL addition of land by natural water deposit (sediment). Owner gains the new land.',
      difficulty: 'medium'
    },
    {
      front: 'What is erosion?',
      back: 'GRADUAL loss of land due to water action. Opposite of accretion.',
      difficulty: 'medium'
    },
    {
      front: 'What is avulsion?',
      back: 'SUDDEN loss or addition of land due to water (flood, earthquake). Ownership may NOT change with avulsion.',
      difficulty: 'hard'
    }
  ],

  practiceQuestions: [
    {
      question: 'How many acres are in a section?',
      options: [
        '36 acres',
        '160 acres',
        '320 acres',
        '640 acres'
      ],
      correct: 3,
      explanation: 'A section is 1 mile × 1 mile, which equals 640 acres. This is a fundamental measurement in the rectangular survey system.'
    },
    {
      question: 'A township contains how many sections?',
      options: [
        '4 sections',
        '16 sections',
        '36 sections',
        '64 sections'
      ],
      correct: 2,
      explanation: 'A township is 6 miles × 6 miles and contains 36 sections, each 1 mile × 1 mile.'
    },
    {
      question: 'The NE 1/4 of Section 12 contains how many acres?',
      options: [
        '40 acres',
        '80 acres',
        '160 acres',
        '320 acres'
      ],
      correct: 2,
      explanation: 'A quarter section equals 1/4 of 640 acres = 160 acres.'
    },
    {
      question: 'The S 1/2 of the NW 1/4 of Section 5 contains how many acres?',
      options: [
        '40 acres',
        '80 acres',
        '160 acres',
        '320 acres'
      ],
      correct: 1,
      explanation: '1/2 × 1/4 = 1/8 of the section. 1/8 × 640 = 80 acres.'
    },
    {
      question: 'In the rectangular survey system, Section 1 is located in which corner of the township?',
      options: [
        'Northwest',
        'Northeast',
        'Southwest',
        'Southeast'
      ],
      correct: 1,
      explanation: 'Section 1 is always in the northeast corner of a township. Sections are numbered starting from the NE corner, moving west, then back east in a serpentine pattern.'
    },
    {
      question: 'Which principal meridian is used in Florida?',
      options: [
        'St. Augustine Principal Meridian',
        'Tallahassee Principal Meridian',
        'Jacksonville Principal Meridian',
        'Miami Principal Meridian'
      ],
      correct: 1,
      explanation: 'Florida uses the Tallahassee Principal Meridian as the reference point for its rectangular survey system.'
    },
    {
      question: 'In metes and bounds, when there is a conflict, which has the highest priority?',
      options: [
        'Distance',
        'Area',
        'Natural monuments',
        'Courses (bearings)'
      ],
      correct: 2,
      explanation: 'Natural monuments have the highest priority when conflicts arise. The order is: Natural monuments > Artificial monuments > Courses > Distances > Area.'
    },
    {
      question: 'A POB in metes and bounds refers to:',
      options: [
        'Point of Boundary',
        'Point of Beginning',
        'Place of Building',
        'Point of Bearing'
      ],
      correct: 1,
      explanation: 'POB stands for Point of Beginning - the starting point of a metes and bounds description. The description must return to this point to "close."'
    },
    {
      question: 'The NW 1/4 of the NE 1/4 of the SW 1/4 of Section 8 contains how many acres?',
      options: [
        '10 acres',
        '20 acres',
        '40 acres',
        '80 acres'
      ],
      correct: 0,
      explanation: '1/4 × 1/4 × 1/4 = 1/64. Then 1/64 × 640 = 10 acres.'
    },
    {
      question: 'How many square feet are in one acre?',
      options: [
        '5,280 square feet',
        '36,000 square feet',
        '43,560 square feet',
        '52,800 square feet'
      ],
      correct: 2,
      explanation: 'There are 43,560 square feet in one acre. This is a fundamental conversion for real estate calculations.'
    },
    {
      question: 'A lot and block description must reference:',
      options: [
        'The principal meridian',
        'The point of beginning',
        'The recorded plat book and page',
        'The section, township, and range'
      ],
      correct: 2,
      explanation: 'A lot and block (plat) description must reference the recorded plat book and page number so the property can be located on the official subdivision map.'
    },
    {
      question: 'Which type of survey is the most comprehensive and often required by lenders?',
      options: [
        'Boundary survey',
        'ALTA/NSPS survey',
        'Topographic survey',
        'Subdivision survey'
      ],
      correct: 1,
      explanation: 'An ALTA/NSPS survey meets American Land Title Association standards and is the most comprehensive. It shows improvements, easements, encroachments, and is often required by lenders.'
    },
    {
      question: 'An encroachment is best defined as:',
      options: [
        'A gap between two properties',
        'An improvement that extends onto neighboring property',
        'A survey error',
        'A type of easement'
      ],
      correct: 1,
      explanation: 'An encroachment occurs when an improvement (building, fence, driveway) crosses the property line and extends onto neighboring property.'
    },
    {
      question: 'Rights associated with property bordering rivers and streams are called:',
      options: [
        'Littoral rights',
        'Riparian rights',
        'Accretion rights',
        'Avulsion rights'
      ],
      correct: 1,
      explanation: 'Riparian rights relate to property bordering rivers and streams. Littoral rights relate to property bordering lakes and oceans.'
    },
    {
      question: 'T4N, R2W describes a:',
      options: [
        'Section',
        'Quarter section',
        'Township',
        'Government lot'
      ],
      correct: 2,
      explanation: 'T4N, R2W (Township 4 North, Range 2 West) describes a township location relative to the principal meridian and base line.'
    }
  ],

  caseStudies: [
    {
      id: 'ch10-case1',
      title: 'The Missing Acreage',
      scenario: 'Buyer Beth is purchasing what she believes is a 40-acre parcel described as "The NE 1/4 of the NW 1/4 of Section 15." She plans to subdivide it into 4 ten-acre lots. However, after the survey, the surveyor reports the parcel is only 38.5 acres due to a road right-of-way that runs through the property.',
      question: 'What should Beth know about legal descriptions and acreage?',
      answer: 'Legal descriptions in the rectangular survey system give theoretical acreage (40 acres for a quarter-quarter section), but actual acreage may differ due to: (1) Government lots near water or borders are irregular; (2) Roads, easements, or rights-of-way reduce usable area; (3) Surveying corrections and adjustments. Beth should always get a survey before purchase to determine actual usable acreage. The seller is selling what the legal description covers, minus any existing easements. Beth may need to adjust her subdivision plans or negotiate the price.',
      examRelevance: 'Tests understanding that calculated acreage is theoretical, and actual acreage requires a survey. Also reinforces that easements and rights-of-way reduce usable land.'
    },
    {
      id: 'ch10-case2',
      title: 'The Disputed Fence',
      scenario: 'Owner Oscar has lived on his property for 10 years. His neighbor Nick just had his property surveyed and discovered that Oscar\'s fence is 3 feet onto Nick\'s property. Nick demands that Oscar move the fence.',
      question: 'What legal description and survey issues are involved here?',
      answer: 'This is an encroachment issue discovered through a survey. The fence crosses the true property line as established by the legal descriptions and survey. Oscar\'s options include: (1) Move the fence to the correct boundary; (2) Purchase the 3-foot strip from Nick; (3) Negotiate an easement allowing the fence to remain; (4) If the fence has been there long enough (20+ years in Florida with other requirements), possibly claim adverse possession or prescriptive easement. This case illustrates why surveys are important - many boundary issues go unnoticed until a survey is performed. Nick\'s legal description and survey establish the true boundary.',
      examRelevance: 'Tests understanding of encroachments, the importance of surveys, and how legal descriptions establish true boundaries regardless of physical features like fences.'
    }
  ],

  summary: `Chapter 10 covers the three methods of legally describing real property.

**Why Legal Descriptions Matter**:
- Street addresses are NOT sufficient
- Must identify exactly ONE parcel
- Required for deeds, mortgages, legal documents

**Metes and Bounds**:
- Oldest method
- Uses POB (Point of Beginning)
- Bearings (directions) and distances
- Must close (return to POB)
- Priority: Natural monuments > Artificial monuments > Courses > Distances > Area

**Rectangular Survey System**:
- Florida uses Tallahassee Principal Meridian
- Township = 6 × 6 miles = 36 square miles = 36 sections
- Section = 1 × 1 mile = 640 acres
- T3N, R4E = Township 3 North, Range 4 East
- Section 1 = NE corner, Section 36 = SE corner

**Acreage Calculations**:
- 1 section = 640 acres
- 1 acre = 43,560 square feet
- Quarter section = 160 acres
- Quarter-quarter = 40 acres
- Multiply fractions × 640

**Lot and Block (Plat)**:
- Simplest method
- References recorded plat map
- Includes lot, block, subdivision name, plat book/page

**Surveys**:
- ALTA = most comprehensive
- Must be done by licensed surveyor
- Shows encroachments, easements, improvements

**Florida Specifics**:
- Tallahassee Principal Meridian
- Riparian (rivers) vs. Littoral (lakes/oceans)
- Government lots near water (irregular)`
};

export default CHAPTER_10;
