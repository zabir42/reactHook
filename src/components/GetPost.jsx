import React, { useEffect, useState } from "react";

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("there is somthing error!");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.body}
      {error || null}
    </div>
  );
};

export default GetPost;
