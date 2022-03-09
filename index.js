//Mau apa lu?? kalo mau run run aja gausah edit!!

const chalk = require('chalk'),
  { WAConnection, MessageType } = require('@adiwajshing/baileys'),
  fs = require('fs')
async function whatsAPP() {
  const tio = new WAConnection()
  tio.logger.level = 'warn'
  tio.version = [2, 2143, 3]
  tio.on('connecting', async () => {
    console.log(
      '' +
        chalk.green.bold('Tio') +
        chalk.blue.bold('_Permana') +
        '\n\n' +
        chalk.white.italic('TIO-Bot') +
        '\n\n' +
        chalk.blue.italic(
          '\u23F3 Menghubungkan ke Whatsapp... Tunggu bentar:-)'
        )
    )
  })
  tio.on('open', async () => {
    console.log(
      chalk.green.bold('BOTCAH-X QR Code: '),
      '' + Buffer.from(JSON.stringify(tio.base64EncodedAuthInfo()))
    )
    await tio.sendMessage(
      tio.user.jid,
      '' + Buffer.from(JSON.stringify(tio.base64EncodedAuthInfo())),
      MessageType.text
    )
    tio.user.jid.startsWith('90')
      ? await tio.sendMessage(
          tio.user.jid,
          '*!! Ini Rahasia Jangan Sebar Kode ini ' +
            tio.user.name +
            '* !!\n\n @ Tio Permana',
          MessageType.text
        )
      : await tio.sendMessage(
          tio.user.jid,
          '*!! Ini Rahasia Jangan Sebar Kode ini ' +
            tio.user.name +
            '* !!\n\n @ Tio Permana',
          MessageType.text
        )
    console.log(
      chalk.red.bold('Salin sesi ini!!!!'),
      chalk.red.bold('Paste di file session bot lu ya..')
    )
    process.exit(0)
  })
  await tio.connect()
}
whatsAPP()
