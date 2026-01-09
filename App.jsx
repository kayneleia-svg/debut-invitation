import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DebutInvitation() {
  const slides = [
    { image: "/image1.png" },
    { image: "/image2.png" },
    { image: "/image3.png" },
    { image: "/image4.png" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-center p-6">
      {/* Slideshow */}
      <div className="max-w-md w-full rounded-2xl shadow-xl mb-6 bg-white p-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={`Debut Invitation ${index + 1}`}
            className="w-full rounded-xl"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
            onClick={() =>
              setIndex((index - 1 + slides.length) % slides.length)
            }
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            onClick={() => setIndex((index + 1) % slides.length)}
          >
            Next
          </button>
        </div>
      </div>

      {/* RSVP */}
      <div className="max-w-md w-full rounded-2xl shadow-xl bg-white p-4">
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
      </div>
    </div>
  );
}
