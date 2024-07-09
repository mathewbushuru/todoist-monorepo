export interface UserType {
  id: number;
  email: string;
  hashedPassword: string;
  fullName: string;
  usageMode: 0 | 1 | 2;
  teamAccount: boolean;
  createdAt: string;
  updatedAt: string;
}

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
