import axiosInstance from "@live-config/axiosInstance";

const APIContent = {
  async getContent() {
    try {
      const res = await axiosInstance.get("/content");
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async getContentById(user_id: string | null) {
    try {
      const { data } = await axiosInstance.get(`/content/${user_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async postContent(data: any) {
    try {
      const res = await axiosInstance.post("/content", data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async updateContent(id: string, data: any) {
    try {
      const res = await axiosInstance.put(`/content/${id}`, data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteContent(id: string) {
    try {
      const res = await axiosInstance.delete(`/content/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIContent;
