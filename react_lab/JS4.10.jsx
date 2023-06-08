import React, { useState } from 'react';

const LikeBtn = () => {
    const [like, setLike] = useState(false);

    if (like) {
        return <button onClick={() => setLike(!like)}>
        You like it
    </button>
    } else {
        return <button onClick={() => setLike(!like)}>
            Like
        </button>
    }
}

export default LikeBtn