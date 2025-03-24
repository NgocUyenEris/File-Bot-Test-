module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100094920041764") {
    var aid = ["100094920041764"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag admin của bot có việc gì không ạ💢","Cậu chủ của bót đang có việc bận rồi đừng tang nữa ạ😇😇","Đừng tang admin của bót nữa nhé😞"," Thí chủ muốn đánh nhau với bot không? Tang admin nữa là bot múc luôn đấy😾😼😼","Cậu chủ của bot đang sồu ỉa đừng tang nữa mà😞😞","Cậu chủ bot ngủ rồi đừng tang nữa nhé😊"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}