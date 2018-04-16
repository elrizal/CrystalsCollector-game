var imagesRuby = [
  "images/ruby/ruby0002.png",
  "images/ruby/ruby0004.png",
  "images/ruby/ruby0006.png",
  "images/ruby/ruby0007.png",
  "images/ruby/ruby0008.png",
  "images/ruby/ruby0009.png",
  "images/ruby/ruby0010.png",
  "images/ruby/ruby0011.png",
  "images/ruby/ruby0012.png",
  "images/ruby/ruby0013.png",
  "images/ruby/ruby0014.png",
  "images/ruby/ruby0015.png",
  "images/ruby/ruby0016.png",
  "images/ruby/ruby0013.png",
  "images/ruby/ruby0012.png",
  "images/ruby/ruby0011.png",
  "images/ruby/ruby0010.png"
];

var imagesSap = [
  'images/sapphire/sappy0004.png',
  'images/sapphire/sappy0005.png',
  'images/sapphire/sappy0006.png',
  'images/sapphire/sappy0009.png',
  'images/sapphire/sappy0010.png',
  'images/sapphire/sappy0011.png',
  'images/sapphire/sappy0013.png',
  'images/sapphire/sappy0014.png',
  'images/sapphire/sappy0015.png',
  'images/sapphire/sappy0016.png',
  'images/sapphire/sappy0017.png',
  'images/sapphire/sappy0018.png',
  'images/sapphire/sappy0019.png',
  'images/sapphire/sappy0020.png',
  'images/sapphire/sappy0021.png',
  'images/sapphire/sappy0022.png',
  'images/sapphire/sappy0023.png',
  'images/sapphire/sappy0024.png',
  'images/sapphire/sappy0025.png'
];

var imagesAme = [
  'images/amethyst/amethyst0002.png',
  'images/amethyst/amethyst0003.png',
  'images/amethyst/amethyst0004.png',
  'images/amethyst/amethyst0005.png',
  'images/amethyst/amethyst0008.png',
  'images/amethyst/amethyst0009.png',
  'images/amethyst/amethyst0010.png',
  'images/amethyst/amethyst0011.png',
  'images/amethyst/amethyst0012.png',
  'images/amethyst/amethyst0014.png',
  'images/amethyst/amethyst0015.png',
  'images/amethyst/amethyst0016.png',
  'images/amethyst/amethyst0017.png',
  'images/amethyst/amethyst0018.png',
  'images/amethyst/amethyst0019.png',
  'images/amethyst/amethyst0020.png',
  'images/amethyst/amethyst0021.png',
  'images/amethyst/amethyst0022.png',
  'images/amethyst/amethyst0023.png',
  'images/amethyst/amethyst0024.png',
  'images/amethyst/amethyst0025.png',
  'images/amethyst/amethyst0028.png',
  'images/amethyst/amethyst0029.png',
  'images/amethyst/amethyst0030.png'
];

var imagesPearl = [
  'images/pearl/crystalgems-pearl0002.png',
  'images/pearl/crystalgems-pearl0003.png',
  'images/pearl/crystalgems-pearl0004.png',
  'images/pearl/crystalgems-pearl0005.png',
  'images/pearl/crystalgems-pearl0006.png',
  'images/pearl/crystalgems-pearl0007.png',
  'images/pearl/crystalgems-pearl0008.png',
  'images/pearl/crystalgems-pearl0009.png',
  'images/pearl/crystalgems-pearl0010.png',
  'images/pearl/crystalgems-pearl0011.png',
  'images/pearl/crystalgems-pearl0012.png',
  'images/pearl/crystalgems-pearl0013.png',
  'images/pearl/crystalgems-pearl0014.png',
  'images/pearl/crystalgems-pearl0015.png',
  'images/pearl/crystalgems-pearl0016.png',
  'images/pearl/crystalgems-pearl0017.png',
  'images/pearl/crystalgems-pearl0018.png',
  'images/pearl/crystalgems-pearl0019.png'
]

function preload(imagesRuby, imagesSap, imagesAme, imagesPearl) {
  $(imagesRuby)
    .each(function () {
      $('<img/>')[0].src = this;
    });
  $(imagesSap).each(function () {
    $('<img/>')[0].src = this;
  });
  $(imagesAme).each(function () {
    $('<img/>')[0].src = this;
  });
  $(imagesPearl).each(function () {
    $('<img/>')[0].src = this;
  });
}
preload(imagesRuby);
preload(imagesSap);
preload(imagesAme);
preload(imagesPearl);
cnt = 0;

function loop() {
  $('#Image-Pearl').attr('src', imagesPearl[cnt])
  setTimeout(function () {
    loop()
  }, 50)
  cnt++;

  $('#Image-Am').attr('src', imagesAme[cnt])

   $('#Image-Sap').attr('src', imagesSap[cnt])

  $('#Image-Ruby').attr('src', imagesRuby[cnt])

}

$('#Image-Ruby').on('click', function () {
    loop();
})
$('#Image-Sap').on('click', function () {
  loop();
})
$('#Image-Am').on('click', function () {
  loop();
})
$('#Image-Pearl').on('click', function () {
  loop();
})
