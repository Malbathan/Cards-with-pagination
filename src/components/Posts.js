import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="card-deck">
      {posts.map(post => (
        <div key={post.id}  className="card">
      
          <div className="card-body">
            <p className="card-text">
              {post.title}
            </p> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
