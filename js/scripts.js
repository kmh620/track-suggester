
$(document).ready(function() {
  $(".form-groupOne").hide();
  $(".form-groupTwo").hide();
  $(".form-groupThree").hide();
  $(".form-groupFour").hide();
  $(".form-groupFive").hide();
  $(".form-groupButton").hide();

  $(".start-quiz").click(function(){
    $(".form-groupOne").show(1000);
    $(".form-groupName").hide(1000);
  });
  $(".form-groupOne").click(function() {
    $(".form-groupTwo").show(1000);
    $(".form-groupOne").hide(1000);
  });
  $(".form-groupTwo").click(function() {
    $(".form-groupThree").show(1000);
    $(".form-groupTwo").hide(1000);
  });
  $(".form-groupThree").click(function() {
    $(".form-groupFour").show(1000);
    $(".form-groupThree").hide(1000);
  });
  $(".form-groupFour").click(function() {
    $(".form-groupFive").show(1000);
    $(".form-groupFour").hide(1000);
  });
  $(".form-groupFive").click(function() {
    $(".form-groupButton").show(1000);
    $(".form-groupFive").hide(1000);
  });


  $("form#questions").submit(function(event) {
    var name = $("#your-name").val();
    var workstyle = $("input:radio[name=work-style]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var companySize = $("input:radio[name=company-size]:checked").val();
    var content = $("input:radio[name=content]:checked").val();


    if (workstyle ==="computer-no") {
      $("#no-track").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#php").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#java").hide();
      $("#online").hide();

    } else if (location ==="neither") {
      $("#online").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#no-track").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#java").hide();
      $("#php").hide();

    } else if (development ==="back-end" && content ==="content-mgmt") {
      $("#php").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#no-track").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#java").hide();
      $("#online").hide();

    } else if (companySize ==="large" && content ==="business") {
      $("#c-sharp").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#php").hide();
      $("#no-track").hide();
      $("#ruby").hide();
      $("#java").hide();
      $("#online").hide();

    } else if (development ==="front-end" && companySize ==="start-up" && content ==="interactive") {
      $("#ruby").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#php").hide();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#no-track").hide();
      $("#online").hide();


    } else if (development ==="back-end" && companySize ==="large" && content ==="interactive") {
      $("#java").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#php").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#no-track").hide();
      $("#online").hide();

    } else {
      $("#no-track").show();
      $("#suggestion-modal").show();
      $(".name").text(name);
      $("#java").hide();
      $("#php").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#online").hide();
    }

      event.preventDefault();
    })
});
