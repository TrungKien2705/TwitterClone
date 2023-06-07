import React from "react";
import CommentItem from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments }) => {
  return (
    <>
      {comments?.map((item) => (
        <CommentItem data={item} key={item.id} />
      ))}
    </>
  );
};

export default CommentFeed;
