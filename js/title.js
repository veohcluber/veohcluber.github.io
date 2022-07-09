if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){
    
    setInterval(loop, 300);
	
	var video = document.getElementById('video');
	video.volume = 0.15;
	

}
function play() {
	var audio = document.getElementById('video');
	video.play();
}
var x = 0;

var titleText = [   "v",
                    "ve",
                    "veo",
                    "veoh",
                    "veoh.",
                    "veoh.c",
                    "veoh.cl",
                    "veoh.clu",
                    "veoh.club",
                    "veoh.club",
				 	"veoh.club",
				 	"veoh.club",
                    "veoh.clu",
                    "veoh.cl",
                    "veoh.c",
                    "veoh.",
                    "veoh",
                    "veo",
                    "ve",
					"v",];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}