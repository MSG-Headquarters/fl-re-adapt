// Additional scenario questions, keyed by unit id. Original material.
export const EXTRA_QUESTIONS = {
  pl1: [
    { q: 'A sales associate fails the post-licensing end-of-course exam. When may they take the retest?', o: ['After a 30-day waiting period', 'Immediately, on a different exam, within one year of the original', 'Only after repeating the course', 'Only at the next renewal'], a: 1, e: 'Unlike pre-licensing, there is no 30-day wait. One retest (a different exam) is allowed within one year; fail twice → repeat the course.' },
    { q: 'Who is exempt from the post-licensing requirement?', o: ['Licensees with 5 years of experience in another state', 'Members of The Florida Bar', 'Licensees with a 4-year degree or higher in real estate', 'Licensees who pass the state exam with 90%'], a: 2, e: 'A 4-year (or higher) real estate degree exempts from post-licensing. Florida Bar members are exempt from CE, not post-licensing.' },
    { q: 'A licensee renewed on time at their first renewal but misses the second renewal. The license becomes:', o: ['Null and void', 'Involuntary inactive', 'Revoked', 'Suspended'], a: 1, e: 'Only the first-renewal post-licensing failure voids the license. Later missed renewals make it involuntary inactive.' },
    { q: 'A licensee takes the 3-hour Core Law course in each year of the renewal period. How many specialty hours are then required?', o: ['8', '6', '5', '3'], a: 2, e: 'Core Law each year counts as 6 hours, so specialty drops from 8 to 5 (6 + 3 ethics + 5 = 14).' },
    { q: 'FREC may extend the post-licensing deadline by six months when the licensee:', o: ['Is too busy with closings', 'Has an individual physical hardship and submits a written request', 'Pays a late fee', 'Changes brokers'], a: 1, e: 'The six-month extension is for individual physical hardship, with a written request and documentation.' },
    { q: 'A broker reconciles the sales escrow account. How often is this required?', o: ['Weekly', 'Monthly', 'Quarterly', 'Annually'], a: 1, e: 'Brokers must prepare a signed, dated monthly reconciliation of escrow accounts.' },
    { q: 'A residential buyer cannot get loan approval and the contract terminates. The broker, in good faith doubt, may:', o: ['Keep the deposit as a fee', 'Return the deposit to the buyer without notifying FREC', 'Give the deposit to the seller', 'Hold it for one year'], a: 1, e: 'Under 475.25(1)(d)1 the broker may return the deposit to the buyer in this situation without the FREC notice.' },
    { q: 'A licensee moves to a new home address. DBPR must be notified within:', o: ['5 days', '10 days', '30 days', 'At renewal'], a: 1, e: 'Licensees must notify DBPR of an address change within 10 days.' },
    { q: 'An associate advertises a team called "Sunshine Realty Group" in type larger than the brokerage name. The problem is:', o: ['Teams may not advertise', 'The team name implies a separate brokerage and the brokerage name must be at least as large', 'The name is too long', 'Nothing — teams may use any name'], a: 1, e: 'Team names cannot suggest a separate brokerage, and the brokerage name must be equal or larger in size.' },
    { q: 'Transaction broker confidentiality is best described as:', o: ['Full confidentiality', 'Limited confidentiality', 'No confidentiality', 'Confidentiality only after closing'], a: 1, e: 'Transaction brokers owe limited confidentiality (e.g., won\'t disclose a seller will take less or a buyer will pay more).' },
    { q: 'Brokerage relationship disclosure documents must be kept for:', o: ['2 years', '3 years', '5 years', '7 years'], a: 2, e: 'Brokers keep transaction records and disclosures for 5 years.' },
    { q: 'Which relationship is NOT permitted in Florida?', o: ['Single agent', 'Transaction broker', 'No brokerage relationship', 'Dual agent'], a: 3, e: 'Dual agency is prohibited in Florida.' },
  ],
  pl2: [
    { q: 'An associate makes 50 contacts per week. 1 in 25 contacts becomes an appointment, and 1 in 2 appointments becomes a closing. About how many closings per 50-week year?', o: ['25', '50', '100', '200'], a: 1, e: '2,500 contacts ÷ 25 = 100 appointments ÷ 2 = 50 closings.' },
    { q: 'An associate finds that 20% of clients produce 80% of income. This illustrates:', o: ['Leverage', 'The Pareto principle', 'Farming', 'Absorption'], a: 1, e: 'The Pareto (80/20) principle.' },
    { q: 'The first step in building a business plan is usually to:', o: ['Buy a CRM', 'Set a specific income and production goal', 'Order signs', 'Join more social networks'], a: 1, e: 'Activity plans are built backward from a specific goal.' },
  ],
  pl3: [
    { q: 'An associate knows the roof leaks when it rains hard but the seller says "don\'t mention it." The associate should:', o: ['Stay silent to obey the seller', 'Disclose it — it is a known material latent defect', 'Disclose only if asked', 'Withdraw without explanation'], a: 1, e: 'Known material latent defects must be disclosed; obedience does not extend to illegal instructions.' },
    { q: 'Under the Code of Ethics, disputes between REALTORS® over commissions are resolved by:', o: ['FREC', 'Arbitration', 'DBPR', 'Small claims court only'], a: 1, e: 'Article 17 requires arbitration.' },
    { q: 'Negligent misrepresentation occurs when a licensee:', o: ['Gives an opinion about a view', 'Makes a false statement they should have known was false', 'Refuses to show a property', 'Shares public records'], a: 1, e: 'Negligent misrepresentation = should have known.' },
  ],
  pl4: [
    { q: 'A landlord advertises "Perfect for a single professional — no kids." This is:', o: ['Legal if the owner lives on-site', 'Discriminatory advertising based on familial status', 'Legal in Florida', 'Legal for units under 1,000 sq ft'], a: 1, e: 'Discriminatory ads void exemptions and violate the Act.' },
    { q: 'Which law requires lenders to report loan data by census tract to help detect redlining?', o: ['ECOA', 'HMDA', 'RESPA', 'CRA'], a: 1, e: 'The Home Mortgage Disclosure Act requires reporting of loan data.' },
    { q: 'A real estate office must remove readily achievable barriers for customers with disabilities under:', o: ['ADA Title III', 'RESPA', 'ECOA', 'TILA'], a: 0, e: 'Title III covers public accommodations.' },
  ],
  pl5: [
    { q: 'A FSBO seller\'s number is on the Do Not Call Registry. An associate may:', o: ['Call to solicit the listing', 'Visit in person or mail a letter', 'Call after 9 p.m.', 'Text without consent'], a: 1, e: 'Do-not-call rules restrict calls; mail and in-person contact are other options.' },
    { q: 'A consumer asked about a listing 2 months ago and is on the DNC Registry. May the associate call?', o: ['Yes — within 3 months of an inquiry', 'No', 'Only with broker approval', 'Only by autodialer'], a: 0, e: 'The inquiry-based EBR exception lasts 3 months.' },
    { q: 'An associate sends automated marketing texts. Generally, what is required first?', o: ['Nothing', 'The prospect\'s prior express written consent', 'FREC approval', 'A paper letter'], a: 1, e: 'Automated marketing texts/calls generally require prior express written consent under the TCPA.' },
  ],
  pl6: [
    { q: 'Which CMA category shows what buyers rejected?', o: ['Solds', 'Pendings', 'Actives', 'Expireds'], a: 3, e: 'Expired listings reveal prices the market would not pay.' },
    { q: 'A home listed at $400,000 sells for $388,000. The list-to-sale ratio is:', o: ['95%', '97%', '98%', '103%'], a: 1, e: '$388,000 ÷ $400,000 = 97%.' },
    { q: 'An HOA disclosure summary was not given before the contract. The buyer may cancel:', o: ['Never', 'Within 3 days after receiving the summary or before closing, whichever first', 'Within 15 days', 'Only with seller consent'], a: 1, e: '720.401 gives a 3-day cancellation right in that situation.' },
  ],
  pl7: [
    { q: 'Which is never depreciated?', o: ['The building', 'Land', 'Roof', 'HVAC system'], a: 1, e: 'Land does not wear out and cannot be depreciated.' },
    { q: 'An investor exchanges properties and receives $40,000 cash to balance equity. The $40,000 is:', o: ['Tax-free', 'Boot and taxable', 'Depreciation', 'Basis'], a: 1, e: 'Cash received is boot — taxable to the extent of gain.' },
  ],
  pl8: [
    { q: 'An associate adds a custom clause to a contract explaining the tax effect of a seller credit. This is:', o: ['Good service', 'Unauthorized practice of law', 'Required by TRID', 'A RESPA violation'], a: 1, e: 'Drafting legal clauses and advising on their effect is unauthorized practice of law.' },
    { q: 'Which contingency protects a buyer if the property appraises below the price?', o: ['Inspection', 'Appraisal', 'Title', 'Survey'], a: 1, e: 'The appraisal contingency addresses low valuations.' },
  ],
  pl9: [
    { q: 'A tenant intentionally damages the unit. The landlord may serve:', o: ['A 3-day notice', 'A 7-day non-curable notice', 'A 30-day notice', 'No notice'], a: 1, e: 'Intentional destruction is a non-curable violation — 7-day notice to vacate.' },
    { q: 'Within how many days of receiving a security deposit must the landlord disclose how it is held?', o: ['7', '15', '30', '45'], a: 2, e: 'Within 30 days of receipt.' },
  ],
};
