import { Component, ElementRef, NgZone } from '@angular/core';
import Handsontable from 'handsontable';
import { HotRegisterer } from 'angular-handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Communication between hooks and component</h1>
      <p><a md-raised-button routerLink="/quickstart">Przygotuj projekt według kroków 1-3 w QuickStart.</a></p>
      
      <h2>Module</h2>
      <p>Oprócz wrappera dodaj do głównego modułu <code>FormModule</code> by obsłużyć <code>ngModel</code>.</p>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      
      <h2>Component</h2>
      <p>Oprócz zdefiniowania zmiennych potrzebnych do interakcji, potrzebujesz również dodać <code>HotRegisterer</code>.
        Dzięki niemu jest możliwe rejestrowanie i odwoływanie się bezpośrednio do instancji Handsontable.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>

      <h2>Template</h2>
      <p>Tak podpięty hook wykona się po odpowiedniej akcji w Handsontable. Jako kontekst zachowuje instancję komponentu Angular.
        Dla hooków, które zwracają wartości po wykonaniu, dostępny jest także argument <code>$event</code>,
        który zawiera sześcioelementową tablicę.</p>
      <div class="infobox infobox-info">
        <p>Tylko hooki zdefiniowane wewnątrz obiektu <code>settings</code> mogą zwracać wartość <code>false</code></p>
      </div>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>
      <h2>Result</h2>
      <p>
        <md-input-container>
          <input mdInput placeholder="column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">
        </md-input-container>
        <md-input-container>
          <input mdInput placeholder="row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">
        </md-input-container>
        <md-input-container>
          <input mdInput placeholder="new value" (input)="changeValue($event)" [(ngModel)]="newValue">
        </md-input-container>
      </p>
      <hot-table width="300" height="200" hotId="hotInstance"
        (afterSelectionEnd)="syncSelection()"
        [outsideClickDeselects]="false" 
        [data]="data"></hot-table>

      <h2>Następne kroki</h2>
        <p><a md-raised-button routerLink="/examples/remote-data">Asynchroniczne ładowanie danych.</a></p>
        <p><a md-raised-button href="https://docs.handsontable.com/Options.html" target="_blank">Opcje dostępne do zdefiniowania w Handsontable.
          ${octicons['link-external'].toSVG()}</a></p>
    </div>
  `
})
export class ExHooksComponent {
  instance: string = "hotInstance";
  data: any[] = Handsontable.helper.createSpreadsheetData(10, 10);
  coordX: string;
  coordY: string;
  newValue: string;

  constructor(private _ngZone: NgZone, private _hotRegisterer: HotRegisterer) {}

  selectCell($event) {
    const x = parseInt(this.coordX, 10);
    const y = parseInt(this.coordY, 10);
    const hot = this._hotRegisterer.getInstance(this.instance);

    if (isNaN(x) || isNaN(y)) {
      hot.deselectCell();
      return false;
    }

    if (hot.selectCell(y, x)) {
      $event.target.focus();
      
    } else {
      hot.deselectCell();
    }

    hot.unlisten();
  }

  changeValue($event) {
    const x = parseInt(this.coordX, 10);
    const y = parseInt(this.coordY, 10);
    
    if (isNaN(x) || isNaN(y)) {
      return false;
    }

    const hot = this._hotRegisterer.getInstance(this.instance);

    hot.setDataAtCell(y, x, $event.target.value);
  }

  syncSelection($event) {
    const hot = this._hotRegisterer.getInstance(this.instance);
    [this.coordY, this.coordX] = hot.getSelected();
    const x = parseInt(this.coordX, 10);
    const y = parseInt(this.coordY, 10);

    this.newValue = hot.getDataAtCell(y, x);
  }

  examples: string[] = [
    [
      `import { BrowserModule } from '@angular/platform-browser';`,
      `import { NgModule } from '@angular/core';`,
      `import { FormsModule } from '@angular/forms';`,
      `import { AppComponent } from './app.component';`,
      `import { HotTableModule } from 'angular-handsontable';`,
      ``,
      `@NgModule({`,
      `  declarations: [`,
      `    AppComponent`,
      `  ],`,
      `  imports: [`,
      `    BrowserModule,`,
      `    FormsModule,`,
      `    HotTableModule`,
      `  ],`,
      `  providers: [],`,
      `  bootstrap: [AppComponent]`,
      `})`,
      `export class AppModule { }`,
    ].join('\n'),
    [
      `import { Component } from '@angular/core';`,
      `import { HotRegisterer } from 'angular-handsontable';`,
      ``,
      `@Component({`,
      `  selector: 'app-root',`,
      `  templateUrl: './app.component.html',`,
      `  styleUrls: ['./app.component.css']`,
      `})`,
      `export class AppComponent {`,
      `  instance: string = "hotInstance";`,
      `  coordX: string;`,
      `  coordY: string;`,
      `  newValue: string;`,
      ``,
      `  constructor(private _hotRegisterer: HotRegisterer) {}`,
      ``,
      `  selectCell($event) {`,
      `    const x = parseInt(this.coordX, 10);`,
      `    const y = parseInt(this.coordY, 10);`,
      `    const hot = this._hotRegisterer.getInstance(this.instance);`,
      ``,
      `    if (isNaN(x) || isNaN(y)) {`,
      `      hot.deselectCell();`,
      `      return false;`,
      `    }`,
      ``,
      `    if (hot.selectCell(y, x)) {`,
      `      $event.target.focus();`,
      ``,
      `    } else {`,
      `      hot.deselectCell();`,
      `    }`,
      `  `,
      `    hot.unlisten();`,
      `  }`,
      ``,
      `  changeValue($event) {`,
      `    const x = parseInt(this.coordX, 10);`,
      `    const y = parseInt(this.coordY, 10);`,
      ``,
      `    if (isNaN(x) || isNaN(y)) {`,
      `      return false;`,
      `    }`,
      ``,
      `    const hot = this._hotRegisterer.getInstance(this.instance);`,
      ``,
      `    hot.setDataAtCell(y, x, $event.target.value);`,
      `  }`,
      ``,
      `  syncSelection() {`,
      `    const hot = this._hotRegisterer.getInstance(this.instance);`,
      `    [this.coordY, this.coordX] = hot.getSelected();`,
      `    const x = parseInt(this.coordX, 10);`,
      `    const y = parseInt(this.coordY, 10);`,
      ``,
      `    this.newValue = hot.getDataAtCell(y, x);`,
      ` }`,
      `}`,
    ].join('\n'),
    [
      `<input placeholder="column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">`,
      `<input placeholder="row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">`,
      `<input placeholder="new value" (input)="changeValue($event)" [(ngModel)]="newValue">`,
      ``,
      `<hot-table width="300" height="200"`,
      `  (afterSelectionEnd)="syncSelection()"`,
      `  [outsideClickDeselects]="false"`,
      `  hotId="hotInstance"></hot-table>`,
    ].join('\n'),
  ];
}