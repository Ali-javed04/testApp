import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {
      Documnets:'Lorem IpsumLorem Ipsum	',
      Numero:123455,
      Type:'lorem apsum',
      Date:'04/05/21',
      Adjoute:'Lorem Ipsum'
    },
    {
      Documnets:'Lorem IpsumLorem Ipsum	',
      Numero:123455,
      Type:'lorem apsum',
      Date:'04/05/21',
      Adjoute:'Lorem Ipsum'
    },

    {
      Documnets:'Lorem IpsumLorem Ipsum	',
      Numero:123455,
      Type:'lorem apsum',
      Date:'04/05/21',
      Adjoute:'Lorem Ipsum'
    },
    {
      Documnets:'Lorem IpsumLorem Ipsum	',
      Numero:123455,
      Type:'lorem apsum',
      Date:'04/05/21',
      Adjoute:'Lorem Ipsum'
    },
    {
      Documnets:'Lorem IpsumLorem Ipsum	',
      Numero:123455,
      Type:'lorem apsum',
      Date:'04/05/21',
      Adjoute:'Lorem Ipsum'
    },

  ]

}
