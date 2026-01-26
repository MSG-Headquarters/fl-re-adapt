/**
 * Chapter 14: Real Estate Appraisal
 * 
 * Covers 6% of the Florida Real Estate Exam
 * Focus: Valuation methods, principles, and appraisal process
 */

export const CHAPTER_14 = {
  id: 14,
  title: 'Real Estate Appraisal',
  subtitle: 'Valuation Methods and Principles',
  examPercentage: 6,
  requiredTimeMinutes: 210, // 3.5 hours minimum
  color: '#F43F5E', // Rose
  icon: 'Calculator',
  
  objectives: [
    'Understand the purpose and types of value in appraisal',
    'Explain the principles that affect property value',
    'Describe the three approaches to value',
    'Perform basic calculations for each approach',
    'Understand the appraisal process and report types',
    'Differentiate between appraisals and other valuations',
    'Explain the role of licensed appraisers'
  ],

  statutes: [
    { code: 'F.S. 475', title: 'Real Estate Appraisers', summary: 'Appraiser licensing in Florida' },
    { code: 'USPAP', title: 'Uniform Standards', summary: 'Uniform Standards of Professional Appraisal Practice' },
    { code: 'FIRREA', title: 'Federal Requirements', summary: 'Financial Institutions Reform, Recovery, and Enforcement Act' }
  ],

  sections: [
    {
      id: '14.1',
      title: 'Value Concepts',
      content: `## Understanding Value

Appraisal is the process of estimating the value of real property.

### Market Value Definition

**Market value** is the most probable price a property should bring in a competitive and open market under all conditions requisite to a fair sale.

### Conditions for Market Value

1. Buyer and seller are typically motivated
2. Both parties are well informed
3. Reasonable time for exposure to market
4. Payment in cash or equivalent
5. Price not affected by special financing
6. No undue pressure on either party

### Types of Value

**Market Value**
- Most commonly appraised
- Objective, based on market data
- Used for lending purposes

**Investment Value**
- Value to a specific investor
- Based on individual requirements
- May differ from market value

**Assessed Value**
- Value for property tax purposes
- Set by county property appraiser
- Often percentage of market value

**Insured Value**
- Value for insurance purposes
- Usually replacement cost
- May exclude land value

**Liquidation Value**
- Quick sale value
- Below market value
- Time pressure exists

### Value vs. Price vs. Cost

**Value**: What a property is WORTH (estimated)
**Price**: What someone actually PAYS (fact)
**Cost**: What it takes to CREATE or BUILD (historical)

These three may be different for the same property.`,
      keyPoints: [
        'Market value = most probable price in open market',
        'Requires informed, motivated parties with no pressure',
        'Value (estimated) ≠ Price (actual) ≠ Cost (creation)',
        'Assessed value = for property taxes',
        'Investment value = value to specific investor'
      ],
      examTips: [
        'Market value requires NO undue pressure',
        'Value is estimated; Price is actual',
        'Assessed value often below market value',
        'Know all conditions for market value'
      ]
    },
    {
      id: '14.2',
      title: 'Principles of Value',
      content: `## Economic Principles Affecting Value

Appraisers use economic principles to analyze property value.

### Supply and Demand

- When supply decreases or demand increases, prices rise
- When supply increases or demand decreases, prices fall
- Fundamental economic principle

### Substitution

**Most important appraisal principle**

- A buyer will pay no more for a property than the cost of acquiring an equally desirable substitute
- Basis for all three approaches to value
- Rational buyer behavior

### Highest and Best Use

The **most profitable, legally permitted, physically possible, and financially feasible** use of land.

Four tests:
1. **Legally permissible**: Zoning, restrictions allow it
2. **Physically possible**: Site can accommodate it
3. **Financially feasible**: Will produce positive return
4. **Maximally productive**: Highest return among options

### Contribution

- Value of a component is measured by what it adds to the whole
- Improvement value = contribution to total value
- May differ from actual cost

### Conformity

- Property achieves maximum value when it conforms to neighborhood
- Over-improvement: Too good for area (loses value)
- Under-improvement: Not good enough (loses potential)

### Anticipation

- Value is based on expected future benefits
- Buyers pay for anticipated benefits
- Future income, appreciation, enjoyment

### Change

- Real estate markets are always changing
- Neighborhoods go through life cycles
- Value reflects current and anticipated conditions

### Progression and Regression

**Progression**: Lower-value property benefits from higher-value neighbors
**Regression**: Higher-value property loses value near lower-value neighbors`,
      keyPoints: [
        'Substitution = most important principle (basis for all approaches)',
        'Highest and best use = legally permitted, physically possible, financially feasible, maximally productive',
        'Contribution = value added, may differ from cost',
        'Conformity = maximum value when property fits neighborhood',
        'Progression/Regression = impact of neighboring values'
      ],
      examTips: [
        'SUBSTITUTION is the foundation of all approaches',
        'Highest and best use has FOUR tests',
        'Contribution ≠ Cost (improvement may not add its cost)',
        'Over-improvement = conformity violation'
      ]
    },
    {
      id: '14.3',
      title: 'Sales Comparison Approach',
      content: `## Sales Comparison (Market Data) Approach

The most commonly used approach for residential property.

### Concept

Compare subject property to recently sold similar properties, adjusting for differences.

### Based on Principle of

**SUBSTITUTION** - a buyer won't pay more than the cost of acquiring a similar property

### Steps in the Process

1. **Research** comparable sales (comps)
2. **Select** most similar properties
3. **Verify** sales data
4. **Adjust** for differences
5. **Reconcile** to final value estimate

### Adjustment Rules

**Always adjust the COMPARABLE, never the subject**

**If comparable is BETTER, subtract**
- Comp has pool, subject doesn't → subtract from comp

**If comparable is WORSE, add**
- Comp has no garage, subject has one → add to comp

### Memory Device: CBS

**C**omparable **B**etter = **S**ubtract
**C**omparable **W**orse = **A**dd (opposite of CBS)

Or: "If the comp is superior, subtract; if inferior, add"

### Adjustment Example

| Feature | Comp Sale | Adjustment | 
|---------|-----------|------------|
| Sale Price | $300,000 | |
| Pool (comp has, subject doesn't) | | -$15,000 |
| Garage (subject has, comp doesn't) | | +$10,000 |
| **Adjusted Value** | | **$295,000** |

### Best Comparables

- Same neighborhood
- Recent sales (within 6 months ideal)
- Similar size and features
- Arm's length transactions
- Fewest adjustments needed

### Limitations

- Requires sufficient comparable sales
- Less reliable in inactive markets
- Subjective adjustment amounts
- Unique properties difficult to compare`,
      keyPoints: [
        'Most common approach for residential property',
        'Based on principle of substitution',
        'Always adjust the COMPARABLE, not subject',
        'Comp better = subtract; Comp worse = add',
        'Best comps are recent, similar, same neighborhood'
      ],
      examTips: [
        'CBS: Comparable Better Subtract',
        'NEVER adjust the subject property',
        'Recent sales (6 months) are best',
        'Arm\'s length = no special relationship'
      ]
    },
    {
      id: '14.4',
      title: 'Cost Approach',
      content: `## Cost Approach

Estimates value based on cost to replace the improvements, minus depreciation, plus land value.

### Concept

What would it cost to build a similar property today, adjusted for wear and tear?

### Based on Principle of

**SUBSTITUTION** - buyer won't pay more than cost to build equivalent property

### Formula

**Value = Reproduction/Replacement Cost - Depreciation + Land Value**

Or: **Value = Cost New - Depreciation + Land**

### Reproduction Cost vs. Replacement Cost

**Reproduction Cost**: Exact replica using same materials and methods

**Replacement Cost**: Similar utility using modern materials and methods (more common)

### Steps in Cost Approach

1. Estimate land value (as if vacant)
2. Estimate cost to replace improvements
3. Estimate total depreciation
4. Subtract depreciation from replacement cost
5. Add land value

### Example Calculation

| Component | Amount |
|-----------|--------|
| Replacement Cost New | $350,000 |
| Less: Depreciation | -$50,000 |
| Depreciated Value of Improvements | $300,000 |
| Plus: Land Value | +$100,000 |
| **Total Property Value** | **$400,000** |

### When Cost Approach Is Best

- New construction
- Unique properties (churches, schools)
- Insurance purposes
- Limited comparable sales
- Special-use properties

### Limitations

- Depreciation estimates can be subjective
- Land value requires separate analysis
- Older buildings more difficult
- Doesn't reflect market directly`,
      keyPoints: [
        'Formula: Cost New - Depreciation + Land Value',
        'Replacement cost = modern equivalent (most common)',
        'Reproduction cost = exact replica',
        'Land valued separately as if vacant',
        'Best for new or unique properties'
      ],
      examTips: [
        'Know the formula: Cost - Depreciation + Land',
        'REPLACEMENT cost is more commonly used',
        'Land is valued SEPARATELY',
        'Best approach for NEW construction'
      ]
    },
    {
      id: '14.5',
      title: 'Depreciation',
      content: `## Understanding Depreciation

**Depreciation** is loss in value from any cause. In appraisal, it's the difference between cost new and current value.

### Types of Depreciation

**1. Physical Deterioration**
- Wear and tear, age, use
- Deferred maintenance
- Structural damage

*Curable*: Cost to fix is less than value added (paint, carpet)
*Incurable*: Cost to fix exceeds value added (foundation issues)

**2. Functional Obsolescence**
- Outdated design or features
- Poor floor plan
- Over-improvement or under-improvement
- Lack of modern amenities

*Curable*: Modernization is cost-effective
*Incurable*: Cannot economically remedy

**3. External (Economic) Obsolescence**
- Caused by factors OUTSIDE the property
- Location issues (airport noise, traffic)
- Economic conditions (factory closing)
- Zoning changes
- Environmental issues

**ALWAYS INCURABLE** - owner cannot control external factors

### Memory Device

**P**hysical = **P**roperty itself (wear and tear)
**F**unctional = **F**loor plan/features (design)
**E**xternal = **E**nvironment (outside factors)

### Curable vs. Incurable

| Type | Curable? | Example |
|------|----------|---------|
| Physical | Can be either | Deferred maintenance vs. foundation |
| Functional | Can be either | Outdated kitchen vs. room too small |
| External | ALWAYS incurable | Highway noise, factory closure |

### Calculating Depreciation

**Age-Life Method**:

Depreciation = (Effective Age / Economic Life) × Cost New

**Example**:
- Cost new: $300,000
- Effective age: 15 years
- Economic life: 60 years
- Depreciation: (15/60) × $300,000 = $75,000`,
      keyPoints: [
        'Three types: Physical, Functional, External',
        'External obsolescence is ALWAYS incurable',
        'Curable = cost to fix < value added',
        'Incurable = cost to fix > value added',
        'Age-Life Method: (Effective Age / Economic Life) × Cost'
      ],
      examTips: [
        'External/Economic obsolescence = ALWAYS INCURABLE',
        'Physical = wear; Functional = design; External = location',
        'Know curable vs. incurable distinction',
        'Age-Life formula is commonly tested'
      ]
    },
    {
      id: '14.6',
      title: 'Income Approach',
      content: `## Income Capitalization Approach

Estimates value based on the income a property can generate.

### Concept

Convert expected income into an indication of value using a capitalization rate.

### Based on Principle of

**ANTICIPATION** - value reflects expected future benefits (income)

### When Income Approach Is Used

- Investment properties
- Rental properties
- Commercial real estate
- Properties purchased for income

### Key Terms

**Potential Gross Income (PGI)**: Maximum possible rent if 100% occupied

**Vacancy and Collection Loss**: Expected income loss from vacancies and non-payment

**Effective Gross Income (EGI)**: PGI minus vacancy/collection loss

**Operating Expenses**: Costs to run the property (not debt service)

**Net Operating Income (NOI)**: EGI minus operating expenses

**Capitalization Rate (Cap Rate)**: Rate of return investor expects

### Income Formula

**NOI ÷ Cap Rate = Value**

Or rearranged:
- **NOI ÷ Value = Cap Rate**
- **Value × Cap Rate = NOI**

### IRV Formula (Memory Device)

**I** = Income (NOI)
**R** = Rate (Cap Rate)
**V** = Value

I = R × V
R = I ÷ V
V = I ÷ R

### Example Calculation

| Item | Amount |
|------|--------|
| Potential Gross Income | $120,000 |
| Less: Vacancy (5%) | -$6,000 |
| Effective Gross Income | $114,000 |
| Less: Operating Expenses | -$44,000 |
| **Net Operating Income** | **$70,000** |

Cap Rate: 7%
**Value = $70,000 ÷ 0.07 = $1,000,000**

### What's NOT in Operating Expenses

- Mortgage payments (debt service)
- Income taxes
- Depreciation (for tax purposes)
- Capital improvements`,
      keyPoints: [
        'Formula: NOI ÷ Cap Rate = Value (IRV)',
        'Based on principle of anticipation',
        'Best for income-producing properties',
        'NOI = Effective Gross Income - Operating Expenses',
        'Operating expenses do NOT include mortgage payments'
      ],
      examTips: [
        'IRV: I÷R=V, I÷V=R, R×V=I',
        'NOI excludes debt service (mortgage)',
        'Higher cap rate = lower value (riskier)',
        'Know the income calculation steps'
      ]
    },
    {
      id: '14.7',
      title: 'Gross Rent Multiplier',
      content: `## GRM - A Simplified Income Approach

The **Gross Rent Multiplier (GRM)** is a quick method to estimate value using gross rent.

### Formula

**Value = Gross Rent × GRM**

Or rearranged:
**GRM = Sale Price ÷ Gross Rent**

### How to Calculate GRM

Find comparable properties that have sold:

| Comp | Sale Price | Monthly Rent | GRM |
|------|------------|--------------|-----|
| A | $200,000 | $2,000 | 100 |
| B | $210,000 | $2,100 | 100 |
| C | $195,000 | $1,950 | 100 |
| Average GRM | | | **100** |

### Applying GRM

Subject property rents for $2,200/month
GRM from market = 100

**Value = $2,200 × 100 = $220,000**

### Monthly vs. Annual

**Gross Monthly Rent Multiplier**:
- Uses monthly rent
- More common for residential

**Gross Annual Income Multiplier**:
- Uses annual income
- More common for commercial
- Also called Gross Income Multiplier (GIM)

### GRM vs. Cap Rate

| Feature | GRM | Cap Rate |
|---------|-----|----------|
| Uses | Gross rent | Net Operating Income |
| Accounts for expenses | No | Yes |
| Complexity | Simple | More detailed |
| Best for | Quick estimate | Investment analysis |

### Limitations

- Doesn't account for operating expenses
- Assumes similar expense ratios
- Less accurate than income approach
- Quick screening tool only`,
      keyPoints: [
        'Formula: Value = Gross Rent × GRM',
        'GRM = Sale Price ÷ Gross Rent',
        'Uses GROSS rent (doesn\'t subtract expenses)',
        'Quick estimate, not detailed analysis',
        'GMRM uses monthly; GIM uses annual'
      ],
      examTips: [
        'GRM is simpler than cap rate (uses gross, not net)',
        'Know both formulas (find value and find GRM)',
        'GRM doesn\'t account for expenses',
        'Monthly GRM common for residential'
      ]
    },
    {
      id: '14.8',
      title: 'Reconciliation and Final Value',
      content: `## Reconciliation

After completing the three approaches, the appraiser reconciles to a final value estimate.

### What Is Reconciliation?

The process of analyzing results from different approaches to arrive at a final value estimate.

### Reconciliation Is NOT

- Simple averaging
- Selecting the highest or lowest
- Mathematical calculation

### Reconciliation IS

- Professional judgment
- Weighing reliability of each approach
- Considering the property type and purpose
- Analyzing data quality

### Which Approach Gets Most Weight?

**Residential Property**:
- Sales Comparison = Most weight
- Good comparable sales available
- Market-based approach

**Income Property**:
- Income Approach = Most weight
- Investors base decisions on income
- Cap rate analysis relevant

**New Construction**:
- Cost Approach = Most weight
- Current construction costs known
- Little depreciation

**Unique/Special Use**:
- Cost Approach = Most weight
- Few comparable sales
- Churches, schools, government buildings

### Example Reconciliation

| Approach | Indication | Weight |
|----------|------------|--------|
| Sales Comparison | $305,000 | 60% |
| Cost | $298,000 | 25% |
| Income | $312,000 | 15% |

Final value might be stated as $305,000 based on heavy weighting of sales comparison for this residential property.

### Final Value Opinion

- Single point estimate (most common)
- Or range of value
- Stated as of specific date
- Subject to assumptions and conditions`,
      keyPoints: [
        'Reconciliation = professional judgment, not averaging',
        'Weight approaches based on property type',
        'Residential = sales comparison most weight',
        'Income property = income approach most weight',
        'New construction = cost approach most weight'
      ],
      examTips: [
        'Reconciliation is NOT simple averaging',
        'Know which approach applies to which property type',
        'Sales comparison best for residential',
        'Income approach best for investment property'
      ]
    },
    {
      id: '14.9',
      title: 'Appraisal Process and Reports',
      content: `## The Appraisal Process

Appraisers follow a systematic process to estimate value.

### Steps in the Process

1. **Define the Problem**
   - Identify property
   - Identify property rights
   - Intended use of appraisal
   - Definition of value
   - Effective date

2. **Determine Scope of Work**
   - Research needed
   - Analysis required
   - Type of report

3. **Collect and Analyze Data**
   - General data (market, area)
   - Specific data (property)
   - Comparable data

4. **Analyze Highest and Best Use**
   - As vacant
   - As improved

5. **Apply Approaches to Value**
   - Sales comparison
   - Cost
   - Income

6. **Reconcile Value Indications**
   - Weight the approaches
   - Arrive at final value

7. **Report the Opinion**
   - Written report
   - Certification

### Types of Appraisal Reports

**Self-Contained Report** (now called Appraisal Report)
- Most comprehensive
- Full detail and analysis
- Largest document

**Summary Report**
- Summarizes analysis
- Less detail
- Most common for residential

**Restricted Report**
- Minimal content
- Client-only use
- Most limited

### USPAP Requirements

**Uniform Standards of Professional Appraisal Practice**:
- Required for all appraisers
- Sets ethical and performance standards
- Updated every two years
- Developed by Appraisal Foundation

### Who Can Appraise?

**Licensed Appraiser**: Non-complex residential up to $1 million
**Certified Residential**: Any residential, complex up to $1 million
**Certified General**: Any property, including commercial`,
      keyPoints: [
        'Seven steps in appraisal process',
        'USPAP = Uniform Standards (required)',
        'Three report types: Self-contained, Summary, Restricted',
        'Licensed, Certified Residential, Certified General = appraiser levels',
        'Highest and best use analyzed early in process'
      ],
      examTips: [
        'USPAP governs all appraisers',
        'Know the basic appraisal process steps',
        'Summary report most common for residential',
        'Certified General = can appraise any property'
      ]
    },
    {
      id: '14.10',
      title: 'CMAs and BPOs',
      content: `## Other Valuations

Real estate licensees may provide valuations that are NOT appraisals.

### Comparative Market Analysis (CMA)

**What It Is**:
- Opinion of value by licensee
- For listing or buying decisions
- Uses comparable sales data

**Who Can Do It**:
- Any licensed real estate agent
- For their clients
- In course of real estate business

**Limitations**:
- NOT an appraisal
- Cannot be used for lending
- Must not call it an "appraisal"

### Broker Price Opinion (BPO)

**What It Is**:
- Broker's opinion of value
- Often used by lenders
- For loss mitigation, REO properties

**Regulations**:
- Florida allows BPOs
- Cannot be used instead of appraisal when appraisal required
- Limited purposes only

### CMA vs. Appraisal

| Feature | CMA | Appraisal |
|---------|-----|-----------|
| Done by | Agent/broker | Licensed appraiser |
| Purpose | Listing/buying | Lending/legal |
| Standards | No USPAP | USPAP required |
| Terminology | Market analysis | Appraisal |
| Can be called | CMA, BPO | Appraisal |

### Important Rules

**Real estate licensees CANNOT**:
- Call their work an "appraisal"
- Perform appraisals without appraiser license
- Charge appraisal fees

**Real estate licensees CAN**:
- Provide CMAs for listing purposes
- Perform BPOs within regulations
- Give opinions of value to clients

### When Appraisal Is Required

- Federally related transactions over threshold
- Most mortgage loans
- Estate settlement (usually)
- Litigation involving value`,
      keyPoints: [
        'CMA = agent\'s market analysis, NOT an appraisal',
        'BPO = broker price opinion, limited purposes',
        'Agents cannot call their work an "appraisal"',
        'Only licensed appraisers can perform appraisals',
        'CMAs used for listing/buying decisions'
      ],
      examTips: [
        'CMA is NOT an appraisal - never call it that',
        'Only appraisers can do appraisals',
        'BPOs allowed in Florida for limited purposes',
        'Know the differences between CMA and appraisal'
      ]
    }
  ],

  flashcards: [
    // BASIC PRINCIPLES
    {
      front: 'What is the most important principle in appraisal?',
      back: 'SUBSTITUTION - A buyer will not pay more for a property than the cost of an equally desirable substitute. Basis for all three approaches.',
      difficulty: 'easy'
    },
    {
      front: 'What are the four tests for highest and best use?',
      back: '1. Legally permissible\n2. Physically possible\n3. Financially feasible\n4. Maximally productive',
      difficulty: 'medium'
    },
    {
      front: 'What does "highest and best use" mean?',
      back: 'The LEGAL, PHYSICALLY POSSIBLE, FINANCIALLY FEASIBLE use that produces MAXIMUM value. Starting point for all appraisals.',
      difficulty: 'medium'
    },
    
    // THREE APPROACHES
    {
      front: 'What are the three approaches to value?',
      back: '1. SALES COMPARISON (best for residential)\n2. COST (best for new/unique)\n3. INCOME (best for investment)',
      difficulty: 'easy'
    },
    {
      front: 'Which approach is best for RESIDENTIAL property?',
      back: 'SALES COMPARISON Approach - Most weight given because comparable sales are readily available.',
      difficulty: 'easy'
    },
    {
      front: 'Which approach is best for INCOME-PRODUCING property?',
      back: 'INCOME Approach - Investors base decisions on expected income/return.',
      difficulty: 'easy'
    },
    {
      front: 'Which approach is best for NEW CONSTRUCTION or unique properties?',
      back: 'COST Approach - Current construction costs are known, little depreciation.',
      difficulty: 'medium'
    },
    
    // SALES COMPARISON
    {
      front: 'In sales comparison, how do you adjust for a comparable that is BETTER than subject?',
      back: 'SUBTRACT from the comparable.\n\nCBS: Comparable Better = Subtract\n\nAlways adjust the COMPARABLE, not the subject.',
      difficulty: 'easy'
    },
    {
      front: 'In sales comparison, how do you adjust for a comparable that is WORSE than subject?',
      back: 'ADD to the comparable.\n\nComparable worse = Add\n\nAlways adjust the COMPARABLE, not the subject.',
      difficulty: 'easy'
    },
    {
      front: 'Do you ever adjust the subject property in sales comparison?',
      back: 'NO - Always adjust the COMPARABLE, never the subject.',
      difficulty: 'medium'
    },
    
    // COST APPROACH
    {
      front: 'What is the COST APPROACH formula?',
      back: 'Value = Replacement Cost - Depreciation + Land Value\n\nNote: Land is NEVER depreciated',
      difficulty: 'easy'
    },
    {
      front: 'What are the three types of depreciation?',
      back: '1. PHYSICAL deterioration (wear and tear)\n2. FUNCTIONAL obsolescence (outdated design)\n3. EXTERNAL obsolescence (outside factors)',
      difficulty: 'easy'
    },
    {
      front: 'Which type of depreciation is ALWAYS incurable?',
      back: 'EXTERNAL (Economic) obsolescence - Caused by factors OUTSIDE the property that owner cannot control (highway, landfill, economy).',
      difficulty: 'medium'
    },
    {
      front: 'Can land be depreciated?',
      back: 'NO - Land is NEVER depreciated. Land is considered permanent/indestructible.',
      difficulty: 'easy'
    },
    {
      front: 'What is the difference between replacement cost and reproduction cost?',
      back: 'REPLACEMENT: Cost to build with EQUIVALENT utility (modern materials)\nREPRODUCTION: Cost to build EXACT replica (same materials)',
      difficulty: 'hard'
    },
    
    // INCOME APPROACH
    {
      front: 'What is the INCOME APPROACH formula (IRV)?',
      back: 'Value = NOI ÷ Cap Rate\n\nIRV: I ÷ R = V\n(Income ÷ Rate = Value)',
      difficulty: 'easy'
    },
    {
      front: 'How do you calculate NOI?',
      back: 'Potential Gross Income\n- Vacancy & Collection Loss\n= Effective Gross Income\n- Operating Expenses\n= NET OPERATING INCOME (NOI)',
      difficulty: 'medium'
    },
    {
      front: 'What is NOT included in operating expenses?',
      back: '• Mortgage payments (debt service)\n• Income taxes\n• Depreciation (for tax purposes)\n\nThese are NOT operating expenses.',
      difficulty: 'medium'
    },
    {
      front: 'What is the GRM (Gross Rent Multiplier)?',
      back: 'Value = Gross Rent × GRM\nGRM = Sale Price ÷ Gross Rent\n\nUsed for quick estimates, less accurate than cap rate.',
      difficulty: 'medium'
    },
    {
      front: 'What is capitalization rate (Cap Rate)?',
      back: 'Cap Rate = NOI ÷ Value\n\nRepresents rate of return expected by investors. Higher cap rate = higher risk/return.',
      difficulty: 'medium'
    },
    
    // CMA VS APPRAISAL
    {
      front: 'What is the difference between a CMA and an appraisal?',
      back: 'CMA: Done by REAL ESTATE AGENT for listing/buying\nAPPRAISAL: Done by LICENSED APPRAISER for lending/legal, follows USPAP',
      difficulty: 'medium'
    },
    {
      front: 'What does USPAP stand for?',
      back: 'Uniform Standards of Professional Appraisal Practice - Required standards for ALL appraisers.',
      difficulty: 'medium'
    },
    {
      front: 'Who regulates appraisers in Florida?',
      back: 'Florida Real Estate Appraisal Board (FREAB) - under DBPR',
      difficulty: 'medium'
    },
    
    // DEPRECIATION CALCULATION
    {
      front: 'How is depreciation calculated using Age-Life method?',
      back: '(Effective Age ÷ Economic Life) × Replacement Cost = Depreciation\n\nEffective age may differ from actual age.',
      difficulty: 'hard'
    },
    {
      front: 'What is effective age vs actual age?',
      back: 'ACTUAL AGE: Chronological age in years\nEFFECTIVE AGE: Age based on CONDITION (well-maintained = lower effective age)',
      difficulty: 'medium'
    },
    {
      front: 'What is reconciliation in appraisal?',
      back: 'The process of analyzing and weighing the three approaches to arrive at a FINAL VALUE ESTIMATE. Not an average.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'The principle of substitution states that:',
      options: [
        'Property values always increase over time',
        'A buyer will pay no more than the cost of an equally desirable substitute',
        'The whole is equal to the sum of its parts',
        'Future value determines present worth'
      ],
      correct: 1,
      explanation: 'The principle of substitution states that a buyer will not pay more for a property than the cost of acquiring an equally desirable substitute. It is the foundation for all three approaches to value.'
    },
    {
      question: 'When using the sales comparison approach, if the comparable has a feature the subject lacks:',
      options: [
        'Add to the comparable',
        'Subtract from the comparable',
        'Add to the subject',
        'Make no adjustment'
      ],
      correct: 1,
      explanation: 'If the comparable is BETTER (has something the subject lacks), SUBTRACT from the comparable. Remember CBS: Comparable Better = Subtract.'
    },
    {
      question: 'The cost approach formula is:',
      options: [
        'Land + Depreciation - Cost = Value',
        'Cost - Land + Depreciation = Value',
        'Replacement Cost - Depreciation + Land = Value',
        'Depreciation - Cost + Land = Value'
      ],
      correct: 2,
      explanation: 'The cost approach formula is: Replacement Cost New - Depreciation + Land Value = Property Value.'
    },
    {
      question: 'External (economic) obsolescence is:',
      options: [
        'Always curable',
        'Sometimes curable',
        'Always incurable',
        'Never found in residential properties'
      ],
      correct: 2,
      explanation: 'External obsolescence is ALWAYS INCURABLE because it is caused by factors outside the property that the owner cannot control, such as environmental or economic conditions.'
    },
    {
      question: 'A property has NOI of $50,000 and a cap rate of 8%. The value is:',
      options: [
        '$400,000',
        '$500,000',
        '$625,000',
        '$750,000'
      ],
      correct: 2,
      explanation: 'Using IRV formula: V = I ÷ R = $50,000 ÷ 0.08 = $625,000'
    },
    {
      question: 'Operating expenses do NOT include:',
      options: [
        'Property taxes',
        'Insurance',
        'Mortgage payments',
        'Management fees'
      ],
      correct: 2,
      explanation: 'Operating expenses do NOT include mortgage payments (debt service), income taxes, or depreciation for tax purposes. Property taxes, insurance, and management fees ARE operating expenses.'
    },
    {
      question: 'A property sold for $180,000 and rents for $1,500/month. The GRM is:',
      options: [
        '8.33',
        '12',
        '100',
        '120'
      ],
      correct: 3,
      explanation: 'GRM = Sale Price ÷ Monthly Rent = $180,000 ÷ $1,500 = 120'
    },
    {
      question: 'Which approach is given the most weight for a residential property?',
      options: [
        'Cost approach',
        'Income approach',
        'Sales comparison approach',
        'All are weighted equally'
      ],
      correct: 2,
      explanation: 'For residential property, the sales comparison approach is given the most weight because comparable sales are readily available and buyers make decisions based on market comparisons.'
    },
    {
      question: 'Highest and best use must be:',
      options: [
        'The current use of the property',
        'Legally permissible, physically possible, financially feasible, and maximally productive',
        'Whatever the owner wants',
        'The most expensive possible use'
      ],
      correct: 1,
      explanation: 'Highest and best use must meet four tests: legally permissible, physically possible, financially feasible, and maximally productive.'
    },
    {
      question: 'A building costs $500,000 to replace, is 10 years old with a 50-year economic life, and sits on land worth $100,000. Using age-life method, the value is:',
      options: [
        '$400,000',
        '$500,000',
        '$600,000',
        '$700,000'
      ],
      correct: 1,
      explanation: 'Depreciation = (10/50) × $500,000 = $100,000. Value = $500,000 - $100,000 + $100,000 (land) = $500,000'
    },
    {
      question: 'Reconciliation in appraisal is:',
      options: [
        'Averaging the three approaches',
        'Selecting the highest value',
        'Professional judgment to determine final value',
        'Mathematical calculation of value'
      ],
      correct: 2,
      explanation: 'Reconciliation is NOT averaging - it is the appraiser\'s professional judgment in weighing the reliability of each approach based on the property type and data quality.'
    },
    {
      question: 'A Comparative Market Analysis (CMA) is:',
      options: [
        'An appraisal by another name',
        'Only done by certified appraisers',
        'An agent\'s opinion of value, NOT an appraisal',
        'Required for all listings'
      ],
      correct: 2,
      explanation: 'A CMA is a real estate agent\'s opinion of value for listing or buying decisions. It is NOT an appraisal and should never be called one.'
    },
    {
      question: 'USPAP stands for:',
      options: [
        'Unified Standards for Property Appraisal Procedures',
        'Uniform Standards of Professional Appraisal Practice',
        'United States Professional Appraisal Protocol',
        'Universal Standards for Property Assessment Practice'
      ],
      correct: 1,
      explanation: 'USPAP stands for Uniform Standards of Professional Appraisal Practice, which are the required standards for all appraisers.'
    },
    {
      question: 'The difference between reproduction cost and replacement cost is:',
      options: [
        'There is no difference',
        'Reproduction is an exact replica; replacement is modern equivalent',
        'Replacement is more expensive',
        'Reproduction uses modern materials'
      ],
      correct: 1,
      explanation: 'Reproduction cost creates an exact replica using the same materials and methods. Replacement cost creates a building with similar utility using modern materials and methods.'
    },
    {
      question: 'If a comparable property is INFERIOR to the subject:',
      options: [
        'Subtract from the comparable',
        'Add to the comparable',
        'Subtract from the subject',
        'Make no adjustment'
      ],
      correct: 1,
      explanation: 'If the comparable is inferior (worse), ADD to the comparable to bring it up to the subject\'s level. The opposite of CBS: if comp is worse, add.'
    }
  ],

  caseStudies: [
    {
      id: 'ch14-case1',
      title: 'The Three Approaches',
      scenario: 'An appraiser is valuing a 10-year-old rental duplex. The sales comparison approach indicates $320,000. The cost approach (replacement cost $400,000, depreciation $100,000, land $80,000) indicates $380,000. The income approach (NOI $24,000, cap rate 8%) indicates $300,000.',
      question: 'Which approach should receive the most weight and why? What is the likely reconciled value?',
      answer: 'For an income-producing property like a rental duplex, the INCOME APPROACH should receive the most weight because investors purchase such properties based on expected income returns. The sales comparison approach would receive secondary weight if good comparable sales of duplexes exist. The cost approach would receive the least weight for a 10-year-old building with known depreciation estimation challenges. The reconciled value would likely be close to $300,000-$310,000, weighted heavily toward the income approach, but potentially adjusted slightly upward if comparables strongly support higher values.',
      examRelevance: 'Tests understanding of when each approach applies and that income approach is best for income-producing properties. Remember: reconciliation is judgment, not averaging.'
    },
    {
      id: 'ch14-case2',
      title: 'The Adjustment Problem',
      scenario: 'An appraiser is using the sales comparison approach. The subject property has 3 bedrooms and a pool. Comparable A sold for $250,000, has 4 bedrooms and no pool. Market data shows bedrooms are worth $10,000 each and pools are worth $25,000.',
      question: 'What adjustments should be made to Comparable A, and what is the adjusted value?',
      answer: 'Always adjust the COMPARABLE, not the subject. Comparable A has 4 bedrooms (subject has 3) - comparable is BETTER, so SUBTRACT $10,000. Comparable A has no pool (subject has pool) - comparable is WORSE, so ADD $25,000. Calculation: $250,000 - $10,000 + $25,000 = $265,000 adjusted value for Comparable A. This indicates the subject property should be worth approximately $265,000 based on this comparable.',
      examRelevance: 'Tests the CBS rule (Comparable Better Subtract) and proper adjustment calculation. Key: always adjust the comparable, never the subject.'
    }
  ],

  summary: `Chapter 14 covers real estate appraisal concepts and methods (6% of exam).

**Value Concepts**:
- Market value = most probable price in open market
- Value ≠ Price ≠ Cost
- Requires informed, willing parties with no pressure

**Key Principles**:
- SUBSTITUTION = most important (basis for all approaches)
- Highest and Best Use = legally permissible, physically possible, financially feasible, maximally productive
- Contribution ≠ Cost
- Progression/Regression

**Three Approaches**:

| Approach | Formula | Best For |
|----------|---------|----------|
| Sales Comparison | Adjust comparables | Residential |
| Cost | Cost - Depreciation + Land | New/unique |
| Income | NOI ÷ Cap Rate | Investment |

**Sales Comparison**: CBS = Comparable Better Subtract
- Always adjust COMPARABLE, not subject

**Cost Approach**: 
- Replacement Cost - Depreciation + Land = Value
- Age-Life: (Effective Age ÷ Economic Life) × Cost

**Depreciation**:
- Physical (wear), Functional (design), External (location)
- External = ALWAYS INCURABLE

**Income Approach**:
- IRV: I ÷ R = V
- NOI excludes mortgage payments
- GRM = Sale Price ÷ Gross Rent

**Reconciliation**:
- Professional judgment, NOT averaging
- Weight approaches by property type

**CMA vs. Appraisal**:
- CMA = agent, for listing, NOT an appraisal
- Appraisal = licensed appraiser, USPAP required`
};

export default CHAPTER_14;
