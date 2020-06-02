import { NavigationActions,StackActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}
function navigate(routeName, params) {
 // console.log(routeName);
  
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );

}
function replace(routeName, params) {
 
  const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName,params:params})],
  });
  navigator.dispatch(resetAction);

}


export default {
  navigate,
  replace,
  setTopLevelNavigator
};