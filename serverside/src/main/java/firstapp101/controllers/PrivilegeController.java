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
package firstapp101.controllers;

import firstapp101.entities.PrivilegeEntity;
import firstapp101.services.PrivilegeService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;
import java.util.UUID;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Controller used to handle all REST operations regarding Privilege
 */
@Api(description = "Set of endpoints for Creating, Retrieving, Updating and Deleting of Privileges.")
@RestController
@RequestMapping("/api/privilege")
public class PrivilegeController {

	private final PrivilegeService privilegeService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public PrivilegeController(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			PrivilegeService privilegeService
	) {
		this.privilegeService = privilegeService;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Return all the Privileges.
	 *
	 * @return all the Privileges
	 */
	@ApiOperation(
			value = "Returns a single page of Privileges",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<PrivilegeEntity>> getAllWithPage(
			@ApiParam("The page to return.")
			@RequestParam(value = "page", defaultValue = "1", required = false) int page,
			@ApiParam("The size of the page to return.")
			@RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
	) {
		List<PrivilegeEntity> privileges = privilegeService.findAllWithPage((page > 0) ? page - 1 : page, pageSize);

		// % protected region % [Add any custom logic before returning the entities here] off begin
		// % protected region % [Add any custom logic before returning the entities here] end

		return new ResponseEntity<>(privileges, HttpStatus.OK);
	}

	/**
	 * Return the Privilege that has the same id as the given id.
	 *
	 * @param id      The id of the PrivilegeEntity to be returned
	 * @param expands The expand string to be used when expanding
	 * @return the Privilege that has the same id as the given id
	 */
	// % protected region % [Customise the security configuration here for the getWithId endpoint] off begin
	// % protected region % [Customise the security configuration here for the getWithId endpoint] end
	@ApiOperation(
			value = "Return a single Privilege as defined by the id provided.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@ApiResponses(value = {
			@ApiResponse(code = 404, message = "Privilege entity not found"),
	})
	@PreAuthorize("hasPermission('PrivilegeEntity', 'read')")
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<PrivilegeEntity> getById(
			@ApiParam("The UUID of the Privilege to return.")
			@PathVariable("id") UUID id
	) {
		Optional<PrivilegeEntity> privilegeEntity = privilegeService.findById(id);

		// % protected region % [Add any final logic before returning the entity here] off begin
		// % protected region % [Add any final logic before returning the entity here] end

		if (privilegeEntity.isPresent()) {
			return new ResponseEntity<>(privilegeEntity.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * Create/Update the given Privilege. If the entity has an id it will be updated, if not it will be created.
	 * The appropriate status codes will be set.
	 *
	 * @param privilegeEntity The entity to save or update
	 */
	@ApiOperation(
			value = "Create a Privilege if id not exists. Update otherwise.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "Successfully created the new Privilege."),
			@ApiResponse(code = 409, message = "Failed to create the new Privilege, duplicate record found")
	})
	@PreAuthorize("hasPermission('PrivilegeEntity', 'create') or hasPermission('PrivilegeEntity', 'update')")
	@PostMapping
	public ResponseEntity<PrivilegeEntity> saveOrUpdatePrivilege(
			@ApiParam("The PrivilegeEntity to create or update.")
			@RequestBody PrivilegeEntity privilegeEntity
	) {
		// % protected region % [Add any logic before save here] off begin
		// % protected region % [Add any logic before save here] end

		privilegeEntity = privilegeService.save(privilegeEntity);

		return new ResponseEntity<>(privilegeEntity, HttpStatus.OK);
	}

	/**
	 * Update the given Privilege. If the entity has an id it will be updated, if not it will be created.
	 * The appropriate status codes will be set.
	 *
	 * @param privilegeEntity The entity to save or update
	 */
	@ApiOperation(
			value = "Create a Privilege if id not exists. Update otherwise.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@PreAuthorize("hasPermission('PrivilegeEntity', 'create') or hasPermission('PrivilegeEntity', 'update')")
	@PutMapping
	public ResponseEntity<PrivilegeEntity> updatePrivilege(
			@ApiParam("The PrivilegeEntity to create or update.")
			@RequestBody PrivilegeEntity privilegeEntity
	) {
		// % protected region % [Add any logic before save here] off begin
		// % protected region % [Add any logic before save here] end

		privilegeEntity = privilegeService.save(privilegeEntity);

		return new ResponseEntity<>(privilegeEntity, HttpStatus.OK);
	}

	/**
	 * Delete the Privilege that has the same id as the given id.
	 *
	 * @param id The id of the PrivilegeEntity to be deleted
	 * @return void HTTP status code will be set on success
	 */
	// % protected region % [Customise the security config here for the delete endpoint] off begin
	// % protected region % [Customise the security config here for the delete endpoint] end
	@ApiOperation(
			value = "Delete a single Privilege as defined by the id provided.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@PreAuthorize("hasPermission('PrivilegeEntity', 'delete')")
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(
			@ApiParam("The UUID of the Privilege to delete.")
			@PathVariable(value="id") UUID id
	) {
		// % protected region % [Add any additional logic before deleting the given entity] off begin
		// % protected region % [Add any additional logic before deleting the given entity] end

		privilegeService.deleteById(id);

		return new ResponseEntity<>(HttpStatus.OK);
	}

	// % protected region % [Add any additional endpoints here] off begin
	// % protected region % [Add any additional endpoints here] end
}
