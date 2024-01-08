import { useNavigate } from "react-router-dom";
import { useAuth } from ".";
import { useLayoutEffect } from "react";

export const useAuthRedirect = (path = "/") => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();

	useLayoutEffect(() => {
		if (isAuth) navigate(path, { replace: true });
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
