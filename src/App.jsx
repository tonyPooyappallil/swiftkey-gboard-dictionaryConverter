import JSZip from 'jszip'
import ZipUpload from './components/Uploader'
import Downloader from './components/Downloader'
import { useState } from 'react'

function App () {
  const [jsonData, setJsonData] = useState([])

  const onUpload = file => {
    const new_zip = new JSZip()
    new_zip.loadAsync(file).then(async function (zipped) {
      const jsonFile = await zipped
        .file('services/sync_words.json')
        .async('text')

      const ourData = JSON.parse(jsonFile)
      const stringTerms = ourData.terms

      const mapped = stringTerms.map(
        term => `${term.slice(0, 3)}\t${term}\ten-US`
      )
      const reversed = mapped.reverse()
      reversed.push('# Gboard Dictionary version:1')
      const final = reversed.reverse()
      setJsonData(final)
    })
  }

  return (
    <>
      <div>
        <ZipUpload onUpload={onUpload}></ZipUpload>
      </div>
      <div>
        <Downloader list={jsonData}></Downloader>
      </div>
    </>
  )
}

export default App
