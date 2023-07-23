const mongoose = require('mongoose');
const User = require('../model/userModel');

//middleware to handle user documents in the db

const userController = {};

//POST requst middleware handler

userController.verifyLogin = async (req, res, next) => {
	//deconstruct username & password from req.body

	const { username, password } = req.body;

	try {
		//query db to find username

		const result = await User.findOne({ username: username });

		//redirect if no username found
		if (!result) {

			res.redirect('/signup');

		} else {

			//query db to verify password, if username exists

			const verified = await User.findOne({ username, password });

			//if verified, add verification details to res.locals

			if (verified) {
				res.locals.verified = true;
				res.locals.userId = verified._id;
				return next();

			//if unverified, return false as a property on res.locals
			} else {
				res.locals.verified = false;
				return next();
			}
		}
	
	//error catch
		
	} catch (error) {
		return next({
			log: 'error in the verifyLogin middleware',
			message: error,
		});
	}
};

//middleware to handle signups

userController.signUp = async (req, res, next) => {

	//deconstruct username and password from request body

	const { username, password } = req.body;

	//if either no username or undefined, redirec to signup page

	if (username === undefined || password === undefined) {

		res.redirect('/signup');

	} else {
		try {

			//query db with username and password to create new user document

			const newUser = await User.create({ username, password });

			//add new user output to res.locals

			res.locals.user = newUser;

			next();

			
			//error catch
		} catch (error) {
			next({
				log: 'error in the signUp middleware controller',
				err: error,
			});
		}
	}
};

module.exports = userController;
