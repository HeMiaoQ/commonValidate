import { REGEXP_NAME } from '../regexpRules'

export default function isName (val) {
  return REGEXP_NAME.test(val)
}