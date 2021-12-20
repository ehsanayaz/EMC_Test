export const omitInvalid = (obj) => {
  Object.keys(obj)
    .filter((k) => obj[k] === null || obj[k] === undefined)
    .forEach((k) => delete obj[k]);
  return obj;
};
