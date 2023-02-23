import React from 'react';

export const ToastContext = React.createContext({
	message: '',
	variant: '',
	toastStack: [],
	setMessage: () => {},
	setVariant: () => {},
	handleRemoveToast: () => {},
	handleAddToast: () => {},
});

function ToastProvider({ children }) {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState('notice');
	const [toastStack, setToastStack] = React.useState([]);

	function handleAddToast(event) {
		event.preventDefault();
		const newToast = {
			id: crypto.randomUUID(),
			variant,
			message,
		};
		setToastStack((prevStack) => [...prevStack, newToast]);
		setMessage('');
		setVariant('notice');
	}

	function handleRemoveToast(id) {
		setToastStack((prevStack) => prevStack.filter((toast) => toast.id !== id));
	}

	const value = {
		message,
		variant,
		toastStack,
		setMessage,
		setVariant,
		handleAddToast,
		handleRemoveToast,
		setToastStack,
	};

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;
