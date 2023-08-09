import React from 'react';
import Post from './Post';

const PostFeed = ({ posts, handleLike }) => {
  return (
    <div className="post-feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} handleLike={handleLike} />
      ))}
    </div>
  );
};

export default PostFeed;
