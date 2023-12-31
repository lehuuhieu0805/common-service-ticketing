import { Subjects } from '../enums';

export interface OrderCancelledEvent {
  subject: Subjects.ORDER_CANCELLED;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
