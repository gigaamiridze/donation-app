export interface IButtonProps {
  title: string;
  isDisabled?: boolean;
  onPress?: () => void;
}

export interface IBackButtonProps {
  onPress: () => void;
}
