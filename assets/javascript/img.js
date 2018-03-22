var images = ['assets/images/ruby/ruby2.png', 'assets/images/ruby/ruby6.png', 'assets/images/ruby/ruby10.png'];
var index = 0;

$( "#Image" ).hover(function(imgAnimate) {

    
function imgAnimate()
{
  $('#Image').animate('fast', function()
  {
    $(this).attr('src', images[index]);

    $(this).animate('fast', function()
    {
      if (index == images.length-3)
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
  setInterval (imgAnimate, 1000);
  
});
});

function reset() {
    clearInterval(int);
    imgAnimate();
  }