import React from 'react';
import './Results.less';

export const Results = () => {
    return (
        <div className="Results" role="list">
            <div className="Result" role="listitem">
                <a
                    href="https://www.vrbo.com/10157309ha?noDates=true"
                    target="_blank"
                >
                    <div className="thumbnail">
                        <img src="https://odis.homeaway.com/odis/listing/0bf854e7-7102-4377-bffd-485a5bf6f1b8.c6.jpg" />
                    </div>
                    <div className="info">
                        <div className="price">
                            <span className="InstantBookIcon">
                                <span className="SVGIcon SVGIcon--16px SVGIcon--inline">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            stroke="none"
                                            fill="currentColor"
                                            d="M6.9 8.86H3.85c-.57 0-.73-.35-.39-.78L9.1 1.06c.35-.43.59-.33.54.22L9.1 7.14h3.03c.57 0 .73.35.39.78L6.9 14.94c-.35.43-.59.33-.54-.22l.52-5.86z"
                                        ></path>
                                    </svg>
                                </span>
                            </span>
                            <strong className="amount">$897</strong>
                            <span className="period">avg/night</span>
                            <span className="details">
                                Villa, Sleeps 2, Free cancellation
                            </span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="Result" role="listitem">
                <div className="thumbnail">
                    <img src="https://odis.homeaway.com/odis/listing/767c729b-8ba9-4af0-bd16-7537f39d7588.c6.jpg" />
                </div>
                <div className="info">
                    <div className="price">
                        <span className="InstantBookIcon">
                            <span className="SVGIcon SVGIcon--16px SVGIcon--inline">
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <path
                                        stroke="none"
                                        fill="currentColor"
                                        d="M6.9 8.86H3.85c-.57 0-.73-.35-.39-.78L9.1 1.06c.35-.43.59-.33.54.22L9.1 7.14h3.03c.57 0 .73.35.39.78L6.9 14.94c-.35.43-.59.33-.54-.22l.52-5.86z"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                        <strong className="amount">$50</strong>
                        <span className="period">avg/night</span>
                        <span className="details">
                            Guest House, Sleeps 16, Free cancellation
                        </span>
                    </div>
                </div>
            </div>
            <div className="Result" role="listitem">
                <div className="thumbnail">
                    <img src="https://odis.homeaway.com/odis/listing/f2aa1472-ceae-4973-8d9a-9a532f56fe92.c6.jpg" />
                </div>
                <div className="info">
                    <div className="price">
                        <span className="InstantBookIcon">
                            <span className="SVGIcon SVGIcon--16px SVGIcon--inline">
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <path
                                        stroke="none"
                                        fill="currentColor"
                                        d="M6.9 8.86H3.85c-.57 0-.73-.35-.39-.78L9.1 1.06c.35-.43.59-.33.54.22L9.1 7.14h3.03c.57 0 .73.35.39.78L6.9 14.94c-.35.43-.59.33-.54-.22l.52-5.86z"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                        <strong className="amount">$4,785</strong>
                        <span className="period">avg/night</span>
                        <span className="details">
                            Villa, Sleeps 24, Free cancellation
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
