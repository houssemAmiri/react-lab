import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UseEffectProblemsPage from './pages/useEffectProblems';
import CodeSplittingPage from './pages/codeSplitting';
import HomePage from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: 'code-splitting',
    Component: CodeSplittingPage,
  },
  {
    path: 'useEffect-problems',
    Component: UseEffectProblemsPage,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
