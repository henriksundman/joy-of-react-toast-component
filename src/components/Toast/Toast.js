import React from 'react';
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ children, id, message, variant }) {
	const { handleRemoveToast } = React.useContext(ToastContext);

	const IconTag = ICONS_BY_VARIANT[variant];

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<IconTag size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{variant}</VisuallyHidden>
				{children}
			</p>
			<button
				className={styles.closeButton}
				aria-label="Dismiss message"
				aria-live="off"
				onClick={() => {
					handleRemoveToast(id);
				}}
			>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
