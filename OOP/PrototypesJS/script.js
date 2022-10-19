function Particle() {
    this.x = 100;
    this.y = 99;
    // this.show = function() {
    //     point(this.x, this.y);
    // }
}

function Confetti() {
    Particle.call(this);
}

Particle.prototype.show = function() {
    point(this.x, this.y);
}



var p = new Particle();
var c = new Confetti();


console.log(p);
console.log(c);