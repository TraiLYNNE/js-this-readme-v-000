console.log(this === window);

function checkThis() {
    console.log(this);
}

checkThis();

function checkStrictlyThis() {
    'use strict';
    console.log(this);
}

checkStrictlyThis();

function Chair(style, color) {
    this.style = style;
    this.color = color;
    console.log(this);
}

var sofa = new Chair("sofa", "red");

var couch = {
    color: "red",
    f: function() {
        return this;
    }
};

console.log(couch.f());