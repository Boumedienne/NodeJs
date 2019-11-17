const EventEmitter=require('events').EventEmitter;
const Counter=function(i){
    this.increment=function(){
        i++;
        this.emit('incremened',i);
    }
}

Counter.prototype=new EventEmitter();
const counter=new Counter(10);

const callback=function(n){
    console.log(n);
}
counter.addListener('incremened',callback);
counter.increment(); 
counter.increment(); 