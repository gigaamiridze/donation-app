import { TextInputProps, KeyboardTypeOptions } from 'react-native';

export interface IInputProps extends TextInputProps {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
}
