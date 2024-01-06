import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="xl:px-24">{children}</div>;
};

export default Container;
