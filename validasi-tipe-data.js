// tugas 3
// Fungsi 1: Validasi jika inputan adalah int  
function isInteger(value) {  
    if (Number.isInteger(value)) {  
        return true;  
    } else {  
        console.log("Inputan bukan integer.");  
        return false;  
    }  
}  

// Fungsi 2: Validasi jika inputan adalah float  
function isFloat(value) {  
    if (typeof value === "number" && !Number.isInteger(value)) {  
        return true;  
    } else {  
        console.log("Inputan bukan float.");  
        return false;  
    }  
}  

// Fungsi 3: Validasi jika inputan adalah boolean  
function isBoolean(value) {  
    if (typeof value === "boolean") {  
        return true;  
    } else {  
        console.log("Inputan bukan boolean.");  
        return false;  
    }  
}  

// Fungsi 4: Validasi jika inputan adalah string  
function isString(value) {  
    if (typeof value === "string") {  
        return true;  
    } else {  
        console.log("Inputan bukan string.");  
        return false;  
    }  
}  

// Fungsi 5: Validasi jika inputan adalah array  
function isArray(value) {  
    if (Array.isArray(value)) {  
        return true;  
    } else {  
        console.log("Inputan bukan array.");  
        return false;  
    }  
}  

// Fungsi 6: Validasi jika inputan adalah object  
function isObject(value) {  
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {  
        return true;  
    } else {  
        console.log("Inputan bukan object.");  
        return false;  
    }  
}  

// Contoh Input untuk Diuji  
console.log(isInteger(42));               // Output: true  
console.log(isInteger(42.5));             // Output: false dengan alasan yang relevan  

console.log(isFloat(42.5));               // Output: true  
console.log(isFloat(42));                 // Output: false dengan alasan yang relevan  

console.log(isBoolean(true));             // Output: true  
console.log(isBoolean("true"));           // Output: false dengan alasan yang relevan  

console.log(isString("Hello"));           // Output: true  
console.log(isString(123));               // Output: false dengan alasan yang relevan  

console.log(isArray([1, 2, 3]));          // Output: true  
console.log(isArray({a: 1}));             // Output: false dengan alasan yang relevan  

console.log(isObject({a: 1}));            // Output: true  
console.log(isObject([1, 2, 3]));        // Output: false dengan alasan yang relevan