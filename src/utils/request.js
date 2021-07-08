import axios from 'axios'

export const requestApi = async (link, method) => {
  let url = process.env.REACT_APP_BASE_URL
  if (link) {
    url += link
  }

  const sendData = {
    method,
    url
  }

  try {
    const response = await axios(sendData)
    const data = response.data
    return data
  } catch (e) {
    if (e.response.status === 401) {
      try {
        const response = await axios(sendData)
        const data = response.data
        return data
      } catch (e) {
          return e
      }
    } else {
      return {
        success: false,
        message: e.response.data && e.response.data.message ? e.response.data.message : 'Error Network',
        response: e.response,
        request: e.request
      }
    }
  }
}

export const globalReplaceAll = (str, find, replace) => {
  if (str && find && replace) {
    return str.split(find).join(replace)
  }
}

export const splitUrl = (url, defaultParam) => {
  if (url) {
    const spli2 = url.split('&').join()
    const spli3 = spli2.split('?')
    const b = spli3.slice(1, spli3.length)
    const c = b[0].split(',')
    const d = c.map((x) => {
      const splitEqual = x.split('=')
      return { label: splitEqual[0], value: splitEqual[1] }
    })
    let queryValue = {}
    for (let i = 0; i < d.length; i++) {
      queryValue = { ...queryValue, [d[i].label]: d[i].value ? globalReplaceAll(d[i].value, '-', ',') : d[i].value }
    }
    return queryValue
  } else {
    return defaultParam
  }
}