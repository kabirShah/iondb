import { Component } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Dashboard';
  Pages: any = [];
  tabPages: any =[];

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen) {
      this.initializeApp();
      this.sidePageMenu();
    }

    initializeApp(){
      this.platform.ready().then(()=>{
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
    sidePageMenu(){
      this.Pages = [
        {
          title: 'Dashboard',
          url: 'dashboard',
          icon: 'albums'
        }
        // ,
        // {
        //   title: 'Login',
        //   url: '/login',
        //   icon: 'person'
        // },
        // {
        //   title: 'Register',
        //   url: '/register',
        //   icon: 'person'
        // }
      ];
    }
}
