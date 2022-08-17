const { Schema, model } = require("mongoose");

const userVenueSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
    },
    username: {
      type: String,
      unique: true,
      required:  'Username is required'
    },
    password: { 
      type: String,
      trim: true,
      required: 'Password is required'
    },
    venueName: {
      type: String,
      required: 'Must enter a venue name'
    },
    address: {
      type: String,
    },
    description: {
      type: String
    },
    shows: [ { type: Schema.Types.ObjectId, ref: 'Show' } ]
  },
  {
    timestamps: true,
  }
);


const UserVenue = model("UserVenue", userVenueSchema);

module.exports = UserVenue


