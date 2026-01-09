import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DebutInvitation() {
  const slides = [
    {
      title: "You're Invited",
      text: "Join me as I celebrate my 18th birthday ✨",
    },
    {
      title: "The Debut",
      text: "A night of memories, laughter, and new beginnings",
    },
    {
      title: "Save the Date",
      text: "February 14, 2026 | 6:00 PM",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <Card className="max-w-md w-full rounded-2xl shadow-xl mb-6">
        <CardContent className="p-6 text-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold mb-3">{slides[index].title}</h1>
            <p className="text-base">{slides[index].text}</p>
          </motion.div>

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
            >
              Previous
            </Button>
            <Button
              onClick={() => setIndex((index + 1) % slides.length)}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-md w-full rounded-2xl shadow-xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold text-center mb-3">RSVP</h2>
          <p className="text-sm text-center mb-4">
            Please confirm your attendance by filling out the form below 💌
          </p>
          <iframe
            src="PASTE_YOUR_GOOGLE_FORM_EMBED_LINK_HERE"
            width="100%"
            height="500"
            className="rounded-xl border"
          />
        </CardContent>
      </Card>
    </div>
  );
}
