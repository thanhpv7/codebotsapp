###
# @bot-written
# 
# WARNING AND NOTICE
# Any access, download, storage, and/or use of this source code is subject to the terms and conditions of the
# Full Software Licence as accepted by you before being granted access to this source code and other materials,
# the terms of which can be accessed on the Codebots website at https://codebots.com/full-software-licence. Any
# commercial use in contravention of the terms of the Full Software Licence may be pursued by Codebots through
# licence termination and further legal action, and be required to indemnify Codebots for any loss or damage,
# including interest and costs. You are deemed to have accepted the terms of the Full Software Licence on any
# access, download, storage, and/or use of this source code.
# 
# BOT WARNING
# This file is bot-written.
# Any changes out side of "protected regions" will be lost next time the bot makes any changes.
###

@botwritten @crudTile @create @tank @tank
Feature: Create Tank as admin user in Tank Crud Tile
	Scenario: Create Tank as admin user
		Given I navigate to the login page
		When I login with admin account
		And I should see the homepage
		Then I create references for crud tile Tank in page Tank
		And I navigate to "tank"
		When I click on create button in crud tile Tank in page Tank
		And I create a valid entity in crud tile Tank in page Tank
		Then I verify Tank list in page Tank