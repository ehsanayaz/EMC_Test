import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useReroute = (partialState, effect, route, opposite = false) => {
  const router = useRouter();
  const value = useSelector((state) => state[partialState][effect]);

  useEffect(() => {
    if ((!opposite && value) || (opposite && !value)) router.push(route);
  }, [value]);
};

export default useReroute;
