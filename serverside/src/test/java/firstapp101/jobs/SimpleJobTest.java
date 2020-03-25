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

package firstapp101.jobs;

import firstapp101.services.jobs.SimpleJobService;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.quartz.*;

/**
 * Unit Tests for the execution functions in the Quartz Job
 */
@Tag("SimpleJobTest")
public class SimpleJobTest {

	@InjectMocks
	@Spy
	SimpleJob simpleJob;

	@Spy
	SimpleJobService simpleJobService;

	@Mock
	JobExecutionContext jobExecutionContext;

	@BeforeEach
	void setup() {
		// % protected region % [Add any additional logic for setup before the main body here] off begin
		// % protected region % [Add any additional logic for setup before the main body here] end

		MockitoAnnotations.initMocks(this);

		// % protected region % [Add any additional logic for setup after the main body here] off begin
		// % protected region % [Add any additional logic for setup after the main body here] end
	}

	@AfterEach
	void tearDown() {
		// % protected region % [Add any additional logic for tearDown before the main body here] off begin
		// % protected region % [Add any additional logic for tearDown before the main body here] end

		// % protected region % [Add any additional logic for tearDown after the main body here] off begin
		// % protected region % [Add any additional logic for tearDown after the main body here] end
	}


	/**
	 * Test the execute function in the SimpleJob
	 * @throws JobExecutionException Exception be thrown when could not execute the simple job
	 */
	@Test
	public void testWhetherSimpleJobCouldExecute() throws JobExecutionException {

		simpleJob.execute(jobExecutionContext);
		Mockito.verify(simpleJob).execute(jobExecutionContext);

	}

	/**
	 * Test the executeJob function in the simpleJob Service
	 */
	@Test
	public void testJobService() {
		simpleJobService.executeJob();
		Mockito.verify(simpleJobService).executeJob();
	}


}
