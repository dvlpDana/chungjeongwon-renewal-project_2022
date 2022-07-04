$(function () {
  $('.ham').on('click', function () {
    $('.header_gnb').addClass('onClick')
  })

  $('.btn_close').on('click', function () {
    $('.header_gnb').removeClass('onClick')
  })
})

// sec-hero slide effect
$(function(){

  function hero_nextAni() {
    $('.hero_slide').not(':animated').animate({
      marginLeft:-100 + '%'
    }, 700,
    function() {
      $('.hero_slide>li').eq(0).appendTo($('.hero_slide'))
      $('.hero_slide').css({
        marginLeft: 0
      })
    })
  }

  let intv = setInterval(function() {hero_nextAni()}, 10000)
})

// sec-lineBrand slide effect

$(function(){

  function linebrand_nextAni() {
    $('.lineBrand_slide').not(':animated').animate({
      marginLeft:-100 + '%'
    }, 700,
    function() {
      $('.lineBrand_slide>li').eq(0).appendTo($('.lineBrand_slide'))
      $('.lineBrand_slide').css({
        marginLeft: 0
      })
    })
  }

  function linebrand_prevAni() {
    $('.lineBrand_slide>li').eq(-1).prependTo($('.lineBrand_slide'))
    $('.lineBrand_slide').css({
      marginLeft: -100 + '%'
    })
    $('.lineBrand_slide').not(':animated').animate({
      marginLeft: 0
    }, 700)
  }

  function visible() {
    $('.products_img>img').toggleClass('visible')
  }

  function on() {
    $('.dot').toggleClass('on')
  }

  let intv = setInterval(function() {linebrand_nextAni()}, 14000)
})