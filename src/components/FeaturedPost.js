import React from 'react';

// Import the image directly
import featuredImage from '../pictures/images/Image.png';
import Advertisement from './Advertisement';
import LatestPosts from './LatestPosts';

const FeaturedPost = () => {
    return (
       <>
        <section className="featured-post">
            <div className="featured-image">
                <img src={featuredImage} alt="Featured Post" />
                <div className="featured-content">
                    <span className="category-tag">Technology</span>
                    <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                    <p>by Jason Francisco - August 30, 2022</p>
                </div>
            </div>
              
      
        </section>
      <LatestPosts />
      <button className="btn01" type="button">View All Post</button>
        </>
    );
};

export default FeaturedPost;
