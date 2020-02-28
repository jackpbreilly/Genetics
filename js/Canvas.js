  class Canvas {
      constructor(id) {
          this.canvas = document.getElementById(id);
          this.ctx = this.canvas.getContext('2d');
          this.stageConfig = {
              width: 20,
              height: 20
          };


          this.canvas.width = this.stageConfig.width;
          this.canvas.height = this.stageConfig.height;

          this.image = new Array(this.canvas.width)

      };

      addImageToCanvas(imageData) {
          for (let w = 0; w < this.canvas.width; w++) {
              for (let h = 0; h < this.canvas.height; h++) {
                  this.addPixelToCanvas(imageData[w][h], w, h);
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


  }
