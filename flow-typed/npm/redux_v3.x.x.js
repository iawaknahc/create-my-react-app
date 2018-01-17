// flow-typed signature: ec7daead5cb4fec5ab25fedbedef29e8
// flow-typed version: 2c04631d20/redux_v3.x.x/flow_>=v0.55.x


declare module 'redux' {

  /*

    S = State
    A = Action
    D = Dispatch

  */

  declare export type PlainDispatch<A: { +type: $Subtype<string> }> = (action: A) => A;
  declare export type ThunkDispatch<S, A> = <T>(action: (dispatch: Dispatch<S, A>, getState: () => S) => T) => T;
  declare export type Dispatch<S, A> = PlainDispatch<A> & ThunkDispatch<S, A>;

  declare export type MiddlewareAPI<S, A, D = Dispatch<S, A>> = {
    dispatch: D;
    getState(): S;
  };

  declare export type Store<S, A, D = Dispatch<S, A>> = {
    // rewrite MiddlewareAPI members in order to get nicer error messages (intersections produce long messages)
    dispatch: D;
    getState(): S;
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: Reducer<S, A>): void
  };

  declare export type Reducer<S, A> = (state: S, action: A) => S;

  declare export type CombinedReducer<S, A> = (state: $Shape<S> & {} | void, action: A) => S;

  declare export type Middleware<S, A, D = Dispatch<S, A>> =
    (api: MiddlewareAPI<S, A, D>) =>
      (next: D) => D;

  declare export type StoreCreator<S, A, D = Dispatch<S, A>> = {
    (reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>;
    (reducer: Reducer<S, A>, preloadedState: S, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>;
  };

  declare export type StoreEnhancer<S, A, D = Dispatch<S, A>> = (next: StoreCreator<S, A, D>) => StoreCreator<S, A, D>;

  declare export function createStore<S, A, D>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>;
  declare export function createStore<S, A, D>(reducer: Reducer<S, A>, preloadedState: S, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>;

  declare export function applyMiddleware<S, A, D>(...middlewares: Array<Middleware<S, A, D>>): StoreEnhancer<S, A, D>;

  declare export type ActionCreator<A, B> = (...args: Array<B>) => A;
  declare export type ActionCreators<K, A> = { [key: K]: ActionCreator<A, any> };

  declare export function bindActionCreators<A, C: ActionCreator<A, any>, D>(actionCreator: C, dispatch: D): C;
  declare export function bindActionCreators<A, K, C: ActionCreators<K, A>, D>(actionCreators: C, dispatch: D): C;

  declare export function combineReducers<O: Object, A>(reducers: O): CombinedReducer<$ObjMap<O, <S>(r: Reducer<S, any>) => S>, A>;

  declare export var compose: $Compose;
}
