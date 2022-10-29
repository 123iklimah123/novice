const getUser = (id, cb) => { // cb adalah callback
    const time = id == 1 ? 3000 : 2000; //set waktu
    setTimeout(() => {
        const nama = id === 1 ? 'semangat terus ya semua' : 'yakin semua akan terealisasi dengan indah';
        cb({ id, nama}); //callback id dan nama
    }, time);
};

const userSatu = getUser(1, (hasil) => { 
    console.log(hasil);
});
const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});
const halo = 'Salam dhulur semua'; 
console.log('I love you');