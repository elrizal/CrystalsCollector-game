var currentURL = window.location.origin;

$.ajax({ url: currentURL + "/api/characters", method: "GET" })
.then(function(charData) {

  // Here we are logging the URL so we have access to it for troubleshooting
  console.log("------------------------------------");
  console.log("URL: " + currentURL + "/api/characters");
  console.log("------------------------------------");

  console.log(charData);

  for (var i = 0; i < charData.length; i++) {

var imagesRuby = charData[i].images;
var index = 0;
$( "#Image" ).click(function(imgAnimate) {
function imgAnimate()
{
  $('#Image').animate('fast', function()
  {
    $(this).attr('src', images[index]);
    $(this).animate('fast', function()
    {
      if (index === images.length -1)
      {
        index = 0;
      }
      else
      {
        index++;
      }
    });
  });
}

  $(document).ready(function()
    {
      setInterval (imgAnimate, 2000);
      
    });
    function reset() {
      clearInterval(int);
      imgAnimate();
    }
    });

  }
}); 
reset();