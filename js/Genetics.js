class DNA {
    constructor() {
        // The genetic sequence
        this.tmp = new Image(20, 20);
        this.tmp.buildImage();
        this.genes = this.tmp.getImage();
        this.fitness = 0;

    }

    // Fitness function (returns floating point % of "correct" characters)
    calcFitness(target) {
        let targetData = target.getImage();
        let score = 0;
        for (let w = 0; w < target.width; w++) {
            for (let h = 0; h < target.height; h++) {
                if (this.genes[w][h] == targetData[w][h]) {
                    score++;
                }
            }
        }
        this.fitness = score / (target.width * target.height);
    }

    // Crossover
    crossover(partner) {
        // A new child
        let child = new DNA();

        let midpoint = Math.floor(Math.random()); // Pick a midpoint

        // Half from one, half from the other
        for (let w = 0; w < this.genes.width; w++) {
            for (let h = 0; h < this.genes.height; h++) {
                if (w > midpoint) child.genes[w][h] = this.genes[w][h];
                else child.genes[w][h] = partner.genes[w][h];
            }
        }
        return child;
    }

    // Based on a mutation probability, picks a new random character
    mutate(mutationRate) {
        for (let w = 0; w < this.genes.width; w++) {
            for (let h = 0; h < this.genes.height; h++) {
                if (random(1) < mutationRate) {
                    this.genes[w][h] = randomColour();
                }
            }
        }
    }
}
