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

// linearly maps value from the range (a..b) to (c..d)
function map(value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

function generateImage() {
    let colour;
    let image = new Array();
    for (let w = 0; w < WIDTH; w++) {
        image[w] = new Array(HEIGHT);
        for (let h = 0; h < HEIGHT; h++) {
            image[w][h] = blackorwhite();
        };
    }
    return image;
};
