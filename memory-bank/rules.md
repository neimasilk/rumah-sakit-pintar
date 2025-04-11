## **Dokumen Aturan Pengembangan \- Sistem Manajemen Rumah Sakit Pintar**

Dokumen ini menetapkan aturan dan panduan yang harus diikuti oleh seluruh tim pengembangan selama siklus hidup proyek Sistem Manajemen Rumah Sakit Pintar. Tujuannya adalah untuk memastikan kualitas kode, konsistensi, keamanan, kemudahan pemeliharaan, dan kolaborasi yang efektif.

**1\. Struktur Kode & Modularitas**

* **1.1. Utamakan Modularitas:** Hindari pembuatan file *monolith* (satu file raksasa). Pecah kode menjadi modul-modul atau file-file yang lebih kecil berdasarkan fungsionalitas atau fitur spesifik (misalnya, modul autentikasi, modul manajemen pasien, modul jadwal dokter). Ini berlaku untuk *Backend* (Node.js), *Frontend* (React), Aplikasi *Mobile* (Flutter), dan *Simulasi IoT* (Python). \[source: 3, 7, 10, 14\]  
* **1.2. Pemisahan Tanggung Jawab (Separation of Concerns):** Terapkan pola desain yang jelas (misalnya, Model-View-Controller di backend, Component-based di frontend, BLoC/Provider/Riverpod di Flutter) untuk memisahkan logika bisnis, presentasi, dan akses data.  
* **1.3. Konvensi Penamaan:** Ikuti konvensi penamaan standar untuk bahasa pemrograman masing-masing (misalnya, camelCase untuk JavaScript/Dart, snake\_case untuk Python/PostgreSQL) untuk variabel, fungsi, kelas, dan file.  
* **1.4. Linting & Formatting:** Gunakan *linter* (misalnya, ESLint untuk Node.js/React, Dart Analyzer untuk Flutter, Flake8/Black untuk Python) dan *formatter* (misalnya, Prettier) yang telah disepakati untuk menjaga konsistensi gaya kode secara otomatis.

**2\. Penggunaan Teknologi (Sesuai Tech Stack)** \[source: 1\]

* **2.1. Patuhi Tech Stack:** Gunakan *hanya* teknologi yang telah didefinisikan dalam Dokumen Tech Stack (Node.js/Express, PostgreSQL, React/Redux, Flutter, Python/NumPy/Pandas, MQTT/Mosquitto, RabbitMQ, Redis, Docker, Kubernetes, AWS, dll.). \[source: 3-7, 10, 14-16, 20, 21, 25-27\]  
* **2.2. Persetujuan Dependensi:** Setiap penambahan *library* atau dependensi eksternal baru *harus* didiskusikan dan disetujui oleh tim/lead developer untuk memastikan kompatibilitas, keamanan, dan lisensi.  
* **2.3. Pembaruan Dependensi:** Jaga dependensi tetap terbarui secara berkala, namun lakukan pengujian regresi menyeluruh sebelum mengintegrasikan versi baru.

**3\. Desain & Integrasi API**

* **3.1. Prinsip RESTful:** Desain API internal (antara frontend/mobile dan backend) mengikuti prinsip RESTful menggunakan Express.js sebagai *API Gateway*. \[source: 18, 68\]  
* **3.2. Format Respons Standar:** Gunakan format respons JSON yang konsisten untuk semua endpoint API (misalnya, { "status": "success/error", "data": {...}, "message": "..." }).  
* **3.3. Dokumentasi API:** Dokumentasikan semua *endpoint* API secara jelas menggunakan format standar (misalnya, OpenAPI/Swagger) dan pastikan dokumentasi selalu *up-to-date*.  
* **3.4. Komunikasi Real-time:** Gunakan WebSockets untuk komunikasi data *real-time* dari simulasi IoT ke backend Node.js. \[source: 17\]  
* **3.5. Komunikasi IoT:** Gunakan protokol MQTT untuk komunikasi antara simulator Python dan *broker* Mosquitto. \[source: 15, 16\]  
* **3.6. Antrian Pesan:** Manfaatkan RabbitMQ untuk tugas-tugas asinkron atau komunikasi antar-layanan yang tidak memerlukan respons langsung (misalnya, notifikasi). \[source: 20\]

**4\. Interaksi Database**

* **4.1. Akses Database:** Gunakan *Object-Relational Mapper* (ORM) seperti Sequelize atau TypeORM untuk interaksi dengan database PostgreSQL dari backend Node.js, kecuali untuk *query* yang sangat kompleks. \[source: 6\]  
* **4.2. Kepatuhan Skema:** Patuhi skema database yang telah didefinisikan dalam Dokumen Desain (ERD). \[source: 81\]  
* **4.3. Migrasi Database:** Gunakan mekanisme migrasi (misalnya, fitur migrasi ORM atau alat seperti Flyway/Liquibase) untuk setiap perubahan skema database. Jangan mengubah skema secara manual di *deployment*.  
* **4.4. Penggunaan Cache:** Gunakan Redis secara strategis *hanya* untuk *caching* data yang sering diakses dan tidak sering berubah (misalnya, sesi pengguna, konfigurasi, jadwal dokter tertentu). \[source: 21\]

**5\. Keamanan** \[source: 49, 64-67\]

