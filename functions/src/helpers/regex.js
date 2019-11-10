import { REGEX } from './constants';

export default (str, type) => REGEX[type].test(str);
