export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Robotics' | 'IoT' | 'AI' | 'Data' | 'Engineering';
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'fprs-fem-7',
    slug: 'fprs-female-fighter-pilot-relief-system-concept',
    title: 'Designing a Relief System for Female Fast-Jet Aircrew: An Engineering Concept',
    excerpt: 'An 8-10 hour sortie outlasts the bladder. The workaround is voluntary dehydration, which degrades cognition and raises G-LOC risk. Our concept-stage design for a reusable, aircraft-mounted collection and transfer system.',
    content: `<p><strong>Status: concept design.</strong> This article describes an internal engineering concept dossier (FPRS-CD-001, Rev A). Nothing described here has been built, tested, qualified or certified. Every figure is a design target, not a measured result. We are publishing the reasoning, not a product.</p>
<h2>The problem is not comfort. It is cognition.</h2><p>A long-duration fast-jet sortie can run 8 to 10 hours. That comfortably exceeds bladder capacity. The near-universal workaround among aircrew is voluntary dehydration - deliberately under-drinking before and during a flight.</p><p>That trade is a bad one. Dehydration degrades cognitive performance and reaction time, increases susceptibility to G-induced loss of consciousness, and raises the risk of urinary tract infection. The pilot is trading physiological reserve for the absence of a bathroom.</p><p>Legacy "piddle-pack" absorbent bags were designed around male anatomy. Under a harness, in a confined cockpit, at sustained G, they are impractical for female aircrew. The result is that a solved problem for one group remains unsolved for another.</p>
<h2>Design intent</h2><p>The concept is a reusable, aircraft-mounted urine collection and transfer system that lets the pilot void without breaking a seated, strapped-in posture. The design envelope assumed for analysis is +9/-3 Gz, with high vibration, low ambient pressure and any aircraft attitude including inverted. That envelope is an assumption requiring validation, not a qualified figure.</p>
<h2>How it works</h2><p>The pilot wears only a soft, single-use collector. Every expensive component - pump, motor, battery, controller, storage bag holder - is fitted inside the aircraft and reused between sorties.</p><p>A moisture sensor in the collector signals the controller to start a small pump. The pump moves urine through a tube into a sealed bag containing a gelling agent, which locks the liquid into a solid gel so it cannot slosh or spill under high-G manoeuvring or inverted flight.</p>
<h2>Four decisions worth explaining</h2><ul>
<li><strong>Only the collector is disposable.</strong> Consumable cost per sortie stays low because the costly parts never leave the aircraft.</li>
<li><strong>The pump never touches urine.</strong> Fluid contacts only the inside of a replaceable tube. The pump head stays clean, which makes servicing a tube swap rather than a decontamination procedure.</li>
<li><strong>No wet pad against skin.</strong> Urine is pumped away and gelled rather than absorbed and held against the body - the difference between a hygiene problem and a hygiene solution.</li>
<li><strong>Two connectors, two jobs.</strong> One locks firmly for routine use. A second quick-release separates instantly on ejection and seals both ends so nothing leaks. Ejection is the case that governs the design.</li></ul>
<h2>What we are not claiming</h2><p>No test results. No qualification status. No airworthiness or certification claim. No approval from any authority. The dossier's own approval page records no signatures, and the document is marked "not for manufacture or flight."</p><p>We are publishing this because the reasoning is useful and because the underlying problem is under-addressed. If it becomes a prototype, we will publish the test data - including the parts that fail.</p>`,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1400&auto=format&fit=crop',
    author: 'KRYIL Systems Engineering',
    date: '2026-07-11',
    readTime: '11 min read',
    tags: ['Human Systems Integration', 'Aerospace', 'Life Support', 'Concept Design'],
  },
  {
    id: 'private--8',
    slug: 'private-llm-inference-cost-india',
    title: 'What Private LLM Inference Actually Costs in India',
    excerpt: 'Running an open-weight model on your own hardware versus calling a hosted API. Where the crossover point sits, and the operating costs most comparisons leave out.',
    content: `<p>The question every CFO asks after the pilot works: what does this cost at real volume? The honest answer is that it depends on a crossover point most vendors will not compute for you.</p>
<h2>The two cost shapes</h2><p>Hosted APIs are pure variable cost - you pay per token, forever, and the bill scales linearly with adoption. Private deployment is mostly fixed cost: GPU capacity, power, and the engineering time to operate it. Below a certain volume the API is cheaper. Above it, it is not.</p>
<h2>What comparisons usually omit</h2><ul>
<li><strong>Idle time.</strong> A GPU you rent by the hour costs the same whether it serves 10 requests or 10,000. Utilisation is the single biggest lever on private-deployment economics.</li>
<li><strong>Operational labour.</strong> Someone patches, monitors and upgrades the serving stack. That is a real recurring cost and it rarely appears in vendor comparisons.</li>
<li><strong>Retry and evaluation traffic.</strong> Evaluation runs, retries and prompt iteration can be a large fraction of total tokens in the first months.</li>
<li><strong>Egress and data movement</strong> between your VPC and a third-party endpoint.</li></ul>
<h2>How to actually decide</h2><p>Measure your real token volume over 30 days of production-like traffic before choosing. Then compute cost per 1M tokens for each option at <em>your</em> utilisation, not at a vendor's benchmark utilisation. If the workload is spiky and low-volume, hosted usually wins on cost. If it is steady, high-volume, or the data cannot leave your network, private wins - and where data residency is the binding constraint, cost is not the deciding variable at all.</p>
<p>We will publish measured numbers across GPU options once we can do so reproducibly. Until then, treat any specific rupee-per-token figure - including ours - as something you should reproduce on your own workload.</p>`,
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',
    author: 'KRYIL Engineering',
    date: '2026-08-19',
    readTime: '9 min read',
    tags: ['LLM', 'Infrastructure', 'Cost', 'Private AI'],
  },
  {
    id: 'dpdp-act-9',
    slug: 'dpdp-act-requirements-for-ai-systems',
    title: 'What the DPDP Act Actually Requires of an AI System',
    excerpt: 'India\'s Digital Personal Data Protection Act 2023 reshapes how AI systems may handle personal data. A practical reading of the obligations that change system design.',
    content: `<p>This is an engineering reading of the Digital Personal Data Protection Act 2023, not legal advice. Get your own counsel before relying on any of it.</p>
<h2>Why it changes AI architecture specifically</h2><p>The Act governs the processing of digital personal data. An AI system that ingests customer records, employee files, support transcripts or scanned identity documents is processing personal data, and the obligations attach regardless of whether a model is involved.</p>
<h2>The obligations that change design</h2><ul>
<li><strong>Notice and consent.</strong> Processing generally requires consent obtained through clear, itemised notice, or must fall within a legitimate use. "We fed it to a model" is not a purpose - the purpose must be specific and stated.</li>
<li><strong>Purpose limitation.</strong> Data collected for one purpose cannot be silently repurposed as training data. This is the clause most likely to be breached accidentally.</li>
<li><strong>Data minimisation.</strong> Retrieval systems that index everything by default sit awkwardly against this. Scope the corpus deliberately.</li>
<li><strong>Erasure.</strong> A Data Principal can request deletion. If personal data has been embedded into a vector index or baked into fine-tuning weights, deletion is an architectural problem you must solve before you have it, not after.</li>
<li><strong>Accuracy.</strong> Where data is used to make decisions affecting a person, it must be accurate and complete.</li>
<li><strong>Sub-processors.</strong> A Data Fiduciary remains accountable for processors it engages. A third-party model API is a processor.</li>
<li><strong>Breach notification</strong> to the Board and affected Data Principals.</li>
<li><strong>Grievance redressal.</strong> A reachable, published mechanism.</li></ul>
<h2>Design consequences</h2><p>Four things follow directly. Keep a data-classification map per system so you know what is personal and where it sits. Log every access to personal data. Make deletion a first-class operation across every store including indexes and caches, not a manual database query. And enumerate every sub-processor by name, because you will be asked.</p>
<p>The deletion requirement is the one that most often forces a redesign after the fact. Solve it at design time.</p>`,
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop',
    author: 'KRYIL Engineering',
    date: '2026-08-05',
    readTime: '10 min read',
    tags: ['DPDP Act', 'Compliance', 'Data Governance', 'Privacy'],
  },
  {
    id: 'pgvector-10',
    slug: 'pgvector-vs-dedicated-vector-database',
    title: 'Postgres and pgvector, or a Dedicated Vector Database?',
    excerpt: 'Most teams reach for a specialist vector store earlier than they need to. What you actually gain, what it costs you operationally, and where the real threshold is.',
    content: `<p>The default assumption in most RAG projects is that you need a vector database. Usually, at the scale the project actually operates at, you need Postgres.</p>
<h2>What a dedicated vector store buys you</h2><p>Specialised indexes, horizontal scale-out, and features like native hybrid search and multi-tenancy primitives. These are real advantages at genuinely large scale.</p>
<h2>What it costs you</h2><p>A second datastore to run, back up, secure, monitor, patch and reason about during an incident. A second consistency model. A second thing that can be misconfigured and leak. For a team of five, that is a significant fraction of operational capacity spent on infrastructure rather than on the product.</p>
<h2>The case for pgvector</h2><p>If your data already lives in Postgres, pgvector lets you keep embeddings beside the rows they came from. That means a single backup, a single access-control model, and - importantly for retrieval quality - the ability to filter by ordinary SQL predicates and join to real business data in the same query. Metadata filtering is often where retrieval quality is actually won, and doing it in SQL is straightforward.</p>
<h2>Where the threshold sits</h2><p>The honest answer is that it depends on your corpus size, embedding dimensionality, query concurrency and latency budget - so measure it. But the failure mode we see is not teams outgrowing Postgres. It is teams adopting a specialist store at a scale where Postgres would have been comfortable, and paying the operational tax for years.</p>
<p>Start with pgvector. Instrument recall and p95 latency. Migrate when the measurement, not the architecture diagram, tells you to.</p>`,
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1400&auto=format&fit=crop',
    author: 'KRYIL Engineering',
    date: '2026-07-22',
    readTime: '8 min read',
    tags: ['Postgres', 'pgvector', 'RAG', 'Architecture'],
  },
  {
    id: 'why-ente-11',
    slug: 'why-enterprise-ai-pilots-stall',
    title: 'Why Enterprise AI Pilots Stall: Five Recurring Patterns',
    excerpt: 'The model is almost never the reason. Five failure patterns that show up repeatedly between a working demo and a production system.',
    content: `<p>A striking share of enterprise AI pilots never reach production. In our reading of why, the model is almost never the binding constraint.</p>
<h2>1. Nobody owns the definitions</h2><p>The data exists across six systems and three of them disagree about what a "customer" is. This is not an AI problem, it is a data governance problem, and it usually consumes more of the timeline than the modelling.</p>
<h2>2. The pilot proved the wrong thing</h2><p>A demo on curated sample data proves the model works on curated sample data. It says nothing about the messy scanned document, the edge case, or the 3am failure. Scope pilots around the hard cases, not the clean ones.</p>
<h2>3. Compliance was consulted last</h2><p>The system works, then legal asks where the data goes, the answer involves a third-party endpoint in another jurisdiction, and the project pauses indefinitely. Involve the blocker at design time; it is far cheaper than rebuilding.</p>
<h2>4. Nobody costed production</h2><p>Pilot volume is a rounding error. Production volume is a budget line. Projects get killed in month four by a bill nobody modelled.</p>
<h2>5. There was no kill criterion</h2><p>Without an agreed definition of failure, a pilot cannot conclude - it just quietly loses its sponsor. Agree in writing, before work starts, what result would mean stop.</p>
<h2>The pattern behind the patterns</h2><p>All five are decided before any code is written. That is why we front-load scoping, data readiness and written success criteria, and why we would rather lose a deal at the scoping stage than deliver a pilot that was never going to ship.</p>`,
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop',
    author: 'KRYIL Engineering',
    date: '2026-06-30',
    readTime: '9 min read',
    tags: ['Enterprise AI', 'Delivery', 'Post-mortem'],
  },
  {
    id: 'document-12',
    slug: 'document-extraction-llm-vs-ocr-rules',
    title: 'Document Extraction: LLM, or OCR Plus Rules?',
    excerpt: 'Language models are not automatically the right tool for pulling fields out of invoices and forms. A framework for choosing, and where the hybrid wins.',
    content: `<p>Document extraction is one of the easiest enterprise AI business cases to justify: documents per month, times minutes each, times loaded cost. The arithmetic is rarely the hard part. Choosing the approach is.</p>
<h2>Where OCR plus rules still wins</h2><p>If documents come from a small number of known senders in stable formats, a template-and-rules pipeline is cheaper, faster, fully deterministic and trivially auditable. Do not use a language model to solve a problem a regular expression already solves.</p>
<h2>Where a model earns its cost</h2><p>Layout variability is what breaks rules-based systems. Hundreds of vendors with different invoice designs, semantic fields that move, tables that span pages, handwriting, multilingual documents - these are cases where a layout-aware model generalises and a template does not.</p>
<h2>The hybrid that usually wins</h2><p>Deterministic extraction where the format is known, model-based extraction for the long tail, confidence scoring on every field, and a human review queue for anything below threshold. The target is not full automation. It is automating the confident majority and routing the rest to a person - which is also the design that survives an audit.</p>
<h2>Measure the right thing</h2><p>Per-field accuracy, not document accuracy. A document with nineteen correct fields and one wrong total is not 95% useful; it is wrong. Weight your evaluation by what the errors actually cost downstream.</p>`,
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1400&auto=format&fit=crop',
    author: 'KRYIL Engineering',
    date: '2026-06-12',
    readTime: '8 min read',
    tags: ['Document AI', 'OCR', 'Automation'],
  },
  {
    id: '7',
    slug: 'industrial-robotics-manufacturing-revolution',
    title: 'How Industrial Robotics is Revolutionizing Manufacturing',
    excerpt: 'A deep dive into the adoption of industrial robots in manufacturing and Industry 4.0 transformation.',
    content: `<p>Industrial robotics is at the heart of the manufacturing revolution, transforming production lines with automation and precision.</p><h2>Industry 4.0</h2><p>The fourth industrial revolution combines smart factories, interconnected systems, and data-driven decision making.</p><h2>Robot Types</h2><ul><li><strong>Articulated Robots:</strong> For welding, painting, and assembly.</li><li><strong>SCARA Robots:</strong> For high-speed pick-and-place operations.</li><li><strong>Collaborative Robots:</strong> Safe human-robot collaboration.</li></ul><h2>Benefits</h2><p>Increased efficiency, consistent quality, and 24/7 operation capability drive adoption across industries.</p>`,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1400&auto=format&fit=crop',
    author: 'Automation Division',
    date: '2025-12-22',
    readTime: '6 min read',
    tags: ['Robotics', 'Manufacturing', 'Industry 4.0', 'Automation'],
  },
  {
    id: '9',
    slug: 'iot-smart-cities-bangalore',
    title: 'IoT Solutions Powering Smart City Initiatives',
    excerpt: 'How Internet of Things technology is transforming cities into smarter, more connected environments.',
    content: `<p>IoT is the backbone of smart city development, connecting sensors, devices, and systems to improve urban life.</p><h2>Applications</h2><ul><li><strong>Traffic Management:</strong> Real-time signal optimization.</li><li><strong>Environmental Monitoring:</strong> Air and water quality sensors.</li><li><strong>Waste Management:</strong> Smart bin monitoring.</li></ul><h2>Benefits</h2><p>Improved efficiency, sustainability, and quality of life for citizens.</p>`,
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop',
    author: 'IoT Solutions Team',
    date: '2025-12-18',
    readTime: '5 min read',
    tags: ['IoT', 'Smart City', 'Connected Devices', 'Urban Technology'],
  },
  {
    id: '15',
    slug: 'machine-learning-predictive-maintenance',
    title: 'Machine Learning for Predictive Maintenance in Aviation',
    excerpt: 'How AI and ML algorithms are transforming aircraft maintenance practices.',
    content: `<p>Machine learning is revolutionizing aviation maintenance, enabling prediction of failures before they occur.</p><h2>Approach</h2><ul><li><strong>Data Collection:</strong> Sensors monitoring critical systems.</li><li><strong>Pattern Recognition:</strong> ML models identifying degradation patterns.</li><li><strong>Predictive Analytics:</strong> Forecasting component life.</li></ul><h2>Benefits</h2><p>Reduced downtime, lower maintenance costs, and improved safety.</p>`,
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    author: 'AI Research Division',
    date: '2025-12-06',
    readTime: '6 min read',
    tags: ['Machine Learning', 'Predictive Maintenance', 'Aviation', 'AI', 'MRO'],
  },
  {
    id: '28',
    slug: 'robotic-process-automation-enterprise',
    title: 'Implementing RPA: A Complete Enterprise Guide',
    excerpt: 'Step-by-step guide to implementing Robotic Process Automation.',
    content: `<p>RPA uses software robots to automate repetitive business processes.</p><h2>Steps</h2><ol><li>Process Assessment</li><li>Platform Selection</li><li>Pilot Project</li><li>Deployment</li><li>Scale</li></ol><h2>ROI</h2><p>40-75% reduction in processing time typically achieved.</p>`,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop',
    author: 'Enterprise Solutions Team',
    date: '2025-11-10',
    readTime: '9 min read',
    tags: ['RPA', 'Automation', 'Enterprise', 'Digital Transformation'],
  },
  {
    id: '44',
    slug: 'digital-twins-industrial-robotics',
    title: 'Digital Twins in Industrial Robotics',
    excerpt: 'A synchronised virtual model of a production cell lets you test changes, predict failures and train operators without stopping the line.',
    content: `<p>A digital twin is a virtual model of a physical system kept synchronised with it through live sensor data. In industrial robotics, that means a simulation of a work cell that reflects the real cell's current state — joint positions, cycle times, tool wear, throughput — closely enough to be worth reasoning about.</p><h2>Why It Matters on a Production Line</h2><p>The cost of experimenting on a live line is measured in downtime. A twin moves that experimentation offline. Cycle time optimisation, collision checking, layout changes and new part introduction can all be validated virtually before a single physical change is made.</p><h2>Building the Twin</h2><ul><li><strong>Geometry and kinematics:</strong> Accurate CAD and joint models of robots, tooling and fixtures.</li><li><strong>Physics:</strong> Dynamics, contact and payload behaviour at sufficient fidelity for the questions being asked.</li><li><strong>Live data:</strong> Controller telemetry, sensor feeds and MES data streamed into the model.</li><li><strong>Synchronisation:</strong> A reconciliation layer that keeps virtual and physical state aligned and flags divergence.</li></ul><h2>Divergence Is the Signal</h2><p>The most useful output of a well-built twin is often not the simulation itself but the gap between predicted and observed behaviour. When a robot's actual cycle time drifts from what the model predicts, something physical has changed — belt tension, lubrication, mechanical wear. Divergence becomes a leading indicator of maintenance need.</p><h2>Scoping It Honestly</h2><p>Twins fail when their fidelity is mismatched to their purpose. A model built to optimise cycle time does not need contact physics. A model built for collision checking does not need thermal behaviour. Decide what questions the twin must answer, then build only the fidelity those questions require.</p>`,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop',
    author: 'Automation Division',
    date: '2026-04-30',
    readTime: '7 min read',
    tags: ['Digital Twin', 'Robotics', 'Simulation', 'Manufacturing', 'Industry 4.0'],
  },
  {
    id: '45',
    slug: 'iot-predictive-maintenance-that-works',
    title: 'Building IoT Predictive Maintenance That Actually Works',
    excerpt: 'Most predictive maintenance programmes stall at the dashboard. The difference between telemetry and prediction is failure data, not sensors.',
    content: `<p>Instrumenting equipment is the easy part. Vibration, thermal and current sensors are cheap, gateways are commodity hardware, and dashboards are a solved problem. Yet most predictive maintenance programmes plateau at monitoring — plenty of data, few predictions anyone acts on.</p><h2>The Missing Ingredient</h2><p>Predicting failure requires examples of failure. A model trained on six months of healthy operation has learned what normal looks like, which supports anomaly detection but not remaining-useful-life estimation. Teams consistently underestimate how long it takes to accumulate labelled failure events, and how much value sits in historical maintenance records that were never digitised.</p><h2>A Workable Sequence</h2><ul><li><strong>Start with anomaly detection.</strong> It works from healthy data alone and delivers value while failure data accumulates.</li><li><strong>Digitise maintenance history.</strong> Past work orders are labelled failure data — usually the largest untapped asset in the plant.</li><li><strong>Instrument for the failure modes that matter.</strong> Sensor placement should follow a failure mode analysis, not convenience.</li><li><strong>Close the loop.</strong> Every maintenance action taken on a prediction must feed back as a label, or the model never improves.</li></ul><h2>Edge Versus Cloud</h2><p>High-frequency vibration data is expensive to transmit and mostly uninteresting. Extracting features at the edge — spectral peaks, RMS, kurtosis — and forwarding only those cuts bandwidth by orders of magnitude while preserving diagnostic content. Raw waveforms are worth keeping only around detected events.</p><h2>Measuring Success Correctly</h2><p>Model accuracy is the wrong headline metric. What matters is unplanned downtime avoided, maintenance labour redirected from inspection to repair, and parts consumed per operating hour. A model with modest precision that catches the expensive failures beats a sharper one that catches trivial ones.</p>`,
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1400&auto=format&fit=crop',
    author: 'IoT Solutions Team',
    date: '2026-03-25',
    readTime: '8 min read',
    tags: ['IoT', 'Predictive Maintenance', 'Industrial IoT', 'Edge Computing', 'Machine Learning'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
