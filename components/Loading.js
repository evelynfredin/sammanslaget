import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/utilities.module.css";

const Loading = ({ setLoading }) => {
    return (
        <motion.div
            transition={{ duration: 3 }}
            animate={{ opacity: 1 }}
            onAnimationComplete={() => setLoading(false)}
        >
            <div
                className={`${styles.bgcover} bg-hero h-screen w-screen flex justify-center items-center`}
            >
                <motion.h3
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-black uppercase text-gray-50"
                >
                    Loading...
                </motion.h3>
            </div>
        </motion.div>
    );
};

export default Loading;
