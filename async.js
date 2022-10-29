const getUser = (id, cb) => { // cb adalah callback
    const time = id == 1 ? 3000 : 2000; //set waktu
    setTimeout(() => {
        const nama = id === 1 ? 'Ibu Iklimah' : 'Abah Iklimah';
        cb({ id, nama}); //callback id dan nama
    }, time);
};

const userSatu = getUser(1, (hasil) => { //user 1 sebagai Ibu Iklimah 3 detik
    console.log(hasil);
});
const userDua = getUser(2, (hasil) => {// user 2 sebagai Abah Iklimah 2 detik
    console.log(hasil);
});
const halo = 'Salam dhulur semua'; //user salam waktunya 1 detik
console.log('kholas');