function randomColour() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function blackorwhite() {
    let randNo = Math.floor(Math.random() * 10);
    if (randNo > 5) {
        return "#000000";
    } else {
        return "#ffffff";

    }
}
