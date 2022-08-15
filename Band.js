const {db} = require('./db');
const {DataTypes} = require('sequelize');

// TODO - define the Band model
let Band = db.define('Band', {
    //The Musician model should have name and instrument properties, both of which are strings.

    name: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING
    }
})

module.exports = {Band};