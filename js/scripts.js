
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var workstyle = $("input:radio[name=work-style]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var companySize = $("input:radio[name=company-size]:checked").val();
    var content = $("input:radio[name=content]:checked").val();

    if (location = portland || seattle) {
      $("#ruby").show();

    } else {
      $("#no-track").show();
    }



    event.preventDefault();
  });
});
