document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let name = document.getElementById("commentName").value;
    let message = document.getElementById("commentMessage").value;
    let emailRecipient = "nawaf52626@gmail.com"; // Ganti dengan email pribadi

    // Membuat format mailto
    let mailtoLink = `mailto:${emailRecipient}?subject=Komentar%20dari%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    // Membuka email client pengguna
    window.location.href = mailtoLink;
});


