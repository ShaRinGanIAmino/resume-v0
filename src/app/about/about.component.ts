import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-about',
  imports: [PanelModule, GalleriaModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  images: any[] = [
    { itemImageSrc: '/images/img1.png', alt: 'Image 1' },
    { itemImageSrc: '/images/img2.png', alt: 'Image 2' },
    { itemImageSrc: '/images/img3.png', alt: 'Image 3' },
    { itemImageSrc: '/images/img4.png', alt: 'Image 4' },
    { itemImageSrc: '/images/img5.png', alt: 'Image 5' },
    { itemImageSrc: '/images/img6.png', alt: 'Image 6' },
    { itemImageSrc: '/images/img7.png', alt: 'Image 7' },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];
}
