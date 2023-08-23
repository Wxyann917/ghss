exports.run = {
//  usage: ["outgc"],
  usage: ["out"],
//  category: "owner",
  async: async (m, { client, args }) => {
    try {
      if (args[0]) {
        await Func.delay(2000);
        await client.sendMessage(args[0] + "@g.us", {
          text: "Never add this bot to a group without permission from the owner*\n\nFrom now on, the bot will leave this group in 3 seconds",
        });
        await Func.delay(3000);
        await client.groupLeave(args[0] + "@g.us");
        await client.reply(m.sender, "Success out of the kidnapping group", m);
      } else {
        await client.sendMessage(m.chat, {
          text: "See you, the bot will exit in 3 seconds",
        });
        await Func.delay(3000);
        await client.groupLeave(m.chat);
      }
    } catch (e) {
      client.reply(m.chat, "Maaf, Terjadi Kesalahan", m);
    }
  },
  owner: true,
};