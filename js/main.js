var WIDTH = 10;
var HEIGHT = 10;
let TARGET_CANVAS = new Canvas('target');
let BEST_CANVAS = new Canvas('best');
let ITERATING_CANVAS = new Canvas('iteration');
let BEST_PERCENTAGE = 0;



let target;
let popmax;
let mutationRate;
let population;

function setup() {
    target = generateImage();
    popmax = 400;
    mutationRate = 0.03;
    document.getElementById("mutation").innerHTML = "Mutation Rate: " + mutationRate;

    document.getElementById("population").innerHTML = "Population Size: " + popmax;


    population = new Population(target, mutationRate, popmax);

    // add target to canvas 
    TARGET_CANVAS.setDisplay(target);
    TARGET_CANVAS.addImageToCanvas();

    ITERATING_CANVAS.setDisplay(target);
    ITERATING_CANVAS.addImageToCanvas();
}

async function run() {
    setup();

    while (!population.isFinished()) {
        population.naturalSelection();
        population.generate();
        population.calcFitness();
        population.evaluate();
        document.getElementById("gen").innerHTML = "Current Generation: " + population.generations;
        document.getElementById("best_fitness").innerHTML = "Best Fitness: " + BEST_PERCENTAGE;

        await sleep(10);
    }
}

run();
