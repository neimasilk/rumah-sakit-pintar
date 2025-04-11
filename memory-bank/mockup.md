# **Dokumen Mockup \- Sistem Manajemen Rumah Sakit Pintar**

## **Pendahuluan**

Dokumen ini berisi mockup dan wireframe untuk Sistem Manajemen Rumah Sakit Pintar yang terdiri dari aplikasi web, aplikasi mobile (untuk pasien dan dokter), serta simulasi IoT. Mockup ini dirancang berdasarkan kebutuhan pengguna dan spesifikasi teknis yang telah didefinisikan dalam dokumen desain proyek.

## **Aplikasi Web**

### **Halaman Login Web**

**Halaman Login Web**

**Komponen:**

* Form login dengan field:  
  * Username/Email  
  * Password  
  * Remember me (checkbox)  
* Tombol "Login"  
* Tautan "Lupa Password"  
* Opsi autentikasi multi-faktor (MFA) dengan Google Authenticator

**Spesifikasi Teknis:**

* Implementasi JWT untuk autentikasi  
* Validasi form di sisi klien menggunakan React  
* Enkripsi SSL/TLS untuk keamanan data

### **Dashboard Admin**

**Dashboard Admin**

**Komponen:**

* Sidebar navigasi dengan menu:  
  * Dashboard  
  * Manajemen Pasien  
  * Jadwal Dokter  
  * Laporan Keuangan  
  * Monitoring IoT  
  * Pengaturan  
* Header dengan:  
  * Logo rumah sakit  
  * Notifikasi  
  * Profil pengguna  
* Area konten dengan:  
  * Statistik harian (jumlah pasien, janji temu, dokter tersedia)  
  * Grafik jumlah kunjungan  
  * Daftar janji temu hari ini  
  * Status ketersediaan dokter  
  * Notifikasi penting (peringatan dari simulasi IoT)

**Spesifikasi Teknis:**

* Implementasi React dengan Redux untuk state management  
* Grafik menggunakan library Recharts  
* Real-time updates dengan WebSockets dari backend Node.js

### **Manajemen Pasien**

**Manajemen Pasien**

**Komponen:**

* Pencarian pasien (dengan filter)  
* Tabel data pasien dengan kolom:  
  * ID Pasien  
  * Nama Lengkap  
  * Tanggal Lahir  
  * Jenis Kelamin  
  * Golongan Darah  
  * Kontak  
  * Status  
  * Aksi (Lihat Detail, Edit, Hapus)  
* Tombol "Tambah Pasien Baru"  
* Filter berdasarkan status, jenis kelamin, dll.  
* Pagination

**Modal Tambah/Edit Pasien:**

* Form dengan field:  
  * Nama Lengkap  
  * Tanggal Lahir  
  * Jenis Kelamin (dropdown)  
  * Golongan Darah (dropdown)  
  * Alamat  
  * Nomor Telepon  
  * Kontak Darurat  
  * Email  
  * Upload Foto (opsional)

**Spesifikasi Teknis:**

* Form validation dengan Formik & Yup  
* Upload gambar ke AWS S3  
* Data tersimpan di PostgreSQL melalui API Express.js

### **Jadwal Dokter**

**Jadwal Dokter**

**Komponen:**

* Tampilan kalender mingguan/bulanan  
* Daftar dokter (dengan filter spesialisasi)  
* Color-coding untuk status:  
  * Tersedia  
  * Tidak tersedia  
  * Sedang bertugas  
  * Cuti  
* Drag & drop interface untuk pengaturan jadwal  
* Detail janji temu per slot waktu

**Modal Pengaturan Jadwal:**

* Pilih dokter  
* Tentukan tanggal dan waktu  
* Status ketersediaan  
* Durasi default per pasien  
* Jenis layanan

**Spesifikasi Teknis:**

* Calendar view dengan FullCalendar  
* Drag & drop dengan React DnD  
* Caching jadwal dengan Redis untuk performa  
* Notifikasi otomatis ke dokter via RabbitMQ

### **Laporan Keuangan**

**Laporan Keuangan**

**Komponen:**

* Filter periode laporan (harian, mingguan, bulanan, tahunan)  
* Grafik pendapatan dan pengeluaran  
* Tabel transaksi dengan kolom:  
  * ID Transaksi  
  * Tanggal  
  * Pasien  
  * Layanan  
  * Nominal  
  * Status Pembayaran  
