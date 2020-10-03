import React, { HTMLAttributes, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

export type Props = {
  modelName: string;
  overlayNode: React.ReactNode;
  children?: React.ReactNode;
};

type SectionProps = HTMLAttributes<HTMLDivElement> & Props;

const ModelSection = ({
  children,
  modelName,
  overlayNode,
  ...rest
}: SectionProps) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [modelName, overlayNode, sectionRef, registerModel]);
  return (
    <Container ref={sectionRef} {...rest}>
      {children}
    </Container>
  );
};

export default ModelSection;
