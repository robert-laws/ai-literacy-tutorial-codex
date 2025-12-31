import { Routes, Route, Link, NavLink } from 'react-router-dom'
import scenarios from '../content/game/scenarios.json'

const modules = [
  {
    id: 1,
    title: 'What Is AI?',
    objectives: [
      'Define AI in plain language.',
      'Distinguish rules-based vs. learned systems.',
      'Identify everyday AI examples.',
    ],
    concepts: [
      'AI vs. traditional software',
      'Machine learning basics',
      'Narrow vs. general AI',
      'Prediction vs. decision',
    ],
    example:
      'Compare a programmed calculator vs. a spam filter that learns from labeled emails.',
    mistake:
      'Assuming all AI “thinks” like humans rather than following statistical patterns.',
    quickCheck: [
      { q: 'What makes an AI system “learn”?', a: 'It adjusts parameters based on data/feedback.' },
      { q: 'What is narrow AI?', a: 'An AI built for a specific task (e.g., translation).' },
      { q: 'Is a thermostat AI?', a: 'Usually no—fixed rules, no learning.' },
    ],
    disclosure:
      'Always state when AI tools informed your work; cite tool name/version, date, and your prompts.',
  },
  {
    id: 2,
    title: 'Data & Bias',
    objectives: [
      'Explain training data role.',
      'Identify bias sources.',
      'Describe how to mitigate bias.',
    ],
    concepts: [
      'Datasets and labels',
      'Sampling bias',
      'Representation',
      'Feedback loops',
    ],
    example:
      'Image classifier trained mostly on daylight photos underperforms at night; balanced data improves results.',
    mistake:
      'Believing more data alone fixes bias without considering representation quality.',
    quickCheck: [
      { q: 'What is sampling bias?', a: 'When collected data misrepresents the target population.' },
      { q: 'One mitigation?', a: 'Balance data across key attributes.' },
      { q: 'Feedback loop example?', a: 'Biased predictions influence future data collection.' },
    ],
    disclosure:
      'Note dataset provenance if known; when reporting results, describe data limits and cite sources.',
  },
  {
    id: 3,
    title: 'AI Outputs & Reliability',
    objectives: [
      'Evaluate AI-generated content.',
      'Identify hallucinations.',
      'Apply verification steps.',
    ],
    concepts: [
      'Confidence vs. correctness',
      'Hallucinations',
      'Retrieval vs. generation',
      'Verification workflows',
    ],
    example:
      'Chatbot provides a fabricated citation; student cross-checks in library database and replaces with real source.',
    mistake:
      'Trusting confident-sounding outputs without independent verification.',
    quickCheck: [
      { q: 'What is a hallucination?', a: 'AI outputs that are fabricated or unsupported.' },
      { q: 'First verification step?', a: 'Check against trusted sources.' },
      { q: 'Does tone indicate accuracy?', a: 'No—style is not evidence.' },
    ],
    disclosure:
      'Mark AI-generated text; cite checked sources, not the hallucinated ones; include your verification notes.',
  },
  {
    id: 4,
    title: 'Attribution & Academic Integrity',
    objectives: [
      'Describe when AI assistance must be disclosed.',
      'Format citations.',
      'Differentiate permissible vs. impermissible use.',
    ],
    concepts: [
      'Institutional policies',
      'Citation formats for AI',
      'Collaboration boundaries',
      'Originality',
    ],
    example:
      'Student uses AI to brainstorm outline, then cites the tool in acknowledgments and marks AI-assisted sections.',
    mistake: 'Omitting AI disclosure because “I edited it later.”',
    quickCheck: [
      { q: 'When must AI use be disclosed?', a: 'Whenever AI meaningfully contributed to ideas or wording.' },
      { q: 'What belongs in an AI citation?', a: 'Tool name/version, date, prompt context.' },
      { q: 'Is submitting AI-written code as your own allowed?', a: 'Typically no—check course policy.' },
    ],
    disclosure:
      'Follow course policy; use consistent citation style (e.g., APA/MLA) for AI tools; keep prompt logs.',
  },
  {
    id: 5,
    title: 'Privacy & Safety',
    objectives: [
      'Identify sensitive information.',
      'Apply safe prompting.',
      'Understand data retention risks.',
    ],
    concepts: ['PII/PHI', 'Prompt safety', 'Data retention and model training', 'Access controls'],
    example:
      'Avoid entering classmates’ emails into a public AI tool; instead, use placeholders or local tools.',
    mistake: 'Sharing sensitive data assuming the tool “forgets.”',
    quickCheck: [
      { q: 'What is PII?', a: 'Personally identifiable information.' },
      { q: 'Safe alternative to real names?', a: 'Use placeholders or anonymized data.' },
      { q: 'Do all tools retrain on your prompts?', a: 'No—varies by provider; check policy.' },
    ],
    disclosure:
      'Note when data was anonymized; state if AI tool retains prompts; cite provider privacy policy if referenced.',
  },
  {
    id: 6,
    title: 'Responsible Use in Coursework',
    objectives: [
      'Choose appropriate AI use cases.',
      'Structure prompts ethically.',
      'Reflect on impact.',
    ],
    concepts: [
      'Task fit (ideation vs. final work)',
      'Guardrails in prompts',
      'Reflection logs',
      'Collaboration etiquette',
    ],
    example:
      'Student uses AI to draft study questions, then manually writes answers and documents AI’s role.',
    mistake: 'Using AI for graded deliverables without understanding allowed scope.',
    quickCheck: [
      { q: 'Good use case example?', a: 'Brainstorming study questions.' },
      { q: 'Guardrail in a prompt?', a: '“Do not fabricate sources—if unsure, say so.”' },
      { q: 'Why keep a reflection log?', a: 'To track how AI influenced your work and ensure integrity.' },
    ],
    disclosure:
      'Document allowed vs. disallowed uses; cite AI contributions; include your own verification/reflection notes.',
  },
]

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">AI Literacy Tutorial</p>
          <h1>Learn to question, verify, and credit AI.</h1>
          <p className="lead">
            Short, focused modules and an interactive scenario game help students
            build accuracy, attribution, and privacy habits for real coursework.
          </p>
          <div className="hero-actions">
            <Link className="primary" to="/modules">
              Start the modules
            </Link>
            <Link className="secondary" to="/game">
              Play scenario game
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <h2>What you will practice</h2>
          <ul className="pill-list">
            <li>Spotting AI hallucinations</li>
            <li>Citing tools transparently</li>
            <li>Protecting sensitive data</li>
            <li>Choosing the right use case</li>
          </ul>
          <div className="stats">
            <div>
              <strong>6</strong>
              <span>Modules</span>
            </div>
            <div>
              <strong>10</strong>
              <span>Scenarios</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Score pillars</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-section">
        <header>
          <h2>How the site works</h2>
          <p>Each module takes 10–15 minutes and ends with a quick check.</p>
        </header>
        <div className="info-grid">
          <article>
            <h3>Module template</h3>
            <p>Overview, objectives, core concepts, worked example, common mistake, and a 3-question check.</p>
          </article>
          <article>
            <h3>Disclosure guidance</h3>
            <p>Every lesson ends with clear rules for citing AI tools and logging prompts.</p>
          </article>
          <article>
            <h3>Scenario feedback</h3>
            <p>Game choices immediately show how they affect Accuracy, Attribution, and Privacy scores.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

