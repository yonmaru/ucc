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
        $("#wrapper").toggleClass("bg");
    })
    
    $(".news-tab").click(function() {
        $(".news-contents").hide();
        $(".news-tab").removeClass("current");
        $(this).addClass("current");
        $("#"+$(this).data("box-target")).show();
        return false;
    });
    
    $("#app_bnr-close").click(function() {
        $(".app_bnr").slideUp("slow");
    })
    
    $(document).on('click touchend', function(e) {
        if (!$(e.target).closest('#menu-btn').length) {
            $("#header").removeClass("gnav-open");
            $("#gnav").slideUp("fast");
            $("#wrapper").removeClass("bg");
        }
    });
    
});


$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
