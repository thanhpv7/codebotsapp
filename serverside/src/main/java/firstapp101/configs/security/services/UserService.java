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
package firstapp101.configs.security.services;

import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.configs.security.repositories.UserRepository;
import firstapp101.configs.security.exceptions.*;
import firstapp101.entities.*;
import firstapp101.lib.services.email.*;
import firstapp101.lib.token.models.TokenEntity;
import firstapp101.lib.token.services.TokenService;
import lombok.NonNull;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Security service used to load user based on its username, therefore this service serves a different purpose compared
 * to {@link firstapp101.services.UserService}. Whereas {@link firstapp101.services.UserService} is simply used as a base
 * service so that others can subclass, this service is used during the authentication process.
 */
@Service("userDetailsService")
public class UserService implements UserDetailsService {
	/**
	 * Used to fetch and check user entities in the database.
	 */
	private final UserRepository userRepository;

	private final EmailService emailService;

	private final TokenService tokenService;

	/**
	 * Host name of client side
	 */
	@Value("${clientside.hostname}")
	private String clientsideHost;

	/**
	 * System admin email address
	 * The system admin email address would be used as sender of system emails.
	 */
	@Value("${system.adminEmail}")
	private String adminEmailAddress;

	/**
	 * Duration of reset password token before token expired
	 */
	@Value("${token.user-password-reset.expiration-time-seconds}")
	private long resetPasswordExpirationTime;

	/**
	 * Which user is currently logged in mapped by their username and the actual user entity if there exists one.
	 */
	private final Map<String, UserEntity> loggedInUsers;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public UserService(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			UserRepository userRepository,
			EmailService emailService,
			TokenService tokenService
	) {
		this.userRepository = userRepository;
		this.loggedInUsers = new HashMap<>();
		this.emailService = emailService;
		this.tokenService = tokenService;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// % protected region % [Add any additional preprocessing logic for loadUserByUsername before the main body here] off begin
		// % protected region % [Add any additional preprocessing logic for loadUserByUsername before the main body here] end

		// Fetch and ensure that the username maps to a proper user in the database.
		UserEntity userEntity = AnonymousHelper.runAnonymouslyAndReturnValue(() -> userRepository.findByEmail(username).orElse(null));
		if (userEntity == null) {
			throw new UsernameNotFoundException(username + " not found");
		} else if (!userEntity.isEnabled() || !userEntity.isAccountNonExpired() || !userEntity.isAccountNonLocked() || !userEntity.isCredentialsNonExpired()) {
			throw new InsufficientAuthenticationException(username + " has been archived");
		}

		loggedInUsers.put(username, userEntity);

		// % protected region % [Add any additional preprocessing logic for loadUserByUsername after the main body here] off begin
		// % protected region % [Add any additional preprocessing logic for loadUserByUsername after the main body here] end

		return userEntity;
	}

	/**
	 * Given a username, return the user entity associated with that username.
	 *
	 * @param username the username whose user entity to be retrieved
	 * @return the user entity associated with the username, null if not exist
	 */
	public UserEntity getUserByUsername(@NonNull String username) {
		// % protected region % [Add any additional preprocessing logic for getUserByUsername here] off begin
		// % protected region % [Add any additional preprocessing logic for getUserByUsername here] end

		return loggedInUsers.get(username);
	}

	/**
	 * Given a username, remove the user entity along with the username from the cache.
	 *
	 * @param username the username whose user entity will be deleted from the cache
	 */
	public void removeUserByUsername(@NonNull String username) {
		// % protected region % [Add any additional preprocessing logic for removeUserByUsername here] off begin
		// % protected region % [Add any additional preprocessing logic for removeUserByUsername here] end

		loggedInUsers.remove(username);
	}

	/**
	 * Given a username, return the list of roles that the user entity associated with the username has. Note that this
	 * method only looks into the cache (i.e. currently logged-in users).
	 *
	 * @return a list of roles that the user entity associated with the given username has
	 */
	public List<String> getRoleByUserName(@NonNull String username) {
		// % protected region % [Add any additional preprocessing logic for getRoleByUserName here] off begin
		// % protected region % [Add any additional preprocessing logic for getRoleByUserName here] end

		return this.getUserByUsername(username).getRoles().stream().map(RoleEntity::getName).collect(Collectors.toList());
	}

