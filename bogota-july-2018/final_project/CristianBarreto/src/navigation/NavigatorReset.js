/**
 * Navigator Reset
 * @flow
 */

// Node modules
import { NavigationActions } from 'react-navigation';

const resetAction = (route: string, params?: any): any =>

    NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({
                routeName: route,
                params: params || null
            })
        ]
    });

export default resetAction;