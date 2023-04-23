~ function(){
	var table = [
		"He", "Helium", "4.002602", 1, 1,
		"Li", "Lithium", "#6.941", 2, 1,
		"Be", "Beryllium", "9.012182", 3, 1,
		"B", "Boron", "#10.811", 4, 1,
		"C", "Carbon", "#12.0107", 5, 1,
		"N", "Nitrogen", "#14.0067", 6, 1,
		"O", "Oxygen", "#15.9994", 7, 1,
		"Lu", "Lutetium", "#174.9668", 8, 1,
		"Lu", "Lutetium", "#174.9668", 9, 1,
		"Lu", "Lutetium", "#174.9668", 10, 1,

		"F", "Fluorine", "18.9984032", 1, 2,
		"Ne", "Neon", "#20.1797", 2, 2,
		"Na", "Sodium", "22.98976...", 3, 2,
		"Mg", "Magnesium", "#24.305", 4, 2,
		"Al", "Aluminium", "26.9815386", 5, 2,
		"Si", "Silicon", "#28.0855", 6, 2,
		"P", "Phosphorus", "30.973762", 7, 2,
		"Er", "Erbium", "#167.259", 8, 2,
		"Tm", "Thulium", "168.93421", 9, 2,
		"Yb", "Ytterbium", "#173.054", 10, 2,

		"S", "Sulfur", "#32.065", 1, 3,
		"Cl", "Chlorine", "#35.453", 2, 3,
		"Ar", "Argon", "#39.948", 3, 3,
		"K", "Potassium", "#39.948", 4, 3,
		"Ca", "Calcium", "#40.078", 5, 3,
		"Sc", "Scandium", "44.955912", 6, 3,
		"Ti", "Titanium", "#47.867", 7, 3,
		"Tb", "Terbium", "158.92535", 8, 3,
		"Dy", "Dysprosium", "162.5", 9, 3,
		"Ho", "Holmium", "164.93032", 10, 3,

		"V", "Vanadium", "#50.9415", 1, 4,
		"Cr", "Chromium", "#51.9961", 2, 4,
		"Mn", "Manganese", "54.938045", 3, 4,
		"Fe", "Iron", "#55.845", 4, 4,
		"Co", "Cobalt", "58.933195", 5, 4,
		"Ni", "Nickel", "#58.6934", 6, 4,
		"Cu", "Copper", "#63.546", 7, 4,
		"Sm", "Samarium", "#150.36", 8, 4,
		"Eu", "Europium", "#151.964", 9, 4,
		"Gd", "Gadolinium", "#157.25", 10, 4,

		"Zn", "Zinc", "#65.38", 1, 5,
		"Ga", "Gallium", "#69.723", 2, 5,
		"Ge", "Germanium", "#72.63", 3, 5,
		"As", "Arsenic", "#74.9216", 4, 5,
		"Se", "Selenium", "#78.96", 5, 5,
		"Br", "Bromine", "#79.904", 6, 5,
		"Kr", "Krypton", "#83.798", 7, 5,
		"Pr", "Praseodymium", "140.90765", 8, 5,
		"Nd", "Neodymium", "#144.242", 9, 5,
		"Pm", "Promethium", "(145)", 10, 5,

		"Rb", "Rubidium", "#85.4678", 1, 6,
		"Sr", "Strontium", "#87.62", 2, 6,
		"Y", "Yttrium", "88.90585", 3, 6,
		"Zr", "Zirconium", "#91.224", 4, 6,
		"Nb", "Niobium", "92.90628", 5, 6,
		"Mo", "Molybdenum", "#95.96", 6, 6,
		"Tc", "Technetium", "(98)", 7, 6,
		"Ba", "Barium", "#132.9054", 8, 6,
		"La", "Lanthanum", "138.90547", 9, 6,
		"Ce", "Cerium", "#140.116", 10, 6,

		"Ru", "Ruthenium", "#101.07", 1, 7,
		"Rh", "Rhodium", "#102.9055", 2, 7,
		"Pd", "Palladium", "#106.42", 3, 7,
		"Ag", "Silver", "#107.8682", 4, 7,
		"Cd", "Cadmium", "#112.411", 5, 7,
		"In", "Indium", "#114.818", 6, 7,
		"Sn", "Tin", "#118.71", 7, 7,
		"I", "Iodine", "126.90447", 8, 7,
		"Xe", "Xenon", "#131.293", 9, 7,
		"Cs", "Caesium", "#132.9054", 10, 7,
	];

	var camera, scene, renderer;
	var controls;

	var objects = [];
	var targets = { table: [], sphere: [], helix: [], grid: [] };

	init();
	animate();

	function init() {

		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 3000;

		scene = new THREE.Scene();

		// table
		// table.length设置为图片数量*5
		for ( var i = 0; i < table.length; i += 5 ) {

			var element = document.createElement( 'div' );
			element.className = 'element';
			element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

			element.style.backgroundImage = 'url("https://raw.githubusercontent.com/wei1273356078/3D-Albums/master/images/small/photo'+ (i/5 + 1) +'.jpg")';
			// element.style.backgroundSize = 'cover';
			element.title = '冯梦迪 - '+ (i/5 + 1) +'/'+ (table.length/5);
            // https://raw.githubusercontent.com/wei1273356078/3D-Albums/master/images/small/photo
			element.setAttribute('href', 'https://raw.githubusercontent.com/wei1273356078/3D-Albums/master/images/small/photo'+ (i/5 + 1) +'.jpg');
			
			// var number = document.createElement( 'div' );
			// number.className = 'number';
			// number.textContent = (i/5) + 1;
			// element.appendChild( number );

			// var symbol = document.createElement( 'div' );
			// symbol.className = 'symbol';
			// symbol.textContent = table[ i ];
			// element.appendChild( symbol );

			// var details = document.createElement( 'div' );
			// details.className = 'details';
			// details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
			// element.appendChild( details );

			var object = new THREE.CSS3DObject( element );
			object.position.x = Math.random() * 4000 - 2000;
			object.position.y = Math.random() * 4000 - 2000;
			object.position.z = Math.random() * 4000 - 2000;
			scene.add( object );

			objects.push( object );

			//

			var object = new THREE.Object3D();
			object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
			object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

			targets.table.push( object );

		}

		// sphere
		var vector = new THREE.Vector3();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			var phi = Math.acos( -1 + ( 2 * i ) / l );
			var theta = Math.sqrt( l * Math.PI ) * phi;

			var object = new THREE.Object3D();

			object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
			object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
			object.position.z = 800 * Math.cos( phi );

			vector.copy( object.position ).multiplyScalar( 2 );

			object.lookAt( vector );

			targets.sphere.push( object );

		}

		// helix

		var vector = new THREE.Vector3();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			var phi = i * 0.175 + Math.PI;

			var object = new THREE.Object3D();

			object.position.x = 900 * Math.sin( phi );
			object.position.y = - ( i * 8 ) + 450;
			object.position.z = 900 * Math.cos( phi );

			vector.x = object.position.x * 2;
			vector.y = object.position.y;
			vector.z = object.position.z * 2;

			object.lookAt( vector );

			targets.helix.push( object );

		}

		// grid

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = new THREE.Object3D();

			object.position.x = ( ( i % 5 ) * 400 ) - 800;
			object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
			object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

			targets.grid.push( object );

		}

		//

		renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.style.position = 'absolute';
		document.getElementById( 'container' ).appendChild( renderer.domElement );

		//

		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.rotateSpeed = 0.5;
		controls.minDistance = 500;
		controls.maxDistance = 6000;
		controls.addEventListener( 'change', render );

		var button = document.getElementById( 'table' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.table, 2000 );

		}, false );

		var button = document.getElementById( 'sphere' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.sphere, 2000 );

		}, false );

		var button = document.getElementById( 'helix' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.helix, 2000 );

		}, false );

		var button = document.getElementById( 'grid' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.grid, 2000 );

		}, false );

		transform( targets.sphere, 3000 );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function transform( targets, duration ) {

		TWEEN.removeAll();

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = objects[ i ];
			var target = targets[ i ];

			new TWEEN.Tween( object.position )
				.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();

			new TWEEN.Tween( object.rotation )
				.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();

		}

		new TWEEN.Tween( this )
			.to( {}, duration * 2 )
			.onUpdate( render )
			.start();

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		render();

	}

	function animate() {

		requestAnimationFrame( animate );

		TWEEN.update();

		controls.update();

	}

	function render() {

		renderer.render( scene, camera );

	}
}();

$(function(){
	$('div.element').imgbox({
		'speedIn'		: 0,
		'speedOut'		: 0,
		// 'allowMultiple'	: false,
		'overlayShow'	: true,
		'zoomOpacity'	: true,
		'alignment'		: 'center'
	});

	var $buttons = $('#menu > button');
	$buttons.bind('click.btns', function(e){
		$buttons.removeClass('hover');
		$(e.target).addClass('hover');
	});
});