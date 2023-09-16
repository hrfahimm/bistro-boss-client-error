import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./UseAuxiosSecure";

const UseAdmin = () => {
  const { user } = UseAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log("is admin response ", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
