import React from "react";
import { useNavigate, useRouter as useTanStackRouter, useParams as useTanStackParams } from "@tanstack/react-router";

export function useRouter() {
  const navigate = useNavigate();

  return React.useMemo(
    () => ({
      push: (href: string) => {
        navigate({ to: href });
      },
      replace: (href: string) => {
        navigate({ to: href, replace: true });
      },
      back: () => {
        window.history.back();
      },
      forward: () => {
        window.history.forward();
      },
      refresh: () => {
        window.location.reload();
      },
    }),
    [navigate]
  );
}

export function useSearchParams() {
  // Use window.location.search to ensure client searchParams can be read
  return React.useMemo(() => {
    if (typeof window === "undefined") {
      return new URLSearchParams();
    }
    return new URLSearchParams(window.location.search);
  }, []);
}

export function usePathname() {
  const [pathname, setPathname] = React.useState(() =>
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  React.useEffect(() => {
    const handlePop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return pathname;
}

export function useParams<T = Record<string, string>>(): T {
  try {
    return useTanStackParams({ strict: false }) as T;
  } catch {
    return {} as T;
  }
}

export function notFound() {
  throw new Error("Page not found");
}

export default {
  useRouter,
  useSearchParams,
  usePathname,
  useParams,
  notFound,
};
