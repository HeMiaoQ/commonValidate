# lib-validate
A validation library written by javascript.  

## 安装
`npm i lib-validate`

## 使用
```
import validate from 'lib-validate'

validate.isTel('123') // false
validate.isTel('13566668888') // true
validate.REGEXP_TEL.test('18588889999') // true
```

## API

### 语法
```javascript
// 使用校验方法
validate.methodName(val)
// 使用正则表达式
validate.regExpName.test(val)
```
### 参数  
|名称|类型|是否必传|描述|
|:----:|:----:|:----:|:----:|
|val|String|是|需要校验的值|
  
### 返回值  
|类型|是否必传|描述|
|:----:|:----:|:----:|
|Boolean|是|是否符合校验规则|
  
### API
|方法名称(methodName)|描述|对应正则表达式(regExpName)|
|:----|:----|:----|
|isContainEmoji|校验是否含有Emoji|REGEXP_EMOJI|
|isIDCardNo|校验是否为正确的身份证格式|REGEXP_ID_CARD|
|isMail|校验是否为正确的邮件地址格式|REGEXP_NAME|
|isName|校验是否为正确的姓名格式，支持中/英文名|REGEXP_PHONE|
|isPureChinese|校验是否为纯中文|REGEXP_PURE_CHINESE|
|isPhone|校验是否为正确的电话格式，包含手机号、带区号的固定电话|REGEXP_TEL|
|isTel|校验是否为正确的手机号|REGEXP_MAIL|
|isFixedPhone|校验是否为正确的固定电话|REGEXP_FIXED_PHONE|
