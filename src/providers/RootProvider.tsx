import AuthProvider from "./AuthProvider";
import Router from "./router/Router";

export default function RootProvider() {
  return <>
    <AuthProvider>
      <Router/>
    </AuthProvider>
  </>
}