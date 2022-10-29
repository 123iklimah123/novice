function samplePromise() {
    return Promise.resolve("Eka");
}

const data = await samplePromise(); // error
console.info(data);

function samplePromise1() {
    return Promise.resolve("ya Allah beri kami kesempatan untuk mewujudkan cita-cita kami amin!");
}

const data1 = await samplePromise1();
console.info(data1);