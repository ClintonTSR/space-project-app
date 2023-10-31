import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { useMemo } from "react";
import router from "./router";

function App() {


  const queryClient = useMemo(
      () =>
          new QueryClient({
            defaultOptions: {
              queries: {
                useErrorBoundary: true,
                refetchOnWindowFocus: true,
                // 10 minutes until data is considered stale
                staleTime: 10 * 60 * 1000,
                // 10 minutes cache time
                cacheTime: 10 * 60 * 1000,
              },
            },
          }),
      [],
  );
  return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            <RouterProvider router={router}/>
          </QueryErrorResetBoundary>
        </QueryClientProvider>
      </div>
  );
}

export default App;
