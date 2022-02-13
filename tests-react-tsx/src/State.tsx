import React from "react";

type MyProps = {
  // using `interface` is also ok
  clock: number;
  cup: string;
};
type MyState = {
  cup: string; // like this
};

class State extends React.Component<MyProps, MyState> {


  initState: MyProps = {
    clock: 1000,
    cup: "warter",
  };

  state: MyState = {
    // optional second annotation for better type inference
    cup: "juise",
  };
  render() {
    return (
      <div>
        {this.initState.cup} {this.state.cup}
      </div>
    );
  }
}
export { State };
