var images = ['assets/images/ruby/ruby0001.png', 'assets/images/ruby/ruby0009.png', 'assets/images/ruby/ruby0017.png'];
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

reset();