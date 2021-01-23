import React from 'react';
import { useDispatch } from 'react-redux';
import * as appActions from 'actions/app.action';

/**
 * Make actions available
 */
export default function useAction() {
    const d = useDispatch();
    const actionFactory = (actionList: any) => Object
                            .keys(actionList)
                            .map((a: string) => actionList[a] = () => d(actionList[a]()))
    
    const actions = {
        app: actionFactory(appActions)
    }

    return actions;
}

