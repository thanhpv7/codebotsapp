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

import firstapp101.entities.AdminEntity;
import firstapp101.services.AdminService;
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
 * Controller used to handle all REST operations regarding Admin
 */
@Api(description = "Set of endpoints for Creating, Retrieving, Updating and Deleting of Admins.")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

	private final AdminService adminService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public AdminController(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			AdminService adminService
	) {
		this.adminService = adminService;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Return all the Admins.
	 *
	 * @return all the Admins
	 */
	@ApiOperation(
			value = "Returns a single page of Admins",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@PreAuthorize("hasPermission('AdminEntity', 'read')")
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<AdminEntity>> getAllWithPage(
			@ApiParam("The page to return.")
			@RequestParam(value = "page", defaultValue = "1", required = false) int page,
			@ApiParam("The size of the page to return.")
			@RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
	) {
		List<AdminEntity> admins = adminService.findAllWithPage((page > 0) ? page - 1 : page, pageSize);

		// % protected region % [Add any custom logic before returning the entities here] off begin
		// % protected region % [Add any custom logic before returning the entities here] end

		return new ResponseEntity<>(admins, HttpStatus.OK);
	}

	/**
	 * Return the Admin that has the same id as the given id.
	 *
	 * @param id      The id of the AdminEntity to be returned
	 * @param expands The expand string to be used when expanding
	 * @return the Admin that has the same id as the given id
	 */
	// % protected region % [Customise the security configuration here for the getWithId endpoint] off begin
	// % protected region % [Customise the security configuration here for the getWithId endpoint] end
	@ApiOperation(
			value = "Return a single Admin as defined by the id provided.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@ApiResponses(value = {
			@ApiResponse(code = 404, message = "Admin entity not found"),
	})
	@PreAuthorize("hasPermission('AdminEntity', 'read')")
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<AdminEntity> getById(
			@ApiParam("The UUID of the Admin to return.")
			@PathVariable("id") UUID id
	) {
		Optional<AdminEntity> adminEntity = adminService.findById(id);

		// % protected region % [Add any final logic before returning the entity here] off begin
		// % protected region % [Add any final logic before returning the entity here] end

		if (adminEntity.isPresent()) {
			return new ResponseEntity<>(adminEntity.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * Create/Update the given Admin. If the entity has an id it will be updated, if not it will be created.
	 * The appropriate status codes will be set.
	 *
	 * @param adminEntity The entity to save or update
	 */
	@ApiOperation(
			value = "Create a Admin if id not exists. Update otherwise.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "Successfully created the new Admin."),
			@ApiResponse(code = 409, message = "Failed to create the new Admin, duplicate record found")
	})
	@PreAuthorize("hasPermission('AdminEntity', 'create') or hasPermission('AdminEntity', 'update')")
	@PostMapping
	public ResponseEntity<AdminEntity> saveOrUpdateAdmin(
			@ApiParam("The AdminEntity to create or update.")
			@RequestBody AdminEntity adminEntity
	) {
		// % protected region % [Add any logic before save here] off begin
		// % protected region % [Add any logic before save here] end

		adminEntity = adminService.save(adminEntity);

		return new ResponseEntity<>(adminEntity, HttpStatus.OK);
	}

	/**
	 * Update the given Admin. If the entity has an id it will be updated, if not it will be created.
	 * The appropriate status codes will be set.
	 *
	 * @param adminEntity The entity to save or update
	 */
	@ApiOperation(
			value = "Create a Admin if id not exists. Update otherwise.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@PreAuthorize("hasPermission('AdminEntity', 'create') or hasPermission('AdminEntity', 'update')")
	@PutMapping
	public ResponseEntity<AdminEntity> updateAdmin(
			@ApiParam("The AdminEntity to create or update.")
			@RequestBody AdminEntity adminEntity
	) {
		// % protected region % [Add any logic before save here] off begin
		// % protected region % [Add any logic before save here] end

		adminEntity = adminService.save(adminEntity);

		return new ResponseEntity<>(adminEntity, HttpStatus.OK);
	}

	/**
	 * Delete the Admin that has the same id as the given id.
	 *
	 * @param id The id of the AdminEntity to be deleted
	 * @return void HTTP status code will be set on success
	 */
	// % protected region % [Customise the security config here for the delete endpoint] off begin
	// % protected region % [Customise the security config here for the delete endpoint] end
	@ApiOperation(
			value = "Delete a single Admin as defined by the id provided.",
			authorizations = {@Authorization(value = "bearerToken")}
	)
	@PreAuthorize("hasPermission('AdminEntity', 'delete')")
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(
			@ApiParam("The UUID of the Admin to delete.")
			@PathVariable(value="id") UUID id
	) {
		// % protected region % [Add any additional logic before deleting the given entity] off begin
		// % protected region % [Add any additional logic before deleting the given entity] end

		adminService.deleteById(id);

		return new ResponseEntity<>(HttpStatus.OK);
	}

	// % protected region % [Add any additional endpoints here] off begin
	// % protected region % [Add any additional endpoints here] end
}
