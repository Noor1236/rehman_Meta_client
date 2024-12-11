import React from 'react';
import PostCard from './PostCard';

// Import images directly (if you're using Webpack or Create React App)
import img1 from '../pictures/images/blog_imgs/Rectangle 38.svg';
import img2 from '../pictures/images/blog_imgs/blog_img.svg';
import img3 from '../pictures/images/blog_imgs/blog_img1.svg';
import img4 from '../pictures/images/blog_imgs/blog_img2.svg';
import img5 from '../pictures/images/blog_imgs/blog_img3.svg';
import img6 from '../pictures/images/blog_imgs/blog_img4.svg';
import img7 from '../pictures/images/blog_imgs/blog_img5.svg';
import img8 from '../pictures/images/blog_imgs/blog_img6.svg';
import img9 from '../pictures/images/blog_imgs/blog_img7.svg';
import Advertisement from './Advertisement';

const LatestPosts = () => {
    const postImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    const postTitle = "The Impact of Technology on the Workplace";

    return (
        <section className="latest-posts">
            <Advertisement/>
            <h2>Latest Post</h2>
            <div className="posts-grid">
                {postImages.map((image, index) => (
                    <PostCard key={index} image={image} title={postTitle} />
                ))}
                
            </div>
            <Advertisement/>

        </section>
    );
};

export default LatestPosts;
