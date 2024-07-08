export interface SignupRequestType {
  email: string;
  password: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
}

export interface LoginRequestType {
  email: string;
  password: string;
}

export interface LoginSuccessResponseType {
  message: string;
  jwtToken: string;
  id: number;
  email: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
  createdAt: string;
  updatedAt: string;
}
