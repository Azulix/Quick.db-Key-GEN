const db = require("quick.db")
const code = require('@codedipper/random-code')

module.exports = {

    run: async (client, message, args) => {

        let générateur = code(45).toLowerCase()

        db.set(`premium_subs${générateur}`, client.user.id)
        message.channel.send(`Le clé premium a été générée avec succès ! \`${générateur}\``)



    },

    name: 'gen'

}


