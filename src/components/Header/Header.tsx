import React from 'react';
import {Appbar as RNPaperAppbar} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {styles} from './styles';

type AllRNAppbarProps = React.ComponentProps<typeof RNPaperAppbar>;
type RNAppbarProps = Omit<AllRNAppbarProps, 'children'>;
type IHeader = RNAppbarProps & {
  goToScreenLeftIcon?: () => void;
  goToScreenRightIcon?: () => void;
  headerTitle?: string;
  headerSubtitle?: string;
  leftIcon?: IconSource;
  rightIcon?: IconSource;
};

const Header = ({
  goToScreenLeftIcon,
  goToScreenRightIcon,
  headerTitle,
  headerSubtitle,
  leftIcon,
  rightIcon,
  ...otherProps
}: IHeader) => {
  return (
    <RNPaperAppbar.Header style={styles.header} {...otherProps}>
      <RNPaperAppbar.Action
        icon={leftIcon!}
        onPress={goToScreenLeftIcon}
        size={30}
      />
      <RNPaperAppbar.Content
        style={styles.headerContent}
        title={headerTitle}
        subtitle={headerSubtitle}
      />
      <RNPaperAppbar.Action
        icon={rightIcon!}
        onPress={goToScreenRightIcon}
        size={30}
      />
    </RNPaperAppbar.Header>
  );
};

export default Header;
