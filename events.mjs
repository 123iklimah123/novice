import { EventEmitter } from "events";
//kode dimulai dengan membuat objek EventEmitter
//ini adalah class yang memungkinkan untuk menambah info

const emitter = new EventEmitter();

// kemudian membuat 2 info satu untuk 'helo' dan 'hello'
emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})
emitter.addListener("hello", (name) => {
    console.info(`Halo ${name}`);
})
emitter.emit("hello", "Budi");