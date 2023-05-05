const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('fired', (children) =>
  console.log(`Event fired successfully. Thanks ${children}`)
);
emitter.on('fired', () => console.log('Event fired successfully'));

emitter.emit('fired', 'Omar Mariam Yosuf');
