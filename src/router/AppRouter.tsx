import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* JournalApp */}
        <Route path="/journal/*" element={<JournalRoutes />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
