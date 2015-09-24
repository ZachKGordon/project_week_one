$(document).ready(function () {

  $(".carousel-inner-download").cycle({
    fx:'scrollDown',
    // pager: '.pager',
    timeout: 4000,
    speed: 1000,
    // pause: 1,
  });

  $(".carousel-inner-download-2").cycle({
    fx:'scrollUp',
    // pager: '.pager',
    timeout: 4000,
    speed: 1000,
    // pause: 1,
  });

  $(".carousel-inner-download-3").cycle({
    fx:'scrollDown',
    // pager: '.pager',
    timeout: 4000,
    speed: 1000,
    // pause: 1,
  });

  $(".carousel-inner-download-4").cycle({
    fx:'scrollUp',
    // pager: '.pager',
    timeout: 4000,
    speed: 1000,
    // pause: 1,
  });

  $(".c1-right").on("click", function(e) {
    var activeImage = $(".c1-image-shown");
    var nextImage = activeImage.next();

      if(nextImage.length == 0) {
        nextImage = $(".slider-inner img").first();
        nextImage = $(".slider-inner-2 img").first();
        nextImage = $(".slider-inner-3 img").first();
      };

    activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index",-10);;
    nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index",20);
    $(".slider-inner img").not([activeImage, nextImage]).css("z-index",1);
  });

  $(".c1-left").on("click", function(e){
    var activeImage = $(".c1-image-shown");
    var nextImage = activeImage.prev();

    if(nextImage.length == 0) {
      nextImage = $('.slider-inner img').last();
      nextImage = $('.slider-inner-2 img').last();
      nextImage = $(".slider-inner-3 img").last();

    }
    activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index", -10);
    nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index", 20);
    $('.slider-inner img').not([activeImage, nextImage]).css("z-index", 1);
  })

});
