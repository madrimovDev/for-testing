import { PropsWithChildren, createContext, useCallback, useState } from "react";

interface IAuthContext {
	isAuth: boolean;
	login: (password: string) => boolean;
	logout: VoidFunction;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const $password = import.meta.env.VITE_APP_PASSWORD;

export default function AuthProvider(props: PropsWithChildren) {
	const [isAuth, setIsAuth] = useState(false);
	const login = useCallback((password: string) => {
		if (password === $password) {
      setIsAuth(true);
      return true
    }
    return false
	}, []);

	const logout = useCallback(() => setIsAuth(false), []);
	const value: IAuthContext = { login, logout, isAuth };

	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
}

