const express = require('express')
const router = express.Router()

router.get('/signup', (req, res) => {
	res.render('auth/signup.hbs')
})

router.post('/signup', (req, res) => {
	console.log(req.body)
	res.send('Received')
})

module.exports = router
