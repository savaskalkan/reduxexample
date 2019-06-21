const accessKey = 'e3493df01942d08d2b21071a38fdc8c3'
const rootUrl = 'http://api.coinlayer.com/api/'
const list = rootUrl + 'list?access_key=' + accessKey
const live = rootUrl + 'live?access_key=' + accessKey + '&target='

export const fetchCryptoCoins = (callback) => {
  fetch(list).then(res => res.json()).then(res => {
    const list = Object.keys(res.crypto).map(key => {
      return res.crypto[key]
    })
    callback(list)
  })
}

export const fetchLiveDataRequest = (currency, callback) => {
  fetch(live + currency).then(res => res.json()).then(res => {
    callback(res)
  })
} 

export const requestLiveData = (currency, symbol, callback) => {
  fetch(live + currency + '&symbols=' + symbol).then(res => res.json()).then(res => {
    callback(res)
  })
} 

export const fetchHistoricalData = (date, symbol, currency, callback) => {
  const url = rootUrl + date + "?access_key=" + accessKey + "&symbols=" + symbol + "&target=" + currency
  fetch(url).then(res => res.json()).then(res => {
      callback(res)
  })
}