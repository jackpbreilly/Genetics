  class Image {
      constructor(canw, canh) {
          this.width = canw;
          this.height = canw;
          this.image = new Array(this.width)
      };

      buildImage(imageData = null) {
          let colour;
          for (let w = 0; w < this.width; w++) {
              this.image[w] = new Array(this.height);
              for (let h = 0; h < this.height; h++) {
                  if (imageData === null) {
                      colour = blackorwhite();
                  } else {
                      colour = imageData[w][h];
                  };
                  this.image[w][h] = colour;
              };
          };
      };

      getImage() {
          return this.image;
      }


  }
