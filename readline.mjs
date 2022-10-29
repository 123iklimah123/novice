import readline from "readline";
import process from "process";

//objek input dibua dengan readline, yang memungkinkan kita untuk berinteraksi dengan terminal

const input = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});

// ada dua fungsi dlam kode ini : question() dan close().
//fungsi question() menanyakan pengguna ingin dipanggil apa, lalu mencetak "saya ingin menjadi______" di layar jika mereka
//memasukkan apapun selain string kosong.


input.question("what your ambition?", (name) => {
    console.info(`I want to be ${name} the best for u`);
    input.close();
});