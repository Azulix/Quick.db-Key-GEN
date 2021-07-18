const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {

    run: async (client, message, args) => {

        let vérif1 = db.get(`premium_${message.author.id}`)
        if(vérif1 === null){
            if(args[0] === null)return message.channel.send('Veuillez envoyer votre clé premium !')
        let prem = db.get(`premium_subs${args[0]}`, client.user.id)
        if(prem === null){
            let used = db.get(`used${args[0]}premiumsubs`)
            if(used === null) {
                return message.channel.send(`La clé premium \`${args[0]}\` est invalide !`)
            }else return message.channel.send(`La clé premium \`${args[0]}\` a déjà été utilisé !`)
        }else{
        db.delete(`premium_subs${args[0]}`)
        db.set(`premium_${message.author.id}`, client.botx)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Premium`)
        .setDescription(`
        La clé premium : \`${args[0]}\`
        Votre identifiant : \`${message.author.id}\`
          
        **La clé premium  a été ajouté à ce compte avec succès !**`)
        .setColor("#000c63")
        .setThumbnail("https://cdn.discordapp.com/attachments/846123838496309358/866361517586120725/15575595-conception-vip-symbole-vip-signe-personne-trC3A8s-importante-.png")
        .setFooter("Azulix-Premium 1,99€"))
        }
        db.set(`used${args[0]}premiumsubs`, client.user.id)
    }else return message.channel.send(`${message.author}, vous êtes déjà premium !`)
    },
    name: 'key'
}


