import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="desktop:px-24">{children}</div>;
};

export default Container;
