import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Services */
import { LocalStorageService } from './services';

/** Modules */
import { IconsModule } from './modules/icons/icons.module';
import { TranslateModule } from '@ngx-translate/core';

/** Pipes */
import { ArrayPipe } from './pipes/array.pipe';

/** Components */
import { ThemeComponent } from './components/theme/theme.component';
import { BtnComponent } from './components/btn/btn.component';
import { LanguageSelectionComponent } from './components/language-selection/language-selection.component';

@NgModule({
	declarations: [
		ArrayPipe,
		ThemeComponent,
		BtnComponent,
		LanguageSelectionComponent,
	],
	imports: [IconsModule, TranslateModule, BrowserModule],
	providers: [LocalStorageService],
	exports: [
		IconsModule,
		ArrayPipe,
		ThemeComponent,
		BtnComponent,
		LanguageSelectionComponent,
	],
})
export class CoreModule {}
