var patternEmail = 'EMAIL';
var email = 'dark.player.one.supporting@proton.me';

var patternDate = 'DATE';
var dateString = new Date().toLocaleDateString();

var patternDevName = 'DEV_NAME';
var devName = "DS Play-er Apps"

var patternAppName = 'APP_NAME';
var appName = 'DS Play-er';

function replaceData(pattern, data){
	document.body.innerHTML = document.body.innerHTML.replaceAll(pattern, data);
}
		
replaceData(patternEmail, email);
replaceData(patternDate, dateString);
replaceData(patternDevName, devName);
replaceData(patternAppName, appName);