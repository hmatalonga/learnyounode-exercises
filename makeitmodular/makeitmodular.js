const mymodule = require('./mymodule')

// check if argument is provided
if (process.argv < 4) return

const dirname = process.argv[2]
const ext = process.argv[3]

mymodule(dirname, ext, (err, files) => {
  if (err) throw err
  files.forEach(f => console.log(f))
})
