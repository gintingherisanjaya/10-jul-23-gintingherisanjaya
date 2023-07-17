function proses() {
    // Mengambil Nilai dari element ke variabel penampung nilai
    let jk = document.getElementsByName('jk');
    let usia = document.getElementById('usia').value;
    let bb = document.getElementById('bb').value;
    let tb = document.getElementById('tb').value;
    
    // Mengambil Jenis Kelamin Yang Terpilih (Checked)
    for(let i=0; i<jk.length; i++) {
        if(jk[i].checked) jk = jk[i].value;
    }

    /*
    * Validation
    * Memeriksa apakah ada variabel yang kosong atau tidak  
    */
    let error = false;
    if(bb === '') {
        error = 'Berat Badan';
        document.getElementById('bb').focus();
    }
    else if(usia === '') {
        error = 'Usia';
        document.getElementById('usia').focus();
    }
    else if(tb === '') {
        error = 'Tinggi Badan';
        document.getElementById('tb').focus();

    };

    // Jika variabel error memiliki nilai yang tidak false maka berikan pesan error
    if(error) alert(`${error} Wajib Diisi`);
    else { // Jika kondisi diatas tidak dipenuhi blok perintah ini dieksekusi
        // Format usia, berat badan, dan tinggi badan ke tipe data angka agar dapat dioperasikan
        usia = Number(usia);
        bb = Number(bb);
        tb = Number(tb);
        
        /*
        * Validation
        * Jika Diisi Dengan Benar, usia, berat badan, dan tinggi badan seharusnya tidak bernilai negatif
        */
        let errorAngka = false;
        if(bb === 0) {
            errorAngka = 'Berat Badan';
            document.getElementById('bb').focus();
        }
        else if(usia === 0) {
            errorAngka = 'Usia';
            document.getElementById('usia').focus();
        }
        else if(tb === 0) {
            errorAngka = 'Tinggi Badan';
            document.getElementById('tb').focus();
    
        }; 
    
        /*
        * Jika variabel errorAngka tidak bernilai false maka blok fungsi IF dieksekusi
        * Jika variabel errorAngka bernilai false maka blok perintah ELSE yang dieksekusi
        */
        if(errorAngka) alert(`${errorAngka} Wajib Lebih Besar Dari 0`);
        else {
            // Konversi tinggi badan dari satuan cm (centimeter) ke satuan m (meter)
            tb = tb / 100;

            // Operasi perhitungan BMI
            const hasil = bb / (tb * tb);

            // Menentukan Status Berat Badan Berdasarkan BMI
            let pesan = [];
            if(hasil < 18.5) {
                pesan['judul'] = 'Kurang Berat Badan';
                pesan['deskripsi'] = 'kurang dari 18.5';
                pasan['saran'] = 'menaikkan berat badan hingga batas normal'
            } else if(hasil < 24.9) {
                pesan['judul'] = 'Normal';
                pesan['deskripsi'] = 'antara 18.5 dan 24.9';
                pesan['saran'] = 'pertahankan pola makan dan rajin olahraga';
            } else if(hasil < 29.9) {
                pesan['judul'] = 'Kelebihan Berat Badan';
                pesan['deskripsi'] = 'diantara 25.0 dan 29.9';
                pesan['saran'] = 'menurunkan berat badan hingga batas normal';
            } else if(hasil >= 30) {
                pesan['judul'] = 'Kegemukan (Obesitas)';
                pesan['deskripsi'] = 'sama dengan 30 atau lebih';
                pesan['saran'] = 'segera konsultasi dengan dokter'
            }

            // Menghilangkan Form Kalkulator BMI Dari Layar
            document.getElementById('kalkulator').style.display= "none";

            // Menampilkan Hasil Status Berat Badan
            document.getElementById('hasil').style.display= "flex";

            // Mengubah Teks pada Element sesuai ID menjadi sesuai status berat badan 
            document.getElementById('pesan-bmi').innerHTML = pesan['judul'];
            document.getElementById('pesan-bmi-kategori').innerHTML = pesan['judul'];
            document.getElementById('pesan-bmi-deskripsi').innerHTML = pesan['deskripsi'];
            document.getElementById('pesan-bmi-saran').innerHTML = pesan['saran'];
            
            // Mengubah Teks pada Element dengan ID bmi menjadi sesuai bmi 
            document.getElementById('bmi').innerHTML = hasil.toFixed(1);
        }
    } 
}


