import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core';

@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.css']
})
export class NewDesignComponent implements OnInit {

  constructor(private gloabl: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.gloabl.CableBuilderNo = 0;
    this.router.navigateByUrl("/dashboard/general");
  }

}
