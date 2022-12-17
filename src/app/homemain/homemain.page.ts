import { AfterContentChecked, Component, Input, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-homemain',
  templateUrl: './homemain.page.html',
  styleUrls: ['./homemain.page.scss']
})
export class HomemainPage implements AfterContentChecked {

  slideOpts = {
    slidesPreview: 1.5,
    centeredSlides:true,
    loop:true,
    spaceBetwee:10,
    initialSlide: 1,
    speed: 400
  };
  constructor() {

   }

  ngAfterContentChecked() {
    // if(this.swiper){
    //   this.swiper.updateSwiper({});
    // }
  }
}
