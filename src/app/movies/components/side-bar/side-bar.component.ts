import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieFormDialogComponent } from '@app/shared/components/movie-form-dialog/movie-form-dialog.component';
import { DataStoreService } from '@app/shared/services/services';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  categories: string[];

  constructor(public dialog: MatDialog,
    private dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    this.subs.add(
      this.dataStoreService.categoriesSubject.subscribe(
        (categories: string[]) => {
          this.categories = categories;
        }
      )
    );
  }

  openAddMovieForm() {
    this.dialog.open(MovieFormDialogComponent, {
      disableClose: true
    });
    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
