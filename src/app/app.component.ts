import { Component } from '@angular/core';

/** Services */
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(public translate: TranslateService) {
		translate.addLangs(['en-US', 'uk-UA']);
		translate.setDefaultLang('en-US');

		const browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/uk|uk-UA/) ? 'uk-UA' : 'en-US');
	}
}
