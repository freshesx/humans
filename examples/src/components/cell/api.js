import citys from './test.json'

export function getCitys () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(citys)
    }, 1000)
  })
}

export function getDistrict () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(citys[0].county)
    }, 1000)
  })
}
