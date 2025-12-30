import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>AI Literacy Tutorial</h1>
      <p>Welcome. This site will teach core AI literacy skills and includes a game.</p>
    </div>
  )
}

function Modules() {
  return (
    <div>
      <h1>Modules</h1>
      <p>Coming soon: short lessons with quick checks.</p>
    </div>
  )
}

function Game() {
  return (
    <div>
      <h1>Game</h1>
      <p>Coming soon: scenario-based AI literacy game.</p>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/modules">Modules</Link>
        <Link to="/game">Game</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  )
}
