"use client";

import { useState } from "react";
import { MessageCircleMore } from "lucide-react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "263774867068"; // Replace with your WhatsApp phone number
  const whatsappMessage = "Hello! I have a question about your services."; // Default message
  const toggleChat = () => setIsOpen(!isOpen);
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
      >
        <MessageCircleMore size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-4 w-72 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">
            Need SMS for your school?
          </h3>
          <p className="text-gray-600 mt-2">
            Safe time, work smart! Chat with us now!
          </p>
          <a
            href="https://web.whatsapp.com/send?phone=263774867068&text=Hello SYSTEMAR SMS"
            target="_blank"
            className="w-full mt-4 inline-block bg-emerald-700 text-white text-center p-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Start Chat
          </a>
        </div>
      )}
    </div>
  );
}
