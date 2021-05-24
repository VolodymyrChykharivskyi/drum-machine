import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/** Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

/** Modules */
import { DrumMachineModule } from './modules/drum-machine/drum-machine.module';
import { CoreModule } from './modules/core/core.module';

/** Components */
import { AppComponent } from './app.component';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		DrumMachineModule,
		CoreModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
