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

package firstapp101.graphql.resolvers.query;

import firstapp101.graphql.utils.*;
import firstapp101.entities.FishnaticEntity;
import firstapp101.entities.FishnaticEntityAudit;
import firstapp101.services.FishnaticService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.data.domain.Sort;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

@Slf4j
@Component
public class FishnaticQueryResolver implements GraphQLQueryResolver {

	private final FishnaticService fishnaticService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public FishnaticQueryResolver(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			FishnaticService fishnaticService
	) {
		this.fishnaticService = fishnaticService;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Count the number of Fishnatic records in the data with the given conditions.
	 *
	 * @param conditions the conditions with which the query will be run
	 * @return the number of records in the database that matches the conditions
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	public int countFishnatics(List<List<Where>> conditions) {
		return (int) fishnaticService.count(conditions);
	}

	/**
	 * Return the Fishnatic with the given ID.
	 *
	 * @param id the ID of the entity being queried
	 * @return the entity with the given ID
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	public FishnaticEntity fishnaticById(String id) {
		FishnaticEntity entity = fishnaticService.findById(UUID.fromString(id)).orElse(null);

		// % protected region % [Add any additional logic for findById before returning the entity here] off begin
		// % protected region % [Add any additional logic for findById before returning the entity here] end

		return entity;
	}

	/**
	 * Return a list of Fishnatic records with the given predicates.
	 *
	 * @param pageIndex  window number that captures the records to be fetched in the database
	 * @param pageSize   how many records in the window
	 * @param orders     the orders of the returned list
	 * @param conditions the conditions to filter the records
	 * @return the list with the given predicates
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	public List<FishnaticEntity> fishnatics(
			int pageIndex,
			int pageSize,
			List<OrderBy> orders,
			List<List<Where>> conditions
	) {
		// % protected region % [Add any additional logic for findWithQuery before main logic here] off begin
		// % protected region % [Add any additional logic for findWithQuery before main logic here] end

		List<FishnaticEntity> entities = Lists.newArrayList(fishnaticService.findSortedPageWithQuery(
				pageIndex,
				pageSize,
				conditions,
				Sort.by(OrderBy.toSortOrders(orders))
		));

		// % protected region % [Add any additional logic for findWithQuery after main logic here] off begin
		// % protected region % [Add any additional logic for findWithQuery after main logic here] end

		return entities;
	}

	/**
	 * Similar to {@link FishnaticQueryResolver#fishnatics(int,int,List,List)} but the page index starts
	 * from the tail end.
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	public List<FishnaticEntity> lastFishnatics(
			int pageIndex,
			int pageSize,
			List<OrderBy> orders,
			List<List<Where>> conditions
	) {
		long count = fishnaticService.count();

		// Can be risky since overflow may happen
		int lastPageIndex = (int) (count / pageSize);

		// Reverse the index to get the k-last page.
		int reversedIndex = lastPageIndex - pageIndex;

		List<FishnaticEntity> entities = Lists.newArrayList(fishnaticService.findSortedPageWithQuery(
				reversedIndex,
				pageSize,
				conditions,
				Sort.by(OrderBy.toSortOrders(orders))
		));

		// % protected region % [Add any additional logic for findAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for findAll before returning the entities here] end

		return entities;
	}

	/**
	 * Return a list of {@link FishnaticEntityAudit} entities.
	 *
	 * @return a list of audit entities
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	public List<FishnaticEntityAudit> fishnaticAudits() {
		List<FishnaticEntityAudit> audits = fishnaticService.getAudits();

		// % protected region % [Add any additional logic for FishnaticAudits before returning the audits here] off begin
		// % protected region % [Add any additional logic for FishnaticAudits before returning the audits here] end

		return audits;
	}

	/**
	 * Return a list of {@link FishnaticEntityAudit} entities filtered by a given entity id.
	 *
	 * @param id The id of the entity to filter by.
	 * @return a list of audit entities
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	public List<FishnaticEntityAudit> fishnaticAuditsByEntityId(@NonNull UUID id) {
		List<FishnaticEntityAudit> audits = fishnaticService.getAuditsByEntityId(id);

		// % protected region % [Add any additional logic for FishnaticAuditsByEntityId before returning the audits here] off begin
		// % protected region % [Add any additional logic for FishnaticAuditsByEntityId before returning the audits here] end

		return audits;
	}



	// % protected region % [Import any additional class methods here] off begin
	// % protected region % [Import any additional class methods here] end
}
