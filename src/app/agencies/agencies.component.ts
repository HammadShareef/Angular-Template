import { Component, OnInit } from '@angular/core';
import {Agent} from '../agent';
import {AGENTS } from '../agentDetail';

import {AgentService} from '../agent.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
// private agent:[];
// agents = AGENTS;
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
