import { Component, OnInit, Input  } from '@angular/core';
import { TutorialService } from './../../services/tutorial.service';
import { map } from 'rxjs/operators';
import Tutorial from './../../models/tutorial.model';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  //template:'<table>  <thead>      <th>Name</th>      <th>Index</th>  </thead>  <tbody>      <tr *ngFor="let hero of heroes">          <td>{{hero.name}}</td>      </tr>  </tbody></table>  ',  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

}
