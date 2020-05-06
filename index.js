const { spawn } = require('child_process')
const path = require('path')

module.exports = function(source) {
  return new Promise(function(resolve, reject){
    try {
      const sh = spawn(path.join(__dirname + '/dcraw'), ['-T','-6','-c',source])
      let chunks = []
      sh.stdout.on('data', (chunk) => {
        chunks.push(chunk)
      })
      sh.stderr.on('data', (data) => {
        console.log(data.toString())
      })
      sh.on('close', () => {
        resolve(Buffer.concat(chunks))
      })
    } catch(err){
      reject(err)
    }
  })
}
