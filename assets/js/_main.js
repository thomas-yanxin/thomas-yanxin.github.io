/* Shared media behavior. Layout and anchors use native browser features. */
$(document).ready(function () {
  $("#main").fitVids();

  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']")
    .addClass("image-popup");

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: reduceMotion ? 0 : 200,
    mainClass: reduceMotion ? '' : 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true
  });
});
