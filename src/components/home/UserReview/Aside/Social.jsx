import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
    const socials = [
        { id: 1, icon: "twitter" },
        { id: 2, icon: "instagram" },
        { id: 3, icon: "facebook" },
    ];

    return (
        <div className="flex justify-center gap-x-6">
            {socials.map((social) => (
                <Link to="" key={social.id}>
                    <svg className="w-5 h-5">
                        <use href={`#${social.icon}`}></use>
                    </svg>
                </Link>
            ))}
        </div>
    );
};

export default Social;
