"use client";
import { useEffect, useState } from "react";

const getHash = () => (typeof window !== "undefined" ? decodeURIComponent(window.location.hash.replace("#", "")) : undefined);

function useHash() {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash()?.replaceAll("#", ""));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
}

export default useHash;
