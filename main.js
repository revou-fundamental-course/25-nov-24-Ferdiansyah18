let pria = document.getElementById('pria');
let wanita = document.getElementById('wanita');

function hitung() {
    let tinggi = document.querySelector('.input-height').value; // Ambil nilai input
    let berat = document.querySelector('.input-weight').value; // Ambil nilai input
    let hasilAngka = document.querySelector('.hasil-bb-number')
    let hasilTeks = document.querySelector('.hasil-bb-text');
    let hasildesc = document.querySelector('.hasil-bb-text-desc');
    let kategoriBerat = document.querySelector('.kategori');
    let caraDiet = document.querySelector('.cara-diet');
    let anjuran = document.querySelector('.anjuran');
    let penyakit = document.querySelector('.penyakit');
    let penyakitItem1 = document.querySelectorAll('.penyakit-items1');
    let penyakitItem2 = document.querySelectorAll('.penyakit-items2');
    let penyakitItem3 = document.querySelectorAll('.penyakit-items3');
    let penyakitItem4 = document.querySelectorAll('.penyakit-items4');

    const BMI = berat / Math.pow(tinggi, 2);

    if (BMI < 18,5) {
        hasilAngka.innerHTML = BMI;
        hasilTeks.innerHTML = 'Berat Badan Kurang';
        hasildesc.innerHTML = 'Anda kekurangan berat badan ';
        kategoriBerat.innerHTML = 'Anda berada dalam kategori kekurangan berat badan'
        caraDiet.innerHTML = 'Anda butuh makan yang teratur';
        anjuran.innerHTML = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal'
        penyakit.innerHTML = 'Beberapa penyakit yang berasal dari kekurangan berat badan'
        penyakitItem1.innerHTML = 'Anemia'
        penyakitItem2.innerHTML = 'Osteoporosis'
        penyakitItem3.innerHTML = 'Malnutrisi'
        penyakitItem4.innerHTML = 'Penurunan kekebalan tubuh'
    }

    if (BMI > 18) {
        hasilAngka.innerHTML = BMI;
        hasilTeks.innerHTML = 'Berat Badan Normal';
        hasildesc.innerHTML = 'Anda memiliki berat badan normal';
        kategoriBerat.innerHTML = 'Anda berada dalam kategori berat badan normal'
        caraDiet.innerHTML = 'Anda perlu menjaga pola makan sehat';
        anjuran.innerHTML = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan'
        penyakit.innerHTML = 'Anda sehat, insyaallah tidak sakit'
        penyakitItem1.innerHTML = ''
        penyakitItem2.innerHTML = ''
        penyakitItem3.innerHTML = ''
        penyakitItem4.innerHTML = ''
    }

    if (BMI > 25) {
        hasilAngka.innerHTML = BMI;
        hasilTeks.innerHTML = 'Berat Badan Lebih';
        hasildesc.innerHTML = 'Anda memiliki berat badan terlebih';
        kategoriBerat.innerHTML = 'Anda berada dalam kategori kekurangan berat badan'
        caraDiet.innerHTML = 'Anda butuh makan yang teratur';
        anjuran.innerHTML = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untu menaikkan berat badan hingga batas normal'
        penyakit.innerHTML = 'Beberapa penyakit yang berasal dari kegemukan'
        penyakitItem1.innerHTML = 'Diabetes'
        penyakitItem2.innerHTML = 'Hipertensi'
        penyakitItem3.innerHTML = 'Sakit Jantung'
        penyakitItem4.innerHTML = 'Osteoarthritis'
    }

    if (BMI > 30) {
        hasilAngka.innerHTML = BMI;
        hasilTeks.innerHTML = 'Berat Badan Lebih';
        hasildesc.innerHTML = 'Anda memiliki berat badan obesitas';
        kategoriBerat.innerHTML = 'Anda berada dalam kategori kelebihan berat badan'
        caraDiet.innerHTML = 'Anda butuh diet ketat dan menjaga pola makan';
        anjuran.innerHTML = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untu menurunkkan berat badan hingga batas normal'
        penyakit.innerHTML = 'Beberapa penyakit yang berasal dari kegemukan'
        penyakitItem1.innerHTML = 'Diabetes'
        penyakitItem2.innerHTML = 'Hipertensi'
        penyakitItem3.innerHTML = 'Sakit Jantung'
        penyakitItem4.innerHTML = 'Osteoarthritis'
    }
}
