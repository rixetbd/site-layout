// $(window).on('scroll', function () {

//     var windowScroll = $(window).scrollTop();
//     var current_section = $('.ser_lead_generation').offset().top;

//     var topScroll = $('.service_info_left').offset().top;
//     var service_info_left_1 = $('.service_info_left_1').offset().top - 750;

//     var service_info_left_data = $('.service_info_left').data('index');

//     if (windowScroll > service_info_left_1) {
//         $('.service_info_left_1').addClass('opacity_100');
//     } else {
//         $('.service_info_left_1').removeClass('opacity_100');
//     }
// });


(function ($) {
    $(window).on("scroll", function () {
      //Loop Sections
      $(".service_card_offset").each(function (i, d) {
        //And Get Current One
        var windowScroll = $(window).scrollTop();
        var service_card_offset = $(this).offset().top - 500;

        var get_id = $(this).attr('id');

        if (windowScroll > service_card_offset) {
            $('.service_index').removeClass('active');
            $(`.service_index:eq(${i})`).addClass('active');
        }


        // var sec = $(this);
        // var el = $(this).find('span');

        // if (
        //   $(this).position().top - 100  <= $(document).scrollTop() &&
        //   $(this).position().top - 100  + $(this).outerHeight() > $(document).scrollTop()
        // ) {
         
        //     el.html('<p>In The Viewport: '+i+'</p>');
        //     sec.css({backgroundColor: '#ccc'});
        // }else{
        //   el.html('<p>Out Of The Viewport: '+i+'</p>');
        //   sec.css({backgroundColor: '#fafafa'});
        // }
      });
    });
  })(jQuery);