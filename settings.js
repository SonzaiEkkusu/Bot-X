//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: -" //ur yt chanel name
global.socialm = "GitHub: SonzaiEkkusu" //ur github or insta name
global.location = "Indonesia, Bogor, Jawa Barat" //ur location

//new
global.botname = '𝓢𝓸𝓷𝔃𝓪𝓲 𝓧 𝓑𝓸𝓽' //ur bot name
global.ownernumber = ['6287777334688'] //ur owner number, dont add more than one
global.ownername = '𝓢𝓸𝓷𝔃𝓪𝓲 𝓧' //ur owner name
global.websitex = "https://t.me/November2k"
global.wagc = "https://t.me/November2k"
global.themeemoji = '🪀'
global.wm = "𝓢𝓸𝓷𝔃𝓪𝓲 𝓧"
global.botscript = 'https://t.me/November2k' //script link
global.packname = "Sticker By"
global.author = "𝓢𝓸𝓷𝔃𝓪𝓲 𝓧 𝓑𝓸𝓽\n\n+6287777334688"
global.creator = "6287777334688@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6287777334688"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});