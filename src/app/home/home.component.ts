import { Component, OnInit } from '@angular/core';

import {Agent} from '../agent';
import {AGENTS } from '../agentDetail';

import {AgentService} from '../agent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AGENTS: Agent[];
constructor(private agentService: AgentService) {

}

  ngOnInit() { this.getAgent();
  }
  getAgent(): void {
    this.agentService.getAgent()
      .subscribe(heroes => this.AGENTS = AGENTS);
  }

}
