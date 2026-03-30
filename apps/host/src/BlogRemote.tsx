import { useEffect, useRef } from "react";

type BlogRemoteModule = {
  mount?: (container: Element) => void;
  unmount?: () => void;
  default?: {
    mount?: (container: Element) => void;
    unmount?: () => void;
  };
};

export default function BlogRemote() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    async function loadRemote() {
      const remote = (await import("blog/Blog")) as BlogRemoteModule;
      const blogModule =
        typeof remote.mount === "function" ? remote : remote.default;

      if (!containerRef.current) {
        return;
      }

      if (typeof blogModule?.mount !== "function") {
        throw new TypeError("Blog remote did not expose a mount function.");
      }

      blogModule.mount(containerRef.current);
      cleanup = blogModule.unmount;
    }

    void loadRemote();

    return () => {
      cleanup?.();
    };
  }, []);

  return <div ref={containerRef} />;
}
