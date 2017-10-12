import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  levels = {
    en: {
      title: "EN",
      proficiency: "100",
      strokeColor: "#50bd00"
    },
    de: {
      title: "DE",
      proficiency: "80",
      strokeColor: "#ff493b"
    },
    es: {
      title: "ES",
      proficiency: "60",
      strokeColor: "#0092ff"
    },
  }
}
