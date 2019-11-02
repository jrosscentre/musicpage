/*musicpromise =
    d3.json ("https://deezerdevs-deezer.p.rapidapi.com/search?q=led%20zeppelin", {
"method": "GET",
"headers": {
 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
 "x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
}
});*/

lzivpromise =
    d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/8887733", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})

   
/*lziipromise =
    d3.json ("https://deezerdevs-deezer.p.rapidapi.com/search?q=led%20zeppelin%20ii", {
"method": "GET",
"headers": {
 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
 "x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
}
})

lziiipromise =
    d3.json ("https://deezerdevs-deezer.p.rapidapi.com/search?q=led%20zeppelin%20iii", {
"method": "GET",
"headers": {
 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
 "x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
}
})
hothpromise =
    d3.json("https://deezerdevs-deezer.p.rapidapi.com/search?q=houses%20of%20the%20holy", {
"method": "GET",
"headers": {
 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
 "x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
}
})*/
                           
/*musicpromise.then(
   
    function(data)
    {
        console.log("good",(data));
        getAlbums(data)
        getSongList(data)
     

    },
   
    function(err)
    {
        console.log("bad",(err));
    }              
)*/

//array for all promises
//var promises = [lziiipromise,lziipromise,lzivpromise,hothpromise]

lzivpromise.then(
    function(data)
    {
        console.log("goodlziv",(data));
       getAlbumCover(data);
      
    }
)

/*lziipromise.then(
    function (data)
    {
        console.log("goodlzii",(data))
    }
)

lziiipromise.then(
    function (data)
    {
        console.log("goodlziii",(data))
    }
)

hothpromise.then (
    function (data)
    {
        console.log("goodhoth", (data))
       
    }
)

//functions performed on all promises
Promise.all (promises).then(
    function (data)
    {
        console.log("good",data)
        getAlbums(data)
        getSongList(data)
    }
    
)*/
//master function for displaying all albums


var getAlbumCover = function (alb)


{
   console.log("good",alb)
    
   /*var albumtr = d3.select("#albumcover")
    .select("tbody")
    .selectAll("tr")
    .data(alb)
    .enter()
    .append("tr");
    
    albumtr.select("tr")
    .append("td")
    .append("img")
    .attr("src", function(d){return d.cover_big});
    
    albumtr.append("td")
    .append("p")
    .text(function(d) {return d.title})*/
    
    d3.select("#albumcover")
    .select("img")
    //.data(alb)
    //.enter()
    .append("p")
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)

    
    
    
    .on("click", function (songlist)
    {
       // var alldata = songlist.flatMap(function(d)
        //{
         //   return d.songlist
       // })
        
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/8887733/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        promisesl.then(function (songs)
{
            console.log("goodsongs", songs);
            getSongList(songs);
})
})
}

var getSongList = function (song)
{
    console.log("goodfcn",song);
    d3.select ("#songlist")
     .select("ol")
    .data(song)
    .enter()
    .append("li")
    .text(song.data.title)
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/8887733", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        infopromise.then(function(info)
        {
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
    
       /// return songlist.tracks.data

    /*
    rows.append("td)
        .append("img")
    .attr("src",function (d)
    {return d.album.cover}
    )
   
    */
   
   
  //  var box2= d3.select("#albumlist")
   
    //song names
   /* albumtr.append("td")
    .append("div")
    .text(function(d)
          {return d.title_short})
    .on("click", function (songname)
        {var lzivpromise =
    d3.json ("https://deezerdevs-deezer.p.rapidapi.com/search?q=led%20zeppelin%20iv", {
"method": "GET",
"headers": {
 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
 "x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
}
})
        lzivpromise.then(function(songs)
        {
            
        })
        return getSongList(songname)})
   
   
  //  var box3= d3.select("#cover")
   
    //album covers
    albumtr.append("td")
    .append("img")
    .attr("src", function (d)
          {return d.album.cover})
    .on ("mouseover", function (big)
         {return getSongInfo(big)}
         )


}*/




//tester function
        



//function to be called on a click to display a song list
        
/*var clear = function ()
{
    d3.select("#songlist")
    .remove()
}*/


    /*.append("div")
    .append("img")
    .attr("src", function (d)
         {return d.album.cover_big})*/
   // .on("click", function (songinfo){ clear();return getSongInfo(songinfo), returngetbigPic(songinfo) }
   // .on ("mouseover"), function (songbigpic) {return getbigPic(songbigpic);
        //.append("p")
    //.text(sngnm.title)
    /**/
    //})



var getSongInfo = function (info)
{
    d3.select("#info")
    .append("div")
    .text(info.album.title)
}


var getbigPic = function (bigpic)
{
    d3.select("#songlist")
    .append("div")
    .append("img")
    .attr("src", function (d)
         {return d.artist.picture})
}


   
   
/*var sortalbbox = function (button)
{
   
    .text()
    .on("click", function (albums) {return getAlbums(albums)})
   
   
}*/


