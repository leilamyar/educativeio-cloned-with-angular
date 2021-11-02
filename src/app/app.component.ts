import { Component,
  // ComponentFactoryResolver, ViewChild, ViewContainerRef,
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'educativeio-cloned-with-angular';

  doSmth(): void {
    console.log('Did smth!');
  }

  // @ViewChild('header', { read: ViewContainerRef }) headerContainer: ViewContainerRef | null = null;
  // constructor(private factoryResolver: ComponentFactoryResolver) { }


  // async lazyLoadHeader() {
  //   const { HeaderComponent } = await import('./header/header.component');
  //   const factory = this.factoryResolver.resolveComponentFactory(HeaderComponent);
  //   this.headerContainer?.createComponent(factory);
  // }
}
