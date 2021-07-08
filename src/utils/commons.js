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