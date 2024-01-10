import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="px-5 tablet:px-8 desktop:px-24">{children}</div>;
};

export default Container;
