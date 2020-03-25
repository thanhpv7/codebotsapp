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
package firstapp101.repositories.auditing;

import org.hibernate.envers.AuditReader;
import org.hibernate.envers.AuditReaderFactory;
import org.hibernate.envers.query.AuditEntity;
import org.hibernate.envers.query.AuditQuery;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.UUID;
import firstapp101.configs.security.helpers.AnonymousHelper;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

/**
 * Repository used to handle any data access operations against the auditing log.
 */
@Repository
public class AuditingRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public List<Object[]> getAudits(Class entityClass) {
		return AnonymousHelper.runAnonymouslyAndReturnValue(() -> {
			AuditReader auditReader = AuditReaderFactory.get(entityManager);

			AuditQuery query = auditReader.createQuery().forRevisionsOfEntity(entityClass, false, true);

			return query.getResultList();
		});
	}

	public List<Object[]> getAuditsByEntityId(Class entityClass, UUID id) {
		return AnonymousHelper.runAnonymouslyAndReturnValue(() -> {
			AuditReader auditReader = AuditReaderFactory.get(entityManager);

			AuditQuery query = auditReader.createQuery().forRevisionsOfEntity(entityClass, false, true).add(AuditEntity.id().eq(id));

			return query.getResultList();
		});
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}