import { ReactNode } from "react";

type componentType = {
  children?: ReactNode;
};

function ComponentB({ children }: componentType) {
  return (
    <div>
      Component b
      {children}
    </div>
  );
}
export { ComponentB };
