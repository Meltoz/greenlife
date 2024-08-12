import {Injectable, OnDestroy} from "@angular/core";
import {ReplaySubject} from "rxjs";

@Injectable()
export abstract class DestroySub implements OnDestroy{
  destroyed$ = new ReplaySubject<boolean>();

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
