const router = require('express').Router();
const UserArtist = require('../models/UserArtist.model');
const Show = require('../models/Show.model')

router.get('/artist/:id', (req, res, next) => {
    const { UserArtistId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(UserArtistId)){
        res.status(400).json({ message: 'This venue does not appear to have baseNote account'});
        return;
    }

    UserArtist.findById(UserArtistId)
    .populate('shows')
    .then(artist => res.status(200).json(artist))
    .catch(err => res.json(err));
})

router.get('/artists', (req, res, next) => {
    UserArtist.find()
    .then(artistArray => res.status(200).json(artistArray))
    .catch(err => res.json(err));
})

// router.post('/artists', (req, res, next) => {
//     const { email, username, password, artistName, description } = req.body

//     UserArtist.create({
//         email,
//         username,
//         password,
//         artistName,
//         description,
//         shows: []
//     })
//     .then(response => res.json(response))
//     .catch(err => res.json(err));
// });

module.exports = router
