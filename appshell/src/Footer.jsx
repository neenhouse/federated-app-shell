import React from 'react';

import './Footer.less';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                © 2020 Vrbo, an Expedia Group company. All rights reserved.
            </div>
            <div className="social">
                <a
                    aria-label="instagram"
                    className="social--link instagram"
                    href="http://instagram.com/vrbo"
                    rel="noreferrer"
                    target="_blank"
                    title="instagram"
                >
                    <span className="SVGIcon SVGIcon--24px SVGIcon--inline">
                        <svg
                            focusable="false"
                            data-id="SVG_INSTAGRAM__24"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                fill="currentColor"
                                transform="translate(2 2)"
                                fillRule="evenodd"
                            >
                                <path
                                    d="M1.87 5.75v8.4a3.88 3.88 0 0 0 3.88 3.88h8.5a3.88 3.88 0 0 0 3.88-3.88v-8.4a3.88 3.88 0 0 0-3.88-3.88h-8.5a3.88 3.88 0 0 0-3.88 3.88zm-1.84 0A5.73 5.73 0 0 1 5.75.03h8.5a5.73 5.73 0 0 1 5.73 5.72v8.4a5.73 5.73 0 0 1-5.73 5.72h-8.5a5.73 5.73 0 0 1-5.72-5.72v-8.4z"
                                    stroke="none"
                                    fillRule="nonzero"
                                ></path>
                                <path
                                    d="M10.03 15.28a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5zm0-1.85a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z"
                                    stroke="none"
                                    fillRule="nonzero"
                                ></path>
                                <circle
                                    cx="15.33"
                                    cy="4.65"
                                    r="1.27"
                                    stroke="none"
                                ></circle>
                            </g>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};
