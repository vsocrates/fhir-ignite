import { FETCH_PREV_CARE_SUGGESTIONS_REQUEST, FETCH_PREV_CARE_SUGGESTIONS_SUCCESS, FETCH_PREV_CARE_SUGGESTIONS_FAILURE } from './PreventativeCareActions';

export function preventativeCare(state = {}, action) {
  switch(action.type){
    case FETCH_PREV_CARE_SUGGESTIONS_REQUEST:
      return Object.assign({}, state, {
        isFetchingPrevCareData: true,
      })
    case FETCH_PREV_CARE_SUGGESTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingPrevCareData:false,
        suggestions: action.prevCare,
        lastUpdated:action.receivedAt
      })
    case FETCH_PREV_CARE_SUGGESTIONS_FAILURE:
      return Object.assign({}, state, {
        isFetchingPrevCareData: false,
        failedFetchingPrevCareData: true,
        lastUpdated:action.receivedAt
    })
     default:
        return state
  }
}
