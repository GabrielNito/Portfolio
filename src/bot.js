require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, ActivityType, WebhookClient } = require('discord.js');

const commands = [];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ]
});

client.on('ready', (c) => {
  console.log(`🤖 ${c.user.username} is ready.`);

  client.user.setActivity({
    name: "GitHub",
    type: ActivityType.Watching,
    url: "https://github.com/GabrielNito"
  })
  client.user.setPresence({
    activities: [
      {
        name: 'with discord.js'
      }
    ]
  });
});



function randomGif() {
  const gifs = [
    'https://i.pinimg.com/originals/e1/85/18/e18518c6d24257c6fb02e3c95a862d85.gif',
    'https://media.tenor.com/rS-u5lIUQWsAAAAC/anime-coding.gif',
    'https://i.pinimg.com/originals/f0/f0/d9/f0f0d932d6e39c7af5aa305cbd8da735.gif',
    'https://media.tenor.com/cX92mi1p-NYAAAAd/coding-anime.gif',
    'https://i.pinimg.com/originals/29/12/98/29129842108c46684a26c427741db074.gif'
  ]

  const randNum = Math.floor(Math.random() * 5);

  return gifs[randNum]
}

const portfolio = new WebhookClient({
  id: "1145552042715254834",
  token: "kF5kqJGji8-yKn2bL2fih3noHKqFrv_vU8853W4KpvLlBxzTEhvAqOTxtPFFYxhrTZl0"
});
const tabelaperiodica = new WebhookClient({
  id: "1145710367494918185",
  token: "BBqdWU7GgyyVWQt0LCT5F7jJR8gcDuwY43C7LG_qX842-8FDpZ_IO_pQWSJYAbMegNKH"
});

function camalize(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function criaEmbed(url, title, description, user, userURL, iconURL) {

  const embed = new EmbedBuilder(url, title, description, user, iconURL)
    .setTitle(`New commit in **${title[0]} - ${title[1]}**`)
    .setDescription(`There was another commit in __${title[0]}__ - __${title[1]}__ by __${user}__`)
    .setColor(0xBF94E4)
    .setImage(randomGif())
    .setThumbnail(iconURL)
    .addFields(
      {
        name: 'Description',
        value: `*${description}*`,
      },
      {
        name: 'Repository',
        value: `*${url}*`,
        inline: true
      },
      {
        name: 'User',
        value: `*${userURL}*`,
        inline: true
      },
    )

  let channel = eval(camalize(title[0]));
  channel.send({ embeds: [embed] })
}


function detectaMensagem() {
  client.on('messageCreate', async (message) => {
    if (message.channel.id === "1145521062499602623") {
      const x = message.embeds
      const messageEmbed = x[0]
      const { url, type, title, description, color, author } = messageEmbed;
      const { name, urlUser, iconURL, proxyIconURL } = author;

      const slicedTitle = title.slice(1, 21).split(':')

      const descriptionX = description.split(') ')
      const descriptionY = descriptionX[1]
      const XSplit = descriptionX[0].split(']')
      const YSplit = descriptionY.split(' - ')
      const finalDescription = `Commit: [${YSplit[0]}]${XSplit[1]})`

      const splitedURL = url.split('/commit').shift()

      userURL = `[${YSplit[1]}](https://github.com/${YSplit[1]})`

      criaEmbed(splitedURL, slicedTitle, finalDescription, name, userURL, iconURL);
    }
  })
}

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

});

detectaMensagem();
client.login(process.env.BOT_TOKEN);
