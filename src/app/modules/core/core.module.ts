import { NgModule } from '@angular/core';

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

@NgModule({
	declarations: [ArrayPipe, ThemeComponent, BtnComponent],
	imports: [IconsModule, TranslateModule],
	providers: [LocalStorageService],
	exports: [IconsModule, ArrayPipe, ThemeComponent, BtnComponent],
})
export class CoreModule {}
