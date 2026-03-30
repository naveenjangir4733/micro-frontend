import { lazy, Suspense } from "react";

const Profile = lazy(() => import("profile/Profile"));
const Blog = lazy(() => import("./BlogRemote"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Profile />
      <Blog />
    </Suspense>
  );
}

export default App;
