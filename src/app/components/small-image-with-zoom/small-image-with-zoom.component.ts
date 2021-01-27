import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-image-with-zoom',
  templateUrl: './small-image-with-zoom.component.html',
  styleUrls: ['./small-image-with-zoom.component.scss']
})
export class SmallImageWithZoomComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageSize = 40;

  constructor() { }

  ngOnInit(): void {
  }

  public showBigImage(event): void {
    const bigImg = event.path[1].querySelector('.big-image-hover');
    bigImg.classList.remove('d-none');
    const imageHeight = parseFloat(getComputedStyle(bigImg, null).height.replace('px', ''));
    bigImg.style.top = imageHeight / -2 + 24.5 + 'px';
  }

  public hideBigImage(event): void {
    const bigImg = event.path[1].querySelector('.big-image-hover');
    bigImg.classList.add('d-none');
  }

}
