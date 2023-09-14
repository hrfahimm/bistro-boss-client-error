import UseAuth from "./UseAuth";

const UseAdmin = () => {
  const { user } = UseAuth();
  return user;
};

export default UseAdmin;
