"use client";
import React, { Fragment } from "react";
import Avatar from "@live-component/Avatar";
import Card from "@live-component/Card";
import { ProfileImage } from "@live-config/images";
import Link from "next/link";
import "./contentCard.css";
import ToggleButton from "@live-component/Toggle";
import { ContentInterface } from "src/interface/content";
import CommentCard from "@live-component/Comments";
import { Post } from "src/interface/user";

const ContentCardDetail = ({ data, username }: any) => {
  console.log(data);
  return (
    <Fragment>
      {data?.map((items: Post) => (
        <Card key={items.id}>
          <div className="flex gap-3">
            <Link href={""} className="hover:cursor-pointer">
              <Avatar imageUrl={ProfileImage} alt={"User"} />
            </Link>
            <div className="flex justify-between grow">
              <div>
                <p>
                  <Link href={"#"} className="font-bold hover:underline">
                    {username}
                  </Link>{" "}
                  Shared a{" "}
                  <Link
                    href={"#"}
                    className="text-socialBlue font-semibold hover:underline"
                  >
                    Content
                  </Link>
                </p>
                <p className="text-gray-500 text-sm">{items?.created_at}</p>
              </div>
              <ToggleButton />
            </div>
          </div>
          <div className="content-wrapper space-y-3">
            <p className="text-sm my-3">{items.content}</p>
            <div className="rounded-md overflow-hidden bg-slate-200">
              <img className="object-cover" src={items?.image} loading="lazy" />
            </div>
          </div>

          <div className="mt-5">
            <CommentCard comments={items?.post_comments} />
          </div>
          <div className="flex mt-4 gap-3 items-center">
            <div>
              <Avatar imageUrl={ProfileImage} alt={"User"} />
            </div>
            <div className="border grow rounded-full">
              <textarea
                className="px-4 p-3 h-12 rounded-full block w-full overflow-hidden"
                placeholder="Leave a Comment"
              />
            </div>
          </div>
        </Card>
      ))}
    </Fragment>
  );
};

export default ContentCardDetail;
