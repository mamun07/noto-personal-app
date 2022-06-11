import { Routes, Route } from 'react-router-dom';
import { SidebarNav } from './container';
import { HomePage, AboutMe, NotFound } from './pages';
import { MainApp, EntrySidebar, EntryContent } from './style';

function App() {
  return (
    <MainApp>
      <EntrySidebar>
        <SidebarNav />
      </EntrySidebar>
      <EntryContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </EntryContent>
    </MainApp>
  );
}

export default App;
