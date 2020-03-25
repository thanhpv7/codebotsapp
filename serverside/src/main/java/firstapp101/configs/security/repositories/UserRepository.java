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

package firstapp101.configs.security.repositories;

import firstapp101.entities.UserEntity;
import org.springframework.stereotype.Repository;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Repository used to retrieve users from the database. Note that this repository was created in conjunction with
 * {@link firstapp101.repositories.UserRepository} since we want to be able to query all user tables at once
 * instead of having to switch between user type until we find the correct one. This works by making {@link UserEntity}
 * and its subclass effectively a single table in the database. Hence any operations from this repository can be used
 * against all user types at once, which is not possible for {@link firstapp101.repositories.UserRepository}.
 */
@Repository
public interface UserRepository extends firstapp101.repositories.UserRepository<UserEntity> {

	// % protected region % [Add any repository method here] off begin
	// % protected region % [Add any repository method here] end

}