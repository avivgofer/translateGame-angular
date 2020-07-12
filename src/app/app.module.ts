import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import { MainWordComponent } from './game/board/body/main-word/main-word.component';
import { TranslatesListComponent } from './game/board/body/translates-list/translates-list.component';
import { TranslateLineComponent } from './game/board/body/translates-list/translate-line/translate-line.component';
import { LiveComponent } from './game/board/live/live.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BodyComponent } from './game/board/body/body.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    MainWordComponent,
    TranslatesListComponent,
    TranslateLineComponent,
    LiveComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
