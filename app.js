class Timer {
	constructor( duration, startBtn, stopBtn, callbacks ) {
		this.duration = duration
		this.startBtn = startBtn
		this.stopBtn = stopBtn
		
		// THIS CALLBACK IS FOR TELLING THE OUTSIDE CLASS THAT TIMER HAS BEEN STARTED AND PAUSED
		if ( callbacks ) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onFinish = callbacks.onfinish;
		}
		
		// add eventListner to these items
		this.startBtn.addEventListener( 'click' , this.start );
		this.stopBtn.addEventListener( 'click' , this.stop );
	}
	// these are different function which are gonna perform different task as their name suggest
	start = () => {
		if ( this.onStart ) {
			this.onStart(this.timeRemaining = duration.value);
		}
		
		this.tick();
		this.timerId = setInterval( this.tick , 50 );
	};
	
	stop = () => {
		clearInterval( this.timerId );
	};
	
	// THIS IS RESPONSIBLE FOR UPDATING TIME INSIDE TIMER
	tick = () => {
		
		if ( this.actualTime === 0 ) {
			this.stop();
			if ( this.onFinish ) {
				this.onFinish();
			}
		} else {
			// TIME REMAINING
			this.actualTime = this.actualTime - 0.05;
			if ( this.onTick ) {
				this.onTick(this.actualTime);
			}
		}
	};
	
	// THIS ACTUALLY WORKS BUT WHATIF SOMEOTHER FUNCTION WANTS THIS FUNCTINALITY TOO
	// TO PREVENT THIS FROM HAPPENING WE ARE GONNA USE GETTER AND SETTER
	get actualTime() {
		return parseFloat( this.duration.value );
	}
	
	set actualTime( time ) {
		return this.duration.value = time.toFixed(2);
	}
}

// ITEMS SELECTED
const duration = document.querySelector("#durarion")
const start = document.querySelector("#start_btn")
const stop = document.querySelector("#stop_btn")
const circle = document.querySelector( 'circle' );

const perimeter = circle.getAttribute( 'r' ) * 2 * Math.PI;

// SET ATTRIBUTE ON THE GO OF THE PERIMETER
circle.setAttribute( 'stroke-dasharray' , perimeter );

let timeLeft;
// PASSED OUR ITEM TO OUR CLASS and CALLBACKS ARE OPTINAL
const timer = new Timer( duration , start , stop , {
	onStart(totalDuraction) {
		timeLeft = totalDuraction
		console.log(timeLeft)
	} ,
	onTick(actualTime) {
		//USED OFFSET PROPERTY TO TICK DOWN THE COUNTER
		circle.setAttribute( 'stroke-dashoffset' ,
		  perimeter * actualTime / timeLeft - perimeter
		);
		
	} ,
	onfinish() {
		console.log( 'onfinish' );
	} ,
	
} );
