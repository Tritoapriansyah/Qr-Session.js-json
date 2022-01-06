/* Codded by @Tio

credits : Tio Permana

Buat Para mastah Janga  di ketawain Soalnya masih Belajar.

SESSION BOT - BOTCAHBOTz
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Tio')}${chalk.blue.bold('Permana')}
${chalk.white.italic('TIO-String')}
${chalk.blue.italic('ℹ️  Connecting ke Whatsapp lu... Tunggu bentar.')}`);
	});

  conn.on('open', async () => {
		console.log(
			chalk.green.bold('BOTCAH-X QR Code: '),
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
		);
		await conn.sendMessage(
			conn.user.jid,
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid ,

				'*!! Ini Rahasia Jangan Sebar Kode ini ' +
					conn.user.name +
					'* !!\n\n by Tio-BOTCAHBOTz',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*!! Ini Rahasia Jangan Sebar Kode ini ' +
					conn.user.name +
					'* !!\n\n by Tio-BOTCAHBOTz',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"SALIN SESI NYA BANG"
			),
			chalk.green.bold(
				'PASTE DI KOLOM SESSI GITHUB NYA YA'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
