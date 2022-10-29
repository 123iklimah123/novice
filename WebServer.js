var http = require('http'); // kode dimulai dengan membuat server HTTP

var server = http.createServer(function(req, res){
    //kemudian membuat fungsi yang akan dipanggil ketika server menerima permintaan dari klien 
    res.end("Salam, ahlan wasahlan in node.js");
    //dalam hal ini, hanya untuk mencetak 
});

server.listen(8000); //pada part 8000
// dimana server node.js sederhana yang akan merespon dengan (("Salam, ahlan wasahlan in node.js");
//untuk setiap permintaan yang masuk

console.log("server running on http://localhost.8000");