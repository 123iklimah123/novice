const getUserSync = (id) => {
    const nama = id === 1 ? 'Iam Iklimah from Madura' : 'I want to be a Muslimah Web Developer';
    return { id, nama};
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Semoga Allah bantu menggapai cita-cita kita..amiin!!!';
console.log(halo);