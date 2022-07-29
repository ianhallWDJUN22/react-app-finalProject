const { Schema, model } = require("mongoose");

const showSchema = new Schema(
    {
        showDate: {
            type: Date,
            required: true
        },
        venue: {
          type: Schema.Types.ObjectId,
          ref: 'UserVenue'
        },
        artist: {
            type: Schema.Types.ObjectId,
            ref: 'UserArtist'
        },
        newArtist: {
            type: String
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        cost: {
            type: String,
            required: true
        }
    }
)

const Show =  model("Show", showSchema);

module.exports = Show;

