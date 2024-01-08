import { LogOut } from "lucide-react";
import { useAuth } from "../hooks";

export default function Home() {
  const {logout} = useAuth()
	return (
		<>
			<nav className="flex justify-between items-center px-4 py-6 shadow-md">
				<a
					href="/"
					className="text-lg font-semibold"
				>
					Test
				</a>

				<button onClick={logout} className="inline-flex items-center font-semibold text-sm gap-2 px-2 py-1 text-red-500 hover:bg-red-100 rounded-md ">
					<LogOut size="1.2em" />
					Chiqish
				</button>
			</nav>
			<div>
				<h1 className="text-5xl font-black text-center py-4">Test </h1>
			</div>
		</>
	);
}
