import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './routes/ProtectedRoute';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Publikus oldalak, amik a MainLayout-ot használják */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Védett oldalak */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;