import React from "react";
import footerImg from "../../assets/media/images/footer-img.jpg";
import ButtonAndSocial from "../Common/ButtonAndSocial";
function Contact() {
  return (
    <div
      className="rounded-3xl p-10"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
      }}
      id="contact"
    >
      <div className="flex flex-col gap-3 ">
        <h3 className="text-4xl font-semibold">Contact Me</h3>
        <p className="text-lg">
          Feel free to reach out for any work or just a friendly hello
        </p>
        <p className="text-base md:text-lg font-medium" id="contact-email">
          Email: workmail.narayan@gmail.com
        </p>
        <p id="contact-phone" className="font-medium">
          Phone: +91 9144145904
        </p>
      </div>
      <div className="py-5 md:py-0">
        <ButtonAndSocial />
      </div>
    </div>
  );
}

export default Contact;
