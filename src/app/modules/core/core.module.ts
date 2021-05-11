import { NgModule } from '@angular/core';

/** Modules */
import { IconsModule } from './modules/icons/icons.module';

/** Pipes */
import { ArrayPipe } from './pipes/array.pipe';

/** Components */
import { ThemeComponent } from './components/theme/theme.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [ArrayPipe, ThemeComponent, BtnComponent],
  imports: [IconsModule],
  exports: [IconsModule, ArrayPipe, ThemeComponent, BtnComponent],
})
export class CoreModule {}
