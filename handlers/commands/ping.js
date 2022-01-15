const { Client, Message } = require("discord.js");

module.exports = {
    name: `ping`,
    description: `Ping Command`,
    alliases: [],

        /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     * @param {String} prefix 
     */

    async execute(bot, message, parts , prefix) {
        message.reply({
            content: `Der BOT Ping is  \`${Date.now() - message.createdTimestamp}ms\`\nThe APIs Ping Is  \`${bot.ws.ping}ms\``
        })
    }
}