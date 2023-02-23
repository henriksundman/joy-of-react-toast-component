import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
	const { toastStack, setToastStack } = React.useContext(ToastContext);

	useEscapeKey(function removeAllToasts() {
		setToastStack([]);
	});

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="assertive"
			aria-label="Notification"
		>
			{toastStack.map(({ id, message, variant }) => (
				<li className={styles.toastWrapper} key={id}>
					<Toast id={id} message={message} variant={variant}>
						{message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
