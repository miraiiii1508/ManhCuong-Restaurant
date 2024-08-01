import { Button } from "../../components/ui/button";

export function CustomButton({ className, ...props }) {
  return (
    <Button
      className={`py-6 px-8 2md:py-8 2md:px-14 border transition-all ${className}`}
      {...props}
    >
      {props.children}
    </Button>
  );
}
