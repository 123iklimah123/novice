var http = require('http');
//kode dimulai dengan membuat server
http.createServer(function(req, res) {
    //fungsi server adalah menginformasikan pada
    //port 8000 dan merespon dengan tipe konten 'text/html'
    res.writeHead(400, { 'Content-Type': 'text/html'});
    res.write(
        'KIta<h1>Study</h1>! <p>NodeJs</p> <b>Ya guys</b>'
        //selanjutnya ini adalah isi dari text html yang kita buat 
    );
    res.end(); // ini adalah untuk mengakhiri permintaan dan menutup koneksi 
}).listen(8000);// menginformasikan menggunakan port 8000

console.log("server running on http://localhost:8000");
//maka kita akan melakukan perintah running fungsi dari (res, write) pada server http://localhost:8000"

//kesimpulannya kode ini dimaksud untuk membuat server yang akan melayani konten saat diterima