import React, { ReactNode, RefObject } from 'react';

export type CarModel = {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: RefObject<HTMLElement>;
};

type ModelsContext = {
  wrapperRef: RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
};

export default React.createContext<ModelsContext>({} as ModelsContext);
