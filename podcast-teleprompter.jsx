import { useState } from 'react';

export default function PodcastTeleprompter() {
  const [currentSegment, setCurrentSegment] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const segments = [
    {
      id: 'cold-open',
      title: '🎙️ COLD OPEN',
      time: '30 sec',
      color: 'bg-purple-600',
      content: {
        hook: `"I have only written code for one class in college and now I write code everyday. AI just does it for me. And this week, we are gonna talk about how. Plus: the agentic browser wars are officially on—six major players fighting to control how we use the web. And oh yeah, $350 billion evaporated from one company in a single day. Welcome to the AI Business Network."`,
        overview: [
          { num: 1, title: 'The Claude Code Revolution', desc: 'Claude Code for builders, Cowork for everyone else. I use both daily.' },
          { num: 2, title: 'The Agentic Browser Wars', desc: '6 players: Google, OpenAI, Perplexity, Anthropic, Manus, Dia' },
          { num: 3, title: 'The $350 Billion Reckoning', desc: 'Meta soared, Microsoft cratered' },
          { num: 4, title: 'The $100 Billion Bet', desc: "OpenAI's historic funding round" },
          { num: 5, title: 'Quick Hits', desc: 'ServiceNow, California regs, workforce impact' },
        ]
      }
    },
    {
      id: 'segment-1',
      title: 'SEGMENT 1: CLAUDE CODE REVOLUTION',
      time: '8-10 min',
      color: 'bg-blue-600',
      content: {
        intro: 'Anthropic launched two products this month that are changing how work gets done—and they\'re flying under the radar compared to the flashier announcements from Google and OpenAI.',
        story: [
          { label: 'Claude Code', text: 'Agentic coding in terminal. Understands your ENTIRE codebase, executes commands, handles git workflows, writes and runs tests, submits PRs. Works in terminal, VS Code, Cursor, JetBrains. Tag @claude on GitHub issues to have it investigate and propose solutions.' },
          { label: 'Cowork', text: 'Launched Jan 12. "Claude Code for the rest of your work." Built into Claude Desktop. Designate a folder → Claude reads, organizes, modifies files autonomously. Runs in secure VM on Mac. Think: organize Downloads, generate expense spreadsheets from receipts, draft reports from notes, analyze data across docs.' },
          { label: '🔥 Dario Quote', text: '"Some Anthropic engineers have stopped writing code entirely—they just direct Claude Code." — Dario Amodei at Davos' }
        ],
        metaStory: '📌 META-STORY: Anthropic built Cowork in 1.5 weeks using Claude Code. AI is now building AI tools.',
        dataPoints: [
          { stat: '1.5 weeks', context: 'Time to build Cowork using Claude Code' },
          { stat: '$20/mo', context: 'Claude Pro (includes Cowork)' },
          { stat: '$100/mo', context: 'Claude Max (5x limits)' },
          { stat: 'Jan 12', context: 'Cowork launch (Max only)' },
          { stat: 'Jan 16', context: 'Expanded to Pro' },
          { stat: 'Jan 23', context: 'Expanded to Team & Enterprise' },
        ],
        howToUse: {
          claudeCode: {
            title: '🛠️ Claude Code Setup (Technical & Curious Non-Coders)',
            install: 'npm install -g @anthropic-ai/claude-code',
            usage: [
              'Navigate to any codebase in terminal',
              'Type "claude" to start',
              'Ask in natural language: "Explain how auth works" or "Write tests for user service" or "Create PR for issue #47"'
            ],
            powerMoves: [
              'VS Code/Cursor: Install extension, highlight code, ask questions',
              'Tag @claude on GitHub issues → it investigates & submits PRs',
              'Run multiple instances in parallel on different tasks'
            ],
            bestFor: 'Developers, technical founders, anyone who touches code'
          },
          cowork: {
            title: '🛠️ Cowork Setup (For Everyone)',
            access: [
              'Download Claude Desktop (Mac only, Windows coming)',
              'Subscribe to Pro ($20/mo) or Max ($100/mo)',
              'Now available: Pro, Max, Team, Enterprise'
            ],
            usage: [
              'Open Claude Desktop → Click "Cowork" mode',
              'Select a folder you want Claude to work with',
              'Describe what you want in natural language'
            ],
            examplePrompts: [
              '"Organize my Downloads by file type, rename files descriptively, delete anything older than 6 months"',
              '"Look at receipt images, create expense spreadsheet with date, vendor, amount, category"',
              '"Read all meeting notes, create summary with action items organized by person"',
              '"Analyze CSV files, create report on trends"'
            ],
            powerMoves: [
              'Point at messy project folders before client calls',
              'Drop articles/PDFs into folder, ask for synthesis',
              'Batch-process: "Convert all markdown to single formatted Word doc"'
            ],
            bestFor: 'Operations, marketing, sales, anyone with files & documents'
          }
        },
        businessImpact: [
          { audience: 'Founders', point: 'Shift from "AI as chatbot" to "AI as autonomous worker." Paradigm changing from asking questions to delegating tasks.' },
          { audience: 'Executives', point: 'This is agentic AI in practice—not theoretical, shipping today. Evaluate how teams could use for immediate productivity gains.' },
          { audience: 'GTM', points: [
            'Sales: Build custom demos, analyze competitor codebases, automate reporting scripts. Non-technical sellers can direct Claude.',
            'Marketing: Process campaign data, organize assets, generate reports, clean up content libraries',
            'RevOps: Data cleaning, CRM exports, analysis workflows. Point at Downloads full of CSVs.',
            'Content: Draft docs from research, organize source materials, batch-process for publishing'
          ]}
        ],
        discussion: [
          '"What repetitive work are you doing that an AI agent could handle? Make a list this week."',
          '"Anthropic built Cowork in 1.5 weeks using Claude Code. AI building AI tools—how does this change the pace of innovation?"',
          '"Cowork threatens productivity startups. If AI does file management natively, what happens to companies that raised millions for those features?"',
          '"Vibe coding is real—describing what you want instead of writing syntax. Future of all software development? What does this mean for hiring?"'
        ],
        contrarian: [
          '⚠️ Security: Giving AI access to files/codebase is a consideration, especially for enterprises with sensitive data',
          '⚠️ Not magic: Complex codebases still need human judgment. Force multiplier, not replacement.',
          '⚠️ Mac-only: Cowork currently Mac-only. Windows users (majority in enterprise) have to wait.',
          '⚠️ Overstated: "Engineers don\'t write code" handles routine tasks, not novel architecture or complex debugging',
          '⚠️ Competition coming: GitHub Copilot Workspace, Cursor, Devin all racing toward agentic coding'
        ],
        takeaway: [
          '1. Try Claude Code — even non-devs: install, point at any project folder, ask what\'s there',
          '2. Try Cowork — pick your messiest folder (Downloads, Desktop). Give it 30 min.',
          '3. Audit repetitive work: List tasks involving files, docs, data, code. Star the ones well-defined enough for AI.',
          '4. For managers: Identify a "Claude Code champion" — spend a week going deep, share learnings'
        ],
        metaTakeaway: '💡 META-TAKEAWAY: The gap between "AI-assisted" and "AI-native" work is widening. People who learn to direct AI agents effectively will have a massive productivity advantage. Start building that muscle now.',
        transition: `"So that's Anthropic's play—AI agents that work on your desktop and in your codebase. But they're not the only ones. 2025 was the year every major player launched an AI browser agent. Let's break down the full landscape: who launched when, what each one does, and which one you should actually be using."`
      }
    },
    {
      id: 'segment-2',
      title: 'SEGMENT 2: AGENTIC BROWSER WARS',
      time: '10-12 min',
      color: 'bg-green-600',
      content: {
        intro: '2025 was the year AI learned to browse the web. Every major AI company—and several startups—launched browser agents that can autonomously navigate, fill forms, compare products, complete multi-step tasks. This week, Google entered the race with Auto Browse—the first mainstream deployment to BILLIONS of users. But they\'re late to a party that\'s been building all year.',
        timeline: [
          { product: 'Manus', company: 'Butterfly Effect (Monica)', date: 'Mar 6, 2025', status: 'Being acquired by Meta ($2-3B)' },
          { product: 'Dia', company: 'The Browser Company', date: 'Jun 11 / Oct 9, 2025', status: 'Acquired by Atlassian ($610M)' },
          { product: 'Perplexity Comet', company: 'Perplexity', date: 'Jul 9 / Oct 3, 2025', status: 'Mac, Win, Android' },
          { product: 'Claude for Chrome', company: 'Anthropic', date: 'Aug 26, 2025', status: 'Max plan, Chrome ext' },
          { product: 'ChatGPT Atlas', company: 'OpenAI', date: 'Oct 21, 2025', status: 'Mac, Win coming Q1' },
          { product: 'Auto Browse', company: 'Google', date: 'Jan 28, 2026', status: 'AI Pro/Ultra, U.S. only' },
        ],
        detailedDescriptions: [
          {
            name: 'Manus',
            tagline: 'The Autonomous Generalist',
            desc: 'Not a browser per se—AI agent that researches, navigates, fills forms, generates content, deploys code, runs tasks asynchronously WITHOUT human intervention. Built on Claude + fine-tuned Qwen. 86.5% GAIA benchmark (beat OpenAI DeepResearch).',
            status: 'Being acquired by Meta for $2-3B, Chinese regulatory review pending.'
          },
          {
            name: 'Dia',
            tagline: 'The AI-Native Browser',
            desc: 'From Arc creators. URL bar = AI chatbot. Summarize files, search across all tabs, write drafts from tab contents. "Skills" feature: user-created shortcuts for summarization, fact-checking, planning.',
            status: 'Atlassian acquired Browser Company for $610M. Arc features coming to Dia.'
          },
          {
            name: 'Comet',
            tagline: 'The Search-First Browser',
            desc: 'Perplexity AI search pre-installed and default. Comet Assistant in sidecar sees pages, answers questions. Max ($200/mo) gets "background assistant" for multi-task delegation: book flights, send emails, find deals.',
            status: 'Now FREE globally. Mac, Windows, Android.'
          },
          {
            name: 'Claude for Chrome',
            tagline: 'The Extension Approach',
            desc: 'Adds Claude to Chrome sidecar with context of everything in browser. Can take actions WITH permission. Security-focused: reduced prompt injection from 23.6% → 11.2%.',
            status: 'Max plan only ($100-$200/mo).'
          },
          {
            name: 'Atlas',
            tagline: 'Full Browser Replacement',
            desc: 'ChatGPT built into browser core. "Agent Mode" for multi-step tasks: add recipe ingredients to Instacart, compare e-commerce listings, execute workflows. "Browser memories" remember context (30-day retention).',
            status: 'Free features for all, Agent Mode for Plus/Pro ($20+). Mac now, Windows Q1 2026.'
          },
          {
            name: 'Auto Browse',
            tagline: 'The Mass-Market Play',
            desc: 'Coming to BILLIONS of Chrome users. Gemini 3-powered. Handles: vacation planning, appointments, form filling, quotes, expense reports, subscription management. Creating Universal Commerce Protocol (UCP) with Shopify, Etsy, Wayfair, Target.',
            status: 'AI Pro ($20/mo) or Ultra ($250/mo). U.S. only initially.'
          },
        ],
        comparisonTable: [
          { feature: 'Pricing', manus: '$39-200/mo', dia: 'Free', comet: 'Free / $200 Max', claude: '$100-200/mo', atlas: 'Free / $20+', autobrowse: '$20-250/mo' },
          { feature: 'Platform', manus: 'Web-based', dia: 'Mac', comet: 'Mac/Win/Android', claude: 'Chrome ext', atlas: 'Mac (Win soon)', autobrowse: 'Chrome' },
          { feature: 'Autonomous Tasks', manus: '✅ Full', dia: '⚡ Limited', comet: '✅ Max only', claude: '⚡ With approval', atlas: '✅ Agent Mode', autobrowse: '✅ Full' },
          { feature: 'Purchase Actions', manus: '✅', dia: '❌', comet: '✅ Max', claude: '⚡ Approval', atlas: '✅ Consent', autobrowse: '✅ Consent' },
          { feature: 'Enterprise Ready', manus: '⚡ TBD', dia: '❌', comet: '⚡', claude: '✅ Security', atlas: '⚡', autobrowse: '⚡' },
          { feature: 'Best For', manus: 'Power users', dia: 'Arc fans', comet: 'Search users', claude: 'Anthropic fans', atlas: 'Casual users', autobrowse: 'Mass market' },
        ],
        businessImpact: [
          { audience: 'Founders', points: [
            'Browser = AI battleground. Products need to work for HUMAN and AI visitors.',
            'UCP standard from Google could become MANDATORY. Get ahead now.',
            'Startup opportunity: security/governance layers for agentic browsing. Prompt injection = real threat enterprises will pay to mitigate.'
          ]},
          { audience: 'Executives', points: [
            'Employees WILL use these within months—sanctioned or not. Create policy NOW.',
            'Audit how AI agents experience your web properties (marketing + product). New customer journey audit.',
            'Data implications: Atlas stores "browser memories" on company servers. What does that mean for enterprise?'
          ]},
          { audience: 'GTM', points: [
            'Sales: Agents research prospects, summarize footprint, fill forms at scale. Test which works best.',
            'Marketing: SEO needs AI intermediaries. When agents browse for users, landing pages may be BYPASSED.',
            'Ops: Procurement transformed. Agents comparing vendors, filling RFPs, gathering quotes.'
          ]}
        ],
        discussion: [
          '"Who wins? Winner-take-all or fragmentation by use case?"',
          '"Google has distribution (billions of users). OpenAI has mindshare. Anthropic has enterprise trust. Perplexity has search. Who has the strongest hand?"',
          '"UCP standard — Google setting rules for AI commerce with Shopify, Etsy, Wayfair, Target. New web standard or fragmentation?"',
          '"Prompt injection is the ELEPHANT in the room. Malicious sites can trick agents into harmful actions. How do you protect business AND employees?"'
        ],
        contrarian: [
          '⚠️ Consumer behavior changes SLOWLY. Most won\'t switch browsers or pay $20+/mo. Mass adoption may take longer.',
          '⚠️ Impressive demos, struggle with edge cases. Real-world reliability still questionable for high-stakes tasks.',
          '⚠️ Privacy nightmare for enterprises. AI that sees everything you browse AND takes actions.',
          '⚠️ Feature-parity race to bottom. If everyone has AI browsing, it\'s table stakes.',
          '⚠️ Real value might be DATA these companies collect, not features. Training next-gen models.'
        ],
        takeaway: [
          '1. Pick ONE and go deep. By ecosystem: Claude → Claude Chrome/Cowork | Heavy search → Comet | Casual → Atlas | Max autonomy → Manus',
          '2. Audit web presence for AI agents. Have someone use Auto Browse/Atlas on your site. Where does it struggle/succeed?',
          '3. Create company policy. Which are approved, what data can they access, what actions can they take?',
          '4. Watch the UCP standard. If e-commerce or transactional web presence, Google\'s Universal Commerce Protocol could become mandatory.'
        ],
        transition: `"So the AI browser wars are officially on. But here's the bigger question: can any of this spending actually make money? Yesterday, the market gave us a $350 billion answer to that question."`
      }
    },
    {
      id: 'segment-3',
      title: 'SEGMENT 3: $350B RECKONING',
      time: '8-10 min',
      color: 'bg-red-600',
      content: {
        intro: 'On January 29th, 2026, the market drew a LINE IN THE SAND on AI spending.',
        story: [
          'MICROSOFT: Lost $357B in market cap—WORST single-day drop since March 2020—after Azure growth slowed to 39% despite RECORD capex of $37.5B in Q2 alone.',
          'META: Surged 10% after showing AI investments DIRECTLY boosting ad revenue—24% Q4 revenue growth.',
          'THE DIVIDE: Investors rewarded Meta\'s $135B 2026 AI spend because it\'s tied to PROVEN revenue. Microsoft got punished because investors fear massive AI bets aren\'t translating fast enough.'
        ],
        keyContext: [
          '45% of Microsoft\'s commercial backlog ($280B) is tied to OpenAI — now seen as RISK, not asset',
          'Nadella: "We can\'t build data centers fast enough because demand is so high" — bullish or excuse?',
          'Meta\'s AI = ads (proven model). Microsoft = picks and shovels (longer timeline, different risk).'
        ],
        dataPoints: [
          { stat: '$357B', context: 'Microsoft market cap loss in ONE DAY' },
          { stat: '$37.5B', context: 'Microsoft Q2 capex (up 66% YoY)' },
          { stat: '45%', context: 'Microsoft backlog tied to OpenAI ($280B at risk)' },
          { stat: '24%', context: 'Meta Q4 revenue growth (AI-powered ads)' },
          { stat: '$135B', context: 'Meta\'s 2026 capex plans (87% increase)' },
          { stat: '39%', context: 'Azure growth (down from 40%)' },
        ],
        businessImpact: [
          { audience: 'Founders', points: [
            '"AI spending = investor enthusiasm" era is OVER. Pitch decks need ROI projections, not just AI capabilities.',
            'Concentration risk is real. Microsoft\'s OpenAI dependence (45% backlog) SPOOKED investors. Build optionality.'
          ]},
          { audience: 'Executives', points: [
            'Boards NOW demand concrete metrics connecting AI to revenue/cost savings. Vague "efficiency gains" no longer satisfy.',
            'Proactively present AI ROI audit BEFORE next board meeting.'
          ]},
          { audience: 'GTM', points: [
            'Customers will demand PROOF of ROI before committing.',
            'Meta\'s success: AI-powered targeting drives measurable ad revenue. This is the template.'
          ]}
        ],
        discussion: [
          '"Is this the END of the AI hype cycle, or just a correction? Are we permanently in \'show me the money\' phase?"',
          '"If you\'re a CMO or CRO listening—how do you measure your AI investments? What\'s in your AI ROI dashboard?"',
          '"Microsoft can\'t build data centers fast enough. Does first-mover advantage matter if you can\'t scale to meet demand?"'
        ],
        contrarian: [
          '📊 Microsoft fundamentals strong: Beat earnings ($5.16 EPS on $81.27B revenue). Backlog DOUBLED to $625B. Could be overreaction.',
          '📊 Meta\'s AI = ads (proven). Microsoft = picks and shovels (longer timeline). Different risk profiles.',
          '📊 Nadella: Can\'t build fast enough because demand so high — actually BULLISH signal?'
        ],
        actionable: [
          'FOUNDERS: Document AI ROI now. For every AI feature, track: (1) dev cost, (2) customer adoption, (3) revenue attribution or cost savings.',
          'EXECUTIVES: Conduct AI ROI audit this quarter. Present proactively to board with clear metrics, timelines, contingency plans.',
          'GTM: Update sales deck with at least TWO customer case studies showing measurable AI ROI. If you don\'t have them, GET THEM.'
        ],
        takeaway: '🎯 UNIVERSAL: The market has spoken—AI accountability is here. MEASURE EVERYTHING.',
        transition: `"So the market is demanding AI accountability. But what does it mean when one company is raising $100 billion despite losing money? Let's talk about OpenAI's historic funding round and what it signals for your vendor strategy."`
      }
    },
    {
      id: 'segment-4',
      title: 'SEGMENT 4: $100B BET',
      time: '8-10 min',
      color: 'bg-orange-600',
      content: {
        intro: 'OpenAI is in advanced discussions to raise up to $100 billion in what would be ONE OF THE LARGEST FUNDING ROUNDS IN TECHNOLOGY HISTORY.',
        story: [
          'AMAZON: Negotiating up to $50B — DESPITE already backing competitor Anthropic with billions. Hedging all bets.',
          'SOFTBANK: Adding $30B on top of existing 11% stake.',
          'NVIDIA + MICROSOFT: Discussing combined $40B.',
          'VALUATION: Would value OpenAI at ~$830B — more valuable than MOST Fortune 500 companies — while still RUNNING AT A LOSS on $20B revenue.'
        ],
        keyContext: [
          'OpenAI grew from $2B → $20B revenue in 12 months. Market moving FAST.',
          'Deal includes OpenAI using Amazon\'s AI chips — full-stack infrastructure economics.',
          'Stargate project: $500B for AI data center infrastructure. New space race?',
          'OpenAI targeting 2026 H2 public listing at $1 TRILLION valuation.'
        ],
        dataPoints: [
          { stat: '$100B', context: 'Total funding round' },
          { stat: '$830B', context: 'Potential valuation' },
          { stat: '$50B', context: 'Amazon\'s potential investment' },
          { stat: '$30B', context: 'SoftBank adding (owns 11%)' },
          { stat: '$20B', context: 'OpenAI revenue (up from $2B)' },
          { stat: '$500B', context: 'Stargate data center project' },
        ],
        businessImpact: [
          { audience: 'Founders', points: [
            '$830B on $20B revenue = 40x sales while UNPROFITABLE. Premium valuations + correction risk.',
            'Amazon hedging—backing BOTH Anthropic AND OpenAI. Your cue: avoid single-vendor dependencies.'
          ]},
          { audience: 'Executives', points: [
            'Capital concentration signals AI infrastructure = strategic imperative at highest levels. Your competitors investing heavily. Are you?',
            'Deal includes OpenAI using Amazon\'s AI chips—full-stack economics now.'
          ]},
          { audience: 'GTM', points: [
            'Vendor diversification NOT optional. Even tech giants avoid single-vendor lock-in. Review contracts for flexibility.',
            'OpenAI $2B→$20B in 12 months. If selling AI solutions, market moving FAST.'
          ]}
        ],
        discussion: [
          '"Amazon backing BOTH OpenAI AND Anthropic. Smart hedging or no one knows who wins? Should every enterprise have multi-model strategy?"',
          '"$830B while unprofitable. What does that say about infrastructure vs applications? Where should founders be building?"',
          '"Stargate = $500B for data centers. New space race or building for demand that may not materialize?"'
        ],
        contrarian: [
          '⚠️ $20B revenue sounds impressive but BURNING cash. Path to profitability unclear given compute costs.',
          '⚠️ Microsoft 45% backlog tied to OpenAI now seen as RISK. What if OpenAI momentum slows?',
          '⚠️ Google (Gemini), Anthropic (Claude), open-source catching up FAST. Moat may be narrower than valuation suggests.',
          '⚠️ Yann LeCun at Davos: Entire LLM approach is DEAD END for true AGI. What if paradigm shifts?'
        ],
        actionable: [
          'FOUNDERS: Don\'t bet company on single AI provider. Build abstractions to swap models. Landscape shifting too fast.',
          'EXECUTIVES: Review AI vendor contracts for flexibility. Ensure fallback if primary faces capacity, pricing, or competitive issues.',
          'GTM: Prospects nervous about vendor lock-in. Sales pitch should include multi-model strategy or model-agnostic architecture.'
        ],
        takeaway: '🎯 UNIVERSAL: Even the biggest players are hedging their bets. You should too.',
        transition: `"Alright, let's rapid-fire through a few more stories you need on your radar. Where enterprise AI is actually working, the regulations that just kicked in, and who's most at risk from AI displacement."`
      }
    },
    {
      id: 'segment-5',
      title: 'SEGMENT 5: QUICK HITS',
      time: '5-7 min',
      color: 'bg-yellow-600',
      content: {
        format: '⏱️ FORMAT: 60-90 seconds per item, rapid-fire',
        hits: [
          {
            title: '⚡ ServiceNow — Enterprise AI That WORKS',
            story: 'Q4 beat ALL metrics. 21% subscription growth to $3.47B. Now Assist (AI product) revenue MORE THAN DOUBLED YoY. Selected Claude as default Build Agent. $5B buyback announced.',
            whyItMatters: [
              'Proves enterprise AI playbook WORKS when you solve SPECIFIC workflow problems (IT service, HR, security).',
              'Vertical focus beats horizontal platforms.',
              'They\'re PROFITABLE — hitting "Rule of 55+" (growth rate + profit margin).'
            ],
            hotTake: '🔥 Study ServiceNow. Value accrues to WORKFLOW-SPECIFIC AI, not chatbots. The anti-Microsoft success story this week.'
          },
          {
            title: '⚡ California AI Transparency Act — NOW IN EFFECT',
            story: '"Frontier" AI devs must: maintain processes for identifying catastrophic risks, publish safety assessments, provide detailed capability disclosures. ALSO: "The AI did it" NO LONGER a legal defense—companies remain liable. Applies to 32 of top 50 AI companies (OpenAI, Anthropic, Google, Nvidia).',
            whyItMatters: [
              'Transition from voluntary AI ethics to MANDATORY compliance is complete.',
              'Budget for compliance staff and documentation.',
              'OPPORTUNITY: Transparency is now competitive advantage. Clear safety practices = customer trust.'
            ],
            hotTake: '🔥 Just the beginning. Federal and international regs will follow California template. Get compliance house in order NOW.'
          },
          {
            title: '⚡ AI Impact on Women Workers',
            story: 'Brookings report: 6M+ workers at risk of AI displacement would struggle to adapt—86% are WOMEN. Concentrated in clerical/admin roles "under attack" from automation for decades. BUT: 70% in AI-exposed professional roles (marketing, finance, science) COULD pivot to comparable-earning positions.',
            whyItMatters: [
              'AI automation = cost savings AND workforce transition challenges.',
              'Diversity metrics may DETERIORATE without planning → ESG concerns, talent brand damage.',
              'Proactive reskilling mitigates reputational risk.'
            ],
            hotTake: '🔥 Responsible AI transition planning isn\'t just ethics—it\'s COMPETITIVE ADVANTAGE. Companies that reskill rather than displace win the talent war.'
          }
        ]
      }
    },
    {
      id: 'close',
      title: '🎯 EPISODE CLOSE',
      time: '2 min',
      color: 'bg-purple-600',
      content: {
        takeaways: [
          { num: 1, text: 'AI agents are here for YOUR work. Claude Code & Cowork shipping TODAY. Try them this week. The productivity gap is widening fast.' },
          { num: 2, text: 'Agentic browser wars are ON. 6 players, different strengths. Pick one, go deep, optimize your web presence for AI visitors.' },
          { num: 3, text: 'AI accountability era is HERE. Market drew $350B line between companies that can prove ROI and those that can\'t. MEASURE EVERYTHING.' },
          { num: 4, text: 'Hedge your AI bets. When AMAZON invests in both OpenAI AND Anthropic, that\'s your signal. Avoid single-vendor dependencies. Build for optionality.' },
          { num: 5, text: 'Enterprise AI works when it\'s VERTICAL. ServiceNow playbook: solve specific workflow problems, not general-purpose chat.' },
        ],
        cta: [
          '📢 Subscribe to AI Business Network wherever you get podcasts',
          '📢 Connect on LinkedIn — drop us your biggest AI ROI challenge, might feature on future episode',
          '📢 Coming next week: Davos AI debates deep dive — Dario Amodei says AI replaces all devs in a year. Yann LeCun says LLMs are dead end. WHO\'S RIGHT?'
        ],
        callbacks: [
          '🔗 December episode on "AI Vendor Strategy" predicted the multi-model hedging we\'re seeing',
          '🔗 Davos preview from 2 weeks ago set up this week\'s AGI timeline debates'
        ]
      }
    }
  ];

  const seg = segments[currentSegment];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className={`${seg.color} px-6 py-4 sticky top-0 z-10`}>
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold">{seg.title}</h1>
            <p className="text-white/80">{seg.time}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 font-medium"
            >
              {showNotes ? '📖 Hide Details' : '📖 Show Details'}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 px-4 py-3 sticky top-16 z-10 border-b border-gray-700">
        <div className="flex gap-2 overflow-x-auto max-w-5xl mx-auto">
          {segments.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSegment(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                i === currentSegment
                  ? `${s.color} ring-2 ring-white/50`
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {i === 0 ? '🎙️ Open' : i === segments.length - 1 ? '🎯 Close' : `S${i}`}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-6 space-y-6 pb-32">

        {/* Cold Open */}
        {seg.id === 'cold-open' && (
          <>
            <div className="bg-purple-900/50 border-l-4 border-purple-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-purple-300 mb-3 uppercase tracking-wide">🎤 Read This Hook</h2>
              <p className="text-2xl leading-relaxed font-medium">{seg.content.hook}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">📋 Today's Lineup</h2>
              <div className="space-y-4">
                {seg.content.overview.map(item => (
                  <div key={item.num} className="flex gap-4 items-start">
                    <span className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{item.num}</span>
                    <div>
                      <span className="font-bold text-xl">{item.title}</span>
                      <p className="text-gray-400 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Segment 1 - Claude Code */}
        {seg.id === 'segment-1' && (
          <>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800">
              <p className="text-xl italic text-blue-200">{seg.content.intro}</p>
            </div>

            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800">
              <h2 className="text-sm font-bold text-blue-300 mb-4 uppercase tracking-wide">📰 The Story</h2>
              <div className="space-y-4">
                {seg.content.story.map(item => (
                  <div key={item.label} className="bg-blue-900/30 p-4 rounded-lg">
                    <span className="font-bold text-blue-400 text-lg">{item.label}</span>
                    <p className="text-xl mt-1">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-blue-800/50 p-4 rounded-lg">
                <p className="text-lg font-bold text-blue-200">{seg.content.metaStory}</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">📊 Key Data</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {seg.content.dataPoints.map(d => (
                  <div key={d.stat} className="bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400">{d.stat}</div>
                    <div className="text-sm text-gray-400">{d.context}</div>
                  </div>
                ))}
              </div>
            </div>

            {showNotes && (
              <>
                {/* How to Use - Claude Code */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                  <h2 className="text-lg font-bold text-blue-400 mb-4">{seg.content.howToUse.claudeCode.title}</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <span className="text-sm text-gray-400">Install:</span>
                      <code className="block mt-1 text-green-400 text-lg font-mono">{seg.content.howToUse.claudeCode.install}</code>
                    </div>
                    <div>
                      <span className="font-bold text-gray-300">Basic Usage:</span>
                      <ul className="mt-2 space-y-1">
                        {seg.content.howToUse.claudeCode.usage.map((u, i) => (
                          <li key={i} className="text-lg">• {u}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-blue-400">⚡ Power Moves:</span>
                      <ul className="mt-2 space-y-1">
                        {seg.content.howToUse.claudeCode.powerMoves.map((p, i) => (
                          <li key={i} className="text-lg">• {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded">
                      <span className="font-bold">Best for:</span> {seg.content.howToUse.claudeCode.bestFor}
                    </div>
                  </div>
                </div>

                {/* How to Use - Cowork */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-purple-500">
                  <h2 className="text-lg font-bold text-purple-400 mb-4">{seg.content.howToUse.cowork.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <span className="font-bold text-gray-300">Access:</span>
                      <ul className="mt-2 space-y-1">
                        {seg.content.howToUse.cowork.access.map((a, i) => (
                          <li key={i} className="text-lg">• {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-gray-300">Basic Usage:</span>
                      <ul className="mt-2 space-y-1">
                        {seg.content.howToUse.cowork.usage.map((u, i) => (
                          <li key={i} className="text-lg">{i + 1}. {u}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <span className="font-bold text-purple-400">💬 Example Prompts:</span>
                      <ul className="mt-2 space-y-2">
                        {seg.content.howToUse.cowork.examplePrompts.map((p, i) => (
                          <li key={i} className="text-base italic text-gray-300">{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-purple-400">⚡ Power Moves:</span>
                      <ul className="mt-2 space-y-1">
                        {seg.content.howToUse.cowork.powerMoves.map((p, i) => (
                          <li key={i} className="text-lg">• {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-900/30 p-3 rounded">
                      <span className="font-bold">Best for:</span> {seg.content.howToUse.cowork.bestFor}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💼 Business Impact</h2>
                  {seg.content.businessImpact.map(b => (
                    <div key={b.audience} className="mb-4">
                      <h3 className="font-bold text-blue-400 mb-2">For {b.audience}:</h3>
                      {b.point && <p className="text-lg ml-4">{b.point}</p>}
                      {b.points && (
                        <ul className="ml-4 space-y-1">
                          {b.points.map((p, i) => <li key={i} className="text-lg">• {p}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💬 Discussion Questions</h2>
                  <div className="space-y-3">
                    {seg.content.discussion.map((q, i) => (
                      <p key={i} className="text-lg italic text-gray-300 bg-gray-700 p-3 rounded">{q}</p>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800">
                  <h2 className="text-sm font-bold text-yellow-300 mb-4 uppercase tracking-wide">🔄 Contrarian / Skeptic View</h2>
                  <ul className="space-y-2">
                    {seg.content.contrarian.map((c, i) => (
                      <li key={i} className="text-lg">{c}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800">
              <h2 className="text-sm font-bold text-green-300 mb-3 uppercase tracking-wide">✅ Listener Homework</h2>
              <ul className="space-y-2 mb-4">
                {seg.content.takeaway.map((t, i) => (
                  <li key={i} className="text-lg">{t}</li>
                ))}
              </ul>
              <div className="bg-green-900/50 p-4 rounded-lg mt-4">
                <p className="text-lg font-medium text-green-200">{seg.content.metaTakeaway}</p>
              </div>
            </div>

            <div className="bg-blue-900/50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-blue-300 mb-2 uppercase tracking-wide">⏭️ Transition</h2>
              <p className="text-xl italic">{seg.content.transition}</p>
            </div>
          </>
        )}

        {/* Segment 2 - Browser Wars */}
        {seg.id === 'segment-2' && (
          <>
            <div className="bg-green-900/30 p-4 rounded-lg border border-green-800">
              <p className="text-xl italic text-green-200">{seg.content.intro}</p>
            </div>

            <div className="bg-green-900/30 p-6 rounded-lg overflow-x-auto border border-green-800">
              <h2 className="text-sm font-bold text-green-300 mb-4 uppercase tracking-wide">📅 Browser Timeline</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-green-400 border-b border-green-800">
                    <th className="py-2 pr-4 font-bold">Product</th>
                    <th className="py-2 pr-4 font-bold">Company</th>
                    <th className="py-2 pr-4 font-bold">Launch</th>
                    <th className="py-2 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {seg.content.timeline.map(row => (
                    <tr key={row.product} className="border-b border-gray-700">
                      <td className="py-3 pr-4 font-bold text-lg">{row.product}</td>
                      <td className="py-3 pr-4 text-gray-400">{row.company}</td>
                      <td className="py-3 pr-4 text-green-400 font-medium">{row.date}</td>
                      <td className="py-3 text-sm text-gray-400">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showNotes && (
              <>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">🔍 Detailed Descriptions</h2>
                  <div className="space-y-4">
                    {seg.content.detailedDescriptions.map(d => (
                      <div key={d.name} className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-green-400 text-xl">{d.name}</div>
                          <div className="text-sm text-green-300 bg-green-900/50 px-2 py-1 rounded">{d.tagline}</div>
                        </div>
                        <p className="text-gray-200 mb-2">{d.desc}</p>
                        <p className="text-sm text-gray-400 italic">{d.status}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">📊 Comparison Table</h2>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-green-400 border-b border-gray-600">
                        <th className="py-2 pr-2 text-left">Feature</th>
                        <th className="py-2 px-2">Manus</th>
                        <th className="py-2 px-2">Dia</th>
                        <th className="py-2 px-2">Comet</th>
                        <th className="py-2 px-2">Claude</th>
                        <th className="py-2 px-2">Atlas</th>
                        <th className="py-2 px-2">Auto</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seg.content.comparisonTable.map(row => (
                        <tr key={row.feature} className="border-b border-gray-700">
                          <td className="py-2 pr-2 font-medium">{row.feature}</td>
                          <td className="py-2 px-2 text-center text-gray-300">{row.manus}</td>
                          <td className="py-2 px-2 text-center text-gray-300">{row.dia}</td>
                          <td className="py-2 px-2 text-center text-gray-300">{row.comet}</td>
                          <td className="py-2 px-2 text-center text-gray-300">{row.claude}</td>
                          <td className="py-2 px-2 text-center text-gray-300">{row.atlas}</td>
                          <td className="py-2 px-2 text-center text-gray-300">{row.autobrowse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💼 Business Impact</h2>
                  {seg.content.businessImpact.map(b => (
                    <div key={b.audience} className="mb-4">
                      <h3 className="font-bold text-green-400 mb-2">For {b.audience}:</h3>
                      <ul className="ml-4 space-y-1">
                        {b.points.map((p, i) => <li key={i} className="text-lg">• {p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800">
                  <h2 className="text-sm font-bold text-yellow-300 mb-4 uppercase tracking-wide">🔄 Contrarian / Skeptic View</h2>
                  <ul className="space-y-2">
                    {seg.content.contrarian.map((c, i) => (
                      <li key={i} className="text-lg">{c}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💬 Discussion Questions</h2>
              <div className="space-y-3">
                {seg.content.discussion.map((q, i) => (
                  <p key={i} className="text-lg italic text-gray-300 bg-gray-700 p-3 rounded">{q}</p>
                ))}
              </div>
            </div>

            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800">
              <h2 className="text-sm font-bold text-green-300 mb-3 uppercase tracking-wide">✅ Listener Homework</h2>
              <ul className="space-y-2">
                {seg.content.takeaway.map((t, i) => (
                  <li key={i} className="text-lg">{t}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-green-300 mb-2 uppercase tracking-wide">⏭️ Transition</h2>
              <p className="text-xl italic">{seg.content.transition}</p>
            </div>
          </>
        )}

        {/* Segment 3 - $350B Reckoning */}
        {seg.id === 'segment-3' && (
          <>
            <div className="bg-red-900/30 p-4 rounded-lg border border-red-800">
              <p className="text-2xl font-bold text-red-200">{seg.content.intro}</p>
            </div>

            <div className="bg-red-900/30 p-6 rounded-lg border border-red-800">
              <h2 className="text-sm font-bold text-red-300 mb-4 uppercase tracking-wide">📰 The Story</h2>
              <div className="space-y-3">
                {seg.content.story.map((s, i) => (
                  <p key={i} className="text-xl leading-relaxed">{s}</p>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">🔑 Key Context</h2>
              <ul className="space-y-2">
                {seg.content.keyContext.map((c, i) => (
                  <li key={i} className="text-lg">• {c}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">📊 Key Data</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {seg.content.dataPoints.map(d => (
                  <div key={d.stat} className="bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-400">{d.stat}</div>
                    <div className="text-sm text-gray-400">{d.context}</div>
                  </div>
                ))}
              </div>
            </div>

            {showNotes && (
              <>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💼 Business Impact</h2>
                  {seg.content.businessImpact.map(b => (
                    <div key={b.audience} className="mb-4">
                      <h3 className="font-bold text-red-400 mb-2">For {b.audience}:</h3>
                      <ul className="ml-4 space-y-1">
                        {b.points.map((p, i) => <li key={i} className="text-lg">• {p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800">
                  <h2 className="text-sm font-bold text-yellow-300 mb-4 uppercase tracking-wide">🔄 Contrarian / Skeptic View</h2>
                  <ul className="space-y-2">
                    {seg.content.contrarian.map((c, i) => (
                      <li key={i} className="text-lg">{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800">
                  <h2 className="text-sm font-bold text-blue-300 mb-4 uppercase tracking-wide">📋 Actionable by Role</h2>
                  <ul className="space-y-2">
                    {seg.content.actionable.map((a, i) => (
                      <li key={i} className="text-lg">{a}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💬 Discussion Questions</h2>
              <div className="space-y-3">
                {seg.content.discussion.map((q, i) => (
                  <p key={i} className="text-lg italic text-gray-300 bg-gray-700 p-3 rounded">{q}</p>
                ))}
              </div>
            </div>

            <div className="bg-red-900/50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-red-300 mb-2 uppercase tracking-wide">✅ Key Takeaway</h2>
              <p className="text-2xl font-bold">{seg.content.takeaway}</p>
            </div>

            <div className="bg-red-900/30 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-red-300 mb-2 uppercase tracking-wide">⏭️ Transition</h2>
              <p className="text-xl italic">{seg.content.transition}</p>
            </div>
          </>
        )}

        {/* Segment 4 - $100B Bet */}
        {seg.id === 'segment-4' && (
          <>
            <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-800">
              <p className="text-2xl font-bold text-orange-200">{seg.content.intro}</p>
            </div>

            <div className="bg-orange-900/30 p-6 rounded-lg border border-orange-800">
              <h2 className="text-sm font-bold text-orange-300 mb-4 uppercase tracking-wide">📰 The Story</h2>
              <div className="space-y-3">
                {seg.content.story.map((s, i) => (
                  <p key={i} className="text-xl leading-relaxed">{s}</p>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">🔑 Key Context</h2>
              <ul className="space-y-2">
                {seg.content.keyContext.map((c, i) => (
                  <li key={i} className="text-lg">• {c}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">📊 Key Data</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {seg.content.dataPoints.map(d => (
                  <div key={d.stat} className="bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-400">{d.stat}</div>
                    <div className="text-sm text-gray-400">{d.context}</div>
                  </div>
                ))}
              </div>
            </div>

            {showNotes && (
              <>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💼 Business Impact</h2>
                  {seg.content.businessImpact.map(b => (
                    <div key={b.audience} className="mb-4">
                      <h3 className="font-bold text-orange-400 mb-2">For {b.audience}:</h3>
                      <ul className="ml-4 space-y-1">
                        {b.points.map((p, i) => <li key={i} className="text-lg">• {p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800">
                  <h2 className="text-sm font-bold text-yellow-300 mb-4 uppercase tracking-wide">🔄 Contrarian / Skeptic View</h2>
                  <ul className="space-y-2">
                    {seg.content.contrarian.map((c, i) => (
                      <li key={i} className="text-lg">{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800">
                  <h2 className="text-sm font-bold text-blue-300 mb-4 uppercase tracking-wide">📋 Actionable by Role</h2>
                  <ul className="space-y-2">
                    {seg.content.actionable.map((a, i) => (
                      <li key={i} className="text-lg">{a}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">💬 Discussion Questions</h2>
              <div className="space-y-3">
                {seg.content.discussion.map((q, i) => (
                  <p key={i} className="text-lg italic text-gray-300 bg-gray-700 p-3 rounded">{q}</p>
                ))}
              </div>
            </div>

            <div className="bg-orange-900/50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-orange-300 mb-2 uppercase tracking-wide">✅ Key Takeaway</h2>
              <p className="text-2xl font-bold">{seg.content.takeaway}</p>
            </div>

            <div className="bg-orange-900/30 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <h2 className="text-sm font-bold text-orange-300 mb-2 uppercase tracking-wide">⏭️ Transition</h2>
              <p className="text-xl italic">{seg.content.transition}</p>
            </div>
          </>
        )}

        {/* Segment 5 - Quick Hits */}
        {seg.id === 'segment-5' && (
          <>
            <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-800 mb-6">
              <p className="text-xl font-bold text-yellow-300">{seg.content.format}</p>
            </div>

            <div className="space-y-6">
              {seg.content.hits.map((hit, i) => (
                <div key={i} className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h2 className="text-xl font-bold text-yellow-400 mb-3">{hit.title}</h2>
                  <div className="space-y-3">
                    <div className="bg-yellow-900/30 p-4 rounded-lg">
                      <span className="font-bold text-yellow-300">📰 Story:</span>
                      <p className="text-lg mt-1">{hit.story}</p>
                    </div>
                    {showNotes && (
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <span className="font-bold text-gray-400">💡 Why it matters:</span>
                        <ul className="mt-2 space-y-1">
                          {hit.whyItMatters.map((w, j) => (
                            <li key={j} className="text-lg">• {w}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="bg-yellow-900/40 p-4 rounded-lg">
                      <p className="text-lg font-medium">{hit.hotTake}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Close */}
        {seg.id === 'close' && (
          <>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800">
              <h2 className="text-sm font-bold text-purple-300 mb-4 uppercase tracking-wide">🎯 Key Takeaways</h2>
              <div className="space-y-4">
                {seg.content.takeaways.map(t => (
                  <div key={t.num} className="flex gap-4 items-start bg-purple-900/30 p-4 rounded-lg">
                    <span className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">{t.num}</span>
                    <p className="text-xl">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">📣 Call to Action</h2>
              <ul className="space-y-3">
                {seg.content.cta.map((c, i) => (
                  <li key={i} className="text-xl">{c}</li>
                ))}
              </ul>
            </div>

            {showNotes && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">🔗 Episode Callbacks</h2>
                <ul className="space-y-2">
                  {seg.content.callbacks.map((c, i) => (
                    <li key={i} className="text-lg">{c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800 text-center">
              <p className="text-2xl font-bold text-green-400">🎉 That's a wrap!</p>
              <p className="text-gray-400 mt-2">Great episode, team!</p>
            </div>
          </>
        )}

      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setCurrentSegment(Math.max(0, currentSegment - 1))}
            disabled={currentSegment === 0}
            className="px-6 py-3 bg-gray-700 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-600 text-lg font-semibold flex items-center gap-2"
          >
            ← Prev
          </button>
          <div className="text-center">
            <span className="text-gray-400 text-sm">Segment</span>
            <span className="text-2xl font-bold ml-2">{currentSegment + 1} / {segments.length}</span>
          </div>
          <button
            onClick={() => setCurrentSegment(Math.min(segments.length - 1, currentSegment + 1))}
            disabled={currentSegment === segments.length - 1}
            className="px-6 py-3 bg-gray-700 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-600 text-lg font-semibold flex items-center gap-2"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
