import { Routes, Route } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ContactPage from '@/pages/ContactPage'
import LinksPage from '@/pages/LinksPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar global */}
      <Navigation />

      {/* Conteúdo que muda por rota */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </main>

      {/* Footer global */}
      <Footer />

      {/* Toast global */}
      <Toaster />
    </div>
  )
}

