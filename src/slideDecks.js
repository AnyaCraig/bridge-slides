import {
    FAnatomyParameterSlideSet,
    FAnatomyReturnSlideSet,
    FPFilterSlideSet,
    FPMapSlideSet,
    immutabilitySlideSet,
    OrderOfOperationsSlideSet,
    FAnatomyPureSlideSet,
    ArrowSlideSet,
    PromisesSlideSet,
    FCallbackSlideset,
    reactComponentsIntroSlideSet,
    functionComponentSlideSet,
    classComponentSlideSet,
    reactPropsSlideSet,
    lifecycleSlideSet,
    reactStateSlideSet,
    reduxIntroSet,
    reduxThunksIntroSet,
  } from './slides';
  import { ReduceSlideSet } from './slides/functional-programming-reduce';
  

  // FUNCTIONAL PROGRAMMING
  const functionalProgrammingSlideList = [
    ...FAnatomyReturnSlideSet,
    ...FAnatomyParameterSlideSet,
    ...FAnatomyPureSlideSet,
    ...FCallbackSlideset,
    ...ArrowSlideSet,
    ...FPMapSlideSet,
    ...FPFilterSlideSet,
    ...ReduceSlideSet,
    ...OrderOfOperationsSlideSet,
    ...immutabilitySlideSet,
    ...PromisesSlideSet,
  ];

  // REACT
  const reactSlideList = [
    ...reactComponentsIntroSlideSet,
    ...functionComponentSlideSet,
    ...classComponentSlideSet,
    ...reactPropsSlideSet,
    ...lifecycleSlideSet,
    ...reactStateSlideSet,
    ...reduxIntroSet,
    ...reduxThunksIntroSet,
  ];

  export {
      functionalProgrammingSlideList,
      reactSlideList, 
  };
  