import { Component } from '@angular/core';
import {FeedbackComponent} from '../../components/feedback-component/feedback-component'

@Component({
  selector: 'app-feedback-page',
  imports: [FeedbackComponent],
  templateUrl: './feedback-page.html',
  styleUrl: './feedback-page.css',
})
export class FeedbackPage {}
