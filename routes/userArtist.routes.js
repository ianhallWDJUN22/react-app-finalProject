const router = require('express').Router();
const UserArtist = require('../models/UserArtist.model');
const Show = require('../models/Show.model')
const { default: mongoose } = require('mongoose');

router.get('/artist/:artistId', (req, res, next) => {
    const { artistId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(artistId)){
        res.status(400).json({ message: 'This venue does not appear to have baseNote account'})
    }

    UserArtist.findById(artistId)
    .populate('shows')
    .then(artist => res.status(200).json(artist))
    .catch(err => res.json(err));
})

router.get('/artists', (req, res, next) => {
    UserArtist.find()
    .then(artistArray => res.status(200).json(artistArray))
    .catch(err => res.json(err));
})

module.exports = router
