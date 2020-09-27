import { REGEXP_PHONE } from '../regexpRules'

export default function isPhone (val) {
  return REGEXP_PHONE.test(val)
}