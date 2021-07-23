import logo from './logo.svg';
import './App.css';
import  {He1}  from './Components/firstComponent'
import ClassComp from './Components/ClassComp'
import UsingJsx from './Components/jsxComponent';
import PropsExample from './Components/PropsExample';
import StatesExample from './Components/StatesExample';
import Counter from './Components/Counter';
import Destructured from './Components/Destructuring';
import DestructuringInClass from './Components/DestructuringInClass';

function App() {
  return (
    <div className="App">
      <He1 />
      <ClassComp />
    
    <UsingJsx />
    <PropsExample name="john" />
    <PropsExample name="Smith" />
    <StatesExample />
    <Counter />
    <Destructured id="1" name='vishal' />
    <DestructuringInClass id1="2" name="praveen" />
    </div>
  );
}

export default App;
