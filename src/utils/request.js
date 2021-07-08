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

