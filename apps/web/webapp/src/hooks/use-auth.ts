import { useMemo } from "react";

import { useAppSelector } from "@/store/store";

const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const currentToken = useAppSelector((state) => state.auth.token);

  return useMemo(
    () => ({
      user,
      currentToken,
    }),
    [user, currentToken],
  );
};

export default useAuth;