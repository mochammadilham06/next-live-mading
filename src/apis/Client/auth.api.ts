import axiosInstance from "@live-config/axiosInstance";

const APIAuth = {
  async Login(data: any) {
    try {
      const res = await axiosInstance.get("/auth/login", data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async Register(data: any) {
    try {
      const res = await axiosInstance.post("/auth/register", data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIAuth;
