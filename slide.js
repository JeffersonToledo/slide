export default class Slide {
    constructor(slide, wrapper, im1){

        this.slide = document.querySelector(slide);

        this.wrapper = document.querySelector(wrapper);

        this.im1 = document.querySelector(im1);
    }

    onStart(event){
        event.preventDefault();
        // console.log(this);
        this.wrapper.addEventListener('mousemove', this.onMove);
    }

    onMove(event){
        // console.log('moveu');
    }

    onEnd(event){
        // console.log('acabou');
        this.wrapper.removeEventListener('mousemove', this.onMove);
        let scale = this.im1.style.width = '400px';
    }

    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd);
    }

    bindEvents(){
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    init(){
        this.bindEvents();
        this.addSlideEvents();
        return this;
    }
}