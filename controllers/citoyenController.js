var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Citoyen = require('../models/citoyen');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// CREATES A NEW USER
router.post('/', function (req, res) {
    //const { cin, email } = req.body
    Citoyen.create({
            cinCitoyen:req.body.cinCitoyen,
            dateNaisCitoyen:req.body.dateNaisCitoyen,
            prenomCitoyen: req.body.prenomCitoyen,
            nomCitoyen: req.body.nomCitoyen,
            sexeCitoyen:req.body.sexeCitoyen,
            telephoneCitoyen:req.body.telephoneCitoyen,
            compagneCitoyen: req.body.compagneCitoyen,
            populationCitoyen:req.body.populationCitoyen,
            gouvernoratCitoyen: req.body.gouvernoratCitoyen,
            delegationCitoyen: req.body.delegationCitoyen,
            brasCitoyen:req.body.brasCitoyen,
            lotCitoyen:req.body.lotCitoyen,
            covidCitoyen: req.body.covidCitoyen,
        },
        function (err, citoyen) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(citoyen);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Citoyen.find({}, function (err, citoyens) {
        if (err) return res.status(500).send("There was a problem finding the citoyens.");
        res.status(200).send(citoyens);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Citoyen.findById(req.params.id, function (err, citoyen) {
        if (err) return res.status(500).send("There was a problem finding the citoyen.");
        if (!citoyen) return res.status(404).send("No citoyen found.");
        res.status(200).send(citoyen);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Citoyen.findByIdAndDelete(req.params.id, function (err, citoyen) {
        if (err) return res.status(500).send("There was a problem deleting the citoyen.");
        res.status(200).send(citoyen);
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
     let id = req.params.id;
    Citoyen.findByIdAndUpdate(id, req.body, {new: true}, function (err, citoyen) {
        if (err) return res.status(500).send("There was a problem updating the citoyen.");
        res.status(200).send(citoyen);
    });
});


module.exports = router;
