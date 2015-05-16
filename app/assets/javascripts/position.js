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
