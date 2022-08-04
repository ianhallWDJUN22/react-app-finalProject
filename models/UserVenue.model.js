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


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3245.5456608837635!2d-82.5413506!3d35.5649215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f3945836856d%3A0xd8623f49f1875c72!2sRabbit%20Rabbit!5e0!3m2!1sen!2sus!4v1659021974303!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

const UserVenue = model("UserVenue", userVenueSchema);

module.exports = UserVenue


