import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  articles: Array<Object> = [
    {
      title: 'Восхождение на эльбрус ',
      htmlContent: '<p>Привет , как дела , <b>у</b> меня <i>все</i> хорошо</p>',
      creator: 'Dmitry Tsarev',
      section: "Инф безопасность"
    },
    {
      title: 'Восхождение на эльбрус ',
      htmlContent: '<p>Привет , как дела , <b>у</b> меня <i>все</i> хорошо</p>',
      creator: 'Dmitry Tsarev',
      section: "IT"
    },
    {
      title: 'Восхождение на эльбрус ',
      htmlContent: '<p>Привет , как дела , <b>у</b> меня <i>все</i> хорошо</p>',
      creator: 'Dmitry Tsarev',
      section: "WOWOW "
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
