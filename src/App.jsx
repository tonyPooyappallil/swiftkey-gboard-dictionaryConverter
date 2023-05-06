import JSZip from 'jszip'
import ZipUpload from './components/Uploader'
import Downloader from './components/Downloader'
import { useState } from 'react'

function App() {
  const [stringTerms, setStringTerms] = useState([])
  const [language, setLanguage] = useState("")

  const onUpload = file => {
    const new_zip = new JSZip()
    new_zip.loadAsync(file).then(async function (zipped) {
      const jsonFile = await zipped
        .file('services/sync_words.json')
        .async('text')

      const ourData = JSON.parse(jsonFile)
      const stringTerms = ourData.terms
      setStringTerms(stringTerms)

    })
  }
  const mapped = stringTerms.map(
    term => `${term.slice(0, 3)}\t${term}\t${language}`
  )
  const reversed = mapped.reverse()
  reversed.push('# Gboard Dictionary version:1')
  const final = reversed.reverse()
  return (
    <>
      <div>
        <ZipUpload onUpload={onUpload}></ZipUpload>
      </div>
      <div>
        <label>Choose the language:</label>
        <select onChange={(e) => {
          console.log("e", e);
          setLanguage(e.target.value)
        }}
        >
          <option value="">All Language</option>
          <option value="en-IN">Indian English "en-IN"</option>
          <option value="en-US">US English "en-US"</option>
        </select>
      </div>
      <div>
        <Downloader list={final}></Downloader>
      </div>
    </>
  )
}

export default App
