//DisplayData.js

$(document).ready(function () {
    getData();
  });
  // Get data from local storage and disply on console and on next page
  function getData() {
    let localStorageData = localStorage.getItem("formdata");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
   
    $("#firstName").text(studentObj.fname);
    $("#lastName").text(studentObj.lname);
    $("#birthday").text(studentObj.birthday);
    $("#gender").text(studentObj.gender);
    $("#email").text(studentObj.email);
    $("#phone").text(studentObj.phone);
  }
