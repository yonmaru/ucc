// JavaScript Document

//画像切り替え
$(function() {
  // 置換の対象とするclass属性。
  var $elem = $('.image-switch');
  // 置換の対象とするsrc属性の末尾の文字列。
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 640;

  function imageSwitch() {
    // ウィンドウサイズを取得する。
    var windowWidth = parseInt($(window).width());

    // ページ内にあるすべての`.image-switch`に適応される。
    $elem.each(function() {
      var $this = $(this);
      // ウィンドウサイズが640px以上であれば_spを_pcに置換する。
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));

      // ウィンドウサイズが640px未満であれば_pcを_spに置換する。
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 100);
  });
    
});


$(function () {
    
    var windowWidth = $(window).width();
    var windowSm = 640;
    if (windowWidth <= windowSm) {
        $('#footer-links').insertBefore('#insert-anc');
        $('#footer-nav1').insertAfter('#footer-nav2 ul');
        $('#footer-nav2').insertAfter('#insert-anc');
    }    

//    var timer = false;
//    $(window).resize(function() {
//        if (timer !== false) {
//            clearTimeout(timer);
//        }
//        timer = setTimeout(function() {
//            var windowWidth = $(window).width();
//            var windowSm = 640;
//            if (windowWidth <= windowSm) {
//                $('#footer-links').insertBefore('#insert-anc');
//                $('#footer-nav1').insertAfter('#footer-nav2 ul');
//                $('#footer-nav2').insertAfter('#insert-anc');
//            }    
//        }, 200);
//    });
    
    $("#menu-btn").click(function() {
        $("#header").toggleClass("gnav-open");
        $("#gnav").slideToggle("fast");
    })
    
    $(".news-tab").click(function() {
        $(".news-contents").hide();
        $(".news-tab").removeClass("current");
        $(this).addClass("current");
        $("#"+$(this).data("box-target")).show();
        return false;
    });
    
});

