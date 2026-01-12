"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "919643173854";
  const receiverEmail = "independentfullstacksoftware@gmail.com";
  const recaptchaSiteKey = "6Le680QsAAAAACcejJNYbYMhqJRe2GiBW1MWwvcJ";

  const handleSubmit = async () => {
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully.");

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaVerified(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <section className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold text-white mb-6">
          Contact
        </h1>

        <p className="text-lg text-gray-400 mb-12">
          Reach out to discuss a project, engagement model, or long-term
          software maintenance.
        </p>

        {/* Direct Contact (DISPLAY ONLY – not submission) */}
        <div className="flex flex-col gap-6 mb-14 text-sm">
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-400"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18} />
            <span className="text-gray-400 text-xs">
              {receiverEmail}
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-5">

          <input
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
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
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </div>

      </section>
    </main>
  );
}
