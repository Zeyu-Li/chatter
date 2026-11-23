import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import './App.css'
import { useAuth } from './Firebase/Firebase'
import {FormWrapper, Login, Register, ResetPassword} from './Forms/Forms'
import {ProtectedRoute, UnprotectedRoute} from './ProtectedRoute'
import Home from './Home/Home'
import Chat from './Chat/Chat'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      {/* logo */}
      {/* routes */}
    <Router basename="/">
      <Routes>
        {/* Home Path */}
        <Route path="/" element={
          <UnprotectedRoute isAuth={!!user}>
            <FormWrapper>
              <Login />
            </FormWrapper>
          </UnprotectedRoute>
        } />
        <Route path="/login/*" element={<Navigate to="/" replace />} />

        <Route path="/register/*" element={
          <UnprotectedRoute isAuth={!!user}>
            <FormWrapper>
              <Register />
            </FormWrapper>
          </UnprotectedRoute>
        } />
        <Route path="/password_reset/*" element={
          <UnprotectedRoute isAuth={!!user}>
            <FormWrapper>
              <ResetPassword />
            </FormWrapper>
          </UnprotectedRoute>
        } />
        <Route path="/home/*" element={
          <ProtectedRoute isAuth={!!user}>
            <FormWrapper>
              <Home />
            </FormWrapper>
          </ProtectedRoute>
        } />

        <Route path="/chat/*" element={
          <ProtectedRoute isAuth={!!user}>
            <Chat />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
