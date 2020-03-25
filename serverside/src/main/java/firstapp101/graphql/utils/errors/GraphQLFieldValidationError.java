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
package firstapp101.graphql.utils.errors;

import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;
import javax.validation.ConstraintViolation;
import java.util.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Field Validation Exception in the Graphql
 * Throw when catch constraintViolationException from the validation
 * Follow the format in api standard
 * @author Codebots
 */
public class GraphQLFieldValidationError implements GraphQLError {

	private ConstraintViolation<?> constraintViolation;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end\

	@Override
	public String getMessage() {
		return constraintViolation.getMessage();
	}

	@Override
	public List<SourceLocation> getLocations() {
		return null;
	}

	@Override
	public ErrorType getErrorType() {
		return ErrorType.ValidationError;
	}

	@Override
	public List<Object> getPath() {
		return null;
	}

	@Override
	public Map<String, Object> toSpecification() {
		return null;
	}

	@Override
	public Map<String, Object> getExtensions() {
		Map<String, Object> extensions = new HashMap<>();
		extensions.put("statusCode", 422);
		extensions.put("fieldName", constraintViolation.getPropertyPath().toString());
		return extensions;
	}

	public GraphQLFieldValidationError(ConstraintViolation constraintViolation) {
		this.constraintViolation = constraintViolation;
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}