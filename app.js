class Timer {
	constructor( duration, startBtn, stopBtn ) {
		this.duration = duration
		this.startBtn = startBtn
		this.stopBtn = stopBtn
		
		// add eventListner to these items
		this.startBtn.addEventListener( 'click' , this.start );
		this.stopBtn.addEventListener( 'click' , this.stop );
	}
	// these are different function which are gonna perform different task as their name suggest
	start = () => {
		this.tick();
		// MADE THIS LOCAL VARIABLE
		this.timerId = setInterval( this.tick , 1000 );
	};
	
	stop = () => {
		console.log("stop!!!")
		clearInterval( this.timerId );
	};
	
	onClickChange = () => {
	
	}
	// THIS IS RESPONSIBLE FOR UPDATING TIME INSIDE TIMER
	tick = () => {
		this.actualTime = this.actualTime - 1;
		
		if ( this.actualTime === 0 ) {
			this.stop();
		}
	};
	
	// THIS ACTUALLY WORKS BUT WHATIF SOMEOTHER FUNCTION WANTS THIS FUNCTINALITY TOO
	// TO PREVENT THIS FROM HAPPENING WE ARE GONNA USE GETTER AND SETTER
	get actualTime() {
		return parseFloat( this.duration.value );
	}
	
	set actualTime( time ) {
		return this.duration.value = time;
	}
}

// ITEMS SELECTED
const duration = document.querySelector("#durarion")
const start = document.querySelector("#start_btn")
const stop = document.querySelector("#stop_btn")

// PASSED OUR ITEM TO OUR CLASS
const timer = new Timer( duration , start , stop );
