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
package firstapp101.entities.listeners;

import firstapp101.entities.AbstractEntity;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.data.auditing.AuditingHandler;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
public abstract class AbstractEntityListener<E extends AbstractEntity> {

	protected final PermissionEvaluator permissionEvaluator;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected AbstractEntityListener(PermissionEvaluator permissionEvaluator) {
		this.permissionEvaluator = permissionEvaluator;
	}

	/**
	 * This hook is called before the entity is persisted into the actual database.
	 */
	abstract public void beforePersist(E entity);

	/**
	 * This hook is called after the entity has been persisted into the actual database.
	 */
	abstract public void afterPersist(E entity);

	/**
	 * This hook is called before the entity is removed into the actual database.
	 */
	abstract public void beforeRemove(E entity);

	/**
	 * This hook is called after the entity has been removed from the actual database.
	 */
	abstract public void afterRemove(E entity);

	/**
	 * This hook is called before the entity is updated in the actual database.
	 */
	abstract public void beforeUpdate(E entity);

	/**
	 * This hook is called after the entity has been updated in the actual database.
	 */
	abstract public void afterUpdate(E entity);

	/**
	 * This hook is called after the entity has been loaded from the actual database.
	 */
	abstract public void afterLoad(E entity);

	/**
	 * Given an entity name and a permission, check if the currently logged-in user has such permission against the
	 * the entity.
	 */
	protected void checkPermission(@NonNull String entityName, @NonNull String permission) {
		if (!permissionEvaluator.hasPermission(SecurityContextHolder.getContext().getAuthentication(), entityName, permission)) {
			log.error("Access to {} with permission {} is denied.", entityName, permission);
			throw new AccessDeniedException("Access to " + entityName + " is denied.");
		}
	}

	/**
	 * Remove all references
	 * This is to avoid inconsistency of the data after delete.
	 *
	 * @param entity The entity to clean
	 */
	protected abstract void removeAllReferences(E entity);

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}