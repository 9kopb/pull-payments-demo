const crypto = require('crypto');

function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

function generateBillId() {
    return `demo${randomValueHex(7)}`;
}


function getISOTime() {
    const date =  new Date();

    timePlused = date.getTime() + (24*60*60*1000);

    date.setTime(timePlused);

    return date.toISOString();
}

module.exports = {
    generateBillId,
    getISOTime
};