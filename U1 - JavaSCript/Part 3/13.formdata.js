const form = document.getElementById("form1");
const imgPreview = document.getElementById("imgPreview");

form.avatar.addEventListener("change", e => {
    const file = e.target.files[0]; // Archivo seleccionado
    if(!file) {
        imgPreview.src = "";
        return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", () => {
        imgPreview.src = fileReader.result;
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const datos = {
    nombre: data.get("nombre"),
    hobbies: data.getAll("hobbies"),
    avatar: imgPreview.src
  };
  console.log(datos);
});
