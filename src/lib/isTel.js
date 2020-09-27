import { REGEXP_TEL } from '../regexpRules'

export default function isTel (val) {
  return REGEXP_TEL.test(val)
}