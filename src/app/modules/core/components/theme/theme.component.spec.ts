import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageService } from '../../services';

import { ThemeComponent } from './theme.component';

import {TranslatePipe, TranslateService} from '@ngx-translate/core';

describe('ThemeComponent', () => {
	let component: ThemeComponent;
	let fixture: ComponentFixture<ThemeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [
				{ provide: LocalStorageService, useValue: LocalStorageService },
				{ provide: TranslateService, useValue: TranslateService },
			],
			declarations: [ThemeComponent, TranslatePipe],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ThemeComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
