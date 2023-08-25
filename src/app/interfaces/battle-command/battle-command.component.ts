import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dp-battle-command',
  templateUrl: './battle-command.component.html',
  styleUrls: ['./battle-command.component.scss'],
})
export class BattleCommandComponent implements OnInit {
  @Input() label: string | undefined;

  constructor() {}

  ngOnInit() {}
}
