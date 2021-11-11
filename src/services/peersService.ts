import 'regenerator-runtime/runtime.js'
const umitToken = `&token=sandbox_c5rtke2ad3ibf61ruc9g`

export const fetchPeers = async (stockSymbol: string) => {
  const peersURL = `https://finnhub.io/api/v1/stock/peers?symbol=${stockSymbol}${umitToken}`
  try {
    const peersData: Array<string> = await fetch(peersURL).then((res) => res.json())
    return peersData
  } catch (err) {
    console.error(err)
  }
}