* **5.1. Autentikasi & Otorisasi:** Implementasikan autentikasi berbasis JWT \[source: 8\] dan *Multi-Factor Authentication* (MFA) \[source: 22, 65\]. Terapkan *Role-Based Access Control* (RBAC) \[source: 23\] secara ketat di *backend* untuk membatasi akses berdasarkan peran pengguna.  
* **5.2. Enkripsi Data:** Gunakan TLS/SSL untuk mengenkripsi data saat transit dan AES-256 untuk mengenkripsi data sensitif di *database* (at rest). \[source: 22, 64\]  
* **5.3. Validasi Input:** Lakukan validasi dan sanitasi *semua* input dari pengguna atau sistem eksternal di sisi *backend* untuk mencegah serangan *injection* (SQLi, XSS, dll.).  
* **5.4. Keamanan Dependensi:** Gunakan alat pemindai keamanan dependensi (misalnya, npm audit, Snyk) secara berkala.  
* **5.5. Manajemen Secret:** Jangan pernah menyimpan *secret* (kunci API, kata sandi database, dll.) langsung di dalam kode. Gunakan *environment variable* atau *secrets management tool* (seperti AWS Secrets Manager).  
* **5.6. Logging Keamanan:** Pastikan aktivitas penting terkait keamanan (login, perubahan hak akses, akses data sensitif) dicatat (logged) menggunakan ELK Stack. \[source: 24\]

**6\. Pengujian** \[source: 73-75\]

* **6.1. Unit Testing:** Setiap fungsi atau modul inti *harus* memiliki *unit test* (menggunakan Jest untuk JS/TS, Pytest untuk Python). \[source: 28\] Targetkan cakupan kode (code coverage) minimal yang disepakati (misalnya 80%).  
* **6.2. Integration Testing:** Buat *integration test* (menggunakan Postman/Supertest) untuk memverifikasi interaksi antar komponen, terutama untuk endpoint API. \[source: 28\]  
* **6.3. End-to-End Testing:** Implementasikan *E2E test* (menggunakan Cypress untuk Web, Appium untuk Mobile) untuk alur kerja pengguna yang kritis. \[source: 29\]  
* **6.4. CI Pipeline:** Semua jenis tes (Unit, Integrasi) *harus* berjalan dan lulus secara otomatis di *pipeline* CI/CD sebelum *merge* ke *branch* utama. \[source: 26\]  
* **6.5. Pengujian Keamanan:** Lakukan pengujian keamanan (misalnya, menggunakan OWASP ZAP) secara berkala pada aplikasi. \[source: 30\]

**7\. Kontrol Versi (Git)**

* **7.1. Branching Model:** Ikuti model percabangan yang telah disepakati (misalnya, Gitflow: main, develop, feature/xxx, release/xxx, hotfix/xxx).  
* **7.2. Commit Messages:** Tulis pesan *commit* yang jelas dan deskriptif, idealnya mengikuti format Conventional Commits.  
* **7.3. Pull Request (PR) / Merge Request (MR):** Semua perubahan kode *harus* melalui proses *Pull Request* (atau *Merge Request* di GitLab) sebelum digabungkan ke develop atau main.  
* **7.4. Code Review:** Setiap PR/MR *harus* direview oleh setidaknya satu anggota tim lain sebelum di-*merge*.

**8\. DevOps & Deployment**

* **8.1. Containerization:** Semua bagian aplikasi (backend, frontend, simulasi IoT, broker) *harus* dapat dijalankan di dalam kontainer Docker. \[source: 25\]  
* **8.2. Orchestration:** Gunakan Kubernetes untuk mengelola dan men-*deploy* kontainer di lingkungan *staging* dan *production*. \[source: 26\]  
* **8.3. CI/CD:** Manfaatkan *pipeline* GitLab CI untuk otomatisasi proses *build*, *test*, dan *deploy*. \[source: 26\]  
* **8.4. Lingkungan:** Kelola lingkungan terpisah (Development, Staging, Production) di AWS. \[source: 27\]  
* **8.5. Logging & Monitoring:** Konfigurasikan *logging* terpusat menggunakan ELK Stack \[source: 24\] dan *monitoring* performa menggunakan AWS CloudWatch \[source: 86\].

**9\. Dokumentasi**

* **9.1. README:** Setiap *repository* atau komponen utama harus memiliki file README.md yang menjelaskan tujuan, cara instalasi, konfigurasi, dan menjalankan aplikasi/layanan tersebut.  
* **9.2. Komentar Kode:** Tambahkan komentar pada bagian kode yang kompleks atau memiliki logika bisnis yang tidak langsung terlihat jelas.  
* **9.3. Dokumentasi Teknis:** Jaga agar Dokumen Desain dan Dokumen Tech Stack tetap relevan dengan perkembangan proyek.

**10\. Komunikasi & Kolaborasi** \[source: 70, 71\]

* **10.1. Metodologi Agile:** Ikuti praktik metodologi Agile (Scrum) yang telah disepakati, termasuk partisipasi aktif dalam *daily stand-up*, *sprint planning*, *review*, dan *retrospective*. \[source: 70\]  
* **10.2. Alat Komunikasi:** Gunakan alat komunikasi yang telah ditentukan (misalnya, Slack/Microsoft Teams) untuk diskusi terkait proyek. \[source: 71\]  
* **10.3. Berbagi Pengetahuan:** Bagikan pengetahuan dan temuan secara proaktif kepada anggota tim lainnya.

**Kepatuhan terhadap aturan ini bersifat wajib bagi seluruh anggota tim pengembangan untuk memastikan keberhasilan proyek Sistem Manajemen Rumah Sakit Pintar.** Dokumen ini dapat diperbarui berdasarkan kesepakatan tim seiring berjalannya proyek.