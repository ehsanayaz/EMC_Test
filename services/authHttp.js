import axios from "axios";

export const postLoginInfo = async (userInfo) => {
  const { data } = await axios.post("/api/auth/login", userInfo);
  return data;
};

export const postLogoutReq = async () => {
  return await axios.get("/api/auth/logout");
};

export const postRegisterInfo = async (userInfo) => {
  return await axios.post("/api/auth/register", userInfo);
};

export const getCurrentServerSession = async (token) => {
  try {
    const { data: userInfo } = await axios.get(
      `${process.env.NEXT_INTERNAL_URL}/api/auth/session?token=${token}`
    );

    return { token, userInfo };
  } catch (error) {
  
  }
};
