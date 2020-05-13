import { observable, action} from 'mobx';
import React from 'react';
import {observer} from 'mobx-react';
import { InputState, Input } from './input';

export class DemoState {
    @observable
    id = new InputState();

    @observable
    name = new InputState();
}

export const Demo: React.FC<{
    state:DemoState}>= observer(({state})=>{
        return<>
        <Input state ={state.id} />
        <Input state={state.name} />
        </>
    });
