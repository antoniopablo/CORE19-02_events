const EventEmitter = require('./events');
const Later = require('later');

class Programador extends EventEmitter{

	constructor(configuration){
		super();

    for (var i = 0; i<configuration[i]; i++){
			clearInterval(this.intervalId);
			later.date.localTime();
      const sched = later.parse.text('at '+ configuration[i].hora);
			this.intervalId = later.setInterval(() =>
				this.emit('ideal', configuration[i].temperatura), sched);

		}

	}

}
exports = module.exports = Programador;
