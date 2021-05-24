import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

/** Services */
import { StavesService, DrumMachineService } from './services';

/** Modules */
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';

/** Components */
import { DramMachineComponent } from './pages/dram-machine/dram-machine.component';
import { StavesComponent } from './components/staves/staves.component';
import { NoteComponent } from './components/note/note.component';
import { StaveComponent } from './components/stave/stave.component';
import { TransportComponent } from './components/transport/transport.component';
import { TransportBlankComponent } from './components/transport-blank/transport-blank.component';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
	declarations: [
		DramMachineComponent,
		StavesComponent,
		NoteComponent,
		StaveComponent,
		TransportComponent,
		TransportBlankComponent,
		ControlsComponent,
	],
	imports: [BrowserModule, CoreModule, DragDropModule, TranslateModule],
	providers: [StavesService, DrumMachineService],
	exports: [DramMachineComponent],
})
export class DrumMachineModule {}
