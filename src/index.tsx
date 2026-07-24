import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './routes/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navigation} from './components/navigation/Navigation';
import {Abschlussveranstaltung} from './routes/Abschlussveranstaltung';
import {Event} from './routes/Event';
import {Imprint} from './routes/Imprint';
import {Join} from './routes/Join';
import {Jury} from './routes/Jury';
import {Jury2026} from './routes/Jury2026';
import {Privacy} from './routes/Privacy';
import Recap2023 from './routes/Recap2023';
import {RecapEvent} from './routes/RecapEvent';
import {Team} from './routes/Team';
import {Team2023} from './routes/Team2023';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/event'} element={<Event />} />
          <Route path={'/abschlussveranstaltung'} element={<Abschlussveranstaltung />} />
          <Route path={'/team'} element={<Team />} />
          <Route path={'/jury'} element={<Jury2026 />} />
          <Route path={'/result'} element={<Recap2023 />} />
          <Route path={'/result/team'} element={<Team2023 />} />
          <Route path={'/result/jury'} element={<Jury />} />
          <Route path={'/result/event'} element={<RecapEvent />} />
          <Route path={'/join'} element={<Join />} />
          <Route path={'/impressum'} element={<Imprint />} />
          <Route path={'/datenschutz'} element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);

