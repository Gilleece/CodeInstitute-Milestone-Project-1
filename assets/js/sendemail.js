function sendMail(contactForm) {
    emailjs.send("gmail", "template_0f51ggk", {
        "from_name": contactForm.name.value,
        "reply_to": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        })
    return false;
}