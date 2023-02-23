import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const { handleAddToast, setMessage, setVariant, message, variant } =
		React.useContext(ToastContext);

	return (
		<form className={styles.wrapper} onSubmit={handleAddToast}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					{VARIANT_OPTIONS.map((option) => (
						<div key={option}>
							<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
								<label htmlFor={`variant-${option}`}>
									<input
										id={`variant-${option}`}
										checked={option === variant}
										type="radio"
										name="variant"
										value={option}
										onChange={() => setVariant(option)}
									/>
									{option}
								</label>
							</div>
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default ToastPlayground;
