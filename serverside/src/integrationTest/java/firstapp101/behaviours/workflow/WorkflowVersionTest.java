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
package firstapp101.behaviours.workflow;

import firstapp101.SpringTestConfiguration;
import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.entities.*;
import firstapp101.services.*;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SpringTestConfiguration.class)
@ActiveProfiles("test")
public class WorkflowVersionTest {
	@Autowired
	private WorkflowVersionService workflowVersionService;

	@Autowired
	private WorkflowService workflowService;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Test
	@DirtiesContext
	public void createNewWorkflowVersionWithoutWorkflowId_ShouldCreateNewWorkflow() {
		AnonymousHelper.runAnonymously(() -> {
			// % protected region % [Add any additional logic before main process of createNewWorkflowVersionWithoutWorkflowId_ShouldCreateNewWorkflow here] off begin
			// % protected region % [Add any additional logic before main process of createNewWorkflowVersionWithoutWorkflowId_ShouldCreateNewWorkflow here] end

			WorkflowVersionEntity workflowVersionEntity = WorkflowUtil.generatedWorkflowVersionWithoutReferences();

			Assert.assertNull(workflowVersionEntity.getWorkflow());
			Assert.assertNull(workflowVersionEntity.getWorkflowId());

			WorkflowVersionEntity savedEntity = this.workflowVersionService.create(workflowVersionEntity);
			Assert.assertNotNull(savedEntity.getWorkflow());
			Assert.assertNotNull(savedEntity.getWorkflowId());

			WorkflowEntity savedWorkflow = this.workflowService.findById(savedEntity.getWorkflow().getId()).orElseThrow();
			Assert.assertEquals(savedWorkflow.getName(), savedEntity.getWorkflowName());

			// % protected region % [Add any additional logic after main process of createNewWorkflowVersionWithoutWorkflowId_ShouldCreateNewWorkflow here] off begin
			// % protected region % [Add any additional logic after main process of createNewWorkflowVersionWithoutWorkflowId_ShouldCreateNewWorkflow here] end
		});
	}

	@Test
	@DirtiesContext
	public void createNewWorkflowVersionWithWorkflowId_ShouldNotCreateNewWorkflow() {
		AnonymousHelper.runAnonymously(() -> {
			// % protected region % [Add any additional logic before main process of createNewWorkflowVersionWithWorkflowId_ShouldNotCreateNewWorkflow here] off begin
			// % protected region % [Add any additional logic before main process of createNewWorkflowVersionWithWorkflowId_ShouldNotCreateNewWorkflow here] end

			WorkflowEntity workflowEntity = WorkflowUtil.generateWorkflow();
			workflowEntity = workflowService.create(workflowEntity);

			WorkflowVersionEntity workflowVersionEntity = WorkflowUtil.generateWorkflowVersion(workflowEntity);

			Assert.assertNotNull(workflowVersionEntity.getWorkflowId());

			WorkflowVersionEntity savedEntity = this.workflowVersionService.create(workflowVersionEntity);

			Assert.assertNotNull(savedEntity.getWorkflow());
			Assert.assertNotNull(savedEntity.getWorkflowId());

			// Should not update Workflow Entity or add new Workflow Entity
			Assert.assertEquals(savedEntity.getWorkflow().getId(), workflowEntity.getId());
			WorkflowEntity parentEntity = workflowService.findById(savedEntity.getWorkflow().getId()).orElseThrow();

			Assert.assertEquals(parentEntity.getName(), workflowEntity.getName());
			// TODO count is not working for h2 at the moment. Fix this later
			long numberOfWorkflow = this.workflowService.findAllWithPage(0, 10).size();
			Assert.assertEquals("Should not create new workflow to the database", 1, numberOfWorkflow);

			// % protected region % [Add any additional logic after main process of createNewWorkflowVersionWithWorkflowId_ShouldNotCreateNewWorkflow here] off begin
			// % protected region % [Add any additional logic after main process of createNewWorkflowVersionWithWorkflowId_ShouldNotCreateNewWorkflow here] end
		});
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}