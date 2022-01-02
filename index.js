/* Codded by @Tio

credits : Tio Permana

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - BotcahX
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('TIO')}${chalk.blue.bold('CROT')}
${chalk.white.italic('TIO-SERString')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
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

				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\n ʙʏ Tio',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\n ʙʏ Tio',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"SALIN SESI NYA BANH"
			),
			chalk.green.bold(
				'PASTE DI KOLOM GITHUB NYA YA'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
