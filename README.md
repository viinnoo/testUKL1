SOAL NOMOR 1:

Fungsi: Digunakan untuk mengambil token untuk login sebagai admin agar bisa mengakses end point2 lainnya

Cara Kerja: Seperti gambar dibawah lalu saat tokennya sudah keluar, copy dan pergi ke "Authorization" dan pilih dari "No Auth" menjadi "Bearer Token"

<img width="1539" height="716" alt="Screenshot 2025-11-04 122121" src="https://github.com/user-attachments/assets/07656339-007c-4737-bc72-b377a230b160" />
======================================================================================================================================================================

SOAL NOMOR 2.1

Fungsi: Digunakan untuk menambahkkan data pengguna baru

Cara Kerja: Seperti gambar dibawah, nah nanti akan menambah pengguna baru, terus dia itu bakalan ngerun fungsi yang ada di user controller ya kurleb gitu

<img width="1543" height="688" alt="Screenshot 2025-11-04 122008" src="https://github.com/user-attachments/assets/2a405ccf-a3df-4c78-b279-395a16d565df" />
======================================================================================================================================================================

SOAL NOMOR 2.2

Fungsi: Digunakan untuk mengubah data pengguna

Cara Kerja: jadi dia ngubah data pake id user, nanti kayak gambar dibawah, masukin apa yang mau diubah, misal nama/usn dll gitu

<img width="1541" height="724" alt="Screenshot 2025-11-04 121906" src="https://github.com/user-attachments/assets/fb5d917a-a918-41ed-bce9-64c47572fe57" />
======================================================================================================================================================================

SOAL NOMOR 2.3

Fungsi: Digunakan untuk mengambil data pengguna berdasarkan id mereka

Cara Kerja: jadi dia make method GET buat ngambil data, dan ditambahi id user yang dimau buat dapet data user yang di mau itu, seperti gambar di bawah

<img width="1537" height="682" alt="Screenshot 2025-11-04 121639" src="https://github.com/user-attachments/assets/78da7378-3a55-4e80-9ec4-09506001ed59" />
======================================================================================================================================================================

SOAL NOMOR 3.1

Fungsi: Digunakan untuk mencatat kehadiran user pada hari tersebut

Cara Kerja: 1. post tentu saja, 2. ketik endpoint dan parameternya seperti digambar, 3. lalu ke body dan ketik "user_id, time, date dll", 4. dan terakhir run

<img width="1535" height="699" alt="Screenshot 2025-11-04 121230" src="https://github.com/user-attachments/assets/a6d8f40b-1b27-497b-93c2-af664c3fc1be" />
======================================================================================================================================================================

SOAL NOMOR 3.2

Fungsi: Digunakan untuk mengambil riwayat presensi pengguna berdasarkan id user

Cara Kerja: Gunakan GET lalu isi parameter seperti digambar bawah ini dan voila

<img width="1538" height="716" alt="Screenshot 2025-11-04 121342" src="https://github.com/user-attachments/assets/92d4fae7-49c6-4789-bab9-30719226df28" />
======================================================================================================================================================================

SOAL NOMOR 4.1

Fungsi: Digunakan untuk menampilkan rekap kehadiran bulanan pengguna.

Cara Kerja: Menggunakan GET, masukan parameter nya seperti digambar bawah, dan kasih "summary" untuk mengcall fungsi summary dan di akhir tambahkan id user yang diinginkan (untuk case saya saya memasukkan beberapa data dummy agar agak banyakan dikit saat di show)

<img width="1834" height="650" alt="Screenshot 2025-11-04 120230" src="https://github.com/user-attachments/assets/1ed073d3-29f1-4c10-9b2e-6ab980b4bbf6" />
======================================================================================================================================================================

SOAL NOMOR 4.2

Fungsi: Digunakan untuk melakukan analisis tingkat kehadiran user berdasarkan periode waktu dan kategori tertentu

Cara Kerja: POST, masukkan parameternya, lalu menuju body, raw, dan mengisinya dengan "start_date, end_date, group_by", jadi secara singkat kalian menganalisis seluruh user dan semua history login user2 kalian, berdasarkan tanggal awal dan akhir yang sudah kalian tentukan serta kumpulan mereka (dalam case saya user), dan akan memunculkan kesimpulan persenan kesimpulan tersebut 

<img width="1539" height="1079" alt="Screenshot 2025-11-04 115447" src="https://github.com/user-attachments/assets/8ea64817-6a3b-49ed-9398-f4049051299a" />
======================================================================================================================================================================
