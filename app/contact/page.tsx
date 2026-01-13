"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "919643173854";
  const email = "independentfullstacksoftware@gmail.com";

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <section className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold text-white mb-6">
          Contact
        </h1>

        <p className="text-lg text-gray-400 mb-14">
          Reach out directly to discuss your project, requirements, or engagement model.
        </p>

        <div className="space-y-6 text-sm">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Team,%20I%20would%20like%20to%20discuss%20a%20project.`}
            target="_blank"
            className="flex items-center gap-4 border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-900 transition"
          >
            <Phone size={20} className="text-white" />
            <div>
              <p className="text-white font-medium">WhatsApp</p>
              <p className="text-gray-400">Quick discussion & instant response</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}?subject=Project%20Inquiry`}
            className="flex items-center gap-4 border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-900 transition"
          >
            <Mail size={20} className="text-white" />
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-gray-400">{email}</p>
            </div>
          </a>

        </div>

      </section>
    </main>
  );
}
