const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('Im alive')
})

module.exports = router
