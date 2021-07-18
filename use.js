const db = require("quick.db")
const code = require('@codedipper/random-code')

module.exports = {

    run: async (client, message, args) => {

        let prem = db.get(`premium_subs${args[0]}`, client.user.id)
        if(prem === null){
            message.channel.send('Invalide')
        }else message.channel.send('Valide')
		db.delete(`premium_subs${args[0]}`)
		console.log(`La clé ${args[0]} a été utlisé avec succès`)
        
      


    },



    name: 'use'

}


