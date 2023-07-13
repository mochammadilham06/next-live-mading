"use client";
import React, { useState } from "react";
import Avatar from "@live-component/Avatar";
import CommentsIcon from "@live-asset/svg/comment";
import Card from "@live-component/Card";
import { ProfileImage } from "@live-config/images";

const CommentCard = ({ comments }: any) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      {comments.length === 0 ? (
        <button className="flex gap-5 font-semibold text-sm items-center">
          <CommentsIcon />
          No Comments Here
        </button>
      ) : (
        <button
          onClick={toggleComments}
          className="flex gap-5 font-semibold text-sm items-center"
        >
          <CommentsIcon />
          {showComments ? "Hide Comments" : `${comments?.length} Comments`}
        </button>
      )}
      {showComments &&
        comments?.map((comment: any, index: number) => (
          <Card key={index}>
            <div className="flex mt-4 gap-3 items-center">
              <div>
                <Avatar imageUrl={ProfileImage} alt={"User"} />
              </div>
              <div className="grow rounded-full">
                <p>{comment.content}</p>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default CommentCard;
