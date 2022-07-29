const router = require('express').Router();
const UserVenue = require('../models/UserVenue.model');
const Show = require('../models/Show.model');
const { default: mongoose } = require('mongoose');


router.get('/venue/:id', (req, res, next) => {
    const { UserVenueId } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(UserVenueId)){
        res.status(400).json({ message: 'This venue does not appear to have baseNote account'});
        return;
    }
    
    UserVenue.findById(UserVenueId)
    .populate('shows')
    .then(venue => res.status(200).json(venue))
    .catch(err => res.json(err));
})


router.post('/venues', (req, res, next) => {
    const { email, username, password, venueName, description, address } = req.body

    UserVenue.create({
        email,
        username,
        password,
        venueName,
        address,
        description,
        shows: []
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});








module.exports = router

