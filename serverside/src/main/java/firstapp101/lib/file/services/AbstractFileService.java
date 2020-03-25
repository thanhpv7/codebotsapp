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
package firstapp101.lib.file.services;

import firstapp101.lib.file.models.FileEntity;
import firstapp101.lib.file.repositories.FileRepository;
import lombok.NonNull;

import java.util.UUID;
import java.util.Collection;
import java.util.stream.Collectors;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base service for file-related operations. By default this service offers CRUD operations on an arbitrary file against
 * an underlying storage solution, which means that it operates and guarantees the same thing regardless of whether the
 * file is on AWS S3 or local storage.
 */
public abstract class AbstractFileService<E extends FileEntity> {

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	protected final FileRepository fileRepository;

	protected AbstractFileService(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			FileRepository fileRepository
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.fileRepository = fileRepository;

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * Given a file, upload this file to the underlying storage solution.
	 *
	 * @param file the file to be uploaded
	 */
	abstract public E upload(@NonNull E file);

	/**
	 * Similar to {@link AbstractFileService#upload} but for bulk upload.
	 *
	 * @param files the files to be uploaded
	 */
	public Collection<E> uploadMultiple(@NonNull Collection<E> files) {
		// % protected region % [Add any additional logic for uploadMultiple before uploading the files here] off begin
		// % protected region % [Add any additional logic for uploadMultiple before uploading the files here] end

		Collection<E> uploadedFiles = files.stream().map(this::upload).collect(Collectors.toList());

		// % protected region % [Add any additional logic for uploadMultiple before returning the  uploaded files here] off begin
		// % protected region % [Add any additional logic for uploadMultiple before returning the  uploaded files here] end

		return uploadedFiles;
	}


	/**
	 * Given an ID, download the file with the given ID.
	 *
	 * @param id the id of the file to be downloaded
	 * @return the file with the same id as the one provided
	 */
	abstract public E download(@NonNull UUID id);

	/**
	 * Given an ID, delete the file from the storage.
	 *
	 * @param name the name of the file to be deleted
	 */
	abstract public void delete(@NonNull String name);

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}

