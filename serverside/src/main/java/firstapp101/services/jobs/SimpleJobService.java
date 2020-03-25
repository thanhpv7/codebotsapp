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

package firstapp101.services.jobs;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Service
@ConditionalOnProperty(name = "quartz.enabled")
@Slf4j
public class SimpleJobService implements JobService {

	// % protected region % [Autowire anything here as needed] off begin
	// % protected region % [Autowire anything here as needed] end

	public void executeJob() {
		// % protected region % [Add job execution logic here] off begin
		log.trace("Hello World");
		// % protected region % [Add job execution logic here] end
	}

	// % protected region % [Add additional methods here] off begin
	// % protected region % [Add additional methods here] end
}
