var sb1 = document.getElementById("sb");


sb1.addEventListener("click", function () {
  var name1 = document.getElementById("name");
  var email1 = document.getElementById("email");
  var phone1 = document.getElementById("phone");

  if (name1.value.length == 0) {
    document.getElementById("errol-name").innerHTML = "Không để trống tên";
    name1.style.background = "gray";
    return false;
  } else {
    document.getElementById("errol-name").innerHTML = "";
    name1.style.background = "none";
  }

  if (email1.value.length == 0) {
    document.getElementById("errol-email").innerHTML = "Không để trống email";
    email1.style.background = "gray";
    return false;
  } else {
    document.getElementById("errol-email").innerHTML = "";
    email1.style.background = "none";
  }

  var chuanEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!chuanEmail.test(email1.value)) {
    document.getElementById("errol-email").innerHTML = "Nhập chưa đúng định dạng Email...";
    email1.style.background = "gray";
    return false;
  } else {
    document.getElementById("errol_email").innerHTML = "";
    email1.style.background = "none";

  }
  if (phone1.value.length == 0) {
    document.getElementById("errol-phone").innerHTML = "Không để trống số điện thoại";
    phone1.style.background = "gray";
    return false;
  } else {
    document.getElementById("errol-phone").innerHTML = "";
    phone1.style.background = "none";
    alert("Đăng ký thành công!!");
  }
  // if (phone1.value.length == 0) {
  //   document.getElementById("errol-phone").innerHTML =
  //     "Không để trống số điện thoại";
  //   phone1.style.background = "gray";
  //   return false;
  // } else {
  //   document.getElementById("errol-phone").innerHTML = "";
  //   phone1.style.background = "none";
  // }
  // return true;
});
var reset = document.getElementById("reset");
