//@ts-nocheck

import { Icon } from "@contentstack/venus-components";
import React from "react";

export const customTitle = (RTE) => {
    const CustomTitle = RTE('custom-title', () => ({
        title: 'Title',
        icon: <Icon style={{ padding: '0 6px' }} icon="SingleLineTextSmall" size="original" />,
        render: (props: any) => {
            return <custom-title style={ {fontSize: props.leaf['custom-title']}}>{props.children}</custom-title>
        },
        displayOn: ['toolbar'],
        elementType: ['text']
    }));

    CustomTitle.on('exec', (rte) => {
        if (!window.rte) {
            window.rte = rte;
        }
        rte.addMark('custom-title', 20);
        console.log(rte.getVariable('custom-title'));
        console.log("Hola");
    })

    return CustomTitle;
};