const messageSender = require('../generic/messageSender')

module.exports = (name) => {
    messageSender.send('6178931720', '[SafeBronc ALERT] ' + name + ' has pressed the panic button at your event! Please attempt to locate the individual and ensure they are safe.')
}
