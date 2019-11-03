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

   
lziipromise =
    d3.json ("https://deezerdevs-deezer.p.rapidapi.com/album/7824595", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})

lzipromise = d3.json ("https://deezerdevs-deezer.p.rapidapi.com/album/7820635", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})

lziiipromise =
    d3.json ("https://deezerdevs-deezer.p.rapidapi.com/album/11590966", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
hothpromise =
    d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11591216", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})

phygpromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/9674822", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
                           
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

phygpromise.then(
function(data)
{
    console.log("goodphyg");
})

lzivpromise.then(
    function(data)
    {
        console.log("goodlziv",(data));
       getAlbumlzivCover(data);
      
    }
)

lziipromise.then(
    function (data)
    {
        console.log("goodlzii");
        getAlbumlziiCover(data);
        
    }
)

lzipromise.then(
function (data)
{
    console.log("goodlzi");
    getAlbumlziCover(data);
})

lziiipromise.then(
    function (data)
    {
        console.log("goodlziii");
        getAlbumlziiiCover(data);
    }
)

hothpromise.then (
    function (data)
    {
        console.log("goodhoth");
       getAlbumhothCover(data);
    }
)



var getAlbumlziiiCover = function (alb)
{
   console.log("goodlziii2",alb)
    
   /*var albumtr = d3.select("#albumcover")
    .select("tbody")
    .selectAll("tr")
    .data(alb)
    .enter()
    .append("tr"); 
    
    albumtr.append("td")
    .append("img")
    .attr("src", alb.cover);
    
    albumtr.append("td")
    .text(alb.title)*/
    
    d3.select("#albumcover")
    .select("img")
    .data(alb)
    .enter()
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)
    //click
    .on("click", function (songlist)
         
    {
       
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11590966/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        promisesl.then(function (songs)
{
           d3.selectAll("li").remove();
            console.log("goodsongs", songs);
            getSongList(songs);
})
        
        
             var getSongList = function (song)
{

    d3.selectAll("ol").remove();
    console.log("goodfcn",song);
    d3.select ("#songlist")
    .selectAll("ol")
    .data(song.data)
    .enter()
    .append("li")
    .text(function(d) {return d.title_short})
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11590966/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
       
	}
})
        
        infopromise.then(function(info)
        {
              d3.selectAll("tr").remove()
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
})
}

 /* tracks.data.sort(function(a,b)
{
    if (a.duration > b.duration)
    {
        return 1;
    }

    else if(a.duration< b.duration)
    {
        return -1;
    }
    else {return 0;}
  })
*/
//master function for dispaying led zeppelin III
var getAlbumlziiiCover = function (alb)
{
   console.log("goodlziii2",alb)
    
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
    .data(alb)
    .enter()
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)
    //click
    .on("click", function (songlist)
    {
       // var clear = function ()
       // {
       //     d3.select("#songlist")
       //     .remove()
       // }
      //  clear();
        
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11590966/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        promisesl.then(function (songs)
{
            d3.selectAll("li").remove()
            console.log("goodsongs", songs);
            getSongList(songs);
})
        
             var getSongList = function (song)
{
    console.log("goodfcn",song);
    d3.select ("#songlist")
    .selectAll("ol")
    .data(song.data)
    .enter()
    .append("li")
    .text(function(d) {return d.title_short})
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11590966/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        infopromise.then(function(info)
        {
              d3.selectAll("tr").remove()
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
})
}


//master function for displaying led zeppelin
var getAlbumlziCover = function (alb)
{
   console.log("goodlzi2",alb)
    
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
    .data(alb)
    .enter()
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)
    //click
     .on("click", function (songlist)
    {
       // var clear = function ()
       // {
       //     d3.select("#songlist")
       //     .remove()
       // }
      //  clear();
        
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/7820635/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        promisesl.then(function (songs)
{
              d3.selectAll("li").remove()
            console.log("goodsongs", songs);
            getSongList(songs);
})
        
             var getSongList = function (song)
{
    console.log("goodfcn",song);
    d3.select ("#songlist")
    .selectAll("ol")
    .data(song.data)
    .enter()
    .append("li")
    .text(function(d) {return d.title_short})
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/7820635/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        infopromise.then(function(info)
        {
              d3.selectAll("tr").remove()
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
})
}


var getAlbumhothCover = function (alb)
{
   console.log("goodhoth2",alb)
    
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
    .data(alb)
    .enter()
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)
    //click
     .on("click", function (songlist)
    {
       // var clear = function ()
       // {
       //     d3.select("#songlist")
       //     .remove()
       // }
       // clear();
        
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11591216/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        promisesl.then(function (songs)
{
              d3.selectAll("li").remove()
            console.log("goodsongs", songs);
            getSongList(songs);
})
        
             var getSongList = function (song)
{
    console.log("goodfcn",song);
    d3.select ("#songlist")
    .selectAll("ol")
    .data(song.data)
    .enter()
    .append("li")
    .text(function(d) {return d.title_short})
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/11591216/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        infopromise.then(function(info)
        {
              d3.selectAll("tr").remove()
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
})
}

//master function for displaying led zeppelin II
var getAlbumlziiCover = function (alb)
{
   console.log("goodlzii2",alb)
    
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
    .data(alb)
    .enter()
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)
    //click
     .on("click", function (songlist)
    {
    
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/7824595/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        promisesl.then(function (songs)
{
              d3.selectAll("li").remove()
            console.log("goodsongs", songs);
            getSongList(songs);
})
        
             var getSongList = function (song)
{
    console.log("goodfcn",song);
    d3.select ("#songlist")
    .selectAll("ol")
    .data(song.data)
    .enter()
    .append("li")
    .text(function(d) {return d.title_short})
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/7824595/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        infopromise.then(function(info)
        {
              d3.selectAll("tr").remove()
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
})
}


//master function for displaying led zeppelin IV
var getAlbumlzivCover = function (alb)
{
   console.log("goodlziv2",alb)
    
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
    .data(alb)
    .enter()
    .append("img")
    .attr("src", function(d){return d.cover_big})
    
    d3.select("#albumcover")
    .append("p")
    .text(alb.title)
    //click
    .on("click", function (songlist)
    {
        //var clear = function ()
        //{
        //    d3.select("#songlist")
        //    .remove()
       // }
       // clear();
        
        var promisesl = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/8887733/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
	}
)
        promisesl.then(function (songs)
{
              d3.selectAll("li").remove()
            console.log("goodsongs", songs);
            getSongList(songs);
})
        
        var getSongList = function (song)
{
    console.log("goodfcn",song);
    d3.select ("#songlist")
    .selectAll("ol")
    .data(song.data)
    .enter()
    .append("li")
    .text(function(d) {return d.title_short})
    .on("click", function (infobox)
{
        var infopromise = d3.json("https://deezerdevs-deezer.p.rapidapi.com/album/8887733/tracks", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
        infopromise.then(function(info)
        {
              d3.selectAll("tr").remove()
            console.log("infogood",info)
            getSongInfo(info)
        })
})}
    
})
}
    

var getSongInfo = function (info)
{
    var albumtr = d3.select("#info")
    .select("tbody")
    .selectAll("tr")
    .data(info.data)
    .enter()
    .append("tr");
    
    albumtr.append("td")
    .text(function (d) {return d.title_version})
    
    albumtr.append("td")
    .text(function (d){return d.duration/60})
}
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


