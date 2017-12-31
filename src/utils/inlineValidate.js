import isString from 'lodash.isstring';

export const inlineValidate = str => {
  if (!isString(str)) return false;
  if (str.trim().length < 1) return false;
  return true;
};
