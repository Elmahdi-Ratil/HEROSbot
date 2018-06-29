const Discord = require('discord.js');
const client = new Discord.Client();






client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);
    client.user.setGame('Mido King');
});
client.on('voiceStateUpdate', (o, n) => {
        let newUserChannel = n.voiceChannel
    let oldUserChannel = o.voiceChannel

    var channel = client.channels.get("اي دي الروم الي يرسل فيه");
        let cha = n.guild.channels.get("اي دي الروم الصوتي الي يستجيب منه");
        
          let mute1 = o.serverMute;
  let mute2 = n.serverMute;
  

  let deafen1 = o.serverDeaf;
  let deafen2 = n.serverDeaf;

    if(mute1 === false && mute2 === true) return;
    if(mute1 === true && mute2 === false) return;
    if(deafen1 === false && deafen2 === true) return;
    if(deafen1 === true && deafen2 === false) return;
    

    channel.send(`Join Room ${n.displayName}`)

})

bot.login(process.env.BOT_TOKEN);
