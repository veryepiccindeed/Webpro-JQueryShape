$(document).ready(function() {
    let isAnimating = false;

    // Fungsi untuk menambahkan bentuk
    $("#addShapeBtn").click(async function() {
        if (isAnimating) return;  // Cegah animasi tumpang tindih
        isAnimating = true;  // Tandai bahwa animasi sedang berlangsung

        // Ambil tipe bentuk dan warna dari input
        const shapeType = $("#shapeType").val();
        const shapeColor = $("#shapeColor").val();
        // Buat elemen div baru dengan kelas yang sesuai
        const shape = $(`<div class="shape ${shapeType}"></div>`);
        shape.css("background-color", shapeColor);
        // Sembunyikan bentuk, tambahkan ke kontainer, lalu tampilkan dengan animasi
        shape.hide().appendTo(".shapeContainer").slideDown(500, function() {
            isAnimating = false;  // Atur ulang flag animasi setelah selesai
        });
    });

    // Fungsi untuk menghapus bentuk terakhir
    $("#removeShapeBtn").click(async function() {
        if (isAnimating) return;  // Cegah animasi tumpang tindih
        isAnimating = true;  // Tandai bahwa animasi sedang berlangsung

        // Pilih bentuk terakhir yang ada di dalam kontainer
        const lastShape = $(".shapeContainer .shape").last();
        if (lastShape.length) {
            // Sembunyikan bentuk dengan fade out sebelum menghapusnya
            lastShape.fadeOut(500, function() {
                $(this).remove();
                isAnimating = false;  // Atur ulang flag animasi setelah selesai
            });
        } else {
            isAnimating = false;  // Atur ulang flag animasi jika tidak ada bentuk yang dihapus
        }
    });
});