	/**
	 * Send forgotten email
	 * @param email Email of the user to send to
	 * @throws Exception Exception being thrown during sending email
	 */
	public void forgottenPassword(@NonNull String email) throws Exception {
		// % protected region % [Add any additional pre-processing logic for forgottenPassword here] off begin
		// % protected region % [Add any additional pre-processing logic for forgottenPassword here] end

		Email emailToSend = new Email();

		AnonymousHelper.runAnonymously(() -> {
			UserEntity user = this.userRepository.findByEmail(email).orElseThrow(() -> new AuthenticationCredentialsNotFoundException("Email is not found"));

			String resetPasswordUrl = this.generateResetPasswordUrl(user);

			// Add variables
			Map<String, Object> emailVariables = Map.of(
					"user", user.getFirstName(),
					"passwordResetUrl", resetPasswordUrl
			);

			// Set variables for email
			emailToSend.setEmailVariables(emailVariables);
		});

		emailToSend.setSenderEmailAddress(adminEmailAddress);
		emailToSend.setReceiptEmailAddresses(Set.of(email));
		emailToSend.setSubject("Reset Password");
		emailToSend.setTemplateName("ResetPassword.template.html");

		// % protected region % [Add any additional logic before sending email in forgottenPassword here] off begin
		// % protected region % [Add any additional logic before sending email in forgottenPassword here] end

		emailService.sendEmailWithTemplateName(emailToSend);

		// % protected region % [Add any additional post-processing logic for forgottenPassword here] off begin
		// % protected region % [Add any additional post-processing logic for forgottenPassword here] end

	}

	/**
	 * Reset password with user information and reset password token
	 * @param token Reset password token
	 * @param username Username
	 * @param encodedPassword Encoded password to be updated
	 * @return Updated user entity
	 */
	public UserEntity resetPassword(@NonNull String token, @NonNull String username, @NonNull String encodedPassword) {
		// % protected region % [Add any additional pre-processing logic for resetPassword here] off begin
		// % protected region % [Add any additional pre-processing logic for resetPassword here] end

		QUserEntity qUserEntity = QUserEntity.userEntity;
		Predicate predicate = qUserEntity.resetPasswordToken.any().token.eq(token).and(qUserEntity.email.eq(username));

		UserEntity userEntity = this.userRepository.findOne(predicate).orElseThrow(TokenNotMatchException::new);

		TokenEntity passwordResetToken = this.tokenService.findByToken(token).orElseThrow();

		if (!passwordResetToken.isValid()) {
			throw new TokenExpiredException();
		}

		// Get the user and reset the password
		userEntity.setPassword(encodedPassword);
		// Clean the password token
		userEntity.getResetPasswordToken().remove(passwordResetToken);
		this.userRepository.save(userEntity);
		this.tokenService.deleteToken(passwordResetToken);

		// % protected region % [Add any additional post-processing logic for resetPassword here] off begin
		// % protected region % [Add any additional post-processing logic for resetPassword here] end

		return userEntity;
	}

	/**
	 * Generate reset password url for the user
	 * @param userEntity The user to have the reset password url
	 * @return The url for resetting password
	 */
	private String generateResetPasswordUrl(@NonNull UserEntity userEntity) {
		// % protected region % [Add any additional preprocessing logic for generateResetPasswordUrl here] off begin
		// % protected region % [Add any additional preprocessing logic for generateResetPasswordUrl here] end

		TokenEntity tokenEntity = tokenService.generateTokenWithExpirationTime(resetPasswordExpirationTime);
		userEntity.getResetPasswordToken().add(tokenEntity);
		userRepository.save(userEntity);
		String resetPasswordUrl = String.format("%s/reset-password?token=%s&username=%s",
				clientsideHost, tokenEntity.getToken(), userEntity.getUsername());

		// % protected region % [Add any additional postprocessing logic for generateResetPasswordUrl here] off begin
		// % protected region % [Add any additional postprocessing logic for generateResetPasswordUrl here] end

		return resetPasswordUrl;
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
