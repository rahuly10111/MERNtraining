import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_no: {
        type: Number,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    send_date: {
        type: String,
        required: true,
    }

});

const UserModel = mongoose.model('senderusers', userSchema);

export default UserModel;
