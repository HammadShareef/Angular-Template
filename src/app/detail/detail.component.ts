import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AgentService} from '../agent.service';
import {Agent} from '../agent';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
agent: Agent;

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getAgencies();
  }
  getAgencies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.agentService.getAgencies(id)
      .subscribe(agent => this.agent = agent);
  }

}
