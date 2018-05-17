const fs = require('fs')

module.exports = function (dirname, extname, callback) {
  const ext = `.${extname}`
  fs.readdir(dirname, (err, files) => {
    if (err) {
      return callback(err, null)
    }
    callback(null, files.filter(f => f.endsWith(ext)))
  })
}
