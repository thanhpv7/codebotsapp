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
package firstapp101.services;

import org.springframework.data.querydsl.QSort;
import firstapp101.entities.*;
import firstapp101.repositories.FishnaticRepository;
import firstapp101.repositories.auditing.AuditingRepository;
import firstapp101.graphql.utils.Where;
import firstapp101.graphql.utils.AuditQueryType;
import firstapp101.services.utils.QuerydslUtils;
import firstapp101.configs.security.auditing.CustomRevisionEntity;
import com.google.common.collect.Lists;
import org.hibernate.envers.RevisionType;
import org.hibernate.envers.query.AuditQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.beans.BeanUtils;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import com.google.common.collect.Sets;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;
import firstapp101.entities.RoleEntity;
import firstapp101.services.RoleService;
import firstapp101.configs.security.helpers.AnonymousHelper;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.NonNull;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import java.time.OffsetDateTime;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Service
public class FishnaticService extends UserService<FishnaticEntity, FishnaticRepository, FishnaticEntityAudit> {

	private final String[] referenceNamesInFishnaticEntity = {
	};

	private final RoleService roleService;
	private final PasswordEncoder passwordEncoder;

	private Validator validator;

	private AuditingRepository auditingRepository;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public FishnaticService(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
		RoleService roleService,
		PasswordEncoder passwordEncoder,
		Validator validator,
		AuditingRepository auditingRepository,
		FishnaticRepository repository
	) {
		super(
				// % protected region % [Add any additional superclass constructor arguments here] off begin
				// % protected region % [Add any additional superclass constructor arguments here] end
				repository
		);
		this.roleService = roleService;
		this.passwordEncoder = passwordEncoder;
		this.validator = validator;
		this.auditingRepository = auditingRepository;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Return the number of records available in the database.
	 *
	 * @return the number of records available in the database.
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@Transactional(readOnly = true)
	public long count() {
		// % protected region % [Add any additional logic for count before the main body here] off begin
		// % protected region % [Add any additional logic for count before the main body here] end

		long count = repository.count();

		// % protected region % [Add any additional logic for count before returning the count here] off begin
		// % protected region % [Add any additional logic for count before returning the count here] end

		return count;
	}

	/**
	 * Return the number of records available in the database with filters
	 *
	 * @return the number of records available in the database.
	 */
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@Transactional(readOnly = true)
	public long count(List<List<Where>> conditions) {
		// % protected region % [Add any additional logic for count with query before the main body here] off begin
		// % protected region % [Add any additional logic for count with query before the main body here] end

		long count = conditions != null ? repository.count(this.getQueryConditions(conditions)) : repository.count();

		// % protected region % [Add any additional logic for count with query before returning the count here] off begin
		// % protected region % [Add any additional logic for count with query before returning the count here] end

		return count;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@Transactional(readOnly = true)
	public Optional<FishnaticEntity> findById(UUID id) {
		// % protected region % [Add any additional logic for findById before the main logic here] off begin
		// % protected region % [Add any additional logic for findById before the main logic here] end

		Optional<FishnaticEntity> entity = repository.findById(id);

		// % protected region % [Add any additional logic for findById before returning the entity here] off begin
		// % protected region % [Add any additional logic for findById before returning the entity here] end

		return entity;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@Transactional(readOnly = true)
	public List<FishnaticEntity> findAllWithPage(int pageIndex, int pageSize) {
		// % protected region % [Add any additional logic for findAllWithPage before the main logic here] off begin
		// % protected region % [Add any additional logic for findAllWithPage before the main logic here] end

		List<FishnaticEntity> entities = Lists.newArrayList(repository.findAll(PageRequest.of(pageIndex, pageSize)));

		// % protected region % [Add any additional logic for findAllWithPage before returning the entities here] off begin
		// % protected region % [Add any additional logic for findAllWithPage before returning the entities here] end

		return entities;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@Transactional(readOnly = true)
	public List<FishnaticEntity> findAllWithPageSorted(int pageIndex, int pageSize, Sort sortBy) {
		// % protected region % [Add any additional logic for findAllWithPageSorted before the main logic here] off begin
		// % protected region % [Add any additional logic for findAllWithPageSorted before the main logic here] end

		List<FishnaticEntity> entities = Lists.newArrayList(repository.findAll(
			PageRequest.of(pageIndex, pageSize, getSort(sortBy)))
		);

		// % protected region % [Add any additional logic for findAllWithPageSorted before returning the entities here] off begin
		// % protected region % [Add any additional logic for findAllWithPageSorted before returning the entities here] end

		return entities;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@Transactional(readOnly = true)
	public List<FishnaticEntity> findSortedPageWithQuery(int pageIndex, int pageSize, List<List<Where>> conditions, Sort sortBy) {
		// % protected region % [Add any additional logic for findSortedPageWithQuery before the main logic here] off begin
		// % protected region % [Add any additional logic for findSortedPageWithQuery before the main logic here] end

		List<FishnaticEntity> entities = Lists.newArrayList(repository.findAll(
			this.getQueryConditions(conditions), PageRequest.of(pageIndex, pageSize, getSort(sortBy)))
		);

		// % protected region % [Add any additional logic for findSortedPageWithQuery before returning the entities here] off begin
		// % protected region % [Add any additional logic for findSortedPageWithQuery before returning the entities here] end

		return entities;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('FishnaticEntity', 'create')")
	public FishnaticEntity create(FishnaticEntity entity) {
		// % protected region % [Add any additional logic for create before the main logic here] off begin
		// % protected region % [Add any additional logic for create before the main logic here] end

		FishnaticEntity entityToCreate = updateOldData(entity);

		// % protected region % [Add any additional logic for create before saving the entity here] off begin
		// % protected region % [Add any additional logic for create before saving the entity here] end

		FishnaticEntity newEntity = this.save(entityToCreate);

		// % protected region % [Add any additional logic for create before returning the entity here] off begin
		// % protected region % [Add any additional logic for create before returning the entity here] end

		return newEntity;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('FishnaticEntity', 'create')")
	public List<FishnaticEntity> createAll(Iterable<FishnaticEntity> entities) {
		// % protected region % [Add any additional logic for createAll before the main logic here] off begin
		// % protected region % [Add any additional logic for createAll before the main logic here] end

		Iterable<FishnaticEntity> entitiesToCreate = StreamSupport.stream(entities.spliterator(), false).map(this::updateOldData).collect(Collectors.toList());

		// % protected region % [Add any additional logic for createAll before creating the entities here] off begin
		// % protected region % [Add any additional logic for createAll before creating the entities here] end

		List<FishnaticEntity> newEntities = this.saveAll(entitiesToCreate);

		// % protected region % [Add any additional logic for createAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for createAll before returning the entities here] end

		return newEntities;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('FishnaticEntity', 'update')")
	public FishnaticEntity update(FishnaticEntity entity) {
		// % protected region % [Add any additional logic for update before the main logic here] off begin
		// % protected region % [Add any additional logic for update before the main logic here] end

		FishnaticEntity entityToUpdate = updateOldData(entity);

		// % protected region % [Add any additional logic for update before updating the entity here] off begin
		// % protected region % [Add any additional logic for update before updating the entity here] end

		FishnaticEntity newEntity = this.save(entityToUpdate);

		// % protected region % [Add any additional logic for update before returning the entity here] off begin
		// % protected region % [Add any additional logic for update before returning the entity here] end

		return newEntity;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('FishnaticEntity', 'update')")
	public List<FishnaticEntity> updateAll(Iterable<FishnaticEntity> entities) {
		// % protected region % [Add any additional logic for updateAll before the main logic here] off begin
		// % protected region % [Add any additional logic for updateAll before the main logic here] end

		Iterable<FishnaticEntity> entitiesToUpdate = StreamSupport.stream(entities.spliterator(), false).map(this::updateOldData).collect(Collectors.toList());

		// % protected region % [Add any additional logic for createAll before updating the entities here] off begin
		// % protected region % [Add any additional logic for createAll before updating the entities here] end

		List<FishnaticEntity> newEntities = this.saveAll(entitiesToUpdate);

		// % protected region % [Add any additional logic for updateAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for updateAll before returning the entities here] end

		return newEntities;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'create') or hasPermission('FishnaticEntity', 'update')")
	public FishnaticEntity save(FishnaticEntity entity) {
		// % protected region % [Add any additional logic for save before the main logic here] off begin
		// % protected region % [Add any additional logic for save before the main logic here] end

		validateEntity(entity);

		// % protected region % [Add any additional logic for save before saving the entity here] off begin
		// % protected region % [Add any additional logic for save before saving the entity here] end

		FishnaticEntity newEntity = AnonymousHelper.runAnonymouslyAndReturnValue(() -> repository.save(entity));

		// % protected region % [Add any additional logic before returning the newly created entity here] off begin
		// % protected region % [Add any additional logic before returning the newly created entity here] end

		return newEntity;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'create') or hasPermission('FishnaticEntity', 'update')")
	public List<FishnaticEntity> saveAll(Iterable<FishnaticEntity> entities) {
		// % protected region % [Add any additional logic for saveAll before the main logic here] off begin
		// % protected region % [Add any additional logic for saveAll before the main logic here] end

		List<FishnaticEntity> newEntities = StreamSupport.stream(entities.spliterator(), false)
				.map(this::save)
				.collect(Collectors.toList());

		// % protected region % [Add any additional logic for saveAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for saveAll before returning the entities here] end

		return newEntities;
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'delete')")
	public void deleteById(UUID id) {
		// % protected region % [Add any additional logic for deleteById before the main logic here] off begin
		// % protected region % [Add any additional logic for deleteById before the main logic here] end

		FishnaticEntity entity = repository.findById(id).orElseThrow();

		repository.deleteById(id);
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'delete')")
	public void deleteAllByIds(Iterable<UUID> ids) {
		// % protected region % [Add any additional logic for deleteAll before the main logic here] off begin
		// % protected region % [Add any additional logic for deleteAll before the main logic here] end

		// Do this since Spring repository requires full entities to delete them.
		ids.forEach(this::deleteById);
	}

	@Override
	// TODO change to the audit operation into a separate operation
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FishnaticEntityAudit> getAudits() {
		// % protected region % [Add any additional logic for getAudits before the main logic here] off begin
		// % protected region % [Add any additional logic for getAudits before the main logic here] end

		List<Object[]> rawAudits = auditingRepository.getAudits(FishnaticEntity.class);

		// % protected region % [Add any additional processing before converting to a list of FishnaticEntityAudit here] off begin
		// % protected region % [Add any additional processing before converting to a list of FishnaticEntityAudit here] end

		return mapRawAudits(rawAudits);
	}

	@Override
	@PreAuthorize("hasPermission('FishnaticEntity', 'read')")
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FishnaticEntityAudit> getAuditsByEntityId(UUID id) {

		// % protected region % [Add any additional processing before converting to a list of FishnaticEntityAudit as filtered by id here] off begin
		// % protected region % [Add any additional processing before converting to a list of FishnaticEntityAudit as filtered by id here] end

		List<Object[]> rawAudits = auditingRepository.getAuditsByEntityId(FishnaticEntity.class, id);

		// % protected region % [Add any additional logic before returning the list of entity audits filtered by id here] off begin
		// % protected region % [Add any additional logic before returning the list of entity audits filtered by id here] end

		return mapRawAudits(rawAudits);
	}


	/**
	 * Map the list of raw audits to a list of FishnaticEntityAudit entities
	 *
	 * @param rawAudits The list of raw audits to map
	 * @returns The mapped list of raw audits as a list of FishnaticEntityAudits
	 */
	private List<FishnaticEntityAudit> mapRawAudits(List<Object[]> rawAudits) {
		List<FishnaticEntityAudit> audits = rawAudits.stream().map(this::mapRawAudit)
				.sorted(Collections.reverseOrder(Comparator.comparing(AbstractEntityAudit::getTimestamp)))
				.collect(Collectors.toList());

		// % protected region % [Add any additional logic before returning the list of mapped entity audits here] off begin
		// % protected region % [Add any additional logic before returning the list of mapped entity audits here] end

		return audits;
	}

	/**
	 * Update the data in audit
	 * Change the ProxySet to Hashset to avoid lazy load issue in graphql
	 * @param fishnatic fishnatic to be updated
	 * @return Entity in audit with HashSet as relationship
	 */
	private FishnaticEntity updateAuditData(FishnaticEntity fishnatic) {


		// % protected region % [Customise your update audit data here] off begin
		// % protected region % [Customise your update audit data here] end

		return fishnatic;
	}

	/**
	 * Map a raw audit object to the RegisteredServiceProviderEntityAudit object.
	 *
	 * Handles system changes in the audit log.
	 *
	 * @param rawAudit The raw audit data
	 * @return mapped audit object
	 */
	private FishnaticEntityAudit mapRawAudit(Object[] rawAudit) {
		FishnaticEntity entityAtRevision = updateAuditData((FishnaticEntity) rawAudit[0]);
		CustomRevisionEntity revision = (CustomRevisionEntity) rawAudit[1];
		AuditQueryType auditType = AuditQueryType.getType((RevisionType) rawAudit[2]);

		// Anything performed internally may not have a user associated with it,
		// therefore they can be called system.
		boolean isSystem = (revision.getAuthor() == null);

		return new FishnaticEntityAudit(
				entityAtRevision,
				revision.getModifiedAt(),
				auditType,

				// We don't care about what the UUID is if it is the system.
				(isSystem) ? UUID.randomUUID() : revision.getAuthor().getId(),
				(isSystem) ? "System" : revision.getAuthor().getFirstName(),
				(isSystem) ? "" : revision.getAuthor().getLastName()
		);
	}

	/**
	 * Create the predicate for the querydsl based on one condition
	 *
	 * @param condition Single condition used in the query
	 * @return querydsl predicate
	 */
	protected Predicate processCondition(Where condition) {
		// % protected region % [Add any additional logic for processCondition before the main logic here] off begin
		// % protected region % [Add any additional logic for processCondition before the main logic here] end

		Predicate predicate = null;

		QFishnaticEntity entity = QFishnaticEntity.fishnaticEntity;

		switch (condition.getPath()) {
			case "created":
				// % protected region % [Add any additional logic before the query parameters of created here] off begin
				// % protected region % [Add any additional logic before the query parameters of created here] end

				predicate = QuerydslUtils.getDefaultPredicate(entity.created, condition.getOperation(), condition.getValue());

				// % protected region % [Add any additional logic after the query parameters of created here] off begin
				// % protected region % [Add any additional logic after the query parameters of created here] end

				break;
			case "modified":
				// % protected region % [Add any additional logic before the query parameters of modified here] off begin
				// % protected region % [Add any additional logic before the query parameters of modified here] end

				predicate = QuerydslUtils.getDefaultPredicate(entity.modified, condition.getOperation(), condition.getValue());

				// % protected region % [Add any additional logic after the query parameters of modified here] off begin
				// % protected region % [Add any additional logic after the query parameters of modified here] end

				break;
			// % protected region % [Add any additional cases for the custom query parameters here] off begin
			// % protected region % [Add any additional cases for the custom query parameters here] end
		}

		// % protected region % [Add any additional logic for processCondition after the main logic here] off begin
		// % protected region % [Add any additional logic for processCondition after the main logic here] end

		return predicate;
	}

	/**
	 * Create the predicate for the querydsl based on one single List of Where
	 * The List are connect with 'and' statement
	 *
	 * @param conditions Single list of where statement. The conditions are connected with "or"
	 * @return querydsl predicate
	 */
	protected Predicate processConditionList(List<Where> conditions) {
		List<Predicate> predicates = conditions.stream()
				.map(this::processCondition)
				.filter(Objects::nonNull)
				.collect(Collectors.toList());

		return ExpressionUtils.anyOf(predicates);
	}

	/**
	 * Transfer a list of conditions to one querydsl predicate
	 *
	 * @param conditions A list of conditions
	 * @return a single query dsl predicate
	 */
	@Override
	protected Predicate getQueryConditions(List<List<Where>> conditions) {
		// % protected region % [Add any additional logic for getQueryConditions before the main logic here] off begin
		// % protected region % [Add any additional logic for getQueryConditions before the main logic here] end

		List<Predicate> predicates = conditions.stream()
				.map(this::processConditionList)
				.filter(Objects::nonNull)
				.collect(Collectors.toList());

		// % protected region % [Add any additional logic for getQueryConditions after the main logic here] off begin
		// % protected region % [Add any additional logic for getQueryConditions after the main logic here] end
		return ExpressionUtils.allOf(predicates);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	protected FishnaticEntity updateOldData(FishnaticEntity entity) {
		// % protected region % [Add any additional logic for update references before the main logic here] off begin
		// % protected region % [Add any additional logic for update references before the main logic here] end
		FishnaticEntity entityToUpdate;
		// Check if this is an update operation or a create operation.
		if (entity.getId() != null) {
			// Copy the updated entity data to the entity find from database
			entityToUpdate = repository.findById(entity.getId()).orElseThrow();
			BeanUtils.copyProperties(entity, entityToUpdate, this.referenceNamesInFishnaticEntity);


			// If the entity does not have any password, default back to the old one. Otherwise, hash and use the new
			// one.
			if (entity.getPassword() != null) {
				entityToUpdate.setPassword(passwordEncoder.encode(entity.getPassword()));
			}

			// TODO: Refactor this to use proper reference handling like below.
			if (entity.getRoles().size() == 0) {
				AnonymousHelper.runAnonymously(()->entityToUpdate.getRoles().forEach(entity::addRoles));
			}
		} else {
			entityToUpdate = entity;

			// % protected region % [Add any additional logic before processing the new entity's data here] off begin
			// % protected region % [Add any additional logic before processing the new entity's data here] end

			// Since this is a create operation, hash the password and return it back.
			entityToUpdate.setPassword(passwordEncoder.encode(entityToUpdate.getPassword()));

			// % protected region % [Add any additional logic for pre-processing for default roles here] off begin
			// % protected region % [Add any additional logic for pre-processing for default roles here] end

			List<RoleEntity> defaultRoles = AnonymousHelper.runAnonymouslyAndReturnValue(this::getDefaultRoles);

			// % protected region % [Add any additional roles for the entity here] off begin
			// % protected region % [Add any additional roles for the entity here] end

			AnonymousHelper.runAnonymously(() -> defaultRoles.forEach(entity::addRoles));

			// % protected region % [Add any additional logic after processing the new entity's data here] off begin
			// % protected region % [Add any additional logic after processing the new entity's data here] end
		}


		// % protected region % [Add any additional logic for update references after the main logic here] off begin
		// % protected region % [Add any additional logic for update references after the main logic here] end

		return entityToUpdate;
	}

	/**
	 * Validate the entity
	 * @param entity The entity to validate
	 * @throws ConstraintViolationException Throw ConstraintViolationException when entity is invalid
	 */
	protected void validateEntity(FishnaticEntity entity) {
		// % protected region % [Add any additional logic for validate entity before the main logic here] off begin
		// % protected region % [Add any additional logic for validate entity before the main logic here] end

		Set<ConstraintViolation<FishnaticEntity>> errors =  this.validator.validate(entity);
		if (!errors.isEmpty()) {
			throw new ConstraintViolationException(errors);
		}

		// % protected region % [Add any additional logic for validate entity after the main logic here] off begin
		// % protected region % [Add any additional logic for validate entity after the main logic here] end
	}

	/**
	 * {@inheritDoc}''
	 */
	@Override
	public List<RoleEntity> getDefaultRoles() {
		List<RoleEntity> roles = new ArrayList<>();

		Optional<RoleEntity> fishnatic = roleService.findByName("FISHNATIC");

		if (fishnatic.isEmpty()) {
			throw new NullPointerException("Role admin not present on the server.");
		}

		roles.add(fishnatic.get());

		// % protected region % [Add any additional roles here] off begin
		// % protected region % [Add any additional roles here] end

		return roles;
	}


	/**
	 * Get the sort as given by the sort by for the FishnaticEntity.
	 * This allows fore more advanced sorting algorithms and methods to be compiled and returned.
	 *
	 * In the case that a custom sort is provided, only a single sort is returned.
	 *
	 * @param sortBy Submitted sort by
	 * @return sortBy if simple, for custom sort return a QSort.by(QSort Method).
	 */
	private Sort getSort (Sort sortBy) {
		Iterator it = sortBy.iterator();

		while (it.hasNext()) {
			Sort.Order currentOrder = (Sort.Order)it.next();

			// % protected region % [Customise your sort method here by returning early] off begin
			// % protected region % [Customise your sort method here by returning early] end
		}
		return sortBy;
	}



	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
