"use client";
import { useState } from "react";
import { Bot } from "lucide-react"; // Icon from lucide-react

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        <Bot className="w-5 h-5" /> {/* 🤖 icon */}
        AI Agent
      </button>

      {/* Iframe Chat Box */}
      {open && (
        <div className="mt-4 w-[360px] h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-300">
          <iframe
            src="https://daniyalxdev-personal-assistant.hf.space"
            width="100%"
            height="100%"
            className="border-none"
          />
        </div>
      )}
    </div>
  );
}
