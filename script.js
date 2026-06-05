document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Portofolio Kak Siti Nurul Hidayah siap dijalankan! 🚀");

    // Efek notifikasi ramah saat tombol LinkedIn dipencet
    const linkedinButton = document.querySelector('.btn-linkedin');
    if (linkedinButton) {
        linkedinButton.addEventListener('click', () => {
            alert("Menuju ke akun resmi LinkedIn Kak Siti Nurul Hidayah! ✨");
        });
    }
});