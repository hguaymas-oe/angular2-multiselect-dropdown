import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './views/clickOutsideDisabled.html'
})
export class ClickOutsideDisabled implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea", "published": false },
      { "id": 6, "itemName": "Brazil" }
    ];

    this.selectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];

    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      limitSelection: 2,
      closeOnClickOutside: false,
      enabled: 'published'
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  onClickDisabledItem(item: any) {
    console.log('disabled item', item);
  }

  cssgist: boolean = false;
  title: string = "Click Ouside Disabled";
  tsgist: string = "CuppaLabs/70667b7d4dd4270bb290685e036a379a";
  htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
  tstitle: string = "clickOutsideDisabled.ts"
  htmltitle: string = "clickOutsideDisabled.html";
}
