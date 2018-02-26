const urlParams = (urlString = window.location.search) => {
  try {
    return urlString
      .split('?')[1]
      .split('&')
      .reduce((acc, keyValStr) => {
        const [key, val] = keyValStr.split('=');
        acc[key] = val;
        return acc;
      }, {});
  } catch (e) {
    return {};
  }
};

const toQueryString = (obj) =>
  Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');

const filterPlayerParams = (configKeys, params) =>
  Object.keys(params)
    .filter((key) => !configKeys.includes(key))
    .reduce((acc, filterdKey) => ({ ...acc, [filterdKey]: params[filterdKey] }), {});

export { urlParams, toQueryString, filterPlayerParams };
