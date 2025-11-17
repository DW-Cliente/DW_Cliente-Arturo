// Convertir el archivo a Base64

export default function base64 (file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
}
