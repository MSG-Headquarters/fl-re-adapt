/**
 * Chapter 13: Mortgage Markets & Sources
 * 
 * Covers 4% of the Florida Real Estate Exam
 * Focus: Primary and secondary mortgage markets, lending sources
 */

export const CHAPTER_13 = {
  id: 13,
  title: 'Mortgage Markets & Sources',
  subtitle: 'Primary and Secondary Markets',
  examPercentage: 4,
  requiredTimeMinutes: 150, // 2.5 hours minimum
  color: '#0EA5E9', // Sky blue
  icon: 'Building2',
  
  objectives: [
    'Understand the difference between primary and secondary mortgage markets',
    'Identify the major participants in the secondary market',
    'Explain the role of Fannie Mae, Freddie Mac, and Ginnie Mae',
    'Describe the various sources of mortgage financing',
    'Understand mortgage-backed securities',
    'Explain how the secondary market affects interest rates and availability'
  ],

  statutes: [
    { code: '12 USC 1716', title: 'Fannie Mae Charter', summary: 'Federal National Mortgage Association' },
    { code: '12 USC 1451', title: 'Freddie Mac Charter', summary: 'Federal Home Loan Mortgage Corporation' },
    { code: '12 USC 1721', title: 'Ginnie Mae Charter', summary: 'Government National Mortgage Association' }
  ],

  sections: [
    {
      id: '13.1',
      title: 'Primary Mortgage Market',
      content: `## Where Loans Are Made

The **primary mortgage market** is where loans are originated - where borrowers obtain mortgages directly from lenders.

### What Happens in the Primary Market

- Borrowers apply for loans
- Lenders evaluate and underwrite
- Loans are originated (made)
- Borrowers and lenders interact directly

### Primary Market Lenders

**Commercial Banks**
- Largest source of mortgage loans
- Offer wide variety of loan products
- Federally regulated
- Also provide other banking services

**Savings Associations (Thrifts)**
- Historically focused on mortgages
- Include savings and loans (S&Ls)
- Less common today than historically

**Credit Unions**
- Member-owned cooperatives
- Often offer competitive rates
- Membership requirements apply

**Mortgage Bankers**
- Originate loans to sell
- Service loans for investors
- Don't use depositor funds
- Work in both primary and secondary markets

**Mortgage Brokers**
- Match borrowers with lenders
- Don't actually make loans
- Earn fees for origination
- Shop multiple lenders for best terms

### Mortgage Banker vs. Mortgage Broker

| Feature | Mortgage Banker | Mortgage Broker |
|---------|-----------------|-----------------|
| Makes loans | Yes | No |
| Uses own funds | Yes (or warehouse line) | No |
| Services loans | Often | No |
| Works for | Themselves/investors | Borrowers |
| Sells loans | Yes | N/A |`,
      keyPoints: [
        'Primary market = where loans are originated',
        'Commercial banks are largest mortgage source',
        'Mortgage bankers make and sell loans',
        'Mortgage brokers match borrowers with lenders (don\'t make loans)',
        'Primary market lenders interact directly with borrowers'
      ],
      examTips: [
        'Primary = origination; Secondary = buying/selling',
        'Mortgage banker MAKES loans; Broker does NOT',
        'Commercial banks = largest source today',
        'Mortgage brokers earn fees, don\'t fund loans'
      ]
    },
    {
      id: '13.2',
      title: 'Secondary Mortgage Market',
      content: `## Where Loans Are Bought and Sold

The **secondary mortgage market** is where existing mortgages are bought and sold after origination.

### Purpose of the Secondary Market

**Liquidity**: Allows lenders to sell loans and get cash to make more loans

**Risk Distribution**: Spreads mortgage risk among many investors

**Standardization**: Creates uniform underwriting standards

**Capital Flow**: Moves money from capital-rich to capital-poor areas

### How It Works

1. Lender originates loan in primary market
2. Lender sells loan to secondary market investor
3. Lender receives cash to make more loans
4. Investor owns the loan and receives payments
5. Original lender may still service the loan

### Benefits

**For Lenders**:
- Free up capital for more lending
- Reduce risk on balance sheet
- Earn servicing fees

**For Borrowers**:
- More loan availability
- More competitive rates
- Standardized loan products

**For Investors**:
- Investment in real estate-backed securities
- Regular income stream
- Diversification

### Conforming vs. Non-Conforming Loans

**Conforming Loans**:
- Meet Fannie Mae/Freddie Mac standards
- Below loan limits (varies by area)
- Standard underwriting
- Easier to sell in secondary market

**Non-Conforming Loans**:
- Don't meet agency standards
- Include jumbo loans (over limits)
- May have different underwriting
- Harder to sell, higher rates

**2024 Conforming Loan Limits** (example):
- Standard: $766,550
- High-cost areas: Up to $1,149,825`,
      keyPoints: [
        'Secondary market = buying/selling existing loans',
        'Provides liquidity for lenders to make more loans',
        'Conforming loans meet Fannie/Freddie standards',
        'Non-conforming (jumbo) loans exceed limits',
        'Secondary market creates uniform standards'
      ],
      examTips: [
        'Secondary market provides LIQUIDITY',
        'Conforming = meets standards, easier to sell',
        'Jumbo = non-conforming, over loan limits',
        'Lender may still SERVICE sold loan'
      ]
    },
    {
      id: '13.3',
      title: 'Fannie Mae',
      content: `## Federal National Mortgage Association (FNMA)

**Fannie Mae** is the largest participant in the secondary mortgage market.

### History

- Created in **1938** as government agency
- Became **private** corporation in 1968
- Placed in conservatorship in **2008** (financial crisis)
- Currently government-sponsored enterprise (GSE)

### What Fannie Mae Does

**Purchases Mortgages**:
- Buys conforming conventional loans
- Buys FHA and VA loans
- From approved lenders

**Sets Standards**:
- Establishes underwriting guidelines
- Creates uniform loan documents
- Determines conforming loan limits

**Issues Securities**:
- Creates mortgage-backed securities (MBS)
- Sells to investors worldwide
- Guarantees timely payment

### Fannie Mae Guidelines

Loans must meet:
- Loan amount limits
- Credit score requirements
- Debt-to-income ratios
- Down payment requirements
- Property standards

### Key Points

- **Does NOT** make loans directly to borrowers
- **Does NOT** insure or guarantee government loans
- **DOES** purchase loans from lenders
- **DOES** guarantee its own MBS

### Fannie Mae Stock

- Publicly traded (but in conservatorship)
- Ticker: FNMA
- Government controls as conservator`,
      keyPoints: [
        'Fannie Mae = Federal National Mortgage Association',
        'Created 1938, privatized 1968, conservatorship 2008',
        'Largest secondary market participant',
        'Purchases conventional, FHA, and VA loans',
        'Does NOT make loans directly to borrowers'
      ],
      examTips: [
        'Fannie Mae = FNMA, created 1938',
        'Buys loans, doesn\'t make them',
        'Sets conforming loan standards',
        'Now a GSE in conservatorship'
      ]
    },
    {
      id: '13.4',
      title: 'Freddie Mac',
      content: `## Federal Home Loan Mortgage Corporation (FHLMC)

**Freddie Mac** is the second-largest secondary market participant.

### History

- Created in **1970** by Congress
- Originally part of Federal Home Loan Bank System
- Became private corporation in **1989**
- Placed in conservatorship in **2008**

### What Freddie Mac Does

**Purchases Mortgages**:
- Buys conforming conventional loans
- Primarily from smaller lenders and thrifts
- Similar to Fannie Mae

**Issues Securities**:
- Participation certificates (PCs)
- Mortgage-backed securities
- Guarantees timely payment

**Sets Standards**:
- Works with Fannie Mae on uniform standards
- Uses similar underwriting guidelines
- Same conforming loan limits

### Freddie Mac vs. Fannie Mae

**Similarities**:
- Both are GSEs
- Both in conservatorship
- Both buy conforming loans
- Both issue MBS
- Same loan limits

**Historical Differences**:
- Fannie Mae: Originally bought from larger banks
- Freddie Mac: Originally bought from S&Ls/thrifts
- Today: Both buy from all approved lenders

### Key Points

- **Does NOT** make loans directly
- **Does NOT** guarantee government loans
- **DOES** purchase loans from lenders
- **DOES** guarantee its own securities`,
      keyPoints: [
        'Freddie Mac = Federal Home Loan Mortgage Corporation',
        'Created 1970, privatized 1989, conservatorship 2008',
        'Second-largest secondary market participant',
        'Originally focused on S&L/thrift loans',
        'Now functionally similar to Fannie Mae'
      ],
      examTips: [
        'Freddie Mac = FHLMC, created 1970',
        'Both Fannie and Freddie in conservatorship since 2008',
        'Neither makes loans directly',
        'Both set conforming loan standards'
      ]
    },
    {
      id: '13.5',
      title: 'Ginnie Mae',
      content: `## Government National Mortgage Association (GNMA)

**Ginnie Mae** is a government corporation that guarantees mortgage-backed securities.

### Key Difference from Fannie/Freddie

- Ginnie Mae is a **government agency** (not GSE)
- Part of HUD (Department of Housing and Urban Development)
- Backed by **full faith and credit** of US government
- Only agency with explicit government guarantee

### What Ginnie Mae Does

**Guarantees Securities**:
- Guarantees timely payment on MBS
- Securities backed by FHA, VA, USDA loans
- Full government backing

**Does NOT**:
- Buy or sell mortgages
- Issue its own securities
- Make loans

### How Ginnie Mae Works

1. Lender makes government-insured loan (FHA/VA)
2. Lender pools loans together
3. Lender creates MBS from pool
4. Ginnie Mae guarantees the MBS
5. Investors buy guaranteed securities

### Types of Loans in Ginnie Mae Pools

- FHA loans
- VA loans
- USDA/Rural Development loans
- Public and Indian Housing loans

### Ginnie Mae Securities

**GNMA Pass-Through Securities**:
- Investors receive principal and interest payments
- Payments "pass through" from borrowers to investors
- Government guarantees timely payment

**Considered Safest MBS**:
- Full government backing
- Lower yield than Fannie/Freddie MBS
- Popular with conservative investors`,
      keyPoints: [
        'Ginnie Mae = Government National Mortgage Association',
        'ONLY agency with full US government backing',
        'Part of HUD (government agency, not GSE)',
        'Guarantees MBS backed by FHA/VA/USDA loans',
        'Does NOT buy or sell mortgages'
      ],
      examTips: [
        'Ginnie Mae = ONLY one with full government guarantee',
        'Part of HUD, not a private corporation',
        'Guarantees securities, doesn\'t buy loans',
        'Pools contain FHA, VA, USDA loans'
      ]
    },
    {
      id: '13.6',
      title: 'Mortgage-Backed Securities',
      content: `## Understanding MBS

**Mortgage-backed securities (MBS)** are investments backed by pools of mortgages.

### How MBS Work

1. Lender originates many mortgages
2. Mortgages pooled together
3. Securities created from pool
4. Securities sold to investors
5. Borrower payments flow to investors

### Types of MBS

**Pass-Through Securities**
- Most common type
- Payments pass directly to investors
- Pro-rata share of principal and interest
- Issued by Ginnie Mae, Fannie Mae, Freddie Mac

**Collateralized Mortgage Obligations (CMOs)**
- More complex structure
- Different "tranches" with different risk/return
- Principal allocated differently to each tranche
- Created from pools of MBS

### MBS Guarantees

**Ginnie Mae MBS**:
- Full US government guarantee
- Lowest risk, lowest yield

**Fannie Mae/Freddie Mac MBS**:
- Agency guarantee (GSE)
- Implicit government backing (now explicit in conservatorship)
- Slightly higher risk/yield than Ginnie Mae

**Private-Label MBS**:
- No government guarantee
- Higher risk, higher yield
- Backed by non-conforming loans

### Prepayment Risk

**Key Risk for MBS Investors**:
- Borrowers may prepay (refinance)
- Returns principal early
- Investor must reinvest at potentially lower rates
- More prepayment when rates fall

### Why MBS Matter

- Provide capital for mortgage lending
- Allow risk distribution
- Create liquid investment market
- Affect mortgage interest rates`,
      keyPoints: [
        'MBS = securities backed by pools of mortgages',
        'Pass-through = payments go directly to investors',
        'CMOs = complex structures with tranches',
        'Prepayment risk = borrowers refinance, return principal early',
        'Ginnie Mae MBS = only with full government guarantee'
      ],
      examTips: [
        'MBS provides liquidity to mortgage market',
        'Prepayment risk = early return of principal',
        'Ginnie Mae = safest MBS (government backed)',
        'Private-label = no guarantee, highest risk'
      ]
    },
    {
      id: '13.7',
      title: 'Federal Home Loan Banks',
      content: `## The FHLB System

The **Federal Home Loan Bank System** provides liquidity to member financial institutions.

### History

- Created in **1932** during Great Depression
- Modeled after Federal Reserve System
- 11 regional Federal Home Loan Banks
- Headquartered in various US cities

### What FHLBs Do

**Provide Advances (Loans)**:
- Lend money to member institutions
- Short and long-term advances
- Secured by mortgages and other collateral

**Liquidity Source**:
- Members can borrow when needed
- Helps maintain mortgage lending capacity
- Smooths out funding fluctuations

### Members

- Commercial banks
- Savings associations
- Credit unions
- Insurance companies
- Community development financial institutions

### How It Works

1. Member institution joins FHLB
2. Purchases FHLB stock
3. Can borrow from FHLB as needed
4. Pledges mortgages as collateral
5. Uses funds to make more loans

### Key Points

- **Does NOT** make loans to individuals
- **Does NOT** buy mortgages
- **DOES** lend to member institutions
- Funded by selling bonds in capital markets

### FHLB vs. Secondary Market

| Feature | FHLB | Fannie/Freddie |
|---------|------|----------------|
| Loans to | Member institutions | N/A |
| Buys mortgages | No | Yes |
| Provides | Advances (loans) | Purchases |
| Members buy | FHLB stock | Loan sales |`,
      keyPoints: [
        'FHLB System created 1932, 11 regional banks',
        'Provides advances (loans) to member institutions',
        'Does NOT make loans to individuals',
        'Does NOT buy mortgages like Fannie/Freddie',
        'Members include banks, credit unions, S&Ls'
      ],
      examTips: [
        'FHLB lends to INSTITUTIONS, not individuals',
        '11 regional Federal Home Loan Banks',
        'Created 1932 (Depression era)',
        'Different function than Fannie/Freddie'
      ]
    },
    {
      id: '13.8',
      title: 'Other Financing Sources',
      content: `## Alternative Lending Sources

Beyond traditional lenders, other sources provide real estate financing.

### Insurance Companies

**Life Insurance Companies**:
- Large commercial mortgage lenders
- Long-term, fixed-rate loans
- Focus on quality properties
- Conservative underwriting

**Characteristics**:
- Large loan amounts
- Lower LTV requirements
- Longer loan terms
- Institutional borrowers

### Pension Funds

- Invest in mortgages for steady returns
- Usually commercial properties
- Often through investment managers
- Long-term investment horizon

### Real Estate Investment Trusts (REITs)

**Mortgage REITs**:
- Invest in mortgages and MBS
- Provide capital to mortgage market
- Publicly traded (usually)
- Pass income to shareholders

### Private Lenders

**Hard Money Lenders**:
- Short-term, high-interest loans
- Focus on property value (not borrower credit)
- Quick funding
- For investors, flippers, bridge financing

**Characteristics**:
- Higher interest rates (8-15%+)
- Short terms (1-3 years)
- Lower LTV (60-70%)
- Faster approval

### Seller Financing

- Seller acts as lender
- Purchase money mortgage
- Terms negotiated between parties
- May be more flexible than institutional

### Crowdfunding

- Online platforms pool investor funds
- For commercial or residential projects
- Relatively new financing source
- Various structures (debt, equity)`,
      keyPoints: [
        'Insurance companies = major commercial lenders',
        'Pension funds invest in mortgages for returns',
        'Mortgage REITs invest in loans and MBS',
        'Hard money = short-term, high-interest, asset-based',
        'Seller financing = seller acts as lender'
      ],
      examTips: [
        'Life insurance companies = commercial focus',
        'Hard money = quick, expensive, asset-based',
        'Mortgage REITs provide capital to market',
        'Multiple sources beyond traditional banks'
      ]
    },
    {
      id: '13.9',
      title: 'Interest Rate Factors',
      content: `## What Affects Mortgage Rates

Mortgage interest rates are influenced by many factors.

### Federal Reserve

**Fed Funds Rate**:
- Rate banks charge each other overnight
- Influenced by Federal Reserve
- Affects short-term rates directly
- Indirect effect on mortgage rates

**Federal Reserve Actions**:
- Raising rates = tighter money, higher mortgage rates
- Lowering rates = easier money, lower mortgage rates
- Buying MBS = lower mortgage rates (quantitative easing)

### Economic Factors

**Inflation**:
- Higher inflation = higher rates
- Lenders need real return above inflation
- Fed raises rates to fight inflation

**Economic Growth**:
- Strong economy = higher demand for credit
- Higher demand can push rates up
- Recession often means lower rates

**Employment**:
- Strong employment = more loan demand
- Affects both supply and demand for credit

### Bond Market

**10-Year Treasury**:
- Mortgage rates closely follow
- Key benchmark for long-term rates
- Safe investment comparison

**Spread**:
- Difference between mortgage rate and Treasury
- Reflects mortgage-specific risks
- Typically 1.5-2% above 10-year Treasury

### Supply and Demand

**Loan Demand**:
- High demand = upward pressure on rates
- Low demand = downward pressure

**Secondary Market**:
- Active market = more liquidity = competitive rates
- Investor appetite affects rates

### Risk Factors

**Credit Risk**: Borrower's creditworthiness
**Prepayment Risk**: Likelihood of early payoff
**Default Risk**: Probability of non-payment

Higher risks = higher rates required`,
      keyPoints: [
        'Fed funds rate affects short-term rates',
        'Mortgage rates follow 10-year Treasury',
        'Inflation leads to higher rates',
        'Secondary market provides liquidity, affects rates',
        'Risk factors (credit, prepayment, default) affect rate'
      ],
      examTips: [
        'Mortgage rates follow 10-year Treasury',
        'Fed raising rates = higher mortgage rates',
        'Inflation up = rates up',
        'Active secondary market = competitive rates'
      ]
    }
  ],

  flashcards: [
    // PRIMARY VS SECONDARY MARKET
    {
      front: 'What is the PRIMARY mortgage market?',
      back: 'Where loans ORIGINATE - borrowers obtain mortgages directly from banks, credit unions, mortgage companies.',
      difficulty: 'easy'
    },
    {
      front: 'What is the SECONDARY mortgage market?',
      back: 'Where existing mortgages are BOUGHT and SOLD after origination. Provides LIQUIDITY to lenders so they can make more loans.',
      difficulty: 'easy'
    },
    {
      front: 'Why is the secondary market important?',
      back: 'Provides LIQUIDITY - lenders sell loans to get cash to make new loans. Without it, lenders would run out of money.',
      difficulty: 'medium'
    },
    
    // MORTGAGE BANKER VS BROKER
    {
      front: 'What is the difference between a mortgage banker and a mortgage broker?',
      back: 'MORTGAGE BANKER: MAKES loans (uses own funds), may sell them\nMORTGAGE BROKER: MATCHES borrowers with lenders, does NOT make loans',
      difficulty: 'medium'
    },
    
    // THE BIG THREE
    {
      front: 'What is Fannie Mae?',
      back: 'Federal National Mortgage Association (FNMA)\n• LARGEST secondary market buyer\n• GSE (government-sponsored enterprise)\n• Buys conventional and government loans\n• Created 1938',
      difficulty: 'easy'
    },
    {
      front: 'What is Freddie Mac?',
      back: 'Federal Home Loan Mortgage Corporation (FHLMC)\n• Second-largest secondary market buyer\n• GSE\n• Created 1970 for S&L liquidity',
      difficulty: 'easy'
    },
    {
      front: 'What is Ginnie Mae?',
      back: 'Government National Mortgage Association (GNMA)\n• ONLY TRUE GOVERNMENT AGENCY\n• Full faith and credit of US government\n• Guarantees MBS backed by FHA/VA loans\n• Part of HUD',
      difficulty: 'medium'
    },
    {
      front: 'Which agency has FULL faith and credit of the US government?',
      back: 'GINNIE MAE (GNMA) - It is a TRUE government agency, not a GSE.\n\nFannie Mae and Freddie Mac are GSEs (government-sponsored enterprises), NOT government agencies.',
      difficulty: 'medium'
    },
    {
      front: 'Are Fannie Mae and Freddie Mac government agencies?',
      back: 'NO - They are GSEs (Government-Sponsored Enterprises). Privately owned but government-chartered. Were put into conservatorship in 2008.',
      difficulty: 'hard'
    },
    {
      front: 'When were Fannie Mae, Ginnie Mae, and Freddie Mac created?',
      back: 'FANNIE MAE: 1938 (oldest)\nGINNIE MAE: 1968 (split from Fannie)\nFREDDIE MAC: 1970',
      difficulty: 'hard'
    },
    
    // LOAN TYPES
    {
      front: 'What is a CONFORMING loan?',
      back: 'Loan that meets Fannie Mae/Freddie Mac standards:\n• Within loan limits\n• Meets underwriting guidelines\n• Easier to sell on secondary market',
      difficulty: 'easy'
    },
    {
      front: 'What is a NON-CONFORMING (jumbo) loan?',
      back: 'Loan that EXCEEDS conforming limits or doesn\'t meet Fannie/Freddie standards. Higher rates, harder to sell.',
      difficulty: 'medium'
    },
    
    // SPECIAL MORTGAGE TYPES
    {
      front: 'What is a reverse mortgage (HECM)?',
      back: 'Home Equity Conversion Mortgage:\n• Borrower must be 62+\n• No monthly payments required\n• Loan repaid when borrower dies, sells, or moves',
      difficulty: 'medium'
    },
    {
      front: 'What is a purchase money mortgage?',
      back: 'SELLER FINANCING - Seller takes back a mortgage from buyer. Seller becomes the lender.',
      difficulty: 'medium'
    },
    {
      front: 'What is a blanket mortgage?',
      back: 'Single mortgage covering MULTIPLE properties. Used by developers. Has partial release clause.',
      difficulty: 'medium'
    },
    {
      front: 'What is a package mortgage?',
      back: 'Mortgage that includes PERSONAL PROPERTY (appliances, furniture) as part of the collateral.',
      difficulty: 'medium'
    },
    
    // SECURITIES & LENDING
    {
      front: 'What is a mortgage-backed security (MBS)?',
      back: 'Investment backed by a POOL of mortgages. Payments from borrowers pass through to investors.',
      difficulty: 'medium'
    },
    {
      front: 'What is prepayment risk?',
      back: 'Risk that borrowers refinance or pay off early, returning principal to investors who must reinvest at lower rates.',
      difficulty: 'hard'
    },
    {
      front: 'What does the Federal Home Loan Bank System do?',
      back: 'Provides ADVANCES (loans) to MEMBER financial institutions. Does NOT make loans to individuals or buy mortgages.',
      difficulty: 'medium'
    },
    
    // RATES
    {
      front: 'What benchmark do mortgage rates most closely follow?',
      back: '10-YEAR TREASURY NOTE rate. Mortgage rates typically 1.5-2% above this benchmark.',
      difficulty: 'medium'
    },
    {
      front: 'What is a hard money lender?',
      back: 'PRIVATE lender offering short-term, HIGH-INTEREST loans based on property value (not credit). Used for quick financing, flips.',
      difficulty: 'medium'
    },
    {
      front: 'What is usury?',
      back: 'Charging interest above the legal maximum rate. Florida has usury laws limiting interest rates.',
      difficulty: 'medium'
    },
    {
      front: 'What is discount rate vs prime rate?',
      back: 'DISCOUNT RATE: Fed charges banks\nPRIME RATE: Banks charge best customers\n\nPrime is typically 3% above Fed funds rate.',
      difficulty: 'hard'
    }
  ],

  practiceQuestions: [
    {
      question: 'The primary mortgage market is where:',
      options: [
        'Existing mortgages are bought and sold',
        'Loans are originated with borrowers',
        'Mortgage-backed securities are traded',
        'Interest rates are set by the government'
      ],
      correct: 1,
      explanation: 'The primary mortgage market is where loans are originated - where borrowers obtain mortgages directly from lenders like banks and credit unions.'
    },
    {
      question: 'The secondary mortgage market provides:',
      options: [
        'Loans directly to borrowers',
        'Insurance for mortgages',
        'Liquidity to primary market lenders',
        'Down payment assistance'
      ],
      correct: 2,
      explanation: 'The secondary mortgage market provides liquidity by buying loans from primary market lenders, allowing them to recover capital and make more loans.'
    },
    {
      question: 'A mortgage broker:',
      options: [
        'Makes loans using their own funds',
        'Matches borrowers with lenders but does not make loans',
        'Buys loans in the secondary market',
        'Insures loans against default'
      ],
      correct: 1,
      explanation: 'A mortgage broker matches borrowers with lenders and earns a fee, but does not actually make loans. A mortgage banker makes loans.'
    },
    {
      question: 'Fannie Mae was created in:',
      options: [
        '1932',
        '1938',
        '1968',
        '1970'
      ],
      correct: 1,
      explanation: 'Fannie Mae (Federal National Mortgage Association) was created in 1938 as a government agency. It became a private corporation in 1968.'
    },
    {
      question: 'Which agency is backed by the full faith and credit of the US government?',
      options: [
        'Fannie Mae',
        'Freddie Mac',
        'Ginnie Mae',
        'Federal Home Loan Bank'
      ],
      correct: 2,
      explanation: 'Ginnie Mae (GNMA) is the ONLY agency backed by the full faith and credit of the US government. It is a government agency within HUD, not a GSE.'
    },
    {
      question: 'Freddie Mac was created in:',
      options: [
        '1932',
        '1938',
        '1968',
        '1970'
      ],
      correct: 3,
      explanation: 'Freddie Mac (Federal Home Loan Mortgage Corporation) was created in 1970 to expand the secondary market and provide competition for Fannie Mae.'
    },
    {
      question: 'Ginnie Mae:',
      options: [
        'Buys conventional loans',
        'Guarantees MBS backed by FHA/VA loans',
        'Makes loans directly to borrowers',
        'Is a private corporation'
      ],
      correct: 1,
      explanation: 'Ginnie Mae guarantees mortgage-backed securities that are backed by government-insured loans (FHA, VA, USDA). It does not buy or make loans.'
    },
    {
      question: 'A conforming loan is one that:',
      options: [
        'Is backed by the government',
        'Meets Fannie Mae/Freddie Mac standards',
        'Has a fixed interest rate',
        'Is made by a conforming lender'
      ],
      correct: 1,
      explanation: 'A conforming loan meets Fannie Mae and Freddie Mac standards, including loan amount limits and underwriting guidelines, making it easier to sell in the secondary market.'
    },
    {
      question: 'Mortgage-backed securities are:',
      options: [
        'Loans made directly to borrowers',
        'Investments backed by pools of mortgages',
        'Government guarantees on loans',
        'Insurance policies for lenders'
      ],
      correct: 1,
      explanation: 'Mortgage-backed securities (MBS) are investments backed by pools of mortgages. Payments from borrowers pass through to investors who own the securities.'
    },
    {
      question: 'Prepayment risk for MBS investors means:',
      options: [
        'Borrowers may default on loans',
        'Interest rates may rise',
        'Borrowers may pay off early, returning principal',
        'The government may not honor guarantees'
      ],
      correct: 2,
      explanation: 'Prepayment risk is the risk that borrowers will refinance or pay off early, returning principal to investors who must then reinvest at potentially lower rates.'
    },
    {
      question: 'The Federal Home Loan Bank System:',
      options: [
        'Makes loans directly to homebuyers',
        'Buys mortgages like Fannie Mae',
        'Provides advances to member financial institutions',
        'Insures mortgages against default'
      ],
      correct: 2,
      explanation: 'The Federal Home Loan Bank System provides advances (loans) to member financial institutions. It does NOT make loans to individuals or buy mortgages.'
    },
    {
      question: 'Mortgage rates most closely follow:',
      options: [
        'The federal funds rate',
        'The prime rate',
        'The 10-year Treasury rate',
        'The discount rate'
      ],
      correct: 2,
      explanation: 'Mortgage rates most closely follow the 10-year Treasury rate. Mortgage rates are typically 1.5-2% above this benchmark.'
    },
    {
      question: 'Hard money lenders typically offer:',
      options: [
        'Low-interest, long-term loans',
        'Short-term, high-interest loans based on property value',
        'Government-insured loans',
        'Conforming loans for first-time buyers'
      ],
      correct: 1,
      explanation: 'Hard money lenders offer short-term, high-interest loans based primarily on property value rather than borrower credit. Used for quick financing needs.'
    },
    {
      question: 'In 2008, Fannie Mae and Freddie Mac were:',
      options: [
        'Merged into one agency',
        'Placed into government conservatorship',
        'Completely privatized',
        'Abolished by Congress'
      ],
      correct: 1,
      explanation: 'During the 2008 financial crisis, both Fannie Mae and Freddie Mac were placed into government conservatorship, where they remain today.'
    },
    {
      question: 'The largest source of mortgage loans today is:',
      options: [
        'Savings and loans',
        'Credit unions',
        'Commercial banks',
        'Insurance companies'
      ],
      correct: 2,
      explanation: 'Commercial banks are the largest source of mortgage loans today, offering a wide variety of loan products and services.'
    }
  ],

  caseStudies: [
    {
      id: 'ch13-case1',
      title: 'The Loan Sale',
      scenario: 'ABC Bank originates a $300,000 conventional mortgage meeting all Fannie Mae guidelines. After closing, ABC Bank sells the loan to Fannie Mae but continues to collect payments from the borrower.',
      question: 'Explain what happened and why ABC Bank still collects payments.',
      answer: 'ABC Bank originated the loan in the PRIMARY market, then sold it in the SECONDARY market to Fannie Mae. This sale provides ABC Bank with immediate capital to make more loans (liquidity). ABC Bank continues to COLLECT payments because it retained the SERVICING rights. As servicer, ABC Bank collects payments from the borrower, manages the escrow account, and forwards payments to Fannie Mae (the owner). ABC Bank earns a servicing fee for this work. The borrower may not even know the loan was sold because their payment process stays the same. This is the typical flow of conforming loans through the primary and secondary markets.',
      examRelevance: 'Tests understanding of primary vs. secondary markets, the role of loan servicing, and why lenders sell loans but may retain servicing.'
    },
    {
      id: 'ch13-case2',
      title: 'The Jumbo Loan',
      scenario: 'A buyer wants to purchase a $1,000,000 home with 20% down, needing an $800,000 loan. The conforming loan limit in the area is $766,550.',
      question: 'What type of loan will the buyer need and what are the implications?',
      answer: 'The buyer needs a JUMBO loan (non-conforming) because $800,000 exceeds the conforming limit of $766,550. Implications: (1) The loan cannot be sold to Fannie Mae or Freddie Mac, limiting the secondary market; (2) Interest rate will likely be 0.25-0.5% higher than conforming rates; (3) May need higher credit score and more reserves; (4) Some lenders don\'t offer jumbo loans; (5) Underwriting may be stricter. Alternative: The buyer could put more down to bring the loan under the conforming limit, or look for a portfolio lender who keeps jumbo loans on their books.',
      examRelevance: 'Tests understanding of conforming vs. non-conforming loans, loan limits, and how the secondary market affects loan availability and pricing.'
    }
  ],

  summary: `Chapter 13 covers the mortgage markets and financing sources (4% of exam).

**Primary Market**:
- Where loans are ORIGINATED
- Lenders: Commercial banks (largest), savings associations, credit unions, mortgage bankers, mortgage brokers
- Mortgage banker MAKES loans; Mortgage broker MATCHES borrowers with lenders

**Secondary Market**:
- Where existing loans are BOUGHT and SOLD
- Provides LIQUIDITY to lenders
- Creates standardization
- Conforming loans meet Fannie/Freddie standards

**The Big Three**:
| Agency | Created | Type | Function |
|--------|---------|------|----------|
| Fannie Mae | 1938 | GSE | Buys loans, issues MBS |
| Freddie Mac | 1970 | GSE | Buys loans, issues MBS |
| Ginnie Mae | 1968 | Government | Guarantees MBS (FHA/VA) |

**Key Differences**:
- Ginnie Mae = ONLY with full government backing
- Ginnie Mae is part of HUD, not a GSE
- Fannie/Freddie buy loans; Ginnie Mae guarantees securities

**Federal Home Loan Banks**:
- Created 1932, 11 regional banks
- Provides ADVANCES to member institutions
- Does NOT make loans to individuals

**MBS**:
- Investments backed by mortgage pools
- Prepayment risk = borrowers pay early
- Ginnie Mae MBS = safest (government backed)

**Interest Rates**:
- Follow 10-year Treasury
- Fed actions affect rates
- Inflation up = rates up`
};

export default CHAPTER_13;
