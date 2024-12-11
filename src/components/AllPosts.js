import React from 'react';
import PostCard from './PostCard';  // Assuming you have a PostCard component

// Example images array (use actual images in your project)
import img1 from '../pictures/images/blog_imgs/Rectangle 38.svg';
import img2 from '../pictures/images/blog_imgs/blog_img.svg';
import img3 from '../pictures/images/blog_imgs/blog_img1.svg';
// Add more images as needed

const AllPosts = () => {
  const postImages = [img1, img2, img3];  // Add all your post images here
  const postTitle = "The Impact of Technology on the Workplace";

  return (
    <section className="all-posts">
      <h2>All Posts</h2>
      <div className="posts-grid">
        {postImages.map((image, index) => (
          <PostCard key={index} image={image} title={postTitle} />
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
