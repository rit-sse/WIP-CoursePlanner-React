import _ from 'lodash';

export const inlineValidate = str => {
  if (!_.isString(str)) return false;
  if (str.trim().length < 1) return false;
  return true;
};
