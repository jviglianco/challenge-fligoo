import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from '../models/competition';
import { CompetitionsService } from '../services/competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  competitions!: Competition[];
  totalRecords!: number;

  constructor(private competitionsService: CompetitionsService,
              private router: Router) { }

  ngOnInit() {
    this.competitionsService.getCompetitions()
        .subscribe(response => {
          this.competitions = response.competitions;
          this.totalRecords = response.count;
        },
        error => {
          console.log(error);
        });
  }

  competitionDetail(competition: any){
    this.router.navigateByUrl(`competition-detail/${competition.code}`, { state: { competition: competition } });
  }
}
