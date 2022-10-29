const getUser = (id1, cb) => {
    const time = id1 == 1? 5000 : 3000;
    setTimeout(() => {
        const nama = id1 === 1 ? 'Salam Semua percaya gak kalo aku Iklimah' : 'aku dari sampang lho..aku pengen banget jadi CEO international dan nasional and data analysis also WEB Development';
        cb({ id1, nama});
    }, time);
};
const userSatu = getUser(1, (hasil) => { 
    console.log(hasil);
});
const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});
const halo = 'I hope Allah mengkobul cita-citaku..bantu aminin ya lurs'; //user salam waktunya 1 detik
console.log('amin ya mujibassailin ya Rabb');
