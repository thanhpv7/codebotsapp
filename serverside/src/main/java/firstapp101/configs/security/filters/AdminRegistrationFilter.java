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
package firstapp101.configs.security.filters;

import firstapp101.configs.security.services.AuthenticationService;
import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.entities.AdminEntity;
import firstapp101.entities.RoleEntity;
import firstapp101.repositories.AdminRepository;
import firstapp101.repositories.RoleRepository;
import lombok.NonNull;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Filter when a user attempts to sign up via the client side.
 */
public class AdminRegistrationFilter extends AbstractRegistrationFilter<AdminRepository> {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	public AdminRegistrationFilter(
			@NonNull String registrationEndpoint,
			@NonNull AuthenticationService authService,
			@NonNull AdminRepository userRepository,
			@NonNull RoleRepository roleRepository,
			@NonNull PasswordEncoder passwordEncoder
	) {
		super(registrationEndpoint, authService, userRepository, roleRepository, passwordEncoder);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public void doFilter(
			ServletRequest request,
			ServletResponse response,
			FilterChain chain
	) throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;

		if (!shouldFilter(httpRequest)) {
			chain.doFilter(request, response);
			return;
		}

		// % protected region % [Add any additional preprocessing logic for doFilter before the main body here] off begin
		// % protected region % [Add any additional preprocessing logic for doFilter before the main body here] end

		Map<String, String> paramMap = getParamMap(httpRequest);

		// % protected region % [Add any additional logic before converting into the user entity here] off begin
		// % protected region % [Add any additional logic before converting into the user entity here] end

		final AdminEntity adminEntity = objectMapper.convertValue(paramMap, AdminEntity.class);

		// % protected region % [Add any additional logic before setting the roles here] off begin
		// % protected region % [Add any additional logic before setting the roles here] end

		List<RoleEntity> defaultRoles = AnonymousHelper.runAnonymouslyAndReturnValue(this::getDefaultRoles);

		// % protected region % [Add any additional roles for the entity here] off begin
		// % protected region % [Add any additional roles for the entity here] end

		AnonymousHelper.runAnonymously(() -> defaultRoles.forEach(adminEntity::addRoles));

		// % protected region % [Add any additional roles before hashing the password here] off begin
		// % protected region % [Add any additional roles before hashing the password here] end

		adminEntity.setPassword(passwordEncoder.encode(adminEntity.getPassword()));

		// % protected region % [Add any additional roles before saving the entity here] off begin
		// % protected region % [Add any additional roles before saving the entity here] end

		AnonymousHelper.runAnonymously(() -> userRepository.save(adminEntity));

		// % protected region % [Add any additional logic before processing the response here] off begin
		// % protected region % [Add any additional logic before processing the response here] end

		// % protected region % [Add any additional logic for response processing here] off begin
		// % protected region % [Add any additional logic for response processing here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	protected List<RoleEntity> getDefaultRoles() {
		// Fetch and retrieve all of the roles that this user will have.
		List<RoleEntity> roles = new ArrayList<>();

		Optional<RoleEntity> admin = roleRepository.findByName("ADMIN");
		if (admin.isEmpty()) {
			throw new RuntimeException("Role admin not present on the server.");
		}
		roles.add(admin.get());

		// % protected region % [Add any additional roles here] off begin
		// % protected region % [Add any additional roles here] end

		return roles;
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
