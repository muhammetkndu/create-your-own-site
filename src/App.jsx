import { useState } from "react"
import Button from "./button"
import { AppProvider } from "./ContextProvider";
import Modal from "./modal";
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppProvider>
    <>
      <div>
        <Button 
        onClick={() => setModalOpen(true)}
        className="bg-green-400 hover:bg-yellow-400">
          Site Yap
        </Button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </>
  </AppProvider>  
  )
}

export default App
