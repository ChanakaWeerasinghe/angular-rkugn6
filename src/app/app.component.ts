import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data="http://pg-test.tamhere.com/gateway/api-ipg/ipg/approved?PaymentId=8108638110993430";

  constructor()
  {
    this.data.split("?")
    var res = this.data.split(" ");
    console.log(this.data.split("=")[1]);
  }
}
