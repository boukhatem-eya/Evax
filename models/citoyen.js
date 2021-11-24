const mongoose = require("mongoose");
const CitoyenSchema = new mongoose.Schema({
    cinCitoyen:{
        type: Number,
        required:true,
        unique : true,
    },
    dateNaisCitoyen: {
        type: String,
        required: true,
    },
    prenomCitoyen: {
        type: String,
        required: true,
    },
    nomCitoyen: {
        type: String,
        required: true,
    },
    sexeCitoyen: {
        type: String,
        required: true,
    },
    telephoneCitoyen: {
        type: Number,
        required: true,
    },
    compagneCitoyen: {
        type: String,
        required: true,
    },
    populationCitoyen: {
        type: String,
        required: true,
    },
    gouvernoratCitoyen: {
        type: String,
        required: true,
    },
    delegationCitoyen: {
        type: String,
        required: true,
    },
    brasCitoyen: {
        type: String,
        required: true,
    },
    lotCitoyen: {
        type: String,
        required: true,
    },
    covidCitoyen: {
        type: String,
        required: true,
    },
});
module.exports = Citoyen = mongoose.model('Citoyen',CitoyenSchema)