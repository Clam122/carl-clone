let {MessageEmbed} = require("discord.js");
exports.run = async (client, message) => {
  let admins = message.guild.members.filter(m => m.permissions.has("BAN_MEMBERS"));
  let mods = message.guild.members.filter(m => m.permissions.has("MUTE_MEMBERS"));
  let embed = new MessageEmbed()
    .setTitle("Mod List")
    .setDescription(`:crown: ADMINS (Ban perms):\n\n${admins.map(a => `- ${a.user.tag}`).join("\n")}\n\n:oncoming_police_car: MODS (Mute perms):\n\n ${mods.map(m => `- ${m.user.tag}`).join("\n")}`);
  message.channel.send(embed);
};


exports.help = {
  name: "stafflist",
  description: "Show admins and mods.",
  usage: "adminlist",
  category: "Moderation Actions"
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ads"],
  permLevel: "User"
};