function Modules() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Modules</h1>
        <p>
          Six short lessons aligned to the AI literacy plan. Each module keeps
          a consistent template for quick learning and recall.
        </p>
      </header>
      <div className="module-grid">
        {modules.map((module) => (
          <article className="module-card" key={module.id}>
            <div className="module-title">
              <span>Module {module.id}</span>
              <h2>{module.title}</h2>
            </div>
            <div className="module-section">
              <h3>Learning objectives</h3>
              <ul>
                {module.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>
            <div className="module-section">
              <h3>Core concepts</h3>
              <div className="tag-list">
                {module.concepts.map((concept) => (
                  <span key={concept}>{concept}</span>
                ))}
              </div>
            </div>
            <div className="module-section">
              <h3>Worked example</h3>
              <p>{module.example}</p>
            </div>
            <div className="module-section">
              <h3>Common mistake</h3>
              <p>{module.mistake}</p>
            </div>
            <div className="module-section">
              <h3>Quick check</h3>
              <ol>
                {module.quickCheck.map((item) => (
                  <li key={item.q}>
                    <strong>{item.q}</strong>
                    <span>{item.a}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="module-section disclosure">
              <h3>Disclosure &amp; citation</h3>
              <p>{module.disclosure}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Game() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>AI Scenario Challenge</h1>
        <p>
          Ten short scenarios. Choose the response that best protects accuracy,
          attribution, and privacy. Immediate feedback keeps the stakes clear.
        </p>
      </header>

      <section className="game-layout">
        <div className="score-card">
          <h2>Scoring dimensions</h2>
          <ul>
            <li>
              <strong>Accuracy</strong>
              <span>Verify facts, avoid hallucinations.</span>
            </li>
            <li>
              <strong>Attribution</strong>
              <span>Credit tools, cite prompts, respect policies.</span>
            </li>
            <li>
              <strong>Privacy</strong>
              <span>Protect sensitive or personal information.</span>
            </li>
          </ul>
          <p className="score-note">
            Each choice adjusts one or more dimensions by +1, 0, or -1.
          </p>
        </div>

        <div className="scenario-stack">
          {scenarios.map((scenario) => (
            <article className="scenario-card" key={scenario.id}>
              <div className="scenario-header">
                <span>Scenario {scenario.id}</span>
                <h2>{scenario.title}</h2>
              </div>
              <p className="scenario-text">{scenario.scenario}</p>
              <div className="choice-list">
                {scenario.choices.map((choice) => (
                  <div className="choice" key={choice.text}>
                    <h3>{choice.text}</h3>
                    <div className="delta-row">
                      {Object.entries(choice.deltas).map(([key, value]) => (
                        <span key={key} data-positive={value > 0} data-negative={value < 0}>
                          {key}: {value > 0 ? `+${value}` : value}
                        </span>
                      ))}
                    </div>
                    <p>{choice.feedback}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
          <span>AI Literacy Tutorial</span>
          <p>Clear guidance for learning with AI.</p>
        </div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/modules">Modules</NavLink>
          <NavLink to="/game">Game</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>Built for students: accuracy, attribution, and privacy first.</p>
        <span>Use the modules with your course policy.</span>
      </footer>
    </div>
  )
}
