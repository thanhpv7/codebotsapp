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

import com.graphql.spring.boot.test.GraphQLTestTemplate;
import firstapp101.SpringTestConfiguration;
import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.entities.*;
import firstapp101.services.*;
import org.hamcrest.collection.IsIterableContainingInAnyOrder;
import org.junit.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import java.util.List;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Testing for workflow state
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SpringTestConfiguration.class)
@ActiveProfiles("test")
public class WorkflowStateTest {

	@Autowired
	private WebApplicationContext context;

	@Autowired
	private WorkflowService workflowService;

	@Autowired
	private WorkflowVersionService workflowVersionService;

	@Autowired
	private WorkflowStateService workflowStateService;

	@Autowired
	private WorkflowTransitionService workflowTransitionService;

	@Autowired
	private GraphQLTestTemplate graphQLTestUtils;

	private MockMvc mvc;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Before
	public void setup() {
		// % protected region % [Add any additional logic for setup before the main body here] off begin
		// % protected region % [Add any additional logic for setup before the main body here] end

		mvc = MockMvcBuilders
				.webAppContextSetup(context)
				.apply(springSecurity())
				.build();

		// % protected region % [Add any additional logic for setup after the main body here] off begin
		// % protected region % [Add any additional logic for setup after the main body here] end
	}

	/**
	 * Test NextStates function in Workflow States
	 */
	@Test
	public void testWorkflowStateService_NextStates() {

		AnonymousHelper.runAnonymously(() -> {

			// Prepare Data. Creating Testing data in database
			WorkflowEntity testingWorkflow = WorkflowUtil.generateWorkflow();
			testingWorkflow = this.workflowService.create(testingWorkflow);

			WorkflowVersionEntity testingWorkflowVersion = WorkflowUtil.generateWorkflowVersion(testingWorkflow);
			testingWorkflowVersion = this.workflowVersionService.create(testingWorkflowVersion);

			WorkflowStateEntity rootState = WorkflowUtil.generatedWorkflowState(testingWorkflowVersion, true);
			rootState = this.workflowStateService.create(rootState);

			WorkflowStateEntity secondLevelState1 = WorkflowUtil.generatedWorkflowState(testingWorkflowVersion, false);
			secondLevelState1 = this.workflowStateService.create(secondLevelState1);

			WorkflowStateEntity secondLevelState2 = WorkflowUtil.generatedWorkflowState(testingWorkflowVersion, false);
			secondLevelState2 = this.workflowStateService.create(secondLevelState2);

			WorkflowStateEntity secondLevelState3 = WorkflowUtil.generatedWorkflowState(testingWorkflowVersion, false);
			secondLevelState3 = this.workflowStateService.create(secondLevelState3);

			WorkflowStateEntity thirdLevelState1 = WorkflowUtil.generatedWorkflowState(testingWorkflowVersion, false);
			thirdLevelState1 = this.workflowStateService.create(thirdLevelState1);

			// Root State Has No Outgoing States
			List<WorkflowStateEntity> nextStates = workflowStateService.nextState(rootState.getId().toString());
			Assert.assertEquals(nextStates.size(), 0);

			// Add Transition: root -> second1
			WorkflowTransitionEntity rootToSecondLevel1 = WorkflowUtil.generateWorkflowTransition(rootState, secondLevelState1);
			workflowTransitionService.create(rootToSecondLevel1);

			nextStates = workflowStateService.nextState(rootState.getId().toString());
			WorkflowUtil.checkStates(nextStates, secondLevelState1);

			// Add Transitions: root -> second2 and second -> third1
			WorkflowTransitionEntity rootToSecondLevel2 = WorkflowUtil.generateWorkflowTransition(rootState, secondLevelState2);
			workflowTransitionService.create(rootToSecondLevel2);

			WorkflowTransitionEntity secondLevel1ToThirdLevel1 = WorkflowUtil.generateWorkflowTransition(secondLevelState1, thirdLevelState1);
			workflowTransitionService.create(secondLevel1ToThirdLevel1);

			nextStates = workflowStateService.nextState(rootState.getId().toString());
			WorkflowUtil.checkStates(nextStates, secondLevelState1, secondLevelState2);

			List<WorkflowStateEntity> nextStatesFromSecond1 = workflowStateService.nextState(secondLevelState1.getId().toString());
			WorkflowStateEntity[] expectedStatesFromSecond1 = { thirdLevelState1 };
			WorkflowUtil.checkStates(nextStatesFromSecond1, thirdLevelState1);

			// % protected region % [Add any additional logic in testWorkflowStateService_NextStates here] off begin
			// % protected region % [Add any additional logic in testWorkflowStateService_NextStates here] end
		});
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}
