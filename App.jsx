import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DebutInvitation() {
      const slides = [
  { image: "/DEBUT%20INVITATION%20(7).png" },
  { image: "/DEBUT%20INVITATION%20(8).png" },
  { image: "/DEBUT%20INVITATION%20(9).png" },
  { image: "/DEBUT%20INVITATION%20(10).png" },
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
            <img
  src={slides[index].image}
  alt="Debut Invitation"
  className="w-full rounded-xl"
/>
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
            src="https://docs.google.com/forms/d/e/1FAIpQLScSlAcpKucFkVD0UwEpCLq47ImbyF2pEpynKGn1vekvG6mAiA/viewform?usp=sharing&ouid=103858911872075913794"
            width="100%"
            height="500"
            className="rounded-xl border"
          />
        </CardContent>
      </Card>
    </div>
  );
}
