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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LogoutTileComponent} from './logout.tile.component';
import {LogoutTileModule} from './logout.tile.module';
import {provideMockStore} from '@ngrx/store/testing';
import {ToastrModule} from 'ngx-toastr';
import {By} from '@angular/platform-browser';
import {AuthenticationService} from '../../services/authentication/authentication.service';

class MockAuthenticationService {
	get isLoggedIn() {
		return true;
	}
}

describe('Testing Logout Tile Component for logged in user', () => {

	let fixture: ComponentFixture<LogoutTileComponent>;
	let logoutTileComponent: LogoutTileComponent;

	let authenticationService: AuthenticationService;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			imports: [
				LogoutTileModule,
			],
			providers: [
				{
					provide: AuthenticationService,
					useClass: MockAuthenticationService
				},
				provideMockStore()
			]
		}).compileComponents().then(() => {


			fixture = TestBed.createComponent(LogoutTileComponent);
			logoutTileComponent = fixture.debugElement.componentInstance;

			authenticationService = TestBed.get(AuthenticationService);
		});
	}));

	afterEach(() => {
		// Need to do this since for some reason the last component queried from the fixture will be rendered on the
		// browser
		if (fixture.nativeElement instanceof HTMLElement) {
			(fixture.nativeElement as HTMLElement).remove();
		}
	});

	it('Frontend page should have button to logout in side bar', () => {

		// Stimulate User logged in
		spyOnProperty(authenticationService, 'isLoggedIn').and.returnValue(true);
		fixture.detectChanges();

		const logoutButton = fixture.debugElement.query(By.css('a.icon-logout'));
		expect(logoutButton.nativeElement.attributes.href.value).toBe('/logout');
	});

});
