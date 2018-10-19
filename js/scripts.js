
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var workstyle = $("input:radio[name=work-style]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var companySize = $("input:radio[name=company-size]:checked").val();
    var content = $("input:radio[name=content]:checked").val();


    if (workstyle ==="computer-no" || location ==="neither") {
      $("#no-track").show();
      $("#suggestion-modal").show();
      $("#php").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();

    } else if (development ==="back-end" && content ==="content-mgmt") {
      $("#php").show();
      $("#suggestion-modal").show();
      $("#no-track").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();

    } else if (companySize ==="large" && content ==="business") {
      $("#c-sharp").show();
      $("#suggestion-modal").show();
      $("#php").hide();
      $("#no-track").hide();
      $("#ruby").hide();

    } else if (development ==="front-end" && companySize ==="start-up" && content ==="interactive") {
      $("#ruby").show();
      $("#suggestion-modal").show();
      $("#php").hide();
      $("#c-sharp").hide();
      $("#no-track").hide();

    } else {
      $("#no-track").show();
      $("#suggestion-modal").show();
      $("#php").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
    }




    //if (location = "portland" || "seattle") {
      //$("#ruby").show();
      event.preventDefault();
    })





});
