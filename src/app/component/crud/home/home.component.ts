import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  siteLanguage = 'English';
  getLang : any;
  languageList = [
    {code:'en', label: 'English'},
    {code: 'km', label: 'ភាសាខ្មែរ'},
  ]

  ngOnInit(): void {
  }
  goToPage(pageName:string):void{
    this.router.navigateByUrl(`/${pageName}`, {replaceUrl: true});
  }
  constructor (public translate: TranslateService , private router: Router) {

    translate.addLangs(['en','km']);
    // this.getLang = localStorage.getItem('lang')
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    const SelectLanguage = this.languageList
    .find((language) => language.code === lang)?.label.toString();
    if(SelectLanguage) {
      this.siteLanguage = SelectLanguage;
      this.translate.use(lang)
    }
   //localStorage.setItem('lang', lang);
  }
  stepParam() {
    this.router.navigate(['directive'], {queryParams: {part:'navbar', search: 'contact'}});
  }

}
