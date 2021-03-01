let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  function formDataFunc(name, gender, email, website, skills, image) {
    (this.name = name),
      (this.gender = gender),
      (this.email = email),
      (this.website = website),
      (this.skills = skills),
      (this.image = image);
  }

  let formData = [];
  formData.push(
    new formDataFunc(
      document.getElementById("name").value,
      document.querySelector(
        'input[type="radio"]:checked'
      ).parentElement.textContent,
      document.getElementById("email").value,
      document.getElementById("website").value,
      document.querySelector(
        'input[type="checkbox"]:checked'
      ).parentElement.textContent,
      document.getElementById("image").value
    )
  );

  for (i = 0; i < formData.length; i++) {
    $("#table tr:last").after(`<tr class="enrollment">
    <td>
      <h6>${formData[i].name}</h6>
      <p>${formData[i].gender}</p>
      <p>${formData[i].email}</p>
      <a href="${formData[i].website}" target="blank"><p>${formData[i].website}</p></a>
      <p>${formData[i].skills}</p>
    </td>
    <td>
    <a href="${formData[i].image}" target="blank">
    <img class="img-fluid" src="${formData[i].image}" alt="image" />
    </a>
    </td>
    </tr>`);
    var rows = $(".enrollment");
    rows.hide();
    $("#table tr td p").css({ "margin-bottom": "0" });
    $("#table tr td h6").css({ "margin-bottom": "0" });
    $("#table:last-child").after(rows);
    rows.fadeIn("slow");
  }
});

// Disable form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
