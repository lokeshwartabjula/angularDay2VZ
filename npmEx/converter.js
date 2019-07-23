var converter = {};

converter.farenToCel = function(far){
    var cel = 5/9 * (far-32);
    
    console.log(cel);
}

module.exports = converter;