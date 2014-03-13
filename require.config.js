
//For not prod envs, this file along with require.js framework file should be
// the only ones that are included, and then let require.js to handle the rest
// For prod envs, all the necessary files will be concatenated and minified into only one

var require = {
	baseUrl: "./",
	//Without this jquery does not work... weird!
	
	//This will be not necesary when copying to a public directory
	paths: {
		"jquery": "bower_components/jquery/dist/jquery",
		"jqueryui": "bower_components/jqueryui/ui/jquery-ui"
	},
	// This should be easy accessed by the programmer
	// In order to shim no AMD deps
	//http://requirejs.org/docs/api.html#config-shim
	shim: {
		"jqueryui": {
			deps: ["jquery"]
		}
	},
	//Define the entry point
	// This should be replaced with 
	// deps["ie_shims.js", "app.js"]
	// to build the IE specific build file
    deps: ["app.js"]
};

//The only thing that programmer should do is edit the Shim attribute