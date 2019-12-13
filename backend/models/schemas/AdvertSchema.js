const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// const advertSchemaConstructor = function () {
//     return mongoose.Schema({
//         dogData: Object,
//         authorData: Object,
//     })
// }

const AdvertSchema = mongoose.Schema({
    dogData: {
        breed: String,
        description: String,
        sex: String,
        date: Date,
    },
    authorData: {
        name: String,
        email: String,
        phoneNumber: String,
        address: String,
    },
    createdAt: Date,
});

class Animal {
    constructor(breed, description, sex) {
        this.breed = breed;
        this.description = description;
        this.sex = sex;
        this.date = date;
    }
}

class Author {
    constructor(name, email, phoneNumber, address) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}

AdvertSchema.statics.getAll = async function () {
    return await this.find();
}


module.exports = { AdvertSchema, Animal, Author };