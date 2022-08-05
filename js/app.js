$(document).ready(function () {
  // Start Header Section
  // Start Banner Section
  $(".carousel").carousel({
    interval: 1000,
  });
  // Start Banner Section
  // Start Header Section
  //   console.log("hi");

  //   Start info section
  $(window).scroll(function () {
    let getscrollpoint = $(this).scrollTop();
    if (getscrollpoint >= 220) {
      $(".infotexts").addClass("fromlefts");
      $(".infotopics").addClass("fromrights");
    } else {
      $(".infotexts").removeClass("fromlefts");
      $(".infotopics").removeClass("fromrights");
    }
  });
  //   End info section
  //Start ADV SEction

  $("#videos").click(function () {
    var getmodal = $(this).data("bs-target");
    var getvideosrc = $(this).data("video");
    var videourlwithauto = getvideosrc + "?autoplay=1";

    $(getmodal + "iframe").attr("src" + videourlwithauto);

    $(getmodal + "button.btn-close").click(function () {
      $(getmodal + "iframe").attr("src", getvideosrc);
    });
    $(getmodal).click("hidden.bs.modal", function () {
      $(getmodal + "iframe").attr("src", getvideosrc);
    });
  })
  //End ADV SEction

  //Start Premies Section
  $("#lightslider").lightSlider({

    item: 4,
    loop: true,
    slideMove: 1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    auto: true
  }).play();
  // End Premies Section

  // Start pricing section
  $(window).scroll(function () {
    let getscroll = $(this).scrollTop();
    if (getscroll >= 2450) {
      $(".cardones").addClass("move-lefts");
      $(".cardtwos").addClass("move-bottoms");
      $(".cardthrees").addClass("move-rights");
    } else {
      $(".cardones").removeClass("move-lefts");
      $(".cardtwos").removeClass("move-bottoms");
      $(".cardthrees").removeClass("move-rights");
    }
  })
  //End pricing section

  //Start join us section

  $("#accordion").accordion();
  //END join us section
  // Start footer section
  $("#getyear").text(new Date().getUTCFullYear());
  // End footer section
  // start progress
  $(window).scroll(function () {
    var getprogress = $("#progresses");
    var getprogressvalue = $("#progressvalues");
    var getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);

    //By JQUERY

    // var getscrollheight = $(document).height();
    // console.log(getscrollheight);

    // var getclientheight = $(window).height();
    // console.log(getclientheight);

    // var calheight = getscrollheight - getclientheight;
    // var getfinalheight = Math.round(getscrolltop * 100 / calheight);

    //console.log(getfinalheight);

    // formula
    //st*100/(projectheight-currentviewhright)


    //By Javascrpt
    var getscrollheight = document.documentElement.scrollHeight;
    console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    console.log(getclientheight);
    var calheight = getscrollheight - getclientheight;
    var getfinalheight = Math.round(getscrolltop * 100 / calheight);




    getprogressvalue.text(`${getfinalheight}%`);

    getprogress.css({
      "background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
    })


  })
  //end progress
});

// 28FR
// 4PS