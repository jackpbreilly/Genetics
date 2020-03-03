class Population {
    constructor(image, m, num) {

        this.population;
        this.matingPool;
        this.generations = 0;
        this.finished = false;
        this.target = image;
        this.mutationRate = m;
        this.perfectScore = 1;

        this.best = [];

        this.population = new Array();
        for (let i = 0; i < num; i++) {
            this.population[i] = new DNA();
        }
        this.matingPool = [];
        this.calcFitness();
    }

    calcFitness() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness(target);
        }
    }

    // Generate a mating pool
    naturalSelection() {
        this.matingPool = [];

        let maxFitness = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > maxFitness) {
                maxFitness = this.population[i].fitness;
            }
        }

        for (let i = 0; i < this.population.length; i++) {

            let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
            let n = Math.floor(fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
            for (let j = 0; j < n; j++) { // and pick two random numbers
                this.matingPool.push(this.population[i]);
            }
        }
    }

    // Create a new generation
    generate() {
        // Refill the population with children from the mating pool
        for (let i = 0; i < this.population.length; i++) {
            let a = Math.floor(Math.random() * (this.matingPool.length));
            let b = Math.floor(Math.random() * (this.matingPool.length));
            let partnerA = this.matingPool[a];
            let partnerB = this.matingPool[b];
            let child = partnerA.crossover(partnerB);

            child.mutate(this.mutationRate);
            this.population[i] = child;
        }
        console.log("Generation:" + this.generations);
        this.generations++;
    }


    getBest() {
        return this.best;
    }

    // Compute the current "most fit" member of the population
    evaluate() {
        let worldrecord = 0.0;
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > worldrecord) {
                index = i;
                worldrecord = this.population[i].fitness;
            }
        }

        this.best = this.population[index].genes;
        if (worldrecord === this.perfectScore) {
            this.finished = true;
        }

        if (worldrecord > BEST_PERCENTAGE) {
            BEST_PERCENTAGE = worldrecord;
            console.log(worldrecord);
            BEST_CANVAS.setDisplay(population.best);
            BEST_CANVAS.addImageToCanvas();
        }
    }

    isFinished() {
        return this.finished;
    }

    getGenerations() {
        return this.generations;
    }

    // Compute average fitness for the population
    getAverageFitness() {
        let total = 0;
        for (let i = 0; i < this.population.length; i++) {
            total += this.population[i].fitness;
        }
        return total / (this.population.length);
    }


}
