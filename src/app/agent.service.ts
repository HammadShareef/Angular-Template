import { Injectable } from '@angular/core';
import {Agent} from './agent';
import {AGENTS} from './agentDetail';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {



  constructor() { }
  getAgent(): Observable<Agent[]> {
    return of(AGENTS);
  }

  getAgencies(id: number): Observable<Agent> {
    // TODO: send the message _after_ fetching the hero
    return of(AGENTS.find(agent => agent.id === id));
  }
}

