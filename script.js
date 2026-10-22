
const daftarMenu = document.querySelectorAll(".menu");

// Menghitung total harga menu
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;

  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  document.getElementById("total").textContent =
    total.toLocaleString("id-ID");
}

// Memeriksa bilangan
function cekBilangan() {
  const input = document.getElementById("bilangan");
  const hasil = document.getElementById("hasilBilangan");

  if (input.value === "") {
    hasil.textContent = "Silakan masukkan bilangan.";
    return;
  }

  const bilangan = Number(input.value);

  if (!Number.isInteger(bilangan)) {
    hasil.textContent = "Masukkan bilangan bulat.";
  } else if (bilangan % 2 === 0) {
    hasil.textContent = bilangan + " adalah bilangan genap.";
  } else {
    hasil.textContent = bilangan + " adalah bilangan ganjil.";
  }
}

// Mengubah warna latar
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// Menghitung nilai akhir mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

// Menentukan predikat nilai
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// Memproses Mini Project
document.getElementById("formNilai").addEventListener("submit", function(event) {
  event.preventDefault();

  const tugasInput = document.getElementById("tugas");
  const utsInput = document.getElementById("uts");
  const uasInput = document.getElementById("uas");
  const hasil = document.getElementById("hasilNilai");

  const tugas = Number(tugasInput.value);
  const uts = Number(utsInput.value);
  const uas = Number(uasInput.value);

  if (
    tugasInput.value === "" ||
    utsInput.value === "" ||
    uasInput.value === "" ||
    tugas < 0 || tugas > 100 ||
    uts < 0 || uts > 100 ||
    uas < 0 || uas > 100
  ) {
    hasil.textContent =
      "Masukkan semua nilai dalam rentang 0 sampai 100.";
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  hasil.innerHTML = `
    <h3>Hasil Perhitungan Nilai</h3>
    <p>Nilai Tugas: ${tugas}</p>
    <p>Nilai UTS: ${uts}</p>
    <p>Nilai UAS: ${uas}</p>
    <p>Nilai Akhir: ${akhir.toFixed(2)}</p>
    <p>Predikat: ${predikat}</p>
    <p>Status: ${status}</p>
  `;
});
