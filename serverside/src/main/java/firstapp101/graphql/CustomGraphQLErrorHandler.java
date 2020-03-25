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
package firstapp101.graphql;

import firstapp101.graphql.utils.errors.*;
import graphql.ExceptionWhileDataFetching;
import graphql.GraphQLError;
import graphql.servlet.GraphQLErrorHandler;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.persistence.RollbackException;
import javax.validation.ConstraintViolationException;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Custom error handler for the GraphQLError in Springbot
 * Map the Native GraphQLError to the Exception in API Standard
 */
@Component
public class CustomGraphQLErrorHandler implements GraphQLErrorHandler {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Override
	public List<GraphQLError> processErrors(List<GraphQLError> errors) {
		// % protected region % [Custom errors handler if needed] off begin
		return errors.stream()
				.flatMap(this::handleException)
				.collect(Collectors.toList());
		// % protected region % [Custom errors handler if needed] end
	}

	@Override
	public boolean errorsPresent(List<GraphQLError> errors) {
		return !errors.isEmpty();
	}

	/**
	 * Map the GraphQL error to custom Error
	 *
	 * @param exception GraphQLError
	 * @return Stream of GraphQLError
	 */
	private Stream<GraphQLError> handleException(GraphQLError exception) {
		if (exception instanceof ExceptionWhileDataFetching) {
			return this.handleDataFetchingError((ExceptionWhileDataFetching) exception);
		}

		// % protected region % [Handle other GraphQLError Here] off begin
		// % protected region % [Handle other GraphQLError Here] end

		return Stream.of(exception);
	}

	/**
	 * Handle the Data Fetching Error to satisfy the Standard
	 *
	 * @param error Default error thrown by GraphQL
	 * @return Stream Custom GraphQL Error or Native GraphQL Error
	 */
	private Stream<GraphQLError> handleDataFetchingError(ExceptionWhileDataFetching error) {
		final Throwable exception = error.getException();
		GraphQLError processedException = error;

		if (exception instanceof AccessDeniedException) {
			processedException = new GraphQLAuthorisationError();
		} else if (exception instanceof AuthenticationException) {
			processedException = new GraphQLAuthenticationError();
		} else if (exception instanceof NullPointerException) {
			processedException =  exception.getMessage() == null ? new GraphQLDataFetchingError() : new GraphQLDataFetchingError(exception.getMessage());
		} else if (error.getException() instanceof ConstraintViolationException) {
			return handleConstraintViolationException((ConstraintViolationException) error.getException());
		} else  if (exception instanceof RollbackException) {
			return handleRollbackException((RollbackException) exception);
		} else if (exception instanceof TransactionSystemException) {
			return handleTransactionSystemException((TransactionSystemException) exception);
		} else if (exception instanceof DataIntegrityViolationException) {
			processedException = handleDataIntegrationError((DataIntegrityViolationException) exception);
		}

		// % protected region % [Handle other Exception Here] off begin
		// % protected region % [Handle other Exception Here] end

		return Stream.of(processedException);
	}

	private Stream<GraphQLError> handleRollbackException(RollbackException rollbackException) {
		Throwable cause = rollbackException.getCause();
		if (cause instanceof ConstraintViolationException) {
			ConstraintViolationException validationException = (ConstraintViolationException) rollbackException.getCause();
			return handleConstraintViolationException(validationException);
		}
		return Stream.of(new GraphQLDataFetchingError());
	}

	private Stream<GraphQLError> handleTransactionSystemException(TransactionSystemException exception) {
		if (exception.getCause() instanceof  RollbackException) {
			return handleRollbackException((RollbackException) exception.getCause());
		}
		return Stream.of(new GraphQLDataFetchingError());
	}

	private Stream<GraphQLError> handleConstraintViolationException(ConstraintViolationException validationException) {
		return validationException
				.getConstraintViolations()
				.stream()
				.map(GraphQLFieldValidationError::new);
	}

	private GraphQLError handleDataIntegrationError(DataIntegrityViolationException dataIntegrityViolationException) {
		if (dataIntegrityViolationException.getCause() instanceof org.hibernate.exception.ConstraintViolationException) {
			return new GraphQLConstraintError(( org.hibernate.exception.ConstraintViolationException) dataIntegrityViolationException.getCause());
		}
		return new GraphQLDataFetchingError();
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
