// Convertir el archivo a Base64
function base64 (file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
}

export { base64 }