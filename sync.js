const getUserSync = (id) => {
    const nama = id === 1 ? 'Ibu Iklimah' : 'Abah Iklimah';
    return { id, nama};
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Salam dhulur semua!';
console.log(halo);