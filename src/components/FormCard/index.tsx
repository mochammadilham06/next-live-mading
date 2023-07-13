import Card from "@live-component/Card";
import React, { Fragment } from "react";
import "./post.css";
import Avatar from "@live-component/Avatar";
import { ImageIcon, ProfileImage } from "@live-config/images";

const FormCard = () => {
  return (
    <Fragment>
      <Card>
        <div className="flex gap-1">
          <Avatar imageUrl={ProfileImage} alt={"User"} isSize="md" />
          <textarea
            className="grow p-3 h-20"
            placeholder={"Whats on your ming, Daw?"}
          />
        </div>
        <div className="flex gap-5 items-center mt-3 ml-10">
          <div>
            <button className="flex gap-1 font-medium">
              <span className="text-green-600">
                <ImageIcon />
              </span>
              Foto
            </button>
          </div>

          <div className="grow text-right">
            <button className="bg-socialBlue text-white px-6 py-1 rounded-md">
              Share
            </button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default FormCard;
