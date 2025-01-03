import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{refetchOnWindowFocus:false},
    mutations:{}
  }
});

export default function TanStackProvider({children}:{children:React.ReactNode}){
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}