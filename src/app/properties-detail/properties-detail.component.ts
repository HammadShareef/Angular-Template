import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Agent} from '../agent';


import {AgentService} from '../agent.service';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.css']
})
export class PropertiesDetailComponent implements OnInit {
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
