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

$( document ).ready(function() {
	
var mySong = {
	"title":"You're Lost",
	"artist":"Lil Uzi Vert",
	"mp3URL":"https://open.spotify.com/track/5MUvVmyKD6bBY0XDeWZjJJ",
	"imageURL":"https://ssli.ebayimg.com/images/g/gh0AAOSwBiBatJAG/s-l640.jpg",
}

var myPlayList = [
	{
    	"title":"Money Mitch",
	    "artist":"Lil Uzi Vert",
	    "mp3URL":"https://open.spotify.com/track/4IWGnyOHDrVZEtPWfs4s7q",
	    "imageURL":"https://ssli.ebayimg.com/images/g/gh0AAOSwBiBatJAG/s-l640.jpg",
},
	{
		"title":"Erase Your Social",
		"artist":"Lil Uzi Vert",
		"mp3URL":"https://open.spotify.com/track/4uhvMW7ly7tJil31YYscAN",
		"imageURL":"https://ssli.ebayimg.com/images/g/gh0AAOSwBiBatJAG/s-l640.jpg",
	},
	{
		"title":"Ronda",
		"artist":"Lil Uzi Vert",
		"mp3URL":"https://open.spotify.com/track/2Wc5No77rhsfW2mB9LzXB3",
		"imageURL":"https://ssli.ebayimg.com/images/g/gh0AAOSwBiBatJAG/s-l640.jpg",
	}

]



function displayList(){


  
for (var i=0; i < myPlayList.length; i = i + 1) {
	  	$('.songs').append("<p> Title: " + (myPlayList[i].title)+ "</p>");
        $('.songs').append("<p>Artist: " + myPlayList[i].artist + "</p>");
		$('.songs').append(" <a href=" + myPlayList[i].mp3URL + "> Listen </a>");
		$('.songs').append("<img src=" + myPlayList[i].imageURL + ">");
		$('.songs').append("<button class='deletebutton'> delete </button>")
	}
}



$( "body" ).on( "click", ".deletebutton" ,function() {
 //($('selector').index(this) );

  console.log($('.deletebutton').index(this));
});

function clearList(){
  $('#songs').empty();
  
  
}


// DOCUMENT READY FUNCTION

  $('button').click(function(){
       addSong();
       clearList();
       displayList();
       
       
       
   });

	
function addSong(){
	
   var titleInput=$("#title").val();
   var artistInput=$("#artist").val(); 
   var mp3URLInput=$("#mp3URL").val(); 
   var imageURLInput=$("#imageURL").val(); 
myPlayList.push({title: titleInput, artist: artistInput, mp3URL: mp3URLInput, imageURL: imageURLInput });

  
}


displayList();

});