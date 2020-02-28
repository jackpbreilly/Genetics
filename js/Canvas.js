  class Canvas {
      constructor() {
          this.canvas = document.querySelector('canvas');
          this.ctx = this.canvas.getContext('2d');
          this.stageConfig = {
              width: 100,
              height: 100
          };
          this.canvas.width = this.stageConfig.width;
          this.canvas.height = this.stageConfig.height;
      };

      buildCanvas() {
          for (let w = 0; w < this.canvas.width; w++) {
              this.addPixelToCanvas(randomColour(), w, 0)
              for (let h = 0; h < this.canvas.height; h++) {
                  this.addPixelToCanvas(randomColour(), w, h);
              };
          };
      };

      addPixelToCanvas(colour, x, y) {
          this.ctx.fillStyle = colour;
          this.ctx.fillRect(x, y, 1, 1);
      };

      getPixelColour(x, y) {
          let pd = this.ctx.getImageData(x, y, 1, 1).data; // pixel data
          return (rgbToHex(pd[0], pd[1], pd[2])); // rgb
      }
  }
