import { Component } from '@angular/core';

/** Services */
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'language-selection',
	templateUrl: './language-selection.component.html',
	styleUrls: ['./language-selection.component.scss'],
})
export class LanguageSelectionComponent {
	constructor(public translate: TranslateService) {
		translate.addLangs(['en-US', 'uk-UA']);
		translate.setDefaultLang('en-US');

		const browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/uk|uk-UA/) ? 'uk-UA' : 'en-US');
	}
}
