import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/** Services */
import { LocalStorageService } from '../../services';

/** Enums */
import { Theme } from '../../enums/theme.enum';

@Component({
	selector: 'theme',
	templateUrl: './theme.component.html',
	styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
	public readonly Theme = Theme;

	public checkedValue: Theme = Theme.light;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2,
		private LocalStorageService: LocalStorageService
	) {}

	public ngOnInit(): void {
		const theme = this.LocalStorageService.getItem('theme');

		if (theme) {
			this.renderer.addClass(this.document.body, theme);
			this.checkedValue = Theme[theme];
		}
	}

	public changeTheme(event): void {
		if (event.target.nodeName === 'INPUT') {
			this.renderer.removeClass(this.document.body, Theme.dark);
			this.renderer.removeClass(this.document.body, Theme.light);

			this.renderer.addClass(this.document.body, event.target.value);
			this.checkedValue = event.target.value;

			this.LocalStorageService.setItem('theme', event.target.value);
		}
	}
}
