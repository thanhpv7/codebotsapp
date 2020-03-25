/*
 * @bot-written
 * 
 * WARNING AND NOTICE
 * Any access, download, storage, and/or use of this source code is subject to the terms and conditions of the
 * Full Software Licence as accepted by you before being granted access to this source code and other materials,
 * the terms of which can be accessed on the Codebots website at https://codebots.com/full-software-licence. Any
 * commercial use in contravention of the terms of the Full Software Licence may be pursued by Codebots through
 * licence termination and further legal action, and be required to indemnify Codebots for any loss or damage,
 * including interest and costs. You are deemed to have accepted the terms of the Full Software Licence on any
 * access, download, storage, and/or use of this source code.
 * 
 * BOT WARNING
 * This file is bot-written.
 * Any changes out side of "protected regions" will be lost next time the bot makes any changes.
 */

import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Check if the password and the confirm password are the same.
 */
export const passwordVerifyTest = (pwdControlName: string = 'password') => {
	return (control: AbstractControl): ValidationErrors | null => {
		// % protected region % [Customise confirm password verification here] off begin
		const verifyPassword = control.value;
		if (verifyPassword) {
			const newPassword = control.root.get(pwdControlName).value;

			if (verifyPassword !== newPassword) {
				return {
					confirmPassword: true
				};
			}
		}

		return null;
		// % protected region % [Customise confirm password verification here] end
	};
};

/**
 * The Service provides the functions for the validation
 * @package lib.service.validation.validation service
 */
export class ValidationService {

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	/**
	 * Error message for invalid email validator in angular
	 */
	static emailErrorMessage(errorValue, entity) {
		// % protected region % [Customise your error message for the invalid email] off begin
		return `${entity} is invalid`;
		// % protected region % [Customise your error message for the invalid email] end
	}

	/**
	 * Error message for required validator in angular
	 */
	static requiredErrorMessage(errorValue, entity) {
		// % protected region % [Customise your error message for the required] off begin
		return `${entity} is required`;
		// % protected region % [Customise your error message for the required] end
	}

	/**
	 * Error message for minLength validator in angular
	 */
	static minlengthErrorMessage(errorValue, entity) {
		// % protected region % [Customise your error message for the minlength] off begin
		return `Length should longer than ${errorValue.requiredLength}`;
		// % protected region % [Customise your error message for the minlength] end
	}

	/**
	 * Error message for maxLength validator in angular
	 */
	static maxlengthErrorMessage(errorValue, entity) {
		// % protected region % [Customise your error message for the maxlength] off begin
		return `Length should shorter than ${errorValue.requiredLength}`;
		// % protected region % [Customise your error message for the maxlength] end
	}

	/**
	 * Validation message to show on min validation failure
	 *
	 * @param errorValue The values involved, i.e contains values for `actual` and `min`.
	 * @param entity The name of the field that this is being triggered on
	 */
	static minErrorMessage(errorValue, entity) {
		// % protected region % [Customise your error message for the min validator] off begin
		return `${entity} must be greater than ${errorValue.min}`;
		// % protected region % [Customise your error message for the min validator] end
	}

	/**
	 * Validation message to show on max validation failure
	 *
	 * @param errorValue The values involved, i.e contains values for `actual` and `max`.
	 * @param entity The name of the field that this is being triggered on
	 */
	static maxErrorMessage(errorValue, entity) {
		// % protected region % [Customise your error message for the max validator] off begin
		return `${entity} must be less than ${errorValue.max}`;
		// % protected region % [Customise your error message for the max validator] end
	}

	/**
	 * Validation message to show on confirm password validation failure.
	 */
	static confirmPasswordErrorMessage() {
		// % protected region % [Customise your error message for the confirm password validator] off begin
		return 'Password and confirm password do not match!';
		// % protected region % [Customise your error message for the confirm password validator] end
	}

	/**
	 * Error message for not defined validators
	 */
	static defaultErrorMessage() {
		// % protected region % [Customise your error message for the validation errors not defined] off begin
		return `field is invalid`;
		// % protected region % [Customise your error message for the validation errors not defined] end
	}

	// % protected region % [Add any additional error message here here] off begin
	// % protected region % [Add any additional error message here here] end

	/**
	 * Map the angular validation error to error message
	 */
	static matchErrorMessage(errorType: string, errorValue, entityName: string) {
		// % protected region % [Add any additional logic for matchErrorMessage before the main body here] off begin
		// % protected region % [Add any additional logic for matchErrorMessage before the main body here] end

		if (this[`${errorType}ErrorMessage`]) {
			// % protected region % [Customise logic for known error types here] off begin
			return this[`${errorType}ErrorMessage`](errorValue, entityName);
			// % protected region % [Customise logic for known error types here] end
		} else {
			// % protected region % [Customise logic for unknown error types here] off begin
			return this.defaultErrorMessage();
			// % protected region % [Customise logic for unknown error types here] end
		}
	}

	// % protected region % [Add any additional functions here] off begin
	// % protected region % [Add any additional functions here] end
}

