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
package firstapp101.lib.token.services;

import firstapp101.lib.token.models.*;
import firstapp101.lib.token.repositories.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.time.OffsetDateTime;
import java.util.*;
import lombok.NonNull;
// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Token Service that creates tokens in to database. Which is used in reset password, registration etc.
 */
@Service
public class TokenService {

	/**
	 * Default valid duration of token
	 */
	@Value("${token.default.expiration-time-seconds}")
	private long defaultTokenValidTime;

	private final TokenRepository tokenRepository;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Autowired
	public TokenService(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			TokenRepository tokenRepository
	) {
		this.tokenRepository = tokenRepository;

		// % protected region % [Add any additional logic for constructor here] off begin
		// % protected region % [Add any additional logic for constructor here] end
	}

	/**
	 * Find Token entity by matching token string
	 * @param token Token string to be matched.
	 * @return Token found from database
	 */
	public Optional<TokenEntity> findByToken(@NonNull String token) {
		// % protected region % [Add any before before main body of findByToken] off begin
		// % protected region % [Add any before before main body of findByToken] end
		
		Optional<TokenEntity> tokenEntity =  this.tokenRepository.findByToken(token);

		// % protected region % [Add any before after main body of findByToken] off begin
		// % protected region % [Add any before after main body of findByToken] end

		return tokenEntity;
	}

	/**
	 * Generate token with uuid
	 * @return Generated token
	 */
	public TokenEntity generateDefaultToken() {
		// % protected region % [Add any before after main body of generateDefaultToken] off begin
		// % protected region % [Add any before after main body of generateDefaultToken] end
		
		TokenEntity tokenEntity = generateTokenWithExpirationTime(defaultTokenValidTime);

		// % protected region % [Add any before after main body of generateDefaultToken] off begin
		// % protected region % [Add any before after main body of generateDefaultToken] end

		return tokenEntity;
	}

	/**
	 * Generate token with duration of the token
	 * @param expirationTimeInSecond How long the token would be valid in second
	 * @return Generated token
	 */
	public TokenEntity generateTokenWithExpirationTime(long expirationTimeInSecond) {
		// % protected region % [Add any before after main body of generateTokenWithExpirationTime] off begin
		// % protected region % [Add any before after main body of generateTokenWithExpirationTime] end
		
		TokenEntity tokenEntity = generateTokenWithExpirationDateTime(OffsetDateTime.now().plusSeconds(expirationTimeInSecond));

		// % protected region % [Add any before after main body of generateTokenWithExpirationTime] off begin
		// % protected region % [Add any before after main body of generateTokenWithExpirationTime] end
		
		return tokenEntity;
	}

	/**
	 * Generate token with expiration date time.
	 * @param expirationDateTime Time of token expired.
	 * @return Generated token
	 */
	public TokenEntity generateTokenWithExpirationDateTime(OffsetDateTime expirationDateTime) {
		// % protected region % [Add any before after main body of generateTokenWithExpirationDateTime] off begin
		// % protected region % [Add any before after main body of generateTokenWithExpirationDateTime] end
		
		TokenEntity tokenEntity = new TokenEntity();
		tokenEntity.setToken(UUID.randomUUID().toString());
		tokenEntity.setExpiryDateTime(expirationDateTime);
		tokenEntity = this.tokenRepository.save(tokenEntity);
		
		// % protected region % [Add any before after main body of generateTokenWithExpirationDateTime] off begin
		// % protected region % [Add any before after main body of generateTokenWithExpirationDateTime] end
		
		return tokenEntity;
	}

	/**
	 * Update token
	 * @param tokenEntity token to update
	 * @return Updated token
	 */
	public TokenEntity updateToken(@NonNull TokenEntity tokenEntity) {
		// % protected region % [Add any before after main body of updateToken] off begin
		// % protected region % [Add any before after main body of updateToken] end

		tokenEntity = this.tokenRepository.save(tokenEntity);

		// % protected region % [Add any before after main body of updateToken] off begin
		// % protected region % [Add any before after main body of updateToken] end
		
		return tokenEntity;
	}

	/**
	 * Delete Token
	 * @param tokenEntity The token to delete
	 */
	public void deleteToken(@NonNull TokenEntity tokenEntity) {
		// % protected region % [Add any before after main body of deleteToken] off begin
		// % protected region % [Add any before after main body of deleteToken] end
		
		this.tokenRepository.delete(tokenEntity);

		// % protected region % [Add any before after main body of deleteToken] off begin
		// % protected region % [Add any before after main body of deleteToken] end
	}

	/**
	 * Delete all expired tokens
	 */
	public void deleteExpiredTokens() {
		// % protected region % [Add any before after main body of deleteExpiredTokens] off begin
		// % protected region % [Add any before after main body of deleteExpiredTokens] end
		
		this.tokenRepository.deleteTokenEntitiesByExpiryDateTimeBefore(OffsetDateTime.now());

		// % protected region % [Add any before after main body of deleteExpiredTokens] off begin
		// % protected region % [Add any before after main body of deleteExpiredTokens] end
	}
}