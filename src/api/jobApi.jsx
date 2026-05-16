import axiosInstance from "./Axios";

export const getAllJobs = async (jobs, role) => {
  console.log("jobs", jobs);

  try {
    const response = await axiosInstance.get(`/jobs?skills=${jobs}&${role}`);
    return response.data;
  } catch (error) {
    console.log("err", error);
  }
};

export const login = async (account, payload) => {
  
  try {
    if (account === "employer") {
      const response = await axiosInstance.post("/login/loginCompany", payload);
      return response.data;
    }
    if (account === "candidate") {
      const response = await axiosInstance.post("/login/loginUser", payload);
      return response.data;
    }
    return "There was an error";
  } catch (error) {
    throw error;
  }
};
