(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      var form = document.getElementById("myform");
      form.addEventListener(
        "submit",
        function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
          if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            var fName = $("#firstName").val();
            var lName = $("#lastName").val();
            var fatherName = $("#fatherName").val();
            var dob = $("#DOB").val();
            var gender = $("input[name='gender']:checked").val();
            var Email = $("#email").val();

            var mob = $("#mobileNumber").val();
            var session = $("#session").val();
            var department = $("#department").val();
            var course = $("#course").val();

            var h = "<tr>";
            h += "<td>" + fName + "</td>";
            h += "<td>" + lName + "</td>";
            h += "<td>" + fatherName + "</td>";
            h += "<td>" + dob + "</td>";
            h += "<td>" + gender + "</td>";
            h += "<td>" + Email + "</td>";
            h += "<td>" + mob + "</td>";
            h += "<td>" + session + "</td>";
            h += "<td>" + department + "</td>";
            h += "<td>" + course + "</td>";
            h += "</tr>";
            $("#tblData tr:last").after(h);
          }
        },
        false
      );
    },
    false
  );
})();
