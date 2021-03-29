import { Component, ElementRef, ViewChild } from '@angular/core';
import { Color, PaperScope, Path, Point, Project } from 'paper/dist/paper-core';

@Component({
  selector: 'svg-painter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('canvasElement', { static: true })
  public canvasElement: ElementRef;
  title = 'app';

  public ngOnInit() {
    const scope = new PaperScope();
    const project = new Project(this.canvasElement.nativeElement);
    var myPath = new Path();
    myPath.strokeColor = new Color('black');
    myPath.add(new Point(0, 0));
    myPath.add(new Point(100, 50));
    project.activeLayer.addChild(myPath);
  }
}
