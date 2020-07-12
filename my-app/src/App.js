import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import HookCounterReducer from "./components/HookCounterReducer";
import HookCounterTwoReducer from "./components/CounterTwoReducer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/*<HookCounterFour />*/}
      {/*<ClassCounterTwo />*/}
      {/*<ClassCounter />*/}
      {/*<HookCounterTwo />*/}
      {/*<HookCounterThree />*/}
      {/* <DataFeching /> */}
      {/* <MouseContainer /> */}
      {/* <ChannelContext.Provider value={"Aldo"}>
        <UserContext.Provider value={"Vishwas"}>
          <ComponentC />
        </UserContext.Provider>
      </ChannelContext.Provider> */}

      {/* <HookCounterReducer /> */}
      <HookCounterTwoReducer />
    </div>
  );
}

export default App;
