import { useState } from "react";
import BlogContext from "./BlogContext";
const API_BASE_URL = "https://dev-blogs-backend.onrender.com/";

const BlogState = (props) => {
	const blogsInitial = []

	const [blogs, setBlogs] = useState(blogsInitial)
	const [searchResults, setSearchResults] = useState([]);

	// Get All Blogs
	const getAllBlogs = async () => {
		const response = await fetch(`${API_BASE_URL}api/blogs/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})

		const json = await response.json();
		setBlogs(json);
	}

	// Create Blog
	const createBlog = async (title, content, category, blogImage) => {
		const author = localStorage.getItem("username");
		const response = await fetch(`${API_BASE_URL}api/blogs/createblog`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem("token"),
			},
			body: JSON.stringify({ title, content, category, blogImage, author }),
		});

		const blog = await response.json();
		setBlogs(blogs.concat(blog));
	};

	// Delete Blog
	const deleteBlog = async (id) => {
		// Find the blog with the given ID
		const blogToDelete = blogs.find((blog) => blog._id === id);

		// If the blog is not found, do nothing
		if (!blogToDelete) {
			return;
		}

		// Get the logged-in user's ID (assuming you have stored it in localStorage)
		const loggedInUserId = localStorage.getItem('userId');

		console.log('Blog to delete:', blogToDelete);
		console.log('Logged-in user ID:', loggedInUserId);

		// Check if the logged-in user is the owner of the blog
		if (blogToDelete.author._id !== loggedInUserId) {
			// If the logged-in user is not the owner of the blog, do nothing
			console.log('User is not the owner of the blog.');
			return;
		}

		const response = await fetch(`${API_BASE_URL}api/blogs/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem('token'),
			},
		});

		// eslint-disable-next-line
		const json = await response.json();

		const newBlogs = blogs.filter((blog) => {
			return blog._id !== id;
		});
		setBlogs(newBlogs);
	};



	const [blog, setBlog] = useState(null)
	// Get Blog by id
	const getBlogByID = async (id) => {
		const response = await fetch(`${API_BASE_URL}api/blogs/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})

		const data = await response.json();
		setBlog(data)
	}

	// Get Specific user Blogs
	const userBlogs = async (id) => {
		const response = await fetch(`${API_BASE_URL}api/blogs/user/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem('token')
			}
		})

		const blogs = await response.json();
		setBlogs(blogs)
	}

	const searchBlogs = async (query) => {
		const response = await fetch(`${API_BASE_URL}api/blogs/search?q=${query}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await response.json();
		console.log(data)

		setSearchResults(data);
	}

	return (
		<BlogContext.Provider value={{ blogs, blog, getAllBlogs, createBlog, getBlogByID, userBlogs, deleteBlog, searchResults, searchBlogs }}>
			{props.children}
		</BlogContext.Provider>
	)
}

export default BlogState;