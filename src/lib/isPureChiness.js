import { REGEXP_PURE_CHINESE } from '../regexpRules'

export default function isPureChinese (val) {
  return REGEXP_PURE_CHINESE.test(val)
}
