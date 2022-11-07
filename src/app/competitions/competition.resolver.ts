import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Competition } from '../models/competition';
import { CompetitionsService } from '../services/competitions.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionResolver implements Resolve<Competition> {

  constructor(private competitionsService: CompetitionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Competition> {
    return this.competitionsService.getCompetitionByCode(route.paramMap.get('code') as string);
  }
}
