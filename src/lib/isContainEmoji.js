import { REGEXP_EMOJI } from '../regexpRules'

export default function isContainEmoji (val) {
  return REGEXP_EMOJI.test(val)
}