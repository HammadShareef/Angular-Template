import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Agent} from '../agent';


import {AgentService} from '../agent.service';

@Component({
  selector: 'app-our-agent',
  templateUrl: './our-agent.component.html',
  styleUrls: ['./our-agent.component.css']
})
export class OurAgentComponent implements OnInit {
  agent: Agent;

  constructor( private route: ActivatedRoute,
    private agentService: AgentService,
    private location: Location) { }

  ngOnInit() {
    this.getAgencies();
  }
  getAgencies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.agentService.getAgencies(id)
      .subscribe(agent => this.agent = agent);
    }
}
