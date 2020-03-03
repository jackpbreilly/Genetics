var WIDTH = 10;
var HEIGHT = 10;
let TARGET_CANVAS = new Canvas('target');
let BEST_CANVAS = new Canvas('best');
let BEST_PERCENTAGE = 0;


let target;
let popmax;
let mutationRate;
let population;

function setup() {
    target = generateImage();
    popmax = 200000000;
    mutationRate = 0.03;

    population = new Population(target, mutationRate, popmax);

    // add target to canvas 
    TARGET_CANVAS.setDisplay(target);
    TARGET_CANVAS.addImageToCanvas();
}

async function run() {

    while (!population.isFinished()) {
        population.naturalSelection();
        population.generate();
        population.calcFitness();
        population.evaluate();

        await sleep(10);
    }


}

setup();
run();
