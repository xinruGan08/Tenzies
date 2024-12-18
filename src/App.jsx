import Die from './components/Die'

export default function App() {

  function roll() {
    return Math.floor(Math.random() * 6) + 1
  }

  return (
    <main>
      <div>
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
        <Die value={roll()} />
      </div>
    </main>
  )
}