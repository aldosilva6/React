import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/*<HookCounterFour />*/}
     {/*<ClassCounterTwo />*/}
      {/*<ClassCounter />*/}
     {/*<HookCounterTwo />*/}
     {/*<HookCounterThree />
      <MouseContainer />
    */}
    <ChannelContext.Provider value={'Aldo'}>
        <UserContext.Provider value={'Vishwas'}>
          <ComponentC />
        </UserContext.Provider>     
    </ChannelContext.Provider>
    </div>
  );
}

export default App;
