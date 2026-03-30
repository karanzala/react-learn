import React from "react";
import {Bookmark} from 'lucide-react';

const Card = (props) => {
    const data = props?.data;

    if (!data) {
        return (
            <div className="card card--empty">
                <div className="center">
                    <h3>No data available</h3>
                    <p>Pass a valid `data` object to Card.</p>
                </div>
            </div>
        );
    }

    const {
        companyLogo,
        companyName,
        postedAgo,
        jobTitle,
        tags,
        salary,
        location,
        saved,
    } = data;

    return (
        <div className="card">
            <div className="top">
                <img src={companyLogo} alt={companyName || "Company logo"} />
                <button className={`btn-${saved ? "saved" : "normal"}`}>
                    {saved ? "Saved" : "Save"} <Bookmark size={15} />
                </button>
            </div>
            <div className="center">
                <h3>
                {companyName || "Company"} <span>{postedAgo || "--"}</span>
                </h3>
                <h2>{jobTitle || "Job Title"}</h2>
                <div className="tags">
                    {(tags || []).map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <div className="wrap">
                    <h3>{salary || "--"}</h3>
                    <p>{location || "--"}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
};

export default Card;
