import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Path } from 'src/app/domain/Path';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-path-overview',
  templateUrl: './path-overview.component.html',
  styleUrls: ['./path-overview.component.css']
})
export class PathOverviewComponent implements OnInit, OnDestroy {

  private subsc?: Subscription;
  private paths$: Path[] = [];
  path?: Path;

  constructor(private resourceSv: ResourcesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subsc = this.resourceSv.getPaths()
                    .subscribe(data => this.paths$ = data);

    let routeParams = this.route.snapshot.paramMap;
    let idFromPrams = Number(routeParams.get('id'));
    this.path = this.paths$.find(p => p.id === idFromPrams);
  }

  ngOnDestroy() {
    this.subsc?.unsubscribe();
  }

}
