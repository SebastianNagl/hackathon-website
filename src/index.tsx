import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './routes/Home';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
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
import {RecapOverview} from './routes/recap/RecapOverview';
import Recap2026 from './routes/recap/Recap2026';
import {Recap2026Event} from './routes/recap/Recap2026Event';
import {Recap2026Team} from './routes/recap/Recap2026Team';
import {Recap2026Challenges} from './routes/recap/Recap2026Challenges';
import {Recap2026Jury} from './routes/recap/Recap2026Jury';
import {Recap2026Sieger} from './routes/recap/Recap2026Sieger';
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

          {/* Recap – parent page with per-year editions as subpages */}
          <Route path={'/recap'} element={<RecapOverview />} />
          <Route path={'/recap/2023'} element={<Recap2023 />} />
          <Route path={'/recap/2023/team'} element={<Team2023 />} />
          <Route path={'/recap/2023/jury'} element={<Jury />} />
          <Route path={'/recap/2023/event'} element={<RecapEvent />} />
          <Route path={'/recap/2026'} element={<Recap2026 />} />
          <Route path={'/recap/2026/event'} element={<Recap2026Event />} />
          <Route path={'/recap/2026/team'} element={<Recap2026Team />} />
          <Route path={'/recap/2026/challenges'} element={<Recap2026Challenges />} />
          <Route path={'/recap/2026/jury'} element={<Recap2026Jury />} />
          <Route path={'/recap/2026/sieger'} element={<Recap2026Sieger />} />

          {/* Legacy /result paths → redirect to the 2023 recap */}
          <Route path={'/result'} element={<Navigate to={'/recap/2023'} replace />} />
          <Route path={'/result/team'} element={<Navigate to={'/recap/2023/team'} replace />} />
          <Route path={'/result/jury'} element={<Navigate to={'/recap/2023/jury'} replace />} />
          <Route path={'/result/event'} element={<Navigate to={'/recap/2023/event'} replace />} />

          <Route path={'/join'} element={<Join />} />
          <Route path={'/impressum'} element={<Imprint />} />
          <Route path={'/datenschutz'} element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);
