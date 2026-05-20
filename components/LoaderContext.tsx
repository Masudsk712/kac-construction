"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

interface LoaderContextValue {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoaderContext = createContext<LoaderContextValue | null>(null);

export function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] =
    useState<boolean>(true);

  return (
    <LoaderContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader(): LoaderContextValue {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used within LoaderProvider");
  return ctx;
}