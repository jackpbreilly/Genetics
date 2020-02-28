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
          this.ctx.fillStyle = "blue";
          this.ctx.fillRect(0, 0, this.stageConfig.width, this.stageConfig.height);

          let i;
          let j;
          for (i = 0; i < 100; i++) {
              this.ctx.fillStyle = getRandomColor();
              this.ctx.fillRect(i, 5, 1, 1);
              for (j = 0; j < 100; j++) {
                  this.ctx.fillStyle = getRandomColor();
                  this.ctx.fillRect(i, j, 1, 1);
              }
          }
      }

  }
