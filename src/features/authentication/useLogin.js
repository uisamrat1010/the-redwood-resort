import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as LoginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      //console.log(user);
      queryClient.setQueryData(["user"], user.user);

      toast.success("Loggedin Successfully");
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      // console.log(err);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
