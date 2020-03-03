  class Canvas {
      constructor(id) {
          this.canvas = document.getElementById(id);
          this.ctx = this.canvas.getContext('2d');
          this.display = null; // What is currently on canvas

      };

      addImageToCanvas() {
          for (let w = 0; w < WIDTH; w++) {
              for (let h = 0; h < HEIGHT; h++) {
                  this.addPixelToCanvas(this.display[w][h], w, h);
              };
          };
      }

      addPixelToCanvas(colour, x, y) {
          this.ctx.fillStyle = colour;
          this.ctx.fillRect(x, y, 1, 1);
      };

      getPixelColour(x, y) {
          return this.image[x][y];
      }

      setDisplay(newDisplayVal) {
          this.display = newDisplayVal;
      }

      getDisplay(newDisplayVal) {
          return this.display;
      }
  }
