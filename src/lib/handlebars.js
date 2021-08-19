const { format } = require('timeago.js')

const helpers = {}

helpers.timeago = timestamp => {
	return format(timestamp, 'en_US')
}

module.exports = helpers
