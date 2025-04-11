# Dokumen Desain Proyek: Sistem Manajemen Rumah Sakit Pintar (Dengan Simulasi IoT)

#### **1\. Pendahuluan**

*Sistem Manajemen Rumah Sakit Pintar* adalah solusi teknologi multiplatform yang dirancang untuk meningkatkan efisiensi layanan kesehatan di rumah sakit. Sistem ini mengintegrasikan platform berbasis web, aplikasi mobile, dan simulasi Internet of Things (IoT) guna mengoptimalkan administrasi, mempermudah akses pasien terhadap layanan, serta mendukung pemantauan kondisi pasien secara real-time. Karena keterbatasan perangkat fisik, integrasi IoT dalam proyek ini akan sepenuhnya disimulasikan. Untuk memastikan simulasi IoT mencerminkan kondisi nyata, proyek ini akan melibatkan kolaborasi dengan ahli medis atau peneliti yang berpengalaman dalam simulasi data kesehatan. Pendekatan ini memungkinkan pengembangan dan pengujian sistem yang akurat dan efektif, sekaligus mempersiapkan sistem untuk integrasi perangkat IoT fisik di masa depan.

#### **2\. Tujuan**

Proyek ini bertujuan untuk:

* Mengembangkan aplikasi berbasis web untuk mengelola administrasi rumah sakit, termasuk jadwal dokter, data pasien, dan laporan keuangan.  
* Menciptakan aplikasi mobile yang memungkinkan pasien memesan janji dan mengakses riwayat medis, serta membantu dokter memantau pasien dan memberikan resep secara digital, dengan dukungan lintas platform.  
* Menggunakan simulasi IoT yang realistis, didukung oleh kolaborasi dengan ahli medis atau dataset tervalidasi, untuk menguji fitur pemantauan real-time dan integrasi data seperti sensor detak jantung atau alat medis lainnya.  
* Meningkatkan efisiensi layanan kesehatan dengan mengurangi waktu tunggu pasien dan menyederhanakan akses terhadap informasi medis penting.

#### **3\. Batasan**

Proyek ini memiliki beberapa batasan, yaitu:

* Sistem ini dirancang khusus untuk lingkungan rumah sakit dan tidak mencakup layanan di luar rumah sakit.  
* Integrasi IoT bersifat simulasi sepenuhnya karena ketiadaan perangkat fisik, tetapi akan dibuat realistis melalui kerja sama dengan ahli medis.  
* Aplikasi mobile akan mendukung berbagai platform melalui framework cross-platform, meskipun fokus awal pada Android dan iOS.  
* Keamanan dan privasi data pasien harus mematuhi regulasi yang berlaku, sehingga memerlukan langkah-langkah khusus seperti enkripsi dan autentikasi.  
* Pengembangan lebih lanjut diperlukan untuk integrasi dengan perangkat IoT fisik di masa depan.

#### **4\. Manfaat**

Proyek ini menawarkan sejumlah manfaat, termasuk:

* **Efisiensi Layanan**: Otomatisasi administrasi rumah sakit seperti jadwal dokter dan laporan keuangan mengurangi beban kerja manual.  
* **Kenyamanan Pengguna**: Aplikasi mobile lintas platform memungkinkan pasien dan dokter mengakses layanan dari berbagai perangkat, meningkatkan aksesibilitas.  
* **Pemantauan Real-time (Simulasi)**: Simulasi IoT yang akurat, didukung ahli medis, memungkinkan pengujian pemantauan kondisi pasien tanpa perangkat fisik.  
* **Penghematan Waktu dan Biaya**: Simulasi IoT mengurangi kebutuhan investasi awal pada perangkat fisik, mempercepat pengembangan dan pengujian.  
* **Peningkatan Kualitas Layanan**: Integrasi data dari web, mobile, dan simulasi IoT mendukung pengambilan keputusan yang lebih baik oleh tenaga medis dan administrasi.

#### **5\. Struktur Proyek**

*Sistem Manajemen Rumah Sakit Pintar* terdiri dari tiga komponen utama yang saling terhubung:

* **Aplikasi Web**:  
  * **Fitur**: Pengelolaan jadwal dokter, data pasien, dan laporan keuangan.  
  * **Tujuan**: Memberikan alat bagi staf administrasi untuk mengelola operasional rumah sakit secara efisien.  
* **Aplikasi Mobile**:  
  * **Versi Pasien**: Pemesanan janji, akses riwayat medis, dan notifikasi layanan.  
  * **Versi Dokter**: Pemantauan pasien, pemberian resep digital, dan akses data medis.  
  * **Tujuan**: Memudahkan interaksi pasien dan dokter melalui aplikasi yang dikembangkan dengan framework cross-platform (contoh: React Native atau Flutter) untuk mendukung berbagai perangkat.  
