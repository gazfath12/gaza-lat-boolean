// tugas2
// Fungsi 1: Akses hanya untuk admin dan super-admin  
function canAccessForAdminOrSuperAdmin(userRole) {  
    if (userRole === "admin" || userRole === "super-admin") {  
        return true;  
    } else {  
        console.log("Akses ditolak: Hanya admin dan super-admin yang diizinkan.");  
        return false;  
    }  
}  

// Fungsi 2: Akses hanya untuk super-admin  
function canAccessForSuperAdminOnly(userRole) {  
    if (userRole === "super-admin") {  
        return true;  
    } else {  
        console.log("Akses ditolak: Hanya super-admin yang diizinkan.");  
        return false;  
    }  
}  

// Fungsi 3: Akses untuk semua pengguna dengan status aktif  
function canAccessForActiveUsers(userStatus) {  
    if (userStatus === "active") {  
        return true;  
    } else {  
        console.log("Akses ditolak: Hanya pengguna dengan status aktif yang diizinkan.");  
        return false;  
    }  
}  

// Contoh Input untuk Diuji  
console.log(canAccessForAdminOrSuperAdmin("admin"));          // Output: true  
console.log(canAccessForAdminOrSuperAdmin("user"));           // Output: false dengan alasan yang relevan  

console.log(canAccessForSuperAdminOnly("super-admin"));       // Output: true  
console.log(canAccessForSuperAdminOnly("admin"));             // Output: false dengan alasan yang relevan  

console.log(canAccessForActiveUsers("active"));               // Output: true  
console.log(canAccessForActiveUsers("inactive"));             // Output: false dengan alasan yang relevan