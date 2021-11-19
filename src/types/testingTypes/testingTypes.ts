import {RenderAPI} from '@testing-library/react-native';
import {ReactWrapper} from 'enzyme';

export type ReactWrapperType = ReactWrapper<
  any,
  Readonly<{}>,
  React.Component<{}, {}, any>
>;
export type RenderApiType = RenderAPI;
