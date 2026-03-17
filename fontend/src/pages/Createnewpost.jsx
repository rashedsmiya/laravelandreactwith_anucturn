import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Createnewpost() {

    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const [formData, setFormData] = React.useState({
        'title': '',
        'author': '',
        'category': '',
        'status': '',
        'content': ''
    });

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setFormData((Prev)=>({...Prev, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        try{
            const response = 
        }catch(err){
            
        }finally{
            setIsSubmiting(false);
        }
         
    };

  return (
   <div>
        <div className="container mt-4">
            <h1 className="page-title">Create New Post</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Create Post</li>
                </ol>
            </nav>
            <div className="card mt-3">
                <div className="card-header">
                    Post Details
                </div>
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form id='post-form' onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Title</label>
                                <input type="text" name='title' value={formData.title} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Author</label>
                                <input type="text" name='author' value={formData.author} onChange={handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Category</label>
                                <select className="form-select" id="category" value={formData.category} name='category' onChange={handleChange}>
                                    <option selected>Select category</option>
                                    <option>Technology</option>
                                    <option>Business</option>
                                    <option>Education</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Status</label>
                                <select className="form-select" id='status' value={formData.status} name='status' onChange={handleChange}>
                                    <option value="">Select Status</option>
                                    <option>Published</option>
                                    <option>Draft</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <textarea className="form-control" rows={8} name='content' value={formData.content} onChange={handleChange}></textarea>
                        </div>
                        <div className="d-flex justify-content-end gap-2">

                            <Link to='/' type="button" className="btn btn-secondary">
                                Cancel
                            </Link>
                             
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
