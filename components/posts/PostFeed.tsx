import usePosts from "@/hook/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);
  return (
    <>
      {posts.map((item: Record<string, any>) => (
        <PostItem key={item.id} userId={userId} data={item} />
      ))}
    </>
  );
};

export default PostFeed;
