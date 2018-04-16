var stevenwinImgs = [
    'images/steven/winner0001.png',
    'images/steven/winner0002.png',
    'images/steven/winner0003.png',
    'images/steven/winner0004.png',
    'images/steven/winner0005.png',
    'images/steven/winner0006.png',
    'images/steven/winner0007.png',
    'images/steven/winner0008.png',
    'images/steven/winner0009.png',
    'images/steven/winner0010.png',
    'images/steven/winner0011.png',
    'images/steven/winner0012.png',
    'images/steven/winner0013.png',
    'images/steven/winner0014.png',
    'images/steven/winner0015.png',
    'images/steven/winner0016.png',
    'images/steven/winner0017.png',
    'images/steven/winner0018.png',
    'images/steven/winner0019.png',
    'images/steven/winner0020.png',
    'images/steven/winner0021.png',
    'images/steven/winner0022.png',
    'images/steven/winner0023.png',
    'images/steven/winner0024.png',
    'images/steven/winner0025.png',
    'images/steven/winner0026.png' ];

var stevenoppsImgs = [
    'images/steven/opps0001.png',
    'images/steven/opps0002.png',
    'images/steven/opps0003.png',
    'images/steven/opps0004.png',
    'images/steven/opps0005.png',
    'images/steven/opps0006.png',
    'images/steven/opps0007.png',
    'images/steven/opps0008.png',
    'images/steven/opps0009.png',
    'images/steven/opps0010.png',
    'images/steven/opps0011.png',
    'images/steven/opps0012.png',
    'images/steven/opps0013.png',
    'images/steven/opps0014.png',
    'images/steven/opps0015.png',
    'images/steven/opps0016.png',
    'images/steven/opps0017.png',
    'images/steven/opps0018.png',
    'images/steven/opps0019.png',
    'images/steven/opps0020.png',
    'images/steven/opps0021.png',
    'images/steven/opps0022.png',
    'images/steven/opps0023.png',
    'images/steven/opps0024.png',
    'images/steven/opps0025.png',
    'images/steven/opps0026.png',
    'images/steven/opps0027.png',
    'images/steven/opps0028.png',
    'images/steven/opps0029.png'];

    function preload(stevenoppsImgs, stevenwinImgs) {
        $(stevenoppsImgs)
          .each(function () {
            $('<img/>')[0].src = this;
          });
        $(stevenwinImgs).each(function () {
          $('<img/>')[0].src = this;
        });
      }
      preload(stevenoppsImgs);
      preload(stevenwinImgs);
      cnt = 0;
      
      function loop() {
        $('#Image-Win').attr('src', stevenwinImgs[cnt])
        setTimeout(function () {
          loop()
        }, 50)
        cnt++;
        $('#Image-Opps').attr('src', stevenoppsImgs[cnt])
      }
      
    //   $('#Image-Win').on('click', function () {
    //       loop();
    //   })
    //   $('#Image-Opps').on('click', function () {
    //     loop();
    // })