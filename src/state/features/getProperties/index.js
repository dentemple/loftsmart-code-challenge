/* types */
export const FETCH_PROPERTIES_REQUEST = 'FETCH_PROPERTIES_REQUEST';
export const FETCH_PROPERTIES_RECEIVE = 'FETCH_PROPERTIES_RECEIVE';
export const FETCH_PROPERTIES_FAILURE = 'FETCH_PROPERTIES_FAILURE';

/* actions */
export const requestProperties = () => ({
  type: FETCH_PROPERTIES_REQUEST
});

export const receiveProperties = (json, receivedAt = Date.now()) => ({
  type: FETCH_PROPERTIES_RECEIVE,
  properties: json.results[0].hits,
  receivedAt
});

export const receiveError = (error, receivedAt = Date.now()) => ({
  type: FETCH_PROPERTIES_FAILURE,
  error,
  receivedAt
});

export const populateProperties = () => dispatch => {
  dispatch(requestProperties());

  const url = `https://api.myjson.com/bins/afb2y`;

  return fetch(url)
    .then(
      res => res.json(),
      err => dispatch(receiveError(`An error has occured.\n\n${err}`))
    )
    .then(json => dispatch(receiveProperties(json)));
};

/* state */
export const initialState = {
  isFetching: false,
  properties: null,
  error: null,
  lastReceivedAt: null,
  lastReceiveJson: null,
  lastReceiveError: null
};

/* reducers */
export default function properties(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_PROPERTIES_RECEIVE:
      return {
        ...state,
        isFetching: false,
        error: null,
        properties: action.properties,
        lastReceivedAt: action.receivedAt,
        lastReceiveJson: action.receivedAt
      };

    case FETCH_PROPERTIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        lastReceivedAt: action.receivedAt,
        lastReceiveError: action.receivedAt
      };

    default:
      return state;
  }
}

/* selectors */
export const getPropertiesFromState = state => state.properties;
