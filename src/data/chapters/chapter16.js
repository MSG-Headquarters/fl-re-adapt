/**
 * Chapter 16: Real Estate Investments
 * 
 * Covers 3% of the Florida Real Estate Exam
 * Focus: Investment analysis, taxation, and investment vehicles
 */

export const CHAPTER_16 = {
  id: 16,
  title: 'Real Estate Investments',
  subtitle: 'Investment Analysis and Taxation',
  examPercentage: 3,
  requiredTimeMinutes: 150, // 2.5 hours minimum
  color: '#EAB308', // Yellow
  icon: 'TrendingUp',
  
  objectives: [
    'Understand the advantages and disadvantages of real estate investment',
    'Explain basic investment calculations and returns',
    'Describe tax benefits and implications of real estate ownership',
    'Understand depreciation for tax purposes',
    'Explain 1031 tax-deferred exchanges',
    'Identify various real estate investment vehicles',
    'Calculate basic investment returns'
  ],

  statutes: [
    { code: 'IRC 1031', title: 'Like-Kind Exchanges', summary: 'Tax-deferred exchange requirements' },
    { code: 'IRC 121', title: 'Primary Residence Exclusion', summary: 'Capital gains exclusion for homes' },
    { code: 'IRC 167/168', title: 'Depreciation', summary: 'Cost recovery for investment property' }
  ],

  sections: [
    {
      id: '16.1',
      title: 'Advantages of Real Estate Investment',
      content: `## Why Invest in Real Estate?

Real estate offers unique advantages compared to other investments.

### Cash Flow

**Positive Cash Flow**:
- Income exceeds expenses
- Regular monthly income
- Can cover mortgage and provide profit

**Cash Flow Formula**:
Net Operating Income - Debt Service = Cash Flow

### Appreciation

**Types of Appreciation**:
- **Natural appreciation**: Market increases over time
- **Forced appreciation**: Improvements increase value
- **Inflation hedge**: Property values tend to rise with inflation

### Leverage

**Using borrowed money to increase returns**:
- Small down payment controls large asset
- Magnifies gains (and losses)
- Example: 20% down controls 100% of property

**Leverage Example**:
- Purchase: $200,000 with $40,000 down
- Property appreciates 10%: Now worth $220,000
- Return on investment: $20,000 ÷ $40,000 = 50%!

### Tax Benefits

**Deductions**:
- Mortgage interest
- Property taxes
- Operating expenses
- Depreciation (non-cash deduction)

**Tax-Deferred Growth**:
- 1031 exchanges defer capital gains
- Installment sales spread gains

### Equity Build-Up

**Each mortgage payment builds equity**:
- Principal portion reduces loan balance
- Tenant payments build owner's wealth
- Forced savings mechanism

### Control

**Investor has control over**:
- Property management decisions
- Improvement timing
- Tenant selection
- Sale timing`,
      keyPoints: [
        'Cash flow = NOI - Debt Service',
        'Leverage magnifies returns (and risks)',
        'Depreciation is non-cash tax deduction',
        'Real estate hedges against inflation',
        'Equity builds with each payment'
      ],
      examTips: [
        'Leverage = OPM (Other People\'s Money)',
        'Positive cash flow = income > expenses',
        'Know tax benefits: interest, taxes, depreciation',
        'Appreciation can be natural or forced'
      ]
    },
    {
      id: '16.2',
      title: 'Disadvantages and Risks',
      content: `## Investment Risks

Real estate investment carries significant risks and disadvantages.

### Illiquidity

**Not easily converted to cash**:
- Sale takes time (months)
- Transaction costs are high
- Cannot sell partial interest easily
- Market conditions affect timing

### Management Intensive

**Requires active involvement**:
- Tenant issues
- Maintenance and repairs
- Rent collection
- Regulatory compliance

Or pay for professional management (reduces returns).

### Market Risk

**Value can decrease**:
- Economic downturns
- Local market changes
- Neighborhood decline
- Oversupply

### Financial Risk

**Leverage works both ways**:
- Magnifies losses
- Negative cash flow possible
- Foreclosure risk if cannot pay

**Negative Leverage**:
- When cost of borrowing exceeds return
- Investor loses money on borrowed funds

### Lack of Diversification

**Large capital requirements**:
- Hard to diversify with limited funds
- Single property = concentrated risk
- Local market dependency

### Regulatory Risk

**Government can affect investment**:
- Zoning changes
- Rent control
- Property tax increases
- Environmental regulations
- Building code changes

### Other Risks

**Physical risks**:
- Natural disasters
- Environmental contamination
- Structural problems

**Legal risks**:
- Tenant lawsuits
- Title issues
- Contract disputes`,
      keyPoints: [
        'Illiquidity = cannot quickly convert to cash',
        'Negative leverage = borrowing cost > return',
        'Management requires time or money',
        'Market risk = values can decrease',
        'Lack of diversification with single property'
      ],
      examTips: [
        'Illiquidity is major disadvantage',
        'Leverage magnifies losses too',
        'Know negative vs. positive leverage',
        'Real estate requires active management'
      ]
    },
    {
      id: '16.3',
      title: 'Investment Calculations',
      content: `## Measuring Investment Returns

Investors use various metrics to evaluate real estate investments.

### Cash-on-Cash Return

**Measures return on actual cash invested**

**Formula**:
Cash-on-Cash Return = Annual Cash Flow ÷ Cash Invested

**Example**:
- Cash invested: $50,000
- Annual cash flow: $6,000
- Cash-on-cash: $6,000 ÷ $50,000 = 12%

### Capitalization Rate (Cap Rate)

**Measures property return regardless of financing**

**Formula**:
Cap Rate = NOI ÷ Property Value

**Example**:
- NOI: $40,000
- Value: $500,000
- Cap rate: $40,000 ÷ $500,000 = 8%

**Cap Rate Uses**:
- Compare similar properties
- Quick value estimate
- Higher cap = higher risk (generally)

### Equity Dividend Rate

**Same as cash-on-cash return**:
Annual Cash Flow ÷ Equity = Equity Dividend Rate

### Gross Rent Multiplier (GRM)

**Quick valuation metric**

**Formula**:
GRM = Sale Price ÷ Gross Monthly Rent

Or: Value = Gross Rent × GRM

### Debt Service Coverage Ratio (DSCR)

**Measures ability to pay mortgage**

**Formula**:
DSCR = NOI ÷ Annual Debt Service

**Example**:
- NOI: $60,000
- Annual mortgage: $48,000
- DSCR: $60,000 ÷ $48,000 = 1.25

**Interpretation**:
- DSCR > 1.0: Can cover payments
- DSCR < 1.0: Cannot cover payments
- Lenders typically want 1.2+ minimum

### Return on Investment (ROI)

**Total return including all benefits**

ROI = (Total Benefits - Total Costs) ÷ Total Costs`,
      keyPoints: [
        'Cash-on-cash = Cash Flow ÷ Cash Invested',
        'Cap Rate = NOI ÷ Value',
        'DSCR = NOI ÷ Debt Service (want >1.0)',
        'GRM = Price ÷ Gross Rent',
        'Higher cap rate generally = higher risk'
      ],
      examTips: [
        'Know all formulas and when to use each',
        'DSCR >1.0 means can cover payments',
        'Cap rate ignores financing',
        'Cash-on-cash considers actual cash invested'
      ]
    },
    {
      id: '16.4',
      title: 'Depreciation for Tax Purposes',
      content: `## Tax Depreciation (Cost Recovery)

Depreciation allows investors to deduct a portion of property cost each year.

### What Is Depreciation?

**IRS allows deduction for wear and tear**:
- Non-cash expense
- Reduces taxable income
- "Paper loss" can offset other income

### What Can Be Depreciated?

**Can Depreciate**:
- Buildings and improvements
- Investment/rental property only

**Cannot Depreciate**:
- Land (never depreciates for tax)
- Personal residence
- Inventory (for dealers)

### Depreciation Methods

**Straight-Line Depreciation**:
- Equal amount each year
- Required for real estate
- Most common method

### Recovery Periods

**Residential Rental Property**: 27.5 years
**Commercial Property**: 39 years

### Calculating Depreciation

**Formula**:
Annual Depreciation = Building Value ÷ Recovery Period

**Example (Residential)**:
- Purchase price: $300,000
- Land value: $60,000
- Building value: $240,000
- Annual depreciation: $240,000 ÷ 27.5 = **$8,727**

### Tax Impact

**Example**:
- NOI: $30,000
- Depreciation: $8,727
- Taxable income: $21,273
- Tax savings at 24% rate: $2,094

### Depreciation Recapture

**When property sold**:
- Must "recapture" depreciation taken
- Taxed at 25% rate (Section 1250)
- Reduces cost basis

### Cost Basis

**Adjusted Basis = Original Cost - Depreciation Taken + Improvements**

Used to calculate capital gain at sale.`,
      keyPoints: [
        'Residential rental: 27.5 years',
        'Commercial: 39 years',
        'Land is NEVER depreciated',
        'Straight-line depreciation required',
        'Depreciation recaptured at sale (25% rate)'
      ],
      examTips: [
        'Memorize: 27.5 residential, 39 commercial',
        'Land cannot be depreciated - EVER',
        'Depreciation reduces basis',
        'Recapture taxed at 25%'
      ]
    },
    {
      id: '16.5',
      title: 'Capital Gains Taxation',
      content: `## Taxation of Real Estate Profits

Understanding how profits are taxed is essential for investment analysis.

### Types of Gains

**Short-Term Capital Gain**:
- Property held 1 year or less
- Taxed as ordinary income
- Higher rates

**Long-Term Capital Gain**:
- Property held more than 1 year
- Preferential tax rates (0%, 15%, or 20%)
- Lower rates encourage investment

### Calculating Capital Gain

**Formula**:
Capital Gain = Sale Price - Adjusted Basis - Selling Costs

**Adjusted Basis**:
Original Cost + Improvements - Depreciation Taken

**Example**:
- Original cost: $200,000
- Improvements: $30,000
- Depreciation taken: $50,000
- Adjusted basis: $200,000 + $30,000 - $50,000 = $180,000
- Sale price: $280,000
- Selling costs: $20,000
- Capital gain: $280,000 - $180,000 - $20,000 = $80,000

### Primary Residence Exclusion (IRC 121)

**Exclude gain on sale of home**:
- Single: Up to $250,000 excluded
- Married filing jointly: Up to $500,000 excluded

**Requirements**:
- Owned property 2 of last 5 years
- Used as primary residence 2 of last 5 years
- Can use every 2 years

### Net Investment Income Tax (NIIT)

**Additional 3.8% tax**:
- On investment income
- For high earners (over $200,000/$250,000)
- Includes rental income and capital gains

### Installment Sales

**Spread gain over multiple years**:
- Receive payments over time
- Pay tax as payments received
- Can reduce tax bracket impact`,
      keyPoints: [
        'Long-term = held >1 year (lower tax rates)',
        'Short-term = held ≤1 year (ordinary income)',
        'Primary residence exclusion: $250K single, $500K married',
        'Must own AND live in home 2 of last 5 years',
        'Adjusted basis = Cost + Improvements - Depreciation'
      ],
      examTips: [
        'Long-term = MORE than 1 year',
        '$250K/$500K exclusion for primary residence',
        '2 of 5 years for residence exclusion',
        'Know how to calculate adjusted basis'
      ]
    },
    {
      id: '16.6',
      title: '1031 Tax-Deferred Exchanges',
      content: `## Like-Kind Exchanges (IRC 1031)

Section 1031 allows deferring capital gains tax when exchanging investment properties.

### Basic Requirements

**Must be LIKE-KIND property**:
- Real estate for real estate
- Investment or business use only
- NOT personal residence

**What Qualifies**:
- Rental for rental
- Commercial for land
- Apartment for office building

**What Does NOT Qualify**:
- Primary residence
- Property held for sale (dealer)
- Foreign property (must exchange domestic for domestic)

### Key Timelines

**45-Day Identification Period**:
- Must identify replacement property in writing
- Within 45 days of selling relinquished property
- Up to 3 properties (or any number if within 200% of value)

**180-Day Exchange Period**:
- Must close on replacement property
- Within 180 days of selling relinquished property
- No extensions (even for holidays)

### Boot

**"Boot" is taxable**:
- Cash received
- Mortgage relief not replaced
- Non-like-kind property received

**To fully defer**:
- Price of new must equal or exceed old
- All equity must go into new property
- Cannot receive cash

### Qualified Intermediary

**Required for delayed exchange**:
- Third party holds funds
- Cannot be related party
- Facilitates the exchange
- Investor never touches money

### Types of 1031 Exchanges

**Simultaneous Exchange**: Both properties close same day

**Delayed Exchange**: Most common; sell first, buy later (within timelines)

**Reverse Exchange**: Buy first, sell later (complex, expensive)

**Improvement Exchange**: Use funds to improve replacement property`,
      keyPoints: [
        '45 days to identify replacement property',
        '180 days to close on replacement',
        'Like-kind = real estate for real estate',
        'Boot = taxable (cash or mortgage relief)',
        'Qualified intermediary holds funds'
      ],
      examTips: [
        'Memorize: 45 days identify, 180 days close',
        'Only investment/business property (not residence)',
        'Boot is taxable',
        'Must use qualified intermediary'
      ]
    },
    {
      id: '16.7',
      title: 'Investment Vehicles',
      content: `## Ways to Invest in Real Estate

Various structures allow investors to participate in real estate.

### Direct Ownership

**Individual or Joint Ownership**:
- Full control
- Direct tax benefits
- All liability
- Most common for small investors

### Real Estate Investment Trusts (REITs)

**Publicly traded real estate companies**:
- Buy shares like stock
- Professional management
- Liquidity (can sell easily)
- Diversification

**REIT Requirements**:
- 75% of assets in real estate
- 75% of income from real estate
- Distribute 90% of taxable income
- At least 100 shareholders

**Types of REITs**:
- **Equity REITs**: Own properties
- **Mortgage REITs**: Own loans/mortgages
- **Hybrid REITs**: Own both

### Limited Partnerships

**General Partner (GP)**:
- Manages the investment
- Makes decisions
- Has unlimited liability
- Receives management fees

**Limited Partners (LPs)**:
- Passive investors
- Limited liability (investment at risk only)
- No management control
- Share in profits/losses

### Limited Liability Companies (LLCs)

**Combines benefits**:
- Limited liability for all members
- Pass-through taxation
- Flexible management
- Popular for real estate

### Tenancy in Common (TIC)

**Co-ownership for investment**:
- Each owns undivided interest
- Can be different percentages
- Used in 1031 exchanges
- Separate tax treatment

### Delaware Statutory Trusts (DSTs)

**Passive 1031 exchange vehicle**:
- Fractional ownership
- Professional management
- Qualifies for 1031 exchange
- No active management required`,
      keyPoints: [
        'REITs must distribute 90% of income',
        'Limited partners have limited liability, no control',
        'General partner has unlimited liability',
        'LLCs offer liability protection + pass-through taxes',
        'DSTs allow passive 1031 exchanges'
      ],
      examTips: [
        'REIT = 90% distribution requirement',
        'LP = limited liability, GP = unlimited',
        'LLCs popular for real estate investment',
        'Know difference between equity and mortgage REITs'
      ]
    },
    {
      id: '16.8',
      title: 'Investment Analysis',
      content: `## Analyzing Investment Property

Investors evaluate properties using various criteria.

### Due Diligence

**Before purchasing, investigate**:
- Physical condition
- Financial records (rent rolls, expenses)
- Leases and tenant quality
- Market conditions
- Title and legal issues
- Environmental concerns

### Pro Forma Analysis

**Projected income and expenses**:

| Item | Amount |
|------|--------|
| Potential Gross Income | $120,000 |
| Less: Vacancy (5%) | -$6,000 |
| Effective Gross Income | $114,000 |
| Less: Operating Expenses | -$45,000 |
| Net Operating Income | $69,000 |
| Less: Debt Service | -$48,000 |
| Cash Flow | $21,000 |

### Operating Expense Ratio

**Formula**:
OER = Operating Expenses ÷ Effective Gross Income

**Example**:
$45,000 ÷ $114,000 = 39.5%

### Break-Even Ratio

**When does property break even?**

**Formula**:
Break-Even = (Operating Expenses + Debt Service) ÷ Gross Income

**Example**:
($45,000 + $48,000) ÷ $120,000 = 77.5%

Property breaks even at 77.5% occupancy.

### Investment Criteria

**Investors typically look for**:
- Positive cash flow
- Cap rate meeting target return
- DSCR above 1.2
- Below-market rents (upside potential)
- Value-add opportunities
- Good location and market

### Exit Strategy

**Plan for eventual sale**:
- Hold period (typically 5-10 years)
- Target sale price
- 1031 exchange possibility
- Refinance and hold option`,
      keyPoints: [
        'Pro forma = projected income/expense analysis',
        'Due diligence investigates all aspects before purchase',
        'OER = Operating Expenses ÷ EGI',
        'Break-even shows minimum occupancy needed',
        'Exit strategy plans for eventual disposition'
      ],
      examTips: [
        'Know pro forma structure',
        'OER measures expense efficiency',
        'Break-even ratio = minimum occupancy needed',
        'Due diligence is essential before purchase'
      ]
    }
  ],

  flashcards: [
    // DEPRECIATION
    {
      front: 'What is the depreciation period for RESIDENTIAL rental property?',
      back: '27.5 YEARS',
      difficulty: 'easy'
    },
    {
      front: 'What is the depreciation period for COMMERCIAL property?',
      back: '39 YEARS',
      difficulty: 'easy'
    },
    {
      front: 'Can LAND be depreciated for tax purposes?',
      back: 'NO - Land can NEVER be depreciated. Land is permanent.',
      difficulty: 'easy'
    },
    {
      front: 'At what rate is depreciation RECAPTURED when sold?',
      back: '25% (Section 1250 recapture) - Depreciation taken is "recaptured" and taxed at 25%.',
      difficulty: 'hard'
    },
    
    // INVESTMENT FORMULAS
    {
      front: 'What is the formula for CASH-ON-CASH return?',
      back: 'Cash-on-Cash = Annual Cash Flow ÷ Cash Invested\n\nMeasures return on actual cash invested.',
      difficulty: 'medium'
    },
    {
      front: 'What is the formula for CAP RATE?',
      back: 'Cap Rate = NOI ÷ Property Value\n\nHigher cap rate = higher return/risk',
      difficulty: 'easy'
    },
    {
      front: 'What is the formula for DSCR (Debt Service Coverage Ratio)?',
      back: 'DSCR = NOI ÷ Annual Debt Service\n\nWant >1.0 (income exceeds debt payments)',
      difficulty: 'medium'
    },
    {
      front: 'What is NOI?',
      back: 'Net Operating Income = Effective Gross Income - Operating Expenses\n\nDoes NOT include debt service or taxes.',
      difficulty: 'medium'
    },
    
    // 1031 EXCHANGE
    {
      front: 'How long to IDENTIFY replacement property in 1031 exchange?',
      back: '45 DAYS from sale of relinquished property',
      difficulty: 'easy'
    },
    {
      front: 'How long to CLOSE on replacement property in 1031 exchange?',
      back: '180 DAYS from sale of relinquished property',
      difficulty: 'easy'
    },
    {
      front: 'What is "BOOT" in a 1031 exchange?',
      back: 'TAXABLE portion: Cash received, debt relief not replaced, or non-like-kind property. Boot is taxable.',
      difficulty: 'medium'
    },
    {
      front: 'What does "like-kind" mean in 1031 exchange?',
      back: 'Real property for real property. Does NOT have to be same type (can exchange office for land).',
      difficulty: 'medium'
    },
    
    // CAPITAL GAINS
    {
      front: 'What is the PRIMARY RESIDENCE capital gains exclusion?',
      back: '$250,000 single\n$500,000 married filing jointly',
      difficulty: 'easy'
    },
    {
      front: 'Requirements for primary residence exclusion?',
      back: 'Owned AND used as primary residence for 2 of last 5 years.',
      difficulty: 'medium'
    },
    
    // LEVERAGE
    {
      front: 'What is POSITIVE leverage?',
      back: 'When return on investment EXCEEDS cost of borrowing. Investor profits from borrowed funds.',
      difficulty: 'medium'
    },
    {
      front: 'What is NEGATIVE leverage?',
      back: 'When cost of borrowing EXCEEDS return. Investor loses money on borrowed funds.',
      difficulty: 'medium'
    },
    
    // INVESTMENT VEHICLES
    {
      front: 'How much must REITs distribute to shareholders?',
      back: '90% minimum of taxable income. This is why REITs pay high dividends.',
      difficulty: 'medium'
    },
    {
      front: 'What is difference between limited and general partners?',
      back: 'LIMITED: Limited liability, NO control/management\nGENERAL: Unlimited liability, manages investment',
      difficulty: 'medium'
    },
    
    // TAX BENEFITS
    {
      front: 'What are the 4 benefits of real estate investment?',
      back: '1. Cash flow (income)\n2. Appreciation\n3. Tax benefits (depreciation)\n4. Equity buildup (loan paydown)',
      difficulty: 'medium'
    },
    {
      front: 'What is passive income?',
      back: 'Income from rental activities or limited partnerships. Has special tax rules - passive losses can only offset passive income.',
      difficulty: 'hard'
    },
    {
      front: 'What is a "tax shelter"?',
      back: 'Investment that reduces taxable income through deductions like depreciation, interest, and expenses.',
      difficulty: 'medium'
    },
    {
      front: 'What is basis?',
      back: 'Your cost for tax purposes. Adjusted basis = Original cost + Improvements - Depreciation taken.',
      difficulty: 'medium'
    }
  ],

  practiceQuestions: [
    {
      question: 'Residential rental property is depreciated over:',
      options: [
        '15 years',
        '27.5 years',
        '39 years',
        '50 years'
      ],
      correct: 1,
      explanation: 'Residential rental property is depreciated over 27.5 years using the straight-line method. Commercial property uses 39 years.'
    },
    {
      question: 'Which of the following can NEVER be depreciated?',
      options: [
        'Apartment buildings',
        'Office buildings',
        'Land',
        'Shopping centers'
      ],
      correct: 2,
      explanation: 'Land can NEVER be depreciated for tax purposes. Only buildings and improvements can be depreciated.'
    },
    {
      question: 'A property has NOI of $50,000 and is worth $625,000. The cap rate is:',
      options: [
        '6%',
        '8%',
        '10%',
        '12.5%'
      ],
      correct: 1,
      explanation: 'Cap Rate = NOI ÷ Value = $50,000 ÷ $625,000 = 8%'
    },
    {
      question: 'An investor puts $40,000 down and receives $4,800 annual cash flow. The cash-on-cash return is:',
      options: [
        '8%',
        '10%',
        '12%',
        '15%'
      ],
      correct: 2,
      explanation: 'Cash-on-Cash = Cash Flow ÷ Cash Invested = $4,800 ÷ $40,000 = 12%'
    },
    {
      question: 'In a 1031 exchange, replacement property must be identified within:',
      options: [
        '30 days',
        '45 days',
        '90 days',
        '180 days'
      ],
      correct: 1,
      explanation: 'In a 1031 exchange, replacement property must be identified in writing within 45 days of selling the relinquished property.'
    },
    {
      question: 'In a 1031 exchange, the replacement property must be acquired within:',
      options: [
        '45 days',
        '90 days',
        '180 days',
        '1 year'
      ],
      correct: 2,
      explanation: 'The replacement property must be acquired (closed) within 180 days of selling the relinquished property.'
    },
    {
      question: 'The primary residence capital gains exclusion for a married couple filing jointly is:',
      options: [
        '$125,000',
        '$250,000',
        '$500,000',
        '$750,000'
      ],
      correct: 2,
      explanation: 'Married couples filing jointly can exclude up to $500,000 of capital gain on the sale of a primary residence. Single filers can exclude $250,000.'
    },
    {
      question: 'To qualify for the primary residence exclusion, the owner must have:',
      options: [
        'Owned the home for 5 years',
        'Lived in the home for 5 years',
        'Owned AND lived in the home for 2 of the last 5 years',
        'Never used the 1031 exchange'
      ],
      correct: 2,
      explanation: 'To qualify for the exclusion, the taxpayer must have owned AND used the property as a primary residence for at least 2 of the last 5 years.'
    },
    {
      question: 'REITs must distribute what percentage of taxable income to shareholders?',
      options: [
        '50%',
        '75%',
        '90%',
        '100%'
      ],
      correct: 2,
      explanation: 'REITs must distribute at least 90% of their taxable income to shareholders to maintain their REIT status.'
    },
    {
      question: 'A DSCR of 1.25 means:',
      options: [
        'The property cannot cover its debt payments',
        'NOI is 25% more than debt service',
        'The property is negatively leveraged',
        'Operating expenses exceed income'
      ],
      correct: 1,
      explanation: 'A DSCR of 1.25 means NOI is 25% higher than debt service - the property generates 25% more income than needed to cover mortgage payments.'
    },
    {
      question: 'In a limited partnership, the general partner has:',
      options: [
        'Limited liability only',
        'Unlimited liability and management control',
        'No management responsibilities',
        'Passive investor status'
      ],
      correct: 1,
      explanation: 'The general partner has unlimited liability and is responsible for managing the partnership. Limited partners have limited liability but no management control.'
    },
    {
      question: 'Negative leverage occurs when:',
      options: [
        'Property value increases',
        'The cost of borrowing exceeds the investment return',
        'The property has positive cash flow',
        'The investor pays cash'
      ],
      correct: 1,
      explanation: 'Negative leverage occurs when the cost of borrowing (interest rate) exceeds the return on the investment, causing the investor to lose money on borrowed funds.'
    },
    {
      question: '"Boot" in a 1031 exchange refers to:',
      options: [
        'The replacement property',
        'The qualified intermediary',
        'Taxable cash or other non-like-kind property received',
        'The identification period'
      ],
      correct: 2,
      explanation: 'Boot is any taxable portion of a 1031 exchange, including cash received, mortgage relief not replaced, or non-like-kind property received.'
    },
    {
      question: 'An equity REIT primarily:',
      options: [
        'Owns mortgages and loans',
        'Owns and operates properties',
        'Only invests in land',
        'Provides property management services'
      ],
      correct: 1,
      explanation: 'An equity REIT owns and operates income-producing real estate. A mortgage REIT invests in mortgages and loans.'
    },
    {
      question: 'Depreciation recapture is taxed at:',
      options: [
        'Ordinary income rates',
        '15%',
        '25%',
        '0%'
      ],
      correct: 2,
      explanation: 'Depreciation recapture on real estate (Section 1250) is taxed at a maximum rate of 25%, regardless of the taxpayer\'s ordinary income tax bracket.'
    }
  ],

  caseStudies: [
    {
      id: 'ch16-case1',
      title: 'The 1031 Exchange Deadline',
      scenario: 'Investor Ivan sells his rental property on March 1 for $500,000 (adjusted basis $300,000). He wants to do a 1031 exchange. He finds a replacement property he likes on April 20.',
      question: 'What are Ivan\'s deadlines, and what must he do to complete the exchange?',
      answer: 'Ivan has TWO critical deadlines: (1) 45-Day Identification: March 1 + 45 days = April 15. He must identify replacement property in writing by April 15. Since he found the property on April 20, he MISSED the identification deadline and cannot complete a valid 1031 exchange with this property! (2) 180-Day Closing: March 1 + 180 days = August 28. He would have needed to close by August 28. Ivan must use a qualified intermediary to hold the sale proceeds - he cannot touch the money. Because Ivan missed the 45-day deadline, he cannot defer the $200,000 gain ($500,000 - $300,000) and will owe capital gains tax on the sale.',
      examRelevance: 'Tests knowledge of 1031 exchange timelines (45 days identify, 180 days close). Missing the 45-day deadline is fatal to the exchange. Both deadlines are strict.'
    },
    {
      id: 'ch16-case2',
      title: 'The Investment Return Analysis',
      scenario: 'An investor is considering a rental property: Purchase price $400,000, down payment $100,000, loan $300,000. Annual NOI is $36,000. Annual debt service (mortgage payments) is $24,000.',
      question: 'Calculate the cap rate, cash flow, cash-on-cash return, and DSCR.',
      answer: 'CAP RATE: NOI ÷ Value = $36,000 ÷ $400,000 = 9%. CASH FLOW: NOI - Debt Service = $36,000 - $24,000 = $12,000. CASH-ON-CASH RETURN: Cash Flow ÷ Cash Invested = $12,000 ÷ $100,000 = 12%. DSCR: NOI ÷ Debt Service = $36,000 ÷ $24,000 = 1.5. Analysis: The property has a solid 9% cap rate, positive cash flow of $12,000/year, strong 12% cash-on-cash return, and excellent debt coverage at 1.5 (well above the 1.2 lenders typically require). This appears to be a sound investment.',
      examRelevance: 'Tests ability to calculate key investment metrics: cap rate, cash flow, cash-on-cash return, and DSCR. Know all four formulas.'
    }
  ],

  summary: `Chapter 16 covers real estate investment concepts (3% of exam).

**Investment Advantages**:
- Cash flow (NOI - Debt Service)
- Appreciation (natural and forced)
- Leverage (OPM magnifies returns)
- Tax benefits (depreciation, interest, taxes)
- Equity build-up

**Investment Disadvantages**:
- Illiquidity (cannot quickly sell)
- Management intensive
- Market risk
- Negative leverage (borrowing cost > return)

**Key Formulas**:
| Metric | Formula |
|--------|---------|
| Cap Rate | NOI ÷ Value |
| Cash-on-Cash | Cash Flow ÷ Cash Invested |
| DSCR | NOI ÷ Debt Service |
| GRM | Price ÷ Gross Rent |

**Depreciation**:
- Residential: 27.5 years
- Commercial: 39 years
- Land: NEVER depreciates
- Recaptured at 25% on sale

**Capital Gains**:
- Long-term: held >1 year (lower rates)
- Primary residence exclusion: $250K single, $500K married
- Must own AND live in home 2 of 5 years

**1031 Exchange**:
- 45 days to IDENTIFY replacement
- 180 days to CLOSE
- Like-kind (real estate for real estate)
- Boot is taxable
- Qualified intermediary required

**Investment Vehicles**:
- REITs (must distribute 90%)
- Limited partnerships (GP = unlimited liability)
- LLCs (limited liability + pass-through)
- DSTs (passive 1031 option)`
};

export default CHAPTER_16;
