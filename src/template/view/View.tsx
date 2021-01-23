import React from 'react';
import {ViewProps} from 'interfaces/TemplateProps';

const View = (props: ViewProps) => {
  return <>{props.children}</>;
};

export default View;
