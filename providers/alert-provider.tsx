"use client";
import { FBAlertProps } from "@/components/alerts/Alert";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AlertContextType {
  alert: FBAlertProps | null;
  setAlert: Dispatch<SetStateAction<FBAlertProps | null>>;
}

export const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<FBAlertProps | null>(null);
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
