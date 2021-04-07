import { NgModule } from '@angular/core';
import {
  RiAncientGateFill,
  RiHome3Line,
  RemixIconModule,
} from 'angular-remix-icon';

const icons = {
  RiAncientGateFill,
  RiHome3Line,
};

@NgModule({
  imports: [RemixIconModule.configure(icons)],
  exports: [RemixIconModule],
})
export class IconsModule {}
