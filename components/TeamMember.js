import Image from "next/image";
import PropTypes from "prop-types";

const TeamMember = (props) => {
    return (
        <div className="flex text-gray-800 space-x-5">
            <div className="w-auto">
                <Image
                    priority
                    src={props.imgSrc}
                    height={130}
                    width={130}
                    alt={props.altText}
                    className="rounded-lg"
                />
            </div>

            <div className="w-2/3">
                <h3 className="font-bold text-xl">{props.memberName}</h3>
                <p className="text-rdorange text-base">{props.occupation}</p>
                <div className="flex space-x-2">
                    <a href={`mailto:${props.email}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-rdgreen"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </a>

                    <a href={props.portfolio}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-rdgreen"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                    </a>
                </div>
                <hr className="text-gray-300 min-w-full my-3" />
                <p className="text-base">{props.description}</p>
            </div>
        </div>
    );
};

TeamMember.propTypes = {};

export default TeamMember;
