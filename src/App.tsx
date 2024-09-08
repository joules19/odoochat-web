import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './components/FormComponent'
import Landing from './screens/Landing'

const App: React.FC = () => {
  return (
    <div className="">
      <Landing />
      {/* <FormComponent /> */}
    </div>
  );
};

export default App
