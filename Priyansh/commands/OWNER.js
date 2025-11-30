 const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") ||
     react.includes("virat") || 
react.includes("owner")) {
		var msg = {
				body: " 👀__★𝐎𝐖𝐍𝐄𝐑 ✯ ★彡[𝐕𝐢𝐫𝐚𝐭 𝐬𝐚𝐢𝐧𝐢]彡★...❤️__●__𝐅𝐁 𝐋𝐈𝐍𝐊-https://www.facebook.com/profile.php?id=61582547945474",attachment: fs.createReadStream(__dirname + `/noprefix/owner.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
