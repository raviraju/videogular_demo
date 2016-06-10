'use strict';
angular.module('myApp',
		[
			"ngSanitize",
			"com.2fdevs.videogular"
		]
	)
	.controller('HomeCtrl',
		function ($sce) {
			this.config = {
				preload: "none",
				sources: [
					{src: $sce.trustAsResourceUrl("http://127.0.0.1:5984/videolibrary_couch/krishna/VIDEO0006.mp4"), type: "video/mp4"}
				],
				theme: {
					url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
				}
			};
		}
	);
