import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import defaultSetReducer from './utils/default-set-reducer';

import { fhirPatientData, fhirObservationData, fhirEncounterData } from './services/fhir/FhirReducers';
import { envFactorsData } from './components/env/EnvReducers';

export const pastDate = defaultSetReducer('pastDate', new Date(2012, 7, 15));

const rootReducer = combineReducers({
  routing,
  fhirPatientData,
  fhirObservationData,
  envFactorsData,
  fhirEncounterData,
  pastDate
});

export default rootReducer;
