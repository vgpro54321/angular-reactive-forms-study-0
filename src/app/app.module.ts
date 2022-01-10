import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { AlterEgoComponent } from './hero-form-reactive/alter-ego/alter-ego.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormReactiveComponent,
    AlterEgoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
