function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_1y1t1yi";
    const templateID = "template_p30ttl6";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Your message has been sent successfully.");
    })
    .catch((err) => {
        console.error("Error sending email:", err);
    });
}