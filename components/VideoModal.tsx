import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}) => {
  if (!isOpen || !videoUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl border border-slate-700"
        >
          <div className="flex justify-between items-center p-4 border-b border-slate-800">
            <h3 className="text-lg font-semibold text-white">{title} - Demo</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="aspect-video bg-black">
            {videoUrl.includes("youtube.com") ||
            videoUrl.includes("youtu.be") ? (
              <iframe
                src={videoUrl
                  .replace("watch?v=", "embed/")
                  .replace("youtu.be/", "youtube.com/embed/")}
                title={`${title} Demo Video`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                className="w-full h-full"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;
