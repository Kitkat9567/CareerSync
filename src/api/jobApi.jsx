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
    const response = await axiosInstance.post(
      `/login/loginUser?type=${account}`,
      payload,
    );
    return response.status
  } catch (error) {
    throw error;
  }
};

export const register = async(account, payload) => {
  try {
    const response = await axiosInstance.post(`/register/reg?type=${account}`,payload)
    return response.status
  } catch (error) {
    throw error
  }
}