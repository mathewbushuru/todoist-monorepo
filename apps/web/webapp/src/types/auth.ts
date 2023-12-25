export type User = {
  id: number;
  email: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
  createdAt: string;
  updatedAt: string;
};

export type SignupRequestType = {
  email: string;
  password: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type LoginSuccessResponseType = {
  message: string;
  jwtToken: string;
  id: number;
  email: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
  createdAt: string;
  updatedAt: string;
};

export type ServerErrorResponseType = {
  errorMessage: string;
};
