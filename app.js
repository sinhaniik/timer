class Timer {
	constructor( duration, startBtn, stopBtn ) {
		this.duration = duration
		this.startBtn = startBtn
		this.stopBtn = stopBtn
		
		// add eventListner to these items
		this.startBtn.addEventListener( 'click' , this.start );
	
	}
	// these are different function which are gonna perform different task as their name suggest
	start = () => {
		console.log(this);
	}
	
	pause = () => {
	
	}
	onClickChange = () => {
	
	}
	tick = () => {
	
	}
}

// ITEMS SELECTED
const duration = document.querySelector("#durarion")
const start = document.querySelector("#start_btn")
const stop = document.querySelector("#stop_btn")

// PASSED OUR ITEM TO OUR CLASS
const timer = new Timer( duration , start , stop );
