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
  async postComment(request: any) {
    try {
      const { data } = await axiosInstance.post("/comments", request);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIComment;