* **Simulasi IoT**:  
  * **Komponen**: Simulasi data dari sensor detak jantung, tekanan darah, atau alat medis lainnya, menggunakan dataset tervalidasi atau model yang dikembangkan bersama ahli medis.  
  * **Fungsi**: Mensimulasikan pengumpulan data pasien secara real-time dan mengirimkannya ke aplikasi web dan mobile.  
  * **Tujuan**: Menguji fitur pemantauan dan integrasi data secara realistis, mempersiapkan sistem untuk pengembangan lebih lanjut dengan perangkat fisik.

#### **6\. Langkah-Langkah Keamanan dan Privasi Data**

Untuk melindungi data pasien, proyek ini akan menerapkan:

* Enkripsi data end-to-end untuk informasi sensitif yang disimpan dan ditransmisikan.  
* Autentikasi multi-faktor (MFA) untuk akses oleh dokter, staf administrasi, dan pasien.  
* Audit keamanan rutin dan kepatuhan terhadap regulasi kesehatan (contoh: HIPAA atau standar lokal).  
* Kolaborasi dengan ahli keamanan data untuk memastikan sistem memenuhi standar industri.

#### **7\. Integrasi dan Komunikasi Antar Komponen**

Untuk mengatasi kompleksitas integrasi:

* Pengembangan API yang kuat dan terdokumentasi (contoh: RESTful services atau GraphQL) untuk pertukaran data antar aplikasi web, mobile, dan simulasi IoT.  
* Pengujian integrasi rutin untuk memastikan sinkronisasi data yang lancar dan konsisten di seluruh platform.

#### **8\. Manajemen Proyek**

Proyek akan dikelola dengan metodologi agile (contoh: Scrum) untuk mendukung fleksibilitas dan iterasi cepat. Langkah-langkahnya meliputi:

* Penetapan milestone jelas dan pemantauan melalui sprint mingguan.  
* Penggunaan alat kolaborasi seperti Slack atau Microsoft Teams untuk komunikasi tim.  
* Pelibatan pengguna akhir (dokter, pasien, staf administrasi) dalam pengujian dan validasi.

#### **9\. Rencana Pengujian dan Validasi**

Strategi pengujian yang komprehensif akan diterapkan, meliputi:

* **Unit Testing**: Menguji fungsionalitas individual setiap komponen.  
* **Integration Testing**: Memastikan semua komponen bekerja secara harmonis.  
* **User Acceptance Testing (UAT)**: Melibatkan pengguna akhir untuk memvalidasi sistem dari segi fungsionalitas dan kegunaan.  
* **Pengujian Keamanan**: Memastikan data pasien terlindungi dan sistem memenuhi standar keamanan.

# Diagram-Diagram

1. Diagram Arsitektur sistem manajemen rumah sakit pintar

graph TB  
    subgraph "Aplikasi Web"  
        WebFrontend\[Frontend \- React.js \+ Redux\]  
        WebBackend\[Backend \- Node.js \+ Express.js\]  
        PostgreSQL\[(PostgreSQL Database)\]  
        Redis\[(Redis Cache)\]  
    end  
      
    subgraph "Aplikasi Mobile"  
        Flutter\[Flutter Application\]  
        FCM\[Firebase Cloud Messaging\]  
        SharedPrefs\[Local Storage \- SharedPreferences\]  
    end  
      
    subgraph "Simulasi IoT"  
        PythonSim\[Python \+ NumPy \+ Pandas\]  
        MQTT\[MQTT Protocol\]  
        Mosquitto\[Mosquitto Broker\]  
    end  
      
    subgraph "Integrasi"  
        ExpressAPI\[API Gateway \- Express.js\]  
        RabbitMQ\[Message Queue \- RabbitMQ\]  
        WebSockets\[WebSockets\]  
    end  
      
    subgraph "Keamanan"  
        TLS\[TLS/SSL Encryption\]  
        AES\[AES-256 Database Encryption\]  
        MFA\[Multi-Factor Authentication\]  
        RBAC\[Role-Based Access Control\]  
        ELK\[ELK Stack \- Logging & Monitoring\]  
    end  
      
    subgraph "DevOps"  
        Docker\[Docker\]  
        Kubernetes\[Kubernetes\]  
        GitLabCI\[GitLab CI\]  
        AWS\[AWS Cloud\]  
    end  
      
    *%% Hubungan utama*  
    PythonSim \--\> MQTT  
    MQTT \--\> Mosquitto  
    Mosquitto \--\> WebSockets  
    WebSockets \--\> WebBackend  
    WebBackend \--\> ExpressAPI  
    ExpressAPI \--\> WebFrontend  
    ExpressAPI \--\> Flutter  
    WebBackend \--\> RabbitMQ  
    RabbitMQ \--\> Flutter  
    WebBackend \--\> PostgreSQL  
    WebBackend \--\> Redis  
    FCM \--\> Flutter

