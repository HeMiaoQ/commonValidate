import { REGEXP_FIXED_PHONE } from '../regexpRules'

export default function isFixedPhone (val) {
  return REGEXP_FIXED_PHONE.test(val)
}