const router = require('express').Router();
const UserVenue = require('../models/UserVenue.model');
const UserArtist = require('../models/UserArtist.model');
const Show = require('../models/Show.model');
const { default: mongoose } = require('mongoose');

router.get('/shows/:showId', (req, res, next) => {
    const { showId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(showId)) {
        res.status(400).json({ message: 'It looks like this show may have been delted' })
    }
    Show.findById(showId)
    .populate('venue', 'artist')
    .then(show => res.status(200).json(show))
    .catch(err => res.json(err))
})

router.put('/shows/edit/:showId', (req, res, next) => {
    const { showId } = req.params;

    Show.findByIdAndUpdate(showId, req.body, { new: true })
    .then((updatedShow) => res.json(updatedShow))
    .catch(err => console.log(err));
})

router.delete('/shows/delete/:showId', (req, res, next) => {
    const { showId } = req.params;

    Show.findByIdAndRemove(showId)
    .then(() => res.json({message: 'Show with ${showId} was successfully removed' }))
    .catch(err => res.json(err));
});

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