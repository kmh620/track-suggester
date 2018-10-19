
$(document).ready(function() {
  $("#questions").submit(function(event) {
    var location = $("input:radio[name=location]:checked").val();
    var workstyle = $("input:radio[name:work-style]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var companySize = $("input:radio[name=company-size]:checked").val();
    var content = $("input:radio[name=content]:checked").val();

    



    event.preventDefault();
  });
});
