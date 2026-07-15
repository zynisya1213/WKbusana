/**
 * Fungsi Penukaran Kandungan Dinamik (Simulasi Wiki)
 * @param {string} topik - ID Topik yang dipilih dari menu kiri
 */
function tukarKonten(topik) {
    const mainContent = document.getElementById('kandunganUtama');
    
    if (topik === 'utama') {
        // Memuat semula halaman untuk kembali ke keadaan asal
        location.reload();
    } 
    else if (topik === 'pengenalan-as') {
        mainContent.innerHTML = `
            <h1>The Anglo-Saxons: Asal-usul & Sejarah</h1>
            <p>Orang Anglo-Saxon terdiri daripada suku kaum Jermanik yang berhijrah ke Great Britain pada abad ke-5. Mereka terdiri daripada kaum Angles, Saxons, dan Jutes.</p>
            <h2>Budaya & Bahasa</h2>
            <p>Mereka membawa bersama bahasa 'Old English' yang menjadi asas kepada bahasa Inggeris moden hari ini.</p>
            <button class="btn-interact" onclick="tukarKonten('utama')">Kembali ke Asal</button>
        `;
    } 
    else if (topik === 'raja-as') {
        mainContent.innerHTML = `
            <h1>Raja-raja Anglo-Saxon Terkenal</h1>
            <p>Antara pemerintah yang paling ikonik termasuklah <strong>Alfred the Great</strong>, raja yang berjaya mempertahankan England daripada Viking dan menyatukan wilayah tersebut.</p>
            <button class="btn-interact" onclick="tukarKonten('utama')">Kembali</button>
        `;
    } 
    else if (topik === 'pakaian-as') {
        mainContent.innerHTML = `
            <h1>Pakaian & Perisai Anglo-Saxon</h1>
            <p>Pakaian mereka diperbuat daripada kain bulu (wool) atau linen kasar. Kerongsang logam besar (fibulae) digunakan untuk menetapkan kedudukan pakaian pada bahu.</p>
            <button class="btn-interact" onclick="tukarKonten('utama')">Kembali</button>
        `;
    }
    else {
        alert("Topik '" + topik + "' ini masih dalam proses kemaskini arkib.");
    }
}

/**
 * Fungsi Kotak Carian
 */
function fungsiCari() {
    const input = document.getElementById('searchInput').value;
    if (input.trim() === "") {
        alert("Sila masukkan kata kunci carian!");
    } else {
        alert("Mencari maklumat tentang '" + input + "' di dalam pangkalan data Wiki-OSRS...");
    }
}

/**
 * Fungsi Easter Egg (Mekanik Game OSRS)
 */
function interaksiMistik() {
    alert("Sistem: Anda telah mengklik butang mistik! Tahap pengetahuan sejarah anda meningkat sebanyak +1 XP.");
}