class DNA {
    constructor() {
        this.genes = [];
        this.fitness = 0;
        for (let i = 0; i < WIDTH; i++) {
            this.genes = generateImage();
        }
    }

    calcFitness(target) {
        let score = 0;
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < HEIGHT; h++) {
                if (this.genes[w][h] == target[w][h]) {
                    score++;
                }
            }
        }
        this.fitness = score / (HEIGHT * WIDTH);
    }

    crossover(partner) {
        let child = new DNA();
        let midpoint = Math.floor(Math.random() * (WIDTH * HEIGHT / 2));

        // Half from one, half from the other
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < HEIGHT; h++) {
                if (Math.floor(Math.random() * (2)) == 0) {
                    child.genes[w][h] = this.genes[w][h];
                } else {
                    child.genes[w][h] = partner.genes[w][h];
                }

            }
        }
        return child;
    }

    mutate(mutationRate) {
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < WIDTH; h++) {
                if (Math.random(1) < mutationRate) {
                    this.genes[w][h] = blackorwhite();
                }
            }
        }

    }
}
