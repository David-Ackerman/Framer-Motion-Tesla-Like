import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page = () => {
  const models = [
    'Model One',
    'Model Two',
    'Model Three',
    'Model Four',
    'Model Five',
    'Model Six',
    'Model Seven',
  ];
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((model) => (
            <ModelSection
              key={model}
              className="colored"
              modelName={model}
              overlayNode={
                <DefaultOverlayContent
                  label={model}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
