import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      alert("Please write something 🙏");
      return;
    }

    if (!email) {
      alert("Please add your email 🙏");
      return;
    }

    setIsSending(true);

    const templateParams = {
      email,
      message,
    };

    emailjs
      .send(
        "service_dir750i",
        "template_m224s1c",
        templateParams,
        "k2O5a1s8kkwPa8qoE"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMessage("");
          setMessageSent(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        {!messageSent && (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending.." : "Send"}
            </button>
          </form>
        )}
        {messageSent && <span>Thanks, I'll reply ASAP :)</span>}
      </div>
    </div>
  );
}
