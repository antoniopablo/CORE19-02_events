
class EventEmitter{

	constructor(){
		this.escuchadores = [{nombre: null, funcion:null}];
	}

	on(evento, funcion) {
		this.evento = evento;
		this.funcion = funcion;
		this.escuchadores.push({nombre: evento, funcion: funcion });
	}

	emit(eventos, argumentos){
		this.eventos = eventos;
		this.argumentos = argumentos;
		
			var evento = this.escuchadores.find( elem => elem.nombre==eventos && evento==null);
			evento.funcion(argumentos);


	}
}

exports = module.exports = EventEmitter;
