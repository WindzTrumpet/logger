'use strict';
const moment = require('moment-timezone')
const fs = require('fs');
const logDir = 'logs';

function createLog(type, message) {
	var now = new Date();
	var dateString = moment(now).format('YYYY-MM-DD');
	var pathLog = logDir + '/'+ dateString
    var logDateTime = moment(now).format('YYYY-MM-DD HH:mm:ss');
    
    if (!fs.existsSync(logDir)) {
		fs.mkdirSync(logDir);
	}
	
	if (!fs.existsSync(pathLog)) {
		fs.mkdirSync(pathLog);
	}

	var path = pathLog + `/${type}-${dateString}.log`

	fs.appendFile(path, `${logDateTime} ${type} ${message}\n`, (err) => {
		if(err) return console.log('Logger error!');
	})
}

module.exports.info = function(message) {
	createLog('info', message)
}

module.exports.error = function(message) {
	createLog('error', message)
}

module.exports.verbose = function(message) {
	createLog('verbose', message)
}