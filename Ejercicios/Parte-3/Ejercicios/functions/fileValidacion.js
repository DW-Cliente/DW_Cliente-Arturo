// Función para validar los archivos, el form y la imagen
function validacion(file, form, imgPreview) {

    if (!file) {
        form.mainPhoto.setCustomValidity("La imagen es obligatoria.");
        form.mainPhoto.reportValidity(); // Mostramos error al usuario
        imgPreview.classList.add("hidden");
        imgPreview.removeAttribute("src");
        return false;

    }else if (!file.type.startsWith("image/")) {
        form.mainPhoto.setCustomValidity("El archivo debe ser una imagen");
        form.mainPhoto.reportValidity(); // Mostramos error al usuario
        imgPreview.classList.add("hidden");
        imgPreview.removeAttribute("src");
        return false;

    }else if (file.size > 200 * 1024) {
        form.mainPhoto.setCustomValidity("La imagen no puede pesar más de 200 KB.");
        form.mainPhoto.reportValidity();
        imgPreview.classList.add("hidden");
        imgPreview.removeAttribute("src");
        return false;

    } else {
        form.mainPhoto.setCustomValidity("");
        return true;
    }

}

export { validacion };