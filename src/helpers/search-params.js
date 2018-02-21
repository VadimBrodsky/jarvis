const getParams = urlString => new URLSearchParams(urlString);
const toQueryString = ob => new URLSearchParams(ob).toString();

const getPlayerParams = (configKeys, params) =>
  Array.from(params.keys())
    .filter(key => !configKeys.includes(key))
    .reduce(
      (acc, filterdKey) => ({ ...acc, [filterdKey]: params.get(filterdKey) }),
      {},
    );

export { getParams, toQueryString, getPlayerParams };
