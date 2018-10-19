
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var workstyle = $("input:radio[name=work-style]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var companySize = $("input:radio[name=company-size]:checked").val();
    var content = $("input:radio[name=content]:checked").val();

    if (workstyle ==="computer-yes" && location ==="portland" || "seattle" && development ==="back-end" && content ==="content-mgmt") {
      $("#php").show();

    }




    //if (location = "portland" || "seattle") {
      //$("#ruby").show();
      event.preventDefault();
    })





});
