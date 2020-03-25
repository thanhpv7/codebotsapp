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
@bot
@login
Feature: Login

	Scenario: Login as normal Fishnatic user
		Given I navigate to the login page
		When I login with username "fishnatic@example.com" with password "password"
		Then I should see the homepage
		# % protected region % [Add additional steps for 'Login as normal Fishnatic user'] off begin
		# % protected region % [Add additional steps for 'Login as normal Fishnatic user'] end

	Scenario: Login as normal Admin user
		Given I navigate to the login page
		When I login with username "admin@example.com" with password "password"
		Then I should see the homepage
		# % protected region % [Add additional steps for 'Login as normal Admin user'] off begin
		# % protected region % [Add additional steps for 'Login as normal Admin user'] end

# % protected region % [Add additional scenarios for login feature] off begin
# % protected region % [Add additional scenarios for login feature] end

