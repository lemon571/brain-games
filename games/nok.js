function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function lcmOfArray(arr) {
    return arr.reduce((acc, num) => lcm(acc, num), arr[0]);
}

module.exports = { lcmOfArray };
