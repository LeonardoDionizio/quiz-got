import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { CamelCasePipe } from './shared/camel-case.pipe';
import { DicasComponent } from './dicas/dicas.component';
import { PopoverModule } from 'ng2-popover';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent,
    CamelCasePipe,
    DicasComponent
  ],
  imports: [BrowserModule, PopoverModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
