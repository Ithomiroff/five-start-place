import { FC, PropsWithChildren, ReactNode, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tooltip } from 'react-tooltip';
import styles from './AppTooltip.module.scss';

type Props = {
  content: ReactNode;
};

const AppTooltip: FC<PropsWithChildren<Props>> = ({ children, content }) => {
  const id = useRef<string>(uuidv4());

  return (
    <>
      <div
        className={styles.wrapper}
        id={`tt-${id.current}`}
      >
        {children}
      </div>
      <Tooltip
        className={styles.root}
        anchorSelect={`#tt-${id.current}`}
        noArrow={true}
        place="bottom"
      >
        {content}
      </Tooltip>
    </>
  );
};

export { AppTooltip };
