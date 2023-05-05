import data from './data.json'
// data from './data.json'

const ourData = JSON.parse(JSON.stringify(data))
// console.log("ourData",ourData.terms);
const stringTerms = ourData.terms
const mapped = stringTerms
  .map(term => `${term.slice(0, 3)}  ${term} en-IN`)
  .join('\n')
// const mapped=stringTerms.map(term=>`${term} \n`)

// console.log('mapped',mapped.map(item=>item.replace(",","    en-IN")));
console.log('mapped', mapped)
