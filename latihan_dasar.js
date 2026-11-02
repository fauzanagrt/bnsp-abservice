/**
 * Latihan Praktik Pemrograman Web - Node.js Dasar
 * Dosen Pengampu: Pak Andi Aljabar
 */

// 1. Pengenalan console.log untuk Debugging dan Output Terminal
console.log("=== MEMULAI PROGRAM NODE.JS ===");

// 2. Pembuatan Variabel (Nama, NIM, Prodi, Semester, Kelas)
const nama = "Dede Ahmad Fauzan"; 
const nim = "24260014";
const prodi = "Teknik Informatika";
const semester = "Semester 5";
const kelas = "TI-24";

// 3. Menampilkan Output Menggunakan Template Literal (${variabel})
console.log(`Halo ${kelas}!`);
console.log(`Nama saya ${nama} dengan NIM ${nim}, dari prodi ${prodi} saat ini ${semester}.`);

// 4. Simulasi Logika Sederhana & Pengecekan Error
const isError = false;

if (!isError) {
    console.log("[STATUS] Kode berjalan lancar tanpa error!");
} else {
    console.log("[ERROR] Terjadi masalah pada eksekusi kode.");
}

console.log("=== PROGRAM SELESAI ===");