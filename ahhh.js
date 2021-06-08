
			case 'gc10':
			case 'grup10':
			case 'group10':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka10m') {
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 10 menit grup ini akan aine buka', text)
					}, 0)
					} else if (args[0] === 'tutup10m') {
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 10 menit grup ini akan aine tutup', text)
					}, 0)
					}
			break
			case 'gc20':
			case 'grup20':
			case 'group20':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka20m') {
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 20 menit grup ini akan aine buka', text)
					}, 0)
					} else if (args[0] === 'tutup20m') {
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 20 menit grup ini akan aine tutup', text)
					}, 0)
					}
			break
			case 'gc30':
			case 'grup30':
			case 'group30':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka30m') {
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 30 menit grup ini akan aine buka', text)
					}, 0)
					} else if (args[0] === 'tutup30m') {
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 30 menit grup ini akan aine tutup', text)
					}, 0)
					}
			break
			case 'gc40':
			case 'grup40':
			case 'group40':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka40m') {
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 40 menit grup ini akan aine buka', text)
					}, 0)
					} else if (args[0] === 'tutup40m') {
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 40 menit grup ini akan aine tutup', text)
					}, 0)
					}
			break
			case 'gc50':
			case 'grup50':
			case 'group50':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka50m') {
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 50 menit grup ini akan aine buka', text)
					}, 0)
					} else if (args[0] === 'tutup50m') {
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 50 menit grup ini akan aine tutup', text)
					}, 0)
					}
			break
			case 'gc60':
			case 'grup60':
			case 'group60':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka60m') {
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 3600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '60 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 60 menit grup ini akan aine buka', text)
					}, 0)
					} else if (args[0] === 'tutup60m') {
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 3600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '60 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 60 menit grup ini akan aine tutup', text)
					}, 0)
					}
			break    
