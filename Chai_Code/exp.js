(function chai() {
    console.log("IIFE");
})();

((name) => {
    console.log(name);
})("LELELE")