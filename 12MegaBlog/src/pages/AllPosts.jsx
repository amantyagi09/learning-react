import { useState, useEffect } from "react";
import service from "../appwrite/confi";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function AllPosts() {
  
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!authStatus) {
      setPosts([]); // clear posts on logout
      return;
    }
  
    service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  }, [authStatus]);
  
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
