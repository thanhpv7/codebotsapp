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
package firstapp101.configs.security.auditing;

import firstapp101.entities.UserEntity;
import firstapp101.configs.security.services.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.hibernate.envers.EntityTrackingRevisionListener;
import org.hibernate.envers.RevisionType;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.time.OffsetDateTime;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component
public class CustomRevisionEntityListener implements EntityTrackingRevisionListener {

	private static UserService userService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public void setUserService(UserService userService) {
		CustomRevisionEntityListener.userService = userService;
	}

	@Override
	public void entityChanged(
			Class entityClass,
			String entityName,
			Serializable entityId,
			RevisionType revisionType,
			Object revisionEntity
	) {
		// % protected region % [Add any additional logic for entityChanged before the main body here] off begin
		// % protected region % [Add any additional logic for entityChanged before the main body here] end

		CustomRevisionEntity customRevisionEntity = (CustomRevisionEntity) revisionEntity;
		customRevisionEntity.setModifiedAt(OffsetDateTime.now());

		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		if (currentUser != null) {
			Object principal = currentUser.getPrincipal();
			if (principal != null) {
				UserEntity userEntity;
				if (principal instanceof String) {
					userEntity = userService.getUserByUsername((String) principal);
				} else {
					userEntity = userService.getUserByUsername(((UserDetails) principal).getUsername());
				}

				if (userEntity != null) {
					customRevisionEntity.setAuthor(userEntity);
				}
			}
		}

		// % protected region % [Add any additional logic for entityChanged after the main body here] off begin
		// % protected region % [Add any additional logic for entityChanged after the main body here] end
	}

	@Override
	public void newRevision(Object revisionEntity) {
		// % protected region % [Add any additional logic for newRevision here] off begin
		// % protected region % [Add any additional logic for newRevision here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}