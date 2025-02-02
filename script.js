document.addEventListener("DOMContentLoaded", function() {
    const waButton = document.getElementById("waButton");
    const nomorWA = "6282293836391";
    const pesan = "Halo, saya tertarik untuk membuat website!";
    
    waButton.href = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
});
