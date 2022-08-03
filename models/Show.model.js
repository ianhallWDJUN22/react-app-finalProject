const { Schema, model } = require("mongoose");

const showSchema = new Schema(
    {
        showDate: {
            type: Date,
            required: true,
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
        newVenue: {
            type: String
        },
        cost: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    }
)

const Show =  model("Show", showSchema);

module.exports = Show;

