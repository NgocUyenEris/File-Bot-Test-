const axios = require("axios");

module.exports.config = {
    name: "uid",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "HaiPhong",
    description: "Lấy ID người dùng từ tag hoặc link Facebook.",
    commandCategory: "other",
    cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    if (args.length === 0) {
        return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
    }

    const fbAccessToken = "EAAG..."; // Thay thế bằng token hợp lệ

    if (args[0].includes("facebook.com")) {
        try {
            const url = args[0];
            const username = url.split('/').pop().split('?')[0]; // Lấy username từ link

            const response = await axios.get(`https://graph.facebook.com/${username}?fields=id&access_token=${fbAccessToken}`);
            const uid = response.data.id;

            return api.sendMessage(`UID của ${username}: ${uid}`, event.threadID, event.messageID);
        } catch (error) {
            return api.sendMessage("Không thể lấy UID từ link Facebook.", event.threadID, event.messageID);
        }
    } else {
        for (let i = 0; i < Object.keys(event.mentions).length; i++) {
            api.sendMessage(
                `${Object.values(event.mentions)[i].replace("@", "")}: ${Object.keys(event.mentions)[i]}`,
                event.threadID
            );
        }
        return;
    }
};