import regexpRules from './regexpRules'

function getLib () {
  const libContext = require.context('./lib', false, /\.js$/)
  const chunks = libContext.keys().reduce((chunks, key) => {
    return Object.assign(chunks, { [key.replace(/(^.*\/)|(\.js$)/g, '')]: libContext(key).default })
  }, {})
  return chunks
}

const version = require('../package.json').version

const validator = {
  version,
  ...regexpRules,
  ...getLib()
}

export default validator