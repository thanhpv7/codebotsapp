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

@botwritten @crudTile @update @fish @fish
Feature: Update Fish as admin user in Fish Crud Tile
	Scenario: Update Fish as admin user
		Given I navigate to the login page
		 And I login with admin account
		Then I should see the homepage
		 And I create references for crud tile Fish in page Fish
		When I navigate to "fish"
		 And I create an "Fish" if not exists
		 And I update an existing entity in crud tile Fish of page Fish
		Then I verify Fish list in page Fish