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
package firstapp101.services.utils;

import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.*;
import org.apache.commons.lang3.EnumUtils;
import firstapp101.graphql.utils.QueryOperation;
import com.querydsl.core.types.dsl.Expressions;
import java.time.OffsetDateTime;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * This class provides the some come function to deal with the common query for different types
 */
public class QuerydslUtils {

	/**
	 * Get the default predicate for the string
	 *
	 * @param stringPath The string path, which is the generated field in the QEntity class
	 * @param value The value to compare with
	 * @param operation The type of the operation
	 * @return The default predicate. If not find available operation, return null
	 */
	static public Predicate getDefaultPredicate(StringPath stringPath, QueryOperation operation, String value) {
		// % protected region % [Add any additional logic here before the main logic of getDefaultPredicate here] off begin
		// % protected region % [Add any additional logic here before the main logic of getDefaultPredicate here] end

		switch (operation) {
			case in:
				return stringPath.in(value);
			case like:
				return stringPath.likeIgnoreCase(value);
			case equal:
				return stringPath.equalsIgnoreCase(value);
			case contains:
				return stringPath.containsIgnoreCase(value);
			// % protected region % [Add any additional cases here] off begin
			// % protected region % [Add any additional cases here] end
		}

		// % protected region % [Add any additional logic here after the main logic of getDefaultPredicate here] off begin
		// % protected region % [Add any additional logic here after the main logic of getDefaultPredicate here] end

		return null;
	}

	public static <T extends Comparable<?>> Predicate getDefaultPredicate(ComparablePath<T> comparable, QueryOperation operation, T value) {
		switch (operation) {
			case equal:
				return comparable.eq(value);
			case notEqual:
				return comparable.ne(value);
			case lessThan:
				return comparable.lt(value);
			case lessThanOrEqual:
				return comparable.loe(value);
			case greaterThan:
				return comparable.gt(value);
			case greaterThanOrEqual:
				return comparable.goe(value);
			default:
				return null;
		}
	}

	/**
	 * Get the default predicate for the Date
	 *
	 * @param datetimePath The date path, which is the generated field in the QEntity class
	 * @param value The date to compare with. In string format
	 * @param operation The type of the operation
	 * @return The default predicate. If not find available operation, return null
	 */
	static public Predicate getDefaultPredicate(DateTimePath<OffsetDateTime> datetimePath, QueryOperation operation, String value) {
		// % protected region % [Add any additional logic here before the main logic of getDefaultPredicate here] off begin
		// % protected region % [Add any additional logic here before the main logic of getDefaultPredicate here] end

		switch (operation) {
			case lessThan:
				// % protected region % [Add any additional logic here before the main logic of operation lessThan here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation lessThan here] end

				return datetimePath.before(OffsetDateTime.parse(value));
			case lessThanOrEqual:
				// % protected region % [Add any additional logic here before the main logic of operation lessThanOrEqual here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation lessThanOrEqual here] end

				return datetimePath.loe(OffsetDateTime.parse(value));
			case greaterThan:
				// % protected region % [Add any additional logic here before the main logic of operation greaterThan here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation greaterThan here] end

				return datetimePath.after(OffsetDateTime.parse(value));
			case greaterThanOrEqual:
				// % protected region % [Add any additional logic here before the main logic of operation greaterThanOrEqual here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation greaterThanOrEqual here] end

				return datetimePath.goe(OffsetDateTime.parse(value));
			case equal:
				// % protected region % [Add any additional logic here before the main logic of operation equal here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation equal here] end

				return datetimePath.eq(OffsetDateTime.parse(value));
			case notEqual:
				// % protected region % [Add any additional logic here before the main logic of operation not equal here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation not equal here] end

				return datetimePath.ne(OffsetDateTime.parse(value));
			// % protected region % [Add any additional cases here] off begin
			// % protected region % [Add any additional cases here] end
		}

		// % protected region % [Add any additional logic here after the main logic of getDefaultPredicate here] off begin
		// % protected region % [Add any additional logic here after the main logic of getDefaultPredicate here] end

		return null;
	}

	/**
	 * Get the default predicate for the Enum type
	 *
	 * @param enumPath The EnumPath
	 * @param enumType The Class of the enum
	 * @param operation The operation to be used
	 * @param value The value to compare with
	 * @param <E> The Type of the Enum
	 * @return The Predicate generated from the operation
	 */
	static public <E extends Enum<E>> Predicate getDefaultPredicate(EnumPath<E> enumPath, Class<E> enumType, QueryOperation operation, String value) {
		// % protected region % [Add any additional logic here before the main logic of getDefaultPredicate here] off begin
		// % protected region % [Add any additional logic here before the main logic of getDefaultPredicate here] end

		if (!EnumUtils.isValidEnum(enumType, value)) {
			return null;
		}

		// TODO add unit tests
		switch (operation) {
			case equal:
				// % protected region % [Add any additional logic here before the main logic of operation equal here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation equal here] end

				// When enum is not valid, equal to that value would always be false
				if (!EnumUtils.isValidEnum(enumType, value)) {
					return Expressions.asBoolean(false);
				}

				return enumPath.eq(Enum.valueOf(enumType, value));
			case notEqual:
				// % protected region % [Add any additional logic here before the main logic of operation not equal here] off begin
				// % protected region % [Add any additional logic here before the main logic of operation not equal here] end

				// When enum is not valid, not equal to that value would always be true
				if (!EnumUtils.isValidEnum(enumType, value)) {
					return Expressions.asBoolean(true);
				}

				return enumPath.ne(Enum.valueOf(enumType, value));
		}

		// % protected region % [Add any additional logic here after the main logic of getDefaultPredicate here] off begin
		// % protected region % [Add any additional logic here after the main logic of getDefaultPredicate here] end

		return null;
	}
}
