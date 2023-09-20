import { AppRoutes } from "./AppRoutes";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { QueryClient, QueryClientProvider } from "react-query";
/**
 *
 */
import { worker } from "./server/mock";
worker.start({
  onUnhandledRequest: "bypass",
});

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <AppHeader />

        <div className="container">
          <AppRoutes />
        </div>
      </div>
    </QueryClientProvider>
  );
}
