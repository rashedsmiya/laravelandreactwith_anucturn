import React from 'react'
import { Link } from 'react-router'
import '../index.css'
import '../assets/style.css'

export default function Home() {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/posts');
            const data = await response.json();
            if (data.success) {
                setPosts(data.data);
            }
        } catch (err) {
            setError('Failed to load posts');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this post?')) return;
        
        try {
            const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                setPosts(posts.filter(post => post.id !== id));
            }
        } catch (err) {
            console.error('Error deleting post:', err);
        }
    };

    return (
        <div className="container">
            <div className="page-title">
                <h1>Post Management System</h1>
                <p className="subtitle">Manage your posts efficiently</p>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">All Posts</h5>
                        <Link to="/create-new-post" className="btn btn-primary btn-sm">Create New</Link>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-striped align-middle">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="7" className="text-center">Loading...</td></tr>
                                ) : error ? (
                                    <tr><td colSpan="7" className="text-center text-danger">{error}</td></tr>
                                ) : posts.length === 0 ? (
                                    <tr><td colSpan="7" className="text-center">No posts found</td></tr>
                                ) : (
                                    posts.map((post, index) => (
                                        <tr key={post.id}>
                                            <td>{index + 1}</td>
                                            <td>{post.title}</td>
                                            <td>{post.author}</td>
                                            <td>{post.category}</td>
                                            <td>
                                                <span className={`badge ${post.status === 'Published' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                    {post.status}
                                                </span>
                                            </td>
                                            <td>{new Date(post.created_at).toLocaleDateString()}</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(post.id)}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
