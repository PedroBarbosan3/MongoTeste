const mongoose = require('mongoose');
require('dotenv').config();

async function startDB() {
	console.log(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`)
	await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`)
}

module.exports = startDB;