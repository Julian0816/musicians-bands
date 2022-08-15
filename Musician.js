const {db} = require('./db');
const {DataTypes} = require('sequelize');

// TODO - define the Musician model
let Musician = db.define('Musician', {
    //The Musician model should have name and instrument properties, both of which are strings.

    name: {
        type: DataTypes.STRING,
    },
    instrument: {
        type: DataTypes.STRING
    }
})

module.exports = {Musician};