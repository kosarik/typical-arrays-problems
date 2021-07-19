
exports.min = function min (array) { if(typeof array ==="undefined" || !array.length) {return 0}
    let result = array.reduce((a, b) => Math.min(a, b));
    return result;
}

exports.max = function max (array) {if(typeof array ==="undefined" || !array.length) {return 0}
    let result=array.reduce((a, b) => Math.max(a, b));
    return result;
}

exports.avg = function avg (array) {if(typeof array ==="undefined" || !array.length) {return 0}
    let result =array.reduce((a, b) => a+b)/array.length;
    return result;
}
