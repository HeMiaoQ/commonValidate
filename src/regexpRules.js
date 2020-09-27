// 是否是Emoji
export const REGEXP_EMOJI = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/
// 身份证号
export const REGEXP_ID_CARD = /^\d{15}$|^\d{17}[\dxX]$/
// 姓名，支持中/英文名
export const REGEXP_NAME = /^[\u4e00-\u9fa5a-zA-Z]+·?[\u4e00-\u9fa5a-zA-Z]+$/
// 座机和手机号
export const REGEXP_PHONE = /^(\d{3,4}-\d{7,8}(-\d{3,4})?)|(1\d{10})$/
// 纯中文
export const REGEXP_PURE_CHINESE = /^[\u4e00-\u9fa5]+$/
// 手机号
export const REGEXP_TEL = /^1\d{10}$/
// 邮箱
export const REGEXP_MAIL = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
// 固定电话，可带分机号
export const REGEXP_FIXED_PHONE = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/

export default {
  REGEXP_EMOJI,
  REGEXP_ID_CARD,
  REGEXP_NAME,
  REGEXP_PHONE,
  REGEXP_PURE_CHINESE,
  REGEXP_TEL,
  REGEXP_MAIL,
  REGEXP_FIXED_PHONE
}