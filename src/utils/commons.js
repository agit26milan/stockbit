export const handleParamUrl = (url, params) => {
    if (params) {
      let url2 = url
      Object.keys(params).map((key, index) => {
        if (params[key] && params[key] !== '') {
          url2 += `${index === 0 ? '?' : '&'}${key}=${params[key]}`
        }
      })
      return url2
    } else {
      return url
    }
  }

  export const isBottomPage = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 10
  }

  export const filterName = (name, str) => {
    var pattern = str.split("").map((x)=>{
        return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    return name.match(regex);
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