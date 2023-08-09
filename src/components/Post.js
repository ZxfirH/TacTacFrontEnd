
import React, { useState } from 'react';

const Post = ({ post, handleLike }) => {
    const { id, text, likes, image_url } = post;
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
        handleLike(id);
    };

    return (
        <div className="post">
            <img src={image_url} alt={text} />
            <p>{text}</p>
            <button className={liked ? 'liked' : ''}
                onClick={() => handleLikeClick(id)}>♡ {likes}
            </button>
        </div>
    );
};

export default Post;
