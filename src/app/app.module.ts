import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Modules */
import { DrumMachineModule } from './modules/drum-machine/drum-machine.module';

/** Components */
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, DrumMachineModule, CoreModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
