var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        // Tambahkan penumpang jika array kosong
        penumpang.push(namaPenumpang);
        alert(namaPenumpang + ' telah ditambahkan sebagai penumpang pertama.');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            // Tambahkan ke kursi kosong (undefined)
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                alert(namaPenumpang + ' telah ditambahkan ke kursi kosong.');
                return penumpang;
            }
            // Cek jika penumpang sudah ada
            else if (penumpang[i] == namaPenumpang) {
                alert(namaPenumpang + ' sudah ada di dalam kendaraan.');
                return penumpang;
            }
            // Jika sudah di akhir array, tambahkan di akhir
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                alert(namaPenumpang + ' telah ditambahkan ke kursi baru.');
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        alert('Tidak ada penumpang untuk dihapus.');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            // Hapus penumpang jika ditemukan
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                alert(namaPenumpang + ' telah dihapus.');
                return penumpang;
            }
            // Jika sudah di akhir array dan tidak ditemukan
            else if (i == penumpang.length - 1) {
                alert(namaPenumpang + ' tidak ditemukan di dalam angkot.');
                return penumpang;
            }
        }
    }
};

// Antarmuka sederhana menggunakan popup
while (true) {
    var action = prompt('Masukkan aksi (1.tambah/2.hapus/3.keluar):').toLowerCase();
    if (action === '3') {
        alert('Terima kasih!');
        break;
    } else if (action === '1') {
        var nama = prompt('Masukkan nama penumpang:');
        if (nama) {
            tambahPenumpang(nama, penumpang);
        } else {
            alert('Nama tidak boleh kosong!');
        }
    } else if (action === '2') {
        var nama = prompt('Masukkan nama penumpang yang akan dihapus:');
        if (nama) {
            hapusPenumpang(nama, penumpang);
        } else {
            alert('Daftar ini  tidak boleh kosong!');
        }
    } else {
        alert('Aksi tidak dikenal!');
    }
}
