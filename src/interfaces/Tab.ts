import { AnyAction } from 'redux';

export interface ITabProps {
  tabId: number;
  title: string;
  isInactive: boolean;
  onPress: (value: number) => AnyAction; 
}
