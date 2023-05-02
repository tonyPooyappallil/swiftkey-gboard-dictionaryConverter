import data from '../src/conv/data.json';
import Worker from './components/Worker';

function App() {
  const ourData= JSON.parse(JSON.stringify(data))
const stringTerms=ourData.terms

const mapped=stringTerms.map(term=>`${term.slice(0,3)}\t${term}\ten-US`)
const reversed=mapped.reverse()
reversed.push("# Gboard Dictionary version:1")
const final= reversed.reverse()

  return (
    <>
      <div>
        <Worker list={final}></Worker>
      </div>
     
    </>
  )
}

export default App
