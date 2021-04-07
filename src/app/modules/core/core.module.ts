import { NgModule } from '@angular/core';

/** Modules */
import { IconsModule } from './modules/icons/icons.module';

/** Pipes */
import { ArrayPipe } from './pipes/array.pipe';

/** Components */
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  declarations: [ArrayPipe, ThemeComponent],
  imports: [IconsModule],
  exports: [IconsModule, ArrayPipe, ThemeComponent],
})
export class CoreModule {}