2. Diagram komponen utama dan aliran data  
   

flowchart TD  
    subgraph "Pengguna"  
        AdmStaff\["Staf Administrasi"\]  
        Doctor\["Dokter"\]  
        Patient\["Pasien"\]  
    end  
      
    subgraph "Sistem"  
        WebApp\["Aplikasi Web\\n(Node.js \+ React)"\]  
        MobileApp\["Aplikasi Mobile\\n(Flutter)"\]  
        IoTSim\["Simulasi IoT\\n(Python \+ MQTT)"\]  
        Database\["Database\\n(PostgreSQL)"\]  
    end  
      
    *%% Aliran data utama*  
    AdmStaff \--\>|"Kelola jadwal\\ndata pasien\\nlaporan keuangan"| WebApp  
    Doctor \--\>|"Akses data medis\\nResep digital"| MobileApp  
    Patient \--\>|"Booking janji\\nAkses riwayat medis"| MobileApp  
      
    IoTSim \--\>|"Data sensor simulasi\\n(detak jantung, tekanan darah)"| WebApp  
    IoTSim \--\>|"Notifikasi pemantauan\\nkondisi pasien"| MobileApp  
      
    WebApp \<--\>|"Penyimpanan & pengambilan\\ndata"| Database  
    MobileApp \<--\>|"Sinkronisasi data\\nmelalui API"| WebApp

3. Skema database sistem rumah sakit pintar

