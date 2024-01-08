import { useState } from "react";
import { Input } from "../ui/input";
import { useAuth, useAuthRedirect } from "../hooks";
import { useNavigate } from "react-router-dom";
import { submitHandler } from "../utils";

export default function Login() {
	const [hasError, setHasError] = useState(false);
	const { login } = useAuth();
	const navigate = useNavigate();

	const onSubmit = (data: { password: string }) => {
		const successful = login(data.password);
		if (successful) {
			navigate("/", {
				replace: true,
			});
		}
		setHasError(true);
	};

	useAuthRedirect();
	console.count('Render')
	return (
		<div className="grid place-items-center h-screen">
			<form
				onSubmit={submitHandler(onSubmit)}
				className="flex flex-col gap-2 border border-black/10 rounded-md max-w-sm w-full shadow-sm p-4"
			>
				<h2 className="text-2xl font-semibold">Tizimga kirish</h2>
				<Input
					label="Parol"
					name="password"
					type='password'
					wrapperClassName="gap-2"
					required
					min={4}
					isError={hasError}
					errorMessage="Password wrong"
					placeholder="****"
				/>
				<button className="bg-teal-500 text-white py-2 rounded-md">
					Kirish
				</button>
			</form>
		</div>
	);
}

