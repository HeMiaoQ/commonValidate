import { REGEXP_MAIL } from '../regexpRules'

export default function isMail (val) {
  return REGEXP_MAIL.test(val)
}