erDiagram  
    USER {  
        int user\_id PK  
        string username  
        string email  
        string password\_hash  
        string role  
        boolean is\_active  
        datetime created\_at  
        datetime updated\_at  
    }  
      
    PATIENT {  
        int patient\_id PK  
        int user\_id FK  
        string full\_name  
        date date\_of\_birth  
        string gender  
        string blood\_type  
        string address  
        string phone\_number  
        string emergency\_contact  
        datetime registered\_at  
    }  
      
    DOCTOR {  
        int doctor\_id PK  
        int user\_id FK  
        string full\_name  
        string specialization  
        string license\_number  
        string phone\_number  
        string work\_schedule  
        boolean is\_available  
    }  
      
    APPOINTMENT {  
        int appointment\_id PK  
        int patient\_id FK  
        int doctor\_id FK  
        datetime schedule\_time  
        string status  
        string type  
        string notes  
        datetime created\_at  
        datetime updated\_at  
    }  
      
    MEDICAL\_RECORD {  
        int record\_id PK  
        int patient\_id FK  
        int doctor\_id FK  
        datetime record\_date  
        string diagnosis  
        string treatment  
        string notes  
        string attachments  
    }  
      
    PRESCRIPTION {  
        int prescription\_id PK  
        int record\_id FK  
        int patient\_id FK  
        int doctor\_id FK  
        datetime issued\_date  
        datetime valid\_until  
        string status  
    }  
      
    MEDICINE {  
        int medicine\_id PK  
        string name  
        string description  
        string dosage\_form  
        float price  
        int stock  
    }  
      
    PRESCRIPTION\_ITEM {  
        int item\_id PK  
        int prescription\_id FK  
        int medicine\_id FK  
        string dosage  
        string frequency  
        string instructions  
        int quantity  
    }  
      
    IOT\_SENSOR\_DATA {  
        int data\_id PK  
        int patient\_id FK  
        datetime timestamp  
        string sensor\_type  
        float sensor\_value  
        string unit  
        boolean is\_critical  
        string notes  
    }  
      
    BILLING {  
        int bill\_id PK  
        int patient\_id FK  
        datetime bill\_date  
        float total\_amount  
        string payment\_status  
        string payment\_method  
        datetime paid\_at  
    }  
      
    BILL\_ITEM {  
        int item\_id PK  
        int bill\_id FK  
        string description  
        string service\_type  
        float amount  
    }  
      
    %% Relationships  
    USER ||--o{ PATIENT : "menjadi"  
    USER ||--o{ DOCTOR : "menjadi"  
    PATIENT ||--o{ APPOINTMENT : "membuat"  
    DOCTOR ||--o{ APPOINTMENT : "menangani"  
    PATIENT ||--o{ MEDICAL\_RECORD : "memiliki"  
    DOCTOR ||--o{ MEDICAL\_RECORD : "membuat"  
    MEDICAL\_RECORD ||--o{ PRESCRIPTION : "menghasilkan"  
    PRESCRIPTION ||--o{ PRESCRIPTION\_ITEM : "berisi"  
    MEDICINE ||--o{ PRESCRIPTION\_ITEM : "diresepkan\_dalam"  
    PATIENT ||--o{ IOT\_SENSOR\_DATA : "dipantau\_oleh"  
    PATIENT ||--o{ BILLING : "ditagih"  
    BILLING ||--o{ BILL\_ITEM : "terdiri\_dari"

4. Skema use case sistem rumah sakit pintar

flowchart TB  
    subgraph Actors  
        Admin\[Staf Administrasi\]  
        Doctor\[Dokter\]  
        Patient\[Pasien\]  
        IoT\[Simulasi IoT\]  
    end  
      
    subgraph "Use Cases"  
        subgraph "Aplikasi Web"  
            UC1\[Kelola Data Pasien\]  
            UC2\[Atur Jadwal Dokter\]  
            UC3\[Kelola Laporan Keuangan\]  
            UC4\[Pantau Dashboard Rumah Sakit\]  
        end  
          
        subgraph "Aplikasi Mobile \- Dokter"  
            UC5\[Lihat Jadwal Praktek\]  
            UC6\[Akses Riwayat Medis Pasien\]  
            UC7\[Buat Resep Digital\]  
            UC8\[Terima Notifikasi Pasien\]  
            UC9\[Pantau Kondisi Pasien\]  
        end  
          
        subgraph "Aplikasi Mobile \- Pasien"  
            UC10\[Booking Janji dengan Dokter\]  
            UC11\[Akses Riwayat Medis Pribadi\]  
            UC12\[Terima Resep Digital\]  
            UC13\[Lihat Jadwal Appointment\]  
            UC14\[Bayar Tagihan Online\]  
        end  
          
        subgraph "Simulasi IoT"  
            UC15\[Kirim Data Vital Signs\]  
            UC16\[Kirim Peringatan Kondisi Kritis\]  
            UC17\[Rekam Data Sensor Berkelanjutan\]  
        end  
    end  
      
    %% Relationships for Admin  
    Admin \--\> UC1  
    Admin \--\> UC2  
    Admin \--\> UC3  
    Admin \--\> UC4  
      
    %% Relationships for Doctor  
    Doctor \--\> UC5  
    Doctor \--\> UC6  
    Doctor \--\> UC7  
    Doctor \--\> UC8  
    Doctor \--\> UC9  
      
    %% Relationships for Patient  
    Patient \--\> UC10  
    Patient \--\> UC11  
    Patient \--\> UC12  
    Patient \--\> UC13  
    Patient \--\> UC14  
      
    %% Relationships for IoT  
    IoT \--\> UC15  
    IoT \--\> UC16  
    IoT \--\> UC17  
      
    %% Relationships between use cases  
    UC15 \--\> UC9  
    UC16 \--\> UC8  
    UC7 \--\> UC12  
    UC10 \--\> UC5  
    UC1 \--\> UC6

5. Diagram deploymen sistem rumah sakit pintar

flowchart TB  
    subgraph "AWS Cloud"  
        subgraph "Kubernetes Cluster"  
            WebContainer\["Web App Containers\\n(Node.js \+ React)"\]  
            ApiContainer\["API Containers\\n(Express.js)"\]  
            IoTContainer\["IoT Simulation\\n(Python)"\]  
            MQContainer\["Message Queue\\n(RabbitMQ)"\]  
            MQTTContainer\["MQTT Broker\\n(Mosquitto)"\]  
        end  
          
        subgraph "Database Services"  
            RDS\[(AWS RDS\\nPostgreSQL)\]  
            ElastiCache\[(AWS ElastiCache\\nRedis)\]  
        end  
          
        subgraph "Security & Monitoring"  
            ELK\["ELK Stack\\n(Elasticsearch, Logstash, Kibana)"\]  
            CloudWatch\["AWS CloudWatch"\]  
            WAF\["AWS WAF"\]  
        end  
          
        subgraph "Storage"  
            S3\["AWS S3\\n(File Storage)"\]  
        end  
    end  
      
    subgraph "Client Devices"  
        WebBrowser\["Web Browser\\n(Admin Portal)"\]  
        MobileDevices\["Mobile Devices\\n(iOS/Android)"\]  
    end  
      
    %% Connections  
    WebBrowser \<--\> WAF  
    MobileDevices \<--\> WAF  
    WAF \<--\> ApiContainer  
    ApiContainer \<--\> WebContainer  
    ApiContainer \<--\> RDS  
    ApiContainer \<--\> ElastiCache  
    ApiContainer \<--\> MQContainer  
    MQContainer \<--\> IoTContainer  
    IoTContainer \<--\> MQTTContainer  
    ApiContainer \<--\> S3  
      
    %% Monitoring connections  
    WebContainer \--\> CloudWatch  
    ApiContainer \--\> CloudWatch  
    IoTContainer \--\> CloudWatch  
    MQContainer \--\> CloudWatch  
    RDS \--\> CloudWatch  
      
    %% Logging connections  
    WebContainer \--\> ELK  
    ApiContainer \--\> ELK  
    IoTContainer \--\> ELK

