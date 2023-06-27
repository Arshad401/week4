function sendMail(){
    var quota={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        message:document.getElementById("message").value,

    };



const serviceID = "service_03s8w7c";
const templateID = "template_jrk72pv";


emailjs
 .send(serviceID, templateID, quota)
 .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your message sent successfully");



 })
 .catch((err) => console.log(err));
}