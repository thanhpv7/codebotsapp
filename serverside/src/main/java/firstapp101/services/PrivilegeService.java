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
import firstapp101.repositories.PrivilegeRepository;
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
import firstapp101.repositories.RoleRepository;

import lombok.NonNull;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import java.time.OffsetDateTime;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Service
public class PrivilegeService extends AbstractService<PrivilegeEntity, PrivilegeRepository, PrivilegeEntityAudit> {

	private final String[] referenceNamesInPrivilegeEntity = {
		"roles",
	};

	// TODO change to service
	private final RoleRepository roleRepository;

	private Validator validator;

	private AuditingRepository auditingRepository;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public PrivilegeService(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
		RoleRepository roleRepository,
		Validator validator,
		AuditingRepository auditingRepository,
		PrivilegeRepository repository
	) {
		super(
				// % protected region % [Add any additional superclass constructor arguments here] off begin
				// % protected region % [Add any additional superclass constructor arguments here] end
				repository
		);
		this.roleRepository = roleRepository;
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
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
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
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public long count(List<List<Where>> conditions) {
		// % protected region % [Add any additional logic for count with query before the main body here] off begin
		// % protected region % [Add any additional logic for count with query before the main body here] end

		long count = conditions != null ? repository.count(this.getQueryConditions(conditions)) : repository.count();

		// % protected region % [Add any additional logic for count with query before returning the count here] off begin
		// % protected region % [Add any additional logic for count with query before returning the count here] end

		return count;
	}

	/**
	 * Return an entity or a list of entities that have the given attribute name.
	 *
	 * @param name the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute name
	 */
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public Optional<PrivilegeEntity> findByName(String name) {
		// % protected region % [Add any additional logic for findByName before the main body here] off begin
		// % protected region % [Add any additional logic for findByName before the main body here] end

		Optional<PrivilegeEntity> entity = repository.findByName(name);

		// % protected region % [Add any additional logic for findByName before returning the entity here] off begin
		// % protected region % [Add any additional logic for findByName before returning the entity here] end

		return entity;
	}

	/**
	 * Return an entity or a list of entities that have the given attribute target entity.
	 *
	 * @param targetEntity the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute target entity
	 */
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findByTargetEntity(String targetEntity) {
		// % protected region % [Add any additional logic for findByTargetEntity before the main body here] off begin
		// % protected region % [Add any additional logic for findByTargetEntity before the main body here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findByTargetEntity(targetEntity));

		// % protected region % [Add any additional logic for findByTargetEntity before returning the entities here] off begin
		// % protected region % [Add any additional logic for findByTargetEntity before returning the entities here] end

		return entities;
	}

	/**
	 * Return an entity or a list of entities that have the given attribute allow create.
	 *
	 * @param allowCreate the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow create
	 */
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findByAllowCreate(Boolean allowCreate) {
		// % protected region % [Add any additional logic for findByAllowCreate before the main body here] off begin
		// % protected region % [Add any additional logic for findByAllowCreate before the main body here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findByAllowCreate(allowCreate));

		// % protected region % [Add any additional logic for findByAllowCreate before returning the entities here] off begin
		// % protected region % [Add any additional logic for findByAllowCreate before returning the entities here] end

		return entities;
	}

	/**
	 * Return an entity or a list of entities that have the given attribute allow read.
	 *
	 * @param allowRead the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow read
	 */
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findByAllowRead(Boolean allowRead) {
		// % protected region % [Add any additional logic for findByAllowRead before the main body here] off begin
		// % protected region % [Add any additional logic for findByAllowRead before the main body here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findByAllowRead(allowRead));

		// % protected region % [Add any additional logic for findByAllowRead before returning the entities here] off begin
		// % protected region % [Add any additional logic for findByAllowRead before returning the entities here] end

		return entities;
	}

	/**
	 * Return an entity or a list of entities that have the given attribute allow update.
	 *
	 * @param allowUpdate the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow update
	 */
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findByAllowUpdate(Boolean allowUpdate) {
		// % protected region % [Add any additional logic for findByAllowUpdate before the main body here] off begin
		// % protected region % [Add any additional logic for findByAllowUpdate before the main body here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findByAllowUpdate(allowUpdate));

		// % protected region % [Add any additional logic for findByAllowUpdate before returning the entities here] off begin
		// % protected region % [Add any additional logic for findByAllowUpdate before returning the entities here] end

		return entities;
	}

	/**
	 * Return an entity or a list of entities that have the given attribute allow delete.
	 *
	 * @param allowDelete the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow delete
	 */
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findByAllowDelete(Boolean allowDelete) {
		// % protected region % [Add any additional logic for findByAllowDelete before the main body here] off begin
		// % protected region % [Add any additional logic for findByAllowDelete before the main body here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findByAllowDelete(allowDelete));

		// % protected region % [Add any additional logic for findByAllowDelete before returning the entities here] off begin
		// % protected region % [Add any additional logic for findByAllowDelete before returning the entities here] end

		return entities;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public Optional<PrivilegeEntity> findById(UUID id) {
		// % protected region % [Add any additional logic for findById before the main logic here] off begin
		// % protected region % [Add any additional logic for findById before the main logic here] end

		Optional<PrivilegeEntity> entity = repository.findById(id);

		// % protected region % [Add any additional logic for findById before returning the entity here] off begin
		// % protected region % [Add any additional logic for findById before returning the entity here] end

		return entity;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findAllWithPage(int pageIndex, int pageSize) {
		// % protected region % [Add any additional logic for findAllWithPage before the main logic here] off begin
		// % protected region % [Add any additional logic for findAllWithPage before the main logic here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findAll(PageRequest.of(pageIndex, pageSize)));

		// % protected region % [Add any additional logic for findAllWithPage before returning the entities here] off begin
		// % protected region % [Add any additional logic for findAllWithPage before returning the entities here] end

		return entities;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findAllWithPageSorted(int pageIndex, int pageSize, Sort sortBy) {
		// % protected region % [Add any additional logic for findAllWithPageSorted before the main logic here] off begin
		// % protected region % [Add any additional logic for findAllWithPageSorted before the main logic here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findAll(
			PageRequest.of(pageIndex, pageSize, getSort(sortBy)))
		);

		// % protected region % [Add any additional logic for findAllWithPageSorted before returning the entities here] off begin
		// % protected region % [Add any additional logic for findAllWithPageSorted before returning the entities here] end

		return entities;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@Transactional(readOnly = true)
	public List<PrivilegeEntity> findSortedPageWithQuery(int pageIndex, int pageSize, List<List<Where>> conditions, Sort sortBy) {
		// % protected region % [Add any additional logic for findSortedPageWithQuery before the main logic here] off begin
		// % protected region % [Add any additional logic for findSortedPageWithQuery before the main logic here] end

		List<PrivilegeEntity> entities = Lists.newArrayList(repository.findAll(
			this.getQueryConditions(conditions), PageRequest.of(pageIndex, pageSize, getSort(sortBy)))
		);

		// % protected region % [Add any additional logic for findSortedPageWithQuery before returning the entities here] off begin
		// % protected region % [Add any additional logic for findSortedPageWithQuery before returning the entities here] end

		return entities;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('PrivilegeEntity', 'create')")
	public PrivilegeEntity create(PrivilegeEntity entity) {
		// % protected region % [Add any additional logic for create before the main logic here] off begin
		// % protected region % [Add any additional logic for create before the main logic here] end

		PrivilegeEntity entityToCreate = updateOldData(entity);

		// % protected region % [Add any additional logic for create before saving the entity here] off begin
		// % protected region % [Add any additional logic for create before saving the entity here] end

		PrivilegeEntity newEntity = this.save(entityToCreate);

		// % protected region % [Add any additional logic for create before returning the entity here] off begin
		// % protected region % [Add any additional logic for create before returning the entity here] end

		return newEntity;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('PrivilegeEntity', 'create')")
	public List<PrivilegeEntity> createAll(Iterable<PrivilegeEntity> entities) {
		// % protected region % [Add any additional logic for createAll before the main logic here] off begin
		// % protected region % [Add any additional logic for createAll before the main logic here] end

		Iterable<PrivilegeEntity> entitiesToCreate = StreamSupport.stream(entities.spliterator(), false).map(this::updateOldData).collect(Collectors.toList());

		// % protected region % [Add any additional logic for createAll before creating the entities here] off begin
		// % protected region % [Add any additional logic for createAll before creating the entities here] end

		List<PrivilegeEntity> newEntities = this.saveAll(entitiesToCreate);

		// % protected region % [Add any additional logic for createAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for createAll before returning the entities here] end

		return newEntities;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('PrivilegeEntity', 'update')")
	public PrivilegeEntity update(PrivilegeEntity entity) {
		// % protected region % [Add any additional logic for update before the main logic here] off begin
		// % protected region % [Add any additional logic for update before the main logic here] end

		PrivilegeEntity entityToUpdate = updateOldData(entity);

		// % protected region % [Add any additional logic for update before updating the entity here] off begin
		// % protected region % [Add any additional logic for update before updating the entity here] end

		PrivilegeEntity newEntity = this.save(entityToUpdate);

		// % protected region % [Add any additional logic for update before returning the entity here] off begin
		// % protected region % [Add any additional logic for update before returning the entity here] end

		return newEntity;
	}

	@Override
	@Transactional
	@PreAuthorize("hasPermission('PrivilegeEntity', 'update')")
	public List<PrivilegeEntity> updateAll(Iterable<PrivilegeEntity> entities) {
		// % protected region % [Add any additional logic for updateAll before the main logic here] off begin
		// % protected region % [Add any additional logic for updateAll before the main logic here] end

		Iterable<PrivilegeEntity> entitiesToUpdate = StreamSupport.stream(entities.spliterator(), false).map(this::updateOldData).collect(Collectors.toList());

		// % protected region % [Add any additional logic for createAll before updating the entities here] off begin
		// % protected region % [Add any additional logic for createAll before updating the entities here] end

		List<PrivilegeEntity> newEntities = this.saveAll(entitiesToUpdate);

		// % protected region % [Add any additional logic for updateAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for updateAll before returning the entities here] end

		return newEntities;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'create') or hasPermission('PrivilegeEntity', 'update')")
	public PrivilegeEntity save(PrivilegeEntity entity) {
		// % protected region % [Add any additional logic for save before the main logic here] off begin
		// % protected region % [Add any additional logic for save before the main logic here] end

		validateEntity(entity);

		// % protected region % [Add any additional logic for save before saving the entity here] off begin
		// % protected region % [Add any additional logic for save before saving the entity here] end

		PrivilegeEntity newEntity = repository.save(entity);

		// % protected region % [Add any additional logic before returning the newly created entity here] off begin
		// % protected region % [Add any additional logic before returning the newly created entity here] end

		return newEntity;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'create') or hasPermission('PrivilegeEntity', 'update')")
	public List<PrivilegeEntity> saveAll(Iterable<PrivilegeEntity> entities) {
		// % protected region % [Add any additional logic for saveAll before the main logic here] off begin
		// % protected region % [Add any additional logic for saveAll before the main logic here] end

		List<PrivilegeEntity> newEntities = Lists.newArrayList(repository.saveAll(entities));

		// % protected region % [Add any additional logic for saveAll before returning the entities here] off begin
		// % protected region % [Add any additional logic for saveAll before returning the entities here] end

		return newEntities;
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'delete')")
	public void deleteById(UUID id) {
		// % protected region % [Add any additional logic for deleteById before the main logic here] off begin
		// % protected region % [Add any additional logic for deleteById before the main logic here] end

		PrivilegeEntity entity = repository.findById(id).orElseThrow();

		repository.deleteById(id);
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'delete')")
	public void deleteAllByIds(Iterable<UUID> ids) {
		// % protected region % [Add any additional logic for deleteAll before the main logic here] off begin
		// % protected region % [Add any additional logic for deleteAll before the main logic here] end

		// Do this since Spring repository requires full entities to delete them.
		ids.forEach(this::deleteById);
	}

	@Override
	// TODO change to the audit operation into a separate operation
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PrivilegeEntityAudit> getAudits() {
		// % protected region % [Add any additional logic for getAudits before the main logic here] off begin
		// % protected region % [Add any additional logic for getAudits before the main logic here] end

		List<Object[]> rawAudits = auditingRepository.getAudits(PrivilegeEntity.class);

		// % protected region % [Add any additional processing before converting to a list of PrivilegeEntityAudit here] off begin
		// % protected region % [Add any additional processing before converting to a list of PrivilegeEntityAudit here] end

		return mapRawAudits(rawAudits);
	}

	@Override
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PrivilegeEntityAudit> getAuditsByEntityId(UUID id) {

		// % protected region % [Add any additional processing before converting to a list of PrivilegeEntityAudit as filtered by id here] off begin
		// % protected region % [Add any additional processing before converting to a list of PrivilegeEntityAudit as filtered by id here] end

		List<Object[]> rawAudits = auditingRepository.getAuditsByEntityId(PrivilegeEntity.class, id);

		// % protected region % [Add any additional logic before returning the list of entity audits filtered by id here] off begin
		// % protected region % [Add any additional logic before returning the list of entity audits filtered by id here] end

		return mapRawAudits(rawAudits);
	}


	/**
	 * Map the list of raw audits to a list of PrivilegeEntityAudit entities
	 *
	 * @param rawAudits The list of raw audits to map
	 * @returns The mapped list of raw audits as a list of PrivilegeEntityAudits
	 */
	private List<PrivilegeEntityAudit> mapRawAudits(List<Object[]> rawAudits) {
		List<PrivilegeEntityAudit> audits = rawAudits.stream().map(this::mapRawAudit)
				.sorted(Collections.reverseOrder(Comparator.comparing(AbstractEntityAudit::getTimestamp)))
				.collect(Collectors.toList());

		// % protected region % [Add any additional logic before returning the list of mapped entity audits here] off begin
		// % protected region % [Add any additional logic before returning the list of mapped entity audits here] end

		return audits;
	}

	/**
	 * Update the data in audit
	 * Change the ProxySet to Hashset to avoid lazy load issue in graphql
	 * @param privilege privilege to be updated
	 * @return Entity in audit with HashSet as relationship
	 */
	private PrivilegeEntity updateAuditData(PrivilegeEntity privilege) {


		// % protected region % [Customise your update audit data here] off begin
		// % protected region % [Customise your update audit data here] end

		return privilege;
	}

	/**
	 * Map a raw audit object to the RegisteredServiceProviderEntityAudit object.
	 *
	 * Handles system changes in the audit log.
	 *
	 * @param rawAudit The raw audit data
	 * @return mapped audit object
	 */
	private PrivilegeEntityAudit mapRawAudit(Object[] rawAudit) {
		PrivilegeEntity entityAtRevision = updateAuditData((PrivilegeEntity) rawAudit[0]);
		CustomRevisionEntity revision = (CustomRevisionEntity) rawAudit[1];
		AuditQueryType auditType = AuditQueryType.getType((RevisionType) rawAudit[2]);

		// Anything performed internally may not have a user associated with it,
		// therefore they can be called system.
		boolean isSystem = (revision.getAuthor() == null);

		return new PrivilegeEntityAudit(
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

		QPrivilegeEntity entity = QPrivilegeEntity.privilegeEntity;

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
	protected PrivilegeEntity updateOldData(PrivilegeEntity entity) {
		// % protected region % [Add any additional logic for update references before the main logic here] off begin
		// % protected region % [Add any additional logic for update references before the main logic here] end
		PrivilegeEntity entityToUpdate;
		// Check if this is an update operation or a create operation.
		if (entity.getId() != null) {
			// Copy the updated entity data to the entity find from database
			entityToUpdate = repository.findById(entity.getId()).orElseThrow();
			BeanUtils.copyProperties(entity, entityToUpdate, this.referenceNamesInPrivilegeEntity);

		} else {
			entityToUpdate = entity;

			// % protected region % [Add any additional logic before processing the new entity's data here] off begin
			// % protected region % [Add any additional logic before processing the new entity's data here] end

			// % protected region % [Add any additional logic after processing the new entity's data here] off begin
			// % protected region % [Add any additional logic after processing the new entity's data here] end
		}

		// Incoming many to many reference
		if (!entity.getRolesIds().isEmpty()) {
			Iterable<RoleEntity> rolesEntities =
				this.roleRepository.findAllById(entity.getRolesIds());
			// TODO add the invalid field exception
			// TODO throw error when the the set is empty
			entityToUpdate.setRoles(Sets.newHashSet(rolesEntities));
		} else {
			entityToUpdate.setRoles(new HashSet<>());
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
	protected void validateEntity(PrivilegeEntity entity) {
		// % protected region % [Add any additional logic for validate entity before the main logic here] off begin
		// % protected region % [Add any additional logic for validate entity before the main logic here] end

		Set<ConstraintViolation<PrivilegeEntity>> errors =  this.validator.validate(entity);
		if (!errors.isEmpty()) {
			throw new ConstraintViolationException(errors);
		}

		// % protected region % [Add any additional logic for validate entity after the main logic here] off begin
		// % protected region % [Add any additional logic for validate entity after the main logic here] end
	}


	/**
	 * Get the sort as given by the sort by for the PrivilegeEntity.
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
