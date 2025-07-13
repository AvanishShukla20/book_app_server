import mongoose from 'mongoose'

 const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
