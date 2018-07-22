import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructore called!');
   }

   ngOnChanges(changes: SimpleChanges) {
     // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     // Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngoninit called!');
  }

  ngDoCheck() {
    console.log('Do check called!');
  }

  ngAfterContentInit() {
    console.log('Ng After Init called!');
  }

  ngAfterContentChecked() {
    console.log('Ng After Cntent checked called!');
  }

  ngAfterViewInit() {
    console.log('Ng After View Init called!');
  }

  ngAfterViewChecked() {
    console.log('Ng After View checked called!');
  }

  ngOnDestroy() {
    console.log('Ng on destroy called');
  }

}
