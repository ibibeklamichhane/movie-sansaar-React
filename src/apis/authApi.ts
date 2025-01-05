import axiosInstance from "./axiosInstance";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  LoginResponse,
  LoginCredentials,
  RegisterResponse,
  RegisterCredentials,
} from "../Interface/AuthInterfaces";


export const loginApi = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post<LoginResponse>(
    "/auth/login",
    credentials
  );
  return data;
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation(loginApi, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      if (data.userId) {
        localStorage.setItem("userId", data.userId);
      }
      navigate("/movie");
    },
    onError: () => {
  
    },
  });
};

export const registerApi = async (
  user: RegisterCredentials
): Promise<RegisterResponse> => {
  const { data } = await axiosInstance.post<RegisterResponse>(
    "/auth/signup",
    user
  );
  return data;
};

export const useRegister = () => {
  const navigate = useNavigate()

  return useMutation(registerApi, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/movie");
    },
    onError: () => {;
    },
  });
};