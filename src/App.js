import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth";
import LoadingSpinner from "./components/Shared/LoadingSpinner";

const SignInPage = lazy(() => import("./pages/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NewQuestionPage = lazy(() => import("./pages/NewQuestionPage"));
const LeaderBoardPage = lazy(() => import("./pages/LeaderBoardPage"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/add" element={<NewQuestionPage />} />
              <Route path="/leaderboard" element={<LeaderBoardPage />} />
              <Route path="/questions/:questionId" element={<QuestionPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
