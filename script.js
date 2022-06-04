// jQuery.extend({
//   getValues: function (url) {
//     var result = null;
//     $.ajax({
//       url: url,
//       dataType: "json",
//       async: false,
//       ajaxSuccess: function (data) {
//         // console.log(data);
//         result = data;
//       },
//     });
//     return result;
//   },
// });

// var results = $.getValues("https://randomuser.me/api/");

// console.log(results["phone"]);
const img = document.querySelector(".displayedimg img");
const bodywrapper = document.querySelector(".bodywrapper");
let response;
$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    // alert(data.results[0].name.first);
    let imgurl = data.results[0].picture.large;
    img.setAttribute("src", imgurl);
    let name = document.createElement("div");
    name.textContent =
      "Name:   " + data.results[0].name.first + " " + data.results[0].name.last;
    bodywrapper.appendChild(name);
    let gender = document.createElement("div");
    gender.textContent = "Gender:  " + data.results[0].gender;
    bodywrapper.appendChild(gender);
    let locationdata = data.results[0].location;
    for (let key in locationdata) {
      let location = document.createElement("div");
      location.textContent = "Address: ";
      bodywrapper.appendChild(location);
      if (typeof locationdata[key] === "object") {
        for (let key2 in locationdata[key]) {
          let location = document.createElement("div");
          location.textContent = `${key2}: ${locationdata[key][key2]}`;
          bodywrapper.appendChild(location);
          location.style.paddingLeft = "20px";
        }
      } else {
        location.textContent = `${key}: ${locationdata[key]}`;
        location.style.paddingLeft = "10px";
      }
      bodywrapper.appendChild(location);
    }
    let email = document.createElement("div");
    email.textContent = "email: " + data.results[0].email;
    bodywrapper.appendChild(email);
  },
});

// const body=document.querySelector(".body");
// body.innerHTML('${response.')
