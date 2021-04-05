import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StavesComponent } from './components/staves/staves.component';
import { NoteComponent } from './components/note/note.component';
import { StaveComponent } from './components/stave/stave.component';
import { TransportComponent } from './components/transport/transport.component';
import { TransportBlankComponent } from './components/transport-blank/transport-blank.component';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    StavesComponent,
    NoteComponent,
    StaveComponent,
    TransportComponent,
    TransportBlankComponent,
    ControlsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
