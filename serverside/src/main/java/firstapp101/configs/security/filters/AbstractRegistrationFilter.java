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

import lombok.NonNull;
import firstapp101.configs.security.services.AuthenticationService;
import firstapp101.entities.RoleEntity;
import firstapp101.repositories.RoleRepository;
import firstapp101.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Map;
import java.util.stream.Collectors;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Filter when a user attempts to sign up via the client side.
 */
public abstract class AbstractRegistrationFilter<E extends UserRepository> extends GenericFilterBean {

	protected final RequestMatcher requestMatcher;
	protected final AuthenticationService authService;
	protected final E userRepository;
	protected final RoleRepository roleRepository;
	protected final PasswordEncoder passwordEncoder;
	protected final ObjectMapper objectMapper;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected AbstractRegistrationFilter(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			@NonNull String registrationEndpoint,
			@NonNull AuthenticationService authService,
			@NonNull E userRepository,
			@NonNull RoleRepository roleRepository,
			@NonNull PasswordEncoder passwordEncoder
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.requestMatcher = new AntPathRequestMatcher(registrationEndpoint);
		this.authService = authService;
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
		this.objectMapper = new ObjectMapper();
		this.passwordEncoder = passwordEncoder;

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * Given a request check if this filter should be applied to it.
	 *
	 * @param httpRequest the request to be checked against this filter
	 * @return whether this filter should be applied to the request
	 */
	protected boolean shouldFilter(@NonNull HttpServletRequest httpRequest) {
		// % protected region % [Add any additional preprocessing logic for shouldFilter before the main body here] off begin
		// % protected region % [Add any additional preprocessing logic for shouldFilter before the main body here] end

		boolean shouldFilter = requestMatcher.matches(httpRequest);

		// % protected region % [Add any additional preprocessing logic for shouldFilter after the main body here] off begin
		// % protected region % [Add any additional preprocessing logic for shouldFilter after the main body here] end

		return shouldFilter;
	}

	/**
	 * Return the param map of the given request. This should be used in favour of the built-in <code>getParamMap</code>
	 * of {@link HttpServletRequest} since the latter operations on a list of values associated with any param key. As
	 * the result the first value of the list will be used as the value for the associated param key in the return map.
	 *
	 * @param httpRequest the request whose param map will be extracted
	 * @return the param map of the given request
	 */
	protected final Map<String, String> getParamMap(@NonNull HttpServletRequest httpRequest) {
		// % protected region % [Add any additional preprocessing logic for getParamMap here] off begin
		// % protected region % [Add any additional preprocessing logic for getParamMap here] end

		return httpRequest.getParameterMap().entrySet().stream()
				.filter(entry -> entry.getValue().length > 0)
				.collect(Collectors.toMap(Map.Entry::getKey, e -> e.getValue()[0]));
	}

	/**
	 * Return a list of default roles to be used when a new user registers.
	 *
	 * @return a list of default roles
	 */
	protected abstract List<RoleEntity> getDefaultRoles() throws ServletException;

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
