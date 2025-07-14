import { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom";
import Button from "./button"
import { AppProvider } from "./ContextProvider";
import Modal from "./modal";
import PrewievPage from "./PrewievPage";
import LoadingScreen from "./LoadingScreen";
import { ROUTES } from "./constants";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppProvider>
      <HashRouter>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        <Routes>
          <Route path={ROUTES.HOME} element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
                  Site Builder
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 px-4">
                  Kendi sitenizi kolayca oluşturun
                </p>
                <Button
                  onClick={() => setModalOpen(true)}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  Site Yap
                </Button>
              </div>
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onLoadingStart={() => setIsLoading(true)}
              />
            </div>
          } />
          <Route path={ROUTES.PREVIEW} element={<PrewievPage />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  )
}

export default App
