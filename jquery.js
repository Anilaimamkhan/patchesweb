$(document).ready(function () {
  $(window).scroll(function () {
    let positionTop = $(document).scrollTop();
    // console.log(positionTop);


    if (positionTop > 100) {
      $(".header").addClass("active")
    } else {
      $(".header").removeClass("active")
    }


  })
})





// $(document).ready(function () {
//   $(window).scroll(function () {
//     let positionTop = $(document).scrollTop();
//     console.log(positionTop);
//     if ((positionTop > 200) && (positionTop < 51 )) {
//       alert("yes")
//       $(".text h1").addClass("animate__animated animate__bounce")
//     }

//   })
// })


$(document).ready(function () {
  let offset = { offset: '50%' }

  $(".animateLeft").waypoint(function () {
    $(".animateLeft").addClass("animate__animated animate__fadeInLeft");
  }, offset);

  $(".animatedRight").waypoint(function () {
    $(".animatedRight").addClass("animate__animated animate__fadeInRight");
  }, offset);

  $(".para-up").waypoint(function () {
    $(".para-up").addClass("animate__animated animate__fadeInUp");
  }, offset);

  $(".zoom1").waypoint(function () {
    $(".zoom1").addClass("animate__animated animate__zoomIn");
  }, offset);

$(".zoom2").waypoint(function () {
    $(".zoom2").addClass("animate__animated animate__zoomIn");
  }, offset);

  $(".zoom3").waypoint(function () {
    $(".zoom3").addClass("animate__animated animate__zoomIn");
  }, offset);


























})
