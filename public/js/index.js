$(document).ready(function () {

  $(".post-container").hide();

  $.ajax({
    type: "GET",
    url: "/api/user/:id?"
  }).done(function (user) {
    console.log(user)
    // update pagfe heere
  });

  $("#fa-plus").on("click", function (event) {
    event.preventDefault();

    console.log("This click worksssss")

    $(".post-container").show();


  });

});