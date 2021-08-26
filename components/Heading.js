import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Heading = (props) => {
    return (
        <div>
            <div className="pt-16">
                <h1 className="font-black text-5xl text-gray-50 bg-rdorange px-5 inline">
                    {props.title}
                </h1>
            </div>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
};

export default Heading;
