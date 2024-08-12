import {Component} from '@angular/core';
import {AnimationOptions, LottieComponent} from "ngx-lottie";
import {AnimationItem} from "lottie-web";

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  options: AnimationOptions = {
    path: '/anim/animation.json',
    loop: false,
    autoplay: false

  };
  private animationItem: AnimationItem;

  onAnimationCreated(animation: AnimationItem) {
    this.animationItem = animation;
  }

  playAnimation() {
    console.log('play animation');
    this.animationItem.goToAndPlay(0, true); // Joue l'animation depuis le début
  }

  stopAnimation(){
    this.animationItem.goToAndStop(0, true);
  }

}
