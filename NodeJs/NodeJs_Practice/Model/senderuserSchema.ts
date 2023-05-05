import mongoose from 'mongoose';
const senderUserSchema = new mongoose.Schema({
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
        type: String,
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

const senderUserModel = mongoose.model('senderusers', senderUserSchema);

export default senderUserModel;
