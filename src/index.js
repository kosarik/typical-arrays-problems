
exports.min = function min (array) { 
    let result = array.reduce((a, b) => Math.min(a, b));
    return result;
}

exports.max = function max (array) {
    let result=array.reduce((a, b) => Math.max(a, b));
    return result;
}

exports.avg = function avg (array) {
    let result =array.reduce((a, b) => a+b)/array.length;
    return result;
}
