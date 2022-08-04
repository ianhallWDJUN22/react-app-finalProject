const router = require('express').Router();
const UserVenue = require('../models/UserVenue.model');
const Show = require('../models/Show.model');
const { default: mongoose } = require('mongoose');


router.get('/venue/:venueId', (req, res, next) => {
    const { venueId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(venueId)) {
        res.status(400).json({ message: 'It looks like this show may have been delted' })
    }

    UserVenue.findById(venueId)
    .populate('shows')
    .then(venue => {
        console.log(venue)
        res.status(200).json(venue)
    })
    .catch(err => res.json(err));
})

router.get('/venues', (req, res, next) => {
    UserVenue.find()
    .then(venueArray => res.status(200).json(venueArray))
    .catch(err => res.json(err));
})



module.exports = router