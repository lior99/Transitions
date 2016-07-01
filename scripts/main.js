(function(window) {
				var leftButton = document.querySelector(".button-left");
				var rightButton = document.querySelector(".button-right");
				var box = document.querySelector(".box");
				var withDelayCheckbox = document.querySelector("#withDelayCheckbox");
				var useDelay = withDelayCheckbox["checked"];
				var boxElement = new BoxElmement(box, useDelay);
				var box2 = new BoxElmement(document.querySelector(".box2"), useDelay);
				var box3 = new BoxElmement(document.querySelector(".box3"), useDelay);

				var elementsArray = [
					boxElement, box2, box3
				];

				leftButton.addEventListener('click',function() {
					boxElement.moveLeft();
					box2.moveLeft();
					box3.moveLeft();

				});

				rightButton.addEventListener('click',function() {
					boxElement.moveRight();
					box2.moveRight();
					box3.moveRight();

				});

				withDelayCheckbox.addEventListener('click', function() {
					var withDelay = null;	
					if (this["checked"]){
						withDelay = true;
					}
					else {
						withDelay = false;
					}


					elementsArray.forEach(function(elm) {
						elm.withDelay = withDelay;
					});
				});

			}(window));

			
			// constructor
			function BoxElmement(elm, withDelay){
				this.element = elm;
				this.withDelay = withDelay;
			}

			BoxElmement.prototype.moveLeft = function() {
				this.handleDelay();
				this.element.classList.add("move-left");
				this.element.classList.remove("move-right");
			};

			BoxElmement.prototype.moveRight = function(first_argument) {
				this.handleDelay();
				this.element.classList.add("move-right");
				this.element.classList.remove("move-left");
			};

			BoxElmement.prototype.handleDelay = function() {
				if (!this.withDelay){
					this.element.classList.add("without-delay");
				}
				else{
					this.element.classList.remove("without-delay");	
				}
			};