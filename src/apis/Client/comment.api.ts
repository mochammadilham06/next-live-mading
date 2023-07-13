import axiosInstance from "@live-config/axiosInstance";

const APIComment = {
  async getComment() {
    try {
      const res = await axiosInstance.get("/comments", {
        data: {
          post_id: "id_disini",
        },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async postComment(data: any) {
    try {
      const res = await axiosInstance.post("/comments", data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIComment;
