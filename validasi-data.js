// Tugas 1
function validateData(age, name, email, phoneNumber, url, address, postalCode) {
  // Validasi Umur
  if (age < 18 || age > 60) {
    console.log("Umur tidak valid: Umur harus antara 18 dan 60 tahun.");
    return false;
  }

  // Validasi Nama
  if (name.length < 2 || !/^[a-zA-Z]+$/.test(name)) {
    console.log(
      "Nama tidak valid: Nama harus terdiri dari minimal 2 karakter dan hanya berisi huruf."
    );
    return false;
  }

  // Validasi Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("Email tidak valid: Format email salah.");
    return false;
  }

  // Validasi Nomor HP
  if (!/^\d{10,14}$/.test(phoneNumber)) {
    console.log(
      "Nomor HP tidak valid: Nomor harus terdiri dari 10 hingga 14 digit angka."
    );
    return false;
  }

  // Validasi URL
  if (!/^https?:\/\/.*/.test(url)) {
    console.log(
      "URL tidak valid: Format URL salah. Harus diawali dengan 'http://' atau 'https://'."
    );
    return false;
  }

  // Validasi Alamat
  if (address.length < 10) {
    console.log(
      "Alamat tidak valid: Alamat harus terdiri dari minimal 10 karakter."
    );
    return false;
  }

  // Validasi Kode Pos
  if (!/^\d{5}$/.test(postalCode)) {
    console.log(
      "Kode Pos tidak valid: Kode Pos harus terdiri dari 5 digit angka."
    );
    return false;
  }

  // Jika semua data valid
  return true;
}

// Contoh input untuk diuji
console.log(
  validateData(
    25,
    "Ahmad",
    "ahmad@example.com",
    "08123456789",
    "https://example.com",
    "Jl. Merdeka No. 10",
    "12345"
  )
); // Output: true

console.log(
  validateData(
    17,
    "A",
    "ahmadexample.com",
    "8123456789",
    "example.com",
    "Jalan",
    "123"
  )
); // Output: false dengan alasan yang relevan
