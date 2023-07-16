"use client";
import React, { ChangeEvent, useState } from "react";
import CommentsIcon from "@live-asset/svg/comment";
import Card from "@live-component/Card";
import { DummyProfile, SendIcon } from "@live-config/images";
import Avatar2 from "@live-component/Avatar/avatar2";
import APIComment from "@live-api/Client/comment.api";
import { SuccessAlert } from "@live-component/Alert/AlertSuccess";
import { ErrorAlert } from "@live-component/Alert/AlertError";

const CommentCard = ({ comments, userData, postid }: any) => {
  const initialData = {
    content: "",
    post_id: postid,
    user_id: userData?.id,
  };
  const [showComments, setShowComments] = useState(false);
  const [form, setForm] = useState(initialData);
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = async () => {
    try {
      const res = await APIComment.postComment(form).then(() => {
        SuccessAlert("Success", "Add Comment Success");
      });
      console.log(res);
    } catch (error) {
      ErrorAlert("Failed", "Failed to Post Comment");
    }
    setForm(initialData);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div>
      {comments?.length === 0 ? (
        <button
          onClick={toggleComments}
          className="flex gap-5 font-semibold text-sm items-center"
        >
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
                <Avatar2
                  imageUrl={
                    comment?.comments_user.images
                      ? comment?.comments_user.images
                      : DummyProfile
                  }
                  alt={"User"}
                />
              </div>
              <div className="grow rounded-full">
                <p className="font-bold">{comment?.comments_user.fullname}</p>
                <p>{comment?.content}</p>
              </div>
            </div>
          </Card>
        ))}
      {showComments && (
        <div className="flex mt-4 gap-3 items-center">
          <div>
            {/* <Avatar2 imageUrl={DummyProfile} alt={"User"} isSize="md" /> */}
            <Avatar2
              imageUrl={userData?.images ? userData?.images : DummyProfile}
              alt={"User"}
            />
          </div>
          <div className="border grow rounded-full">
            <textarea
              className="px-4 p-3 h-12 rounded-full block w-full overflow-hidden"
              placeholder="Leave a Comment"
              name="content"
              value={form.content}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button onClick={handleSend}>
            <SendIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
