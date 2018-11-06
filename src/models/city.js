const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types

const CitySchema = mongoose.Schema({
  title: { type: String, unique: true, required: true },
  relatedAnimes: [{
    _id: { type: ObjectId, ref: 'Anime', required: true },
    relation: { type: String, required: true, enum: ['opening', 'ending'] }
  }],
  videoSource: String
},
{ timestamps: true })

CitySchema.virtual('id').get(() => this._id)

module.exports = mongoose.model('City', CitySchema)
