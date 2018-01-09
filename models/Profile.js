const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: String,
    birthday: String,
    max_savings: Number,
    show_max_savings: Boolean,
    target_savings: Number,
    monthly_spend: Number,
    reward_schedule: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('profile', profileSchema);