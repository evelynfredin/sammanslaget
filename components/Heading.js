import React from "react";
import PropTypes from "prop-types";

const Heading = (props, children) => {
    return (
        <div className="flex flex-col mx-5 md:mx-16">
            <div className="mt-16">
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