* Rekap biaya per departemen  
* Tombol ekspor (PDF, Excel)  
* Statistik pendapatan

**Spesifikasi Teknis:**

* Grafik dengan Recharts  
* Ekspor laporan menggunakan library jsPDF dan xlsx  
* Perhitungan dilakukan di backend untuk keamanan

### **Monitoring IoT**

**Monitoring IoT**

**Komponen:**

* Dashboard dengan visualisasi real-time:  
  * Detak jantung  
  * Tekanan darah  
  * Suhu tubuh  
  * Kadar oksigen  
* Daftar pasien yang terhubung dengan sensor  
* Timeline aktivitas sensor  
* Filter berdasarkan jenis sensor dan pasien  
* Alert history (dengan level keparahan)

**Spesifikasi Teknis:**

* Visualisasi real-time dengan D3.js  
* Data streaming melalui WebSockets dari simulasi IoT  
* Alert system dengan threshold configurable  
* Data disimpan di tabel IOT\_SENSOR\_DATA

## **Aplikasi Mobile**

### **Aplikasi Pasien**

#### **Halaman Login Pasien**

**Halaman Login Pasien**

**Komponen:**

* Form login (Email/Username dan Password)  
* Tombol "Login"  
* Tautan "Daftar Akun Baru"  
* Tautan "Lupa Password"  
* Opsi login biometrik (sidik jari/Face ID)

**Spesifikasi Teknis:**

* Implementasi dengan Flutter  
* Penyimpanan token di SharedPreferences  
* MFA dengan Google Authenticator

#### **Beranda Pasien**

**Beranda Pasien**

**Komponen:**

* Profil singkat pasien  
* Kartu medical alert (jika ada kondisi khusus)  
* Janji temu mendatang  
* Pengingat pengobatan  
* Tombol cepat:  
  * Buat Janji  
  * Riwayat Medis  
  * Resep  
  * Pembayaran  
* Notifikasi

**Spesifikasi Teknis:**

* Flutter UI dengan Material Design  
* Notifikasi push dengan Firebase Cloud Messaging  
* Caching data offline untuk akses tanpa internet

#### **Pemesanan Janji**

**Pemesanan Janji**

**Komponen:**

* Pilihan departemen/spesialisasi  
* Daftar dokter dengan:  
  * Foto  
  * Nama  
  * Spesialisasi  
  * Rating  
  * Slot waktu tersedia  
* Kalender untuk pemilihan tanggal  
* Time slots yang tersedia  
* Form alasan kunjungan  
* Opsi pembayaran awal/deposit

**Alur Pemesanan:**

1. Pilih spesialisasi  
2. Pilih dokter  
3. Pilih tanggal dan waktu  
4. Isi alasan kunjungan  
5. Konfirmasi janji

**Spesifikasi Teknis:**

* State management dengan Provider/Riverpod  
* API calls ke backend Express.js  
* Validasi ketersediaan real-time

#### **Riwayat Medis Pasien**

**Riwayat Medis**

**Komponen:**

* Timeline kunjungan medis  
* Filter berdasarkan periode dan jenis kunjungan  
* Detail kunjungan:  
  * Tanggal & waktu  
  * Dokter  
  * Diagnosis  
  * Tindakan  
  * Resep  
  * Catatan  
* Grafik parameter kesehatan (dari data IoT)  
* Opsi berbagi data dengan dokter

**Spesifikasi Teknis:**

* Timeline custom widget  
* Chart dengan fl\_chart  
* Enkripsi data sensitif  
* PDF export untuk rekam medis

#### **Resep Digital Pasien**

**Resep Digital**

**Komponen:**

* Daftar resep aktif  
* Riwayat resep  
* Detail resep:  
  * Nama obat  
  * Dosis  
  * Frekuensi  
  * Instruksi khusus  
  * Tanggal mulai/selesai  
* Pengingat konsumsi obat  
* Status ketersediaan obat di apotek  
* Opsi pengiriman/pengambilan

**Spesifikasi Teknis:**

* Local notifications untuk pengingat  
* Integrasi dengan layanan apotek (future)  
* QR code untuk pengambilan di apotek

#### **Pembayaran**

**Pembayaran**

**Komponen:**

* Daftar tagihan (pending/lunas)  
* Detail tagihan:  
  * Rincian biaya  
  * Subtotal  
  * Discount (jika ada)  
  * Total  
