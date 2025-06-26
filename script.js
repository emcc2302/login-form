// var flag = 0;
// document.getElementById("click-me").addEventListener("click", function () {
//   if (flag == 0) {
//     document.querySelector("body").style.backgroundImage =
//       "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')";
//     flag = 1;
//     // console.log("light");
//   } else {
//     document.querySelector("body").style.backgroundImage =
//       "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')";

//     body.style.backdropFilter = "blur(16px) saturate(180%)";
//     body.style.webkitBackdropFilter = "blur(16px) saturate(180%)";
//     body.style.backgroundColor = "rgba(255, 255, 255, 0.83)";
//     body.style.borderRadius = "12px";
//     body.style.border = "1px solid rgba(209, 213, 219, 0.65)";
//       flag = 0;
//     // console.log("dark/image");
//   }
// });

let flag = 0;
const login = document.querySelector(".login-form");
const body = document.querySelector("body");

document.getElementById("click-me").addEventListener("click", function () {
  if (flag == 0) {
    body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')";
    login.style.backdropFilter = "blur(3px) saturate(180%)";
    login.style.webkitBackdropFilter = "blur(3px) saturate(180%)";
    login.style.backgroundColor = "rgba(17, 25, 40, 0.75)";
    login.style.border = "1px solid rgba(255, 255, 255, 0.125)";
    // login.style.borderRadius = "12px"; // commented as per your input
    flag = 1;
  } else {
    body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')";
    login.style.backdropFilter = "blur(5px) saturate(150%)";
    login.style.webkitBackdropFilter = "blur(5px) saturate(150%)";
    login.style.backgroundColor = "rgba(184, 184, 192, 0.7)";
    login.style.border = "1px solid rgba(255, 255, 255, 0.2)";
    login.style.borderRadius = "12px";

    flag = 0;
  }
});
