import { motion } from "framer-motion";

const Backdrop = ({ children, onClick, width }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        height: "100vh",
        width: width,
        background: "rgba(0, 0, 0, 0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        overflowY: "scroll",
      }}
      className="no-scroll"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
