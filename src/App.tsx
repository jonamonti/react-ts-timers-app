import { useRef } from "react";
import Button from "./components/UI/Button.tsx";
import Card from "./components/UI/Card.tsx";
import Container from "./components/UI/Container.tsx";
import Input from "./components/UI/Input.tsx";
import Form, { FormHandler } from "./components/UI/Form.tsx";
import Header from "./components/Header.tsx";
import AddTimer from "./components/AddTimer.tsx";
import Timers from "./components/Timers.tsx";
import TimersContextProvider from "./store/timers-context.tsx";
// import Input from "./components/Input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandler>(null)

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string, age: string }
    console.log(extractedData)
    customForm.current?.clear()
  }
  return (
    <TimersContextProvider> {/** we have to wrap with this provider all components that will need access to its info*/}
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>

    </TimersContextProvider>
  )
}

export default App;
