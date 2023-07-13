import axiosInstance from "@live-config/axiosInstance";

const APIAdmin = {
  async UpdateValidation(data: any) {
    const { id } = data;
    try {
      const res = await axiosInstance.put(`/post/${id}`, data);
      return res;
    } catch (error) {}
  },
  async UpdateUser(data: any) {
    const { id } = data;
    try {
      const res = await axiosInstance.put(`/cms/user/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async DeleteUser(id: any) {
    try {
      const res = await axiosInstance.delete(`/cms/user/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
