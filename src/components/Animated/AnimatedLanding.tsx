import { motion } from "framer-motion";

interface AnimatedLandingProps {
  title: string;
  children: React.ReactNode;
}

export const AnimatedLanding: React.FC<AnimatedLandingProps> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center py-12"
    >
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
