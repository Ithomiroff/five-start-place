import { FC, PropsWithChildren, ReactNode } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log(ReactTooltip.rebuild);

type Props = {
  id: string;
  content: string;
};

const Tooltip: FC<PropsWithChildren<Props>> = ({ children, content, id }) => (
  <ReactTooltip
    id={id}
    content={content}
  >
    {children}
  </ReactTooltip>
);

export { Tooltip };
