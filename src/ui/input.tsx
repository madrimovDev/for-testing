import classNames from "classnames";
import { Eye, EyeOff } from "lucide-react";
import {
	ForwardRefRenderFunction,
	HTMLAttributes,
	InputHTMLAttributes,
	forwardRef,
	useId,
	useState,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	isError?: boolean;
	errorMessage?: string;
	wrapperClassName?: HTMLAttributes<HTMLElement>["className"];
}

const InputRenderFunction: ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = (
	{ name, label, wrapperClassName, type, isError, errorMessage, ...props },
	ref
) => {
	const uid = useId();
	const [show, setShow] = useState(false);
	const isPass = type === "password";

	return (
		<div className={`flex flex-col ${wrapperClassName}`}>
			<label htmlFor={uid}>{label}</label>
			<div
				className={classNames(
					"flex border-2 border-black/30 focus-within:border-teal-500 rounded-md px-2 py-1",
					{
						"border-red-500": !!isError,
					}
				)}
			>
				<input
					id={uid}
					name={name}
					ref={ref}
					type={show ? "text" : type ? type : "text"}
					className={`flex-grow autofill:bg-white  outline-none mr-2 ${props.className}`}
					{...props}
				/>
				{isPass && (
					<button
						className="text-lg"
						type='button'
						role="button"
						onClick={() => setShow((prev) => !prev)}
					>
						{!show ? <Eye size="1em" /> : <EyeOff size="1em" />}
					</button>
				)}
			</div>
			{errorMessage && isError && (
				<span className="text-sm text-red-400 font-semibold">{errorMessage}</span>
			)}
		</div>
	);
};

export const Input = forwardRef(InputRenderFunction);

