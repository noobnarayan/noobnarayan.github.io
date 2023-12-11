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
      <div className="flex flex-col gap-4 ">
        <h3 className="text-4xl font-semibold">Contact Me</h3>
        <p className="text-lg">
          Feel free to reach out for any work or just a friendly hello
        </p>
        <p className="text-base  flex gap-3 items-center" id="contact-email">
          <i className="fa-solid fa-envelope "></i>
          <a
            href="mailto:workmail.narayan@gmail.com"
            className="underline underline-offset-4"
          >
            workmail.narayan@gmail.com
          </a>
        </p>
        <p id="contact-phone" className="text-base flex gap-3 items-center">
          <i className="fa-solid fa-phone "></i>
          <a href="tel:+919144145904" className="underline underline-offset-4">
            +91 9144145904
          </a>
        </p>
      </div>
      <div className="py-5 md:py-0">
        <ButtonAndSocial />
      </div>
    </div>
  );
}

export default Contact;
