const mongoose = require('mongoose');
const config = require('config');
const { Events } = require('discord.js');


module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setPresence({
            activities: [{ name: 'with Discord.js', type: 'PLAYING' }],
            status: 'online'
        });
        await mongoose.connect(`${config.get("mongodb.uri")}/${config.get("mongodb.dbName")}`);
        console.log('MongoDB connected');
    },
};