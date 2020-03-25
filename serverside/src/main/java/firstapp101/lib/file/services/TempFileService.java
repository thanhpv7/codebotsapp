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
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.regions.Region;
import lombok.NonNull;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.io.File;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.UUID;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * File service that specialises in local temporary file operations. Extending {@link AbstractFileService}, this service
 * provides CRUD operations against files that are stored locally in temporary files.
 */
@Service
@ConditionalOnMissingBean({Region.class, AWSCredentialsProvider.class})
public class TempFileService extends AbstractFileService<FileEntity> {

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Autowired
	public TempFileService(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			FileRepository fileRepository
	) {
		super(
				// % protected region % [Add any additional constructor arguments here] off begin
				// % protected region % [Add any additional constructor arguments here] end
				fileRepository
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public FileEntity upload(@NonNull FileEntity file) {
		try {
			// TODO: Need to find a way to uniquely identify a file for the user.
			File tmpFile = File.createTempFile(file.getName(), "");
			String fullContent = file.getContent();
			byte[] content = DatatypeConverter.parseBase64Binary(fullContent.substring(fullContent.indexOf(",") + 1));
			FileUtils.writeByteArrayToFile(tmpFile, content);
			return fileRepository.save(file);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	public FileEntity download(@NonNull UUID id) {
		throw new UnsupportedOperationException("Download temporary file is not implemented yet");
	}

	/**
	 * {@inheritDoc}
	 */
	public void delete(@NonNull String name) {
		throw new UnsupportedOperationException("Delete temporary file is not implemented yet");
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}

