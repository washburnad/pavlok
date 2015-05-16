window.onload = function() {
	(function() {
		var Position = function() {
			var orientations = {
				SITTING: 0,
				STANDING: 1
			};
			
			this.orientation = null;
			this.angle = -1;
			
			this.set_sitting = function() {
				this.orientation = orientations.SITTING;
			};
			
			this.set_standing = function() {
				this.orientation = orientations.STANDING;
			};
			
			return this;
		};
		
		window.Position = Position;
	})();

	(function() {
		var position = new Position();
		// var test_el = document.getElementById('test-element');
		var alpha_el = document.getElementById('alpha');
		var beta_el = document.getElementById('beta');
		var gamma_el = document.getElementById('gamma');
		
		// http://stackoverflow.com/a/13541399
		function normalize_angle(deg) {
			var x = ((deg + 180) / 360) % 1.0;
			return (x < 0) ? (x + 1.0) : x;
		}
		
		window.addEventListener('deviceorientation', function(event) {
			var tilt = normalize_angle(event.beta + 180);
			
			if ((tilt >= 0 && tilt <= 0.1) ||
				(tilt >= 0.9 && tilt <= 1)) {
				position.set_sitting();
				position.angle = tilt;
				// test_el.innerText = position.orientation + ':' + position.angle;
			}
			else if ((tilt >= 0.15 && tilt <= 0.35) ||
				(tilt >= 0.65 && tilt <= 0.85)) {
				position.set_standing();
				position.angle = tilt;
				// test_el.innerText = position.orientation + ':' + position.angle;
			}
			
			// alpha_el.innerText = normalize_angle(event.alpha + 180);
			// beta_el.innerText = normalize_angle(event.beta + 180);
			// gamma_el.innerText = normalize_angle(event.gamma + 180);
			
			alpha_el.innerText = event.alpha;
			beta_el.innerText = event.beta;
			gamma_el.innerText = event.gamma;
		});
	})();
};
