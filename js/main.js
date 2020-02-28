let mutationRate = 0.05; // Mutation rate
let totalPopulation = 10000; // Total Population

let population; // Array to hold the current population
let matingPool; // ArrayList which we will use for our "mating pool"
let target; // Target phrase

let display = "";

targetImage = new Image(20, 20);
targetImage.buildImage();
population = [];
for (let i = 0; i < totalPopulation; i++) {
    population[i] = new DNA();
}

async function run() {
    let same = false;
    let bestCanvas = new Canvas('best');
    let bestPer = 0.001;
    let bestFitness = 0;
    while (same === false) {

        for (let i = 0; i < population.length; i++) {
            population[i].calcFitness(targetImage);
            if (population[i].fitness >= population[bestFitness].fitness) {
                bestFitness = i;
            }
            let hdsn = population[i].fitness;
            if (population[i].fitness >= bestPer) {
                bestCanvas.addImageToCanvas(population[bestFitness].genes);
                bestPer = population[i].fitness;
                console.log(population[bestFitness].fitness);

            }

        };





        let matingPool = []; // ArrayList which we will use for our "mating pool"

        for (let i = 0; i < population.length; i++) {
            let nnnn = Math.round(population[i].fitness * 100);

            for (let j = 0; j < nnnn; j++) { // and pick two random numbers
                matingPool.push(population[i]);
            }
        }

        for (let i = 0; i < population.length; i++) {
            let a = Math.floor(Math.random(matingPool.length));
            let b = Math.floor(Math.random(matingPool.length));
            let partnerA = matingPool[a];
            let partnerB = matingPool[b];
            let child = partnerA.crossover(partnerB);
            child.mutate(mutationRate);
            population[i] = child;
        }
        await sleep(100)
    }
}

let targetCanvas = new Canvas('target');
targetCanvas.addImageToCanvas(targetImage.getImage());
run();
