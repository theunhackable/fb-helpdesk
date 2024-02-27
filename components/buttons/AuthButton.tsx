import React from "react";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
type AuthButtonProps = {
    disabled: boolean,
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>,
    loading: boolean,
    text: string
}
const AuthButton = ({ text, disabled, handleSubmit, loading  }: AuthButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onClick={handleSubmit}
      className=" flex gap-1 hover:bg-primary-accent/90 active:bg-primary-accent hover:disabled:cursor-not-allowed bg-primary-accent"
    >
      {loading && <Loader className=" animate-spin" size={16} />}
      {text}
    </Button>
  );
};

export default AuthButton;
