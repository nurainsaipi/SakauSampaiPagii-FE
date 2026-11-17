import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { ProgressProvider } from './context/ProgressContext';

// Komponen Global
import Layout from './components/layout/Layout';
import AccessibilityPanel from './components/accessibility/AccessibilityPanel';
import GlobalAudioFeedback from './components/accessibility/GlobalAudioFeedback'; // <-- Fitur Suara Global

// Halaman Utama & Auth
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OnboardingPage from './pages/OnboardingPage';
import ChildDashboard from './pages/ChildDashboard';
import WorldsPage from './pages/WorldsPage';
import WorldDetailPage from './pages/WorldDetailPage';
import MissionPage from './pages/MissionPage';
import LearningHubPage from './pages/LearningHubPage';
import ActivityPage from './pages/ActivityPage';
import AiCompanionPage from './pages/AiCompanionPage';
import ProgressPage from './pages/ProgressPage';
import ParentDashboardPage from './pages/ParentDashboardPage';
import ProfilePage from './pages/ProfilePage';
import AccessibilityPage from './pages/AccessibilityPage';
import NotFoundPage from './pages/NotFoundPage';

// Halaman dengan Folder Khusus
import CalmCornerPage from './pages/SudutTenang/CalmCornerPage';
import VisualSchedulePage from './pages/JadwalVisual/VisualSchedulePage';

// Misi Khusus
import SchoolClassroomActivityPage from './components/missions/School-ClassroomActivityPage';

export default function App() {
  return (
    <AccessibilityProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <Routes>
              {/* --- RUTE TANPA NAVBAR GLOBAL (LAYOUT) --- */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              
              {/* Halaman Dunia (Home & School) & Misi */}
              <Route path="/worlds/:worldId" element={<WorldDetailPage />} />
              <Route path="/mission/:missionId" element={<MissionPage />} />
              <Route path="/lesson/classroom" element={<SchoolClassroomActivityPage />} />

              {/* Halaman Sudut Tenang (Pakai Header Sendiri) */}
              <Route path="/calm" element={<CalmCornerPage />} />

              {/* --- RUTE YANG PAKAI NAVBAR GLOBAL (LAYOUT) --- */}
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<ChildDashboard />} />
                <Route path="/worlds" element={<WorldsPage />} />
                <Route path="/learning" element={<LearningHubPage />} />
                <Route path="/learning/:activityId" element={<ActivityPage />} />
                <Route path="/ai-companion" element={<AiCompanionPage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                
                {/* Jadwal Visual pakai Navbar Global */}
                <Route path="/schedule" element={<VisualSchedulePage />} /> 
                
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            
            {/* Fitur Global yang selalu aktif di seluruh halaman */}
            <AccessibilityPanel />
            <GlobalAudioFeedback /> 
            
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </AccessibilityProvider>
  );
}