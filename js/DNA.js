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
    crossover2(partner) {
        let child = new DNA();
        let midpoint = Math.floor(Math.random() * (WIDTH))
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < HEIGHT; h++) {
                if (w < (midpoint)) {
                    child.genes[w][h] = this.genes[w][h];
                } else {
                    child.genes[w][h] = partner.genes[w][h];

                }
            }
        }
        return child;


    }

    crossover3(partner) {
        let child = new DNA();
        let midpoint = WIDTH / 2;
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < HEIGHT; h++) {
                if (w < (midpoint)) {
                    child.genes[w][h] = this.genes[w][h];
                } else {
                    child.genes[w][h] = partner.genes[w][h];

                }
            }
        }
        return child;


    }
    crossover4(partner) {
        let child = new DNA();
        let midpoint = Math.floor(Math.random() * (HEIGHT))
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < HEIGHT; h++) {
                if (h < (midpoint)) {
                    child.genes[w][h] = this.genes[w][h];
                } else {
                    child.genes[w][h] = partner.genes[w][h];

                }
            }

        }
        return child;


    }
    crossover5(partner) {
        let child = new DNA();
        let midpoint = HEIGHT / 2;
        for (let w = 0; w < WIDTH; w++) {
            for (let h = 0; h < HEIGHT; h++) {
                if (h < (midpoint)) {
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
                    if (this.genes[w][h] == "#ffffff") {
                        this.genes[w][h] = "#000000";
                    } else {
                        this.genes[w][h] = "#ffffff";
                    }

                }
            }
        }

    }
}
