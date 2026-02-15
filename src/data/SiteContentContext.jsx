import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultContent, loadContent, saveContent } from "./siteContent";

const SiteContentContext = createContext({
  content: defaultContent,
  setContent: () => {},
  resetContent: () => {},
});

export function SiteContentProvider({ children }) {
  const [content, setContentState] = useState(defaultContent);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const next = await loadContent();
      if (isMounted) {
        setContentState(next);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const setContent = (updater) => {
    setContentState((prev) => {
      const next =
        typeof updater === "function" ? updater(prev) : { ...prev, ...updater };
      saveContent(next);
      return next;
    });
  };

  const resetContent = () => {
    saveContent(defaultContent);
    setContentState(defaultContent);
  };

  const value = useMemo(
    () => ({ content, setContent, resetContent }),
    [content],
  );

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