* Metode pembayaran:  
  * Kartu kredit/debit  
  * Transfer bank  
  * E-wallet  
* Riwayat pembayaran  
* Unduh/kirim bukti pembayaran

**Spesifikasi Teknis:**

* Integrasi payment gateway  
* Enkripsi data pembayaran  
* Notifikasi status pembayaran

### **Aplikasi Dokter**

#### **Halaman Login Dokter**

**Halaman Login Dokter**

**Komponen:**

* Form login (sama dengan login pasien)  
* Autentikasi multi-faktor wajib

**Spesifikasi Teknis:**

* Security enhancement dengan token expired lebih cepat  
* Session tracking untuk keamanan

#### **Beranda Dokter**

**Beranda Dokter**

**Komponen:**

* Ringkasan jadwal hari ini  
* Jumlah pasien yang akan ditemui  
* Alert pasien dengan kondisi kritis (dari IoT)  
* Daftar janji temu mendatang  
* Tombol cepat:  
  * Jadwal  
  * Pasien  
  * Resep  
  * Notifikasi

**Spesifikasi Teknis:**

* Real-time updates via WebSockets  
* Prioritas alert berbasis kegawatan

#### **Jadwal Praktek**

**Jadwal Praktek**

**Komponen:**

* Tampilan kalender (hari/minggu/bulan)  
* Time slots dengan detail pasien  
* Status ketersediaan (toggle on/off)  
* Request cuti/tidak praktek  
* Notifikasi jadwal bentrok

**Spesifikasi Teknis:**

* Sinkronisasi dengan backend calendar  
* Offline capability dengan sinkronisasi saat online

#### **Data Pasien**

**Data Pasien**

**Komponen:**

* Pencarian pasien  
* Daftar pasien dengan janji temu  
* Detail pasien:  
  * Info personal  
  * Riwayat medis  
  * Diagnosis sebelumnya  
  * Alergi dan kontraindikasi  
  * Obat yang sedang dikonsumsi  
  * Data vital signs (dari IoT)  
* Notes pribadi dokter

**Spesifikasi Teknis:**

* Caching data pasien untuk akses cepat  
* Enkripsi data sensitif  
* Role-based access control

#### **Pembuatan Resep**

**Pembuatan Resep**

**Komponen:**

* Pilih pasien  
* Database obat dengan:  
  * Nama generik/dagang  
  * Dosis tersedia  
  * Kontraindikasi  
  * Interaksi dengan obat lain  
* Form resep:  
  * Obat  
  * Dosis  
  * Frekuensi  
  * Durasi  
  * Instruksi khusus  
* Digital signature dokter

**Spesifikasi Teknis:**

* Drug interaction checker  
* Dosage calculator  
* Template resep yang bisa disimpan

#### **Monitoring Pasien**

**Monitoring Pasien**

**Komponen:**

* Daftar pasien yang terhubung dengan IoT  
* Visualisasi data vital signs:  
  * Detak jantung  
  * Tekanan darah  
  * Suhu tubuh  
  * Kadar oksigen  
* Grafik trend harian/mingguan  
* Setting alert threshold  
* Riwayat alert

**Spesifikasi Teknis:**

* Real-time data dengan MQTT  
* Graph rendering dengan fl\_chart  
* Alert system dengan prioritas

## **Simulasi IoT**

### **Panel Simulasi**

**Panel Simulasi IoT**

**Komponen:**

* Daftar pasien virtual  
* Konfigurasi parameter simulasi:  
  * Range nilai normal  
  * Probabilitas anomali  
  * Interval data  
* Start/stop simulasi  
* Log aktivitas simulasi  
* Toggle sensor aktif/non-aktif

**Spesifikasi Teknis:**

* Python dengan NumPy/Pandas  
* MQTT untuk komunikasi dengan Mosquitto broker  
* Konfigurasi dataset berdasarkan input ahli medis

### **Visualisasi Data**

**Visualisasi Data IoT**

**Komponen:**

* Grafik real-time semua parameter  
* Heat map distribusi nilai  
* Highlight nilai anomali  
* Statistik data (min, max, avg, std dev)  
* Export data untuk analisis

**Spesifikasi Teknis:**

* D3.js untuk visualisasi kompleks  
* WebSockets untuk update real-time  
* Dataset tervalidasi dari ahli medis

