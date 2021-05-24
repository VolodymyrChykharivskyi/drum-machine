import { NgModule } from '@angular/core';
import {
	RiStopFill,
	RiPlayFill,
	RemixIconModule,
} from 'angular-remix-icon';

const icons = {
	RiStopFill,
	RiPlayFill,
};

@NgModule({
	imports: [RemixIconModule.configure(icons)],
	exports: [RemixIconModule],
})
export class IconsModule {}
