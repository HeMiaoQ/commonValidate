import { REGEXP_ID_CARD } from '../regexpRules'

export default function isIDCardNo (val) {
  return REGEXP_ID_CARD.test(val)
}