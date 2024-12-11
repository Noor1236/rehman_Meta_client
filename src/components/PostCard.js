import React from 'react';

const PostCard = ({ image, title }) => {
    return (
        <div className="post-card">
            <img src={image} alt={title} />
            <div className="post-info">
                <span className="category-tag">Technology</span>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default PostCard;
