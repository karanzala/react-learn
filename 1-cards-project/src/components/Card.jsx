import React from "react";
import {Bookmark} from 'lucide-react';

const Card = () => {
    return (
        <div className="card">
            <div className="top">
                <img src="https://images.unsplash.com/photo-1770954179855-0871734fb34a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <button> save <Bookmark size={15} /> </button>
            </div>
            <div className="center">
                <h3> amazon <span> 5 days ago</span> </h3>
                <h2>Senior Ui/ux designer</h2>
                <div className="tags">
                    <span>Part time </span>
                    <span>Senior level</span>
                </div>
            </div>
            <div className="bottom">
                <div className="wrap">
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
};

export default Card;
