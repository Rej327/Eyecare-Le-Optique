/** @format */

import style from "../styles/globalButton.module.scss";

interface ButtonProps {
	text: string;
	className: string;
}

export default function Button({ text, className }: ButtonProps) {
	return <button className={`${className}`}>{text}</button>;
}
