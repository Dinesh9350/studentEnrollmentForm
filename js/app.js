let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  function formData(name, gender, email, website, skills, image) {
    (this.name = name),
      (this.gender = gender),
      (this.email = email),
      (this.website = website),
      (this.skills = skills),
      (this.image = image);
  }

  let formDatas = [];
  formDatas.push(
    new formData(
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
  console.log(formDatas);

  let table = document.getElementById("table");

  let renderedElement = formDatas.map(e=>{
    return `<tr id="enrollment" class="table-warning">
    <td class="py-2">
      <h6>${e.name}</h6>
      <p>${e.gender}</p>
      <p>${e.email}</p>
      <a href="${e.website}"><p>${e.website}</p></a>
      <p>${e.skills}</p>
    </td>
    <td>
    <img class="img-fluid" src="${e.image}" alt="" />
    </td>
    </tr>`
  })

  table.innerHTML=renderedElement.join('')

  console.log(renderedElement)


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
