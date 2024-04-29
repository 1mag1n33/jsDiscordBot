const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Sends a virtual hug to another user.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to hug.')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        await interaction.reply(`*Hugs ${user} tightly*`);
    },
};
