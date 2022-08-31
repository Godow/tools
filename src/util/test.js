console.log("jl");
(async function fn() {
  await Promise.resolve(55).then((res) => console.log(res));
})();

console.log("123");

window.vip = function () {
  console.log("vvv");
};
