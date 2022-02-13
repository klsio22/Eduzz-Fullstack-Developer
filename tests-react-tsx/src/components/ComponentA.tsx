import { ReactNode } from "react";

type componentType = {
  children?: ReactNode;
};

function ComponentA({ children }: componentType) {
  return (
    <h1>
     Component a
      {children}
    </h1>
  );
}
export { ComponentA };
