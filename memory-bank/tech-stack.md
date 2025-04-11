# Dokumen tech stack

Baik, berikut adalah tech stack final yang saya putuskan sebagai yang terbaik untuk proyek **Sistem Manajemen Rumah Sakit Pintar** berdasarkan kebutuhan efisiensi, keamanan, skalabilitas, dan kemudahan integrasi antar komponen. Saya memilih teknologi yang spesifik untuk meminimalkan ambiguitas dan memastikan fokus pada hasil optimal.

---

### 1\. Aplikasi Web

**Fungsi Utama:** Pengelolaan jadwal dokter, data pasien, dan laporan keuangan.

- **Backend:**  
    
  - **Teknologi:** Node.js dengan Express.js.  
    - *Alasan:* Node.js cepat, non-blocking, dan cocok untuk sistem real-time seperti notifikasi atau sinkronisasi jadwal dokter. Express.js ringan dan fleksibel untuk membangun API yang kuat.  
  - **Database:** PostgreSQL.  
    - *Alasan:* Mendukung struktur data kompleks untuk pasien dan laporan keuangan, serta memiliki fitur keamanan bawaan seperti enkripsi kolom.


- **Frontend:**  
    
  - **Teknologi:** React.js dengan Redux.  
    - *Alasan:* React memiliki ekosistem besar, komunitas aktif, dan Redux memudahkan pengelolaan state untuk aplikasi administrasi yang kompleks.


- **Autentikasi dan Otorisasi:**  
    
  - JWT (JSON Web Tokens) untuk sesi pengguna yang aman dan cepat.

---

### 2\. Aplikasi Mobile

**Fungsi Utama:** Pemesanan janji dan riwayat medis (pasien), pemantauan pasien dan resep digital (dokter).

- **Framework:** Flutter.  
    
  - *Alasan:* Flutter menawarkan performa tinggi dengan Dart, UI konsisten di Android dan iOS, serta proses pengembangan cepat untuk fitur lintas platform.


- **Backend Integration:**  
    
  - Menggunakan API dari backend web (Express.js).


- **Local Storage:**  
    
  - SharedPreferences untuk menyimpan data kecil seperti token autentikasi atau riwayat offline sederhana.


- **Push Notifications:**  
    
  - Firebase Cloud Messaging (FCM).  
    - *Alasan:* Mudah diintegrasikan dengan Flutter dan mendukung notifikasi real-time untuk janji atau pembaruan status pasien.

---

### 3\. Simulasi IoT

**Fungsi Utama:** Mensimulasikan data sensor medis dan mengirimkannya secara real-time.

- **Simulasi Data:**  
    
  - Python dengan NumPy dan Pandas.  
    - *Alasan:* Python adalah bahasa yang kuat untuk manipulasi data, dan NumPy/Pandas memungkinkan simulasi data realistis berdasarkan dataset tervalidasi dari ahli medis.


- **Protokol Komunikasi:**  
    
  - MQTT.  
    - *Alasan:* Efisien untuk simulasi data real-time dengan latensi rendah, cocok untuk mensimulasikan sensor medis.


- **Broker:**  
    
  - Mosquitto.  
    - *Alasan:* Open-source, ringan, dan mudah dikonfigurasi untuk kebutuhan simulasi.


- **Integrasi dengan Backend:**  
    
  - WebSockets untuk mengirim data simulasi ke backend Node.js secara real-time.

---

### 4\. Integrasi dan Komunikasi Antar Komponen

- **API Gateway:**  
  - Express.js (bagian dari backend web).  
    - *Alasan:* Konsisten dengan backend dan cukup untuk RESTful API yang sederhana namun kuat.  
- **Message Queue:**  
  - RabbitMQ.  
    - *Alasan:* Handal untuk mengelola antrian pesan dari simulasi IoT ke aplikasi lain.  
- **Caching:**  
  - Redis.  
    - *Alasan:* Cepat dan efisien untuk menyimpan data sementara seperti jadwal dokter atau sesi pengguna.

---

### 5\. Keamanan dan Privasi Data

- **Enkripsi:**  
  - TLS/SSL untuk data dalam transit.  
  - AES-256 untuk data di database.  
- **Autentikasi:**  
  - Multi-Factor Authentication (MFA) dengan Google Authenticator.  
    - *Alasan:* Mudah diintegrasikan dan dikenal luas untuk keamanan tambahan.  
- **Otorisasi:**  
  - Role-Based Access Control (RBAC) diimplementasikan di backend Node.js.  
- **Logging dan Monitoring:**  
  - ELK Stack (Elasticsearch, Logstash, Kibana).  
    - *Alasan:* Kuat untuk analisis log dan audit keamanan secara real-time.

---

### 6\. DevOps dan Deployment

- **Containerization:**  
  - Docker.  
    - *Alasan:* Standar industri untuk portabilitas dan konsistensi lingkungan.  
- **Orchestration:**  
  - Kubernetes.  
    - *Alasan:* Ideal untuk mengelola skalabilitas aplikasi multi-komponen.  
- **CI/CD:**  
  - GitLab CI.  
    - *Alasan:* Terintegrasi dengan Git, mendukung pipeline otomatis untuk build dan deploy.  
- **Cloud Provider:**  
  - AWS.  
    - *Alasan:* Layanan lengkap seperti EC2, RDS (untuk PostgreSQL), dan S3 untuk penyimpanan, ditambah keandalan tinggi untuk sistem kesehatan.

---

### 7\. Pengujian

- **Unit Testing:**  
  - Jest untuk frontend dan backend JavaScript.  
  - Pytest untuk simulasi IoT di Python.  
- **Integration Testing:**  
  - Postman untuk pengujian API.  
- **End-to-End Testing:**  
  - Cypress untuk web dan Appium untuk mobile.  
    - *Alasan:* Cypress cepat untuk web, Appium mendukung Flutter di mobile.  
- **Pengujian Keamanan:**  
  - OWASP ZAP.  
    - *Alasan:* Open-source dan efektif untuk mendeteksi kerentanan keamanan.

---

### Alasan Keseluruhan

- **Node.js \+ React \+ Flutter:** Kombinasi ini memungkinkan pengembangan cepat, performa tinggi, dan konsistensi lintas platform (web dan mobile).  
- **PostgreSQL \+ Redis:** Mendukung data kompleks dan akses cepat untuk efisiensi sistem.  
- **Python \+ MQTT:** Ideal untuk simulasi IoT yang realistis dan real-time.  
- **AWS \+ Kubernetes:** Memberikan skalabilitas dan keandalan untuk lingkungan rumah sakit.  
- **Keamanan:** Enkripsi kuat, MFA, dan RBAC memenuhi regulasi kesehatan seperti HIPAA.

Tech stack ini adalah solusi yang seimbang antara kecepatan pengembangan, keandalan, dan persiapan untuk masa depan (integrasi IoT fisik). Semua teknologi dipilih untuk memastikan proyek berjalan efisien, aman, dan sesuai dengan tujuan yang diuraikan.

