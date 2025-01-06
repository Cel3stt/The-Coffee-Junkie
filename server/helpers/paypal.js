const paypal = require ('paypal-rest-sdk')

paypal.configure({
    mode : 'sandbox',
    client_id: 'AZJAI6sKYFXqLvPzsvFTutWxlya24XY2WwSBvw1AlgsoxwxzHTA-3KUhmsuc3uGrOBMs8D65oY7Shseh',
    client_secret : 'EPnRQPcTtMrdLLvBFiX2aoQIiBhGVrIl8cmnaoNqOPl5WbZJStida2NDTVEb3WfTpv7RpGpSlNU0xZWr',
})

module.exports = paypal;