import classNames, { Binding } from 'classnames/bind';

export const cn = (styles: Binding | undefined) => classNames.bind(styles);
