const router = require('express').Router();
const UserArtist = require('../models/UserArtist.model');
const Show = require('../models/Show.model')

router.get('/artist/:id', (req, res, next) => {
    const { UserArtistId } = req.params;
    
    UserVenue.findById(UserArtistId)
    .populate('shows')
    .then(artist => res.status(200).json(artist))
    .catch(err => res.json(err));
})

router.post('/artists', (req, res, next) => {
    const { email, username, password, artistName, description } = req.body

    UserArtist.create({
        email,
        username,
        password,
        artistName,
        description,
        shows: []
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router
