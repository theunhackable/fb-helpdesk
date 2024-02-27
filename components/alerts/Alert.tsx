"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertContext } from "@/providers/alert-provider";
import { AlertCircle, AppWindow, CheckCircle } from "lucide-react";
import { ReactNode, useContext, useEffect, useState } from "react";

export type FBAlertProps = {
  header: string;
  desc: string;
  variant?: "default" | "success" | "destructive";
};

const FBAlert = () => {
  const getIcon = (variant: FBAlertProps['variant'] = "default") => {
    switch(variant) {
      
      case 'success': return <CheckCircle size={20} />
      case 'destructive': return <AlertCircle size={20} />
      case 'default': return <AppWindow size={20}/>
    }  
  };
  const { alert, setAlert } = useContext(AlertContext)!;
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  if (!alert) return null;
  return (
    <Alert
      className="z-50 bg-white fixed max-w-96 right-0 top-16 mx-5 "
      variant={alert.variant ? alert.variant : "default"}
    >
      {getIcon(alert.variant)}
      <AlertTitle>{alert.header}</AlertTitle>
      <AlertDescription>{alert.desc}</AlertDescription>
    </Alert>
  );
};

export default FBAlert;
