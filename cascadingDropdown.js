var list = {
  "School of Computer Applications": ["BCA", "MCA", "MSC"],
  "School of Computer Science And Engineering": ["CSE", "IT"],
  "Mittal School of Business": ["BBA", "MBA","BCom", "MCom"]
};

var course = $("#course");
$("#department").change(function() {
  course.empty();
  var dept = $(this).val();
  var dpt = list[dept];
  course.append('<option value="">None</option>');
  for (var item in dpt) {
    var h = '<option value="' + dpt[item] + '">' + dpt[item] + "</option>";
    course.append(h);
  }
});
