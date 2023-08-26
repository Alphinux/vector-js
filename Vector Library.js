// Vector Library

// -- Class ---
class Vector {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    get length() {
        return getLength(this)
    }
    get normalized() {
        return normalize(this)
    }
    get inverted() {
        return invert(this)
    }
    invertHor() {
        this.x = invertVer(this).x
        return this
    }
    invertVer() {
        this.y = invertVer(this).y
        return this
    }
    invert() {
        let invertedVec = invert(this)
        this.x = invertedVec.x
        this.y = invertedVec.y
        return this
    }
}

// -- Basic Operations ---
function add(vector1, vector2) {
    vector1.x += vector2.x;
    vector1.y += vector2.y;
    return vector1;
}
function subtract(vector1, vector2) {
    vector1.x -= vector2.x;
    vector1.y -= vector2.y;
    return vector1;
}
function multiply(vector, number) {
    vector.x *= number;
    vector.y *= number;
    return vector;
}
function divide(vector, number) {
    vector.x /= number;
    vector.y /= number;
    return vector;
}
function square(vector, number) {
    vector.x ^= number;
    vector.y ^= number;
    return vector;
}

/// --- Advanced Operations ---
function getLength(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}
function normalize(vector) {
    return divide(vector, vector.length);
}
function invertHor(vector) {
    vector.x = -vector.x
    vector.y = vector.y
    return vector
}
function invertVer(vector) {
    vector.x = vector.x
    vector.y = -vector.y
    return vector
}
function invert(vector) {
    vector.x = -vector.x
    vector.y = -vector.y
    return vector
}

// Debug
let debugVector = new Vector(1, 2)
console.log(debugVector)
debugVector.invertHor()
console.log(debugVector)

// Export
// export { add, subtract, multiply, divide, square, normalize, getLength, invertHor, invertVer }