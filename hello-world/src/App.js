import React, { Component } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

class App extends Component {
  render() {
    return(
    <div className="App">
          <UserProvider value="Aldo Change">
            <ComponentC />
          </UserProvider>
       
          {/*<Greet />
          <Welcome />*/}
        {/*
           <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> 

        <CounterTwo> 
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
         <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? 'Aldo Function' : 'Guest'} />
          <ClickCounter name="Aldo"/>
        <HoverCounter />
          <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary>
          <PortalDemo />
          <ForwardingRefParentInput />
          <FocusInput />
           <RefsDemo />
          <ParentComp />
          <Table />
          <FragmentDemo />
           <LifecycleA />
          <Form/>
          <h1 className='error'>Error</h1>
        <h1 className={styles.success} >Success</h1>
          <Inline />
          <Stylesheet primary={true}/>
          <NameList />
          <UserGreeting />
          <ParentComponent />
          <EventBinding />
                  <Greet name="Kevin"  heroName="Wonder Woman"/>
        <Counter />
        <Welcome name="Aldo" heroName="Superman"/>
        <FunctionClick />
        <ClassClick />
          <Hello/>
          <Message />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Aldo" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Kevin"  heroName="Wonder Woman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Aldo" heroName="Superman"/>
        <Welcome name="Kevin"  heroName="Wonder Woman"/>*/}
    </div>
    )
  }
}

export default App;
