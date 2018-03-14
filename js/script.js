// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title": "RAF",
	"artist": "A$AP Rocky, Lil Uzi Vert, Frank Ocean, Quavo, Playboi Carti",
	"mp3-url": "https://www.youtube.com/watch?v=_eLryuBCO-M",
	"image-url": "http://hiphop-n-more.com/wp-content/uploads/2017/05/asap-rocky-raf.jpg",
}

var myPlayList = [{
		"title": "24K Magic",
		"artist": "Bruno Mars",
		"mp3-url": "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url": "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title": "Sir Duke",
		"artist": "Stevie Wonder",
		"mp3-url": "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title": "Sorry",
		"artist": "Justin Bieber",
		"mp3-url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url": "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$(document).ready(function() {
	displayList(myPlayList)
});

function displaySong(songName, songArtist, songMP3, songImg) {
	$("#displayList").append("<p>" + songName + "</p>")
	$("#displayList").append("<p>" + songArtist + "</p>")
	$("#displayList").append("<div>" + "<a href = " + songMP3 + "> Link to song </a" + "</div")
	$("#displayList").append("<img src = " + songImg + ">")

}

function addSong() {



}

function displayList(myPlayList) {
	for ( var i = 0; myPlayList.length; i++) {
		var songName = myPlayList[i].title;
		var songArtist = myPlayList[i].artist
		var songMP3 = myPlayList[i]["mp3-url"];
		var songImg = myPlayList[i]["image-url"];
		displaySong(songName, songArtist, songMP3, songImg)
	}



}
