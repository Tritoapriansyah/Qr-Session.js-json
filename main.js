const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
  } = require('@adiwajshing/baileys'),
  fs = require('fs'),
  { banner, start, success } = require('./lib/functions'),
  { color } = require('./lib/color')
require('./index.js')
nocache('./index.js', module => console.log( ${module} + ' Telah Di Update\u2713')
)
const starts = async (kontol = new WAConnection()) => {
  kontol.logger.level = 'warn'
  kontol.version = [2, 2143, 8]
  kontol.browserDescription = ['Tio Official', 'safari', 'windows 8']
  console.log(banner.string)
  kontol.on('qr', () => {
    console.log(
      color('[', 'white'),
      color('!', 'red'),
      color(']', 'white'),
      color(' Scan bang')
    )
  })
  fs.existsSync('./session.json') && kontol.loadAuthInfo('./session.json')
  kontol.on('connecting', () => {
    start('2', 'Connecting...')
  })
  kontol.on('open', () => {
    success('2', 'Connected')
  })
  await kontol.connect({ timeoutMs: 30000 })
  fs.writeFileSync(
    './session.json',
    JSON.stringify(kontol.base64EncodedAuthInfo(), null, '\t')
  )
  kontol.on('chat-update', async (mek) => {
    require('./index.js')(kontol, mek)
  })
}
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
