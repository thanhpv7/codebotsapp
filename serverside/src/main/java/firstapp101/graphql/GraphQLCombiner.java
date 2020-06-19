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

import firstapp101.graphql.resolvers.*;
import firstapp101.graphql.resolvers.query.*;
import firstapp101.graphql.resolvers.mutation.*;
import com.coxautodev.graphql.tools.SchemaParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class for every GraphQL provider. It handles parsing and merging of schemas by default.
 */
@Component
public class GraphQLCombiner {

	private final SpeciesResolver speciesResolver;
	private final SpeciesQueryResolver speciesQueryResolver;
	private final SpeciesMutationResolver speciesMutationResolver;
	private final TankResolver tankResolver;
	private final TankQueryResolver tankQueryResolver;
	private final TankMutationResolver tankMutationResolver;
	private final FishResolver fishResolver;
	private final FishQueryResolver fishQueryResolver;
	private final FishMutationResolver fishMutationResolver;
	private final AdminResolver adminResolver;
	private final AdminQueryResolver adminQueryResolver;
	private final AdminMutationResolver adminMutationResolver;
	private final FishnaticResolver fishnaticResolver;
	private final FishnaticQueryResolver fishnaticQueryResolver;
	private final FishnaticMutationResolver fishnaticMutationResolver;
	private final RoleResolver roleResolver;
	private final RoleQueryResolver roleQueryResolver;
	private final RoleMutationResolver roleMutationResolver;
	private final PrivilegeResolver privilegeResolver;
	private final PrivilegeQueryResolver privilegeQueryResolver;
	private final PrivilegeMutationResolver privilegeMutationResolver;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public GraphQLCombiner(
			SpeciesResolver speciesResolver,
			SpeciesQueryResolver speciesQueryResolver,
			SpeciesMutationResolver speciesMutationResolver,
			TankResolver tankResolver,
			TankQueryResolver tankQueryResolver,
			TankMutationResolver tankMutationResolver,
			FishResolver fishResolver,
			FishQueryResolver fishQueryResolver,
			FishMutationResolver fishMutationResolver,
			AdminResolver adminResolver,
			AdminQueryResolver adminQueryResolver,
			AdminMutationResolver adminMutationResolver,
			FishnaticResolver fishnaticResolver,
			FishnaticQueryResolver fishnaticQueryResolver,
			FishnaticMutationResolver fishnaticMutationResolver,
			RoleResolver roleResolver,
			RoleQueryResolver roleQueryResolver,
			RoleMutationResolver roleMutationResolver,
			PrivilegeResolver privilegeResolver,
			PrivilegeQueryResolver privilegeQueryResolver,
			PrivilegeMutationResolver privilegeMutationResolver
	) {
		this.speciesResolver = speciesResolver;
		this.speciesQueryResolver = speciesQueryResolver;
		this.speciesMutationResolver = speciesMutationResolver;
		this.tankResolver = tankResolver;
		this.tankQueryResolver = tankQueryResolver;
		this.tankMutationResolver = tankMutationResolver;
		this.fishResolver = fishResolver;
		this.fishQueryResolver = fishQueryResolver;
		this.fishMutationResolver = fishMutationResolver;
		this.adminResolver = adminResolver;
		this.adminQueryResolver = adminQueryResolver;
		this.adminMutationResolver = adminMutationResolver;
		this.fishnaticResolver = fishnaticResolver;
		this.fishnaticQueryResolver = fishnaticQueryResolver;
		this.fishnaticMutationResolver = fishnaticMutationResolver;
		this.roleResolver = roleResolver;
		this.roleQueryResolver = roleQueryResolver;
		this.roleMutationResolver = roleMutationResolver;
		this.privilegeResolver = privilegeResolver;
		this.privilegeQueryResolver = privilegeQueryResolver;
		this.privilegeMutationResolver = privilegeMutationResolver;
	}

	@Bean
	public SchemaParser schemaParser() {
		return SchemaParser.newParser()
				.file("graphql/schemas/schema.graphql")
				.file("graphql/schemas/species.schema.graphql")
				.file("graphql/schemas/tank.schema.graphql")
				.file("graphql/schemas/fish.schema.graphql")
				.file("graphql/schemas/admin.schema.graphql")
				.file("graphql/schemas/fishnatic.schema.graphql")
				.file("graphql/schemas/role.schema.graphql")
				.file("graphql/schemas/privilege.schema.graphql")
				.resolvers(speciesResolver)
				.resolvers(speciesQueryResolver)
				.resolvers(speciesMutationResolver)
				.resolvers(tankResolver)
				.resolvers(tankQueryResolver)
				.resolvers(tankMutationResolver)
				.resolvers(fishResolver)
				.resolvers(fishQueryResolver)
				.resolvers(fishMutationResolver)
				.resolvers(adminResolver)
				.resolvers(adminQueryResolver)
				.resolvers(adminMutationResolver)
				.resolvers(fishnaticResolver)
				.resolvers(fishnaticQueryResolver)
				.resolvers(fishnaticMutationResolver)
				.resolvers(roleResolver)
				.resolvers(roleQueryResolver)
				.resolvers(roleMutationResolver)
				.resolvers(privilegeResolver)
				.resolvers(privilegeQueryResolver)
				.resolvers(privilegeMutationResolver)
				.build();
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
