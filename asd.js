case '18+':
                   anu = await fetchJson(`https://raw.githubusercontent.com/qisyana/asmaulhusna/main/18.json`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   teks = `${anu.text}`
                   buffer = await getBuffer(anu.image)
	                 client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                   break
