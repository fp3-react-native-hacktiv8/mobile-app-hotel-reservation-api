import { useSelector } from "react-redux";

const dummyEmail = "hacktiv8@gmail.com";
const dummyPassword = "hacktiv8123";

export default useAuth = () => {
  const handleLogin = (email, password) => {
    return dummyEmail === email && dummyPassword === password;
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return {
    handleLogin,
    isAuthenticated,
  };
};
