(function ($) {
    $(window).on("scroll", function () {
      //Loop Sections
      $(".service_card_offset").each(function (i, d) {
        //And Get Current One
        var windowScroll = $(window).scrollTop();
        var service_card_offset = $(this).offset().top - 500;
        if (windowScroll > service_card_offset ) {
            $('.service_index').removeClass('active');
            $(`.service_index:eq(${i})`).addClass('active');
            $('.accordion-collapse').removeClass('show');
            $(`.service_index:eq(${i})`).parents('.accordion-body').parents('.accordion-collapse').addClass('show');
        } 

        // if ($(`.service_index:eq(${1})`).offset().top < 1000) {
        //   $(`.service_index`).removeClass('active');
        // }

      });
    });
  })(jQuery);


  function data_sectionname(){
    
    $('.page_part_offset').each(function() {
      
      console.log($(this).data('sectionname'))

    });
  }

  data_sectionname();