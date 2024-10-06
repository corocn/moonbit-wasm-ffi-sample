const { instance: { exports } } = await WebAssembly.instantiateStreaming(
    fetch(new URL("/target/wasm-gc/release/build/main/main.wasm", import.meta.url)),
    {
        Math: {
            random: Math.random
        }
    }
);

const ret = exports.moonbit_random();
console.log(ret)