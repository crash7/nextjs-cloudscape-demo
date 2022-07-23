import { useEffect, useState } from "react";

function NoSSR({ children }: { children: JSX.Element }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return isLoading ? null : children;
}

export default NoSSR;
