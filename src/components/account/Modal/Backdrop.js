import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100%",
        background: "#000000e1",
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
