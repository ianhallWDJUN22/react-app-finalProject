const router = require('express').Router();
const UserVenue = require('../models/UserVenue.model');
const UserArtist = require('../models/UserArtist.model');
const Show = require('../models/Show.model');

router.post('/shows', (req, res, next) => {
    const { showDate, venueId, artistId, newArtist, startTime, endTime, cost } = req.body

    let thisShowId = undefined;

    Show.create({
        showDate,
        venue: venueId,
        artist: artistId,
        newArtist,
        startTime,
        endTime,
        cost
    })
    .then(newShow => {
        thisShowId = newShow._id;
        return UserVenue.findByIdAndUpdate(venueId, { $push: { shows: thisShowId}}) 
    })
    .then(() => {
       return UserArtist.findByIdAndUpdate(artistId, { $push: { shows: thisShowId}})
    })
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
})



module.exports = router;