module.exports.config = {
  name: "offbot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Des Bủh - Dựa trên demo của manhIT", /* vui lòng k sửa credit :) */
  description: "Tắt Bot",
  commandCategory: "Hệ thống",
  cooldowns: 0
        };

module.exports.run = async({event, api}) =>{

   const permission = ["100094920041764"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Sao lại đuổi bot :<?", event.threadID, event.messageID);

api.sendMessage("Bye! hẹn gặp lại các bạn🐸",event.threadID, () =>process.exit(0))}