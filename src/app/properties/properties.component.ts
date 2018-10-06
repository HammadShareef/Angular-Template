import { Component, OnInit } from '@angular/core';
import {Agent} from '../agent';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AgentService} from '../agent.service';
import {AGENTS } from '../agentDetail';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
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
