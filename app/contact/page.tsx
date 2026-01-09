"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const whatsappNumber = "9068906795";
  const receiverEmail = "independentfullstacksoftware@gmail.com";
  const recaptchaSiteKey = "6Le680QsAAAAACcejJNYbYMhqJRe2GiBW1MWwvcJ"; // 🔑 paste here

  const handleSubmit = () => {
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(
      `mailto:${receiverEmail}?subject=Project Inquiry&body=${text}`,
      "_blank"
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <section className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold text-white mb-6">
          Contact
        </h1>

        <p className="text-lg text-gray-400 mb-12">
          Reach out to discuss a project or engagement model.
        </p>

        {/* Direct Contact */}
        <div className="flex flex-col gap-6 mb-14 text-sm">
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18} />
            <a
              href={`mailto:${receiverEmail}`}
              className="hover:underline"
            >
              {receiverEmail}
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <input
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* CAPTCHA */}
          <ReCAPTCHA
            sitekey={recaptchaSiteKey}
            theme="dark"
            onChange={() => setCaptchaVerified(true)}
          />

          <button
            onClick={handleSubmit}
            className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </div>

      </section>
    </main>
  );
}
