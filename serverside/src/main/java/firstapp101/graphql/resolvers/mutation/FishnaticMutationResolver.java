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

package firstapp101.graphql.resolvers.mutation;

import firstapp101.entities.FishnaticEntity;
import firstapp101.services.FishnaticService;
import com.google.common.collect.Lists;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

@Slf4j
@Component
public class FishnaticMutationResolver implements GraphQLMutationResolver {

	private final FishnaticService fishnaticService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public FishnaticMutationResolver(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			FishnaticService fishnaticService
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.fishnaticService = fishnaticService;

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * Persist the given entity into the database.
	 *
	 * @param rawEntity the entity before persistence
	 * @return the entity after persistence
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'create')")
	public FishnaticEntity createFishnatic(@NonNull FishnaticEntity rawEntity) {
		// % protected region % [Add any additional logic for create before creating the new entity here] off begin
		// % protected region % [Add any additional logic for create before creating the new entity here] end

		FishnaticEntity newEntity = fishnaticService.create(rawEntity);

		// % protected region % [Add any additional logic for create before returning the newly created entity here] off begin
		// % protected region % [Add any additional logic for create before returning the newly created entity here] end

		return newEntity;
	}

	/**
	 * Similar to {@link FishnaticMutationResolver#createFishnatic(FishnaticEntity)}
	 * but with multiple entities at once.
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'create')")
	public List<FishnaticEntity> createAllFishnatic(@NonNull List<FishnaticEntity> rawEntities) {
		List<FishnaticEntity> newEntities = Lists.newArrayList(fishnaticService.createAll(rawEntities));

		// % protected region % [Add any additional logic for update before returning the created entities here] off begin
		// % protected region % [Add any additional logic for update before returning the created entities here] end

		return newEntities;
	}

	/**
	 * Persist the given entity into the database.
	 *
	 * @param rawEntity the entity before persistence
	 * @return the entity after persistence
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'update')")
	public FishnaticEntity updateFishnatic(@NonNull FishnaticEntity rawEntity) {
		FishnaticEntity newEntity = fishnaticService.update(rawEntity);

		// % protected region % [Add any additional logic for create before returning the newly updated entity here] off begin
		// % protected region % [Add any additional logic for create before returning the newly updated entity here] end

		return newEntity;
	}

	/**
	 * Similar to {@link FishnaticMutationResolver#updateFishnatic(FishnaticEntity)}
	 * but with multiple entities at once.
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'update')")
	public List<FishnaticEntity> updateAllFishnatic(@NonNull List<FishnaticEntity> rawEntities) {
		List<FishnaticEntity> newEntities = Lists.newArrayList(fishnaticService.updateAll(rawEntities));

		// % protected region % [Add any additional logic for update before returning the updated entities here] off begin
		// % protected region % [Add any additional logic for update before returning the updated entities here] end

		return newEntities;
	}

	/**
	 * Delete the entity with the ID from the database.
	 *
	 * @param id the ID of the entity to be deleted
	 * @return the ID of the deleted entity
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'delete')")
	public String deleteFishnaticById(@NonNull String id) {
		fishnaticService.deleteById(UUID.fromString(id));

		// % protected region % [Add any additional logic for update before returning the deleted entity ID here] off begin
		// % protected region % [Add any additional logic for update before returning the deleted entity ID here] end

		return id;
	}

	/**
	 * Similar to {@link FishnaticMutationResolver#deleteFishnaticById(String)}
	 * but with multiple entities at once.
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'delete')")
	public List<String> deleteAllFishnaticByIds(@NonNull List<String> ids) {
		fishnaticService.deleteAllByIds(ids.stream().map(UUID::fromString).collect(Collectors.toList()));

		// % protected region % [Add any additional logic for update before returning the deleted entity IDs here] off begin
		// % protected region % [Add any additional logic for update before returning the deleted entity IDs here] end

		return ids;
	}



	// % protected region % [Import any additional class methods here] off begin
	// % protected region % [Import any additional class methods here] end
}
