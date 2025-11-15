function kopyala() {
    const yazi = "oyna.icemp.online"
    navigator.clipboard.writeText(yazi).then(() => {
        alert("Sunucu adresi panoya kopyalandı✔");


    });
}