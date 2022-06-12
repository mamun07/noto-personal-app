import { Routes, Route } from 'react-router-dom';
import { SidebarNav, HeaderTop } from './container';
import { HomePage, AboutMe, ContactMe, MySkill, MyCV, NotFound } from './pages';
import { MainApp, EntrySidebar, EntryContent } from './style';

function App() {
  return (
    <MainApp>
      <EntrySidebar>
        <SidebarNav />
      </EntrySidebar>
      <EntryContent>
        <HeaderTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/my-skill" element={<MySkill />} />
          <Route path="/my-cv" element={<MyCV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </EntryContent>
    </MainApp>
  );
}

export default App;
