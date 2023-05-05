const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('fired', () => console.log('Event fired successfully'));

emitter.emit('fired');
