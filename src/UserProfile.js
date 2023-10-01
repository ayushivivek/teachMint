import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import PostPopup from "./PostPopup";

function UserProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  const onClose = () => {
    setOpen(false);
    setSelectedPost({});
  };
  const onPostClick = (post) => {
    setOpen(true);
    setSelectedPost(post);
  };
  const onBack = () => {
    navigate("/");
  };
  return (
    <>
      {data && (
        <div className="user-profile">
          <div style={{ display: "flex" }}>
            <button onClick={onBack}>Back to Directory</button>
            <div className="profileText">
              <h3>Profile Page</h3>
            </div>
          </div>
          <div className="user-details">
            <div>
              <p>{data.name}</p>
              <p>{data.username}</p>
              <p>{data.catchPhrase}</p>
            </div>
            <div>
              <p>{data.address}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </div>

          <div className="user-posts">
            {data.posts.map((post, index) => (
              <div
                className="post"
                key={index}
                onClick={() => onPostClick(post)}
              >
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
          {open && <PostPopup onClose={onClose} post={selectedPost} />}
        </div>
      )}
    </>
  );
}

export default UserProfile;
