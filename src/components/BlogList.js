import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';  // Import the axios instance

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Delete a blog
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/blogs/${id}`);
      alert('Blog deleted successfully!');
      setBlogs(blogs.filter((blog) => blog._id !== id)); // Remove the blog from the state
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting the blog');
    }
  };

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
