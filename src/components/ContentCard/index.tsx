import React, { Fragment } from "react";
import Card from "@live-component/Card";
import { DummyProfile } from "@live-config/images";
import Link from "next/link";
import "./contentCard.css";
import ToggleButton from "@live-component/Toggle";
import { ContentInterface } from "src/interface/content";
import CommentCard from "@live-component/Comments";
import Image from "next/image";
import Avatar2 from "@live-component/Avatar/avatar2";

const ContentCard = ({ data, userData }: any) => {
  return (
    <Fragment>
      {data?.map((items: ContentInterface) => (
        <Card key={items?.id}>
          <div className="flex gap-3">
            <Link
              href={{
                pathname: `${
                  items?.post_user.id === userData?.id
                    ? `/home/profile/${items?.post_user.fullname}`
                    : `/home/others/profile/${items?.post_user.fullname}`
                }`,
                query: { id: items?.post_user.id },
              }}
              className="hover:cursor-pointer"
            >
              <Avatar2
                imageUrl={
                  items?.post_user.images
                    ? items.post_user.images
                    : DummyProfile
                }
                alt={"User"}
              />
            </Link>
            <div className="flex justify-between grow">
              <div>
                <p>
                  <Link
                    href={{
                      pathname: `${
                        items?.post_user.id === userData?.id
                          ? `/home/profile/${items?.post_user.fullname}`
                          : `/home/others/profile/${items?.post_user.fullname}`
                      }`,
                      query: { id: items?.post_user.id },
                    }}
                    className="font-bold hover:underline"
                  >
                    {items.post_user.fullname}
                  </Link>{" "}
                  Shared a{" "}
                  <Link
                    href={{
                      pathname: `${
                        items?.post_user.id === userData?.id
                          ? `/home/profile/${items?.post_user.fullname}`
                          : `/home/others/profile/${items?.post_user.fullname}`
                      }`,
                      query: { id: items?.post_user.id },
                    }}
                    className="text-socialBlue font-semibold hover:underline"
                  >
                    Content
                  </Link>
                </p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
              {userData?.id === items.post_user.id ? (
                <ToggleButton items={items} mode="normal" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="content-wrapper space-y-3">
            <p className="text-sm my-3">{items.content}</p>
            {items?.image ? (
              <div
                className="rounded-md overflow-hidden bg-slate-200"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                }}
              >
                <Image
                  alt="haha"
                  className="object-cover object-center absolute h-full w-full"
                  src={items?.image}
                  fill
                />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mt-5">
            {/* {children} */}
            <CommentCard
              comments={items?.post_comments}
              userData={userData}
              postid={items?.id}
            />
          </div>
        </Card>
      ))}
    </Fragment>
  );
};

export default ContentCard;