## **Alur Pengguna**

### **Alur Admin**

1. **Login ke Sistem Web**

   * Masukkan credentials  
   * Verifikasi MFA  
2. **Manajemen Pasien**

   * Tambah pasien baru  
   * Edit data pasien  
   * Lihat riwayat medis  
   * Tetapkan janji temu  
3. **Pengaturan Jadwal Dokter**

   * Lihat ketersediaan dokter  
   * Tentukan jam praktek  
   * Atur janji temu  
   * Atur cuti dokter  
4. **Laporan Keuangan**

   * Generate laporan harian/bulanan  
   * Lihat status pembayaran  
   * Export laporan  
   * Analisis tren pendapatan  
5. **Monitoring IoT**

   * Pantau data vital signs pasien  
   * Respon terhadap alert  
   * Analisis data sensor

### **Alur Dokter**

1. **Login ke Aplikasi Mobile**

   * Masukkan credentials  
   * Verifikasi MFA  
2. **Kelola Jadwal Praktek**

   * Lihat jadwal harian  
   * Ubah status ketersediaan  
   * Request perubahan jadwal  
3. **Pemeriksaan Pasien**

   * Lihat data pasien  
   * Catat diagnosis dan tindakan  
   * Review data vital signs  
   * Buat catatan medis  
4. **Penulisan Resep**

   * Pilih obat dari database  
   * Tentukan dosis dan frekuensi  
   * Tanda tangani secara digital  
   * Kirim ke sistem  
5. **Monitoring Pasien**

   * Pantau pasien dengan IoT  
   * Atur threshold alert  
   * Respon terhadap notifikasi kritis

### **Alur Pasien**

1. **Login ke Aplikasi Mobile**

   * Masukkan credentials  
   * Biometric authentication (opsional)  
2. **Pemesanan Janji**

   * Pilih spesialisasi dan dokter  
   * Pilih tanggal dan waktu  
   * Konfirmasi janji temu  
   * Terima notifikasi konfirmasi  
3. **Akses Riwayat Medis**

   * Lihat riwayat kunjungan  
   * Lihat diagnosis dan resep  
   * Akses hasil lab  
   * Monitor parameter kesehatan  
4. **Kelola Resep**

   * Lihat resep aktif  
   * Atur pengingat obat  
   * Request refill  
   * Cek ketersediaan obat  
5. **Pembayaran**

   * Lihat tagihan  
   * Pilih metode pembayaran  
   * Proses pembayaran  
   * Simpan/kirim bukti pembayaran

## **Spesifikasi Desain**

### **Palet Warna**

* **Warna Primer**: \#2C62F6 (Biru RS)  
* **Warna Sekunder**: \#32D5A4 (Hijau Mint)  
* **Warna Aksen**: \#FF6B6B (Merah Muda)  
* **Warna Netral**:  
  * \#FFFFFF (Putih)  
  * \#F5F7FA (Abu-abu Terang)  
  * \#E1E5EB (Abu-abu)  
  * \#2D3748 (Abu-abu Gelap)  
  * \#1A202C (Hitam)  
* **Warna Status**:  
  * Sukses: \#38C172  
  * Peringatan: \#FFCE56  
  * Error: \#E3342F  
  * Info: \#3490DC

### **Tipografi**

* **Font Utama**:  
  * Web: Nunito Sans  
  * Mobile: SF Pro (iOS) / Roboto (Android)  
* **Heading**:  
  * H1: 24px/32px  
  * H2: 20px/28px  
  * H3: 18px/24px  
  * H4: 16px/22px  
* **Body Text**:  
  * Regular: 14px/20px  
  * Small: 12px/16px  
* **Font Weight**:  
  * Regular: 400  
  * Medium: 500  
  * Bold: 700

### **Ikon dan Gambar**

* **Ikon**: Material Design Icons (web), custom icon pack (mobile)  
* **Ilustrasi**: Flat design dengan warna konsisten  
* **Gambar**: High-quality dengan aspek ratio konsisten  
* **Avatar**: Circular dengan border tipis

---

Dokumen mockup ini memberikan panduan visual dan alur pengguna untuk pengembangan Sistem Manajemen Rumah Sakit Pintar. Implementasi harus mengikuti standar dan teknologi yang telah ditentukan dalam dokumen tech stack dan aturan pengembangan.

