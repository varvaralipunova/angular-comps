import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-tab',
  templateUrl: './collections-tab.component.html',
  styleUrls: ['./collections-tab.component.css']
})
export class CollectionsTabComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed:true },
    { name: 'Jill', age: 26, job: 'Engineer', employed:false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed:true }
  ];
  headers = [
    {key:'employed', label:'Has a job?'},
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
