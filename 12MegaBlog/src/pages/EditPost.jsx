import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/confi";

function EditPost() {
  const [post, setposts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setposts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
