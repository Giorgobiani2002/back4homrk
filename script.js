// function resolveOrReject() {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve("resolved");
//     } else {
//       reject(" rejected");
//     }
//   });
// }

// resolveOrReject()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   homework 2

// async function fetchData() {
//   const firstUrl = "https://dummyjson.com/users";
//   const secondUrl = "https://jsonplaceholder.typicode.com/users";

//   const firstFetch = fetch(firstUrl).then((response) => response.json());
//   const secondFetch = fetch(secondUrl).then((response) => response.json());
//   return Promise.race([firstFetch, secondFetch])
//     .then((data) => {
//       console.log("Data from the faster response:", data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }

// fetchData();

/// homework 3

// const first = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("pirveli!!!!!!!!!");
//   }, 5000);
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("meoree");
//   }, 4000);
// });

// const third = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("ERROR");
//   }, 3000);
// });

// Promise.all([first, second, third])
//   .then((results) => {
//     console.log("all good", results);
//   })
//   .catch((error) => {
//     console.error("reject one", error);
//   });



/// homework 4
