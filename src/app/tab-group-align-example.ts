import { Component } from '@angular/core';

/**
 * @title Tab group with aligned labels
 */
@Component({
  selector: 'tab-group-align-example',
  templateUrl: 'tab-group-align-example.html',
  styleUrls: ['tab-group-align-example.scss'],
})
export class TabGroupAlignExample {
  tabs = [...Array(5).keys()].map((i) => {
    const tab = { label: `Label #${i}`, content: `Content #${i}` };
    console.log(tab);
    return tab;
  });

  constructor() {}
}
