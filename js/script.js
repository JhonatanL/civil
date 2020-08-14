$(".btn-menu").click(function(){
	$(".menu").toggleClass('active');
});

caches.open(version)
	.then(function(cache) {
		return cache.addAll([
			'/',
			'index.html',
			'../css/app.css',
			'/js/app.min.js',
			'/assets/images/logo_target_white.png',
			'/scripts/angular-jwt.min.js',
			'/scripts/ng-file-upload.min.js',
		// this guy here
		'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
	]);
})