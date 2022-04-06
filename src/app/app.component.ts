import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '竹井 賢治', message: 'お疲れさまです！' },
  { name: '竹井 賢治', message: 'この間の件ですが、どうなりましたか？' },
  { name: '五十川 洋平', message: 'お疲れさまです！' }
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments = COMMENTS;

}
