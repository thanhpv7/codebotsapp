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

import firstapp101.entities.*;
import net.andreinc.mockneat.MockNeat;
import org.junit.Assert;
import java.util.List;
import org.hamcrest.collection.IsIterableContainingInAnyOrder;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

public class WorkflowUtil {
	
	/**
	 * Generate Testing Data for Workflow
	 */
	public static WorkflowEntity generateWorkflow() {

		MockNeat mockNeat = MockNeat.threadLocal();

		WorkflowEntity workflowEntity = new WorkflowEntity();
		workflowEntity.setName(mockNeat.strings().get());
		// % protected region % [Add any additional logci before return workflowEntity here] off begin
		// % protected region % [Add any additional logci before return workflowEntity here] end
		
		return workflowEntity;
	}

	/**
	 * Generate Testing Data for Workflow Version
	 */
	public static WorkflowVersionEntity generatedWorkflowVersionWithoutReferences() {
		MockNeat mockNeat = MockNeat.threadLocal();
		WorkflowVersionEntity workflowVersionEntity = new WorkflowVersionEntity();
		workflowVersionEntity.setWorkflowName(mockNeat.strings().get());
		workflowVersionEntity.setWorkflowDescription(mockNeat.strings().get());

		// % protected region % [Add any additional logic before return generatedWorkflowVersionWithoutReferences here] off begin
		// % protected region % [Add any additional logic before return generatedWorkflowVersionWithoutReferences here] end

		return workflowVersionEntity;
	}

	/**
	 * Generate Testing Data for Workflow Version
	 */
	public static WorkflowVersionEntity generateWorkflowVersion(WorkflowEntity workflowEntity) {
		
		WorkflowVersionEntity workflowVersionEntity = WorkflowUtil.generatedWorkflowVersionWithoutReferences();
		workflowVersionEntity.setWorkflowId(workflowEntity.getId());
		workflowVersionEntity.setVersionNumber(workflowEntity.getVersions().size() + 1);
		
		// % protected region % [Add any additional logic before return workflowVersionEntity here] off begin
		// % protected region % [Add any additional logic before return workflowVersionEntity here] end

		return workflowVersionEntity;
	}

	/**
	 * Generate Testing Data for State
	 */
	public static WorkflowStateEntity generatedWorkflowState(WorkflowVersionEntity workflowVersion, boolean isStartState) {
		MockNeat mockNeat = MockNeat.threadLocal();
		WorkflowStateEntity workflowState = new WorkflowStateEntity();
		workflowState.setStepName(mockNeat.strings().get());
		workflowState.setIsStartState(isStartState);
		workflowState.setStateDescription(mockNeat.strings().get());
		workflowState.setWorkflowVersionId(workflowVersion.getId());

		// % protected region % [Add any additional logic before return workflowStateEntity here] off begin
		// % protected region % [Add any additional logic before return workflowStateEntity here] end

		return workflowState;
	}

	/**
	 * Generate Testing Data for Transition
	 */
	public static WorkflowTransitionEntity generateWorkflowTransition(WorkflowStateEntity sourceState, WorkflowStateEntity targetState) {
		MockNeat mockNeat = MockNeat.threadLocal();

		WorkflowTransitionEntity workflowTransitionEntity = new WorkflowTransitionEntity();
		workflowTransitionEntity.setTransitionName(mockNeat.strings().get());
		workflowTransitionEntity.setSourceStateId(sourceState.getId());
		workflowTransitionEntity.setTargetStateId(targetState.getId());

		// % protected region % [Add any additional logic before return workflowTransitionEntity here] off begin
		// % protected region % [Add any additional logic before return workflowTransitionEntity here] end

		return workflowTransitionEntity;
	}

	/**
	 * Check whether the list of WorkflowState match exptected ones
	 * @param states Workflow States to check
	 * @param expectedStates Expected Workflow States
	 */
	public static void checkStates(List<WorkflowStateEntity> states, WorkflowStateEntity... expectedStates) {
		Assert.assertEquals(states.size(), expectedStates.length);
		Assert.assertThat(states, IsIterableContainingInAnyOrder.containsInAnyOrder(expectedStates));

		// % protected region % [Add any additional logic here to checkStates] off begin
		// % protected region % [Add any additional logic here to checkStates] end
	}
}