# AI Product Release Brief — Week of February 19–26, 2026

**Prepared for**: AI Business Network
**Date**: February 26, 2026
**Coverage Window**: February 19–26, 2026 (with key rolling items from earlier Feb noted)

---

## OPENAI / CHATGPT

### Release Summary

- ChatGPT Agent launched—the unification of Operator, Deep Research, and ChatGPT into a single agentic system that takes actions on the web using its own virtual computer. Rolling out to Pro users first, with Plus and Team following in days.
- Ads officially appeared inside ChatGPT for Free and Go users in the U.S. (launched Feb 9; expanded to first-prompt placements Feb 21). $60 CPM, $200K minimum spend. Brands include Expedia and Qualcomm.
- GPT-5.3-Codex shipped Feb 5 and continues to gain traction—first model to help build itself; classified "High" cybersecurity capability.
- Deep Research upgraded with website-specific research focus, editable research plans, and a fullscreen report view.
- Model retirements: GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini all removed from ChatGPT (Feb 13).
- File upload limit doubled to 20 files per message; context window expanded to 256K tokens with Thinking mode.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| ChatGPT | ChatGPT Agent | UX / Automation | Unifies Operator (web browsing + clicking), Deep Research (synthesis), and conversational ChatGPT into one agent running on a virtual computer | Founders, Execs, GTM leaders, Ops | Book travel across sites; research competitors and compile reports; complete multi-step procurement workflows; fill out forms across web apps | Pro-first rollout; CUA model may still hit edge cases on complex UIs; monitor model can pause tasks | Feb 2026 (rolling) | GA (Pro), rolling to Plus/Team | [OpenAI Blog](https://openai.com/index/introducing-chatgpt-agent/) |
| ChatGPT | Ads in ChatGPT | Pricing / UX | Sponsored placements appear in Free and Go tier chats, matched to conversation topic. No ads in health/politics/under-18 chats | Marketing, Founders, Execs | New advertising channel for brands; changes competitive dynamics with Google AI; ad revenue subsidizes free tier | Only U.S. for now; $60 CPM + $200K min is premium; Pro/Business/Enterprise exempt | Feb 9 (expanded Feb 21) | Beta (U.S. only) | [TechCrunch](https://techcrunch.com/2026/02/09/chatgpt-rolls-out-ads/), [OpenAI](https://openai.com/index/testing-ads-in-chatgpt/) |
| ChatGPT | Deep Research Upgrades | UX | Focus research on specific websites and connected apps; editable research plan; fullscreen report view; progress tracking mid-run | Execs, GTM leaders, CS | Competitive intelligence on specific domains; analyst-level report generation; M&A due diligence research | Still limited by web access constraints; long research tasks can time out | Feb 2026 | GA | [OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) |
| OpenAI | GPT-5.3-Codex | Model | First model combining Codex + GPT-5 training stacks; 25% faster; interactive while running; helped build itself | Devs, Founders, Engineering leaders | Agentic coding tasks; long-running code research; complex refactoring; agent-led feature development | "High" cybersecurity rating raises concerns; available via Codex app/CLI/IDE, API coming later | Feb 5 | GA (Codex platforms) | [OpenAI](https://openai.com/index/introducing-gpt-5-3-codex/), [Fortune](https://fortune.com/2026/02/05/openai-gpt-5-3-codex-warns-unprecedented-cybersecurity-risks/) |
| ChatGPT | Model Retirements | Model | GPT-4o, GPT-4.1, GPT-4.1 mini, o4-mini removed from ChatGPT | All users | Forces migration to GPT-5.x family; simplifies model selection | API users unaffected for now; teams on older integrations must update | Feb 13 | GA | [OpenAI](https://openai.com/index/retiring-gpt-4o-and-older-models/) |
| ChatGPT | 256K Context + 20-file uploads | UX | Context window expanded to 256K tokens (Thinking mode); file upload limit doubled from 10 to 20 | Execs, Ops, Analysts | Analyze full document sets in one prompt; compare 20 contracts simultaneously; broader context for complex analyses | Requires manual Thinking mode selection for full context | Feb 2026 | GA | [OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) |

---

## ANTHROPIC / CLAUDE

### Release Summary

- Anthropic held an "Enterprise Agents" briefing (Feb 24) and launched 13 new enterprise plugins plus a private plugin marketplace for organizations. Prebuilt plugins span HR, finance, legal, investment banking, and more.
- Claude Sonnet 4.6 became the new default model across free and paid plans—1M token context window in beta, improved agentic search, lower token consumption.
- Claude Memory rolled out to Max plan users, with Pro plan access following over two weeks.
- Infinite-length conversations introduced, with automatic summarization when chats approach context limits.
- Cowork desktop preview launched on macOS, extending Claude Code's agentic capabilities to knowledge work with local VM and MCP integrations.
- Claude Code Analytics API launched for organizations to track aggregated usage metrics.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| Claude | Enterprise Plugins + Marketplace | Enterprise / Integrations | 13 new MCP connectors (Google Workspace, DocuSign, WordPress); private org-level plugin marketplaces; prebuilt templates for HR, finance, legal, IB, PE, wealth mgmt | Execs, Ops, IT leaders | Department-specific AI workflows; custom org plugins distributed to employees; DocuSign + Google Workspace automation | Team/Enterprise plans only; private marketplace requires admin setup | Feb 24–25 | GA (Enterprise) | [gHacks](https://www.ghacks.net/2026/02/25/anthropic-expands-claude-with-enterprise-plugins-and-marketplace/), [WinBuzzer](https://winbuzzer.com/2026/02/25/anthropic-claude-cowork-13-enterprise-plugins-google-workspace-docusign-xcxwbn/) |
| Claude | Sonnet 4.6 (Default) | Model | New default model across all plans; 1M token context in beta; improved agentic search; fewer tokens consumed | All users | Process massive document sets; extended research sessions; complex multi-step analyses at lower cost | 1M context still in beta; may see edge cases in very long sessions | Feb 2026 | GA | [Releasebot](https://releasebot.io/updates/anthropic/claude) |
| Claude | Memory | UX | Persistent memory across conversations for Max users; Pro rollout following | Execs, GTM leaders, Founders | Claude remembers preferences, project context, team details across sessions; no re-briefing needed | Max plan first; Pro in 2 weeks; memory management controls TBD | Feb 2026 | GA (Max), Rolling (Pro) | [Releasebot](https://releasebot.io/updates/anthropic/claude) |
| Claude | Cowork Desktop Preview | UX / Enterprise | macOS desktop app with local VM, file access, and MCP integrations for knowledge work | Execs, Ops, Knowledge workers | Local file analysis; automated document workflows; Excel/PowerPoint/Word creation with AI; MCP tool orchestration | macOS only; research preview status; some features limited | Feb 2026 | Preview | [Anthropic News](https://www.anthropic.com/news) |
| Claude Code | Analytics API | API / Enterprise | Programmatic access to daily aggregated usage metrics for Claude Code | Engineering leaders, IT | Track developer AI adoption; measure productivity gains; audit usage across teams | Aggregated daily only; org-level access required | Feb 2026 | GA | [Releasebot](https://releasebot.io/updates/anthropic/claude-code) |

---

## GOOGLE / GEMINI

### Release Summary

- Gemini 3.1 Pro launched—achieved 77.1% on ARC-AGI-2 (more than 2x its predecessor), rolling out to Google AI Pro and Ultra subscribers in Gemini app and NotebookLM.
- Shopping integration: Users can buy items from Etsy and Wayfair within Gemini; "Direct Offers" lets brands offer discounts to shoppers inside AI Mode.
- Google AI subscription tiers restructured: Google One AI Premium → "Google AI Pro" ($19.99/mo); new "Google AI Ultra" tier introduced.
- Samsung Galaxy S26 unveiled with deeply integrated Gemini agentic features—background task execution, multi-item Circle to Search.
- Gmail AI features launched: AI Overviews for email threads, Help Me Write, Suggested Replies, Proofread—all powered by Gemini 3.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| Gemini | Gemini 3.1 Pro | Model | 77.1% on ARC-AGI-2 (2x predecessor); improved reasoning for complex synthesis and explanation | Execs, Analysts, Founders | Complex data synthesis; multi-document analysis; research-grade reasoning tasks | Pro/Ultra subscribers only; rolling availability | Feb 2026 | GA (Pro/Ultra) | [Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/) |
| Gemini | Shopping + Direct Offers | UX / Automation | Buy from Etsy/Wayfair inside Gemini; brands can offer direct discounts in AI Mode | Marketing, Founders, Consumers | Direct-response advertising in AI; in-chat commerce; competitive with ChatGPT shopping | U.S. focus; limited merchant partnerships initially | Feb 2026 | GA (U.S.) | [Bloomberg](https://www.bloomberg.com/news/articles/2026-02-11/google-pushes-ai-shopping-features-in-search-and-gemini-chatbot) |
| Google | AI Subscription Restructure | Pricing | Google One AI Premium → Google AI Pro ($19.99/mo); new Google AI Ultra tier | All users | Clearer tier selection; Ultra unlocks NotebookLM + Gemini 3.1 Pro access | Pricing for Ultra tier varies by region | Feb 2026 | GA | [9to5Google](https://9to5google.com/2026/02/21/google-ai-pro-ultra-features/) |
| Gmail | AI Overviews + Writing Tools | UX / Automation | AI thread summaries, Help Me Write, Suggested Replies, Proofread—all Gemini 3-powered | Execs, GTM leaders, Ops | Auto-summarize long email chains; draft replies faster; catch errors before sending | Workspace integration required; accuracy varies on complex threads | Feb 2026 | GA | [Google Blog](https://blog.google/products-and-platforms/products/gmail/gmail-is-entering-the-gemini-era/) |

---

## XAI / GROK

### Release Summary

- Grok 4.20 entered public beta (Feb 17) with a 4-agent collaboration system where specialized agents debate internally before answering—early users report 47–65% hallucination reduction.
- Grok Imagine API launched for creative workflows—10-second video generation at 720p with audio.
- xAI signed a deal with the Pentagon to deploy Grok in classified military systems.
- SpaceX acquired xAI; xAI closed a $20B Series E round.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| Grok | Grok 4.20 (4-Agent System) | Model | Four specialized agents collaborate and debate on every query; continuous post-deployment learning; 47–65% hallucination reduction reported | Founders, Execs, Devs | Complex analysis requiring multi-perspective reasoning; high-accuracy research; decision support | Public beta; hallucination claims need independent verification | Feb 17 | Beta | [Releasebot](https://releasebot.io/updates/xai), [AdwaitX](https://www.adwaitx.com/grok-4-20-beta-release-date-xai-launch/) |
| Grok | Grok Imagine API | API / Creative | Unified creative API; 10-second video, 720p, with audio generation | Marketing, Creative teams, Founders | Short-form video ads; social media creative; product demos; rapid prototyping | 10-second limit; 720p cap; quality varies | Feb 2026 | GA (API) | [Releasebot](https://releasebot.io/updates/xai) |
| xAI | Pentagon / DoD Deal | Enterprise | Grok deployed in classified military systems under "all lawful use" standard | Execs (defense/gov sector) | Government AI adoption precedent; defense contractor integrations | Controversial; "all lawful use" is broad; raises governance questions | Feb 23 | Confirmed | [Axios](https://www.axios.com/2026/02/23/ai-defense-department-deal-musk-xai-grok) |

---

## NOTEBOOKLM (GOOGLE)

### Release Summary

- Gemini 3.1 Pro now powers NotebookLM for Pro/Ultra subscribers.
- Prompt-based slide revisions: edit generated slides via natural language prompts; export to PPTX format (Google Slides export coming).
- Mobile app updates: customize video overviews, open Drive files in native apps, AI-powered chat suggestions.
- NotebookLM officially integrated into Google Workspace suite; AI Expanded Access add-on SKU announced Feb 5.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| NotebookLM | Gemini 3.1 Pro + Slide Revisions | Model / UX | Better reasoning engine; prompt-based slide editing; PPTX export | Execs, Ops, Marketing | AI-generated presentations from research; iterate slide content with prompts; export to PowerPoint for team use | Pro/Ultra only; Google Slides export not yet available | Feb 20 | GA (Pro/Ultra) | [9to5Google](https://9to5google.com/2026/02/20/notebooklm-slide-prompts/) |
| NotebookLM | Mobile Enhancements | UX | Customizable video overviews; native app file opening; chat suggestions | All mobile users | On-the-go research review; customize AI podcast/video outputs; contextual follow-up questions | Some features rolling out gradually | Feb 2026 | GA | [9to5Google](https://9to5google.com/2026/02/20/notebooklm-slide-prompts/) |

---

## CURSOR

### Release Summary

- Cursor launched Cloud Agents (Feb 24)—fully autonomous coding agents that run on isolated VMs, self-test, record video demos of their work, and produce merge-ready pull requests.
- 35% of Cursor's PRs are now generated by autonomous agents.
- Agents accessible via web, desktop, mobile, Slack, and GitHub—run 10–20+ agents in parallel.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| Cursor | Cloud Agents | Automation / UX | Autonomous agents on isolated VMs; self-test; record video demos; produce merge-ready PRs; run 10-20+ in parallel | Founders, Engineering leaders, Devs | Parallelize feature development; automated bug fixes; agent-generated PRs with video evidence for review; scale engineering output | Quality varies by task complexity; human review still essential; cost scales with parallel agents | Feb 24 | GA | [CNBC](https://www.cnbc.com/2026/02/24/cursor-announces-major-update-as-ai-coding-agent-battle-heats-up.html), [Cursor Changelog](https://cursor.com/changelog/02-24-26) |

---

## N8N

### Release Summary

- n8n 2.0 shipped with Draft vs. Published workflow states, sub-workflow pause/resume for external approvals, sandboxed code execution, and performance improvements. This release positions n8n as an enterprise-grade automation platform.

### Release Table

| Tool | Feature | Category | What Changed | Who It's For | Practical Use Cases | Limitations / Gotchas | Release Date | Rollout Status | Sources |
|------|---------|----------|-------------|-------------|-------------------|----------------------|-------------|---------------|---------|
| n8n | Version 2.0 | Automation / Enterprise | Draft/Published workflow states; sub-workflow pause for approvals; sandboxed code runners; faster save; improved canvas | Ops, Devs, GTM leaders | Safe workflow iteration without disrupting production; human-in-the-loop approval flows; more secure automations | Breaking changes from v1; migration required; some deprecated nodes | Feb 2026 | GA | [n8n Blog](https://blog.n8n.io/introducing-n8n-2-0/), [n8n Docs](https://docs.n8n.io/release-notes/) |

---

## OTHER NOTABLE

### NVIDIA
- Reported record quarterly revenue of $68.1B (quarter ended Jan 25, 2026), underscoring continued infrastructure demand.

### World Labs (Fei-Fei Li)
- Secured $1B funding from AMD, NVIDIA, Fidelity for spatial intelligence (MARBLE: images/video/text → 3D worlds).

### Samsung Galaxy S26
- Deep Gemini integration with background agentic task execution, multi-item Circle to Search.

### Meta / Manus
- Meta embedded acquired Manus AI into Ads Manager as an autonomous ad operations agent—handles ad testing, conversion analysis, and creative generation without prompts.

---

## A) TOP 10 "WHAT MATTERS MOST" — RANKED

1. **ChatGPT Agent unifies Operator + Deep Research + Chat.** The "one agent to rule them all" moment. Every exec needs to test this against their workflows this week. It's the clearest signal that AI is moving from Q&A to doing.

2. **Anthropic launches enterprise plugin marketplace.** Private, org-controlled AI plugin stores are now real. This changes how companies deploy AI—department by department, with admin guardrails. IBM stock dropped 13% on the news.

3. **Cursor Cloud Agents: 35% of PRs are now agent-generated.** The "vibe coding" era hit a new milestone. Engineering leaders must rethink capacity planning when agents can run 20 parallel development streams.

4. **Grok 4.20's multi-agent debate system cuts hallucinations 47–65%.** If independently verified, this architectural pattern (multiple agents cross-checking each other) could reshape how all AI providers approach reliability.

5. **Gemini 3.1 Pro doubles ARC-AGI-2 score.** Google's reasoning capabilities just leapfrogged. For enterprises comparing providers, this changes the calculus on Gemini vs. GPT vs. Claude for analytical workloads.

6. **Ads arrive in ChatGPT at $60 CPM.** A new premium advertising channel is born. Marketers have a new line item to evaluate; users face the free-vs-paid quality tradeoff. This funds OpenAI's race to AGI.

7. **xAI signs Pentagon deal for classified Grok deployment.** Government AI adoption just accelerated. The "all lawful use" standard is broad and will face scrutiny, but this legitimizes AI in defense procurement.

8. **n8n 2.0 brings enterprise-grade workflow management.** Draft/Published states and human-in-the-loop approvals make n8n viable for regulated industries. Zapier and Make are on notice.

9. **Claude Sonnet 4.6 ships with 1M token context (beta).** The context window wars continue. For document-heavy workflows (legal, finance, research), 1M tokens is game-changing.

10. **NotebookLM gets PPTX export + prompt-based slide editing.** Research → Presentation in one tool. This directly threatens a $5B+ consulting slide-deck economy.

---

## B) TREND PATTERNS

1. **The Agentic Convergence**: ChatGPT Agent, Cursor Cloud Agents, Gemini's background tasks on Samsung, Meta's Manus in Ads Manager—every major player shipped autonomous agents this month. We've crossed from "agent demos" to "agents in production."

2. **AI Commerce Becomes a Battleground**: Both OpenAI and Google now let users buy products inside their AI chatbots (Etsy, Shopify, Wayfair). Ads arrived in ChatGPT. Google launched "Direct Offers." AI is becoming a transaction layer, not just an information layer.

3. **Enterprise Plugin Ecosystems Emerge**: Anthropic's org-level plugin marketplace, OpenAI's connected apps in Deep Research, Cursor's Slack/GitHub agent integrations—platforms are competing on ecosystem breadth, not just model quality.

4. **Model Consolidation + Retirement Acceleration**: OpenAI retired four models in one day. Claude Sonnet 4.6 replaced older versions as default. The "too many models" era is ending—vendors are converging on fewer, better models.

5. **Multi-Agent Architectures Go Mainstream**: Grok 4.20's four-agent debate system, Cursor's parallel agents, n8n's sub-workflow orchestration—the architectural pattern of multiple AI agents collaborating is becoming standard.

---

## C) COMPETITIVE MOVES

- **OpenAI vs. Google**: Both launched in-chat shopping (Etsy/Shopify vs. Etsy/Wayfair). OpenAI added ads; Google restructured its AI subscription tiers. Direct competition for consumer AI wallet share.
- **Anthropic vs. OpenAI**: Anthropic's enterprise plugin marketplace is a direct counter to OpenAI's ChatGPT Enterprise. The "IBM fell 13%" headline tells you the market sees Claude enterprise as a serious SaaS disruptor.
- **Cursor vs. OpenAI Codex**: Cursor's Cloud Agents (35% of PRs) competes directly with GPT-5.3-Codex. Both promise autonomous coding, but Cursor's parallel VM approach is architecturally different from OpenAI's single-agent model.
- **xAI vs. Everyone**: Pentagon deal + $20B Series E + SpaceX acquisition gives xAI a unique government + infrastructure moat. Grok 4.20's multi-agent system is architecturally innovative but unproven at scale.

---

## D) "TRY THIS TODAY" PLAYBOOK

1. **Test ChatGPT Agent on a real workflow.** Pick a multi-step process you do weekly (competitive research, vendor comparison, travel booking) and hand it to ChatGPT Agent. Time it. Compare to manual. Share results with your team.

2. **Audit your AI plugin/integration stack.** With Anthropic's marketplace and OpenAI's connected apps, your AI tools can now plug into your existing software. Map which department workflows could be automated with plugins this quarter.

3. **Run a parallel Cursor Cloud Agent experiment.** If you have an engineering team, spin up 5 Cloud Agents on small bug fixes or feature tests. Measure PR quality and review time vs. human-written PRs.

4. **Evaluate your AI advertising exposure.** If you're a marketer, test a ChatGPT ad campaign ($60 CPM). If you're an exec, understand that your free-tier employees are now seeing ads in ChatGPT—consider whether upgrading to paid plans is worth it.

5. **Benchmark Gemini 3.1 Pro against your current provider.** Take your hardest analytical prompt (financial modeling, market analysis, document synthesis) and run it through Gemini 3.1 Pro, Claude Sonnet 4.6, and GPT-5.2. Compare output quality. The results may surprise you.

---

*Brief compiled by AI Business Network Research Team — February 26, 2026*
