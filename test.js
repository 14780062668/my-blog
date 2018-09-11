const path = require('path');
const events = require('events');
let count = 0;
class myEvent extends events {
	constructor(props) {
		super(props);
		this.val = 1;
	}
	log() {
		this.val += 1;
		count = this.val;
	}
}
const ce = new myEvent();
ce.on('test', () => {
	ce.log();
});
const timer = setInterval(() => {
	if(count >= 10){
		clearInterval(timer);
	}else{
		ce.emit('test');
	}
}, 2000);