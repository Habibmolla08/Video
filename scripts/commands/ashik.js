const fs = require("fs");
module.exports = {
  config:{
	name: "ashik",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("😭")==0 || body.indexOf("🙄")==0 || body.indexOf("😭")==0 || body.indexOf("ashik🥺")==0) {
		var msg = {
				body: "কি চাউ তুমি তোমাকে ছেরে অনেক দূরে চলে যাই?😅\n\nBOSS~ASHIK",
				attachment: fs.createReadStream(__dirname + `/Nayan/1730394029542.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }
